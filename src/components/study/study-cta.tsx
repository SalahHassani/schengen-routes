import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

const STUDY_GUIDANCE_STEPS = [
  {
    step: "01",
    title: "Choose a destination",
    description: "Compare European study countries and review official national education portals.",
  },
  {
    step: "02",
    title: "Explore universities and programmes",
    description:
      "Identify accredited institutions and relevant Bachelor's, Master's, or doctoral paths.",
  },
  {
    step: "03",
    title: "Review admission requirements",
    description: "Verify academic prerequisites, language certificates, and required documents.",
  },
  {
    step: "04",
    title: "Check deadlines and funding",
    description:
      "Separate opening dates, submission deadlines, intake dates, and scholarship rules.",
  },
  {
    step: "05",
    title: "Contact us for guidance",
    description:
      "Reach out to SchengeN Routes when you want structured assistance with your next steps.",
  },
] as const;

export function StudyCta() {
  return (
    <>
      <Section
        id="study-how-we-help"
        background="subtle"
        spacing="lg"
        aria-labelledby="study-steps-heading"
      >
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Step-by-Step Approach</Eyebrow>
            <Heading as="h2" id="study-steps-heading" className="mt-2">
              How We Help You Prepare
            </Heading>
            <Paragraph className="mt-3">
              Use SchengeN Routes to organise your European higher-education research in five clear
              steps.
            </Paragraph>
          </div>

          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STUDY_GUIDANCE_STEPS.map((item) => (
              <li key={item.step} className="flex">
                <Card variant="default" padding="md" className="flex h-full w-full flex-col">
                  <span className="font-heading text-brand-gold text-xs font-extrabold tracking-widest">
                    STEP {item.step}
                  </span>
                  <Heading as="h3" size="h4" className="mt-2.5 text-base">
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

      <Section
        id="study-consultation"
        background="navy"
        spacing="lg"
        aria-labelledby="study-cta-heading"
      >
        <Container>
          <div className="border-brand-gold/40 bg-brand-blue/20 rounded-card border p-8 sm:p-12">
            <div className="max-w-2xl">
              <Badge variant="accent">Study Guidance</Badge>
              <Heading as="h2" id="study-cta-heading" inverse className="mt-4">
                Planning to Study in Europe?
              </Heading>
              <Divider variant="gold" className="mt-4" />
              <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
                Explore your options and connect with SchengeN Routes for guidance with your next
                steps.
              </Paragraph>
              <div className="mt-7">
                <NextLink href="/contact">
                  <Button variant="secondary" size="lg">
                    Get Consultation
                  </Button>
                </NextLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
