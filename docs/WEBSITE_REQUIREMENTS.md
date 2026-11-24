# Website Requirements — SchengeN Routes

## Navigation & Pages

- **Homepage (`/`):** Ten-section editorial homepage covering Hero, Brand Introduction, Four Main Services, Explore European Countries, Study Opportunities, Why SchengeN Routes, Travel and European Discovery, How We Help, Latest Updates (editorial preview), and Final Consultation CTA. _(Implemented in M3.)_
- **Primary Navigation:** Home (`/`) | Study (`/study`) | Visa Guide (`/visa-guide`) | Travel (`/travel`) | Explore (`/explore`) | About Us (`/about`) | Contact (`/contact`) + prominent **Get Consultation** CTA button (`/contact`). _(Implemented in M2.)_
- **Study in Europe Section (`/study`):** Landing page plus `/study/countries`, `/study/universities`, `/study/programmes`, `/study/scholarships`, and `/study/application-deadlines`, backed by typed records, search/filtering, dynamic deadline status derivation, source links, review dates, and honest empty states. _(Implemented in M4.)_
- **European Visa Guide Section (`/visa-guide`):** Landing page plus `/visa-guide/schengen-visa`, `/visa-guide/student-visa`, `/visa-guide/national-visas`, `/visa-guide/countries`, `/visa-guide/document-checklists`, `/visa-guide/application-process`, and `/visa-guide/faqs`, featuring separate EU/Schengen membership indicators, 3-tier document classifications, review statuses, source citations, and prominent non-authority disclaimers. _(Implemented in M5.)_
- **European Travel Section (`/travel`):** Landing page plus `/travel/destinations`, `/travel/countries`, `/travel/cities`, `/travel/guides`, `/travel/itineraries`, `/travel/transportation`, and `/travel/accommodation`, featuring searchable/filterable destination, city, guide, and itinerary discovery, transport and accommodation guidance, practical travel tips, official tourism/operator links, and clear non-agency boundaries. _(Implemented in M6.)_
- **Explore Europe Section (`/explore`):** Editorial cultural discovery platform plus 9 category routes (`/explore/culture`, `/explore/landmarks`, `/explore/history`, `/explore/food`, `/explore/festivals`, `/explore/student-life`, `/explore/nature`, `/explore/experiences`, `/explore/stories`) and static-generated detail pages (`/explore/landmarks/[slug]`, `/explore/stories/[slug]`, `/explore/experiences/[slug]`) with client-side search/filtering, breadcrumbs, source links, and review dates. _(Implemented in M7.)_
- **About Us & Contact Pages (`/about`, `/contact`):** Full editorial About Us page (`AboutHero`, `MissionVision`, `CoreValues`, `AboutServices`, `OurApproach`, `AboutCTA`) and Contact page (`ContactHero`, `ContactInformation`, `SocialLinks`, `ContactForm` frontend preview, `ContactGuidance`) using centralised official contact constants. _(Implemented in M8.)_
- **Legal & Compliance Pages:** Privacy Policy, Terms and Conditions, Cookie Policy. _(Scheduled for M13.)_

## Functional Requirements

- **Dynamic Consultation Enquiry Form:** Frontend validation and pre-filled direct email/WhatsApp fallback implemented in M8; backend submission, validation, and spam protection scheduled for M9.
- **WhatsApp Integration:** Direct business WhatsApp contact (`+36 70 792 3072` via `https://wa.me/36707923072`) separate from the official WhatsApp Community link (`https://chat.whatsapp.com/KJBfVD5hNN5Bxxk0YfX1xj`). _(Centralised in `BRAND` and wired across footer, homepage, and `/contact`.)_
- **Structured Data Models:** Reusable TypeScript records for services, countries, destinations, study entities, visa guide entities, travel entities, and explore entities.

## Non-Functional Requirements

- **Responsive Design:** Full support from `320px` small mobile screens up to `1920px+` desktop displays with zero horizontal scrolling.
- **Accessibility & SEO:** Semantic HTML (`header`, `nav`, `main`, `footer`, `section`, `article`), skip-to-content link, WCAG AA contrast, keyboard navigation, per-page metadata, and Open Graph tags.

### Search & Discovery Requirements (M10)

- **Global Search (`/search`):** Visitors can search across Study, Visa Guide, Travel, and Explore content with grouped results, service-area/content-type/country filters, accessible result-count announcements, and clear empty-state reset actions.
- **Data Integrity & SEO:** Search operates strictly on verified local structured data, excludes private enquiry records, and configures `/search` with `noindex, follow` and canonical `/search` metadata.
