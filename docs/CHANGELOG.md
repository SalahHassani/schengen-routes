# Changelog — SchengeN Routes

All notable changes to this project will be documented in this file.

## [0.9.0] - Milestone 8: About Us and Contact Pages

### Added

- Centralised official brand, email (`schengenroutes@gmail.com`), WhatsApp (`+36 70 792 3072` / `https://wa.me/36707923072`), WhatsApp Community, Instagram, Facebook, and TikTok constants in `src/lib/constants.ts`.
- Built About Us section components in `src/components/about/` (`AboutHero`, `MissionVision`, `CoreValues`, `AboutServices`, `OurApproach`, `AboutCTA`) and upgraded `src/app/about/page.tsx`.
- Built Contact Us section components in `src/components/contact/` (`ContactHero`, `ContactInformation`, `SocialLinks`, `ContactForm`, `ContactGuidance`) and upgraded `src/app/contact/page.tsx` with accessible client validation, sensitive-document privacy guidance, and honest M9 backend pending notice with pre-filled `mailto:` / WhatsApp fallbacks.
- Created `docs/ABOUT_AND_CONTACT.md` and updated `docs/WEBSITE_REQUIREMENTS.md`, `docs/TECHNICAL_ARCHITECTURE.md`, `docs/DEVELOPMENT_ROADMAP.md`, and `docs/CHANGELOG.md`.

## [0.8.0] - Milestone 7: Explore Europe Discovery Platform

### Added

- Defined strict Explore domain models in `src/types/explore.ts` (`ExploreCategory`, `ExplorePlace`, `ExploreStory`, `ExploreExperience`, `ExploreEvent`, `ExploreFilterState`, `ExploreSourceReference`).
- Implemented search and multi-facet filtering (`category`, `country`, `contentType`) in `src/lib/explore/filters.ts`.
- Added source-backed Explore datasets in `src/data/explore/` (`categories.ts`, `places.ts`, `stories.ts`, `experiences.ts`, `events.ts`) using verified local photography and official cultural, archaeological, and tourism portals without fabricated dates, fees, or visitor statistics.
- Built Explore UI components in `src/components/explore/` (`ExploreHero`, `ExploreCategoryNavigation`, `ExploreBreadcrumbs`, `ExploreCategoryCard`, `ExplorePlaceCard`, `ExploreStoryCard`, `ExploreExperienceCard`, `FeaturedDiscoveries`, `CultureSection`, `ExploreArticleLayout`, `ExploreDirectory`, `ExploreCta`) and routes under `src/app/explore/` (`/explore`, `/explore/culture`, `/explore/landmarks`, `/explore/history`, `/explore/food`, `/explore/festivals`, `/explore/student-life`, `/explore/nature`, `/explore/experiences`, `/explore/stories`, `/explore/landmarks/[slug]`, `/explore/stories/[slug]`, `/explore/experiences/[slug]`).
- Created `docs/EXPLORE_SECTION.md`, `docs/EXPLORE_DATA_MODEL.md`, and `docs/EXPLORE_CONTENT_SOURCES.md`, and updated `docs/WEBSITE_REQUIREMENTS.md`, `docs/TECHNICAL_ARCHITECTURE.md`, `docs/DEVELOPMENT_ROADMAP.md`, and `docs/CHANGELOG.md`.

## [0.7.0] - Milestone 6: European Travel Discovery Platform

### Added

- Defined strict Travel domain models in `src/types/travel.ts` (`TravelDestinationRecord`, `TravelCountryGuideRecord`, `TravelCityGuideRecord`, `TravelItineraryRecord`, `TravelGuideArticle`, `TransportModeGuide`, `AccommodationCategoryGuide`, `PracticalTravelTip`, `TravelFilterState`).
- Implemented search/multi-facet filtering (`src/lib/travel/filters.ts`) and lightweight ordered route helpers (`src/lib/travel/route-utils.ts`) without fabricated coordinates, distances, or schedules.
- Added source-backed Travel datasets in `src/data/travel/` (`destinations.ts`, `countries.ts`, `cities.ts`, `itineraries.ts`, `guides.ts`, `practical.ts`) using verified local editorial images and official national/city tourism and transport links without invented prices, schedules, or availability.
- Built Travel UI components in `src/components/travel/` (`TravelHero`, `TravelSubnav`, `TravelIntro`, `DestinationCard`, `DestinationGrid`, `CityCard`, `CityGrid`, `TravelGuideCard`, `TravelGuideGrid`, `ItineraryCard`, `ItineraryGrid`, `TransportationSection`, `AccommodationSection`, `TravelTips`, `TravelCta`) and routes under `src/app/travel/` (`/travel`, `/travel/destinations`, `/travel/countries`, `/travel/cities`, `/travel/guides`, `/travel/itineraries`, `/travel/transportation`, `/travel/accommodation`).
- Created `docs/TRAVEL_SECTION.md`, `docs/TRAVEL_DATA_MODEL.md`, and `docs/TRAVEL_CONTENT_SOURCES.md`, and updated `docs/WEBSITE_REQUIREMENTS.md`, `docs/TECHNICAL_ARCHITECTURE.md`, `docs/DEVELOPMENT_ROADMAP.md`, and `docs/CHANGELOG.md`.

