"use client";

import { useMemo, useState } from "react";
import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterVisaFaqs } from "@/lib/visa-guide/filters";
import type { VisaFaqItem } from "@/types/visa-guide";

export interface VisaFaqProps {
  faqs: readonly VisaFaqItem[];
  background?: "white" | "subtle";
  showFilters?: boolean;
}

export function VisaFaq({ faqs, background = "white", showFilters = false }: VisaFaqProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visaCategory, setVisaCategory] = useState("all");
  const [context, setContext] = useState<"all" | "student" | "non-student">("all");

  const filtered = useMemo(
    () =>
      filterVisaFaqs(faqs, {
        searchQuery,
        visaCategory,
        context,
      }),
    [faqs, searchQuery, visaCategory, context]
  );

  function clearFilters() {
    setSearchQuery("");
    setVisaCategory("all");
    setContext("all");
  }

  return (
    <Section
      id="visa-faqs"
      background={background}
      spacing="lg"
      aria-labelledby="visa-faqs-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <Heading as="h2" id="visa-faqs-heading" className="mt-2">
            Common European Visa Questions
          </Heading>
          <Paragraph className="mt-3">
            Clear answers on Schengen short-stay visas, national student visas, EU vs. Schengen
            distinctions, and how to verify requirements on official portals.
          </Paragraph>
        </div>

        {showFilters ? (
          <Card variant="default" padding="md" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5">
                <Input
                  id="visa-faq-search"
                  label="Search Questions"
                  type="search"
                  placeholder="Search Schengen, student visa, embassy..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="lg:col-span-4">
                <label
                  htmlFor="visa-faq-category"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Visa Category
                </label>
                <select
                  id="visa-faq-category"
                  value={visaCategory}
                  onChange={(e) => setVisaCategory(e.target.value)}
                  className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="schengen-short-stay">Schengen Short-Stay Visa</option>
                  <option value="student-visa">Student Visa</option>
                  <option value="national-long-stay">National Long-Stay</option>
                </select>
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="visa-faq-context"
                  className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
                >
                  Context
                </label>
                <select
                  id="visa-faq-context"
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

            <div className="border-border-subtle text-text-secondary mt-4 flex items-center justify-between border-t pt-3 text-xs">
              <span>
                Showing <strong className="text-text-primary">{filtered.length}</strong> of{" "}
                <strong className="text-text-primary">{faqs.length}</strong> questions
              </span>
              <Button type="button" variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </Card>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 space-y-3">
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `${faq.id}-panel`;
              const buttonId = `${faq.id}-button`;

              return (
                <Card key={faq.id} variant="default" padding="none" className="overflow-hidden">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="font-heading text-text-primary hover:bg-surface-subtle focus-visible:outline-brand-blue flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="text-brand-blue shrink-0 text-lg font-semibold"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {isOpen ? (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="border-border-subtle border-t px-6 py-4"
                    >
                      <Paragraph size="sm">{faq.answer}</Paragraph>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <ReviewStatusIndicator
                          status={faq.reviewStatus}
                          lastReviewed={faq.lastReviewed}
                        />
                        <a
                          href={faq.officialSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                        >
                          {faq.sourceAuthority} ↗
                        </a>
                      </div>
                    </div>
                  ) : null}
                </Card>
              );
            })}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8 text-center">
            <Heading as="h3" size="h4">
              No matching questions found
            </Heading>
            <Paragraph size="sm" className="mx-auto mt-2 max-w-lg">
              No FAQs match your current search or filter settings. Reset filters to view all visa
              questions.
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
