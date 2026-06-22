import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE } from '../data/site.js';
import { PROCEDURES } from '../data/procedures.js';

// Group procedures for the desktop dropdown
const GROUPS = ['Joint Replacement', 'Trauma & Fracture', 'Foot & Ankle', 'Sports Medicine', 'Spine Surgery'];

function groupedProcedures() {
  const map = {};
  GROUPS.forEach((g) => { map[g] = []; });
  PROCEDURES.forEach((p) => {
    if (map[p.group]) map[p.group].push(p);
  });
  return map;
}

const topLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/specialties/joint-replacement', label: 'Specialties' },
  { to: '/education', label: 'Patient Education' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [procOpen, setProcOpen] = useState(false);
  const closeTimer = useRef(null);
  const grouped = groupedProcedures();

  const openProc  = () => { clearTimeout(closeTimer.current); setProcOpen(true); };
  const closeProc = () => { closeTimer.current = setTimeout(() => setProcOpen(false), 120); };

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/75 shadow-glass backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-2" aria-label="Home">
          <img src="/icon-192.png" alt="" width="36" height="36" className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-serif text-lg font-bold text-brand-brown">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {topLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-gold ${
                    isActive ? 'text-brand-gold' : 'text-slate-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}

          {/* Procedures mega-dropdown */}
          <li
            className="relative"
            onMouseEnter={openProc}
            onMouseLeave={closeProc}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-gold transition-colors"
              aria-expanded={procOpen}
            >
              Procedures
              <svg
                className={`h-3.5 w-3.5 transition-transform ${procOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {procOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 w-[640px] pt-1 animate-fade-up" onMouseEnter={openProc} onMouseLeave={closeProc}>
              <div className="glass rounded-2xl p-5 shadow-glass-lg">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {GROUPS.filter((g) => grouped[g]?.length).map((group) => (
                    <div key={group}>
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                        {group}
                      </p>
                      <ul className="space-y-0.5">
                        {grouped[group].map((p) => (
                          <li key={p.slug}>
                            <Link
                              to={`/procedures/${p.slug}`}
                              className="block rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold transition"
                              onClick={() => setProcOpen(false)}
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            )}
          </li>

          <NavLink
            to="/book"
            className="rounded-full bg-gradient-to-r from-brand-brown to-brand-gold px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-brown/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Book Appointment
          </NavLink>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded p-2 text-slate-700 hover:bg-slate-100"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass animate-fade-up border-t border-white/40 px-4 py-3 md:hidden">
          <ul className="space-y-0.5">
            {topLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-slate-700"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            {/* Procedures grouped on mobile */}
            {GROUPS.filter((g) => grouped[g]?.length).map((group) => (
              <li key={group}>
                <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {group}
                </p>
                <ul className="space-y-0.5 pl-2">
                  {grouped[group].map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/procedures/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-slate-700"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="pt-3">
              <NavLink
                to="/book"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-r from-brand-brown to-brand-gold px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-brand-brown/20"
              >
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
