import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LocaleCode, LocaleLink } from "@/data/home";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: LocaleCode;
  localeLinks: LocaleLink[];
};

export default function LanguageSwitcher({ currentLocale, localeLinks }: LanguageSwitcherProps) {
  const currentLocaleLink =
    localeLinks.find((localeLink) => localeLink.code === currentLocale) ?? localeLinks[0];

  return (
    <nav aria-label="Language selector">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="group inline-flex h-7 items-center gap-1 rounded-md border border-transparent px-2 text-xs font-medium leading-none text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={`Current language: ${currentLocaleLink.label}. Change language.`}
          >
            <span className="relative inline-flex items-center font-bold after:absolute after:left-0 after:-bottom-[0.08em] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-220 after:content-[''] group-hover:after:scale-x-100 group-data-[state=open]:after:scale-x-100">
              {currentLocaleLink.label}
            </span>
            <ChevronDownIcon
              data-icon="inline-end"
              className="size-3 transition-transform group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {localeLinks.map((localeLink) => {
            const isActive = localeLink.code === currentLocale;

            return (
              <DropdownMenuItem key={localeLink.code} asChild>
                <a
                  href={localeLink.href}
                  lang={localeLink.lang}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "w-full text-inherit no-underline hover:no-underline focus:no-underline",
                    isActive && "font-bold",
                  )}
                >
                  {localeLink.label}
                </a>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
