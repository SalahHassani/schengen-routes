export type ServiceArea = "Study" | "Visa Guide" | "Travel" | "Explore";

export type SearchContentType =
  | "Study Country"
  | "University"
  | "Programme"
  | "Scholarship"
  | "Application Deadline"
  | "Visa Category"
  | "Visa Country Guide"
  | "Document Checklist"
  | "Application Procedure"
  | "Visa FAQ"
  | "Travel Country"
  | "City Guide"
  | "Destination"
  | "Travel Guide"
  | "Itinerary"
  | "Transportation"
  | "Accommodation"
  | "Practical Travel Tip"
  | "Explore Category"
  | "Place & Landmark"
  | "Story"
  | "Experience"
  | "Cultural Event";

export interface SearchIndexItem {
  id: string;
  title: string;
  summary: string;
  serviceArea: ServiceArea;
  contentType: SearchContentType;
  href: string;
  country?: string;
  category?: string;
  searchText: string;
}

export interface GlobalSearchFilters {
  query: string;
  serviceArea: "all" | ServiceArea;
  contentType: string;
  country: string;
}

export interface GroupedSearchResults {
  serviceArea: ServiceArea;
  href: string;
  items: SearchIndexItem[];
}
