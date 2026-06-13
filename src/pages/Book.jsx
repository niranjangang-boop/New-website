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
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-slate-900">
          Book Your Consultation
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Select your preferred date and time below. Your booking request is sent
          directly to the clinic on WhatsApp for confirmation.
        </p>
      </section>
      <Clinics />
    </>
  );
}
