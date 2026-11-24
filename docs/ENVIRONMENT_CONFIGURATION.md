# Environment Configuration — SchengeN Routes (Milestone 9)

## 1. Environment Variables (`.env.example`)

All variables below are server-side only (never prefixed with `NEXT_PUBLIC_`):

- `DATABASE_URL`: PostgreSQL connection string used by Prisma (`prisma/schema.prisma`) and runtime database queries.
- `EMAIL_PROVIDER_API_KEY`: Server-side API key for the configured transactional email provider.
- `ENQUIRY_NOTIFICATION_EMAIL`: Destination inbox for internal new-enquiry notifications (defaults to `schengenroutes@gmail.com`).
- `ENQUIRY_FROM_EMAIL`: Verified sender address for business notifications and visitor acknowledgements.
- `RATE_LIMIT_PROVIDER_URL`: Optional URL for a shared/distributed rate-limit service across serverless/container instances.
- `RATE_LIMIT_PROVIDER_TOKEN`: Optional bearer token for `RATE_LIMIT_PROVIDER_URL`.
- `ENQUIRY_HASH_SALT`: Secret salt used when hashing client IP addresses for rate-limit keys.

---

## 2. Local Setup & Database Migrations

1. Copy `.env.example` to `.env` (keep `.env` out of Git) and supply a valid PostgreSQL `DATABASE_URL`.
2. Generate Prisma Client:
   `npx prisma generate`
3. Validate schema and apply migrations against a reachable PostgreSQL instance:
   `npx prisma validate`
   `npx prisma migrate deploy`
4. Run automated tests:
   `npx tsx --test src/lib/enquiries/__tests__/*.test.ts` (or `node --test` depending on Node version).
