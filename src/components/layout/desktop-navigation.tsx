"use client";

import { PRIMARY_NAVIGATION } from "@/config/navigation";
import { NavLink } from "@/components/navigation/nav-link";
import { NavigationDropdown } from "@/components/navigation/navigation-dropdown";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary desktop navigation" className="hidden items-center gap-1 lg:flex">
      <ul className="flex items-center gap-1 xl:gap-2">
        {PRIMARY_NAVIGATION.map((item) => (
          <li key={item.href}>
            {item.children && item.children.length > 0 ? (
              <NavigationDropdown item={item} />
            ) : (
              <NavLink href={item.href} exact={item.href === "/"}>
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
