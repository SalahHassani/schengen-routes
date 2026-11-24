import Image from "next/image";
import NextLink from "next/link";
import type { StudyCountryRecord } from "@/types/study";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { formatIsoDateForDisplay } from "@/lib/study/deadline-status";

export interface CountryCardProps {
  country: StudyCountryRecord;
  detailed?: boolean;
}

export function CountryCard({ country, detailed = false }: CountryCardProps) {
  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={country.imageSrc}
          alt={country.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <Heading as="h3" size="h4">
            {country.name}
          </Heading>
          <Badge variant="neutral">{country.region}</Badge>
        </div>

        <Paragraph size="sm" className="mt-2.5">
          {country.summary}
        </Paragraph>

        {detailed ? (
          <div className="border-border-subtle text-text-secondary mt-4 space-y-3 border-t pt-4 text-xs">
            <div>
              <span className="font-heading text-text-primary font-semibold">
                Official Language(s):{" "}
              </span>
              <span>{country.officialLanguages.join(", ")}</span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">Study Cities: </span>
              <span>{country.commonStudyCities.join(", ")}</span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">
                Education System:{" "}
              </span>
              <span>{country.educationSystemOverview}</span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">
                Cycle &amp; Dates:{" "}
              </span>
              <span>
                {country.applicationCycle} · Opens:{" "}
                {formatIsoDateForDisplay(country.applicationOpeningDate)} · Deadline:{" "}
                {formatIsoDateForDisplay(country.applicationDeadline)} · Intake:{" "}
                {country.intakeStartDate ?? "Confirm with institution"}
              </span>
            </div>

            {country.tuitionOverview ? (
              <div>
                <span className="font-heading text-text-primary font-semibold">
                  Tuition &amp; Costs:{" "}
                </span>
                <span>{country.tuitionOverview}</span>
              </div>
            ) : null}

            <div className="space-y-1 pt-1">
              <span className="font-heading text-text-primary block font-semibold">
                Official Portals:
              </span>
              {country.officialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue decoration-brand-blue/40 hover:text-brand-navy block font-medium underline underline-offset-4"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>

            <p className="text-text-muted pt-1 text-[11px]">
              Last reviewed: {country.lastReviewed}
            </p>
          </div>
        ) : null}

        <div className="border-border-subtle mt-auto flex items-center justify-between gap-3 border-t pt-4">
          <NextLink
            href="/study/countries"
            className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            <span>Country Overview</span>
            <span aria-hidden="true">→</span>
          </NextLink>
          <span className="text-text-muted text-[11px]">Reviewed {country.lastReviewed}</span>
        </div>
      </div>
    </Card>
  );
}
