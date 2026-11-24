import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { PRIMARY_NAVIGATION } from "@/config/navigation";
import { BRAND } from "@/lib/constants";

export default function HomePage() {
  const servicePillars = PRIMARY_NAVIGATION.filter((item) =>
    ["/study", "/visa-guide", "/travel", "/explore"].includes(item.href)
  );

  return (
    <>
      <Section background="navy" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="accent">Milestone 2 • Shared Layout & Navigation</Badge>
            <Eyebrow tone="inverse" className="mt-5">
              {BRAND.serviceLine}
            </Eyebrow>
            <Heading as="h1" size="display" inverse className="mt-3">
              {BRAND.name}
            </Heading>
            <Paragraph size="lg" tone="inverse" className="mt-2 font-semibold text-white">
              {BRAND.tagline}
            </Paragraph>
            <Divider variant="gold" className="mt-5" />
            <Paragraph tone="inverse" className="mt-6">
              Shared global header, responsive desktop and mobile navigation, footer, and route
              architecture are active. Full homepage sections will be implemented in Milestone 3.
            </Paragraph>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <NextLink href="/contact">
                <Button variant="secondary" size="lg">
                  Get Consultation
                </Button>
              </NextLink>
              <NextLink href="/study">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Explore Study Routes
                </Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="subtle" spacing="md">
        <Container>
          <Eyebrow>Platform Architecture</Eyebrow>
          <Heading as="h2" className="mt-2">
            Active Primary Routes
          </Heading>
          <Paragraph className="mt-2 max-w-2xl">
            Verify shared layout consistency, active navigation state, and responsive behaviour
            across all primary SchengeN Routes sections.
          </Paragraph>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicePillars.map((pillar) => (
              <Card key={pillar.href} variant="interactive" padding="md">
                <Badge variant="default">{pillar.label}</Badge>
                <Heading as="h3" size="h4" className="mt-3">
                  {pillar.label}
                </Heading>
                <Paragraph size="sm" className="mt-1.5">
                  {pillar.children?.length ?? 0} planned sub-categories configured for upcoming
                  milestones.
                </Paragraph>
                <div className="mt-4">
                  <NextLink
                    href={pillar.href}
                    className="font-heading text-brand-blue hover:text-brand-navy text-sm font-semibold"
                  >
                    Open {pillar.label} →
                  </NextLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
