import type {
  TravelCityGuideRecord,
  TravelDestinationRecord,
  TravelFilterState,
  TravelGuideArticle,
  TravelItineraryRecord,
} from "@/types/travel";

export function filterDestinations(
  destinations: readonly TravelDestinationRecord[],
  filters: Pick<TravelFilterState, "searchQuery" | "country" | "city" | "destinationCategory">
): TravelDestinationRecord[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return destinations.filter((dest) => {
    if (filters.country !== "all" && dest.country.toLowerCase() !== filters.country.toLowerCase()) {
      return false;
    }

    if (
      filters.city !== "all" &&
      (!dest.city || dest.city.toLowerCase() !== filters.city.toLowerCase())
    ) {
      return false;
    }

    if (filters.destinationCategory !== "all" && dest.category !== filters.destinationCategory) {
      return false;
    }

    if (query) {
      const searchable = [
        dest.name,
        dest.country,
        dest.city ?? "",
        dest.region,
        dest.category,
        dest.shortDescription,
        ...dest.mainAttractions,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterCities(
  cities: readonly TravelCityGuideRecord[],
  filters: Pick<TravelFilterState, "searchQuery" | "country" | "city">
): TravelCityGuideRecord[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return cities.filter((city) => {
    if (filters.country !== "all" && city.country.toLowerCase() !== filters.country.toLowerCase()) {
      return false;
    }

    if (filters.city !== "all" && city.name.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }

    if (query) {
      const searchable = [
        city.name,
        city.country,
        city.introduction,
        ...city.neighbourhoods,
        ...city.mainAttractions,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterTravelGuides(
  guides: readonly TravelGuideArticle[],
  filters: Pick<TravelFilterState, "searchQuery" | "guideCategory" | "country">
): TravelGuideArticle[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return guides.filter((guide) => {
    if (filters.guideCategory !== "all" && guide.category !== filters.guideCategory) {
      return false;
    }

    if (filters.country !== "all") {
      const countryLower = filters.country.toLowerCase();
      const matchesDestination = guide.relatedDestinations.some((d) =>
        d.toLowerCase().includes(countryLower)
      );
      const matchesText = `${guide.title} ${guide.summary}`.toLowerCase().includes(countryLower);
      if (!matchesDestination && !matchesText) return false;
    }

    if (query) {
      const searchable = [
        guide.title,
        guide.category,
        guide.summary,
        ...guide.contentSections.map((s) => `${s.heading} ${s.body}`),
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterItineraries(
  itineraries: readonly TravelItineraryRecord[],
  filters: Pick<
    TravelFilterState,
    "searchQuery" | "country" | "city" | "itineraryCategory" | "durationBucket"
  >
): TravelItineraryRecord[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return itineraries.filter((it) => {
    if (
      filters.country !== "all" &&
      !it.countries.some((c) => c.toLowerCase() === filters.country.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.city !== "all" &&
      !it.cities.some((c) => c.toLowerCase() === filters.city.toLowerCase())
    ) {
      return false;
    }

    if (filters.itineraryCategory !== "all" && it.category !== filters.itineraryCategory) {
      return false;
    }

    if (filters.durationBucket !== "all") {
      if (filters.durationBucket === "short" && it.durationDays > 3) return false;
      if (filters.durationBucket === "medium" && (it.durationDays < 4 || it.durationDays > 5)) {
        return false;
      }
      if (filters.durationBucket === "week-plus" && it.durationDays < 6) return false;
    }

    if (query) {
      const searchable = [
        it.title,
        it.description,
        it.category,
        ...it.countries,
        ...it.cities,
        ...it.suggestedActivities,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}
