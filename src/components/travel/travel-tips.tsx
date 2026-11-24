import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { PracticalTravelTip } from "@/types/travel";

export interface TravelTipsProps {
  tips: readonly PracticalTravelTip[];
  background?: "white" | "subtle";
}

export function TravelTips({ tips, background = "subtle" }: TravelTipsProps) {
  return (
    <Section
      id="travel-practical-tips"
      background={background}
      spacing="lg"
      aria-labelledby="travel-tips-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Practical Information</Eyebrow>
          <Heading as="h2" id="travel-tips-heading" className="mt-2">
            Travel Tips &amp; Essential Preparation
          </Heading>
          <Paragraph className="mt-3">
            Core practical considerations for currency, language, connectivity, insurance, safety,
            cultural etiquette, emergency numbers, and accessibility in Europe.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <Card key={tip.id} variant="default" padding="md" className="flex h-full flex-col">
              <Heading as="h3" size="h4" className="text-base">
                {tip.topic}
              </Heading>
              <p className="text-brand-blue mt-1.5 text-xs font-semibold">{tip.summary}</p>
              <Paragraph size="sm" className="mt-2">
                {tip.guidance}
              </Paragraph>
              <div className="border-border-subtle text-text-muted mt-auto pt-3 text-[11px]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-2.5">
                  <span>Reviewed: {tip.lastReviewed}</span>
                  {tip.source ? (
                    <a
                      href={tip.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                    >
                      {tip.source.authority} ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
