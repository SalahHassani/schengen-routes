"use client";

import { useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/constants";

type ServiceOption = "Study" | "Visa Guide" | "Travel" | "Explore" | "General enquiry";

interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  service: ServiceOption;
  message: string;
  consent: boolean;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

const SERVICE_OPTIONS: readonly ServiceOption[] = [
  "Study",
  "Visa Guide",
  "Travel",
  "Explore",
  "General enquiry",
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    fullName: "",
    email: "",
    subject: "",
    service: "Study",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [validatedPreviewReady, setValidatedPreviewReady] = useState(false);

  function validate(current: ContactFormValues): ContactFormErrors {
    const nextErrors: ContactFormErrors = {};

    if (!current.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!current.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(current.email.trim())) {
      nextErrors.email = "Please enter a valid email address (for example, name@example.com).";
    }

    if (!current.subject.trim()) {
      nextErrors.subject = "Please enter a brief subject for your enquiry.";
    }

    if (!current.message.trim()) {
      nextErrors.message = "Please enter your question or message.";
    } else if (current.message.trim().length < 15) {
      nextErrors.message = "Please provide at least 15 characters so we understand your question.";
    }

    if (!current.consent) {
      nextErrors.consent =
        "Please confirm that you understand this general form does not process sensitive documents.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setValidatedPreviewReady(true);
    } else {
      setValidatedPreviewReady(false);
    }
  }

  function handleReset() {
    setValues({
      fullName: "",
      email: "",
      subject: "",
      service: "Study",
      message: "",
      consent: false,
    });
    setErrors({});
    setValidatedPreviewReady(false);
  }

  const mailtoSubject = encodeURIComponent(
    `[${values.service}] ${values.subject.trim() || "SchengeN Routes Enquiry"}`
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${values.fullName.trim()}\nEmail: ${values.email.trim()}\nService of Interest: ${values.service}\n\nMessage:\n${values.message.trim()}`
  );
  const directMailtoHref = `mailto:${BRAND.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <Card variant="default" padding="lg">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Eyebrow>Enquiry Form</Eyebrow>
        <Badge variant="neutral">Frontend Preview · M9 Backend Pending</Badge>
      </div>

      <Heading as="h2" size="h3" className="mt-2">
        Prepare Your Enquiry
      </Heading>

      <Paragraph size="sm" className="mt-2">
        Complete the fields below to structure your question. Automated web-form submission is
        scheduled for Milestone 9; once validated, you can send your prepared message directly via
        email or WhatsApp.
      </Paragraph>

      <div
        role="note"
        className="border-brand-gold/45 bg-surface-subtle text-text-secondary mt-4 rounded-lg border px-4 py-3 text-xs"
      >
        <strong className="font-heading text-text-primary font-semibold">Privacy Notice:</strong> Do
        not submit passports, identity cards, bank statements, visa documents, or other sensitive
        personal records through this general enquiry form.
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="contact-full-name"
            name="fullName"
            label="Full Name *"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={values.fullName}
            error={errors.fullName}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, fullName: e.target.value }));
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
              setValidatedPreviewReady(false);
            }}
          />

          <Input
            id="contact-email"
            name="email"
            label="Email Address *"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
            value={values.email}
            error={errors.email}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              setValidatedPreviewReady(false);
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
              value={values.service}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  service: e.target.value as ServiceOption,
                }));
                setValidatedPreviewReady(false);
              }}
              className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <Input
            id="contact-subject"
            name="subject"
            label="Subject *"
            type="text"
            placeholder="e.g., Master's programmes in Germany"
            required
            value={values.subject}
            error={errors.subject}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, subject: e.target.value }));
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
              setValidatedPreviewReady(false);
            }}
          />
        </div>

        <Textarea
          id="contact-message"
          name="message"
          label="Message *"
          rows={5}
          placeholder="Include your service of interest, country or destination, and your general question (do not include sensitive documents)."
          required
          value={values.message}
          error={errors.message}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, message: e.target.value }));
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
            setValidatedPreviewReady(false);
          }}
        />

        <div>
          <label
            htmlFor="contact-consent"
            className="text-text-secondary flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed"
          >
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "contact-consent-error" : undefined}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, consent: e.target.checked }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
                setValidatedPreviewReady(false);
              }}
              className="border-border-default accent-brand-navy mt-0.5 h-4 w-4 rounded"
            />
            <span>
              I confirm this is a general enquiry and does not include passport, identity, or
              financial documents. (Dedicated Privacy Policy page will be published in Milestone
              13.)
            </span>
          </label>
          {errors.consent ? (
            <p
              id="contact-consent-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-700"
            >
              {errors.consent}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button type="submit" variant="primary" size="md">
            Validate &amp; Prepare Enquiry
          </Button>
          <Button type="button" variant="ghost" size="md" onClick={handleReset}>
            Clear Form
          </Button>
        </div>
      </form>

      {validatedPreviewReady ? (
        <div
          role="status"
          aria-live="polite"
          className="border-brand-blue/35 bg-surface-subtle mt-6 rounded-lg border p-4 text-xs"
        >
          <p className="font-heading text-brand-navy text-sm font-semibold">
            Enquiry Ready — Direct Submission Notice
          </p>
          <p className="text-text-secondary mt-1.5 leading-relaxed">
            Your enquiry has <strong>not</strong> been transmitted automatically yet because server
            submission will be enabled in Milestone 9. To reach {BRAND.name} right now without
            losing your message, use one of our official direct channels below:
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-3">
            <a
              href={directMailtoHref}
              className="font-heading bg-brand-navy hover:bg-brand-blue inline-flex items-center rounded-md px-3.5 py-2 text-xs font-semibold text-white transition-colors"
            >
              Open Pre-filled Email ({BRAND.email}) ↗
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading border-border-default text-brand-blue hover:border-brand-blue hover:text-brand-navy inline-flex items-center rounded-md border bg-white px-3.5 py-2 text-xs font-semibold transition-colors"
            >
              Contact via WhatsApp ({BRAND.phoneDisplay}) ↗
            </a>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
