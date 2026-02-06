// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://gokalplastikcilik.com',
  output: 'server',
  trailingSlash: 'never',
  compressHTML: true,
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    preact(),
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR' },
      },
    }),
  ],
  build: {
    format: 'file',
  },
});
