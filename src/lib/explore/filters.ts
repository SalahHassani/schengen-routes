import type {
  ExploreCategorySlug,
  ExploreContentKind,
  ExploreEvent,
  ExploreExperience,
  ExploreFilterState,
  ExplorePlace,
  ExploreStory,
} from "@/types/explore";

export interface ExploreCollection {
  places: readonly ExplorePlace[];
  stories: readonly ExploreStory[];
  experiences: readonly ExploreExperience[];
  events: readonly ExploreEvent[];
}

export type FilteredExploreItem =
  | {
      kind: "place";
      item: ExplorePlace;
      category: ExploreCategorySlug;
      country: string;
      title: string;
    }
  | {
      kind: "story";
      item: ExploreStory;
      category: ExploreCategorySlug;
      country: string;
      title: string;
    }
  | {
      kind: "experience";
      item: ExploreExperience;
      category: ExploreCategorySlug;
      country: string;
      title: string;
    }
  | {
      kind: "event";
      item: ExploreEvent;
      category: ExploreCategorySlug;
      country: string;
      title: string;
    };

export function filterExploreItems(
  collection: ExploreCollection,
  filters: ExploreFilterState
): FilteredExploreItem[] {
  const query = filters.searchQuery.trim().toLowerCase();

  const combined: FilteredExploreItem[] = [
    ...collection.places.map((item) => ({
      kind: "place" as const,
      item,
      category: item.category,
      country: item.country,
      title: item.name,
    })),
    ...collection.stories.map((item) => ({
      kind: "story" as const,
      item,
      category: item.category,
      country: item.country ?? "Europe",
      title: item.title,
    })),
    ...collection.experiences.map((item) => ({
      kind: "experience" as const,
      item,
      category: item.category,
      country: item.country,
      title: item.title,
    })),
    ...collection.events.map((item) => ({
      kind: "event" as const,
      item,
      category: "festivals" as const,
      country: item.country,
      title: item.title,
    })),
  ];

  return combined.filter((entry) => {
    if (
      filters.contentType !== "all" &&
      entry.kind !== (filters.contentType as ExploreContentKind)
    ) {
      return false;
    }

    if (filters.category !== "all" && entry.category !== filters.category) {
      return false;
    }

    if (
      filters.country !== "all" &&
      entry.country.toLowerCase() !== filters.country.toLowerCase()
    ) {
      return false;
    }

    if (query) {
      const searchable =
        entry.kind === "place"
          ? [
              entry.item.name,
              entry.item.country,
              entry.item.city ?? "",
              entry.item.description,
              entry.item.significance,
            ]
              .join(" ")
              .toLowerCase()
          : entry.kind === "story"
            ? [
                entry.item.title,
                entry.item.country ?? "",
                entry.item.city ?? "",
                entry.item.excerpt,
                ...entry.item.content,
              ]
                .join(" ")
                .toLowerCase()
            : entry.kind === "experience"
              ? [entry.item.title, entry.item.location, entry.item.country, entry.item.description]
                  .join(" ")
                  .toLowerCase()
              : [entry.item.title, entry.item.location, entry.item.country, entry.item.description]
                  .join(" ")
                  .toLowerCase();

      if (!searchable.includes(query)) {
        return false;
      }
    }

    return true;
  });
}
