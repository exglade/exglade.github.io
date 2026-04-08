import { Fragment } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

type PageNavigationProps = {
  currentPath: string;
};

type NavItem = {
  href: string;
  label: string;
  visible: boolean;
};

const navItems: NavItem[] = [
  { label: "Portfolio", href: "/", visible: true },
  { label: "Blog", href: "/blog", visible: false },
];

function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function PageNavigation({ currentPath }: PageNavigationProps) {
  const visibleItems = navItems.filter((item) => item.visible);

  return (
    <NavigationMenu viewport={false} className="w-fit justify-start">
      <NavigationMenuList className="m-0 flex w-fit items-center justify-start p-0">
        {visibleItems.map((item, index) => {
          const isActive = isActivePath(currentPath, item.href);

          return (
            <Fragment key={item.href}>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative inline-flex items-center p-0 leading-none tracking-[0.08em] uppercase text-inherit no-underline after:absolute after:left-0 after:-bottom-[0.08em] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-220 after:content-[''] hover:bg-transparent hover:no-underline hover:after:scale-x-100 focus:bg-transparent visited:text-inherit",
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
