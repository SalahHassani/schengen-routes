import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { PLATFORM_UPDATES_PREVIEW } from "@/data/services";

export function LatestUpdates() {
  return (
    <Section id="latest-updates" background="subtle" spacing="lg" aria-labelledby="updates-heading">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Platform Feed</Eyebrow>
            <Heading as="h2" id="updates-heading" className="mt-2">
              Latest Updates &amp; Opportunities
            </Heading>
            <Paragraph className="mt-3">
              Structured categories covering university admissions, scholarships, application
              deadlines, visa information, and European travel guides.
            </Paragraph>
          </div>
          <Badge variant="neutral">Editorial Preview Items</Badge>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PLATFORM_UPDATES_PREVIEW.map((item) => (
            <Card key={item.id} variant="default" padding="lg" className="flex h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="default">{item.category}</Badge>
                <Badge variant="neutral">{item.statusLabel}</Badge>
              </div>

              <Heading as="h3" size="h4" className="mt-4">
                {item.title}
              </Heading>

              <Paragraph size="sm" className="mt-2.5 flex-1">
                {item.summary}
              </Paragraph>

              <div className="border-border-subtle mt-5 border-t pt-4">
                <NextLink
                  href={item.href}
                  className="font-heading text-brand-blue hover:text-brand-navy inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                >
                  <span>Explore Section</span>
                  <span aria-hidden="true">→</span>
                </NextLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
