"use client";

import { useMemo, useState } from "react";
import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterDocumentChecklist } from "@/lib/visa-guide/filters";
import type { DocumentChecklistItem, DocumentClassification } from "@/types/visa-guide";

export interface DocumentChecklistProps {
  items: readonly DocumentChecklistItem[];
  background?: "white" | "subtle";
}

function getClassificationBadgeVariant(
  classification: DocumentClassification
): "default" | "accent" | "neutral" {
  if (classification === "Generally required") return "default";
  if (classification === "Conditional or situation-dependent") return "accent";
  return "neutral";
}

export function DocumentChecklist({ items, background = "white" }: DocumentChecklistProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visaCategory, setVisaCategory] = useState("all");
  const [context, setContext] = useState<"all" | "student" | "non-student">("all");
  const [classificationFilter, setClassificationFilter] = useState("all");

  const filtered = useMemo(() => {
    const base = filterDocumentChecklist(items, {
      searchQuery,
      country: "all",
      visaCategory,
      purpose: "all",
      context,
    });

    if (classificationFilter === "all") return base;
    return base.filter((item) => item.classification === classificationFilter);
  }, [items, searchQuery, visaCategory, context, classificationFilter]);

  function clearFilters() {
    setSearchQuery("");
    setVisaCategory("all");
    setContext("all");
    setClassificationFilter("all");
  }

  return (
    <Section
      id="document-checklists"
      background={background}
      spacing="lg"
      aria-labelledby="document-checklists-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Supporting Documentation</Eyebrow>
          <Heading as="h2" id="document-checklists-heading" className="mt-2">
            Document Checklist Categories
          </Heading>
          <Paragraph className="mt-3">
            The categories below outline typical supporting documentation across European visa
            applications. They are broad informational categories—not a universal mandatory
            checklist. Exact requirements depend on visa category, personal circumstances,
            nationality, destination country, and current consular rules.
          </Paragraph>
        </div>

        {/* Three-Tier Classification Legend */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card variant="default" padding="md">
            <Badge variant="default">Generally required</Badge>
            <Paragraph size="sm" className="mt-2 text-xs">
              Core identity, form, and baseline evidence commonly requested across standard
              applications.
            </Paragraph>
          </Card>

          <Card variant="default" padding="md">
            <Badge variant="accent">Conditional or situation-dependent</Badge>
            <Paragraph size="sm" className="mt-2 text-xs">
              Applies depending on purpose of stay (e.g. study, business, family visit) or applicant
              profile.
            </Paragraph>
          </Card>

          <Card variant="default" padding="md">
            <Badge variant="neutral">Country-specific or authority-specific</Badge>
            <Paragraph size="sm" className="mt-2 text-xs">
              Required only when prescribed by a specific destination country, mission, or
              pre-consular authority.
            </Paragraph>
          </Card>
        </div>

        {/* Filter Bar */}
        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <Input
                id="checklist-search"
                label="Search Document Categories"
                type="search"
                placeholder="Search passport, insurance, admission, financial..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="checklist-category-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Visa Category
              </label>
              <select
                id="checklist-category-select"
                value={visaCategory}
                onChange={(e) => setVisaCategory(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="schengen-short-stay">Schengen Short-Stay Visa</option>
                <option value="student-visa">Student Visa &amp; Study Residence</option>
                <option value="national-long-stay">National Long-Stay Visas</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <label
                htmlFor="checklist-classification-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Requirement Classification
              </label>
              <select
                id="checklist-classification-select"
                value={classificationFilter}
                onChange={(e) => setClassificationFilter(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Classifications</option>
                <option value="Generally required">Generally required</option>
                <option value="Conditional or situation-dependent">
                  Conditional or situation-dependent
                </option>
                <option value="Country-specific or authority-specific">
                  Country-specific or authority-specific
                </option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label
                htmlFor="checklist-context-select"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Context
              </label>
              <select
                id="checklist-context-select"
                value={context}
                onChange={(e) => setContext(e.target.value as "all" | "student" | "non-student")}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All</option>
                <option value="student">Student</option>
                <option value="non-student">Non-Student</option>
              </select>
            </div>
          </div>

          <div className="border-border-subtle text-text-secondary mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3 text-xs">
            <span>
              Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
              <strong className="text-text-primary">{items.length}</strong> document categories
            </span>
            <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </Card>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filtered.map((item) => (
              <Card key={item.id} variant="default" padding="md" className="flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant={getClassificationBadgeVariant(item.classification)}>
                    {item.classification}
                  </Badge>
                  <span className="text-text-muted text-xs font-medium">
                    {item.checklistCategory}
                  </span>
                </div>

                <Heading as="h3" size="h4" className="mt-3 text-base">
                  {item.documentName}
                </Heading>

                <p className="text-brand-blue mt-1 text-xs font-medium">
                  Context: {item.visaCategoryLabel} · {item.applicantCategory}
                </p>

                <Paragraph size="sm" className="mt-2.5 flex-1">
                  {item.explanation}
                </Paragraph>

                <div className="mt-4">
                  <ReviewStatusIndicator
                    status={item.reviewStatus}
                    lastReviewed={item.lastReviewed}
                  />
                </div>

                <div className="border-border-subtle mt-3 flex items-center justify-between border-t pt-3 text-xs">
                  <a
                    href={item.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                  >
                    {item.sourceAuthority} ↗
                  </a>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching document categories
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No document checklist categories match your current filter selection. Clear filters to
              inspect all document categories.
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
