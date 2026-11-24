import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { HOW_WE_HELP_STEPS } from "@/data/services";

export function HowItWorks() {
  return (
    <Section id="how-we-help" background="white" spacing="lg" aria-labelledby="how-heading">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Simple 4-Step Process</Eyebrow>
          <Heading as="h2" id="how-heading" className="mt-2">
            How We Help
          </Heading>
          <Paragraph className="mt-3">
            A straightforward approach designed to move you from initial research to an organised
            plan.
          </Paragraph>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_HELP_STEPS.map((item) => (
            <li key={item.step} className="flex">
              <Card variant="default" padding="lg" className="flex h-full w-full flex-col">
                <div>
                  <Badge variant="accent">{item.step}</Badge>
                </div>
                <Heading as="h3" size="h4" className="mt-4">
                  {item.title}
                </Heading>
                <Paragraph size="sm" className="mt-2 flex-1">
                  {item.description}
                </Paragraph>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
