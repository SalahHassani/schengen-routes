# Visa Guide Data Model & Future Storage Strategy — SchengeN Routes

## 1. Domain Types (`src/types/visa-guide.ts`)

- `VisaCategoryRecord`: Defines visa pathways (`id`, `slug`, `title`, `shortLabel`, `summary`, `distinctionNote`, `typicalPurposes`, `isStudentContext`, `guideHref`, `officialSourceUrl`, `sourceAuthority`, `publishedDate`, `lastReviewed`, `reviewStatus`).
- `CountryVisaGuideRecord`: Defines country-specific visa records (`slug`, `name`, `region`, `imageSrc`, `imageAlt`, `summary`, separate `isSchengenMember` and `isEuMember` booleans, `membershipNote`, `officialForeignMinistry`, `officialImmigrationAuthority`, `officialVisaPortal`, `embassyGuidanceNote`, `shortStayOverview`, `nationalLongStayOverview`, `studentVisaOverview`, `residencePermitOverview`, `applicationProcedureSummary`, `documentRequirementsSummary`, `appointmentInfo`, nullable `verifiedFeesNote` and `verifiedProcessingTimeNote`, `editorialNotes`, `sources`, `publishedDate`, `lastReviewed`, `reviewStatus`).
- `DocumentChecklistItem`: Classifies supporting documents into `Generally required`, `Conditional or situation-dependent`, or `Country-specific or authority-specific`.
- `ApplicationProcessStep`: Defines modular workflow stages (`stepNumber`, `stepTitle`, `explanation`, `requiredAction`, `relevantDocuments`, `officialLink`, `sourceAuthority`, `lastReviewed`, `reviewStatus`).
- `VisaFaqItem`: Stores qualified Q&A records with source attributions and review status.

---

## 2. Typed Datasets & Future Database / CMS Strategy

Initial datasets live in `src/data/visa-guide/` (`visa-categories.ts`, `countries.ts`, `document-checklists.ts`, `application-processes.ts`, `faqs.ts`) and are queried through pure filter functions in `src/lib/visa-guide/filters.ts`. When PostgreSQL or an editorial CMS is introduced in later milestones, data loaders can replace static arrays while keeping `src/types/visa-guide.ts` and UI components unchanged.
