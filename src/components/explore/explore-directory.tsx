"use client";

import { useMemo, useState } from "react";
import { ExploreExperienceCard } from "@/components/explore/explore-experience-card";
import { ExplorePlaceCard } from "@/components/explore/explore-place-card";
import { ExploreStoryCard } from "@/components/explore/explore-story-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterExploreItems } from "@/lib/explore/filters";
import type {
  ExploreCategory,
  ExploreEvent,
  ExploreExperience,
  ExplorePlace,
  ExploreStory,
} from "@/types/explore";

export interface ExploreDirectoryProps {
  categories: readonly ExploreCategory[];
  places: readonly ExplorePlace[];
  stories: readonly ExploreStory[];
  experiences: readonly ExploreExperience[];
  events: readonly ExploreEvent[];
  background?: "white" | "subtle";
}

export function ExploreDirectory({
  categories,
  places,
  stories,
  experiences,
  events,
  background = "subtle",
}: ExploreDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [country, setCountry] = useState("all");
  const [contentType, setContentType] = useState("all");

  const countryOptions = useMemo(() => {
    const allCountries = [
      ...places.map((p) => p.country),
      ...stories.map((s) => s.country).filter((c): c is string => Boolean(c)),
      ...experiences.map((e) => e.country),
      ...events.map((ev) => ev.country),
    ];
    return Array.from(new Set(allCountries)).sort();
  }, [places, stories, experiences, events]);

  const totalCount = places.length + stories.length + experiences.length + events.length;

  const filtered = useMemo(
    () =>
      filterExploreItems(
        { places, stories, experiences, events },
        { searchQuery, category, country, contentType }
      ),
    [places, stories, experiences, events, searchQuery, category, country, contentType]
  );

  function clearFilters() {
    setSearchQuery("");
    setCategory("all");
    setCountry("all");
    setContentType("all");
  }

  return (
    <Section
      id="explore-directory"
      background={background}
      spacing="lg"
      aria-labelledby="explore-directory-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Discover Across Topics</Eyebrow>
          <Heading as="h2" id="explore-directory-heading" className="mt-2">
            Search European Culture, Landmarks &amp; Stories
          </Heading>
          <Paragraph className="mt-3">
            Filter curated landmarks, stories, local experiences, and cultural traditions by
            category, country, or content type.
          </Paragraph>
        </div>

        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <Input
                id="explore-search-input"
                label="Search Explore"
                type="search"
                placeholder="Search Rome, Prague, canals, student life, markets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="explore-category-filter"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Category
              </label>
              <select
                id="explore-category-filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="explore-country-filter"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Country
              </label>
              <select
                id="explore-country-filter"
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
                htmlFor="explore-type-filter"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Content Type
              </label>
              <select
                id="explore-type-filter"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="place">Places &amp; Landmarks</option>
                <option value="story">Stories &amp; Essays</option>
                <option value="experience">Experiences</option>
                <option value="event">Cultural Events</option>
              </select>
            </div>
          </div>

          <div className="border-border-subtle text-text-secondary mt-4 flex items-center justify-between border-t pt-3 text-xs">
            <span>
              Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
              <strong className="text-text-primary">{totalCount}</strong> curated discoveries
            </span>
            <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </Card>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry) => {
              if (entry.kind === "place") {
                return <ExplorePlaceCard key={entry.item.id} place={entry.item} />;
              }
              if (entry.kind === "story") {
                return <ExploreStoryCard key={entry.item.id} story={entry.item} />;
              }
              if (entry.kind === "experience") {
                return <ExploreExperienceCard key={entry.item.id} experience={entry.item} />;
              }
              return (
                <Card
                  key={entry.item.id}
                  variant="default"
                  padding="lg"
                  className="flex h-full flex-col"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="accent">{entry.item.country}</Badge>
                    <span className="text-text-muted text-xs uppercase">Cultural Tradition</span>
                  </div>
                  <Heading as="h3" size="h4" className="mt-3">
                    {entry.item.title}
                  </Heading>
                  <p className="text-text-secondary mt-1 text-xs font-medium">
                    {entry.item.location}
                  </p>
                  <Paragraph size="sm" className="mt-2">
                    {entry.item.description}
                  </Paragraph>
                  <div className="border-border-subtle mt-auto pt-4 text-xs">
                    <div className="flex items-center justify-between gap-2 border-t pt-3">
                      <span className="text-text-muted text-[11px]">
                        Reviewed {entry.item.lastReviewed}
                      </span>
                      <a
                        href={entry.item.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                      >
                        Source ↗
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching discoveries
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No Explore entries match your current search or filter selection. Reset filters to
              browse all cultural discoveries, landmarks, and stories.
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
