import type { TravelCountryGuideRecord } from "@/types/travel";

const REVIEW_DATE = "2026-11-24";

export const TRAVEL_COUNTRY_GUIDES: readonly TravelCountryGuideRecord[] = [
  {
    slug: "germany",
    name: "Germany",
    region: "Central Europe",
    imageSrc: "/assets/images/countries/germany.jpg",
    imageAlt: "Historic Alpine castle and forested landscape in Bavaria, Germany",
    introduction:
      "Germany offers diverse urban centres, river valleys, forests, and Alpine regions connected by an extensive rail network.",
    mainDestinations: ["Bavaria & Alps", "Rhine & river valleys", "Major metropolitan hubs"],
    importantCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    transportationOverview:
      "Long-distance and regional rail services (Deutsche Bahn) connect cities and towns alongside urban S-Bahn, U-Bahn, tram, and bus networks.",
    currencyInfo: "Euro (EUR).",
    languageInfo:
      "German is the official language; English is widely understood in major tourist and transit hubs.",
    practicalTravelInfo: [
      "Validate regional and local transit tickets prior to boarding when required by fare rules.",
      "Plan ahead for Sunday store closures and public holidays.",
    ],
    relatedGuideSlugs: ["train-travel-across-europe", "planning-first-european-trip"],
    officialTourismSources: [
      {
        authority: "German National Tourist Board",
        label: "Germany Travel",
        url: "https://www.germany.travel/en/home.html",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Southern Europe",
    imageSrc: "/assets/images/countries/italy.jpg",
    imageAlt: "Panoramic view of the historic cathedral dome and skyline of Florence, Italy",
    introduction:
      "Italy combines historic cities, art and architectural heritage, regional culinary traditions, and coastal and inland landscapes.",
    mainDestinations: ["Rome & Lazio", "Tuscany & Florence", "Northern lakes & cities"],
    importantCities: ["Rome", "Florence", "Milan", "Venice"],
    transportationOverview:
      "High-speed and regional trains link major cities, supplemented by municipal metro, bus, and tram systems.",
    currencyInfo: "Euro (EUR).",
    languageInfo:
      "Italian is the official language; English is spoken in hospitality and major attractions.",
    practicalTravelInfo: [
      "Check official ticketing channels for high-demand museums and historic monuments.",
      "Observe local dress and quiet conduct rules in churches and sacred sites.",
    ],
    relatedGuideSlugs: ["planning-first-european-trip", "accommodation-planning-basics"],
    officialTourismSources: [
      {
        authority: "Italia.it",
        label: "Official Tourism Portal for Italy",
        url: "https://www.italia.it/en",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "france",
    name: "France",
    region: "Western Europe",
    imageSrc: "/assets/images/countries/france.jpg",
    imageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    introduction:
      "France features historic capitals, cultural institutions, diverse regional landscapes, and high-speed rail corridors.",
    mainDestinations: [
      "Paris & Île-de-France",
      "Normandy & coastal heritage",
      "Regional cultural hubs",
    ],
    importantCities: ["Paris", "Lyon", "Marseille", "Nice"],
    transportationOverview:
      "High-speed rail (TGV/OUIGO), regional trains (TER), and urban metro/bus networks support cross-country and city travel.",
    currencyInfo: "Euro (EUR).",
    languageInfo:
      "French is the official language; greeting staff politely in French is appreciated before switching to English.",
    practicalTravelInfo: [
      "Verify museum closure days and reserve timed slots for major cultural institutions.",
    ],
    relatedGuideSlugs: [
      "understanding-local-public-transport",
      "travelling-between-european-countries",
    ],
    officialTourismSources: [
      {
        authority: "France.fr",
        label: "Explore France",
        url: "https://www.france.fr/en",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "Central Europe",
    imageSrc: "/assets/images/countries/hungary.jpg",
    imageAlt:
      "Hungarian Parliament Building illuminated along the Danube River in Budapest, Hungary",
    introduction:
      "Hungary centres around the Danube River and Budapest alongside historic towns, thermal bath culture, and regional rail routes.",
    mainDestinations: ["Budapest & Danube Bend", "Lake Balaton", "Historic regional towns"],
    importantCities: ["Budapest", "Debrecen", "Győr", "Pécs"],
    transportationOverview:
      "Budapest offers metro lines, extensive tram and bus routes, and suburban rail, while MÁV connects cities across the country.",
    currencyInfo: "Hungarian Forint (HUF).",
    languageInfo:
      "Hungarian is the official language; English is commonly spoken in central hospitality and transport services.",
    practicalTravelInfo: [
      "Check official municipal transit apps or ticket machines and keep physical/digital ID handy during travel.",
    ],
    relatedGuideSlugs: [
      "travelling-between-european-countries",
      "understanding-local-public-transport",
    ],
    officialTourismSources: [
      {
        authority: "Visit Hungary",
        label: "Official Tourism Portal for Hungary",
        url: "https://visithungary.com/",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Western Europe",
    imageSrc: "/assets/images/countries/netherlands.jpg",
    imageAlt: "Traditional Dutch windmills along waterways at Kinderdijk in the Netherlands",
    introduction:
      "The Netherlands offers compact distances, canal cities, historic windmills, museums, and frequent rail connections.",
    mainDestinations: [
      "Amsterdam & canal belt",
      "Historic mill & polder landscapes",
      "Coastal & cultural towns",
    ],
    importantCities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
    transportationOverview:
      "Frequent intercity and sprinter trains (NS) link cities across short distances, supported by trams, metros, and buses.",
    currencyInfo: "Euro (EUR).",
    languageInfo:
      "Dutch is the official language, and English is widely spoken across everyday services.",
    practicalTravelInfo: [
      "Tap in and tap out consistently with contactless payment or transit cards where required.",
    ],
    relatedGuideSlugs: ["understanding-local-public-transport", "travel-preparation-and-packing"],
    officialTourismSources: [
      {
        authority: "Holland.com",
        label: "Official Tourism Information for the Netherlands",
        url: "https://www.holland.com/global/tourism",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "austria",
    name: "Austria",
    region: "Central Europe",
    imageSrc: "/assets/images/countries/austria.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    introduction:
      "Austria pairs imperial urban heritage and classical music traditions with Alpine scenery and reliable rail and bus networks.",
    mainDestinations: [
      "Vienna & Danube region",
      "Salzburg & Alpine valleys",
      "Tyrol & mountain lakes",
    ],
    importantCities: ["Vienna", "Salzburg", "Innsbruck", "Graz"],
    transportationOverview:
      "ÖBB rail services and regional post buses connect cities and Alpine towns efficiently.",
    currencyInfo: "Euro (EUR).",
    languageInfo:
      "German is the official language; English is widely understood in cities and tourism hubs.",
    practicalTravelInfo: [
      "Check seasonal schedules for mountain cable cars, passes, and hiking trails.",
    ],
    relatedGuideSlugs: ["train-travel-across-europe", "travelling-between-european-countries"],
    officialTourismSources: [
      {
        authority: "Austria Tourism",
        label: "Holidays in Austria",
        url: "https://www.austria.info/en",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
] as const;
