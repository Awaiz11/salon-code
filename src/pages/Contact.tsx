import { useState } from "react";
import { PageHero, SectionHead } from "../components/shared";
import { IconMail, IconPhone, IconPin } from "../components/icons";
import { IMG } from "../data";

const INFO = [
  {
    icon: IconPin,
    title: "Visit Us",
    lines: ["Building 44-CCA, Phase 5 DHA", "Lahore, Punjab, Pakistan"],
  },
  {
    icon: IconPhone,
    title: "Call Us",
    lines: ["+92 42 35123456", "+92 300 1234567"],
  },
  {
    icon: IconMail,
    title: "Email Us",
    lines: ["appointments@luxehaven.pk", "info@luxehaven.pk"],
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "11:00 AM – 9:00 PM" },
  { day: "Saturday", time: "10:00 AM – 10:00 PM" },
  { day: "Sunday", time: "12:00 PM – 8:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        sub="We'd love to hear from you. Reach out to us for appointments, inquiries, or to simply explore our bespoke beauty services."
        image={IMG.aboutHero}
        center
      />

      {/* contact info cards */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(43,33,40,0.35)]"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-golddark">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif mt-5 text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1.5 text-[13.5px] leading-relaxed text-body"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* form + hours */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead
            eyebrow="Send a Message"
            title="We're Here to Help"
            sub="Fill in the form below and our team will get back to you within 24 hours."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            {/* form */}
            <div className="rounded-xl border border-line bg-cream/60 p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-golddark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="font-serif mt-6 text-2xl font-bold text-ink">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-body">
                    Your message has been received. Our team will get back to
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-line mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Fatima Shah"
                        className="input-luxe"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="input-luxe"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        className="input-luxe"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                        Subject
                      </label>
                      <select className="input-luxe" required>
                        <option value="">Select a topic</option>
                        <option>Appointment Inquiry</option>
                        <option>Bridal Package</option>
                        <option>Membership Query</option>
                        <option>Feedback</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you…"
                      className="input-luxe resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-gold mt-7">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* opening hours sidebar */}
            <div>
              <div className="rounded-xl border border-line bg-cream/60 p-8">
                <h4 className="font-serif text-lg font-bold text-ink">
                  Opening Hours
                </h4>
                <span className="mt-2 block h-px w-10 bg-gold" />
                <ul className="mt-5 space-y-4">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-[13.5px]"
                    >
                      <span className="font-medium text-ink">{h.day}</span>
                      <span className="text-body">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-line bg-cream/60 p-8">
                <h4 className="font-serif text-lg font-bold text-ink">
                  Quick Booking
                </h4>
                <span className="mt-2 block h-px w-10 bg-gold" />
                <p className="mt-4 text-[13.5px] leading-relaxed text-body">
                  Skip the wait — book your appointment directly through our
                  online system for instant confirmation.
                </p>
                <a href="#/booking" className="btn-gold mt-6 w-full">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map section */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead
            eyebrow="Find Us"
            title="Our Location"
            sub="Conveniently situated in the heart of DHA Phase 5, Lahore — easily accessible with ample parking."
          />
          <div className="mt-14 overflow-hidden rounded-xl border border-line shadow-[0_18px_40px_-22px_rgba(43,33,40,0.25)]">
            <iframe
              title="Luxe Haven Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.555!2d74.3587!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2spk!4v1"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-serif text-3xl font-bold text-white md:text-[40px]">
            Ready to Experience Luxury?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-white/65">
            Reserve your priority appointment today. Enjoy customized
            consultation and zero waiting times at DHA Phase 5, Lahore.
          </p>
          <a href="#/booking" className="btn-gold mt-9">
            Book Your Visit Today
          </a>
        </div>
      </section>
    </>
  );
}
