import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { TravelDestinationRecord } from "@/types/travel";

export interface DestinationCardProps {
  destination: TravelDestinationRecord;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const primarySource = destination.sources[0];

  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.heroImageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="default">{destination.country}</Badge>
          <span className="text-text-muted text-xs font-medium">{destination.category}</span>
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {destination.name}
        </Heading>

        <Paragraph size="sm" className="mt-2">
          {destination.shortDescription}
        </Paragraph>

        {destination.estimatedVisitDuration ? (
          <p className="text-text-secondary mt-3 text-xs">
            <span className="font-heading text-text-primary font-semibold">Suggested Pace: </span>
            {destination.estimatedVisitDuration}
          </p>
        ) : null}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {destination.mainAttractions.slice(0, 3).map((item) => (
            <Badge key={item} variant="neutral">
              {item}
            </Badge>
          ))}
        </div>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="flex items-center justify-between gap-3 border-t pt-4">
            <NextLink
              href={destination.exploreHref}
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span>Explore Destination</span>
              <span aria-hidden="true">→</span>
            </NextLink>
            {primarySource ? (
              <a
                href={primarySource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
              >
                Official Tourism ↗
              </a>
            ) : null}
          </div>
          <p className="text-text-muted mt-2 text-[11px]">
            Last reviewed: {destination.lastReviewed}
          </p>
        </div>
      </div>
    </Card>
  );
}
