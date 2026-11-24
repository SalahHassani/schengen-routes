import type { ExploreExperience } from "@/types/explore";

const REVIEW_DATE = "2026-11-24";

export const EXPLORE_EXPERIENCES: readonly ExploreExperience[] = [
  {
    id: "exp-amsterdam-canal-ring",
    title: "Canal Ring Neighbourhood & Bridge Walks",
    slug: "canal-ring-neighbourhood-walks",
    location: "Canal Belt & Jordaan, Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    category: "experiences",
    description:
      "Wander historic gabled facades, quiet side lanes, and canal bridges across Amsterdam's central districts.",
    image: "/assets/images/destinations/amsterdam.jpg",
    imageAlt: "Canals and historic townhouses in Amsterdam, Netherlands",
    source: {
      title: "I amsterdam — Official Visitor Guide",
      url: "https://www.iamsterdam.com/en",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "exp-parisian-boulevards-culture",
    title: "Boulevard Strolls, Museums & Café Culture",
    slug: "boulevard-strolls-museums-cafe-culture",
    location: "Central Arrondissements, Paris",
    country: "France",
    city: "Paris",
    category: "food",
    description:
      "Experience historic urban boulevards, art collections, and classic neighbourhood café culture in Paris.",
    image: "/assets/images/destinations/paris.jpg",
    imageAlt: "Historic Parisian streetscape and urban café neighbourhood in France",
    source: {
      title: "Paris je t'aime — Official Tourism Portal",
      url: "https://parisjetaime.com/eng/",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "exp-alpine-valley-trails",
    title: "Alpine Valley & Lakeside Scenery",
    slug: "alpine-valley-lakeside-scenery",
    location: "Salzkammergut / Alpine Region",
    country: "Austria",
    category: "nature",
    description:
      "Take in mountain ridges, crisp valley air, and lakeside views in Austria's Alpine landscape.",
    image: "/assets/images/countries/austria.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    source: {
      title: "Austria Tourism — Austriatourism",
      url: "https://www.austria.info/en",
    },
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "exp-student-campus-routines",
    title: "University Quarters & Student Cultural Life",
    slug: "university-quarters-student-cultural-life",
    location: "European University Cities",
    country: "Germany",
    category: "student-life",
    description:
      "Explore historic campus grounds, shared study spaces, and multicultural student communities in Europe.",
    image: "/assets/images/study/campus-life.jpg",
    imageAlt: "Students walking across a historic European university campus",
    source: {
      title: "German Academic Exchange Service (DAAD)",
      url: "https://www.daad.de/en/",
    },
    lastReviewed: REVIEW_DATE,
  },
] as const;
