import type { ExploreCategory } from "@/types/explore";

export const EXPLORE_CATEGORIES: readonly ExploreCategory[] = [
  {
    id: "cat-culture",
    title: "Culture & Traditions",
    slug: "culture",
    href: "/explore/culture",
    description:
      "Languages, regional customs, everyday urban traditions, and artistic expressions across Europe.",
    image: "/assets/images/destinations/vienna.jpg",
    imageAlt: "Historic civic architecture and cultural district in Vienna, Austria",
    icon: "◈",
  },
  {
    id: "cat-landmarks",
    title: "Landmarks & Architecture",
    slug: "landmarks",
    href: "/explore/landmarks",
    description:
      "Iconic monuments, palaces, bridges, and architectural landmarks shaping European skylines.",
    image: "/assets/images/destinations/rome.jpg",
    imageAlt: "Historic Roman monument and architectural skyline in Rome, Italy",
    icon: "❖",
  },
  {
    id: "cat-history",
    title: "History & Heritage",
    slug: "history",
    href: "/explore/history",
    description:
      "Historic quarters, imperial and civic centres, and heritage landscapes across centuries.",
    image: "/assets/images/destinations/prague.jpg",
    imageAlt: "Historic riverside bridges, towers, and skyline in Prague, Czech Republic",
    icon: "✦",
  },
  {
    id: "cat-food",
    title: "Food & Cuisine",
    slug: "food",
    href: "/explore/food",
    description:
      "Regional culinary traditions, coffee and café culture, markets, and local food heritage.",
    image: "/assets/images/destinations/paris.jpg",
    imageAlt: "Historic Parisian streetscape and urban café neighbourhood in France",
    icon: "❋",
  },
  {
    id: "cat-festivals",
    title: "Festivals & Events",
    slug: "festivals",
    href: "/explore/festivals",
    description:
      "Seasonal celebrations, music traditions, and cultural gatherings across European cities.",
    image: "/assets/images/countries/germany.jpg",
    imageAlt: "Historic Alpine castle and forested hills in Bavaria, Germany",
    icon: "✧",
  },
  {
    id: "cat-student-life",
    title: "Student Life",
    slug: "student-life",
    href: "/explore/student-life",
    description:
      "Everyday campus life, student communities, libraries, and cultural routines in European cities.",
    image: "/assets/images/study/campus-life.jpg",
    imageAlt: "Students walking across a historic European university campus",
    icon: "❖",
  },
  {
    id: "cat-nature",
    title: "Nature & Outdoors",
    slug: "nature",
    href: "/explore/nature",
    description:
      "Alpine valleys, mountain lakes, waterways, forests, and outdoor scenery across Europe.",
    image: "/assets/images/countries/austria.jpg",
    imageAlt: "Alpine lake and mountain peaks in Hallstatt, Austria",
    icon: "◈",
  },
  {
    id: "cat-experiences",
    title: "Local Experiences",
    slug: "experiences",
    href: "/explore/experiences",
    description:
      "Canal walks, thermal baths, neighbourhood districts, and distinctive local traditions.",
    image: "/assets/images/destinations/amsterdam.jpg",
    imageAlt: "Historic canals and gabled townhouses in Amsterdam, Netherlands",
    icon: "✦",
  },
  {
    id: "cat-stories",
    title: "Stories & Essays",
    slug: "stories",
    href: "/explore/stories",
    description:
      "Editorial essays exploring European architecture, cultural continuity, and everyday life.",
    image: "/assets/images/hero/europe-hero.jpg",
    imageAlt: "Panoramic European riverfront and historic architectural landmarks",
    icon: "❋",
  },
] as const;
