import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { applyThemePreference, getThemePreference, type ThemePreference } from "@/lib/theme";

const cycleThemePreference: Record<ThemePreference, ThemePreference> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const themeLabels: Record<ThemePreference, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

const themeIcons = {
  system: SunMoonIcon,
  light: SunIcon,
  dark: MoonIcon,
};

export default function ThemeSwitcher() {
  const [preference, setPreference] = useState<ThemePreference>(() => getThemePreference());
  const [open, setOpen] = useState(false);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);

  useEffect(() => {
    applyThemePreference(preference);
  }, [preference]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (preference !== "system") {
      return;
    }

    const syncSystemTheme = () => {
      applyThemePreference("system");
    };

    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, [preference]);

  const nextPreference = cycleThemePreference[preference];
  const Icon = themeIcons[preference];

  const syncOpenState = () => {
    setOpen(hoverRef.current || focusRef.current);
  };

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="group inline-flex size-7 items-center justify-center rounded-md border border-transparent text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={`${themeLabels[preference]}. Click to switch to ${themeLabels[nextPreference]} mode.`}
            onPointerEnter={() => {
              hoverRef.current = true;
              syncOpenState();
            }}
            onPointerLeave={() => {
              hoverRef.current = false;
              syncOpenState();
            }}
            onFocus={() => {
              focusRef.current = true;
              syncOpenState();
            }}
            onBlur={() => {
              focusRef.current = false;
              syncOpenState();
            }}
            onClick={() => {
              setPreference(nextPreference);
              syncOpenState();
            }}
          >
            <Icon
              aria-hidden="true"
              className="size-5 transition-transform duration-200 group-hover:rotate-12 group-active:rotate-180"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>{themeLabels[preference]}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
