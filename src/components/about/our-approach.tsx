import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

const APPROACH_PILLARS: readonly { title: string; detail: string }[] = [
  {
    title: "Present Information Clearly",
    detail:
      "We break down multi-step processes—from academic calendars to visa document categories—into structured, readable sections.",
  },
  {
    title: "Help Visitors Discover Relevant Opportunities",
    detail:
      "Searchable directories across Study, Travel, and Explore allow visitors to compare destinations, programmes, and themes efficiently.",
  },
  {
    title: "Direct Users Towards Authoritative Sources",
    detail:
      "Official national portals, ministries, universities, and tourism boards are cited so users always verify final rules at the source.",
  },
  {
    title: "Keep Information Organised & Encourage Informed Decisions",
    detail:
      "SchengeN Routes operates as an informational platform rather than an official government, legal, or university admissions authority.",
  },
] as const;

export function OurApproach() {
  return (
    <Section
      id="our-approach"
      background="subtle"
      spacing="lg"
      aria-labelledby="our-approach-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <Heading as="h2" id="our-approach-heading" className="mt-2">
            How We Organise &amp; Share Information
          </Heading>
          <Paragraph className="mt-3">
            Every section on SchengeN Routes is designed to keep information structured,
            transparent, and easy to cross-check against official authorities.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {APPROACH_PILLARS.map((pillar, index) => (
            <Card
              key={pillar.title}
              variant="default"
              padding="lg"
              className="flex h-full flex-col"
            >
              <p className="font-heading text-brand-blue text-xs font-semibold tracking-wider uppercase">
                0{index + 1} · Editorial Standard
              </p>
              <Heading as="h3" size="h4" className="mt-2">
                {pillar.title}
              </Heading>
              <Paragraph size="sm" className="mt-2.5">
                {pillar.detail}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
