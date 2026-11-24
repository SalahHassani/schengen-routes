"use client";

import { useMemo, useState } from "react";
import { ItineraryCard } from "@/components/travel/itinerary-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterItineraries } from "@/lib/travel/filters";
import type { ItineraryCategory, TravelItineraryRecord } from "@/types/travel";

export interface ItineraryGridProps {
  itineraries: readonly TravelItineraryRecord[];
  background?: "white" | "subtle";
  showDailySchedule?: boolean;
  showFilters?: boolean;
}

const ITINERARY_CATEGORIES: readonly ItineraryCategory[] = [
  "Weekend City Break",
  "Three-Day City Trip",
  "Five-Day Journey",
  "Seven-Day European Trip",
  "Multi-Country Itinerary",
  "Cultural Journey",
] as const;

export function ItineraryGrid({
  itineraries,
  background = "white",
  showDailySchedule = false,
  showFilters = true,
}: ItineraryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [itineraryCategory, setItineraryCategory] = useState("all");
  const [durationBucket, setDurationBucket] = useState("all");

  const countryOptions = useMemo(
    () => Array.from(new Set(itineraries.flatMap((it) => it.countries))).sort(),
    [itineraries]
  );

  const filtered = useMemo(
    () =>
      filterItineraries(itineraries, {
        searchQuery,
        country,
        city: "all",
        itineraryCategory,
        durationBucket,
      }),
    [itineraries, searchQuery, country, itineraryCategory, durationBucket]
  );

  function clearFilters() {
    setSearchQuery("");
    setCountry("all");
    setItineraryCategory("all");
    setDurationBucket("all");
  }

  return (
    <Section
      id="travel-itineraries"
      background={background}
      spacing="lg"
      aria-labelledby="travel-itineraries-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Suggested European Itineraries</Eyebrow>
          <Heading as="h2" id="travel-itineraries-heading" className="mt-2">
            Route Ideas &amp; Suggested Trip Outlines
          </Heading>
          <Paragraph className="mt-3">
            Explore geographically logical single-city and multi-country route ideas. Every
            itinerary is presented as a suggested planning outline rather than a fixed timetable.
          </Paragraph>
        </div>

        {showFilters ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-4">
                <Input
                  id="travel-itinerary-search"
                  label="Search Itineraries"
                  type="search"
                  placeholder="Search Vienna, Prague, Paris, rail..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="travel-itinerary-country"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Country
                </label>
                <select
                  id="travel-itinerary-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Countries</option>
                  {countryOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="travel-itinerary-type"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Itinerary Type
                </label>
                <select
                  id="travel-itinerary-type"
                  value={itineraryCategory}
                  onChange={(e) => setItineraryCategory(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Types</option>
                  {ITINERARY_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="travel-itinerary-duration"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Duration
                </label>
                <select
                  id="travel-itinerary-duration"
                  value={durationBucket}
                  onChange={(e) => setDurationBucket(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">2–3 Days</option>
                  <option value="medium">4–5 Days</option>
                  <option value="week-plus">6+ Days</option>
                </select>
              </div>
            </div>

            <div className="border-border-subtle text-text-secondary mt-4 flex items-center justify-between border-t pt-3 text-xs">
              <span>
                Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
                <strong className="text-text-primary">{itineraries.length}</strong> suggested
                itineraries
              </span>
              <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((itinerary) => (
              <ItineraryCard
                key={itinerary.slug}
                itinerary={itinerary}
                showDailySchedule={showDailySchedule}
              />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching itineraries
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No suggested itineraries match your selected filters. Reset filters to explore all
              available routes.
            </Paragraph>
            <div className="mt-5">
              <Button type="button" variant="outline" size="sm" onClick={clearFilters}>
                Reset Filters
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </Section>
  );
}
