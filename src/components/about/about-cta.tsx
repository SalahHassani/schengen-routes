import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { BRAND } from "@/lib/constants";

export function AboutCTA() {
  return (
    <Section id="about-cta" background="navy" spacing="lg" aria-labelledby="about-cta-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="inverse">{BRAND.name}</Eyebrow>
          <Heading as="h2" id="about-cta-heading" inverse className="mt-2">
            Your European Journey Starts Here
          </Heading>
          <Divider variant="gold" className="mx-auto mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
            Explore study options, discover European culture and landmarks, or reach out to our team
            with your questions.
          </Paragraph>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NextLink href="/study">
              <Button variant="secondary" size="lg">
                Explore Study
              </Button>
            </NextLink>
            <NextLink href="/explore">
              <Button
                variant="outline"
                size="lg"
                className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
              >
                Explore Europe
              </Button>
            </NextLink>
            <NextLink href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
