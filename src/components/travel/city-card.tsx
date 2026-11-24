import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { TravelCityGuideRecord } from "@/types/travel";

export interface CityCardProps {
  city: TravelCityGuideRecord;
  detailed?: boolean;
}

export function CityCard({ city, detailed = false }: CityCardProps) {
  const officialSource = city.officialTourismSources[0];

  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={city.heroImage}
          alt={city.heroImageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <Heading as="h3" size="h4">
            {city.name}
          </Heading>
          <Badge variant="default">{city.country}</Badge>
        </div>

        <Paragraph size="sm" className="mt-2.5">
          {city.introduction}
        </Paragraph>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {city.neighbourhoods.slice(0, 3).map((area) => (
            <Badge key={area} variant="neutral">
              {area}
            </Badge>
          ))}
        </div>

        {detailed ? (
          <div className="border-border-subtle text-text-secondary mt-4 space-y-2.5 border-t pt-4 text-xs">
            <div>
              <span className="font-heading text-text-primary font-semibold">
                Public Transport:{" "}
              </span>
              <span>{city.publicTransportation}</span>
            </div>
            <div>
              <span className="font-heading text-text-primary font-semibold">
                Suggested Visit Pace:{" "}
              </span>
              <span>{city.recommendedVisitDuration}</span>
            </div>
            <div>
              <span className="font-heading text-text-primary font-semibold">Practical Note: </span>
              <span>{city.travelTips[0]}</span>
            </div>
          </div>
        ) : null}

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="flex items-center justify-between gap-3 border-t pt-4">
            <NextLink
              href={city.exploreHref}
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span>City Guide</span>
              <span aria-hidden="true">→</span>
            </NextLink>
            {officialSource ? (
              <a
                href={officialSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
              >
                {officialSource.authority} ↗
              </a>
            ) : null}
          </div>
          <p className="text-text-muted mt-2 text-[11px]">Last reviewed: {city.lastReviewed}</p>
        </div>
      </div>
    </Card>
  );
}
