# Technical SEO Architecture — SchengeN Routes

## Production Domain Configuration

- **Environment Variable:** `NEXT_PUBLIC_SITE_URL` (declared as an empty placeholder in `.env.example`).
- **Safe Origin Resolution (`getConfiguredSiteOrigin()` in `src/lib/seo/config.ts`):**
  - Parses `NEXT_PUBLIC_SITE_URL` strictly when configured with `http:` or `https:`.
  - Explicitly rejects unset values, malformed URLs, and loopback hosts (`localhost`, `127.0.0.1`, `::1`) so local development origins are never emitted as public canonical URLs.
  - Before production deployment, `NEXT_PUBLIC_SITE_URL` must be set to the confirmed live `https://` origin.

## Canonical URLs (`src/lib/seo/canonical.ts`)

- `normalizePathname()` enforces a leading slash, strips query parameters and hash fragments, and removes trailing slashes (except `/`).
- `buildCanonicalUrl()` returns a full canonical URL (`https://<domain>/<path>`) when `NEXT_PUBLIC_SITE_URL` is configured, or a normalized path when unconfigured.
- Dynamic `[slug]` routes canonicalize directly to their own slug pathname and call `notFound()` when no matching record exists.

## Sitemap (`src/app/sitemap.ts`)

- Built with Next.js App Router `MetadataRoute.Sitemap`.
- Returns `[]` when `NEXT_PUBLIC_SITE_URL` is unconfigured so placeholder or `localhost` URLs are never published.
- When configured, outputs deduplicated URLs for all static public routes (`STATIC_INDEXABLE_ROUTES`) plus verified dynamic slugs from `EXPLORE_PLACES` (`category === "landmarks"`), `EXPLORE_STORIES`, and `EXPLORE_EXPERIENCES` with `lastModified` timestamps.
- Excludes `/api/*`, `/search`, and unverified routes.

## Robots Configuration (`src/app/robots.ts`)

- Built with Next.js App Router `MetadataRoute.Robots`.
- Allows crawling of public routes (`allow: "/"`), disallows `/api/` and `/search`, and includes `sitemap: "<origin>/sitemap.xml"` only when `getConfiguredSiteOrigin()` returns a valid configured origin.

## Structured Data — JSON-LD (`src/lib/seo/structured-data.ts` & `src/components/seo/json-ld.tsx`)

- **`Organization` (Root Layout):** Uses only verified brand attributes (`SchengeN Routes`, default description, `mailto:schengenroutes@gmail.com`, and official Instagram, Facebook, and TikTok profile URLs). Omits unverified fields such as street address, legal registration number, founding date, or awards.
- **`WebSite` (Root Layout):** Emitted only when `NEXT_PUBLIC_SITE_URL` is configured.
- **`BreadcrumbList` (Nested Detail Routes):** Mirrors the visible breadcrumb hierarchy on landmark, story, and experience detail pages.
- **`Article` (Editorial Stories):** Emitted on `/explore/stories/[slug]` with verified headline, excerpt, canonical entity URL, `datePublished`, `dateModified`, and author name.

## Open Graph & Social Sharing (`src/lib/seo/metadata.ts`)

- `buildRootMetadata()` and `buildPageMetadata()` configure Open Graph (`website` or `article`, `siteName`, `title`, `description`, `url`, `images`) and Twitter/X (`summary_large_image`) metadata using verified local assets or `/images/og-default.png` fallback.
