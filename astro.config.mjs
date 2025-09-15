// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

// https://astro.build/config
export default defineConfig({
  devToolbar:{
      enabled: false
  },

  vite: {
    plugins: [tailwindcss(), animate(), typography()]
  }
});