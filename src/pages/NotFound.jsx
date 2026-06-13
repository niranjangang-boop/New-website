import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        <p className="font-serif text-6xl font-bold text-brand-gold">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-2 text-slate-600">
          The page you're looking for may have moved.
        </p>
        <div className="mt-7 flex gap-4">
          <Link to="/" className="rounded-full bg-brand-brown px-6 py-3 text-sm font-bold text-white">
            Go Home
          </Link>
          <Link to="/sitemap" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700">
            View Sitemap
          </Link>
        </div>
      </section>
    </>
  );
}
