import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://syedjamal030.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});