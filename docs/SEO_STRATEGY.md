# SEO Strategy — SchengeN Routes

## Objectives

The Milestone 11 SEO implementation establishes a maintainable technical and on-page search foundation across SchengeN Routes' four core service areas—**Study**, **Visa Guide**, **Travel**, and **Explore**—without making unsupported promises regarding search rankings or organic traffic volume.

## Brand & Metadata Conventions

- **Brand Name:** `SchengeN Routes`
- **Tagline:** `Your Gateway to Europe`
- **Service Line:** `Study • Travel • Explore`
- **Title Strategy:**
  - Root layout (`src/app/layout.tsx`) defines `default: "SchengeN Routes — Your Gateway to Europe"` and `template: "%s | SchengeN Routes"`.
  - Child and dynamic routes pass clean page titles (without duplicating `| SchengeN Routes`) via `buildPageMetadata()`.
  - Each page title reflects its specific subject, country, or service area without repetitive keyword stuffing.
- **Description Strategy:**
  - Every public route provides a unique, accurate meta description summarizing the actual information available on that page.
  - Descriptions avoid unverified claims, visa or admission guarantees, and generic boilerplate reused across unrelated routes.

## Indexing Strategy

### Indexable Routes (`index: true, follow: true`)

- Core informational pages: `/`, `/about`, `/contact`
- Study hubs and directories: `/study`, `/study/countries`, `/study/universities`, `/study/programmes`, `/study/scholarships`, `/study/application-deadlines`
- Visa Guide hubs and references: `/visa-guide`, `/visa-guide/schengen-visa`, `/visa-guide/student-visa`, `/visa-guide/countries`, `/visa-guide/document-checklists`, `/visa-guide/application-process`, `/visa-guide/faqs`
- Travel guides and planning pages: `/travel`, `/travel/destinations`, `/travel/countries`, `/travel/cities`, `/travel/guides`, `/travel/itineraries`, `/travel/transportation`, `/travel/accommodation`
- Explore hubs and verified dynamic detail pages: `/explore`, `/explore/culture`, `/explore/landmarks`, `/explore/landmarks/[slug]`, `/explore/history`, `/explore/food`, `/explore/festivals`, `/explore/student-life`, `/explore/nature`, `/explore/experiences`, `/explore/experiences/[slug]`, `/explore/stories`, `/explore/stories/[slug]`

### Non-Indexable Routes (`index: false, follow: true` or Disallowed)

- `/search` and query-parameterized filter states (`?q=`, `?service=`, `?type=`, `?country=`) are configured with `robots: { index: false, follow: true }` and canonical `/search` so thin filter permutations are not indexed as duplicate pages while search remains accessible to visitors.
- `/api/*` endpoints and missing dynamic slugs (`notFound()`) are excluded from sitemaps and indexing.

## Internal Linking Approach

- Nested detail pages render visible breadcrumb trails (`Home → Explore → Category → Item`) paired with matching `BreadcrumbList` JSON-LD.
- Cross-links connect related hubs across Study, Visa Guide, Travel, and Explore using descriptive anchor text and verified internal routes only.
