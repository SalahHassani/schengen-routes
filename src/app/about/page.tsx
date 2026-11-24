import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — connecting students, applicants, and travellers with reliable European education, visa, travel, and discovery resources.`,
};

export default function AboutPage() {
  return (
    <Section background="white" spacing="lg">
      <Container size="narrow">
        <Badge variant="neutral">Milestone 8 • Section Placeholder</Badge>
        <Eyebrow className="mt-4">{BRAND.tagline}</Eyebrow>
        <Heading as="h1" className="mt-2">
          About {BRAND.name}
        </Heading>
        <Divider variant="gold" className="mt-4" />
        <Paragraph size="lg" className="mt-6">
          {BRAND.name} connects students, applicants, and travellers with structured European
          education opportunities, transparent visa information, and curated travel guidance.
        </Paragraph>
      </Container>
    </Section>
  );
}
