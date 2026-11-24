# Explore Data Model & Content Management — SchengeN Routes

## 1. Domain Entities (`src/types/explore.ts`)

- `ExploreCategory`: `id`, `title`, `slug` (`ExploreCategorySlug`), `href`, `description`, `image`, `imageAlt`, `icon`, and optional `contentCount`.
- `ExplorePlace`: `id`, `name`, `slug`, `country`, optional `city`, `category`, `description`, `image`, `imageAlt`, `significance`, `source` (`ExploreSourceReference`), `lastReviewed`, and optional `featured`.
- `ExploreStory`: `id`, `title`, `slug`, `excerpt`, `content` (paragraph array), `category`, optional `country`/`city`, `coverImage`, `coverImageAlt`, optional `author`, optional `publishedAt`, `updatedAt`, `sources`, optional `readingTime`, and optional `featured`.
- `ExploreExperience`: `id`, `title`, `slug`, `location`, `country`, optional `city`, `category`, `description`, `image`, `imageAlt`, `source`, `lastReviewed`, and optional `featured`.
- `ExploreEvent`: `id`, `title`, `location`, `country`, `description`, optional `eventDate` (populated only when verified), `source`, and `lastReviewed`.
- `ExploreFilterState`: `searchQuery`, `category`, `country`, and `contentType`.

---

## 2. Relationships & Content Management Approach

- Static TypeScript modules under `src/data/explore/` (`categories.ts`, `places.ts`, `stories.ts`, `experiences.ts`, `events.ts`) separate editorial data from presentation components.
- Dynamic routes (`/explore/landmarks/[slug]`, `/explore/stories/[slug]`, `/explore/experiences/[slug]`) use `generateStaticParams()` over verified records and invoke `notFound()` for unknown slugs so no empty dynamic pages or broken links are generated.
- Pure filter helpers in `src/lib/explore/filters.ts` combine and filter places, stories, experiences, and cultural events cleanly without external search infrastructure.
