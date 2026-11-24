import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import type { ApplicationProcessStep } from "@/types/visa-guide";

export interface ApplicationStepsProps {
  steps: readonly ApplicationProcessStep[];
  background?: "white" | "subtle";
}

export function ApplicationSteps({ steps, background = "subtle" }: ApplicationStepsProps) {
  return (
    <Section
      id="application-process"
      background={background}
      spacing="lg"
      aria-labelledby="application-process-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Step-by-Step Procedure</Eyebrow>
          <Heading as="h2" id="application-process-heading" className="mt-2">
            General European Visa Application Stages
          </Heading>
          <Paragraph className="mt-3">
            While specific submission portals, pre-consular steps, and appointment rules differ by
            country and visa type, most applications follow nine structured stages.
          </Paragraph>
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.id} className="flex">
              <Card variant="default" padding="md" className="flex h-full w-full flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-brand-gold text-xs font-extrabold tracking-widest">
                    STAGE {String(step.stepNumber).padStart(2, "0")}
                  </span>
                  <Badge variant="neutral">{step.country}</Badge>
                </div>

                <Heading as="h3" size="h4" className="mt-2.5 text-base">
                  {step.stepTitle}
                </Heading>

                <Paragraph size="sm" className="mt-2">
                  {step.explanation}
                </Paragraph>

                <div className="bg-surface-subtle text-text-secondary mt-3 rounded-md p-2.5 text-xs">
                  <span className="font-heading text-text-primary font-semibold">Key Action: </span>
                  {step.requiredAction}
                </div>

                <div className="mt-4">
                  <ReviewStatusIndicator
                    status={step.reviewStatus}
                    lastReviewed={step.lastReviewed}
                  />
                </div>

                <div className="border-border-subtle mt-auto border-t pt-3 text-xs">
                  <a
                    href={step.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                  >
                    {step.sourceAuthority} ↗
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
