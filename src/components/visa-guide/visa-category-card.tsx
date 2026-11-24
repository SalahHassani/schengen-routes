import NextLink from "next/link";
import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import type { VisaCategoryRecord } from "@/types/visa-guide";

export interface VisaCategoryCardProps {
  category: VisaCategoryRecord;
}

export function VisaCategoryCard({ category }: VisaCategoryCardProps) {
  return (
    <Card variant="interactive" padding="lg" className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant="default">{category.shortLabel}</Badge>
        <Badge variant="neutral">
          {category.isStudentContext ? "Student" : "General / Long-Stay"}
        </Badge>
      </div>

      <Heading as="h3" size="h4" className="mt-3">
        {category.title}
      </Heading>

      <Paragraph size="sm" className="mt-2.5">
        {category.summary}
      </Paragraph>

      <div className="bg-surface-subtle text-text-secondary mt-4 rounded-md p-3 text-xs">
        <span className="font-heading text-text-primary font-semibold">Key Distinction: </span>
        {category.distinctionNote}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.typicalPurposes.map((purpose) => (
          <Badge key={purpose} variant="neutral">
            {purpose}
          </Badge>
        ))}
      </div>

      <div className="mt-4">
        <ReviewStatusIndicator
          status={category.reviewStatus}
          lastReviewed={category.lastReviewed}
        />
      </div>

      <div className="border-border-subtle mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs">
        <NextLink
          href={category.guideHref}
          className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 font-semibold"
        >
          <span>Read Guide</span>
          <span aria-hidden="true">→</span>
        </NextLink>
        <a
          href={category.officialSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-brand-navy font-medium underline underline-offset-4"
        >
          Official EU Source ↗
        </a>
      </div>
    </Card>
  );
}
