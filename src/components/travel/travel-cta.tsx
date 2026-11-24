import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export function TravelCta() {
  return (
    <Section id="travel-cta" background="navy" spacing="lg" aria-labelledby="travel-cta-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="inverse">Plan With Clarity</Eyebrow>
          <Heading as="h2" id="travel-cta-heading" inverse className="mt-2">
            Ready for Your Next European Journey?
          </Heading>
          <Divider variant="gold" className="mx-auto mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
            Discover new destinations, explore useful travel guides and start planning your next
            European experience.
          </Paragraph>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NextLink href="/travel/destinations">
              <Button variant="secondary" size="lg">
                Explore Destinations
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
