// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
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

  output: 'server', // Důležité pro Supabase a dynamické cesty
  adapter: cloudflare()
  
});