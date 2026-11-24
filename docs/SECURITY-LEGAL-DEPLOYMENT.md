# Milestone 13 — Security, Legal Pages & Deployment Readiness

> **Important Notice:** This document is a technical and operational preparation record, not legal advice or a certification of regulatory/GDPR/German statutory compliance. Items marked as requiring business-owner input, legal review, or deployment credentials/domain must be completed prior to public production launch.

## 1. Initial Audit (M0–M12)

- **Baseline:** Next.js 16.4.6 (Turbopack), React 19, TypeScript, Tailwind CSS v4, and Prisma/PostgreSQL.
- **Verified Protections:** `enquirySubmissionSchema` uses `.strict()` to reject unexpected fields; enquiry submission logic enforces a 32 KB body cap (`413`), rate limiting (`429` with `Retry-After`), JSON object checks (`400`), Zod validation (`422`), honeypot handling, `SNR-` reference generation, `P2002` retry handling, and email dispatch failure isolation without deleting stored enquiries or logging full PII payloads; `.gitignore` ignores `.env*` except `!.env.example`.
- **Gaps Identified:** Missing HTTP security headers in `next.config.ts`, missing explicit `pg.Pool` bounds and production `DATABASE_URL` guard in `src/lib/db/prisma.ts`, missing dedicated legal route files under `src/app/`, unconfirmed production domain/environment configuration, and unexecuted live browser Lighthouse/viewport/axe-core checks.

## 2. Security Findings

- **HTTP Headers:** Previously no `headers()` policy set `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy` (`frame-ancestors 'none'`), or HTTPS-only `Strict-Transport-Security`.
- **Database Pool & Connection Guard:** Previously `src/lib/db/prisma.ts` fell back to a local PostgreSQL URI when `DATABASE_URL` was unset and did not set explicit `pg.Pool` pool limits.
- **Secrets & Exposure:** `.env*` is gitignored; no `NEXT_PUBLIC_*` variables expose private credentials.

## 3. Security Improvements

- **Implemented & Verified:**
  - Configured `headers()` in `next.config.ts` (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `Content-Security-Policy` with `frame-ancestors 'none'` and dev-only `'unsafe-eval'` outside `production`, and `Strict-Transport-Security` only when `NODE_ENV === "production"`).
  - Updated `src/lib/db/prisma.ts` to throw in `production` when `DATABASE_URL` is missing and configure explicit `Pool` settings (`max`, `idleTimeoutMillis`, `connectionTimeoutMillis`).

## 4. API and Database Protections

- **Implemented & Verified:** Server-side `.strict()` schema validation, `32 KB` payload size check, rate limiting, `SNR-` reference persistence in `prisma.enquiry`, safe `P2002` retry handling, and non-PII error logging remain intact; no public endpoint exposes stored enquiries.

## 5. Privacy / Data Handling Review

- **Implemented:** General enquiry form collects contact/enquiry fields (`fullName`, `email`, `service`, `subject`, `message`, optional `countryOfResidence`, `destinationCountry`, `preferredContact`, `privacyAcknowledged`) with explicit privacy acknowledgment advising against sensitive documents.
- **Requires Business-Owner Input & Legal Review:** Data retention duration, data-subject access/deletion/rectification workflows, legal basis records, and sub-processor agreements require owner and legal definition.

## 6. Legal Pages Created

- **Navigation Config:** Legal navigation items were added in `src/config/navigation.ts`.
- **Dedicated Route Files (`/legal`, `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/disclaimer`, `/imprint`):** **Not tested / pending dedicated route files** in `src/app/` unless added in follow-up work.

## 7. Unknown Legal / Business Details

- **Requires Business-Owner Input & Legal Review:**
  - Legal operator name / business entity
  - Registered business / imprint address (for EU/German Imprint disclosure)
  - Official legal/privacy contact channel, commercial register details (if applicable), and VAT ID (if applicable)
  - Data retention period and data-subject request handling procedure

## 8. Cookie and Consent Findings

- **Implemented & Verified:** No non-essential analytics or marketing tracking cookies or scripts exist in the inspected codebase. Only essential/technical HTTP/session behavior applies; no optional cookie banner was installed because no non-essential tracking is active. Any future analytics or marketing tracking requires explicit user consent before activation.

## 9. Environment Configuration

- **Server-Side Variables (Required Credentials/Config):** `DATABASE_URL`, `EMAIL_PROVIDER_API_KEY`, `ENQUIRY_NOTIFICATION_EMAIL`, `ENQUIRY_FROM_EMAIL`, `RATE_LIMIT_PROVIDER_URL`, `RATE_LIMIT_PROVIDER_TOKEN`, `ENQUIRY_HASH_SALT`.
- **Public Variable (Requires Deployment Credentials or Domain):** `NEXT_PUBLIC_SITE_URL` must be set to the confirmed live `https://` origin prior to production deployment (do not fabricate a domain or use `localhost` in production).

## 10. Deployment Configuration

- **Implemented & Verified:** Next.js 16 production build (`npm run build`) compiles and generates static/partial-prerendered routes cleanly (`51/51`).
- **Requires Deployment Credentials or Domain:** Hosting platform setup (e.g., Vercel), production environment variables, custom `https://` domain configuration, and live smoke verification.

## 11. Database Migration and Backup Procedure

- **Not Tested in Production:** Apply Prisma migrations safely against the target production PostgreSQL database (`npx prisma migrate deploy`), use connection pooling appropriate for serverless/production runtime, avoid destructive resets, and maintain automated PostgreSQL backups with documented restore testing before launch.

## 12. Security Testing Results

- **Verified:** Unit/integration suite (`npm test` — `22/22` passing across `8` suites), `npm run lint`, `npm run typecheck`, and `npm run format:check` passed.
- **Not Tested:** Live browser E2E security/header inspection, `320px–1920px` viewport checks, Lighthouse, and automated axe-core accessibility scans were not run in this session.

## 13. Dependency Audit Results

- **Verified:** `npm audit` reported **0 critical** and **4 high** severity findings (`effect <= 3.22.0` ReDoS `GHSA-7589-6fvf-x4pw` via `@prisma/config` -> `prisma` -> `@prisma/prisma7`, `fixAvailable: false`). `npm audit fix --force` was intentionally not run to avoid breaking upgrades.

## 14. Remaining Production Blockers

- **Requires Business-Owner Input:** Confirmed `https://` domain (`NEXT_PUBLIC_SITE_URL`), legal operator/address/registration/VAT details, data retention period, and data-subject request process.
- **Requires Legal Review:** Review of legal, privacy, cookie, disclaimer, and imprint disclosures by qualified legal counsel.
- **Requires Deployment Credentials or Domain / Not Tested:** Production secrets, PostgreSQL migration execution, live deployment verification, and browser/Lighthouse/accessibility audits.

## 15. Deployment Checklist

1. Confirm `NEXT_PUBLIC_SITE_URL` (`https://...`) and all server-side environment variables in the deployment environment.
2. Provision production PostgreSQL with pooling and verify backups.
3. Run `npx prisma migrate deploy` against the production database.
4. Run `npm test`, `npm run lint`, `npm run typecheck`, `npm run format:check`, and `npm run build`.
5. Deploy to the hosting environment and verify `/`, `/contact`, `/sitemap.xml`, `/robots.txt`, `/api/enquiries`, and HTTPS response headers.
