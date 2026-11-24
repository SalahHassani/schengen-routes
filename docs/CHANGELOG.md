# Changelog — SchengeN Routes

All notable changes to this project will be documented in this file.

## [0.2.0] - Milestone 1: Brand Identity and Design System

### Added

- Created central brand constants (`src/lib/constants.ts`), class-name utility (`src/lib/utils.ts`), and design token definitions (`src/styles/tokens.ts`).
- Configured CSS custom properties, Tailwind v4 `@theme inline` tokens, accessible `:focus-visible` outlines, and `prefers-reduced-motion` support in `src/app/globals.css`.
- Configured `Manrope` and `Inter` Google Fonts and brand favicon metadata in `src/app/layout.tsx`.
- Built foundational accessible UI component library in `src/components/ui/`: `Button`, `Container`, `Section`, `Heading`, `Paragraph`, `Eyebrow`, `Card`, `Badge`, `Divider`, `Input`, `Textarea`, `Link`, and `BrandLogo`.
- Added approved original brand logo asset at `public/assets/brand/logo-primary.png` and created the Milestone 1 Design System showcase in `src/app/page.tsx`.
- Created `docs/DESIGN_SYSTEM.md` and updated `docs/BRAND_GUIDELINES.md`, `docs/TECHNICAL_ARCHITECTURE.md`, and `docs/DEVELOPMENT_ROADMAP.md`.

## [0.1.0] - Milestone 0: Project Initialization

### Added

- Initialized Next.js App Router project with React, TypeScript (strict mode), and Tailwind CSS.
- Configured ESLint and Prettier (`prettier-plugin-tailwindcss`) with `lint`, `typecheck`, `format`, and `format:check` npm scripts.
- Created modular directory structure, `.env.example`, root `README.md`, and Milestone 0 project documentation under `docs/`.