## [0.6.0] - Milestone 5: European Visa Guide Platform Foundation

### Added

- Defined strict Visa Guide domain models in `src/types/visa-guide.ts` (`VisaCategoryRecord`, `CountryVisaGuideRecord`, `DocumentChecklistItem`, `ApplicationProcessStep`, `VisaFaqItem`) with separate `isEuMember` and `isSchengenMember` booleans, 3-tier document classifications, review status tracking, and official source references.
- Implemented review-status badges/descriptions (`src/lib/visa-guide/review-status.ts`), HTTPS source validation (`src/lib/visa-guide/source-validation.ts`), and search/multi-facet filtering (`src/lib/visa-guide/filters.ts`).
- Added source-backed datasets in `src/data/visa-guide/` (`visa-categories.ts`, `countries.ts`, `document-checklists.ts`, `application-processes.ts`, `faqs.ts`) citing official European Commission, foreign ministry, and national immigration portals without fabricated fees or processing times.
- Built Visa Guide UI components in `src/components/visa-guide/` (`VisaHero`, `VisaSubnav`, `VisaCategoryCard`, `VisaCategoryGrid`, `CountryGuideCard`, `CountryGuideGrid`, `DocumentChecklist`, `ApplicationSteps`, `VisaFaq`, `VisaDisclaimer`, `ReviewStatusIndicator`, `VisaCta`) and routes under `src/app/visa-guide/` (`/visa-guide`, `/visa-guide/schengen-visa`, `/visa-guide/student-visa`, `/visa-guide/national-visas`, `/visa-guide/countries`, `/visa-guide/document-checklists`, `/visa-guide/application-process`, `/visa-guide/faqs`).
- Created `docs/VISA_GUIDE.md`, `docs/VISA_DATA_MODEL.md`, and `docs/VISA_SOURCE_VERIFICATION.md`, and updated `docs/WEBSITE_REQUIREMENTS.md`, `docs/TECHNICAL_ARCHITECTURE.md`, `docs/DEVELOPMENT_ROADMAP.md`, and `docs/CHANGELOG.md`.

## [0.5.0] - Milestone 4: Study in Europe

### Added

- Defined strict Study domain models in `src/types/study.ts` (`StudyCountryRecord`, `StudyUniversityRecord`, `StudyProgrammeRecord`, `StudyScholarshipRecord`, `ApplicationSchedule`) with required `sourceUrl` and `lastReviewed` fields.
- Implemented date-derived application status logic (`deriveDeadlineStatus`, `deriveScheduleStatus`, `formatIsoDateForDisplay`) in `src/lib/study/deadline-status.ts` separating opening dates, deadlines, and intake dates.
- Implemented search and multi-facet filtering utilities (`filterUniversities`, `filterProgrammes`) in `src/lib/study/filters.ts`.
- Added Study datasets in `src/data/study/` (`countries.ts`, `universities.ts`, `programmes.ts`, `scholarships.ts`, `deadlines.ts`) with verified official links, review dates, and honest empty states where records await verification.
- Built Study UI components in `src/components/study/` and sub-routes under `src/app/study/` (`/study`, `/study/countries`, `/study/universities`, `/study/programmes`, `/study/scholarships`, `/study/application-deadlines`).
- Created `docs/STUDY_SECTION.md` and `docs/STUDY_DATA_MODEL.md`, and updated `docs/WEBSITE_REQUIREMENTS.md`, `docs/TECHNICAL_ARCHITECTURE.md`, `docs/DEVELOPMENT_ROADMAP.md`, and `docs/CHANGELOG.md`.

## [0.4.0] - Milestone 3: Homepage Design and Implementation

### Added

