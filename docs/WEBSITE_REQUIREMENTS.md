# Website Requirements — SchengeN Routes

## Navigation & Pages

- **Primary Navigation:** Home (`/`) | Study (`/study`) | Visa Guide (`/visa-guide`) | Travel (`/travel`) | Explore (`/explore`) | About Us (`/about`) | Contact (`/contact`) + prominent **Get Consultation** CTA button (`/contact`). _(Implemented in M2 via `src/config/navigation.ts` and `src/components/layout/`.)_
- **Dedicated Service Sections:** Independent landing pages and dynamic internal routes for Study, Visa Guide, Travel, and Explore. _(Route placeholders active in M2; full section content implemented in M4–M7.)_
- **Legal & Compliance Pages:** Privacy Policy, Terms and Conditions, Cookie Policy. _(Scheduled for M13.)_

## Functional Requirements

- **Dynamic Consultation Enquiry Form:** Adapts fields based on selected service (`Study`, `Visa Guide`, `Travel`, `Explore`) with client + server validation and spam protection. _(Scheduled for M8–M9.)_
- **WhatsApp Integration:** Direct business WhatsApp contact (`+36 70 792 3072`) separate from the official WhatsApp Community link (`https://chat.whatsapp.com/KJBfVD5hNN5Bxxk0YfX1xj`). _(Implemented in global footer in M2.)_
- **Structured Data Models:** Reusable TypeScript records for countries, universities, programmes, scholarships, visa guides, destinations, and articles.

## Non-Functional Requirements

- **Responsive Design:** Full support from `320px` small mobile screens up to `1920px+` desktop displays with zero horizontal scrolling.
- **Accessibility & SEO:** Semantic HTML (`header`, `nav`, `main`, `footer`), skip-to-content link, WCAG AA contrast, keyboard navigation, per-page metadata, sitemap, and robots configuration.
