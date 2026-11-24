import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export function ExploreCta() {
  return (
    <Section id="explore-cta" background="navy" spacing="lg" aria-labelledby="explore-cta-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="inverse">Continue Your European Discovery</Eyebrow>
          <Heading as="h2" id="explore-cta-heading" inverse className="mt-2">
            Discover More of Europe Through SchengeN Routes
          </Heading>
          <Divider variant="gold" className="mx-auto mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
            Explore European heritage, plan practical journeys with our Travel section, or get in
            touch with our team for structured guidance.
          </Paragraph>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NextLink href="/travel">
              <Button variant="secondary" size="lg">
                Plan with Travel Guides
              </Button>
            </NextLink>
            <NextLink href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
              >
                Get Consultation
              </Button>
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
