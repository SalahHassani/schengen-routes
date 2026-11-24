import NextLink from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface TravelSubnavProps {
  activeHref: string;
}

const TRAVEL_NAV_ITEMS = [
  { label: "Travel Overview", href: "/travel" },
  { label: "Destinations", href: "/travel/destinations" },
  { label: "Countries", href: "/travel/countries" },
  { label: "Cities", href: "/travel/cities" },
  { label: "Travel Guides", href: "/travel/guides" },
  { label: "Itineraries", href: "/travel/itineraries" },
  { label: "Transportation", href: "/travel/transportation" },
  { label: "Accommodation", href: "/travel/accommodation" },
] as const;

export function TravelSubnav({ activeHref }: TravelSubnavProps) {
  return (
    <nav
      aria-label="European Travel sections"
      className="border-border-subtle bg-surface-subtle border-b"
    >
      <Container>
        <ul className="-mb-px flex gap-2 overflow-x-auto py-3">
          {TRAVEL_NAV_ITEMS.map((item) => {
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
