"use client";

import { useMemo, useState } from "react";
import { VisaCategoryCard } from "@/components/visa-guide/visa-category-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterVisaCategories } from "@/lib/visa-guide/filters";
import type { VisaCategoryRecord, VisaPurpose } from "@/types/visa-guide";

export interface VisaCategoryGridProps {
  categories: readonly VisaCategoryRecord[];
  background?: "white" | "subtle";
}

const PURPOSE_OPTIONS: readonly VisaPurpose[] = [
  "Tourism",
  "Business",
  "Family Visit",
  "Short Course",
  "Airport Transit",
  "Higher Education / Study",
  "Employment",
  "Family Reunification",
  "Research / Other National",
] as const;

export function VisaCategoryGrid({ categories, background = "white" }: VisaCategoryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visaCategory, setVisaCategory] = useState("all");
  const [purpose, setPurpose] = useState("all");
  const [context, setContext] = useState<"all" | "student" | "non-student">("all");

  const filtered = useMemo(
    () =>
      filterVisaCategories(categories, {
        searchQuery,
        country: "all",
        visaCategory,
        purpose,
        context,
      }),
    [categories, searchQuery, visaCategory, purpose, context]
  );

  function clearFilters() {
    setSearchQuery("");
    setVisaCategory("all");
    setPurpose("all");
    setContext("all");
  }

  return (
    <Section
      id="visa-categories"
      background={background}
      spacing="lg"
      aria-labelledby="visa-categories-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Visa Categories &amp; Legal Distinctions</Eyebrow>
          <Heading as="h2" id="visa-categories-heading" className="mt-2">
            European Visa &amp; Residence Pathways
          </Heading>
          <Paragraph className="mt-3">
            European entry and stay rules distinguish between Schengen short-stay visas, national
            student visa or study residence procedures, and national long-stay categories. Filter by
            purpose or student context to find the relevant guide.
          </Paragraph>
        </div>

        {/* Filter Controls */}
        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <Input
                id="visa-category-search"
                label="Search Visa Guides"
                type="search"
                placeholder="Search tourism, student, Type D, transit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="visa-category-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Visa Category
              </label>
              <select
                id="visa-category-select"
                value={visaCategory}
                onChange={(e) => setVisaCategory(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="schengen-short-stay">Schengen Short-Stay Visa</option>
                <option value="student-visa">Student Visa &amp; Study Residence</option>
                <option value="national-long-stay">National Long-Stay Visas</option>
                <option value="other-national">Other National Categories</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="visa-purpose-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Purpose of Travel
              </label>
              <select
                id="visa-purpose-select"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Purposes</option>
                {PURPOSE_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <label
                htmlFor="visa-context-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Context
              </label>
              <select
                id="visa-context-select"
                value={context}
                onChange={(e) => setContext(e.target.value as "all" | "student" | "non-student")}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Contexts</option>
                <option value="student">Student</option>
                <option value="non-student">Non-Student</option>
              </select>
            </div>
          </div>

          <div className="border-border-subtle text-text-secondary mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3 text-xs">
            <span>
              Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
              <strong className="text-text-primary">{categories.length}</strong> visa categories
            </span>
            <div className="flex items-center gap-3">
              <Badge variant="neutral">EU vs. Schengen Distinguished</Badge>
              <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>
        </Card>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((category) => (
              <VisaCategoryCard key={category.title} category={category} />
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching visa categories
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No visa category guides match your current filter combination. Reset filters to view
              all European visa and residence categories.
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
