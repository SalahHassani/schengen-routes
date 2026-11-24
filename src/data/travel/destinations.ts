import type { TravelDestinationRecord } from "@/types/travel";

const REVIEW_DATE = "2026-11-24";

export const TRAVEL_DESTINATIONS: readonly TravelDestinationRecord[] = [
  {
    slug: "bavaria-and-germany",
    name: "Germany",
    country: "Germany",
    region: "Central Europe",
    category: "Alpine & Nature",
    shortDescription:
      "Historic cities, rail-connected regions, and Alpine and forested landscapes across Germany.",
    heroImage: "/assets/images/countries/germany.jpg",
    heroImageAlt: "Historic Alpine castle and forested landscape in Bavaria, Germany",
    galleryImages: [
      {
        src: "/assets/images/countries/germany.jpg",
        alt: "Alpine hillside castle and greenery in Germany",
      },
    ],
    mainAttractions: ["Historic city centres", "Alpine foothills", "Cultural museums"],
    recommendedActivities: [
      "Regional & long-distance rail trips",
      "Walking tours",
      "Museum visits",
    ],
    travelTips: [
      "Check regional transit zone rules and operating hours before travelling on Sundays or public holidays.",
    ],
    transportationInfo:
      "Extensive intercity and regional rail network operated by Deutsche Bahn alongside municipal transit systems.",
    accommodationGuidance:
      "Compare central hotel, guesthouse, and youth hostel options against proximity to rail stations and city transit.",
    estimatedVisitDuration: "3 to 7 days",
    relevantGuideSlugs: ["planning-first-european-trip", "train-travel-across-europe"],
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "German National Tourist Board",
        label: "Germany Travel Information",
        url: "https://www.germany.travel/en/home.html",
      },
    ],
  },
  {
    slug: "florence-and-italy",
    name: "Italy",
    country: "Italy",
    city: "Rome",
    region: "Southern Europe",
    category: "Cultural Heritage",
    shortDescription:
      "Renaissance architecture, historic piazzas, coastal stretches, and major rail hubs across Italy.",
    heroImage: "/assets/images/countries/italy.jpg",
    heroImageAlt: "Panoramic view of the historic cathedral dome and skyline of Florence, Italy",
    galleryImages: [
      {
        src: "/assets/images/countries/italy.jpg",
        alt: "Cathedral dome and historic rooftops in Florence, Italy",
      },
      {
        src: "/assets/images/destinations/rome.jpg",
        alt: "Historic amphitheatre and cityscape in Rome, Italy",
      },
    ],
    mainAttractions: ["Historic civic landmarks", "Art collections", "Historic urban cores"],
    recommendedActivities: [
      "Early-morning historic walks",
      "Intercity rail journeys",
      "Local cuisine discovery",
    ],
    travelTips: [
      "Many major cultural sites and museums use advance timed-entry ticketing; check official site pages in advance.",
    ],
    transportationInfo:
      "High-speed and regional trains link major urban centres alongside local buses, trams, and metro systems.",
    accommodationGuidance:
      "Review city tourist-tax rules, check-in windows, and walkability to transit hubs when comparing stays.",
    estimatedVisitDuration: "4 to 7 days",
    relevantGuideSlugs: ["planning-first-european-trip", "accommodation-planning-basics"],
    relatedItinerarySlugs: ["rome-weekend-cultural-break"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Italia.it — Official Tourism Portal",
        label: "Official Tourism Information for Italy",
        url: "https://www.italia.it/en",
      },
    ],
  },
  {
    slug: "paris-and-france",
    name: "France",
    country: "France",
    city: "Paris",
    region: "Western Europe",
    category: "Historic Cities",
    shortDescription:
      "Boulevards, riverfront heritage, museums, and rail corridors connecting Paris with regional France.",
    heroImage: "/assets/images/countries/france.jpg",
    heroImageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    galleryImages: [
      {
        src: "/assets/images/countries/france.jpg",
        alt: "Mont Saint-Michel historic monument in France",
      },
      {
        src: "/assets/images/destinations/paris.jpg",
        alt: "Historic architecture and streetscape in Paris, France",
      },
    ],
    mainAttractions: ["Historic monuments", "Art museums", "Riverfront districts"],
    recommendedActivities: [
      "Neighbourhood walks",
      "Metro and suburban rail travel",
      "Museum visits",
    ],
    travelTips: [
      "Verify metro/RER ticket validity across fare zones and check seasonal museum closure days.",
    ],
    transportationInfo:
      "High-speed rail (TGV/OUIGO) and dense urban metro/bus networks serve Paris and regional centres.",
    accommodationGuidance:
      "Select neighbourhoods near metro lines or rail terminals and confirm late-arrival check-in policies.",
    estimatedVisitDuration: "3 to 6 days",
    relevantGuideSlugs: ["understanding-local-public-transport", "planning-first-european-trip"],
    relatedItinerarySlugs: ["paris-three-day-city-trip"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "France.fr — Official Tourism Website",
        label: "Explore France",
        url: "https://www.france.fr/en",
      },
    ],
  },
  {
    slug: "budapest-and-hungary",
    name: "Hungary",
    country: "Hungary",
    city: "Budapest",
    region: "Central Europe",
    category: "River & Urban Routes",
    shortDescription:
      "Danube riverfront vistas, historic architecture, thermal bath traditions, and Central European rail links.",
    heroImage: "/assets/images/countries/hungary.jpg",
    heroImageAlt:
      "Hungarian Parliament Building illuminated along the Danube River in Budapest, Hungary",
    galleryImages: [
      {
        src: "/assets/images/countries/hungary.jpg",
        alt: "Danube riverfront in Budapest, Hungary",
      },
      {
        src: "/assets/images/destinations/budapest.jpg",
        alt: "Architectural skyline and river view in Budapest, Hungary",
      },
    ],
    mainAttractions: [
      "Danube river embankments",
      "Historic thermal baths",
      "Castle and civic districts",
    ],
    recommendedActivities: [
      "Buda and Pest walking routes",
      "Tram and metro rides",
      "Evening riverfront walks",
    ],
    travelTips: [
      "Keep local currency and card payment options in mind and validate public transit tickets as required.",
    ],
    transportationInfo:
      "Metro lines, trams, buses, and national rail connect Budapest with surrounding regions and neighbouring capitals.",
    accommodationGuidance:
      "Compare central Pest or Buda districts based on proximity to metro stations, trams, and quiet residential streets.",
    estimatedVisitDuration: "3 to 5 days",
    relevantGuideSlugs: [
      "travelling-between-european-countries",
      "understanding-local-public-transport",
    ],
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Visit Hungary",
        label: "Official Tourism Portal for Hungary",
        url: "https://visithungary.com/",
      },
    ],
  },
  {
    slug: "amsterdam-and-netherlands",
    name: "Netherlands",
    country: "Netherlands",
    city: "Amsterdam",
    region: "Western Europe",
    category: "River & Urban Routes",
    shortDescription:
      "Canal rings, compact walkable and cycling-friendly streets, windmills, and frequent regional rail links.",
    heroImage: "/assets/images/countries/netherlands.jpg",
    heroImageAlt: "Traditional Dutch windmills along waterways at Kinderdijk in the Netherlands",
    galleryImages: [
      {
        src: "/assets/images/countries/netherlands.jpg",
        alt: "Windmills and waterways in the Netherlands",
      },
      {
        src: "/assets/images/destinations/amsterdam.jpg",
        alt: "Canals and historic townhouses in Amsterdam, Netherlands",
      },
    ],
    mainAttractions: ["Canal districts", "Heritage windmills", "Art and history museums"],
    recommendedActivities: ["Canal-side walks", "Regional train trips", "Museum visits"],
    travelTips: [
      "Stay alert to dedicated cycle lanes when walking in Dutch cities and book popular museums ahead.",
    ],
    transportationInfo:
      "Frequent national rail (NS) services connect major cities quickly, complemented by trams, metros, and buses.",
    accommodationGuidance:
      "Rooms and hotel spaces in central historic areas can be compact; check layout details and cancellation terms.",
    estimatedVisitDuration: "3 to 4 days",
    relevantGuideSlugs: ["understanding-local-public-transport", "travel-preparation-and-packing"],
    relatedItinerarySlugs: ["amsterdam-weekend-city-break"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Holland.com — NBTC",
        label: "Official Tourism Information for the Netherlands",
        url: "https://www.holland.com/global/tourism",
      },
    ],
  },
  {
    slug: "vienna-and-austria",
    name: "Austria",
    country: "Austria",
    city: "Vienna",
    region: "Central Europe",
    category: "Cultural Heritage",
    shortDescription:
      "Imperial palaces, classical music heritage, Alpine valleys, and dependable rail connections across Austria.",
    heroImage: "/assets/images/countries/austria.jpg",
    heroImageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    galleryImages: [
      {
        src: "/assets/images/countries/austria.jpg",
        alt: "Alpine village and mountain lake in Austria",
      },
      {
        src: "/assets/images/destinations/vienna.jpg",
        alt: "Historic architecture in Vienna, Austria",
      },
    ],
    mainAttractions: [
      "Alpine landscapes",
      "Historic city architecture",
      "Cultural halls and museums",
    ],
    recommendedActivities: [
      "Scenic rail and mountain outings",
      "Walking tours",
      "Concert and museum visits",
    ],
    travelTips: [
      "Check seasonal mountain trail and lift operating periods before planning Alpine excursions.",
    ],
    transportationInfo:
      "Federal rail (ÖBB) and regional buses link Vienna, provincial capitals, and Alpine destinations.",
    accommodationGuidance:
      "Look for properties near rail hubs or U-Bahn stations for straightforward arrivals and departures.",
    estimatedVisitDuration: "3 to 6 days",
    relevantGuideSlugs: ["train-travel-across-europe", "travelling-between-european-countries"],
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    exploreHref: "/travel/countries",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "Austria Tourism (Austriatourism)",
        label: "Holidays in Austria",
        url: "https://www.austria.info/en",
      },
    ],
  },
  {
    slug: "prague-and-czech-republic",
    name: "Czech Republic",
    country: "Czech Republic",
    city: "Prague",
    region: "Central Europe",
    category: "Historic Cities",
    shortDescription:
      "Historic bridges, castle quarters, cobblestone lanes, and walkable city centres across the Czech Republic.",
    heroImage: "/assets/images/destinations/prague.jpg",
    heroImageAlt: "Historic skyline, bridge, and architectural landmarks in Prague, Czech Republic",
    galleryImages: [
      {
        src: "/assets/images/destinations/prague.jpg",
        alt: "Historic riverside view in Prague",
      },
    ],
    mainAttractions: ["Historic bridges and squares", "Castle complex", "Old Town architecture"],
    recommendedActivities: [
      "Early-morning historic walks",
      "Tram rides",
      "Day trips and viewpoints",
    ],
    travelTips: [
      "Wear sturdy footwear for cobblestone streets and steep gradients around historic quarters.",
    ],
    transportationInfo:
      "Integrated trams, metro, buses, and regional/intercity trains connect Prague and Czech towns.",
    accommodationGuidance:
      "Choose well-connected tram or metro corridors for easy access without heavy luggage on cobblestones.",
    estimatedVisitDuration: "3 to 4 days",
    relevantGuideSlugs: ["planning-first-european-trip", "accommodation-planning-basics"],
    relatedItinerarySlugs: ["central-europe-rail-loop"],
    exploreHref: "/travel/cities",
    lastReviewed: REVIEW_DATE,
    sources: [
      {
        authority: "CzechTourism",
        label: "Visit Czechia — Official Tourist Portal",
        url: "https://www.visitczechia.com/en-US",
      },
    ],
  },
] as const;
