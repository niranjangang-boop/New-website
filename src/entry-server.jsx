import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Book from './pages/Book.jsx';
import Sitemap from './pages/Sitemap.jsx';
import Education from './pages/Education.jsx';
import EducationArticle from './pages/EducationArticle.jsx';
import Specialty from './pages/Specialty.jsx';
import Procedure from './pages/Procedure.jsx';
import NotFound from './pages/NotFound.jsx';
import { headState } from './components/Seo.jsx';

// SSR/prerender entry point — used only by `vite build --ssr` + scripts/prerender.mjs,
// never shipped to the browser. Mirrors src/App.jsx's <Routes>, but every page is
// eagerly imported instead of lazy()'d: renderToString cannot wait on React.lazy's
// Suspense boundary, so the client's code-split route tree can't be reused here.
// Keep this route list in sync with App.jsx and src/data/routes.js.
function ServerApp() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/:slug" element={<EducationArticle />} />
        <Route path="/specialties/:slug" element={<Specialty />} />
        <Route path="/procedures/:slug" element={<Procedure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

// Renders one route to an HTML string plus its head metadata.
// Note: this does NOT hydrate — main.jsx keeps using createRoot (full client
// re-render after the JS bundle loads), so there's no hydration-mismatch risk
// here; the prerendered HTML only needs to be visually/semantically correct
// for crawlers, not React-hydration-identical.
export function render(url) {
  // Reset so a previous route's head data can never leak into this one.
  headState.title = '';
  headState.description = '';
  headState.path = url;
  headState.jsonLd = null;

  const html = renderToString(
    <StaticRouter location={url}>
      <ServerApp />
    </StaticRouter>
  );

  return { html, head: { ...headState } };
}
