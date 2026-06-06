// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // org ページ (abm-explorables.github.io) = root 配信なので base は '/'。
  // 内部リンク・アセット・OG は import.meta.env.BASE_URL 経由なので追従する。
  site: 'https://abm-explorables.github.io',
  base: '/',
  integrations: [mdx()]
});