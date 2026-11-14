import Seo from '../components/Seo.jsx';
import Clinics from '../components/Clinics.jsx';

export default function Book() {
  return (
    <>
      <Seo
        title="Book Appointment"
        description="Request an appointment with Dr. Niranjan Ghag at any of his four Thane West locations. Choose a date and time; the clinic confirms on WhatsApp."
        path="/book"
      />
      <section className="relative overflow-hidden px-4 pt-16 text-center">
        <div className="blob left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="font-serif text-4xl font-bold text-slate-900">
            Book Your Consultation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Choose a location, date and time below. Your request is sent to the clinic
            on WhatsApp, and the clinic team replies there to confirm the time.
          </p>
        </div>
      </section>
      <Clinics />
    </>
  );
}
