import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
        <div className="blob left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text font-serif text-6xl font-bold text-transparent">
            404
          </p>
          <h1 className="mt-4 font-serif text-2xl font-bold text-slate-900">
            Page not found
          </h1>
          <p className="mt-2 text-slate-600">
            The page you're looking for may have moved.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Link to="/" className="btn-gradient">
              Go Home
            </Link>
            <Link to="/sitemap" className="btn-outline">
              View Sitemap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
