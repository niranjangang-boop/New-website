import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Breadcrumbs, { breadcrumbLd } from '../components/Breadcrumbs.jsx';
import NotFound from './NotFound.jsx';
import { SITE, CLINICS, SPECIALTIES, slugify } from '../data/site.js';
import { openingHoursSchema } from '../data/opd.js';

// One page per consulting location: address, landmark, Dr. Ghag's OPD hours,
// map and how to book. Facts only — no offers or promotional claims (NMC 2026).
export default function Location() {
  const { slug } = useParams();
  const clinic = CLINICS.find((c) => slugify(c.name) === slug);

  const crumbs = clinic
    ? [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: clinic.name, path: `/locations/${slug}` },
      ]
    : [];

  const jsonLd = useMemo(() => {
    if (!clinic) return null;
    const hours = openingHoursSchema(clinic.name);
    return {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbLd(crumbs),
        {
          '@type': 'MedicalClinic',
          '@id': `${SITE.url}/locations/${slug}/#clinic`,
          name: clinic.name,
          url: `${SITE.url}/locations/${slug}/`,
          address: { '@type': 'PostalAddress', streetAddress: clinic.address, addressLocality: 'Thane West', addressRegion: 'Maharashtra', addressCountry: 'IN' },
          telephone: `+${SITE.phoneRaw}`,
          hasMap: clinic.mapUrl,
          ...(hours.length ? { openingHoursSpecification: hours } : {}),
          employee: { '@type': 'Physician', '@id': `${SITE.url}/#physician` },
        },
      ],
    };
  }, [clinic, slug]);

  if (!clinic) return <NotFound />;

  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(`${clinic.name}, ${clinic.address}`)}&output=embed`;
  const area = clinic.shortLocation;

  return (
    <>
      <Seo
        title={`${clinic.name}, ${area.replace(', Thane West', '')}`}
        description={`Dr. Niranjan Ghag, orthopaedic surgeon, at ${clinic.name}, ${area}: address, landmark, OPD hours, map and how to book.`.slice(0, 160)}
        path={`/locations/${slug}`}
        jsonLd={jsonLd}
      />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <Breadcrumbs items={crumbs} className="mb-6" />
        <p className="eyebrow">Consulting location</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
          Dr. Niranjan Ghag at {clinic.name}, {area}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Dr. Niranjan Ghag, orthopaedic surgeon, consults at {clinic.name} in {area}.
          {clinic.hours?.[0] && ` OPD: ${clinic.hours[0].days}, ${clinic.hours[0].time}.`} Call or
          WhatsApp {SITE.phoneDisplay} to confirm your time before you travel.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h2 className="font-serif text-xl font-bold text-slate-900">Address</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{clinic.address}</p>
            {clinic.landmark && <p className="mt-2 text-sm text-slate-500">Landmark: {clinic.landmark}</p>}
            <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-brand-gold underline hover:text-brand-brown">
              Open in Google Maps
            </a>

            <h2 className="mt-8 font-serif text-xl font-bold text-slate-900">OPD hours</h2>
            <ul className="mt-3 space-y-1.5">
              {clinic.hours.map((h) => (
                <li key={`${h.days}-${h.time}`} className="flex justify-between gap-3 text-sm">
                  <span className="text-slate-600">{h.days}</span>
                  <span className="text-right font-semibold text-slate-900">{h.time}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-serif text-xl font-bold text-slate-900">Booking</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Phone or WhatsApp:{' '}
              <a href={`tel:+${SITE.phoneRaw}`} className="font-semibold text-brand-brown underline">{SITE.phoneDisplay}</a>.
              Consultations in English, Marathi and Hindi. Bring previous X-rays, scans and a list of
              your medicines; see <Link to="/contact" className="underline">what to bring</Link>.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <iframe
              title={`Map of ${clinic.name}`}
              src={mapEmbed}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <section className="mt-14" aria-labelledby="loc-specialties">
          <h2 id="loc-specialties" className="font-serif text-2xl font-bold text-slate-900">Conditions seen</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Consultations cover all of Dr. Ghag&rsquo;s specialties. Where an operation is needed, the
            hospital where it will be done is discussed at the consultation.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {SPECIALTIES.map((s) => (
              <li key={s.slug}>
                <Link to={`/specialties/${s.slug}`} className="text-brand-gold underline hover:text-brand-brown">{s.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-slate-600">
          Other locations:{' '}
          {CLINICS.filter((c) => c.name !== clinic.name).map((c, i, arr) => (
            <span key={c.name}>
              <Link to={`/locations/${slugify(c.name)}`} className="underline hover:text-brand-brown">{c.name}</Link>
              {i < arr.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </section>
    </>
  );
}
