# Technical Architecture — SchengeN Routes

## Stack Overview

- **Runtime & Framework**: Next.js (App Router) with React and TypeScript (`strict: true`)
- **Styling & Design Tokens**: Tailwind CSS v4 (`@theme inline`) backed by CSS custom properties in `src/app/globals.css` and typed token constants in `src/styles/tokens.ts`
- **Typography**: `next/font/google` (`Manrope` and `Inter`) with `display: "swap"`
- **Validation & Forms**: Zod + React Hook Form (introduced in form milestones)
- **Persistence (Future Milestones)**: PostgreSQL when persistent storage is introduced

## Architectural Boundaries

- `src/app/`: Route segments, layouts, global CSS variables, and metadata.
- `src/components/ui/`: Service-agnostic foundational UI primitives (`Button`, `Container`, `Section`, `Heading`, `Paragraph`, `Eyebrow`, `Card`, `Badge`, `Divider`, `Input`, `Textarea`, `Link`, `BrandLogo`).
- `src/components/`: Layout/navigation (`layout/`, `navigation/`, starting in M2) and isolated service modules (`study/`, `visa/`, `travel/`, `explore/`, `contact/`).
- `src/data/` & `src/lib/`: Brand constants (`constants.ts`), class merging (`utils.ts`), and normalized TypeScript datasets accessed through clean repository selectors.
- `src/styles/`: Central design token definitions (`tokens.ts`).
- `src/types/`: Strict domain contracts enforcing required fields such as `sourceUrl` and `lastReviewed`.
