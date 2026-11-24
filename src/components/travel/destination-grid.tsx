"use client";

import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/travel/destination-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterDestinations } from "@/lib/travel/filters";
import type { DestinationCategory, TravelDestinationRecord } from "@/types/travel";

export interface DestinationGridProps {
  destinations: readonly TravelDestinationRecord[];
  background?: "white" | "subtle";
  showFilters?: boolean;
}

const CATEGORY_OPTIONS: readonly DestinationCategory[] = [
  "Historic Cities",
  "Alpine & Nature",
  "Cultural Heritage",
  "River & Urban Routes",
] as const;

export function DestinationGrid({
  destinations,
  background = "subtle",
  showFilters = true,
}: DestinationGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [city, setCity] = useState("all");
  const [destinationCategory, setDestinationCategory] = useState("all");

  const countryOptions = useMemo(
    () => Array.from(new Set(destinations.map((d) => d.country))).sort(),
    [destinations]
  );

  const cityOptions = useMemo(
    () =>
      Array.from(
        new Set(destinations.map((d) => d.city).filter((c): c is string => Boolean(c)))
      ).sort(),
    [destinations]
  );

  const filtered = useMemo(
    () =>
      filterDestinations(destinations, {
        searchQuery,
        country,
        city,
        destinationCategory,
      }),
    [destinations, searchQuery, country, city, destinationCategory]
  );

  function clearFilters() {
    setSearchQuery("");
    setCountry("all");
    setCity("all");
    setDestinationCategory("all");
  }

  return (
    <Section
      id="travel-destinations"
      background={background}
      spacing="lg"
      aria-labelledby="travel-destinations-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Explore Destinations</Eyebrow>
          <Heading as="h2" id="travel-destinations-heading" className="mt-2">
            European Destinations to Discover
          </Heading>
          <Paragraph className="mt-3">
            Explore European countries and regions featuring historic architecture, cultural
            landmarks, scenic waterways, and connected rail corridors.
          </Paragraph>
        </div>

        {showFilters ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-4">
                <Input
                  id="travel-destination-search"
                  label="Search Destinations"
                  type="search"
                  placeholder="Search country, city, canals, Alpine, culture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="travel-destination-country"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Country
                </label>
                <select
                  id="travel-destination-country"
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

              <div className="lg:col-span-2">
                <label
                  htmlFor="travel-destination-city"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Featured City
                </label>
                <select
                  id="travel-destination-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Cities</option>
                  {cityOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="travel-destination-type"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Destination Type
                </label>
                <select
                  id="travel-destination-type"
                  value={destinationCategory}
                  onChange={(e) => setDestinationCategory(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Types</option>
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-border-subtle text-text-secondary mt-4 flex items-center justify-between border-t pt-3 text-xs">
              <span>
                Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
                <strong className="text-text-primary">{destinations.length}</strong> destinations
              </span>
              <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching destinations
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No destinations match your current search or filter settings. Clear filters to view
              all featured European destinations.
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
