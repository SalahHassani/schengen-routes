import NextLink from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { BRAND, CONTACT } from "@/lib/constants";

export function ConsultationCta() {
  return (
    <Section id="consultation-cta" background="navy" spacing="lg" aria-labelledby="cta-heading">
      <Container>
        <div className="border-brand-gold/40 bg-brand-blue/20 rounded-card border p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <Badge variant="accent">{BRAND.serviceLine}</Badge>
            <Heading as="h2" id="cta-heading" inverse className="mt-4">
              Ready to Explore Your European Opportunities?
            </Heading>
            <Divider variant="gold" className="mt-5" />
            <Paragraph size="lg" tone="inverse" className="mt-6 text-slate-200">
              Whether you are planning to study, looking for visa information or preparing your next
              European journey, {BRAND.name} is here to help you take the next step.
            </Paragraph>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <NextLink href="/contact">
                <Button variant="secondary" size="lg">
                  Get Consultation
                </Button>
              </NextLink>

              <a href={CONTACT.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-brand-gold border-white/35 bg-transparent text-white hover:bg-white/10"
                >
                  <span>Join Our Community</span>
                  <span aria-hidden="true">↗</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
