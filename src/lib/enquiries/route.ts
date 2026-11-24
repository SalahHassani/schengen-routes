import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { dispatchEnquiryEmails } from "@/lib/enquiries/email";
import {
  checkEnquiryRateLimit,
  extractClientIp,
  hashClientIdentifier,
} from "@/lib/enquiries/rate-limit";
import { generateEnquiryReference } from "@/lib/enquiries/reference";
import { enquirySubmissionSchema, mapZodErrors } from "@/lib/enquiries/validation";

const MAX_PAYLOAD_BYTES = 32 * 1024;

export async function POST(request: NextRequest) {
  try {
    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const parsedLength = Number.parseInt(contentLengthHeader, 10);
      if (Number.isFinite(parsedLength) && parsedLength > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { error: "Request payload exceeds the maximum allowed size." },
          { status: 413 }
        );
      }
    }

    const clientHash = hashClientIdentifier(extractClientIp(request.headers));
    const rateLimit = await checkEnquiryRateLimit(clientHash);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many enquiry requests. Please wait a few minutes or contact us via WhatsApp.",
          retryAfterSeconds: rateLimit.retryAfterSeconds,
        },
        {
          status: 429,
          headers: rateLimit.retryAfterSeconds
            ? { "Retry-After": String(rateLimit.retryAfterSeconds) }
            : undefined,
        }
      );
    }

    let rawBody: unknown;
    try {
      const textBody = await request.text();
      if (Buffer.byteLength(textBody, "utf8") > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { error: "Request payload exceeds the maximum allowed size." },
          { status: 413 }
        );
      }
      rawBody = JSON.parse(textBody);
    } catch {
      return NextResponse.json({ error: "Malformed JSON request body." }, { status: 400 });
    }

    if (typeof rawBody !== "object" || rawBody === null || Array.isArray(rawBody)) {
      return NextResponse.json({ error: "Request body must be a JSON object." }, { status: 400 });
    }

    const parsed = enquirySubmissionSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check your enquiry details and correct the highlighted fields.",
          fieldErrors: mapZodErrors(parsed.error),
        },
        { status: 422 }
      );
    }

    const { website, ...validatedData } = parsed.data;

    // Honeypot triggered: accept silently without storing spam or dispatching emails.
    if (website && website.trim().length > 0) {
      return NextResponse.json(
        {
          referenceNumber: generateEnquiryReference(),
          message: "Your enquiry has been received.",
        },
        { status: 201 }
      );
    }

    let createdEnquiry: {
      id: string;
      referenceNumber: string;
      service: string;
      subject: string;
      fullName: string;
      email: string;
      message: string;
      countryOfResidence: string | null;
      destinationCountry: string | null;
      preferredContact: string | null;
      createdAt: Date;
    } | null = null;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const referenceNumber = generateEnquiryReference();
      try {
        createdEnquiry = await prisma.enquiry.create({
          data: {
            referenceNumber,
            fullName: validatedData.fullName,
            email: validatedData.email,
            service: validatedData.service,
            subject: validatedData.subject,
            message: validatedData.message,
            countryOfResidence: validatedData.countryOfResidence ?? null,
            destinationCountry: validatedData.destinationCountry ?? null,
            preferredContact: validatedData.preferredContact ?? null,
            status: "NEW",
            privacyAcknowledged: validatedData.privacyAcknowledged,
          },
          select: {
            id: true,
            referenceNumber: true,
            service: true,
            subject: true,
            fullName: true,
            email: true,
            message: true,
            countryOfResidence: true,
            destinationCountry: true,
            preferredContact: true,
            createdAt: true,
          },
        });
        break;
      } catch (dbError) {
        const errorCode =
          typeof dbError === "object" && dbError !== null && "code" in dbError
            ? String((dbError as { code?: unknown }).code)
            : "";
        if (errorCode === "P2002" && attempt < 2) {
          continue;
        }
        console.error("[api/enquiries] Database persistence failed.", {
          code: errorCode || "DB_ERROR",
          attempt,
        });
        return NextResponse.json(
          {
            error:
              "We could not save your enquiry right now. Please try again shortly or reach out via WhatsApp or email.",
          },
          { status: 500 }
        );
      }
    }

    if (!createdEnquiry) {
      return NextResponse.json(
        {
          error:
            "We could not save your enquiry right now. Please try again shortly or reach out via WhatsApp or email.",
        },
        { status: 500 }
      );
    }

    // Stored durably first; email failures are logged safely and never delete or fail the stored enquiry.
    const emailResult = await dispatchEnquiryEmails({
      referenceNumber: createdEnquiry.referenceNumber,
      fullName: createdEnquiry.fullName,
      email: createdEnquiry.email,
      service: createdEnquiry.service,
      subject: createdEnquiry.subject,
      message: createdEnquiry.message,
      countryOfResidence: createdEnquiry.countryOfResidence,
      destinationCountry: createdEnquiry.destinationCountry,
      preferredContact: createdEnquiry.preferredContact,
      createdAt: createdEnquiry.createdAt,
    });

    return NextResponse.json(
      {
        referenceNumber: createdEnquiry.referenceNumber,
        service: createdEnquiry.service,
        submittedAt: createdEnquiry.createdAt.toISOString(),
        emailDispatch: {
          providerConfigured: emailResult.providerConfigured,
          businessNotified: emailResult.businessNotified,
          acknowledgementSent: emailResult.acknowledgementSent,
        },
        message: "Your enquiry has been received.",
      },
      { status: 201 }
    );
  } catch {
    console.error("[api/enquiries] Unexpected error handling enquiry submission.");
    return NextResponse.json(
      {
        error:
          "Something went wrong while processing your enquiry. Please try again or reach out via WhatsApp or email.",
      },
      { status: 500 }
    );
  }
}
