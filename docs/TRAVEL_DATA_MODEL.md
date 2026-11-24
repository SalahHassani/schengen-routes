# Travel Data Model & Storage Strategy — SchengeN Routes

## 1. Domain Types (`src/types/travel.ts`)

- `TravelDestinationRecord`: Destination name, slug, country, optional city, region, category, short description, hero and gallery images, main attractions, recommended activities, travel tips, transportation and accommodation notes, nullable `estimatedVisitDuration`, related guide/itinerary slugs, `exploreHref`, `lastReviewed`, and `sources`.
- `TravelCountryGuideRecord`: Country name, slug, region, image, introduction, main destinations, important cities, transportation overview, currency and language info, practical travel info, related guides, `officialTourismSources`, and `lastReviewed`.
- `TravelCityGuideRecord`: City name, slug, country, hero image, introduction, main attractions, neighbourhoods, public transportation overview, suggested activities, travel tips, `recommendedVisitDuration`, related itineraries, `officialTourismSources`, `exploreHref`, and `lastReviewed`.
- `TravelItineraryRecord`: Title, slug, description, category, duration label and numeric `durationDays`, countries, cities, `orderedStops`, `dailySchedule`, suggested activities, transportation between stops, accommodation guidance, nullable `estimatedBudgetNote`, travel difficulty, `bestTravelPeriodNote`, `lastReviewed`, and `sources`.
- `TravelGuideArticle`: Title, slug, category, summary, cover image, modular `contentSections`, related destinations/itineraries, `authorOrTeam`, `publicationDate`, `lastUpdated`, `sources`, `seoTitle`, and `seoDescription`.
- `TransportModeGuide`, `AccommodationCategoryGuide`, `PracticalTravelTip`, and `TravelFilterState`.

---

## 2. Typed Datasets & Future Backend / CMS Integration

Initial datasets live in `src/data/travel/` (`destinations.ts`, `countries.ts`, `cities.ts`, `itineraries.ts`, `guides.ts`, `practical.ts`) and are filtered via pure functions in `src/lib/travel/filters.ts`. Future database or CMS integration can replace static loaders while keeping `src/types/travel.ts` and UI components stable.
