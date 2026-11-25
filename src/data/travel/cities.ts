import type { TravelCityGuideRecord } from "@/types/travel";

const REVIEW_DATE = "2026-11-24";

export const TRAVEL_CITY_GUIDES: readonly TravelCityGuideRecord[] = [
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    heroImage: "/assets/images/destinations/paris.jpg",
    heroImageAlt: "Historic architecture and streetscape in Paris, France",
    introduction:
      "Paris is organised around walkable arrondissements, tree-lined boulevards, the Seine riverbanks, and dense public transit.",
    mainAttractions: ["Historic monuments & squares", "Art & history museums", "Seine river walks"],
    neighbourhoods: ["Le Marais", "Latin Quarter", "Saint-Germain-des-Prés", "Montmartre"],
    publicTransportation:
      "Extensive metro, RER commuter rail, tram, and bus network covering the city and wider region.",
    suggestedActivities: ["Morning neighbourhood walks", "Museum visits", "Riverfront strolls"],
    travelTips: [
      "Book timed entry for major museums ahead of time and verify fare-zone coverage for airport/regional rail.",
    ],
    recommendedVisitDuration: "3 to 4 days",
    relatedItinerarySlugs: ["paris-three-day-city-trip"],
    officialTourismSources: [
      {
        authority: "Paris je t'aime — Office de Tourisme",
        label: "Official Paris Tourism Portal",
        url: "https://parisjetaime.com/eng/",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    heroImage: "/assets/images/destinations/rome.jpg",
    heroImageAlt: "Historic amphitheatre and cityscape in Rome, Italy",
    introduction:
      "Rome layers classical antiquity, Renaissance and Baroque landmarks, lively piazzas, and neighbourhood trattorias across its historic centre.",
    mainAttractions: [
      "Ancient Roman landmarks",
      "Historic piazzas & fountains",
      "Art & church heritage",
    ],
    neighbourhoods: ["Centro Storico", "Trastevere", "Monti", "Prati"],
    publicTransportation:
      "Metro lines, trams, and city buses connect central districts and major rail stations.",
    suggestedActivities: [
      "Guided or self-guided walking routes",
      "Early-morning site visits",
      "Evening piazza strolls",
    ],
    travelTips: [
      "Carry comfortable walking shoes for uneven paving and check official ticketing portals for archaeological sites.",
    ],
    recommendedVisitDuration: "3 to 4 days",
    relatedItinerarySlugs: ["rome-weekend-cultural-break"],
    officialTourismSources: [
      {
        authority: "Turismo Roma",
        label: "Official Rome Tourism Portal",
        url: "https://www.turismoroma.it/en",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    heroImage: "/assets/images/destinations/amsterdam.jpg",
    heroImageAlt: "Canals and historic townhouses in Amsterdam, Netherlands",
    introduction:
      "Amsterdam is built around concentric canal rings, historic merchant houses, museums, and a compact central core.",
    mainAttractions: ["Historic canal ring", "Fine art & history museums", "Neighbourhood markets"],
    neighbourhoods: ["Jordaan", "Canal Belt (Grachtengordel)", "De Pijp", "Museum Quarter"],
    publicTransportation:
      "Trams, metro, buses, and free/frequent ferries connect neighbourhoods across the IJ waterway, paired with regional rail.",
    suggestedActivities: ["Canal-side walking", "Museum visits", "Short regional train excursions"],
    travelTips: [
      "Watch out for cycle paths and trams when crossing streets and book popular museums in advance.",
    ],
    recommendedVisitDuration: "2 to 4 days",
    relatedItinerarySlugs: ["amsterdam-weekend-city-break"],
    officialTourismSources: [
      {
        authority: "I amsterdam",
        label: "Official Amsterdam Visitor Guide",
        url: "https://www.iamsterdam.com/en",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "budapest",
    name: "Budapest",
    country: "Hungary",
    heroImage: "/assets/images/destinations/budapest.jpg",
    heroImageAlt: "Architectural skyline and river view in Budapest, Hungary",
    introduction:
      "Divided by the Danube into hilly Buda and lively Pest, Budapest combines grand civic architecture, thermal baths, and historic bridges.",
    mainAttractions: ["Danube riverfront & bridges", "Castle District", "Historic thermal baths"],
    neighbourhoods: [
      "Belváros-Lipótváros (Pest)",
      "Erzsébetváros",
      "Buda Castle District",
      "Újlipótváros",
    ],
    publicTransportation:
      "Four metro lines, extensive tram and bus networks, and suburban rail serve the city.",
    suggestedActivities: [
      "Riverside walks",
      "Tram rides along major avenues",
      "Thermal bath relaxation",
    ],
    travelTips: [
      "Check official bath house rules and keep official transit tickets or passes accessible for inspection.",
    ],
    recommendedVisitDuration: "3 to 4 days",
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    officialTourismSources: [
      {
        authority: "Visit Hungary — Budapest",
        label: "Budapest Travel Information",
        url: "https://visithungary.com/",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "Austria",
    heroImage: "/assets/images/destinations/vienna.jpg",
    heroImageAlt: "Historic architecture in Vienna, Austria",
    introduction:
      "Vienna blends imperial boulevards, museums, coffee-house culture, and classical music venues with a well-connected public transit network.",
    mainAttractions: [
      "Ringstrasse & historic core",
      "Palaces & museums",
      "Music & cultural venues",
    ],
    neighbourhoods: ["Innere Stadt", "Neubau", "Leopoldstadt", "Wieden"],
    publicTransportation:
      "U-Bahn subway lines, trams, and buses operated by Wiener Linien provide frequent urban coverage.",
    suggestedActivities: ["Walking the Ringstrasse", "Museum Quarter visits", "Classical concerts"],
    travelTips: [
      "Check performance schedules and advance ticket availability for concerts and opera houses.",
    ],
    recommendedVisitDuration: "3 to 4 days",
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    officialTourismSources: [
      {
        authority: "Vienna Tourist Board",
        label: "Official Vienna Travel Guide",
        url: "https://www.wien.info/en",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    heroImage: "/assets/images/destinations/vienna.jpg",
    heroImageAlt: "Historic skyline, bridge, and architectural landmarks in Prague, Czech Republic",
    introduction:
      "Spanning the Vltava River, Prague features medieval squares, historic bridges, castle views, and compact neighbourhoods.",
    mainAttractions: ["Old Town & historic squares", "Vltava river bridges", "Prague Castle area"],
    neighbourhoods: ["Staré Město", "Malá Strana", "Vinohrady", "Holešovice"],
    publicTransportation:
      "Integrated metro, tram, and bus network operated by PID makes cross-city movement straightforward.",
    suggestedActivities: [
      "Early-morning historic walks",
      "Scenic viewpoints",
      "Neighbourhood dining",
    ],
    travelTips: [
      "Visit major historic lanes early in the day where possible and confirm ticket options on official PID channels.",
    ],
    recommendedVisitDuration: "3 days",
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    officialTourismSources: [
      {
        authority: "Prague City Tourism",
        label: "Official Prague Visitor Portal",
        url: "https://www.prague.eu/en",
      },
    ],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
  },
] as const;
