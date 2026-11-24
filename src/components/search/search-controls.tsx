"use client";

import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Paragraph } from "@/components/ui/paragraph";
import type { GroupedSearchResults, SearchIndexItem } from "@/types/search";

export interface FilterOption {
  value: string;
  label: string;
}

export function FilterSelect({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: readonly FilterOption[];
  onChange: (nextValue: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-heading text-text-primary mb-1.5 block text-sm font-semibold"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-border-default focus:border-brand-blue focus:ring-brand-blue/20 rounded-input text-text-primary h-11 w-full border bg-white px-3 text-sm focus:ring-2 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export interface ActiveFilterChip {
  key: string;
  label: string;
  onRemove: () => void;
}

export function ActiveFilterBar({
  filters,
  onClearAll,
  resultCount,
  totalCount,
  itemNoun = "results",
}: {
  filters: readonly ActiveFilterChip[];
  onClearAll: () => void;
  resultCount: number;
  totalCount?: number;
  itemNoun?: string;
}) {
  return (
    <div className="border-border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3">
      <div className="flex flex-wrap items-center gap-2">
        <p role="status" aria-live="polite" className="text-text-secondary text-xs">
          Showing <strong className="text-text-primary">{resultCount}</strong>
          {typeof totalCount === "number" ? (
            <>
              {" "}
              of <strong className="text-text-primary">{totalCount}</strong>
            </>
          ) : null}{" "}
          {itemNoun}
        </p>

        {filters.map((chip) => (
          <button
            key={chip.key}
            type="button"
            onClick={chip.onRemove}
            aria-label={`Remove filter ${chip.label}`}
            className="border-brand-blue/30 bg-surface-blue-tint text-brand-blue hover:bg-brand-blue/10 focus-visible:outline-brand-blue inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium focus-visible:outline-2"
          >
            <span>{chip.label}</span>
            <span aria-hidden="true">×</span>
          </button>
        ))}
      </div>

      {filters.length > 0 ? (
        <Button type="button" variant="ghost" size="sm" onClick={onClearAll}>
          Clear All Filters
        </Button>
      ) : null}
    </div>
  );
}

export function SearchResultCard({ item }: { item: SearchIndexItem }) {
  return (
    <Card variant="default" padding="md" className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant="default">{item.serviceArea}</Badge>
        <span className="text-text-muted text-xs font-medium">{item.contentType}</span>
      </div>

      <Heading as="h3" size="h4" className="mt-3 text-base">
        {item.title}
      </Heading>

      {item.country ? (
        <p className="text-text-secondary mt-1 text-xs font-medium">{item.country}</p>
      ) : null}

      <Paragraph size="sm" className="mt-2 flex-1">
        {item.summary}
      </Paragraph>

      <div className="border-border-subtle mt-4 border-t pt-3">
        <NextLink
          href={item.href}
          className="text-brand-blue hover:text-brand-navy focus-visible:outline-brand-blue inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2"
        >
          <span>Open {item.serviceArea}</span>
          <span aria-hidden="true">→</span>
        </NextLink>
      </div>
    </Card>
  );
}

export function SearchEmptyState({ query, onReset }: { query: string; onReset: () => void }) {
  return (
    <Card variant="default" padding="lg" className="mt-8 text-center">
      <Heading as="h2" size="h4">
        No matching content found
      </Heading>
      <Paragraph size="sm" className="mx-auto mt-2 max-w-xl">
        {query.trim().length > 0
          ? `No Study, Visa Guide, Travel, or Explore entries matched "${query.trim()}" with the selected filters.`
          : "No entries match your current filter selection."}
      </Paragraph>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Button type="button" variant="outline" size="md" onClick={onReset}>
          Reset Search &amp; Filters
        </Button>
      </div>
    </Card>
  );
}

export function GroupedSearchResultsList({
  groups,
  query,
  onReset,
}: {
  groups: readonly GroupedSearchResults[];
  query: string;
  onReset: () => void;
}) {
  if (groups.length === 0) {
    return <SearchEmptyState query={query} onReset={onReset} />;
  }

  return (
    <div className="mt-8 space-y-10">
      {groups.map((group) => (
        <section
          key={group.serviceArea}
          aria-labelledby={`search-group-${group.serviceArea.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <div className="border-border-subtle flex items-center justify-between gap-3 border-b pb-2.5">
            <Heading
              as="h2"
              size="h3"
              id={`search-group-${group.serviceArea.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {group.serviceArea}{" "}
              <span className="text-text-muted text-base font-normal">({group.items.length})</span>
            </Heading>
            <NextLink
              href={group.href}
              className="text-brand-blue hover:text-brand-navy text-sm font-semibold underline underline-offset-4"
            >
              View {group.serviceArea}
            </NextLink>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <SearchResultCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function SearchBarInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Input
      id={id}
      label={label}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
