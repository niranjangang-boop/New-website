import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { trackPageView } from './lib/analytics.js';

// Home is imported eagerly: it renders in the very first paint with no
// fallback-to-content swap, eliminating the homepage CLS. All other
// routes stay code-split and load on demand.
const About = lazy(() => import('./pages/About.jsx'));
const Book = lazy(() => import('./pages/Book.jsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));
const Education = lazy(() => import('./pages/Education.jsx'));
const EducationArticle = lazy(() => import('./pages/EducationArticle.jsx'));
const Specialty = lazy(() => import('./pages/Specialty.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Procedure = lazy(() => import('./pages/Procedure.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

// Layout-stable fallback: full-viewport height so the footer never sits
// in view during chunk load and then jumps (the classic CLS source).
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true">
      <div className="h-10 w-10 rounded-full border-4 border-brand-gold border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
      </Layout>
    </>
  );
}
