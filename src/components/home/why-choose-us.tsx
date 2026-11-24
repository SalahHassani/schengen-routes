import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { WHY_SCHENGEN_ROUTES } from "@/data/services";
import { BRAND } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <Section id="why-schengen-routes" background="white" spacing="lg" aria-labelledby="why-heading">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Platform Principles</Eyebrow>
          <Heading as="h2" id="why-heading" className="mt-2">
            Why {BRAND.name}
          </Heading>
          <Paragraph className="mt-3">
            Built to bring clarity, structure, and practical orientation to every stage of your
            European study, visa, or travel research.
          </Paragraph>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_SCHENGEN_ROUTES.map((principle) => (
            <Card
              key={principle.number}
              variant="default"
              padding="lg"
              className="flex h-full flex-col"
            >
              <span className="font-heading text-brand-gold text-sm font-extrabold tracking-widest">
                {principle.number}
              </span>
              <Heading as="h3" size="h4" className="mt-3">
                {principle.title}
              </Heading>
              <Paragraph size="sm" className="mt-2.5 flex-1">
                {principle.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
