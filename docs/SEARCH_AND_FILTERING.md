# Search and Filtering Architecture — SchengeN Routes

## Overview

SchengeN Routes provides unified discovery across all four core service areas—**Study**, **Visa Guide**, **Travel**, and **Explore**—using deterministic in-memory filtering over local TypeScript data structures. No external search infrastructure (such as Algolia, Elasticsearch, or Typesense) or database search backend is used.

## Search Architecture

- **Types (`src/types/search.ts`):** Defines `ServiceArea`, `SearchContentType`, `SearchIndexItem`, `GlobalSearchFilters`, and `GroupedSearchResults`.
- **Search Index & Matching (`src/lib/search/index.ts`):**
  - `getSearchIndex()` builds and memoizes a normalized `SearchIndexItem[]` index directly from existing data modules under `src/data/**`.
  - `searchAllContent()` normalizes user input (`trim().toLowerCase()`) and filters by keyword query, `serviceArea`, `contentType`, and `country`.
  - `groupSearchResultsByServiceArea()` groups matching entries in canonical order (`Study`, `Visa Guide`, `Travel`, `Explore`), omitting empty groups.
- **Query Parameter Utilities (`src/lib/search/query-params.ts`):**
  - `sanitizeParam()` and `sanitizeEnumParam()` safely parse URL query values and fall back when values are empty or invalid.
  - `buildSearchQueryString()` serializes active filters while omitting empty strings and default `"all"` values so shared URLs stay clean.
- **Reusable UI Controls (`src/components/search/search-controls.tsx` & `src/components/search/global-search-client.tsx`):**
  - `SearchBarInput`, `FilterSelect`, `ActiveFilterBar`, `SearchResultCard`, `SearchEmptyState`, and `GroupedSearchResultsList`.
  - Uses accessible `<label htmlFor>` associations, `role="status"` / `aria-live="polite"` result announcements, keyboard-focusable filter removal chips, and clear empty-state reset controls.

## Global Search (`/search`)

- **Route:** `src/app/search/page.tsx` renders `GlobalSearchClient` inside `<Suspense>` and `<PageLayout>`.
- **SEO Strategy:** Configured with `robots: { index: false, follow: true }` and `alternates: { canonical: "/search" }` so search and filter URL permutations are not indexed as duplicate content.
- **Privacy Boundary:** Only public structured domain records are indexed; private enquiry submissions and administrative records are excluded.

## Searchable Content Types

| Service Area   | Indexed Content Types                                                                                                                 | Source Modules                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Study**      | `Study Country`, `University`, `Programme`, `Scholarship`, `Application Deadline`                                                     | `src/data/study/{countries,universities,programmes,scholarships,deadlines}.ts`                      |
| **Visa Guide** | `Visa Category`, `Visa Country Guide`, `Document Checklist`, `Application Procedure`, `Visa FAQ`                                      | `src/data/visa-guide/{visa-categories,countries,document-checklists,application-processes,faqs}.ts` |
| **Travel**     | `Travel Country`, `City Guide`, `Destination`, `Travel Guide`, `Itinerary`, `Transportation`, `Accommodation`, `Practical Travel Tip` | `src/data/travel/{countries,cities,destinations,guides,itineraries,practical}.ts`                   |
| **Explore**    | `Explore Category`, `Place & Landmark`, `Story`, `Experience`, `Cultural Event`                                                       | `src/data/explore/{categories,places,stories,experiences,events}.ts`                                |

## Section-Level Filtering Logic

- **Study (`src/lib/study/filters.ts`):** `filterUniversities()` and `filterProgrammes()` match trimmed, case-insensitive keywords across names, cities, countries, institution types, degree levels, fields of study, and languages of instruction. Application opening dates, deadlines, and intake start dates remain strictly separate.
- **Visa Guide (`src/lib/visa-guide/filters.ts`):** `filterVisaCategories()`, `filterCountryVisaGuides()`, `filterDocumentChecklist()`, and `filterVisaFaqs()` preserve separate Schengen short-stay, national long-stay, and student visa contexts as well as distinct EU vs. Schengen membership notes.
- **Travel (`src/lib/travel/filters.ts`):** `filterDestinations()`, `filterCities()`, `filterTravelGuides()`, and `filterItineraries()` filter by country, city, category, and verified itinerary duration buckets (`short`, `medium`, `week-plus`).
- **Explore (`src/lib/explore/filters.ts`):** `filterExploreItems()` unifies filtering across places, stories, experiences, and cultural events by keyword, category, country, and content type.

## URL Query Parameters

- `/search` persists active state in `?q=`, `?service=`, `?type=`, and `?country=` via `router.replace(..., { scroll: false })`.
- Default values (`"all"` or empty strings) are excluded from the query string, and unrecognized parameter values fall back safely without throwing errors.

## Known Limitations

- Matching uses deterministic substring checks over normalized fields rather than fuzzy or synonym expansion.
- `STUDY_PROGRAMMES` and `STUDY_SCHOLARSHIPS` currently contain empty arrays (`[]`) until verified records are published, so zero programme or scholarship items appear in search results.
- Desktop and mobile header search shortcuts should be kept synchronized with `PRIMARY_NAVIGATION` when updating header layouts.
