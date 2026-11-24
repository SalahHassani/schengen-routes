# Changelog — SchengeN Routes

All notable changes to this project will be documented in this file.

## [0.3.0] - Milestone 2: Shared Layout and Navigation

### Added

- Created centralized navigation configuration (`src/config/navigation.ts`) defining primary routes, planned service sub-categories, consultation CTA, footer link groups, and verified contact/social channels.
- Built active-route-aware `<NavLink />` (`src/components/navigation/nav-link.tsx`) and accessible click/keyboard `<NavigationDropdown />` (`src/components/navigation/navigation-dropdown.tsx`).
- Built shared layout components in `src/components/layout/`: `<SiteHeader />` (with skip-to-content link, original logo, desktop nav, and Get Consultation CTA), `<DesktopNavigation />`, `<MobileNavigation />` (accessible slide-over drawer with `Escape` handling, scroll lock, and expandable sub-categories), `<SiteFooter />` (Deep Navy 4-column footer with dynamic copyright year), and `<PageLayout />`.
- Wired `<PageLayout />` into `src/app/layout.tsx` and created placeholder routes for `/study`, `/visa-guide`, `/travel`, `/explore`, `/about`, and `/contact`.
- Created `docs/SHARED_LAYOUT_AND_NAVIGATION.md` and updated `docs/TECHNICAL_ARCHITECTURE.md`, `docs/WEBSITE_REQUIREMENTS.md`, and `docs/DEVELOPMENT_ROADMAP.md`.

## [0.2.0] - Milestone 1: Brand Identity and Design System

### Added

- Created central brand constants (`src/lib/constants.ts`), class-name utility (`src/lib/utils.ts`), and design token definitions (`src/styles/tokens.ts`).
- Configured CSS custom properties, Tailwind v4 `@theme inline` tokens, accessible `:focus-visible` outlines, and `prefers-reduced-motion` support in `src/app/globals.css`.
- Configured `Manrope` and `Inter` Google Fonts and brand favicon metadata in `src/app/layout.tsx`.
- Built foundational accessible UI component library in `src/components/ui/`: `Button`, `Container`, `Section`, `Heading`, `Paragraph`, `Eyebrow`, `Card`, `Badge`, `Divider`, `Input`, `Textarea`, `Link`, and `BrandLogo`.
- Added approved original brand logo asset at `public/assets/brand/logo-primary.png` and created `docs/DESIGN_SYSTEM.md`.

## [0.1.0] - Milestone 0: Project Initialization

### Added

- Initialized Next.js App Router project with React, TypeScript (strict mode), and Tailwind CSS.
- Configured ESLint and Prettier (`prettier-plugin-tailwindcss`) with `lint`, `typecheck`, `format`, and `format:check` npm scripts.
- Created modular directory structure, `.env.example`, root `README.md`, and Milestone 0 project documentation under `docs/`.
