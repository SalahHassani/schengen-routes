export interface DestinationPreview {
  slug: string;
  city: string;
  country: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export const FEATURED_DESTINATIONS: readonly DestinationPreview[] = [
  {
    slug: "paris",
    city: "Paris",
    country: "France",
    summary:
      "Explore historic boulevards, renowned museums, academic quarters, and timeless architectural landmarks.",
    imageSrc: "/assets/images/study/european-university-campus.jpg",
    imageAlt: "Eiffel Tower rising above the Parisian skyline in France",
    href: "/travel",
  },
  {
    slug: "rome",
    city: "Rome",
    country: "Italy",
    summary:
      "Walk through millennia of classical history, lively piazzas, and expressive Italian culinary and cultural traditions.",
    imageSrc: "/assets/images/unique/alps-01.jpg",
    imageAlt: "Exterior arches of the Colosseum in Rome, Italy",
    href: "/travel",
  },
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    summary:
      "Discover contemporary arts, modern European history, international student neighbourhoods, and expansive green spaces.",
    imageSrc: "/assets/images/unique/alps-02.jpg",
    imageAlt: "Brandenburg Gate illuminated at dusk in Berlin, Germany",
    href: "/travel",
  },
  {
    slug: "amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    summary:
      "Experience scenic canal rings, world-class cultural collections, cycling-friendly streets, and welcoming student energy.",
    imageSrc: "/assets/images/unique/alps-03.jpg",
    imageAlt: "Historic gabled canal houses and bridges in Amsterdam, Netherlands",
    href: "/travel",
  },
  {
    slug: "budapest",
    city: "Budapest",
    country: "Hungary",
    summary:
      "Admire grand Danube riverfront architecture, historic thermal baths, and vibrant Central European cultural life.",
    imageSrc: "/assets/images/unique/amsterdam-01.jpg",
    imageAlt: "Szechenyi Chain Bridge spanning the Danube River toward Castle Hill in Budapest",
    href: "/travel",
  },
  {
    slug: "vienna",
    city: "Vienna",
    country: "Austria",
    summary:
      "Immerse yourself in imperial palaces, classical music heritage, café culture, and one of Europe's leading university cities.",
    imageSrc: "/assets/images/unique/amsterdam-02.jpg",
    imageAlt: "Schonbrunn Palace facade and landscaped gardens in Vienna, Austria",
    href: "/travel",
  },
] as const;
