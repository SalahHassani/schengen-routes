# European Travel Discovery Architecture — SchengeN Routes (Milestone 6)

## 1. Purpose & Scope

The **Travel** section provides source-backed European destination discovery, country and city overviews, practical travel guides, suggested itineraries, transportation and accommodation guidance, and practical travel tips.

- SchengeN Routes Travel is an **information and discovery guide**, not a licensed travel agency, booking engine, ticket vendor, or live reservation provider.
- No travel prices, live schedules, seat/room availability, or commercial offers are fabricated or presented as guaranteed bookings.

---

## 2. Route Architecture

All Travel routes reuse the shared `<PageLayout>` global header and footer and provide dedicated section navigation via `<TravelSubnav>`:

- `/travel` — Travel landing page covering all 10 required sections: Hero, Introduction, Explore Destinations, Popular European Cities, Travel Guides, European Itineraries, Transportation, Accommodation, Travel Tips & Practical Information, and Final CTA.
- `/travel/destinations` — Searchable and filterable destination discovery directory.
- `/travel/countries` — Country-level travel overviews covering main destinations, important cities, transportation, currency, language, practical advice, and official national tourism boards.
- `/travel/cities` — Searchable and filterable city guides with neighbourhoods, public transport overviews, suggested activities, and official city tourism portals.
- `/travel/guides` — Filterable practical travel guide articles covering trip planning, cross-border travel, public and rail transport, accommodation planning, and packing.
- `/travel/itineraries` — Filterable suggested single-city and multi-country itineraries with ordered stops, day-by-day outlines, and source references.
- `/travel/transportation` — Overview of trains, buses, flights, local public transportation, car travel, and ferries with links to official operators/EU passenger information.
- `/travel/accommodation` — Evaluation guidance across hotels, hostels, student accommodation, short-term rentals, budget accommodation, and long-term stays.

---

## 3. Map & Route Support Readiness

`src/lib/travel/route-utils.ts` provides lightweight sequence helpers (`formatStopSequence`, `getOrderedUniqueCountries`) for ordered itinerary stops without introducing paid map APIs, invented coordinates, fake route distances, or fake travel durations.