- Created structured homepage data modules in `src/data/services.ts`, `src/data/countries.ts`, and `src/data/destinations.ts`.
- Sourced and placed 14 distinct European editorial images across `public/assets/images/` (`hero/`, `study/`, `countries/`, `destinations/`).
- Built all 10 homepage sections in `src/components/home/`: `HeroSection`, `BrandIntroduction`, `ServiceGrid`, `ServiceCard`, `CountrySection`, `CountryCard`, `StudyOpportunities`, `WhyChooseUs`, `DestinationSection`, `DestinationCard`, `HowItWorks`, `LatestUpdates`, and `ConsultationCta`.
- Updated `src/app/page.tsx` with the complete production homepage composition, route metadata, and Open Graph tags.
- Created `docs/HOMEPAGE_IMPLEMENTATION.md` and updated `docs/TECHNICAL_ARCHITECTURE.md`, `docs/WEBSITE_REQUIREMENTS.md`, and `docs/DEVELOPMENT_ROADMAP.md`.

## [0.3.0] - Milestone 2: Shared Layout and Navigation

### Added

- Created centralized navigation configuration (`src/config/navigation.ts`) defining primary routes, planned service sub-categories, consultation CTA, footer link groups, and verified contact/social channels.
- Built active-route-aware `<NavLink />` (`src/components/navigation/nav-link.tsx`) and accessible click/keyboard `<NavigationDropdown />` (`src/components/navigation/navigation-dropdown.tsx`).
- Built shared layout components in `src/components/layout/`: `<SiteHeader />` (with skip-to-content link, original logo, desktop nav, and Get Consultation CTA), `<DesktopNavigation />`, `<MobileNavigation />` (accessible slide-over drawer with `Escape` handling, scroll lock, and expandable sub-categories), `<SiteFooter />` (Deep Navy 4-column footer with dynamic copyright year), and `<PageLayout />`.
- Wired `<PageLayout />` into `src/app/layout.tsx` and created placeholder routes for `/study`, `/visa-guide`, `/travel`, `/explore`, `/about`, and `/contact`.
- Created `docs/SHARED_LAYOUT_AND_NAVIGATION.md` and updated `docs/TECHNICAL_ARCHITECTURE.md`, `docs/WEBSITE_REQUIREMENTS.md`, and `docs/DEVELOPMENT_ROADMAP.md`.

## [0.2.0] - Milestone 1: Brand Identity and Design System

### Added

- Created central brand constants (`src/lib/constants.ts`), class-name utility (`src/lib/utils.ts`), and design token definitions (`src/styles/tokens.ts`).
- Configured CSS custom properties, Tailwind v4 `@theme inline` tokens, accessible `:focus-visible` outlines, and `prefers-reduced-motion` support in `src/app/globals.css`.
- Configured `Manrope` and `Inter` Google Fonts and brand favicon metadata in `src/app/layout.tsx`.
- Built foundational accessible UI component library in `src/components/ui/`: `Button`, `Container`, `Section`, `Heading`, `Paragraph`, `Eyebrow`, `Card`, `Badge`, `Divider`, `Input`, `Textarea`, `Link`, and `BrandLogo`.
- Added approved original brand logo asset at `public/assets/brand/logo-primary.png` and created `docs/DESIGN_SYSTEM.md`.

## [0.1.0] - Milestone 0: Project Initialization

### Added

- Initialized Next.js App Router project with React, TypeScript (strict mode), and Tailwind CSS.
- Configured ESLint and Prettier (`prettier-plugin-tailwindcss`) with `lint`, `typecheck`, `format`, and `format:check` npm scripts.
- Created modular directory structure, `.env.example`, root `README.md`, and Milestone 0 project documentation under `docs/`.

## [M10] - 2026-11-24

### Added

- Unified in-memory search index (`src/lib/search/index.ts`, `src/types/search.ts`) covering Study, Visa Guide, Travel, and Explore records.
- URL query parameter sanitization and serialization helpers (`src/lib/search/query-params.ts`).
- Reusable search and filter UI controls (`src/components/search/search-controls.tsx`, `src/components/search/global-search-client.tsx`) and `/search` route (`src/app/search/page.tsx`) with `noindex, follow` metadata.
- Cross-platform Node test runner (`scripts/run-tests.mjs`, `npm test`) and M10 unit test suite (`src/lib/__tests__/search-and-filtering.test.ts`).
- Architecture and data-model documentation (`docs/SEARCH_AND_FILTERING.md`, `docs/STRUCTURED_INFORMATION.md`).
