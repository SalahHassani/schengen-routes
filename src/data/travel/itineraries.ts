import type { TravelItineraryRecord } from "@/types/travel";

const REVIEW_DATE = "2026-11-24";

export const TRAVEL_ITINERARIES: readonly TravelItineraryRecord[] = [
  {
    slug: "amsterdam-weekend-city-break",
    title: "Amsterdam Weekend City Break (Suggested Plan)",
    description:
      "A suggested two-day city break focusing on walkable canal districts, museums, and local neighbourhood exploration.",
    category: "Weekend City Break",
    durationLabel: "2 Days / Weekend",
    durationDays: 2,
    countries: ["Netherlands"],
    cities: ["Amsterdam"],
    orderedStops: [
      {
        order: 1,
        city: "Amsterdam",
        country: "Netherlands",
        focus: "Canal ring, historic streets, and central districts",
        transportToNextNote: null,
      },
    ],
    dailySchedule: [
      {
        day: 1,
        title: "Canal Ring & Historic Core",
        summary:
          "Explore central canals on foot, visit a major museum, and walk through nearby neighbourhoods.",
      },
      {
        day: 2,
        title: "Neighbourhoods & Markets",
        summary:
          "Spend the morning in a local district such as De Pijp or Jordaan before departing.",
      },
    ],
    suggestedActivities: ["Canal-side walking", "Museum visits", "Neighbourhood exploration"],
    transportationBetweenStops: "Single-city stay using walking, trams, metro, or local buses.",
    accommodationGuidance:
      "Book well in advance for peak weekend dates and check room size and cancellation policies.",
    estimatedBudgetNote: null,
    travelDifficulty: "Accessible / Introductory",
    bestTravelPeriodNote:
      "Spring through autumn offers mild daytime conditions; check seasonal hours.",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "I amsterdam",
        label: "Official Amsterdam Visitor Guide",
        url: "https://www.iamsterdam.com/en",
      },
    ],
  },
  {
    slug: "paris-three-day-city-trip",
    title: "Paris Three-Day City Trip (Suggested Plan)",
    description:
      "A suggested three-day urban itinerary pairing iconic monuments and museums with relaxed arrondissement walks.",
    category: "Three-Day City Trip",
    durationLabel: "3 Days",
    durationDays: 3,
    countries: ["France"],
    cities: ["Paris"],
    orderedStops: [
      {
        order: 1,
        city: "Paris",
        country: "France",
        focus: "Central monuments, museums, and riverfront quarters",
        transportToNextNote: null,
      },
    ],
    dailySchedule: [
      {
        day: 1,
        title: "Riverfront & Historic Landmarks",
        summary: "Focus on central riverfront sights and nearby historic streets.",
      },
      {
        day: 2,
        title: "Museums & Boulevards",
        summary: "Dedicate time to major art or history collections and an adjacent neighbourhood.",
      },
      {
        day: 3,
        title: "Hilltop & Local Quarters",
        summary:
          "Explore an outer neighbourhood such as Montmartre or Le Marais at an unhurried pace.",
      },
    ],
    suggestedActivities: ["Museum visits", "Walking tours", "Metro and bus rides"],
    transportationBetweenStops: "Single-city stay served by the Paris metro, RER, and bus network.",
    accommodationGuidance:
      "Choose lodging near metro connections and verify check-in times if arriving late.",
    estimatedBudgetNote: null,
    travelDifficulty: "Moderate Pace",
    bestTravelPeriodNote: "Spring and autumn shoulder seasons provide comfortable walking weather.",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "France.fr",
        label: "Explore France",
        url: "https://www.france.fr/en",
      },
    ],
  },
  {
    slug: "rome-weekend-cultural-break",
    title: "Rome Three-Day Cultural Trip (Suggested Plan)",
    description:
      "A suggested three-day cultural route through Rome's historic centre, piazzas, and classic neighbourhoods.",
    category: "Three-Day City Trip",
    durationLabel: "3 Days",
    durationDays: 3,
    countries: ["Italy"],
    cities: ["Rome"],
    orderedStops: [
      {
        order: 1,
        city: "Rome",
        country: "Italy",
        focus: "Centro Storico, ancient landmarks, and Trastevere",
        transportToNextNote: null,
      },
    ],
    dailySchedule: [
      {
        day: 1,
        title: "Historic Piazzas & Centro Storico",
        summary: "Walk through central squares, fountains, and historic lanes.",
      },
      {
        day: 2,
        title: "Classical Heritage & Museums",
        summary: "Visit major historic sites with advance reservations and explore nearby streets.",
      },
      {
        day: 3,
        title: "Neighbourhoods Across the Tiber",
        summary: "Spend time in Trastevere or Monti before onward travel.",
      },
    ],
    suggestedActivities: ["Historic walks", "Museum and site visits", "Local dining"],
    transportationBetweenStops: "Single-city stay using walking, metro, trams, and buses.",
    accommodationGuidance:
      "Verify check-in procedures and check any applicable municipal tourist-tax terms.",
    estimatedBudgetNote: null,
    travelDifficulty: "Moderate Pace",
    bestTravelPeriodNote: "Spring and autumn avoid peak summer heat and crowds.",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Turismo Roma",
        label: "Official Rome Tourism Portal",
        url: "https://www.turismoroma.it/en",
      },
    ],
  },
  {
    slug: "central-europe-rail-loop",
    title: "Vienna, Prague & Budapest Multi-City Route (Suggested Plan)",
    description:
      "A suggested seven-day Central European route linking Vienna, Prague, and Budapest along a connected regional corridor.",
    category: "Multi-Country Itinerary",
    durationLabel: "7 Days",
    durationDays: 7,
    countries: ["Austria", "Czech Republic", "Hungary"],
    cities: ["Vienna", "Prague", "Budapest"],
    orderedStops: [
      {
        order: 1,
        city: "Vienna",
        country: "Austria",
        focus: "Imperial architecture, museums, and cultural venues",
        transportToNextNote:
          "Overland rail/coach connection toward Prague (verify current operator schedules).",
      },
      {
        order: 2,
        city: "Prague",
        country: "Czech Republic",
        focus: "Historic bridges, Old Town, and castle views",
        transportToNextNote:
          "Overland rail/coach connection toward Budapest (verify current operator schedules).",
      },
      {
        order: 3,
        city: "Budapest",
        country: "Hungary",
        focus: "Danube riverfront, Buda and Pest districts, and thermal baths",
        transportToNextNote: null,
      },
    ],
    dailySchedule: [
      {
        day: 1,
        title: "Arrival in Vienna",
        summary: "Settle in and take an introductory walk around the central district.",
      },
      {
        day: 2,
        title: "Vienna Heritage & Culture",
        summary: "Explore palaces, museums, or local markets.",
      },
      {
        day: 3,
        title: "Journey to Prague",
        summary: "Travel north to Prague and enjoy an evening walk along the river.",
      },
      {
        day: 4,
        title: "Prague Historic Core",
        summary: "Visit Old Town, bridges, and castle viewpoints.",
      },
      {
        day: 5,
        title: "Journey to Budapest",
        summary: "Travel south into Hungary and orient along the Danube embankment.",
      },
      {
        day: 6,
        title: "Buda & Pest Exploration",
        summary: "Explore historic quarters across both sides of the river.",
      },
      {
        day: 7,
        title: "Departure from Budapest",
        summary: "Final morning walk and departure from the city.",
      },
    ],
    suggestedActivities: ["Multi-city rail travel", "Historic city walks", "Cultural landmarks"],
    transportationBetweenStops:
      "Check official national rail and intercity bus operators directly for current routes, seat reservations, and timetables.",
    accommodationGuidance:
      "Book stays near main rail stations or core transit lines to simplify multi-stop transitions.",
    estimatedBudgetNote: null,
    travelDifficulty: "Active Multi-Stop",
    bestTravelPeriodNote:
      "Late spring through early autumn offers broad daylight and active sightseeing.",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Austria Tourism",
        label: "Holidays in Austria",
        url: "https://www.austria.info/en",
      },
      {
        authority: "CzechTourism",
        label: "Visit Czechia",
        url: "https://www.visitczechia.com/en-US",
      },
      {
        authority: "Visit Hungary",
        label: "Official Tourism Portal for Hungary",
        url: "https://visithungary.com/",
      },
    ],
  },
] as const;
