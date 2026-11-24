import { BRAND } from "@/lib/constants";

export interface StoredEnquiryNotificationPayload {
  referenceNumber: string;
  fullName: string;
  email: string;
  service: string;
  subject: string;
  message: string;
  countryOfResidence?: string | null;
  destinationCountry?: string | null;
  preferredContact?: string | null;
  createdAt: Date;
}

export interface EmailDispatchResult {
  businessNotified: boolean;
  acknowledgementSent: boolean;
  providerConfigured: boolean;
}

export interface EmailSendMessage {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export interface EmailProvider {
  send(message: EmailSendMessage): Promise<void>;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createFetchEmailProvider(apiKey: string): EmailProvider {
  return {
    async send(message: EmailSendMessage): Promise<void> {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: message.from,
          to: [message.to],
          ...(message.replyTo ? { reply_to: message.replyTo } : {}),
          subject: message.subject,
          text: message.text,
          html: message.html,
        }),
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        throw new Error(`Email provider responded with status ${response.status}`);
      }
    },
  };
}

export function buildBusinessNotificationEmail(
  payload: StoredEnquiryNotificationPayload,
  toEmail: string,
  fromEmail: string
): EmailSendMessage {
  const submittedIso = payload.createdAt.toISOString();
  const lines = [
    `New Enquiry Reference: ${payload.referenceNumber}`,
    `Submitted At: ${submittedIso}`,
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Service: ${payload.service}`,
    `Preferred Contact: ${payload.preferredContact || "Not specified"}`,
    `Country of Residence: ${payload.countryOfResidence || "Not specified"}`,
    `Destination Country: ${payload.destinationCountry || "Not specified"}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ];

  const html = `
    <h2>New ${escapeHtml(BRAND.name)} Enquiry — ${escapeHtml(payload.referenceNumber)}</h2>
    <p><strong>Submitted At:</strong> ${escapeHtml(submittedIso)}</p>
    <p><strong>Full Name:</strong> ${escapeHtml(payload.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
    <p><strong>Preferred Contact:</strong> ${escapeHtml(payload.preferredContact || "Not specified")}</p>
    <p><strong>Country of Residence:</strong> ${escapeHtml(payload.countryOfResidence || "Not specified")}</p>
    <p><strong>Destination Country:</strong> ${escapeHtml(payload.destinationCountry || "Not specified")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(payload.message)}</pre>
  `.trim();

  return {
    to: toEmail,
    from: fromEmail,
    replyTo: payload.email,
    subject: `[${BRAND.name}] New ${payload.service} Enquiry (${payload.referenceNumber})`,
    text: lines.join("\n"),
    html,
  };
}

export function buildVisitorAcknowledgementEmail(
  payload: StoredEnquiryNotificationPayload,
  fromEmail: string
): EmailSendMessage {
  const text = [
    `Hello ${payload.fullName},`,
    "",
    `Thank you for contacting ${BRAND.name}. We have received your ${payload.service} enquiry regarding "${payload.subject}".`,
    "",
    `Enquiry Reference Number: ${payload.referenceNumber}`,
    "Our team will review your message and respond using your selected or provided contact details.",
    "Please note that submitting an enquiry provides informational guidance only and does not guarantee university admission or visa approval.",
    "",
    `${BRAND.name} (${BRAND.tagline})`,
    `Email: ${BRAND.email} | WhatsApp: ${BRAND.phoneDisplay}`,
  ].join("\n");

  const html = `
    <p>Hello ${escapeHtml(payload.fullName)},</p>
    <p>Thank you for contacting <strong>${escapeHtml(BRAND.name)}</strong>. We have received your <strong>${escapeHtml(payload.service)}</strong> enquiry regarding <strong>${escapeHtml(payload.subject)}</strong>.</p>
    <p><strong>Enquiry Reference Number:</strong> ${escapeHtml(payload.referenceNumber)}</p>
    <p>Our team will review your message and follow up using your contact details.</p>
    <p><em>Please note: ${escapeHtml(BRAND.name)} provides informational guidance and does not guarantee university admission or visa outcomes.</em></p>
    <p>${escapeHtml(BRAND.name)} (${escapeHtml(BRAND.tagline)})<br />Email: ${escapeHtml(BRAND.email)} | WhatsApp: ${escapeHtml(BRAND.phoneDisplay)}</p>
  `.trim();

  return {
    to: payload.email,
    from: fromEmail,
    replyTo: BRAND.email,
    subject: `${BRAND.name} Enquiry Received — Reference ${payload.referenceNumber}`,
    text,
    html,
  };
}

export async function dispatchEnquiryEmails(
  payload: StoredEnquiryNotificationPayload,
  customProvider?: EmailProvider
): Promise<EmailDispatchResult> {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY?.trim();
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL?.trim();
  const toEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL?.trim() || BRAND.email;

  const provider =
    customProvider ?? (apiKey && fromEmail ? createFetchEmailProvider(apiKey) : null);

  if (!provider || !fromEmail) {
    console.info("[enquiry-email] Provider not configured; enquiry remains stored.", {
      referenceNumber: payload.referenceNumber,
      service: payload.service,
    });
    return {
      businessNotified: false,
      acknowledgementSent: false,
      providerConfigured: false,
    };
  }

  let businessNotified = false;
  let acknowledgementSent = false;

  try {
    await provider.send(buildBusinessNotificationEmail(payload, toEmail, fromEmail));
    businessNotified = true;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.warn("[enquiry-email] Business notification failed; enquiry remains stored.", {
      referenceNumber: payload.referenceNumber,
      reason: message,
    });
  }

  try {
    await provider.send(buildVisitorAcknowledgementEmail(payload, fromEmail));
    acknowledgementSent = true;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.warn("[enquiry-email] Visitor acknowledgement failed; enquiry remains stored.", {
      referenceNumber: payload.referenceNumber,
      reason: message,
    });
  }

  return {
    businessNotified,
    acknowledgementSent,
    providerConfigured: true,
  };
}
