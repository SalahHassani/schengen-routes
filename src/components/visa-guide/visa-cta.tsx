import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export function VisaCta() {
  return (
    <Section
      id="visa-consultation"
      background="navy"
      spacing="lg"
      aria-labelledby="visa-cta-heading"
    >
      <Container>
        <div className="border-brand-gold/40 bg-brand-blue/20 rounded-card border p-8 sm:p-12">
          <div className="max-w-2xl">
            <Badge variant="accent">Guidance &amp; Preparation</Badge>
            <Heading as="h2" id="visa-cta-heading" inverse className="mt-4">
              Need Help Understanding Your Visa Options?
            </Heading>
            <Divider variant="gold" className="mt-4" />
            <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
              Explore the relevant guidance and contact SchengeN Routes if you need assistance
              understanding your next steps.
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
  );
}
