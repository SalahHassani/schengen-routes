import NextLink from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { ExploreCategory } from "@/types/explore";

export interface ExploreCategoryNavigationProps {
  categories: readonly ExploreCategory[];
  activeHref: string;
}

export function ExploreCategoryNavigation({
  categories,
  activeHref,
}: ExploreCategoryNavigationProps) {
  return (
    <nav
      aria-label="Explore Europe categories"
      className="border-border-subtle bg-surface-subtle border-b"
    >
      <Container>
        <ul className="-mb-px flex gap-2 overflow-x-auto py-3">
          <li className="shrink-0">
            <NextLink
              href="/explore"
              aria-current={activeHref === "/explore" ? "page" : undefined}
              className={cn(
                "font-heading focus-visible:outline-brand-blue inline-flex items-center rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm",
                activeHref === "/explore"
                  ? "bg-brand-navy text-white"
                  : "text-text-secondary hover:text-brand-blue hover:bg-white"
              )}
            >
              Explore All
            </NextLink>
          </li>
          {categories.map((category) => {
            const isActive = activeHref === category.href;
            return (
              <li key={category.id} className="shrink-0">
                <NextLink
                  href={category.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "font-heading focus-visible:outline-brand-blue inline-flex items-center rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm",
                    isActive
                      ? "bg-brand-navy text-white"
                      : "text-text-secondary hover:text-brand-blue hover:bg-white"
                  )}
                >
                  {category.title}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
