"use client";

import { useMemo, useState } from "react";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { filterProgrammes } from "@/lib/study/filters";
import type {
  DegreeLevel,
  StudyCountryRecord,
  StudyProgrammeRecord,
  StudyUniversityRecord,
} from "@/types/study";

export interface ProgrammeDirectoryProps {
  programmes: readonly StudyProgrammeRecord[];
  countries: readonly StudyCountryRecord[];
  universities: readonly StudyUniversityRecord[];
  background?: "white" | "subtle";
  showDegreeCards?: boolean;
}

const DEGREE_LEVEL_CARDS: readonly { level: DegreeLevel; summary: string }[] = [
  {
    level: "Bachelor's",
    summary:
      "Undergraduate degree programmes across European universities and applied sciences institutions.",
  },
  {
    level: "Master's",
    summary: "Postgraduate degree pathways for specialised academic or professional advancement.",
  },
  {
    level: "Foundation",
    summary:
      "Preparatory academic or language pathways offered by recognised institutions where applicable.",
  },
  {
    level: "PhD / Doctoral",
    summary:
      "Doctoral research programmes and structured graduate schools across European research hubs.",
  },
] as const;

export function ProgrammeDirectory({
  programmes,
  countries,
  universities,
  background = "white",
  showDegreeCards = true,
}: ProgrammeDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [degreeLevel, setDegreeLevel] = useState("all");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("all");
  const [university, setUniversity] = useState("all");

  const filtered = useMemo(
    () =>
      filterProgrammes(programmes, {
        searchQuery,
        country,
        degreeLevel,
        subject,
        language,
        university,
      }),
    [programmes, searchQuery, country, degreeLevel, subject, language, university]
  );

  function clearAllFilters() {
    setSearchQuery("");
    setCountry("all");
    setDegreeLevel("all");
    setSubject("");
    setLanguage("all");
    setUniversity("all");
  }

  return (
    <Section
      id="programmes"
      background={background}
      spacing="lg"
      aria-labelledby="study-progs-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Academic Degrees</Eyebrow>
          <Heading as="h2" id="study-progs-heading" className="mt-2">
            Find Your Programme
          </Heading>
          <Paragraph className="mt-3">
            Explore programmes by degree level, country, field of study, language of instruction,
            and university.
          </Paragraph>
        </div>

        {showDegreeCards ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DEGREE_LEVEL_CARDS.map((item) => (
              <Card
                key={item.level}
                variant="default"
                padding="md"
                className="flex h-full flex-col"
              >
                <div>
                  <Badge variant="default">{item.level}</Badge>
                </div>
                <Heading as="h3" size="h4" className="mt-3 text-base">
                  {item.level} Programmes
                </Heading>
                <Paragraph size="sm" className="mt-2 flex-1">
                  {item.summary}
                </Paragraph>
              </Card>
            ))}
          </div>
        ) : null}

        {/* Programme Filter Architecture */}
        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:items-end">
            <div className="lg:col-span-2">
              <Input
                id="programme-search"
                label="Programme Keyword"
                type="search"
                placeholder="e.g. Computer Science, Economics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="programme-country"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Country
              </label>
              <select
                id="programme-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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

            <div>
              <label
                htmlFor="programme-level"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Degree Level
              </label>
              <select
                id="programme-level"
                value={degreeLevel}
                onChange={(e) => setDegreeLevel(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Levels</option>
                {DEGREE_LEVEL_CARDS.map((d) => (
                  <option key={d.level} value={d.level}>
                    {d.level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="programme-university"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                University
              </label>
              <select
                id="programme-university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Universities</option>
                {universities.map((u) => (
                  <option key={u.slug} value={u.slug}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="programme-language"
                className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
              >
                Language
              </label>
              <select
                id="programme-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="all">All Languages</option>
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="Dutch">Dutch</option>
                <option value="Hungarian">Hungarian</option>
              </select>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:items-end">
            <div className="lg:col-span-3">
              <Input
                id="programme-subject"
                label="Subject Area"
                type="text"
                placeholder="Filter by field of study..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 lg:col-span-3 lg:justify-end">
              <span className="text-text-secondary text-xs">
                Showing <strong className="text-text-primary">{filtered.length}</strong> verified
                programme records
              </span>
              <Button type="button" variant="outline" size="sm" onClick={clearAllFilters}>
                Clear Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Empty State or Programme List */}
        {filtered.length === 0 ? (
          <Card variant="default" padding="lg" className="mt-8">
            <div className="max-w-2xl">
              <Badge variant="neutral">Verified Dataset Pending</Badge>
              <Heading as="h3" size="h4" className="mt-3">
                Individual Programme Records Are Being Verified
              </Heading>
              <Paragraph size="sm" className="mt-2">
                SchengeN Routes does not publish unverified programme titles, tuition figures, or
                entry criteria. Individual degree programmes will appear here as official university
                programme pages are reviewed and dated.
              </Paragraph>
              <div className="mt-5 flex flex-wrap gap-3">
                <NextLink href="/study/universities">
                  <Button variant="primary" size="sm">
                    Browse Verified Universities
                  </Button>
                </NextLink>
                <NextLink href="/study/countries">
                  <Button variant="outline" size="sm">
                    Explore Official Country Portals
                  </Button>
                </NextLink>
              </div>
            </div>
          </Card>
        ) : null}
      </Container>
    </Section>
  );
}
