import NextLink from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface VisaSubnavProps {
  activeHref: string;
}

const VISA_NAV_ITEMS = [
  { label: "Visa Overview", href: "/visa-guide" },
  { label: "Schengen Short-Stay", href: "/visa-guide/schengen-visa" },
  { label: "Student Visa", href: "/visa-guide/student-visa" },
  { label: "National Long-Stay", href: "/visa-guide/national-visas" },
  { label: "Countries", href: "/visa-guide/countries" },
  { label: "Document Checklists", href: "/visa-guide/document-checklists" },
  { label: "Application Process", href: "/visa-guide/application-process" },
  { label: "FAQs", href: "/visa-guide/faqs" },
] as const;

export function VisaSubnav({ activeHref }: VisaSubnavProps) {
  return (
    <nav
      aria-label="European Visa Guide sections"
      className="border-border-subtle bg-surface-subtle border-b"
    >
      <Container>
        <ul className="-mb-px flex gap-2 overflow-x-auto py-3">
          {VISA_NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <NextLink
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "font-heading focus-visible:outline-brand-blue inline-flex items-center rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm",
                    isActive
                      ? "bg-brand-navy text-white"
                      : "text-text-secondary hover:text-brand-blue hover:bg-white"
                  )}
                >
                  {item.label}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
