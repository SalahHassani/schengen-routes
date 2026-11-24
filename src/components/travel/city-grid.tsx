"use client";

import { useMemo, useState } from "react";
import { CityCard } from "@/components/travel/city-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterCities } from "@/lib/travel/filters";
import type { TravelCityGuideRecord } from "@/types/travel";

export interface CityGridProps {
  cities: readonly TravelCityGuideRecord[];
  background?: "white" | "subtle";
  detailed?: boolean;
  showFilters?: boolean;
}

export function CityGrid({
  cities,
  background = "white",
  detailed = false,
  showFilters = false,
}: CityGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("all");

  const countryOptions = useMemo(
    () => Array.from(new Set(cities.map((c) => c.country))).sort(),
    [cities]
  );

  const filtered = useMemo(
    () =>
      filterCities(cities, {
        searchQuery,
        country,
        city: "all",
      }),
    [cities, searchQuery, country]
  );

  function clearFilters() {
    setSearchQuery("");
    setCountry("all");
  }

  return (
    <Section
      id="travel-cities"
      background={background}
      spacing="lg"
      aria-labelledby="travel-cities-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>European City Guides</Eyebrow>
          <Heading as="h2" id="travel-cities-heading" className="mt-2">
            European Cities to Explore
          </Heading>
          <Paragraph className="mt-3">
            Discover walkable neighbourhoods, cultural landmarks, local public transport systems,
            and official visitor portals across key European cities.
          </Paragraph>
        </div>

        {showFilters ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <Input
                  id="travel-city-search"
                  label="Search Cities"
                  type="search"
                  placeholder="Search Paris, Rome, neighbourhoods, canals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-4">
                <label
                  htmlFor="travel-city-country"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Country
                </label>
                <select
                  id="travel-city-country"
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
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear
                </Button>
              </div>
            </div>

            <div className="border-border-subtle text-text-secondary mt-4 border-t pt-3 text-xs">
              Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
              <strong className="text-text-primary">{cities.length}</strong> city guides
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((city) => (
              <CityCard key={city.slug} city={city} detailed={detailed} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching city guides
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No European city guides match your current search or country selection. Reset filters
              to view all cities.
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
