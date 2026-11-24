import { SocialLinks } from "@/components/contact/social-links";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { BRAND } from "@/lib/constants";

export function ContactInformation() {
  return (
    <div className="space-y-6">
      <Card variant="default" padding="lg">
        <div className="flex items-center justify-between gap-2">
          <Eyebrow>Direct Channels</Eyebrow>
          <Badge variant="accent">Official</Badge>
        </div>

        <Heading as="h2" size="h3" className="mt-2">
          Official Contact Details
        </Heading>

        <Paragraph size="sm" className="mt-2">
          Reach {BRAND.name} directly via email or WhatsApp using the official channels below.
        </Paragraph>

        <dl className="mt-5 space-y-4 text-sm">
          <div className="border-border-subtle bg-surface-subtle rounded-lg border p-4">
            <dt className="font-heading text-text-muted text-xs font-semibold tracking-wider uppercase">
              Official Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${BRAND.email}`}
                className="font-heading text-brand-blue hover:text-brand-navy text-base font-semibold break-all underline underline-offset-4 transition-colors"
              >
                {BRAND.email}
              </a>
            </dd>
          </div>

          <div className="border-border-subtle bg-surface-subtle rounded-lg border p-4">
            <dt className="font-heading text-text-muted text-xs font-semibold tracking-wider uppercase">
              Official Business / WhatsApp
            </dt>
            <dd className="mt-1 flex flex-wrap items-center justify-between gap-2">
              <span className="font-heading text-text-primary text-base font-semibold">
                {BRAND.phoneDisplay}
              </span>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on WhatsApp at ${BRAND.phoneDisplay}`}
                className="font-heading text-brand-blue hover:text-brand-navy text-xs font-semibold underline underline-offset-4 transition-colors"
              >
                Message on WhatsApp ↗
              </a>
            </dd>
          </div>
        </dl>
      </Card>

      <Card variant="default" padding="lg">
        <Eyebrow>Community &amp; Social Media</Eyebrow>
        <Heading as="h3" size="h4" className="mt-2">
          Official Channels
        </Heading>
        <Paragraph size="sm" className="mt-2">
          Join the official WhatsApp Community or follow {BRAND.name} updates on social platforms.
        </Paragraph>
        <SocialLinks />
      </Card>
    </div>
  );
}
