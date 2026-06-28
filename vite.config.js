import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemap from 'vite-plugin-sitemap';
import { ROUTES } from './src/data/routes.js';

// `isSsrBuild` is provided by Vite 5.1+ in the config function's env object.
// We use it to skip plugins/options that are only meaningful for the
// client bundle when building the separate Node-targeted SSR bundle
// (`vite build --ssr src/entry-server.jsx`) used by scripts/prerender.mjs.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),

    ...(!isSsrBuild
      ? [
          // Generates sitemap.xml + robots.txt into dist/ on every build
          sitemap({
            hostname: 'https://drniranjanghag.com',
            dynamicRoutes: ROUTES,
            changefreq: 'weekly',
            priority: 0.8,
            generateRobotsTxt: true,
            robots: [
              { userAgent: '*', allow: '/' },
              { userAgent: '*', disallow: '/admin' },
              // AI search / answer-engine crawlers — explicitly welcomed so the
              // site is eligible to be cited by ChatGPT, Perplexity, Gemini, Copilot, etc.
              { userAgent: 'GPTBot', allow: '/' },
              { userAgent: 'OAI-SearchBot', allow: '/' },
              { userAgent: 'ChatGPT-User', allow: '/' },
              { userAgent: 'ClaudeBot', allow: '/' },
              { userAgent: 'Claude-Web', allow: '/' },
              { userAgent: 'anthropic-ai', allow: '/' },
              { userAgent: 'PerplexityBot', allow: '/' },
              { userAgent: 'Perplexity-User', allow: '/' },
              { userAgent: 'Google-Extended', allow: '/' },
              { userAgent: 'Applebot-Extended', allow: '/' },
              { userAgent: 'Bingbot', allow: '/' },
              { userAgent: 'CCBot', allow: '/' },
            ],
          }),

          // Surgical image compression at build time (jpg/png/webp/avif/svg)
          ViteImageOptimizer({
            includePublic: true,
            jpg: { quality: 78, mozjpeg: true },
            jpeg: { quality: 78, mozjpeg: true },
            png: { quality: 80, compressionLevel: 9 },
            webp: { quality: 65 },
            avif: { quality: 60 },
            svg: {
              multipass: true,
              plugins: [{ name: 'preset-default' }],
            },
          }),
        ]
      : []),
  ],

  build: {
    target: 'es2018',
    cssCodeSplit: true,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Split vendor code out of route chunks for long-term caching
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'router': ['react-router-dom'],
            },
          },
        },
  },
}));
