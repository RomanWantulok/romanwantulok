// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://romanwantulok.com',

  vite: {
    plugins: [tailwindcss()]
  },

  // --- TUTO ČÁST PŘIDEJTE ---
  // --------------------------
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
    routing: {
        prefixDefaultLocale: false 
    }
  },

  // Důležité pro Supabase a dynamické cesty
  output: 'server',

  adapter: cloudflare(),
  integrations: [sitemap()]
});