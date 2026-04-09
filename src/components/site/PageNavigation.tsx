import { Fragment } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type PageNavigationProps = {
  navItems: NavItem[];
  activeItemKey: NavItem["key"];
};

type NavItem = {
  key: "portfolio" | "blog";
  href: string;
  label: string;
  visible: boolean;
};

export default function PageNavigation({ navItems, activeItemKey }: PageNavigationProps) {
  const visibleItems = navItems.filter((item) => item.visible);

  return (
    <NavigationMenu viewport={false} className="w-fit justify-start">
      <NavigationMenuList className="m-0 flex w-fit items-center justify-start p-0">
        {visibleItems.map((item, index) => {
          const isActive = item.key === activeItemKey;

          return (
            <Fragment key={item.href}>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "link-underline items-center p-0 leading-none tracking-[0.08em] uppercase text-inherit no-underline hover:bg-transparent hover:no-underline hover:after:scale-x-100 focus:bg-transparent visited:text-inherit",
                    isActive && "font-bold",
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
              {index < visibleItems.length - 1 ? (
                <Separator orientation="vertical" className="mx-3 self-center" />
              ) : null}
            </Fragment>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
