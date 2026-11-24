# Shared Layout and Navigation — SchengeN Routes (Milestone 2)

## 1. Architecture Overview

Milestone 2 establishes the global application shell used across every route in **SchengeN Routes**:

- **Root Integration (`src/app/layout.tsx`):** Wraps all route segments in `<PageLayout>`.
- **Shared Shell (`src/components/layout/page-layout.tsx`):** Composes `<SiteHeader />`, `<main id="main-content">`, and `<SiteFooter />` inside a full-height flex column (`min-h-full flex-1 flex-col`), while allowing future service sections (`/study`, `/visa-guide`, `/travel`, `/explore`) to introduce nested sub-navigation layouts without duplicating global chrome.
- **Central Navigation Configuration (`src/config/navigation.ts`):** Single source of truth for primary routes, planned sub-navigation categories, consultation CTA metadata, footer link groups, verified contact details, and official social links.

---

## 2. Global Header & Desktop Navigation

- **Component:** `src/components/layout/site-header.tsx`
- **Desktop Layout (`lg` / `1024px+`):**
  - **Left:** Official **SchengeN Routes** logo (`public/assets/brand/logo-primary.png`) rendered via `<BrandLogo size="md" surface="light" />` linking to `/`.
  - **Centre (`src/components/layout/desktop-navigation.tsx`):** Primary navigation links (`Home`, `Study`, `Visa Guide`, `Travel`, `Explore`, `About Us`, `Contact`) with active-route detection (`usePathname()` + `aria-current="page"`) and a Gold active underline indicator.
  - **Right:** Primary `Get Consultation` CTA button (`<Button variant="primary">`) linking to `/contact`.

### Desktop Dropdown Behaviour (`src/components/navigation/navigation-dropdown.tsx`)

- Pillars with future sub-categories (`Study`, `Visa Guide`, `Travel`, `Explore`) pair a direct route link with an accessible chevron toggle button (`aria-expanded`, `aria-haspopup="true"`, `aria-controls`).
- **Interaction & Dismissal:** Opens on click/tap (never hover-only so touch and keyboard users have predictable control) and closes on `Escape` key press (returning focus to the trigger button), outside click, or link selection.
- Sub-category items display a `"Planned"` badge and link cleanly to their parent section route until dedicated subpages are implemented in Milestones 4–7.

---

## 3. Mobile Navigation (`src/components/layout/mobile-navigation.tsx`)

- **Trigger (`< 1024px`):** Accessible menu button (`min-h-11 min-w-11`, `aria-expanded`, `aria-controls`, `aria-label`).
- **Slide-Over Drawer (`role="dialog"`, `aria-modal="true"`):**
  - Locks background `document.body.style.overflow` while open.
  - Moves focus to the explicit Close (`×`) button on open and restores focus to the menu toggle button on `Escape` or close.
  - Provides expandable accordions for service pillar sub-categories and a full-width `Get Consultation` CTA button at the bottom of the drawer.
- **Verified Viewports:** Tested for zero horizontal overflow and touch-friendly controls at `320px`, `375px`, `390px`, and `430px`.

---

## 4. Global Footer (`src/components/layout/site-footer.tsx`)

- **Surface:** Deep Navy (`#102A43`) background with high-contrast white/slate typography, European Blue borders, and Gold section headings.
- **Four-Column Responsive Grid:**
  1. **Brand:** Original `<BrandLogo size="md" surface="dark" />`, _"Your Gateway to Europe"_, _"Study • Travel • Explore"_, and platform summary.
  2. **Explore:** `Home`, `Study`, `Visa Guide`, `Travel`, `Explore` (derived from `PRIMARY_NAVIGATION`).
  3. **Company:** `About Us`, `Contact`, `Get Consultation`.
  4. **Contact & Community:** Official email (`schengenroutes@gmail.com`), direct business WhatsApp (`+36 70 792 3072`), separate official WhatsApp Community link (`https://chat.whatsapp.com/KJBfVD5hNN5Bxxk0YfX1xj`), and verified Instagram, Facebook, and TikTok links (`target="_blank"` with `rel="noopener noreferrer"`).
- **Bottom Bar:** Dynamic copyright year (`new Date().getFullYear()`).

---

## 5. Accessibility & Responsive Standards (WCAG 2.2 AA)

- **Skip-to-Content Link:** Keyboard-accessible `"Skip to main content"` link targeting `#main-content`.
- **Semantic Landmarks:** `<header>`, `<nav aria-label="...">`, `<main id="main-content">`, and `<footer>`.
- **Responsive Breakpoints:** Verified across `320px`, `375px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, and `1920px+` with zero horizontal scrolling.
