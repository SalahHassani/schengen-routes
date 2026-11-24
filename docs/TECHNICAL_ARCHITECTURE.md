# Technical Architecture — SchengeN Routes

## Stack Overview

- **Runtime & Framework:** Next.js (App Router) with React and TypeScript (`strict: true`)
- **Styling:** Tailwind CSS with CSS custom properties mapped to brand tokens
- **Validation & Forms:** Zod + React Hook Form (introduced in form milestones)
- **Persistence (Future Milestones):** PostgreSQL when persistent storage is introduced

## Architectural Boundaries

- `src/app/`: Route segments, layouts, metadata, and server route handlers.
- `src/components/`: UI primitives (`ui/`), layout/navigation (`layout/`, `navigation/`), and isolated service modules (`study/`, `visa/`, `travel/`, `explore/`, `contact/`).
- src/data/`&`src/lib/repositories/`: Normalized TypeScript datasets accessed through clean repository selectors so future database migration requires no UI rewrites.
- `src/types/`: Strict domain contracts enforcing required fields such as `sourceUrl` and `lastReviewed`.
