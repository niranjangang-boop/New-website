import Seo from '../components/Seo.jsx';
import Clinics from '../components/Clinics.jsx';

export default function Book() {
  return (
    <>
      <Seo
        title="Book Appointment"
        description="Book an appointment with Dr. Niranjan Ghag at Joshi's Neurotrauma Centre, Khopat, Thane West — instant confirmation via WhatsApp."
        path="/book"
      />
      <section className="relative overflow-hidden px-4 pt-16 text-center">
        <div className="blob left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="font-serif text-4xl font-bold text-slate-900">
            Book Your Consultation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Select your preferred date and time below. Your booking request is sent
            directly to the clinic on WhatsApp for confirmation.
          </p>
        </div>
      </section>
      <Clinics />
    </>
  );
}
