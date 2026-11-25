"use client";

import { useRef, useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/constants";
import {
  ENQUIRY_SERVICES,
  PREFERRED_CONTACT_METHODS,
  type EnquiryService,
  type PreferredContactMethod,
} from "@/lib/enquiries/validation";

interface FormState {
  fullName: string;
  email: string;
  service: EnquiryService;
  subject: string;
  message: string;
  countryOfResidence: string;
  destinationCountry: string;
  preferredContact: "" | PreferredContactMethod;
  privacyAcknowledged: boolean;
  website: string;
}

interface SubmissionSuccess {
  referenceNumber: string;
  service: string;
  submittedAt: string;
  acknowledgementSent: boolean;
}

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  email: "",
  service: "Study",
  subject: "",
  message: "",
  countryOfResidence: "",
  destinationCountry: "",
  preferredContact: "",
  privacyAcknowledged: false,
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_FORM_STATE);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<SubmissionSuccess | null>(null);

  const statusRef = useRef<HTMLDivElement | null>(null);
  const submitLockRef = useRef(false);

  function validateClient(current: FormState): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!current.fullName.trim()) {
      errors.fullName = "Full name is required.";
    } else if (current.fullName.trim().length < 2) {
      errors.fullName = "Please enter at least 2 characters for your full name.";
    }

    if (!current.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!EMAIL_PATTERN.test(current.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!ENQUIRY_SERVICES.includes(current.service)) {
      errors.service = "Please select a valid service option.";
    }

    if (!current.subject.trim()) {
      errors.subject = "Subject is required.";
    } else if (current.subject.trim().length < 3) {
      errors.subject = "Please enter a subject of at least 3 characters.";
    }

    if (!current.message.trim()) {
      errors.message = "Message is required.";
    } else if (current.message.trim().length < 15) {
      errors.message = "Please enter a message of at least 15 characters.";
    }

    if (!current.privacyAcknowledged) {
      errors.privacyAcknowledged =
        "Please acknowledge that this general enquiry form does not collect sensitive documents.";
    }

    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitLockRef.current || submitting) {
      return;
    }

    const clientErrors = validateClient(values);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setFormError("Please review the highlighted fields and try again.");
      setSuccess(null);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    submitLockRef.current = true;
    setSubmitting(true);
    setFieldErrors({});
    setFormError(null);
    setSuccess(null);

    try {
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        service: values.service,
        subject: values.subject.trim(),
        message: values.message.trim(),
        countryOfResidence: values.countryOfResidence.trim() || undefined,
        destinationCountry: values.destinationCountry.trim() || undefined,
        preferredContact: values.preferredContact || undefined,
        privacyAcknowledged: values.privacyAcknowledged,
        website: values.website,
      };

      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: Record<string, string>;
        referenceNumber?: string;
        service?: string;
        submittedAt?: string;
        emailDispatch?: { acknowledgementSent?: boolean };
      };

      if (!response.ok || !data.referenceNumber) {
        setFieldErrors(data.fieldErrors ?? {});
        setFormError(
          data.error ||
            "Your enquiry could not be submitted right now. Your message has been kept below so you can try again or contact us via WhatsApp or email."
        );
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }

      setSuccess({
        referenceNumber: data.referenceNumber,
        service: data.service ?? values.service,
        submittedAt: data.submittedAt ?? new Date().toISOString(),
        acknowledgementSent: Boolean(data.emailDispatch?.acknowledgementSent),
      });
      setValues(INITIAL_FORM_STATE);
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setFormError(
        "A network error prevented your enquiry from submitting. Your details are preserved below—please retry or reach out via WhatsApp or email."
      );
      requestAnimationFrame(() => statusRef.current?.focus());
    } finally {
      submitLockRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <Card variant="default" padding="lg">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Eyebrow>Enquiry &amp; Consultation Form</Eyebrow>
        <Badge variant="accent">{BRAND.serviceLine}</Badge>
      </div>

      <Heading as="h2" size="h3" className="mt-2">
        Send an Enquiry or Consultation Request
      </Heading>

      <Paragraph size="sm" className="mt-2">
        Share your question about studying, visa guidance, travel, or exploring Europe.
        Informational guidance does not guarantee university admission or visa approval.
      </Paragraph>

      <div
        role="note"
        className="border-brand-gold/45 bg-surface-subtle text-text-secondary mt-4 rounded-lg border px-4 py-3 text-xs"
      >
        <strong className="font-heading text-text-primary font-semibold">Privacy Notice:</strong> Do
        not include passports, identity documents, bank statements, or other sensitive personal
        records in your message.
      </div>

      {success ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="border-brand-blue/40 bg-surface-subtle mt-6 rounded-lg border p-4 text-sm focus:outline-none"
        >
          <p className="font-heading text-brand-navy font-semibold">
            Enquiry Received — Reference {success.referenceNumber}
          </p>
          <p className="text-text-secondary mt-1.5 text-xs leading-relaxed">
            Thank you. Your <strong>{success.service}</strong> enquiry has been recorded with
            reference <strong>{success.referenceNumber}</strong> and our team will review it.
            {success.acknowledgementSent
              ? " A confirmation email has also been sent to your address."
              : ""}
          </p>
          <div className="mt-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSuccess(null);
                setFormError(null);
                setFieldErrors({});
              }}
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      ) : null}

      {formError ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-xs text-red-900 focus:outline-none"
        >
          <p className="font-heading font-semibold">Submission Could Not Be Completed</p>
          <p className="mt-1 leading-relaxed">{formError}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
            >
              Email {BRAND.email}
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
            >
              WhatsApp {BRAND.phoneDisplay} ↗
            </a>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate aria-busy={submitting} className="mt-6 space-y-4">
        {/* Honeypot field for automated spam protection */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => setValues((prev) => ({ ...prev, website: e.target.value }))}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="contact-full-name"
            name="fullName"
            label="Full Name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            disabled={submitting}
            value={values.fullName}
            error={fieldErrors.fullName}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, fullName: e.target.value }));
              if (fieldErrors.fullName) {
                setFieldErrors((prev) => ({ ...prev, fullName: "" }));
              }
            }}
          />

          <Input
            id="contact-email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
            disabled={submitting}
            value={values.email}
            error={fieldErrors.email}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
              if (fieldErrors.email) {
                setFieldErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-service"
              className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
            >
              Service of Interest *
            </label>
            <select
              id="contact-service"
              name="service"
              required
              disabled={submitting}
              aria-invalid={Boolean(fieldErrors.service)}
              aria-describedby={fieldErrors.service ? "contact-service-error" : undefined}
              value={values.service}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  service: e.target.value as EnquiryService,
                }));
                if (fieldErrors.service) {
                  setFieldErrors((prev) => ({ ...prev, service: "" }));
                }
              }}
              className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none disabled:opacity-60"
            >
              {ENQUIRY_SERVICES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldErrors.service ? (
              <p
                id="contact-service-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-700"
              >
                {fieldErrors.service}
              </p>
            ) : null}
          </div>

          <Input
            id="contact-subject"
            name="subject"
            label="Subject"
            type="text"
            placeholder="e.g., Master's programmes in Germany"
            required
            disabled={submitting}
            value={values.subject}
            error={fieldErrors.subject}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, subject: e.target.value }));
              if (fieldErrors.subject) {
                setFieldErrors((prev) => ({ ...prev, subject: "" }));
              }
            }}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            id="contact-country-residence"
            name="countryOfResidence"
            label="Country of Residence (Optional)"
            type="text"
            autoComplete="country-name"
            placeholder="e.g., Hungary"
            disabled={submitting}
            value={values.countryOfResidence}
            error={fieldErrors.countryOfResidence}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, countryOfResidence: e.target.value }));
            }}
          />

          <Input
            id="contact-destination-country"
            name="destinationCountry"
            label="Destination Country (Optional)"
            type="text"
            placeholder="e.g., Austria"
            disabled={submitting}
            value={values.destinationCountry}
            error={fieldErrors.destinationCountry}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, destinationCountry: e.target.value }));
            }}
          />

          <div>
            <label
              htmlFor="contact-preferred-method"
              className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
            >
              Preferred Contact Method (Optional)
            </label>
            <select
              id="contact-preferred-method"
              name="preferredContact"
              disabled={submitting}
              aria-invalid={Boolean(fieldErrors.preferredContact)}
              aria-describedby={
                fieldErrors.preferredContact ? "contact-preferred-error" : undefined
              }
              value={values.preferredContact}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  preferredContact: e.target.value as "" | PreferredContactMethod,
                }));
              }}
              className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none disabled:opacity-60"
            >
              <option value="">No preference</option>
              {PREFERRED_CONTACT_METHODS.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
            {fieldErrors.preferredContact ? (
              <p
                id="contact-preferred-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-700"
              >
                {fieldErrors.preferredContact}
              </p>
            ) : null}
          </div>
        </div>

        <Textarea
          id="contact-message"
          name="message"
          label="Message"
          rows={5}
          placeholder="Include your service of interest, country or destination, and your general question (do not include sensitive documents)."
          required
          disabled={submitting}
          value={values.message}
          error={fieldErrors.message}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, message: e.target.value }));
            if (fieldErrors.message) {
              setFieldErrors((prev) => ({ ...prev, message: "" }));
            }
          }}
        />

        <div>
          <label
            htmlFor="contact-privacy-acknowledged"
            className="text-text-secondary flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed"
          >
            <input
              id="contact-privacy-acknowledged"
              name="privacyAcknowledged"
              type="checkbox"
              disabled={submitting}
              checked={values.privacyAcknowledged}
              aria-invalid={Boolean(fieldErrors.privacyAcknowledged)}
              aria-describedby={
                fieldErrors.privacyAcknowledged ? "contact-privacy-error" : undefined
              }
              onChange={(e) => {
                setValues((prev) => ({ ...prev, privacyAcknowledged: e.target.checked }));
                if (fieldErrors.privacyAcknowledged) {
                  setFieldErrors((prev) => ({ ...prev, privacyAcknowledged: "" }));
                }
              }}
              className="border-border-default accent-brand-navy mt-0.5 h-4 w-4 rounded"
            />
            <span>
              I acknowledge that this general enquiry form does not collect passports, identity
              cards, or financial documents.
            </span>
          </label>
          {fieldErrors.privacyAcknowledged ? (
            <p
              id="contact-privacy-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-700"
            >
              {fieldErrors.privacyAcknowledged}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <Button type="submit" variant="primary" size="md" disabled={submitting}>
            {submitting ? "Submitting Enquiry..." : "Submit Enquiry"}
          </Button>
          <span className="text-text-muted text-xs">
            Prefer direct chat?{" "}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
            >
              WhatsApp {BRAND.phoneDisplay}
            </a>
          </span>
        </div>
      </form>
    </Card>
  );
}
