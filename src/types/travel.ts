export type DestinationCategory =
  "Historic Cities" | "Alpine & Nature" | "Cultural Heritage" | "River & Urban Routes";

export type TravelGuideCategory =
  | "Trip Planning"
  | "Cross-Border Travel"
  | "Public & Rail Transport"
  | "Budget & Accommodation"
  | "Preparation & Packing";

export type ItineraryCategory =
  | "Weekend City Break"
  | "Three-Day City Trip"
  | "Five-Day Journey"
  | "Seven-Day European Trip"
  | "Multi-Country Itinerary"
  | "Cultural Journey";

export type TransportModeId =
  "trains" | "buses" | "flights" | "local-transit" | "car-travel" | "ferries";

export type AccommodationCategoryId =
  | "hotels"
  | "hostels"
  | "student-accommodation"
  | "short-term-rentals"
  | "budget-accommodation"
  | "long-term-stays";

export interface TravelSourceReference {
  authority: string;
  label: string;
  url: string;
}

export interface TravelDestinationRecord {
  slug: string;
  name: string;
  country: string;
  city?: string;
  region: string;
  category: DestinationCategory;
  shortDescription: string;
  heroImage: string;
  heroImageAlt: string;
  galleryImages: readonly { src: string; alt: string }[];
  mainAttractions: readonly string[];
  recommendedActivities: readonly string[];
  travelTips: readonly string[];
  transportationInfo: string;
  accommodationGuidance: string;
  estimatedVisitDuration: string | null;
  relevantGuideSlugs: readonly string[];
  relatedItinerarySlugs: readonly string[];
  exploreHref: string;
  lastReviewed: string;
  sources: readonly TravelSourceReference[];
}

export interface TravelCountryGuideRecord {
  slug: string;
  name: string;
  region: string;
  imageSrc: string;
  imageAlt: string;
  introduction: string;
  mainDestinations: readonly string[];
  importantCities: readonly string[];
  transportationOverview: string;
  currencyInfo: string;
  languageInfo: string;
  practicalTravelInfo: readonly string[];
  relatedGuideSlugs: readonly string[];
  officialTourismSources: readonly TravelSourceReference[];
  lastReviewed: string;
}

export interface TravelCityGuideRecord {
  slug: string;
  name: string;
  country: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string;
  mainAttractions: readonly string[];
  neighbourhoods: readonly string[];
  publicTransportation: string;
  suggestedActivities: readonly string[];
  travelTips: readonly string[];
  recommendedVisitDuration: string;
  relatedItinerarySlugs: readonly string[];
  officialTourismSources: readonly TravelSourceReference[];
  exploreHref: string;
  lastReviewed: string;
}

export interface ItineraryStop {
  order: number;
  city: string;
  country: string;
  focus: string;
  transportToNextNote: string | null;
}

export interface ItineraryDayPlan {
  day: number;
  title: string;
  summary: string;
}

export interface TravelItineraryRecord {
  slug: string;
  title: string;
  description: string;
  category: ItineraryCategory;
  durationLabel: string;
  durationDays: number;
  countries: readonly string[];
  cities: readonly string[];
  orderedStops: readonly ItineraryStop[];
  dailySchedule: readonly ItineraryDayPlan[];
  suggestedActivities: readonly string[];
  transportationBetweenStops: string;
  accommodationGuidance: string;
  /** Only populated when verified; otherwise null */
  estimatedBudgetNote: string | null;
  travelDifficulty: "Accessible / Introductory" | "Moderate Pace" | "Active Multi-Stop";
  bestTravelPeriodNote: string;
  lastReviewed: string;
  sources: readonly TravelSourceReference[];
}

export interface TravelGuideSection {
  heading: string;
  body: string;
}

export interface TravelGuideArticle {
  slug: string;
  title: string;
  category: TravelGuideCategory;
  summary: string;
  coverImage: string;
  coverImageAlt: string;
  contentSections: readonly TravelGuideSection[];
  relatedDestinations: readonly string[];
  relatedItineraries: readonly string[];
  authorOrTeam: string;
  publicationDate: string;
  lastUpdated: string;
  sources: readonly TravelSourceReference[];
  seoTitle: string;
  seoDescription: string;
}

export interface TransportModeGuide {
  id: TransportModeId;
  name: string;
  summary: string;
  advantages: readonly string[];
  considerations: readonly string[];
  officialOperatorExamples: readonly TravelSourceReference[];
  lastReviewed: string;
}

export interface AccommodationCategoryGuide {
  id: AccommodationCategoryId;
  name: string;
  summary: string;
  evaluationCriteria: readonly string[];
  practicalNotes: string;
  lastReviewed: string;
}

export interface PracticalTravelTip {
  id: string;
  topic: string;
  summary: string;
  guidance: string;
  source?: TravelSourceReference;
  lastReviewed: string;
}

export interface TravelFilterState {
  searchQuery: string;
  country: string;
  city: string;
  destinationCategory: string;
  guideCategory: string;
  itineraryCategory: string;
  durationBucket: string;
}
