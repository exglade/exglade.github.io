export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function getSystemResolvedTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemResolvedTheme() : preference;
}

export function getThemePreference(): ThemePreference {
  if (
    typeof document !== "undefined" &&
    isThemePreference(document.documentElement.dataset.theme ?? null)
  ) {
    return document.documentElement.dataset.theme as ThemePreference;
  }

  if (typeof window !== "undefined") {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemePreference(storedPreference)) {
      return storedPreference;
    }
  }

  return "system";
}

export function applyThemePreference(preference: ThemePreference): ResolvedTheme {
  const resolvedTheme = resolveTheme(preference);
  const root = document.documentElement;

  root.dataset.theme = preference;
  root.classList.toggle("dark", resolvedTheme === "dark");
  window.localStorage.setItem(THEME_STORAGE_KEY, preference);

  return resolvedTheme;
}

export function getResolvedThemeFromDocument(): ResolvedTheme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
