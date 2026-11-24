import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="bg-brand-navy py-14 text-white sm:py-18"
    >
      <Container>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{BRAND.serviceLine}</Badge>
            <Eyebrow tone="inverse">Contact {BRAND.name}</Eyebrow>
          </div>

          <Heading as="h1" id="contact-hero-heading" size="h1" inverse className="mt-4">
            Let&apos;s Talk About Your European Journey
          </Heading>

          <Divider variant="gold" className="mt-4" />

          <Paragraph size="lg" tone="inverse" className="mt-5 text-slate-200">
            Have a question about studying, travelling or exploring Europe? Get in touch with{" "}
            {BRAND.name}.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
}
