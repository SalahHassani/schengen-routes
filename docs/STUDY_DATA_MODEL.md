# Study Data Model & Migration Strategy — SchengeN Routes

## 1. Domain Contracts (`src/types/study.ts`)

- `StudyCountryRecord`: Represents country discovery data (`slug`, `name`, `region`, `imageSrc`, `imageAlt`, `summary`, `officialLanguages`, `commonStudyCities`, `educationSystemOverview`, `availableDegreeLevels`, optional overviews, `applicationCycle`, `applicationOpeningDate`, `applicationDeadline`, `intakeStartDate`, `officialLinks`, `sourceUrl`, `lastReviewed`).
- `StudyUniversityRecord`: Represents institutional records (`slug`, `name`, `country`, `city`, `institutionType`, `summary`, `officialWebsiteUrl`, `officialAdmissionsUrl`, `availableDegreeLevels`, `programmeCategories`, `applicationCycle`, `applicationNotes`, `sourceUrl`, `lastReviewed`).
- `StudyProgrammeRecord`: Represents degree programme records (`slug`, `name`, `universitySlug`, `universityName`, `country`, `city`, `degreeLevel`, `fieldOfStudy`, `languageOfInstruction`, optional `duration`/`tuitionInfo`/`entryRequirementsSummary`, `applicationCycle`, `applicationOpeningDate`, `applicationDeadline`, `intakeStartDate`, `officialProgrammeUrl`, `sourceUrl`, `lastReviewed`).
- `StudyScholarshipRecord`: Represents scholarship records (`slug`, `name`, `provider`, `country`, `eligibleNationalities`, `eligibleDegreeLevels`, `fundingType`, optional `fundingAmountInfo`/`coverageSummary`/`eligibilitySummary`, `applicationCycle`, `applicationOpeningDate`, `applicationDeadline`, `officialApplicationUrl`, `sourceUrl`, `lastReviewed`).
- `ApplicationSchedule`: Separates `applicationOpeningDate`, `applicationDeadline`, and `intakeStartDate` with `awaitingOfficialConfirmation`, `sourceUrl`, and `lastReviewed`.

---

## 2. Data Modules (`src/data/study/`)

- `countries.ts`: Initial country discovery records for Germany, Italy, Hungary, France, Netherlands, and Austria.
- `universities.ts`: Initial verified public university records (Technical University of Munich, University of Amsterdam, University of Vienna) with official admissions URLs.
- `programmes.ts`: Typed empty array (`[]`) until individual degree programmes are verified from official sources.
- `scholarships.ts`: Typed empty array (`[]`) until verified scholarship offers are confirmed.
- `deadlines.ts`: Verified institutional schedule references for the 2027/2028 cycle.

---

## 3. Future Database / CMS Migration Strategy

Because components consume typed arrays and pure selector/filter functions (`src/lib/study/filters.ts`, `src/lib/study/deadline-status.ts`) rather than hardcoded JSX records, `src/data/study/*` can later be backed by repository queries against PostgreSQL or a structured CMS while preserving `src/types/study.ts` and the UI layer.
