import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

interface ValueItem {
  title: string;
  description: string;
}

const CORE_VALUES: readonly ValueItem[] = [
  {
    title: "Clarity",
    description:
      "Presenting complex topics—such as study pathways, visa categories, and travel routes—in plain, structured language.",
  },
  {
    title: "Transparency",
    description:
      "Being upfront about what our guides cover, distinguishing informational guidance from official decisions, and citing sources.",
  },
  {
    title: "Accessibility",
    description:
      "Organising key information cleanly so prospective students, travellers, and explorers can find what they need without friction.",
  },
  {
    title: "Reliability",
    description:
      "Relying on verifiable information, review dates, and official institutions rather than guesswork or unsubstantiated claims.",
  },
  {
    title: "Cultural Discovery",
    description:
      "Encouraging thoughtful appreciation of Europe's diverse cities, traditions, history, and everyday life.",
  },
  {
    title: "Continuous Learning",
    description:
      "Refining and expanding our guides as regulations, academic offerings, and editorial topics evolve.",
  },
] as const;

export function CoreValues() {
  return (
    <Section id="our-values" background="subtle" spacing="lg" aria-labelledby="our-values-heading">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Our Values</Eyebrow>
          <Heading as="h2" id="our-values-heading" className="mt-2">
            Principles Behind {`SchengeN Routes`}
          </Heading>
          <Paragraph className="mt-3">
            Six core values guide how we structure content, present options, and support visitors.
          </Paragraph>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((item) => (
            <Card key={item.title} variant="default" padding="lg" className="flex h-full flex-col">
              <div>
                <Badge variant="default">Core Value</Badge>
              </div>
              <Heading as="h3" size="h4" className="mt-3">
                {item.title}
              </Heading>
              <Paragraph size="sm" className="mt-2">
                {item.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
