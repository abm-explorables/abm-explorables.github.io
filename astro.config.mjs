// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project page — base path 必須 (spec.md Task 3)
  site: 'https://yuitokyouni.github.io',
  base: '/abm-explorables',
  integrations: [mdx()]
});