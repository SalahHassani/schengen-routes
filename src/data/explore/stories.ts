import type { ExploreStory } from "@/types/explore";

const PUBLISHED_AT = "2026-11-24";
const UPDATED_AT = "2026-11-24";

export const EXPLORE_STORIES: readonly ExploreStory[] = [
  {
    id: "story-canals-and-civic-space",
    title: "Waterways and Walkable Streets: How European Cities Shape Daily Life",
    slug: "waterways-and-walkable-streets",
    excerpt:
      "From Amsterdam's canal rings to the Danube embankments, water and human-scaled streets anchor everyday European urban culture.",
    content: [
      "Across Europe, rivers and canals do more than frame historic skylines—they shape how neighbourhoods connect, where people gather at dusk, and how pedestrian and cycling routes thread through dense districts.",
      "Exploring cities on foot or via local trams and ferries reveals small architectural details, local bakeries, and quiet courtyards that rarely appear on quick landmark lists.",
    ],
    category: "stories",
    country: "Netherlands",
    city: "Amsterdam",
    coverImage: "/assets/images/destinations/amsterdam.jpg",
    coverImageAlt: "Canals and historic townhouses in Amsterdam, Netherlands",
    author: "SchengeN Routes Editorial Team",
    publishedAt: PUBLISHED_AT,
    updatedAt: UPDATED_AT,
    sources: [
      {
        title: "I amsterdam — Official Visitor Guide",
        url: "https://www.iamsterdam.com/en",
      },
    ],
    readingTime: "3 min read",
    featured: true,
  },
  {
    id: "story-student-life-across-borders",
    title: "Studying and Living in Europe: Beyond the Lecture Hall",
    slug: "studying-and-living-in-europe",
    excerpt:
      "How university libraries, student cafés, regional trains, and shared cultural spaces turn a study stay into a broader European experience.",
    content: [
      "Student life in Europe extends well beyond coursework. International and local students often build routines around historic university quarters, public transit passes, neighbourhood markets, and weekend cultural visits.",
      "For academic programme and admissions details, visit the dedicated Study in Europe section; here, Explore highlights the everyday cultural texture of student cities.",
    ],
    category: "student-life",
    coverImage: "/assets/images/study/european-university-campus.jpg",
    coverImageAlt: "Students walking across a historic European university campus",
    author: "SchengeN Routes Editorial Team",
    publishedAt: PUBLISHED_AT,
    updatedAt: UPDATED_AT,
    sources: [
      {
        title: "Study in Europe — Official European Union Portal",
        url: "https://education.ec.europa.eu/study-in-europe",
      },
    ],
    readingTime: "4 min read",
    featured: true,
  },
  {
    id: "story-cafes-markets-and-food-traditions",
    title: "Markets, Cafés, and Regional Tables: European Food Culture",
    slug: "markets-cafes-and-regional-tables",
    excerpt:
      "Why regional ingredients, local markets, and unhurried café and dining traditions remain central to European cultural identity.",
    content: [
      "Culinary traditions across Europe are closely tied to local climate, agricultural heritage, and neighbourhood rhythm—from morning market stalls to afternoon cafés and evening regional dishes.",
      "Paying attention to seasonal produce and local dining customs offers one of the most direct ways to understand a region's character.",
    ],
    category: "food",
    country: "France",
    city: "Paris",
    coverImage: "/assets/images/destinations/paris.jpg",
    coverImageAlt: "Historic Parisian streetscape and urban café neighbourhood in France",
    author: "SchengeN Routes Editorial Team",
    publishedAt: PUBLISHED_AT,
    updatedAt: UPDATED_AT,
    sources: [
      {
        title: "France.fr — Explore France",
        url: "https://www.france.fr/en",
      },
    ],
    readingTime: "3 min read",
  },
] as const;
