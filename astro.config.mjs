// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://jenixindustrial.huseinhk.my.id";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
  ],
});
