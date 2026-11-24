# Homepage Implementation — SchengeN Routes (Milestone 3)

## 1. Overview & Architecture

Milestone 3 implements the production homepage (`src/app/page.tsx`) for **SchengeN Routes**, reusing the approved Milestone 1 design system and Milestone 2 shared layout (`<PageLayout>`, `<SiteHeader>`, and `<SiteFooter>`).

- **Data Layer (`src/data/`):** Separates structured content from presentation components:
  - `src/data/services.ts` — Core service pillars, Study Opportunities highlights, Why SchengeN Routes principles, How We Help steps, and editorial preview updates.
  - `src/data/countries.ts` — Six European country discovery entries (`Germany`, `Italy`, `France`, `Hungary`, `Netherlands`, `Austria`).
  - `src/data/destinations.ts` — Six European city discovery entries (`Paris`, `Rome`, `Berlin`, `Amsterdam`, `Budapest`, `Vienna`).
- **Presentation Layer (`src/components/home/`):** Server-rendered section components with clean heading hierarchy (`<h1>` in Hero, `<h2>` per section, `<h3>` on cards/items) and zero unnecessary client state.

---

## 2. Homepage Sections (In Order)

1. **`HeroSection` (`src/components/home/hero-section.tsx`):** `"Your Gateway to Europe"` headline, `"Study, Travel and Explore Europe with Confidence."`, value proposition, `Explore Our Services` and `Get Consultation` CTAs, and priority-loaded `16:9` hero photograph.
2. **`BrandIntroduction` (`src/components/home/brand-introduction.tsx`):** Concise overview uniting European education discovery, visa information, travel planning, and cultural exploration.
3. **`ServiceGrid` & `ServiceCard` (`src/components/home/service-grid.tsx`, `src/components/home/service-card.tsx`):** Four core service cards (`Study in Europe` → `/study`, `Visa Guide` → `/visa-guide`, `Travel Europe` → `/travel`, `Explore Europe` → `/explore`).
4. **`CountrySection` & `CountryCard` (`src/components/home/country-section.tsx`, `src/components/home/country-card.tsx`):** Six European country discovery cards (`Germany`, `Italy`, `France`, `Hungary`, `Netherlands`, `Austria`) with `4:3` images and introductory routing to `/study`.
5. **`StudyOpportunities` (`src/components/home/study-opportunities.tsx`):** `"Find Your Study Opportunities in Europe"` section highlighting `Universities`, `Bachelor's Programmes`, `Master's Programmes`, `Scholarships`, and `Application Deadlines`, with `Explore Study Opportunities` CTA (`/study`).
6. **`WhyChooseUs` (`src/components/home/why-choose-us.tsx`):** Four core principles (`One Platform, Multiple Services`, `Clear Information`, `European Opportunities`, `Guidance and Support`).
7. **`DestinationSection` & `DestinationCard` (`src/components/home/destination-section.tsx`, `src/components/home/destination-card.tsx`):** Six city cards (`Paris`, `Rome`, `Berlin`, `Amsterdam`, `Budapest`, `Vienna`) with `4:3` images linking to `/travel`.
8. **`HowItWorks` (`src/components/home/how-it-works.tsx`):** Four-step process (`Discover`, `Understand`, `Plan`, `Connect`).
9. **`LatestUpdates` (`src/components/home/latest-updates.tsx`):** Structured editorial preview items labelled clearly as `"Editorial Preview"` for future announcements across admissions, scholarships, application deadlines, visa information, and travel.
10. **`ConsultationCta` (`src/components/home/consultation-cta.tsx`):** `"Ready to Explore Your European Opportunities?"` closing callout with `Get Consultation` (`/contact`) and `Join Our Community` (official WhatsApp Community URL).

---

## 3. Image Asset Inventory

All 14 homepage editorial images are stored locally under `public/assets/images/` and rendered via `next/image`:

- **Hero (`16:9`):** `public/assets/images/hero/europe-hero.jpg` (`priority` enabled)
- **Study (`4:3`):** `public/assets/images/study/european-university-campus.jpg`
- **Countries (`4:3`):**
  - `public/assets/images/countries/germany.jpg`
  - `public/assets/images/countries/italy.jpg`
  - `public/assets/images/countries/france.jpg`
  - `public/assets/images/countries/hungary.jpg`
  - `public/assets/images/countries/netherlands.jpg`
  - `public/assets/images/countries/austria.jpg`
- **Destinations (`4:3`):**
  - `public/assets/images/destinations/paris.jpg`
  - `public/assets/images/destinations/rome.jpg`
  - `public/assets/images/destinations/berlin.jpg`
  - `public/assets/images/destinations/amsterdam.jpg`
  - `public/assets/images/destinations/budapest.jpg`
  - `public/assets/images/destinations/vienna.jpg`

---

## 4. SEO, Accessibility & Responsive Notes

- **SEO:** Route-level metadata and Open Graph tags configured in `src/app/page.tsx` without inventing a production domain.
- **Accessibility:** Single `<h1>`, logical `<h2>`/`<h3>` hierarchy, descriptive image `alt` attributes, visible `:focus-visible` outlines, and WCAG AA contrast across light and Deep Navy surfaces.
- **Responsive Design:** Responsive grids and fluid typography verified across `320px`, `375px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, and `1920px` viewports with zero horizontal overflow.
