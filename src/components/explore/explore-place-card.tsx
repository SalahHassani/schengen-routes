import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { ExplorePlace } from "@/types/explore";

export interface ExplorePlaceCardProps {
  place: ExplorePlace;
}

export function ExplorePlaceCard({ place }: ExplorePlaceCardProps) {
  const detailHref =
    place.category === "landmarks"
      ? `/explore/landmarks/${place.slug}`
      : `/explore/${place.category}`;

  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="default">
            {place.city ? `${place.city}, ${place.country}` : place.country}
          </Badge>
          <span className="text-text-muted text-xs font-medium uppercase">{place.category}</span>
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {place.name}
        </Heading>

        <Paragraph size="sm" className="mt-2">
          {place.description}
        </Paragraph>

        <p className="text-text-secondary mt-3 text-xs">
          <span className="font-heading text-text-primary font-semibold">Significance: </span>
          {place.significance}
        </p>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="flex items-center justify-between gap-3 border-t pt-3.5">
            <NextLink
              href={detailHref}
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span>{place.category === "landmarks" ? "Read Landmark Note" : "View Category"}</span>
              <span aria-hidden="true">→</span>
            </NextLink>
            <a
              href={place.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
            >
              Source ↗
            </a>
          </div>
          <p className="text-text-muted mt-2 text-[11px]">Last reviewed: {place.lastReviewed}</p>
        </div>
      </div>
    </Card>
  );
}
