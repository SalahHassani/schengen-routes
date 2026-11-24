import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { TransportModeGuide } from "@/types/travel";

export interface TransportationSectionProps {
  modes: readonly TransportModeGuide[];
  background?: "white" | "subtle";
}

export function TransportationSection({
  modes,
  background = "subtle",
}: TransportationSectionProps) {
  return (
    <Section
      id="travel-transportation"
      background={background}
      spacing="lg"
      aria-labelledby="travel-transportation-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Getting Around Europe</Eyebrow>
          <Heading as="h2" id="travel-transportation-heading" className="mt-2">
            European Transportation Modes
          </Heading>
          <Paragraph className="mt-3">
            Compare the practical strengths and planning considerations of Europe&apos;s primary
            transport modes. Always confirm live schedules, fares, and seat-reservation rules
            directly with official operators.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode) => (
            <Card key={mode.id} variant="default" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-2">
                <Heading as="h3" size="h4">
                  {mode.name}
                </Heading>
                <Badge variant="neutral">Mode Guide</Badge>
              </div>

              <Paragraph size="sm" className="mt-2.5">
                {mode.summary}
              </Paragraph>

              <div className="text-text-secondary mt-4 space-y-3 text-xs">
                <div>
                  <p className="font-heading text-text-primary font-semibold">Key Advantages</p>
                  <ul className="mt-1 list-disc space-y-1 pl-4">
                    {mode.advantages.map((adv) => (
                      <li key={adv}>{adv}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-heading text-text-primary font-semibold">
                    Planning Considerations
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4">
                    {mode.considerations.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-border-subtle mt-auto pt-4 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-3">
                  <span className="text-text-muted text-[11px]">Reviewed {mode.lastReviewed}</span>
                  <div className="flex flex-wrap gap-2">
                    {mode.officialOperatorExamples.map((op) => (
                      <a
                        key={op.url}
                        href={op.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                      >
                        {op.authority} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
