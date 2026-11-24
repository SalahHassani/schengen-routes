# Enquiry Security and Privacy — SchengeN Routes (Milestone 9)

## 1. Data Collected & Prohibited Sensitive Data

- **Collected Fields**: `fullName`, `email`, `service`, `subject`, `message`, optional `countryOfResidence`, optional `destinationCountry`, optional `preferredContact`, `privacyAcknowledged`, and system metadata (`id`, `referenceNumber`, `status`, `createdAt`, `updatedAt`).
- **Prohibited Sensitive Documents**: The form and UI explicitly instruct visitors not to submit passports, identity cards, bank statements, or other sensitive documents, and M9 provides no file/document upload capability.

---

## 2. Security Controls

- **Server-Side Source of Truth**: Strict Zod schema (`enquirySubmissionSchema` with `.strict()`) trims inputs, validates types/lengths/enums, and rejects unexpected properties.
- **Parameterized Persistence**: Prisma ORM executes parameterized queries against PostgreSQL.
- **XSS & Injection Protection**: Untrusted strings are HTML-escaped via `escapeHtml()` in email templates; React escapes rendered text in UI components.
- **Request Limits, Honeypot & Rate Limiting**: `32 KB` payload cap, `website` honeypot check, and client IP hashing (`hashClientIdentifier`) with optional distributed rate-limit provider (`RATE_LIMIT_PROVIDER_URL`) and bounded local fallback.
- **No Unauthenticated Enquiry Listing**: No public endpoint exposes stored enquiries.
- **Safe Logging**: Application logs never dump full request bodies, full enquiry message text, or environment secrets.

---

## 3. Privacy & Outstanding Legal / Production Requirements

- **GDPR & Legal Notice**: Acknowledging the M9 privacy notice is not a substitute for full legal/GDPR compliance. Legal entity details, registered business address, company registration number, privacy officer contact, data retention periods, and lawful basis documentation are not invented in M9 and must be completed alongside **Milestone 13** legal pages.
- **Distributed Rate Limiting**: For multi-instance production deployments, configure a shared external rate-limit endpoint (`RATE_LIMIT_PROVIDER_URL` + `RATE_LIMIT_PROVIDER_TOKEN`) and a strong `ENQUIRY_HASH_SALT` rather than relying solely on per-instance fallback memory.
