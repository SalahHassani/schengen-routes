import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { formatIsoDateForDisplay } from "@/lib/study/deadline-status";
import type { StudyScholarshipRecord } from "@/types/study";

export interface ScholarshipDirectoryProps {
  scholarships: readonly StudyScholarshipRecord[];
  background?: "white" | "subtle";
}

export function ScholarshipDirectory({
  scholarships,
  background = "subtle",
}: ScholarshipDirectoryProps) {
  return (
    <Section
      id="scholarships"
      background={background}
      spacing="lg"
      aria-labelledby="study-scholarships-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Funding Discovery</Eyebrow>
          <Heading as="h2" id="study-scholarships-heading" className="mt-2">
            Scholarships &amp; Funding Opportunities
          </Heading>
          <Paragraph className="mt-3">
            Explore verified funding categories, eligibility rules, funding types, application
            windows, and direct links to official scholarship providers.
          </Paragraph>
        </div>

        {scholarships.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {scholarships.map((item) => (
              <Card key={item.slug} variant="default" padding="lg" className="flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="accent">{item.fundingType}</Badge>
                  <span className="text-text-muted text-xs font-medium">{item.country}</span>
                </div>
                <Heading as="h3" size="h4" className="mt-3">
                  {item.name}
                </Heading>
                <Paragraph size="sm" className="text-text-primary mt-1 font-medium">
                  Provider: {item.provider}
                </Paragraph>
                {item.coverageSummary ? (
                  <Paragraph size="sm" className="mt-2.5">
                    {item.coverageSummary}
                  </Paragraph>
                ) : null}
                <div className="text-text-secondary mt-4 space-y-1 text-xs">
                  <p>
                    <strong>Opens:</strong> {formatIsoDateForDisplay(item.applicationOpeningDate)}
                  </p>
                  <p>
                    <strong>Deadline:</strong> {formatIsoDateForDisplay(item.applicationDeadline)}
                  </p>
                </div>
                <div className="border-border-subtle mt-auto flex items-center justify-between border-t pt-4 text-xs">
                  <a
                    href={item.officialApplicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                  >
                    Official Scholarship Portal ↗
                  </a>
                  <span className="text-text-muted">Reviewed {item.lastReviewed}</span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card variant="default" padding="lg" className="mt-8">
            <div className="max-w-2xl">
              <Badge variant="neutral">Awaiting Verified Provider Listings</Badge>
              <Heading as="h3" size="h4" className="mt-3">
                Verified Scholarship Listings Will Appear Here
              </Heading>
              <Paragraph size="sm" className="mt-2">
                We only publish scholarship opportunities once eligibility criteria, funding
                coverage, application dates, and official provider links are confirmed. In the
                meantime, you can review official national higher-education portals on our Countries
                page.
              </Paragraph>
              <div className="mt-5 flex flex-wrap gap-3">
                <NextLink href="/study/countries">
                  <Button variant="primary" size="sm">
                    View Official Country Portals
                  </Button>
                </NextLink>
                <NextLink href="/contact">
                  <Button variant="outline" size="sm">
                    Ask About Study Guidance
                  </Button>
                </NextLink>
              </div>
            </div>
          </Card>
        )}
      </Container>
    </Section>
  );
}
