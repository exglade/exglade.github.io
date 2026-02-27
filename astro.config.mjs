import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kaisheng.dev",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
