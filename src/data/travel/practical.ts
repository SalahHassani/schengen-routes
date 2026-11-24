import type {
  AccommodationCategoryGuide,
  PracticalTravelTip,
  TransportModeGuide,
} from "@/types/travel";

const REVIEW_DATE = "2026-11-24";

export const TRANSPORT_MODE_GUIDES: readonly TransportModeGuide[] = [
  {
    id: "trains",
    name: "Trains",
    summary:
      "National and international rail networks connect city centres across much of Europe without airport transfer overhead.",
    advantages: [
      "City-centre-to-city-centre arrivals in many destinations",
      "Generous legroom and luggage flexibility compared with many short-haul flights",
    ],
    considerations: [
      "Some high-speed or international routes require advance seat reservations",
      "Schedules, engineering works, and operators vary by country",
    ],
    officialOperatorExamples: [
      {
        authority: "Deutsche Bahn",
        label: "Germany Rail Information",
        url: "https://www.bahn.com/en",
      },
      {
        authority: "ÖBB",
        label: "Austrian Federal Railways",
        url: "https://www.oebb.at/en/",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "buses",
    name: "Buses & Coaches",
    summary:
      "Intercity and regional coach networks reach smaller towns and cross-border routes where direct rail links may be limited.",
    advantages: [
      "Broad point-to-point and regional coverage",
      "Often connects smaller towns and secondary hubs",
    ],
    considerations: [
      "Journey comfort and travel times depend on road traffic and route length",
      "Luggage rules and boarding stops are set by each operator",
    ],
    officialOperatorExamples: [
      {
        authority: "Austria Tourism",
        label: "Travel & Transport in Austria",
        url: "https://www.austria.info/en",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "flights",
    name: "Flights",
    summary:
      "Air travel is practical for longer distances across Europe or reaching islands and regions far apart.",
    advantages: [
      "Fast over long distances between distant European hubs",
      "Useful when rail journeys would take an entire day or longer",
    ],
    considerations: [
      "Airport transfers, security queues, and baggage rules add time and conditions",
      "Check airline baggage allowances and terminal details directly with the carrier",
    ],
    officialOperatorExamples: [
      {
        authority: "European Commission",
        label: "Air Passenger Rights & Travel Info",
        url: "https://europa.eu/youreurope/citizens/travel/index_en.htm",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "local-transit",
    name: "Local Public Transportation",
    summary:
      "Metros, trams, suburban trains, and municipal buses form the everyday backbone of sightseeing in European cities.",
    advantages: [
      "Frequent service across urban neighbourhoods and major sights",
      "Reduces reliance on taxis or city-centre driving",
    ],
    considerations: [
      "Fare zones, single tickets vs. day passes, and validation rules differ by city",
      "Late-night intervals may be longer than daytime service",
    ],
    officialOperatorExamples: [
      {
        authority: "I amsterdam",
        label: "Public Transport in Amsterdam",
        url: "https://www.iamsterdam.com/en",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "car-travel",
    name: "Car Travel",
    summary:
      "Driving can be useful in rural, scenic, or less rail-accessible areas, though historic city centres often restrict private vehicles.",
    advantages: [
      "Flexibility for countryside, mountain, or multi-stop rural routes",
      "Convenient for travelling with bulky gear or family groups",
    ],
    considerations: [
      "Low-emission zones (LEZ), historic traffic zones (ZTL), tolls, and parking rules apply in many cities",
      "Verify driving licence recognition, insurance, and country-specific road rules in advance",
    ],
    officialOperatorExamples: [
      {
        authority: "Your Europe (European Commission)",
        label: "Driving Abroad in the EU",
        url: "https://europa.eu/youreurope/citizens/travel/driving-abroad/index_en.htm",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "ferries",
    name: "Ferries",
    summary:
      "Ferries serve coastal routes, islands, and waterways where water crossings are direct or scenic.",
    advantages: [
      "Connects coastal towns, riverbanks, and island destinations",
      "Often allows relaxing deck views and flexible boarding",
    ],
    considerations: [
      "Seasonal timetables and weather conditions can affect crossings",
      "Check operator rules for foot passengers versus vehicles",
    ],
    officialOperatorExamples: [
      {
        authority: "Your Europe (European Commission)",
        label: "Passenger Rights by Sea and Inland Waterway",
        url: "https://europa.eu/youreurope/citizens/travel/index_en.htm",
      },
    ],
    lastReviewed: REVIEW_DATE,
  },
] as const;

export const ACCOMMODATION_CATEGORY_GUIDES: readonly AccommodationCategoryGuide[] = [
  {
    id: "hotels",
    name: "Hotels",
    summary:
      "Standardised hospitality properties ranging from independent boutique stays to chain hotels with front-desk services.",
    evaluationCriteria: [
      "Check-in/check-out hours, breakfast inclusions, and cancellation terms",
      "Proximity to public transit stops and safety/walkability of the surrounding street",
    ],
    practicalNotes:
      "City tourist taxes may be collected separately; always review terms directly on the accommodation provider's official details.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "hostels",
    name: "Hostels",
    summary:
      "Shared dormitories and private rooms offering social common spaces for solo travellers, students, and short breaks.",
    evaluationCriteria: [
      "Dorm size, locker availability, linen rules, and quiet hours",
      "Reviews or descriptions of cleanliness and transit access",
    ],
    practicalNotes:
      "Confirm age policies, curfews, and key/locker deposit rules before choosing a property.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "student-accommodation",
    name: "Student Accommodation",
    summary:
      "University halls, student residences, and shared student housing designed for academic semesters or longer study stays.",
    evaluationCriteria: [
      "Eligibility rules (enrolled students only), contract length, and utility inclusions",
      "Commute time to campus and kitchen/study facilities",
    ],
    practicalNotes:
      "SchengeN Routes does not provide booking or housing placement services; verify terms directly with institutions or official housing portals.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "short-term-rentals",
    name: "Short-Term Rentals",
    summary:
      "Furnished apartments or private rooms rented for short stays, offering kitchen facilities and residential space.",
    evaluationCriteria: [
      "Self-check-in vs. host handover, building access details, and noise rules",
      "Local municipal registration/licensing compliance and extra cleaning or deposit terms",
    ],
    practicalNotes: "Verify exact location and arrival instructions ahead of travel.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "budget-accommodation",
    name: "Budget Accommodation",
    summary:
      "Value-focused rooms, guesthouses, or basic properties prioritising essentials over full-service amenities.",
    evaluationCriteria: [
      "Included amenities (private vs. shared bathroom, heating/cooling, Wi-Fi)",
      "Total value once transit costs from slightly farther-out locations are factored in",
    ],
    practicalNotes:
      "Lower headline rates sometimes come with stricter non-refundable terms or smaller rooms.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "long-term-stays",
    name: "Long-Term Stays",
    summary:
      "Extended rentals or serviced apartments suited to multi-week stays, internships, or relocation transitions.",
    evaluationCriteria: [
      "Minimum stay duration, lease/registration rules, utilities, and deposit conditions",
      "Whether the address supports local registration where required by law",
    ],
    practicalNotes:
      "Confirm legal and registration requirements with official local authorities for extended stays.",
    lastReviewed: REVIEW_DATE,
  },
] as const;

export const PRACTICAL_TRAVEL_TIPS: readonly PracticalTravelTip[] = [
  {
    id: "tip-preparation",
    topic: "Travel Preparation",
    summary: "Keep key documents accessible and allow buffer time between legs.",
    guidance:
      "Carry valid travel ID, note emergency numbers, and leave reasonable margin for connections and weather.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-currency",
    topic: "Currency & Payments",
    summary: "Check local currency and carry a mix of payment options.",
    guidance:
      "Many European countries use the Euro (EUR), while others (such as Hungary) use their own currency. Check card acceptance and ATM/foreign-transaction rules before departure.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-language",
    topic: "Language Basics",
    summary: "Learn basic local greetings and key station or directional terms.",
    guidance:
      "Simple greetings in the local language go a long way; in tourist and transit hubs, signage and staff often support English alongside local languages.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-connectivity",
    topic: "Connectivity",
    summary: "Plan mobile data and offline map access before arriving.",
    guidance:
      "Review your mobile carrier's EU/international roaming terms or local/eSIM connectivity options and download offline maps for unfamiliar streets.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-insurance",
    topic: "Travel & Medical Insurance",
    summary: "Verify medical and travel coverage suited to your trip length and activities.",
    guidance:
      "Confirm policy coverage dates, emergency assistance contacts, and any specific health or trip-cancellation terms before travelling.",
    source: {
      authority: "Your Europe (European Commission)",
      label: "Health & Travel Information",
      url: "https://europa.eu/youreurope/citizens/travel/index_en.htm",
    },
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-safety-etiquette",
    topic: "Safety Awareness & Cultural Etiquette",
    summary: "Stay mindful of crowded transit hubs and local cultural norms.",
    guidance:
      "Keep valuables secure in busy stations and tourist squares, respect local customs and quiet hours, and follow official guidance during severe weather or events.",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "tip-emergency-accessibility",
    topic: "Emergency Info & Accessibility",
    summary: "Note European emergency contacts and verify station/venue accessibility early.",
    guidance:
      "112 is the general emergency telephone number across EU Member States. For step-free access, lifts, or assistance, check official transit and venue accessibility pages in advance.",
    source: {
      authority: "European Commission",
      label: "112 Emergency Number Information",
      url: "https://digital-strategy.ec.europa.eu/en/policies/112",
    },
    lastReviewed: REVIEW_DATE,
  },
] as const;
