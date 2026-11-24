import Image from "next/image";
import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { ExploreStory } from "@/types/explore";

export interface ExploreStoryCardProps {
  story: ExploreStory;
}

export function ExploreStoryCard({ story }: ExploreStoryCardProps) {
  const locationLabel = story.city
    ? `${story.city}, ${story.country ?? "Europe"}`
    : (story.country ?? "Europe");

  return (
    <Card variant="interactive" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-video w-full overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.coverImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="default">{locationLabel}</Badge>
          {story.readingTime ? (
            <span className="text-text-muted text-xs">{story.readingTime}</span>
          ) : null}
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {story.title}
        </Heading>

        <Paragraph size="sm" className="mt-2">
          {story.excerpt}
        </Paragraph>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="flex items-center justify-between gap-3 border-t pt-3.5">
            <NextLink
              href={`/explore/stories/${story.slug}`}
              className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span>Read Story</span>
              <span aria-hidden="true">→</span>
            </NextLink>
            <span className="text-text-muted text-[11px]">Updated {story.updatedAt}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
