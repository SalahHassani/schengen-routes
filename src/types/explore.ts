export type ExploreCategorySlug =
  | "culture"
  | "landmarks"
  | "history"
  | "food"
  | "festivals"
  | "student-life"
  | "nature"
  | "experiences"
  | "stories";

export type ExploreContentKind = "place" | "story" | "experience" | "event";

export interface ExploreSourceReference {
  title: string;
  url: string;
}

export interface ExploreCategory {
  id: string;
  title: string;
  slug: ExploreCategorySlug;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  contentCount?: number;
}

export interface ExplorePlace {
  id: string;
  name: string;
  slug: string;
  country: string;
  city?: string;
  category: Exclude<ExploreCategorySlug, "stories" | "experiences">;
  description: string;
  image: string;
  imageAlt: string;
  significance: string;
  source: ExploreSourceReference;
  lastReviewed: string;
  featured?: boolean;
}

export interface ExploreStory {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: readonly string[];
  category: ExploreCategorySlug;
  country?: string;
  city?: string;
  coverImage: string;
  coverImageAlt: string;
  author?: string;
  publishedAt?: string;
  updatedAt: string;
  sources: readonly ExploreSourceReference[];
  readingTime?: string;
  featured?: boolean;
}

export interface ExploreExperience {
  id: string;
  title: string;
  slug: string;
  location: string;
  country: string;
  city?: string;
  category: Exclude<ExploreCategorySlug, "stories">;
  description: string;
  image: string;
  imageAlt: string;
  source: ExploreSourceReference;
  lastReviewed: string;
  featured?: boolean;
}

export interface ExploreEvent {
  id: string;
  title: string;
  location: string;
  country: string;
  image?: string;
  imageAlt?: string;
  description: string;
  /** Only populated when verified; omitted/null otherwise */
  eventDate?: string;
  source: ExploreSourceReference;
  lastReviewed: string;
}

export interface ExploreFilterState {
  searchQuery: string;
  category: string;
  country: string;
  contentType: string;
}
