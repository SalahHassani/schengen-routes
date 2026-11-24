import NextLink from "next/link";
import { CopyrightYear } from "@/components/layout/copyright-year";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_CONTACT_INFO,
  FOOTER_EXPLORE_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/config/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { BRAND } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-brand-blue/30 bg-brand-navy border-t text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-4">
            <NextLink
              href="/"
              aria-label={`${BRAND.name} — ${BRAND.tagline}`}
              className="focus-visible:outline-brand-gold inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <BrandLogo size="md" surface="dark" />
            </NextLink>

            <div>
              <p className="font-heading text-base font-bold text-white">{BRAND.name}</p>
              <p className="text-brand-gold text-sm font-semibold">{BRAND.tagline}</p>
              <p className="mt-1 text-xs font-medium tracking-wider text-slate-300 uppercase">
                {BRAND.serviceLine}
              </p>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Structured European education guidance, reliable Schengen visa information, curated
              travel insights, and cultural discovery across Europe.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-brand-gold text-xs font-bold tracking-widest uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="focus-visible:outline-brand-gold text-sm text-slate-200 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-brand-gold text-xs font-bold tracking-widest uppercase">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <NextLink
                    href={link.href}
                    className="focus-visible:outline-brand-gold text-sm text-slate-200 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4 lg:col-span-4">
            <h2 className="font-heading text-brand-gold text-xs font-bold tracking-widest uppercase">
              Contact & Community
            </h2>

            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <span className="block text-xs text-slate-400">Official Email</span>
                <a
                  href={FOOTER_CONTACT_INFO.emailHref}
                  className="hover:text-brand-gold font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors"
                >
                  {FOOTER_CONTACT_INFO.email}
                </a>
              </li>

              <li>
                <span className="block text-xs text-slate-400">Direct Business WhatsApp</span>
                <a
                  href={FOOTER_CONTACT_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors"
                >
                  {FOOTER_CONTACT_INFO.whatsappDisplay}
                </a>
              </li>

              <li>
                <span className="block text-xs text-slate-400">Student & Traveller Network</span>
                <a
                  href={FOOTER_CONTACT_INFO.whatsappCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold decoration-brand-gold/40 inline-flex items-center gap-1.5 font-medium underline underline-offset-4 transition-colors hover:text-white"
                >
                  <span>Join Official WhatsApp Community</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>

            <div className="pt-1">
              <span className="block text-xs text-slate-400">Social Channels</span>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {FOOTER_SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${BRAND.name} on ${social.label} (${social.handle})`}
                    className="border-brand-blue/50 hover:border-brand-gold hover:text-brand-gold inline-flex items-center rounded-md border bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors duration-150"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-300 sm:flex-row">
          <p>
            © <CopyrightYear /> {BRAND.name}. All rights reserved.
          </p>
          <p className="text-slate-400">
            {BRAND.tagline} • {BRAND.serviceLine}
          </p>
        </Container>
      </div>
    </footer>
  );
}
