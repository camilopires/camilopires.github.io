import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: 'docs',
  site: 'https://camilopires.github.io',
  base: '/camilo-astro-site'
});