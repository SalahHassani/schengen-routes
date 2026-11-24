"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ActiveFilterBar,
  FilterSelect,
  GroupedSearchResultsList,
  SearchBarInput,
  type ActiveFilterChip,
} from "@/components/search/search-controls";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { getSearchIndex, groupSearchResultsByServiceArea, searchAllContent } from "@/lib/search";
import {
  buildSearchQueryString,
  sanitizeEnumParam,
  sanitizeParam,
} from "@/lib/search/query-params";
import type { ServiceArea } from "@/types/search";

const SERVICE_AREAS: readonly ("all" | ServiceArea)[] = [
  "all",
  "Study",
  "Visa Guide",
  "Travel",
  "Explore",
];

export function GlobalSearchClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQuery = sanitizeParam(searchParams.get("q"), "");
  const initialService = sanitizeEnumParam(searchParams.get("service"), SERVICE_AREAS, "all");
  const initialType = sanitizeParam(searchParams.get("type"), "all");
  const initialCountry = sanitizeParam(searchParams.get("country"), "all");

  const [query, setQuery] = useState(initialQuery);
  const [serviceArea, setServiceArea] = useState<"all" | ServiceArea>(initialService);
  const [contentType, setContentType] = useState(initialType);
  const [country, setCountry] = useState(initialCountry);

  const index = useMemo(() => getSearchIndex(), []);

  const contentTypeOptions = useMemo(() => {
    const scoped =
      serviceArea === "all" ? index : index.filter((item) => item.serviceArea === serviceArea);
    const uniqueTypes = Array.from(new Set(scoped.map((item) => item.contentType))).sort();
    return [
      { value: "all", label: "All Content Types" },
      ...uniqueTypes.map((t) => ({ value: t, label: t })),
    ];
  }, [index, serviceArea]);

  const countryOptions = useMemo(() => {
    const uniqueCountries = Array.from(
      new Set(index.map((item) => item.country).filter((c): c is string => Boolean(c)))
    ).sort();
    return [
      { value: "all", label: "All Countries" },
      ...uniqueCountries.map((c) => ({ value: c, label: c })),
    ];
  }, [index]);

  const effectiveContentType = useMemo(() => {
    if (contentType === "all") return "all";
    return contentTypeOptions.some((opt) => opt.value === contentType) ? contentType : "all";
  }, [contentType, contentTypeOptions]);

  useEffect(() => {
    const qs = buildSearchQueryString({
      q: query,
      service: serviceArea,
      type: effectiveContentType,
      country,
    });
    router.replace(`${pathname}${qs}`, { scroll: false });
  }, [query, serviceArea, effectiveContentType, country, pathname, router]);

  const filteredResults = useMemo(
    () =>
      searchAllContent(
        {
          query,
          serviceArea,
          contentType: effectiveContentType,
          country,
        },
        index
      ),
    [index, query, serviceArea, effectiveContentType, country]
  );

  const groupedResults = useMemo(
    () => groupSearchResultsByServiceArea(filteredResults),
    [filteredResults]
  );

  const activeChips = useMemo<ActiveFilterChip[]>(() => {
    const chips: ActiveFilterChip[] = [];
    if (query.trim().length > 0) {
      chips.push({
        key: "q",
        label: `Query: "${query.trim()}"`,
        onRemove: () => setQuery(""),
      });
    }
    if (serviceArea !== "all") {
      chips.push({
        key: "service",
        label: `Area: ${serviceArea}`,
        onRemove: () => {
          setServiceArea("all");
          setContentType("all");
        },
      });
    }
    if (effectiveContentType !== "all") {
      chips.push({
        key: "type",
        label: `Type: ${effectiveContentType}`,
        onRemove: () => setContentType("all"),
      });
    }
    if (country !== "all") {
      chips.push({
        key: "country",
        label: `Country: ${country}`,
        onRemove: () => setCountry("all"),
      });
    }
    return chips;
  }, [query, serviceArea, effectiveContentType, country]);

  function resetAll() {
    setQuery("");
    setServiceArea("all");
    setContentType("all");
    setCountry("all");
  }

  return (
    <Section background="subtle" spacing="lg" aria-labelledby="global-search-heading">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Platform Search</Eyebrow>
          <Heading as="h1" id="global-search-heading" className="mt-2">
            Search Study, Visa Guide, Travel &amp; Explore
          </Heading>
          <Paragraph className="mt-3">
            Find verified institutions, visa guidance, destinations, itineraries, and cultural
            discoveries across SchengeN Routes.
          </Paragraph>
        </div>

        <Card variant="default" padding="md" className="mt-8">
          <div className="grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <SearchBarInput
                id="global-search-input"
                label="Search Keywords"
                placeholder="Search universities, visas, cities, landmarks..."
                value={query}
                onChange={setQuery}
              />
            </div>

            <div className="md:col-span-2">
              <FilterSelect
                id="global-search-service"
                label="Service Area"
                value={serviceArea}
                options={[
                  { value: "all", label: "All Areas" },
                  { value: "Study", label: "Study" },
                  { value: "Visa Guide", label: "Visa Guide" },
                  { value: "Travel", label: "Travel" },
                  { value: "Explore", label: "Explore" },
                ]}
                onChange={(val) => {
                  setServiceArea(sanitizeEnumParam(val, SERVICE_AREAS, "all"));
                  setContentType("all");
                }}
              />
            </div>

            <div className="md:col-span-3">
              <FilterSelect
                id="global-search-type"
                label="Content Type"
                value={effectiveContentType}
                options={contentTypeOptions}
                onChange={setContentType}
              />
            </div>

            <div className="md:col-span-2">
              <FilterSelect
                id="global-search-country"
                label="Country"
                value={country}
                options={countryOptions}
                onChange={setCountry}
              />
            </div>
          </div>

          <ActiveFilterBar
            filters={activeChips}
            onClearAll={resetAll}
            resultCount={filteredResults.length}
            totalCount={index.length}
            itemNoun="matching entries"
          />
        </Card>

        <GroupedSearchResultsList groups={groupedResults} query={query} onReset={resetAll} />
      </Container>
    </Section>
  );
}
