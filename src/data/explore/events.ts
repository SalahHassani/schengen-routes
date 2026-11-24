import type { ExploreEvent } from "@/types/explore";

const REVIEW_DATE = "2026-11-24";

export const EXPLORE_EVENTS: readonly ExploreEvent[] = [
  {
    id: "event-german-seasonal-markets",
    title: "Traditional Seasonal & Advent Markets in Germany",
    location: "Historic Town Squares across Germany",
    country: "Germany",
    description:
      "Seasonal market traditions featuring handcrafted goods, regional treats, and festive lighting in German town centres.",
    source: {
      title: "German National Tourist Board — Germany Travel",
      url: "https://www.germany.travel/en/home.html",
    },
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "event-vienna-classical-music-tradition",
    title: "Classical Music & Cultural Season in Vienna",
    location: "Concert Halls & Cultural Venues, Vienna",
    country: "Austria",
    description:
      "Year-round orchestral, chamber, and operatic traditions rooted in Vienna's musical heritage.",
    source: {
      title: "Vienna Tourist Board — Wien.info",
      url: "https://www.wien.info/en",
    },
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "event-italian-cultural-heritage-seasons",
    title: "Civic & Cultural Heritage Traditions in Rome",
    location: "Historic Districts, Rome",
    country: "Italy",
    description:
      "Seasonal cultural programming, exhibitions, and architectural heritage across Rome's historic quarters.",
    source: {
      title: "Turismo Roma — Official Tourism Portal",
      url: "https://www.turismoroma.it/en",
    },
    lastReviewed: REVIEW_DATE,
  },
] as const;
