import type { ItineraryStop } from "@/types/travel";

/**
 * Formats an ordered sequence of itinerary stops as a readable route chain
 * without inventing travel times, distances, or coordinates.
 */
export function formatStopSequence(stops: readonly ItineraryStop[]): string {
  return [...stops]
    .sort((a, b) => a.order - b.order)
    .map((stop) => `${stop.city} (${stop.country})`)
    .join(" → ");
}

/**
 * Returns distinct countries in order of first appearance along an itinerary.
 */
export function getOrderedUniqueCountries(stops: readonly ItineraryStop[]): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const stop of [...stops].sort((a, b) => a.order - b.order)) {
    if (!seen.has(stop.country)) {
      seen.add(stop.country);
      ordered.push(stop.country);
    }
  }

  return ordered;
}
