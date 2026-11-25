import type { ExplorePlace } from "@/types/explore";

const REVIEW_DATE = "2026-11-24";

export const EXPLORE_PLACES: readonly ExplorePlace[] = [
  {
    id: "place-colosseum",
    name: "Colosseum & Historic Centre of Rome",
    slug: "colosseum-historic-rome",
    country: "Italy",
    city: "Rome",
    category: "landmarks",
    description:
      "Monumental Flavian amphitheatre at the heart of Rome's ancient civic landscape and historic urban core.",
    image: "/assets/images/unique/european-01.jpg",
    imageAlt: "Historic amphitheatre and cityscape in Rome, Italy",
    significance:
      "Represents Roman engineering, civic spectacle, and layered urban heritage spanning antiquity to the present.",
    source: {
      title: "Parco archeologico del Colosseo — Official Site",
      url: "https://colosseo.it/en/",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "place-prague-historic-centre",
    name: "Historic Centre & Bridges of Prague",
    slug: "historic-centre-prague",
    country: "Czech Republic",
    city: "Prague",
    category: "history",
    description:
      "Medieval squares, Vltava river crossings, and layered Gothic, Renaissance, and Baroque architecture along the river.",
    image: "/assets/images/unique/european-02.jpg",
    imageAlt: "Historic skyline, bridge, and architectural landmarks in Prague, Czech Republic",
    significance:
      "Preserves centuries of Bohemian urban planning, architectural styles, and riverfront civic life.",
    source: {
      title: "Prague City Tourism — Official Visitor Portal",
      url: "https://www.prague.eu/en",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "place-budapest-danube",
    name: "Danube Embankments & Parliament Quarter",
    slug: "danube-embankments-budapest",
    country: "Hungary",
    city: "Budapest",
    category: "landmarks",
    description:
      "Grand riverfront architecture stretching along the Danube where Buda hills meet the Pest plain.",
    image: "/assets/images/unique/european-03.jpg",
    imageAlt: "Hungarian Parliament Building along the Danube River in Budapest, Hungary",
    significance:
      "Defines Budapest's twin-side river identity and Central European civic monumentality.",
    source: {
      title: "Visit Hungary — Official Tourism Portal",
      url: "https://visithungary.com/",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "place-vienna-cultural-core",
    name: "Vienna Cultural & Imperial Heritage",
    slug: "vienna-cultural-imperial-heritage",
    country: "Austria",
    city: "Vienna",
    category: "culture",
    description:
      "Historic boulevards, museums, coffee-house traditions, and classical music heritage in Austria's capital.",
    image: "/assets/images/unique/european-04.jpg",
    imageAlt: "Historic architecture in Vienna, Austria",
    significance:
      "Longstanding European centre for classical composition, public architecture, and café culture.",
    source: {
      title: "Vienna Tourist Board — Wien.info",
      url: "https://www.wien.info/en",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "place-hallstatt-alps",
    name: "Alpine Lake & Mountain Landscape",
    slug: "alpine-lake-mountain-landscape",
    country: "Austria",
    category: "nature",
    description:
      "Steep mountain slopes meeting glacial valley waters across the Eastern Alps in Austria.",
    image: "/assets/images/unique/extra-campus-01.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    significance:
      "Illustrates how mountain settlements adapt to narrow Alpine valleys, lakes, and seasonal weather.",
    source: {
      title: "Austria Tourism — Austriatourism",
      url: "https://www.austria.info/en",
    },
    lastReviewed: REVIEW_DATE,
    featured: true,
  },
  {
    id: "place-mont-saint-michel",
    name: "Mont Saint-Michel & Coastal Heritage",
    slug: "mont-saint-michel-coastal-heritage",
    country: "France",
    category: "history",
    description:
      "Historic tidal island abbey and medieval stone silhouette rising above coastal flats in Normandy, France.",
    image: "/assets/images/unique/extra-campus-02.jpg",
    imageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    significance: "Combines medieval monastic architecture with dramatic tidal coastal geography.",
    source: {
      title: "France.fr — Explore France",
      url: "https://www.france.fr/en",
    },
    lastReviewed: REVIEW_DATE,
  },
] as const;
