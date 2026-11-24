# Enquiry and Consultation System — SchengeN Routes (Milestone 9)

## 1. System Architecture

Milestone 9 connects the Contact page (`src/components/contact/contact-form.tsx`) to a server-side Next.js App Router endpoint (`POST /api/enquiries` in `src/app/api/enquiries/route.ts`):

1. **Client Form (`src/components/contact/contact-form.tsx`)**: Collects required fields (`fullName`, `email`, `service`, `subject`, `message`, `privacyAcknowledged`), optional context fields (`countryOfResidence`, `destinationCountry`, `preferredContact`), and a hidden honeypot field (`website`). Enforces client validation, disables duplicate submissions while in-flight, and renders accessible status/error banners plus fallback contact links (`schengenroutes@gmail.com` and `https://wa.me/36707923072`).
2. **Server Route Handler (`src/app/api/enquiries/route.ts`)**: Enforces request size bounds (`32 KB`), applies rate limiting (`src/lib/enquiries/rate-limit.ts`), parses and validates JSON strictly via Zod (`src/lib/enquiries/validation.ts`), handles honeypot submissions safely, persists the `Enquiry` record in PostgreSQL via Prisma (`src/lib/db/prisma.ts`), and dispatches email notifications (`src/lib/enquiries/email.ts`).
3. **Database Layer (`prisma/schema.prisma`, `prisma/migrations/20261124000000_create_enquiries/migration.sql`)**: Stores enquiries with a non-sequential `referenceNumber` (`SNR-...`), `EnquiryStatus` (`NEW`, `IN_PROGRESS`, `RESPONDED`, `CLOSED`, `SPAM`), timestamps, indexes, and future administrative fields (`assignedTo`, `internalNotes`, `lastRespondedAt`) without exposing any unauthenticated enquiry-listing endpoint.

---

## 2. API Contract (`POST /api/enquiries`)

- **Request Body (`application/json`)**:
  - `fullName` (`string`, required, 2–120 chars)
  - `email` (`string`, required, valid email, max 180 chars)
  - `service` (`"Study" | "Visa Guide" | "Travel" | "Explore" | "General Enquiry" | "Consultation Request"`, required)
  - `subject` (`string`, required, 3–160 chars)
  - `message` (`string`, required, 15–4000 chars)
  - `countryOfResidence` (`string`, optional, max 100 chars)
  - `destinationCountry` (`string`, optional, max 100 chars)
  - `preferredContact` (`"Email" | "WhatsApp"`, optional)
  - `privacyAcknowledged` (`boolean`, required `true`)
  - `website` (`string`, optional honeypot)
- **Status Codes**:
  - `201 Created`: Enquiry persisted; returns `{ referenceNumber, service, submittedAt, emailDispatch, message }`.
  - `400 Bad Request`: Malformed JSON or non-object body.
  - `413 Payload Too Large`: Request exceeds `32 KB`.
  - `422 Unprocessable Entity`: Zod validation failure; returns `{ error, fieldErrors }`.
  - `429 Too Many Requests`: Rate limit exceeded.
  - `500 Internal Server Error`: Database or unexpected server error; returns safe generic message without internal stack traces or DB internals.

---

## 3. Email Notification & Visitor Acknowledgement Behavior

- **Business Notification**: Sent to `ENQUIRY_NOTIFICATION_EMAIL` (defaulting to `schengenroutes@gmail.com`) when `EMAIL_PROVIDER_API_KEY` and `ENQUIRY_FROM_EMAIL` are configured. Escapes all user-supplied text before building HTML.
- **Visitor Acknowledgement**: Sent to the visitor's email only when the email provider is configured; includes the enquiry `referenceNumber` and avoids promising unconfirmed response times or guaranteeing university admissions or visa approvals.
- **Resilience**: Email provider failures are logged safely without full message bodies or credentials and **never** roll back or delete a stored enquiry.
