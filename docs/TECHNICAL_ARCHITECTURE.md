# Technical Architecture — SchengeN Routes

## Stack Overview

- **Runtime & Framework**: Next.js (App Router) with React and TypeScript (`strict: true`)
- **Styling & Design Tokens**: Tailwind CSS v4 (`@theme inline`) backed by CSS custom properties in `src/app/globals.css` and typed token constants in `src/styles/tokens.ts`
- **Typography**: `next/font/google` (`Manrope` and `Inter`) with `display: "swap"`
- **Validation & Forms**: Client-side accessible validation in M8 (`ContactForm`); Zod + React Hook Form + server processing introduced in M9
- **Persistence (Future Milestones)**: PostgreSQL when persistent storage is introduced

## Architectural Boundaries

- `src/app/`: Route segments (`/`, `/study` and `/study/*`, `/visa-guide` and `/visa-guide/*`, `/travel` and `/travel/*`, `/explore` and `/explore/*`, `/about`, `/contact`), root layout (`<PageLayout>`), global CSS variables, and metadata.
- `src/config/`: Centralized site and navigation definitions (`navigation.ts`) shared across header, mobile drawer, and footer.
- `src/components/ui/`: Service-agnostic foundational UI primitives (`Button`, `Container`, `Section`, `Heading`, `Paragraph`, `Eyebrow`, `Card`, `Badge`, `Divider`, `Input`, `Textarea`, `Link`, `BrandLogo`).
- `src/components/layout/`: Global structural shell (`SiteHeader`, `DesktopNavigation`, `MobileNavigation`, `SiteFooter`, `PageLayout`).
- `src/components/navigation/`: Reusable active-route links (`NavLink`) and accessible dropdown menus (`NavigationDropdown`).
- `src/components/home/`: Production homepage sections (`HeroSection`, `BrandIntroduction`, `ServiceGrid`, `ServiceCard`, `CountrySection`, `CountryCard`, `StudyOpportunities`, `WhyChooseUs`, `DestinationSection`, `DestinationCard`, `HowItWorks`, `LatestUpdates`, `ConsultationCta`).
- `src/components/study/`: Study in Europe section modules (`StudyHero`, `StudySubnav`, `CountryCard`, `CountryGrid`, `UniversityCard`, `UniversityDirectory`, `ProgrammeDirectory`, `ScholarshipDirectory`, `DeadlineList`, `StudyCta`).
- `src/components/visa-guide/`: European Visa Guide modules (`VisaHero`, `VisaSubnav`, `VisaCategoryCard`, `VisaCategoryGrid`, `CountryGuideCard`, `CountryGuideGrid`, `DocumentChecklist`, `ApplicationSteps`, `VisaFaq`, `VisaDisclaimer`, `ReviewStatusIndicator`, `VisaCta`).
- `src/components/travel/`: European Travel modules (`TravelHero`, `TravelSubnav`, `TravelIntro`, `DestinationCard`, `DestinationGrid`, `CityCard`, `CityGrid`, `TravelGuideCard`, `TravelGuideGrid`, `ItineraryCard`, `ItineraryGrid`, `TransportationSection`, `AccommodationSection`, `TravelTips`, `TravelCta`).
- `src/components/explore/`: Explore Europe modules (`ExploreHero`, `ExploreCategoryNavigation`, `ExploreBreadcrumbs`, `ExploreCategoryCard`, `ExplorePlaceCard`, `ExploreStoryCard`, `ExploreExperienceCard`, `FeaturedDiscoveries`, `CultureSection`, `ExploreArticleLayout`, `ExploreDirectory`, `ExploreCta`).
- `src/components/about/`: About Us section modules (`AboutHero`, `MissionVision`, `CoreValues`, `AboutServices`, `OurApproach`, `AboutCTA`).
- `src/components/contact/`: Contact Us section modules (`ContactHero`, `ContactInformation`, `SocialLinks`, `ContactForm`, `ContactGuidance`).
- `src/data/` & `src/lib/`: Centralised brand and contact constants (`constants.ts`), class merging (`utils.ts`), homepage, Study (`src/data/study/*`), Visa Guide (`src/data/visa-guide/*`), Travel (`src/data/travel/*`), and Explore (`src/data/explore/*`) datasets, plus filter/status/route/validation logic (`src/lib/study/*`, `src/lib/visa-guide/*`, `src/lib/travel/*`, `src/lib/explore/*`).
- `src/styles/`: Central design token definitions (`tokens.ts`).
- `src/types/`: Strict domain contracts (`study.ts`, `visa-guide.ts`, `travel.ts`, `explore.ts`) enforcing source citations and review dates.
