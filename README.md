# Dr. Niranjan Ghag — Website (Source)

Production source for [www.drniranjanghag.com](https://www.drniranjanghag.com).
React 18 + Vite 5 + Tailwind CSS 3, deployed to GitHub Pages.

## Quick start

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build → dist/ (sitemap.xml + robots.txt + optimized images generated automatically)
npm run preview  # preview the production build
```

## Deploying

Push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds and deploys to GitHub Pages automatically.

One-time repo setup: **Settings → Pages → Source → GitHub Actions**.
The `public/CNAME` file keeps the custom domain bound.

## Where things live

| What | Where |
|---|---|
| Practice details (phone, email, clinic, hours) | `src/data/site.js` |
| Patient education articles (add new posts here) | `src/data/articles.js` |
| Routes / code splitting | `src/App.jsx` |
| CLS-safe image component | `src/components/Image.jsx` |
| Clinic + WhatsApp booking | `src/components/Clinics.jsx` |
| HTML sitemap page | `src/pages/Sitemap.jsx` |
| XML sitemap + image compression config | `vite.config.js` |
| Physician JSON-LD schema | `index.html` |

## Adding a new patient education article

Append one object to `ARTICLES` in `src/data/articles.js` (copy an existing
one as a template). The article page, education hub card, HTML sitemap entry,
XML sitemap entry, and FAQ rich-result schema are all generated from it —
no other file needs to change.

## Performance rules baked in

- Hero image: `<Image priority />` → `fetchpriority="high"`, eager load, preloaded in `index.html`.
- All other images lazy-load with explicit `width`/`height` + `aspect-ratio` (zero CLS).
- Every page is a `React.lazy()` chunk; React/router vendor code is split for caching.
- `vite-plugin-image-optimizer` compresses every image on each build.
