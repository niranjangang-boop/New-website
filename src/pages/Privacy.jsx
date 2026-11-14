import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { SITE } from '../data/site.js';

// Privacy notice under the Digital Personal Data Protection Act, 2023 and
// clause 7.4 of the NMC guidelines (6 Oct 2026). Plain language on purpose.
// Review with a medico-legal adviser before treating it as final.
const UPDATED = '14 November 2026';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How drniranjanghag.com handles personal data: what is collected, why, who receives it, how long it is kept and how to ask for it to be corrected or deleted."
        path="/privacy"
      />
      <article className="mx-auto max-w-3xl px-4 py-16 leading-relaxed text-slate-700">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated {UPDATED}</p>

        <p className="mt-6">
          This website belongs to {SITE.fullName}, orthopaedic surgeon, Thane West, Maharashtra
          (Maharashtra Medical Council Reg. No. 2019/04/2411). This page explains what personal
          data the site handles and what you can ask us to do with it, in line with the Digital
          Personal Data Protection Act, 2023.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">What we collect, and why</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong>Appointment requests.</strong> The booking form does not store anything on this
            website. When you press the WhatsApp button, the name, date, time and location you chose
            are placed in a WhatsApp message that you send yourself to the clinic number
            ({SITE.phoneDisplay}). We use it only to arrange your appointment. WhatsApp&rsquo;s own
            privacy policy applies to the message itself.
          </li>
          <li>
            <strong>Phone calls, WhatsApp messages and email</strong> you send us are used to reply to
            you and arrange care.
          </li>
          <li>
            <strong>Past camp registrations.</strong> Registrations for the September 2026 health camp
            (name, mobile number, age band, gender and the body area of concern) were stored in a
            private Google Sheet used only to organise that camp.
          </li>
          <li>
            <strong>Website analytics.</strong> The site uses Google Analytics to count visits and see
            which pages are read. It records information such as pages viewed, approximate location
            (city level), device and browser, using cookies. It does not record your name or contact
            details.
          </li>
          <li>
            <strong>Hosting.</strong> The site is hosted by Netlify, whose servers keep standard
            technical logs (such as IP address and pages requested) for security and reliability.
          </li>
        </ul>

        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">What we do not do</h2>
        <p className="mt-4">
          We do not sell or rent personal data, do not use it for advertising, and do not share it
          with anyone except the services named above and the treating team at the hospital where
          you choose to be seen. Medical records created during your consultation are kept by the
          hospital under its own policies and the law on medical records.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">How long we keep it</h2>
        <p className="mt-4">
          Appointment messages and camp registrations are kept only as long as needed for the purpose
          they were given for, and then deleted, unless the law requires us to keep them longer.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">Your rights</h2>
        <p className="mt-4">
          You can ask to see the personal data we hold about you, have it corrected or completed, or
          have it deleted, and you can withdraw consent you have given. You can also nominate someone
          to exercise these rights for you. To do any of these, or to raise a grievance, email{' '}
          <a href={`mailto:${SITE.email}`} className="text-brand-gold underline">{SITE.email}</a> or
          call {SITE.phoneDisplay}. We aim to reply within 30 days. If you are not satisfied, you may
          complain to the Data Protection Board of India.
        </p>

        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">Health information on this site</h2>
        <p className="mt-4">
          Articles on this site are general health education and are not a diagnosis or a substitute
          for an examination. Please do not send detailed medical information by email or WhatsApp
          unless the clinic asks for it.
        </p>

        <p className="mt-10 text-sm text-slate-500">
          See also: <Link to="/contact" className="underline">contact and locations</Link>.
        </p>
      </article>
    </>
  );
}
