import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { ExploreExperience } from "@/types/explore";

export interface ExploreExperienceCardProps {
  experience: ExploreExperience;
  linkToDetail?: boolean;
}

export function ExploreExperienceCard({
  experience,
  linkToDetail = true,
}: ExploreExperienceCardProps) {
  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="accent">{experience.country}</Badge>
          <span className="text-text-muted text-xs font-medium uppercase">
            {experience.category}
          </span>
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {experience.title}
        </Heading>

        <p className="text-text-secondary mt-1 text-xs font-medium">{experience.location}</p>

        <Paragraph size="sm" className="mt-2">
          {experience.description}
        </Paragraph>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="flex items-center justify-between gap-3 border-t pt-3.5">
            {linkToDetail ? (
              <NextLink
                href={`/explore/experiences/${experience.slug}`}
                className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
              >
                <span>Explore Experience</span>
                <span aria-hidden="true">→</span>
              </NextLink>
            ) : (
              <span className="text-text-muted">Reviewed {experience.lastReviewed}</span>
            )}
            <a
              href={experience.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
            >
              Source ↗
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
