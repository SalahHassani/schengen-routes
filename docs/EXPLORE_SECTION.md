# Explore Europe Editorial & Discovery Architecture — SchengeN Routes (Milestone 7)

## 1. Purpose & Separation from Travel

The **Explore** section serves as SchengeN Routes' European cultural discovery and editorial magazine platform, distinct from the practical trip-planning scope of **Travel** (`/travel`):

- **Travel (`/travel`):** Practical destination planning, country/city overviews, suggested itineraries, transportation modes, accommodation guidance, and trip preparation.
- **Explore (`/explore`):** European culture and traditions, historic landmarks and architecture, history and heritage, food and cuisine, festivals and seasonal traditions, student life and city culture, nature and outdoors, local experiences, and editorial stories.

---

## 2. Information Architecture & Routes

All Explore pages render inside the shared `<PageLayout>` header and footer, paired with `<ExploreCategoryNavigation>` and `<ExploreBreadcrumbs>`:

- `/explore` — Explore landing page featuring Hero (`"Explore Europe Beyond the Ordinary"`), Explore Categories, Featured Discoveries, European Culture & Lifestyle highlights, interactive searchable/filterable Explore Directory, Latest Stories, and Explore CTA.
- `/explore/culture` — Culture & Traditions across Europe.
- `/explore/landmarks` — Landmarks & Architecture directory + `/explore/landmarks/[slug]` detail pages for verified landmark entries.
- `/explore/history` — History & Heritage locations.
- `/explore/food` — Food & Culinary Culture experiences and essays.
- `/explore/festivals` — Festivals & Seasonal Cultural Traditions (omitting unverified dates).
- `/explore/student-life` — Everyday student life and university city culture (cross-linking to `/study` for admissions and programmes).
- `/explore/nature` — Nature & Outdoor Landscapes.
- `/explore/experiences` — Local Experiences directory + `/explore/experiences/[slug]` detail pages for verified experiences.
- `/explore/stories` — Editorial Stories & Cultural Perspectives archive + `/explore/stories/[slug]` detail pages.

---

## 3. Components & User Experience

- Reusable components under `src/components/explore/`: `ExploreHero`, `ExploreCategoryNavigation`, `ExploreBreadcrumbs`, `ExploreCategoryCard`, `ExplorePlaceCard`, `ExploreStoryCard`, `ExploreExperienceCard`, `FeaturedDiscoveries`, `CultureSection`, `ExploreArticleLayout`, `ExploreDirectory`, and `ExploreCta`.
- Client-side search and multi-facet filtering (`category`, `country`, `contentType`) in `ExploreDirectory` with reset controls and an accessible empty state.
