"use client";

import { useMemo, useState } from "react";
import { UniversityCard } from "@/components/study/university-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import {
  filterUniversities,
  getUniqueInstitutionTypes,
  getUniqueUniversityCountries,
} from "@/lib/study/filters";
import type { StudyUniversityRecord } from "@/types/study";

export interface UniversityDirectoryProps {
  universities: readonly StudyUniversityRecord[];
  background?: "white" | "subtle";
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function UniversityDirectory({
  universities,
  background = "subtle",
  title = "University Directory",
  eyebrow = "Verified Institutions",
  description = "Search verified European universities by name, city, or subject area, and filter by country or institution type.",
}: UniversityDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const countries = useMemo(() => getUniqueUniversityCountries(universities), [universities]);
  const institutionTypes = useMemo(() => getUniqueInstitutionTypes(universities), [universities]);

  const filtered = useMemo(
    () =>
      filterUniversities(universities, {
        searchQuery,
        country: selectedCountry,
        institutionType: selectedType,
      }),
    [universities, searchQuery, selectedCountry, selectedType]
  );

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedCountry !== "all" || selectedType !== "all";

  function clearAllFilters() {
    setSearchQuery("");
    setSelectedCountry("all");
    setSelectedType("all");
  }

  return (
    <Section
      id="universities"
      background={background}
      spacing="lg"
      aria-labelledby="study-unis-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h2" id="study-unis-heading" className="mt-2">
            {title}
          </Heading>
          <Paragraph className="mt-3">{description}</Paragraph>
        </div>

        {/* Search & Filter Bar */}
        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <Input
                id="university-search"
                label="Search Universities"
                type="search"
                placeholder="Search by university, city, or discipline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="university-country-filter"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Country
              </label>
              <select
                id="university-country-filter"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3.5 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Countries</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="university-type-filter"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Institution Type
              </label>
              <select
                id="university-type-filter"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3.5 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Types</option>
                {institutionTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-1">
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={clearAllFilters}
                disabled={!hasActiveFilters}
                className="w-full"
              >
                Clear
              </Button>
            </div>
          </div>

          <div className="border-border-subtle text-text-secondary mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3 text-xs">
            <span>
              Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
              <strong className="text-text-primary">{universities.length}</strong> verified
              institutions
            </span>
            <Badge variant="neutral">Official Admissions Links Included</Badge>
          </div>
        </Card>

        {/* Results or Empty State */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((university) => (
              <UniversityCard key={university.slug} university={university} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching universities found
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No verified universities match your current search or filter criteria. Clear filters
              or broaden your search query to view available institutions.
            </Paragraph>
            <div className="mt-5">
              <Button type="button" variant="outline" size="md" onClick={clearAllFilters}>
                Reset All Filters
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </Section>
  );
}
