"use client";

import { useMemo, useState } from "react";
import { TravelGuideCard } from "@/components/travel/travel-guide-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterTravelGuides } from "@/lib/travel/filters";
import type { TravelGuideArticle, TravelGuideCategory } from "@/types/travel";

export interface TravelGuideGridProps {
  articles: readonly TravelGuideArticle[];
  background?: "white" | "subtle";
  expanded?: boolean;
  showFilters?: boolean;
}

const GUIDE_CATEGORIES: readonly TravelGuideCategory[] = [
  "Trip Planning",
  "Cross-Border Travel",
  "Public & Rail Transport",
  "Budget & Accommodation",
  "Preparation & Packing",
] as const;

export function TravelGuideGrid({
  articles,
  background = "subtle",
  expanded = false,
  showFilters = false,
}: TravelGuideGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [guideCategory, setGuideCategory] = useState("all");

  const filtered = useMemo(
    () =>
      filterTravelGuides(articles, {
        searchQuery,
        guideCategory,
        country: "all",
      }),
    [articles, searchQuery, guideCategory]
  );

  function clearFilters() {
    setSearchQuery("");
    setGuideCategory("all");
  }

  return (
    <Section
      id="travel-guides"
      background={background}
      spacing="lg"
      aria-labelledby="travel-guides-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Practical Travel Guides</Eyebrow>
          <Heading as="h2" id="travel-guides-heading" className="mt-2">
            European Travel Planning Guides
          </Heading>
          <Paragraph className="mt-3">
            Clear, practical guidance covering trip pacing, cross-border considerations, local
            public transport, accommodation planning, and packing essentials.
          </Paragraph>
        </div>

        {showFilters ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <Input
                  id="travel-guide-search"
                  label="Search Travel Guides"
                  type="search"
                  placeholder="Search rail, Schengen borders, packing, transit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-4">
                <label
                  htmlFor="travel-guide-category"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Guide Topic
                </label>
                <select
                  id="travel-guide-category"
                  value={guideCategory}
                  onChange={(e) => setGuideCategory(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Topics</option>
                  {GUIDE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
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
              <strong className="text-text-primary">{articles.length}</strong> travel guides
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((article) => (
              <TravelGuideCard key={article.slug} article={article} expanded={expanded} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching travel guides
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No travel guide articles match your current search or topic filter. Clear filters to
              view all available guides.
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
