import NextLink from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface StudySubnavProps {
  activeHref: string;
}

const STUDY_NAV_ITEMS = [
  { label: "Study Overview", href: "/study" },
  { label: "Countries", href: "/study/countries" },
  { label: "Universities", href: "/study/universities" },
  { label: "Programmes", href: "/study/programmes" },
  { label: "Scholarships", href: "/study/scholarships" },
  { label: "Application Deadlines", href: "/study/application-deadlines" },
] as const;

export function StudySubnav({ activeHref }: StudySubnavProps) {
  return (
    <nav
      aria-label="Study in Europe sections"
      className="border-border-subtle bg-surface-subtle border-b"
    >
      <Container>
        <ul className="-mb-px flex gap-2 overflow-x-auto py-3">
          {STUDY_NAV_ITEMS.map((item) => {
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
