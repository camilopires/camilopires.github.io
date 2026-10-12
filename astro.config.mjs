import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  output: 'static',
  outDir: 'docs',
  site: 'https://camilopires.co.uk',
  base: '/',
  build: {
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.DEV_MAINTENANCE': JSON.stringify(process.env.DEV_MAINTENANCE)
    },
    build: {
      // Optimize CSS
      cssMinify: true,
      // Optimize assets
      assetsInlineLimit: 4096, // Inline small assets
      rollupOptions: {
        output: {
          // Optimize chunk splitting
          manualChunks: undefined
        }
      }
    }
  }
});