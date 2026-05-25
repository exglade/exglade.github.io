import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kaisheng.dev",
  output: "static",
  integrations: [
    react(),
    sitemap({
      customPages: ["https://kaisheng.dev/rss.xml"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
