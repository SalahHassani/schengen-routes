import NextLink from "next/link";
import { Fragment } from "react";

export interface ExploreBreadcrumbItem {
  label: string;
  href?: string;
}

export interface ExploreBreadcrumbsProps {
  items: readonly ExploreBreadcrumbItem[];
  inverse?: boolean;
}

export function ExploreBreadcrumbs({ items, inverse = false }: ExploreBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs ${
          inverse ? "text-slate-300" : "text-text-secondary"
        }`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <Fragment key={`${item.label}-${idx}`}>
              {idx > 0 ? (
                <li aria-hidden="true" className={inverse ? "text-slate-400" : "text-text-muted"}>
                  /
                </li>
              ) : null}
              <li>
                {item.href && !isLast ? (
                  <NextLink
                    href={item.href}
                    className={`underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      inverse
                        ? "text-slate-200 hover:text-white focus-visible:outline-white"
                        : "text-brand-blue hover:text-brand-navy focus-visible:outline-brand-blue"
                    }`}
                  >
                    {item.label}
                  </NextLink>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? inverse
                          ? "font-semibold text-white"
                          : "text-text-primary font-semibold"
                        : undefined
                    }
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
