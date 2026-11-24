# Design System — SchengeN Routes (Milestone 1)

## 1. Brand Colour Palette

| Token             | HEX       | CSS Variable          | Target Share | Role & Usage                                                   |
| :---------------- | :-------- | :-------------------- | :----------- | :------------------------------------------------------------- |
| **White**         | `#FFFFFF` | `--color-brand-white` | ~50%         | Primary page canvas, card surfaces, negative space             |
| **Deep Navy**     | `#102A43` | `--color-brand-navy`  | ~30%         | Primary headings, primary buttons, dark hero/footer surfaces   |
| **European Blue** | `#174A78` | `--color-brand-blue`  | ~10%         | Secondary buttons, links, active states, eyebrow labels        |
| **Gold**          | `#C5A15A` | `--color-brand-gold`  | ~10%         | Restrained accent dividers, featured badges, subtle highlights |

Supporting neutral slate tokens (`#F8FAFC` through `#0F172A`) are defined in `src/styles/tokens.ts` and `src/app/globals.css` strictly for borders, muted text, disabled states, and subtle surface separation.

---

## 2. Typography Scale

- **Headings & Buttons:** `Manrope` (`500`, `600`, `700`, `800`) via `--font-manrope`
- **Body & Form Controls:** `Inter` (`400`, `500`, `600`, `700`) via `--font-inter`

| Level            | Component                    | Responsive Size                             | Line Height | Letter Spacing | Weight |
| :--------------- | :--------------------------- | :------------------------------------------ | :---------- | :------------- | :----- |
| **Display**      | `<Heading size="display">`   | `clamp(2.25rem, 4vw + 1rem, 3.5rem)`        | `1.12`      | `-0.025em`     | `800`  |
| **H1**           | `<Heading as="h1">`          | `clamp(1.875rem, 2.5vw + 1rem, 2.75rem)`    | `1.18`      | `-0.02em`      | `800`  |
| **H2**           | `<Heading as="h2">`          | `clamp(1.5rem, 1.8vw + 0.875rem, 2.125rem)` | `1.24`      | `-0.015em`     | `700`  |
| **H3**           | `<Heading as="h3">`          | `clamp(1.25rem, 1vw + 0.875rem, 1.5rem)`    | `1.32`      | `-0.01em`      | `700`  |
| **H4**           | `<Heading as="h4">`          | `1.125rem` (`18px`)                         | `1.40`      | `-0.005em`     | `600`  |
| **Body Large**   | `<Paragraph size="lg">`      | `1rem` → `1.125rem`                         | `1.65`      | `0em`          | `400`  |
| **Body Regular** | `<Paragraph size="base">`    | `1rem` (`16px`)                             | `1.65`      | `0em`          | `400`  |
| **Body Small**   | `<Paragraph size="sm">`      | `0.875rem` (`14px`)                         | `1.55`      | `0em`          | `400`  |
| **Caption**      | `<Paragraph size="caption">` | `0.75rem` (`12px`)                          | `1.45`      | `0.01em`       | `500`  |
| **Eyebrow**      | `<Eyebrow>`                  | `0.75rem` (`12px`)                          | `1.30`      | `0.12em`       | `700`  |
| **Button**       | `<Button>`                   | `0.875rem`–`1rem`                           | `1.20`      | `0.01em`       | `600`  |

---

## 3. Spacing, Layout & Breakpoints

- **Container Max Widths:** `narrow` (`768px` / `max-w-3xl`), `default` (`1280px` / `max-w-7xl`), `wide` (`1440px` / `max-w-[90rem]`).
- **Page Gutters:** `px-4 sm:px-6 lg:px-8` (`16px` mobile, `24px` tablet, `32px` desktop).
- **Section Vertical Spacing:** `sm` (`py-10 sm:py-12`), `md` (`py-14 sm:py-20`), `lg` (`py-20 sm:py-28`).
- **Supported Breakpoints:** `320px` (small mobile) up to `1920px+` (large desktop) with `overflow-x: hidden` protection.

---

## 4. UI Component Inventory (`src/components/ui/`)

| Component               | File                               | Variants / Props                                                                                       |
| :---------------------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Button**              | `src/components/ui/button.tsx`     | `variant`: `primary`, `secondary`, `outline`, `ghost`; `size`: `sm`, `md`, `lg`; `loading`, `disabled` |
| **Container**           | `src/components/ui/container.tsx`  | `size`: `narrow`, `default`, `wide`                                                                    |
| **Section**             | `src/components/ui/section.tsx`    | `spacing`: `sm`, `md`, `lg`; `background`: `white`, `subtle`, `navy`, `blue-tint`, `gold-tint`         |
| **Heading**             | `src/components/ui/heading.tsx`    | `as`: `h1`–`h4`; `size`: `display`, `h1`–`h4`; `inverse`                                               |
| **Paragraph & Eyebrow** | `src/components/ui/paragraph.tsx`  | `Paragraph` (`lg`, `base`, `sm`, `caption`); `Eyebrow` (`blue`, `gold`, `inverse`)                     |
| **Card**                | `src/components/ui/card.tsx`       | `variant`: `default`, `elevated`, `interactive`; `padding`: `none`, `sm`, `md`, `lg`                   |
| **Badge**               | `src/components/ui/badge.tsx`      | `variant`: `default`, `neutral`, `accent`                                                              |
| **Divider**             | `src/components/ui/divider.tsx`    | `variant`: `subtle`, `default`, `gold`                                                                 |
| **Input**               | `src/components/ui/input.tsx`      | `label`, `helperText`, `error`, `required`, `disabled`                                                 |
| **Textarea**            | `src/components/ui/textarea.tsx`   | `label`, `helperText`, `error`, `required`, `disabled`, `rows`                                         |
| **Link**                | `src/components/ui/link.tsx`       | `variant`: `default`, `subtle`, `nav`; automatic external `rel="noopener noreferrer"`                  |
| **BrandLogo**           | `src/components/ui/brand-logo.tsx` | `size`: `sm`, `md`, `lg`; `surface`: `light`, `dark`                                                   |

---

## 5. Accessibility Standards (WCAG 2.2 AA)

- **Keyboard Focus:** Global `:focus-visible` indicator (`2px solid #174A78`, `2px` offset) across all interactive controls.
- **Form Accessibility:** Automatic `htmlFor`/`id` association via `useId()`, `aria-invalid`, `aria-describedby`, and `role="alert"` with explicit text + icon cues (never relying on colour alone).
- **Touch Targets:** Interactive buttons and inputs maintain `min-h-11` (`44px`) minimum height.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables non-essential transitions and animations.

---

## 6. Official Asset Locations

- **Primary Logo:** `public/assets/brand/logo-primary.png`
- **Token Definitions:** `src/styles/tokens.ts` and `src/app/globals.css`
- **Brand Constants:** `src/lib/constants.ts`
