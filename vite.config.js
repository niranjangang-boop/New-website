import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemap from 'vite-plugin-sitemap';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { PROCEDURE_ROUTES } from './src/data/procedures.js';

// Article routes derived from JSON files at build time (avoids importing
// articles.js which uses import.meta.glob — a Vite-only API not available here).
const ARTICLE_ROUTES = readdirSync(resolve('./src/content/articles'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => `/education/${f.replace('.json', '')}`);

// Every public route on the site. Keep in sync with src/App.jsx.
const routes = [
  '/',
  '/about',
  '/book',
  '/sitemap',
  '/education',
  ...ARTICLE_ROUTES,
  '/specialties/joint-replacement',
  '/specialties/foot-ankle',
  '/specialties/sports-arthroscopy',
  '/specialties/trauma-fracture',
  ...PROCEDURE_ROUTES,
];

export default defineConfig({
  plugins: [
    react(),

    // Generates sitemap.xml + robots.txt into dist/ on every build
    sitemap({
      hostname: 'https://www.drniranjanghag.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8,
      generateRobotsTxt: true,
      robots: [{ userAgent: '*', allow: '/' }],
    }),

    // Surgical image compression at build time (jpg/png/webp/avif/svg)
    ViteImageOptimizer({
      includePublic: true,
      jpg: { quality: 78, mozjpeg: true },
      jpeg: { quality: 78, mozjpeg: true },
      png: { quality: 80, compressionLevel: 9 },
      webp: { quality: 78 },
      avif: { quality: 60 },
      svg: {
        multipass: true,
        plugins: [{ name: 'preset-default' }],
      },
    }),
  ],

  build: {
    target: 'es2018',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split vendor code out of route chunks for long-term caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
  },
});
