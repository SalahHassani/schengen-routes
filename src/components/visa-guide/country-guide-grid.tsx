"use client";

import { useMemo, useState } from "react";
import { CountryGuideCard } from "@/components/visa-guide/country-guide-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterCountryVisaGuides } from "@/lib/visa-guide/filters";
import type { CountryVisaGuideRecord } from "@/types/visa-guide";

export interface CountryGuideGridProps {
  countries: readonly CountryVisaGuideRecord[];
  background?: "white" | "subtle";
  detailed?: boolean;
  showFilterBar?: boolean;
}

export function CountryGuideGrid({
  countries,
  background = "subtle",
  detailed = false,
  showFilterBar = false,
}: CountryGuideGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filtered = useMemo(
    () =>
      filterCountryVisaGuides(countries, {
        searchQuery,
        country: selectedCountry,
      }),
    [countries, searchQuery, selectedCountry]
  );

  function clearFilters() {
    setSearchQuery("");
    setSelectedCountry("all");
  }

  return (
    <Section
      id="visa-countries"
      background={background}
      spacing="lg"
      aria-labelledby="visa-countries-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Country-Specific Visa Architecture</Eyebrow>
          <Heading as="h2" id="visa-countries-heading" className="mt-2">
            Country Visa &amp; Residence Overviews
          </Heading>
          <Paragraph className="mt-3">
            Each European country manages its own national student visas, residence permits, and
            consular procedures alongside shared Schengen short-stay rules. EU membership and
            Schengen membership are displayed separately for clarity.
          </Paragraph>
        </div>

        {showFilterBar ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <Input
                  id="visa-country-search"
                  label="Search Country Guides"
                  type="search"
                  placeholder="Search country, student permit, residence procedure..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-4">
                <label
                  htmlFor="visa-country-select"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Country
                </label>
                <select
                  id="visa-country-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Countries</option>
                  {countries.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
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
              <strong className="text-text-primary">{countries.length}</strong> country guides
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((country) => (
              <CountryGuideCard key={country.slug} country={country} detailed={detailed} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching country guides
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No country visa guides match your current search or selection. Reset filters to view
              all available countries.
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
