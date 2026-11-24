import type { StudyUniversityRecord } from "@/types/study";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export interface UniversityCardProps {
  university: StudyUniversityRecord;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card variant="default" padding="lg" className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant="default">{university.institutionType}</Badge>
        <span className="text-text-muted text-xs font-medium">
          {university.city}, {university.country}
        </span>
      </div>

      <Heading as="h3" size="h4" className="mt-3">
        {university.name}
      </Heading>

      <Paragraph size="sm" className="mt-2.5">
        {university.summary}
      </Paragraph>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {university.availableDegreeLevels.map((level) => (
          <Badge key={level} variant="neutral">
            {level}
          </Badge>
        ))}
      </div>

      <Paragraph size="sm" className="mt-4 text-xs">
        <span className="font-heading text-text-primary font-semibold">
          {university.applicationCycle}:{" "}
        </span>
        {university.applicationNotes}
      </Paragraph>

      <div className="border-border-subtle mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={university.officialAdmissionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-brand-blue decoration-brand-blue/40 hover:text-brand-navy font-semibold underline underline-offset-4"
          >
            Official Admissions ↗
          </a>
          <a
            href={university.officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-text-secondary decoration-border-strong hover:text-brand-navy font-semibold underline underline-offset-4"
          >
            University Website ↗
          </a>
        </div>
        <span className="text-text-muted text-[11px]">Reviewed {university.lastReviewed}</span>
      </div>
    </Card>
  );
}
