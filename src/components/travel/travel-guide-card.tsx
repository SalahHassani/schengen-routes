import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { TravelGuideArticle } from "@/types/travel";

export interface TravelGuideCardProps {
  article: TravelGuideArticle;
  expanded?: boolean;
}

export function TravelGuideCard({ article, expanded = false }: TravelGuideCardProps) {
  const source = article.sources[0];

  return (
    <Card variant="default" padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="bg-surface-subtle relative aspect-video w-full overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="default">{article.category}</Badge>
          <span className="text-text-muted text-xs">Updated {article.lastUpdated}</span>
        </div>

        <Heading as="h3" size="h4" className="mt-3">
          {article.title}
        </Heading>

        <Paragraph size="sm" className="mt-2.5">
          {article.summary}
        </Paragraph>

        {expanded ? (
          <div className="border-border-subtle mt-4 space-y-3 border-t pt-4">
            {article.contentSections.map((section) => (
              <div key={section.heading}>
                <p className="font-heading text-text-primary text-xs font-semibold">
                  {section.heading}
                </p>
                <p className="text-text-secondary mt-1 text-xs leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {article.relatedDestinations.map((dest) => (
            <Badge key={dest} variant="neutral">
              {dest}
            </Badge>
          ))}
        </div>

        <div className="border-border-subtle mt-auto pt-4 text-xs">
          <div className="text-text-muted flex flex-wrap items-center justify-between gap-2 border-t pt-3">
            <span>{article.authorOrTeam}</span>
            {source ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
              >
                {source.authority} ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
