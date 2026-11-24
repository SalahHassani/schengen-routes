import Image from "next/image";
import NextLink from "next/link";
import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { CountryVisaGuideRecord } from "@/types/visa-guide";

export interface CountryGuideCardProps {
  country: CountryVisaGuideRecord;
  detailed?: boolean;
}

export function CountryGuideCard({ country, detailed = false }: CountryGuideCardProps) {
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
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Heading as="h3" size="h4">
            {country.name}
          </Heading>
          <span className="text-text-muted text-xs font-medium">{country.region}</span>
        </div>

        {/* Separate EU and Schengen Membership Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant={country.isEuMember ? "default" : "neutral"}>
            {country.isEuMember ? "EU Member State" : "Non-EU State"}
          </Badge>
          <Badge variant={country.isSchengenMember ? "accent" : "neutral"}>
            {country.isSchengenMember ? "Schengen Area" : "Non-Schengen"}
          </Badge>
        </div>

        <Paragraph size="sm" className="mt-3">
          {country.summary}
        </Paragraph>

        {detailed ? (
          <div className="border-border-subtle text-text-secondary mt-4 space-y-3 border-t pt-4 text-xs">
            <div>
              <span className="font-heading text-text-primary font-semibold">
                Short-Stay Procedure:{" "}
              </span>
              <span>{country.shortStayOverview}</span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">
                Student Visa &amp; Study Residence:{" "}
              </span>
              <span>{country.studentVisaOverview}</span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">
                National Long-Stay &amp; Residence:{" "}
              </span>
              <span>
                {country.nationalLongStayOverview} {country.residencePermitOverview}
              </span>
            </div>

            <div>
              <span className="font-heading text-text-primary font-semibold">
                Appointments &amp; Jurisdiction:{" "}
              </span>
              <span>
                {country.embassyGuidanceNote} {country.appointmentInfo}
              </span>
            </div>

            <div className="space-y-1 pt-1">
              <span className="font-heading text-text-primary block font-semibold">
                Official Government &amp; Immigration Portals:
              </span>
              <a
                href={country.officialForeignMinistry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue decoration-brand-blue/40 hover:text-brand-navy block font-medium underline underline-offset-4"
              >
                {country.officialForeignMinistry.label} ↗
              </a>
              <a
                href={country.officialImmigrationAuthority.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue decoration-brand-blue/40 hover:text-brand-navy block font-medium underline underline-offset-4"
              >
                {country.officialImmigrationAuthority.label} ↗
              </a>
              <a
                href={country.officialVisaPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue decoration-brand-blue/40 hover:text-brand-navy block font-medium underline underline-offset-4"
              >
                {country.officialVisaPortal.label} ↗
              </a>
            </div>

            <p className="bg-surface-subtle text-text-secondary rounded-md p-2.5 text-[11px]">
              {country.editorialNotes}
            </p>
          </div>
        ) : null}

        <div className="mt-4">
          <ReviewStatusIndicator
            status={country.reviewStatus}
            lastReviewed={country.lastReviewed}
            showDescription={detailed}
          />
        </div>

        <div className="border-border-subtle mt-auto flex items-center justify-between gap-3 border-t pt-4 text-xs">
          <NextLink
            href="/visa-guide/countries"
            className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
          >
            <span>Country Visa Details</span>
            <span aria-hidden="true">→</span>
          </NextLink>
          <a
            href={country.officialForeignMinistry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
          >
            Official Ministry ↗
          </a>
        </div>
      </div>
    </Card>
  );
}
