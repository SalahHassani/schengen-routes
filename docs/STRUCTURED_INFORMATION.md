# Structured Information Architecture — SchengeN Routes

## Overview

All content rendered across SchengeN Routes is stored in strongly typed TypeScript modules under `src/data/**`, governed by explicit domain interfaces under `src/types/**`. Presentation components consume typed records and never hardcode unverified facts, dates, fees, or ratings.

## Domain Data Models

### 1. Study (`src/types/study.ts`)

- **`StudyCountryRecord`:** Country overview, official languages, common study cities, degree levels, and verified official links.
- **`StudyUniversityRecord`:** Institution name, country, city, `InstitutionType`, programme categories, and official admissions links.
- **`StudyProgrammeRecord`:** Programme title, `universitySlug`, `degreeLevel`, `fieldOfStudy`, `languageOfInstruction`, and separate `applicationOpeningDate`, `applicationDeadline`, and `intakeStartDate` fields (nullable when unverified).
- **`StudyScholarshipRecord`:** Provider, country, eligible nationalities/degree levels, funding type, and nullable coverage/amount notes.
- **`ApplicationSchedule`:** Cycle-level or institutional schedules keeping opening dates, deadlines, and intake dates distinct, with explicit `awaitingOfficialConfirmation` flags.

### 2. Visa Guide (`src/types/visa-guide.ts`)

- **`VisaCategoryRecord`:** Separates `schengen-short-stay`, `student-visa`, `national-long-stay`, and `other-national` categories with `distinctionNote` and `reviewStatus`.
- **`CountryVisaGuideRecord`:** Stores `isSchengenMember` and `isEuMember` as independent booleans alongside `membershipNote`, separate short-stay/student/national overviews, nullable `verifiedFeesNote` and `verifiedProcessingTimeNote`, and official authority references.
- **`DocumentChecklistItem` & `ApplicationProcessStep`:** Structured by `visaCategory`, `country`, `purpose`, `isStudentContext`, `classification`, and `reviewStatus`.
- **`VisaFaqItem`:** Question, answer, category, country scope, source authority, and `lastReviewed` date.

### 3. Travel (`src/types/travel.ts`)

- **`TravelCountryGuideRecord` & `TravelCityGuideRecord`:** Practical destination introductions, transportation overviews, currency/language notes, neighbourhoods, and official tourism sources.
- **`TravelDestinationRecord`:** Regional/city destinations categorized by `DestinationCategory` with verified attractions and review dates.
- **`TravelItineraryRecord`:** Multi-stop itineraries with explicit `durationDays`, `durationLabel`, `orderedStops`, `dailySchedule`, and nullable `estimatedBudgetNote`.
- **`TravelGuideArticle`, `TransportModeGuide`, `AccommodationCategoryGuide`, `PracticalTravelTip`:** Structured practical travel guidance separated from cultural Explore records.

### 4. Explore (`src/types/explore.ts`)

- **`ExploreCategory`, `ExplorePlace`, `ExploreStory`, `ExploreExperience`, `ExploreEvent`:** Cultural, historical, culinary, festival, nature, and student-life records using stable `id` and `slug` identifiers, verified `source` references, and `lastReviewed` / `updatedAt` timestamps without fabricated ratings or popularity metrics.

### 5. Unified Search Projection (`src/types/search.ts`)

- **`SearchIndexItem`:** Read-only projection derived at runtime by `src/lib/search/index.ts` from the four domain datasets above. It references existing records via stable `id` prefixes and verified internal `href` routes rather than duplicating editorial content.

## Data Consistency Rules

1. **Single Source of Truth:** Domain records live in `src/data/**`; `src/lib/search/index.ts` transforms them dynamically without manual shadow copies.
2. **Domain Separation:** Country records in Study, Visa Guide, Travel, and Explore remain separate domain models because their responsibilities, regulatory notes, and source authorities differ.
3. **No Inferred or Fabricated Values:** Nullable fields (`null` or optional properties) represent unverified dates, fees, budgets, or processing times and are never guessed by filters or search formatters.
4. **Valid Internal Links:** Every `href` in `SearchIndexItem` maps to an existing App Router page (`/study/*`, `/visa-guide/*`, `/travel/*`, `/explore/*`).

## Future Extensibility

- Adding new records to any `src/data/**` array automatically includes them in `getSearchIndex()` on next build/load with zero index schema changes.
- Additional section-level URL query parameters can reuse `sanitizeParam()`, `sanitizeEnumParam()`, and `buildSearchQueryString()` from `src/lib/search/query-params.ts`.
