import { useState } from "react";
import { PageHero, SectionHead, Stars } from "../components/shared";
import { IconCheck } from "../components/icons";
import { IMG } from "../data";

export default function Bridal() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    pkg: "",
    requests: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date.trim()) {
      return; // Handled by native required attributes
    }
    
    setStatus("submitting");
    
    // Simulate API/EmailJS call
    setTimeout(() => {
      setSubmittedName(formData.name);
      setStatus("success");
      setFormData({ name: "", phone: "", date: "", pkg: "", requests: "" });
      
      // Auto-reset back to form after 6 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 6000);
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Bridal Beauty"
        sub="Your perfect day, perfected."
        image={IMG.bridalHero}
        center
      />

      {/* packages */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Designed for Perfection" title="Bespoke Bridal Packages" />
          <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
            {(() => {
              const pkgs = [
                {
                  name: "Glow Package",
                  price: "$450",
                  features: ["Premium Hair Styling & Blowout", "Elegant HD Basic Makeup", "Signature Gel Nail Art", "Customized Skin Consultation"],
                  dark: false,
                  popular: false,
                },
                {
                  name: "Luxe Package",
                  price: "$850",
                  features: ["Full Couture Hair & Veil Draping", "Signature HD Bridal Makeup", "Luxury Lashes & Fitting", "Organic Rose-Milk Mani-Pedi", "Pre-Bridal European Facial"],
                  dark: true,
                  popular: true,
                },
                {
                  name: "Elite Package",
                  price: "$1,500",
                  features: ["All Luxe Package Indulgences", "Rehearsal Dinner Glow Look", "Wedding Day Full Transformation", "2 Full Trial Sessions with Elena", "Complete Clinical Skincare Regimen"],
                  dark: false,
                  popular: false,
                },
              ];
              return pkgs.map((p) => (
                <div
                  key={p.name}
                  className={
                    p.dark
                      ? "relative rounded-xl bg-ink p-8 text-white shadow-[0_30px_60px_-25px_rgba(43,33,40,0.6)] lg:-translate-y-3"
                      : "relative rounded-xl border border-line bg-white p-8 shadow-[0_15px_40px_-28px_rgba(43,33,40,0.5)]"
                  }
                >
                  {p.popular && (
                    <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-serif text-2xl font-bold ${p.dark ? "text-white" : "text-ink"}`}>{p.name}</h3>
                  <p className={`mt-3 font-serif text-3xl font-bold ${p.dark ? "text-gold" : "text-gold"}`}>{p.price}</p>
                  <span className={`mt-5 block h-px w-full ${p.dark ? "bg-white/15" : "bg-line"}`} />
                  <ul className="mt-6 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-[13px] ${p.dark ? "text-white/75" : "text-body"}`}>
                        <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#/booking"
                    className={`mt-8 w-full ${p.dark ? "btn-gold" : "btn-line"}`}
                  >
                    Book Consultation
                  </a>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* timeline (dark) */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Timeline of Grace" title="The Bridal Prep Guide" light />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {(() => {
              const tl = [
                { when: "6 Months Before", title: "Hair Growth & Skin Plan", text: "Start customized scalp detox and clinical laser/facial therapy series." },
                { when: "3 Months Before", title: "Trials & Style Match", text: "Book your mock consultations and pin down your moodboards with Elena." },
                { when: "1 Month Before", title: "Advanced Color Treatment", text: "Settle in your perfect signature balayage or deep protein hair therapies." },
                { when: "1 Week Before", title: "Glow Facials & Mani Pedi", text: "Rejuvenate with organic rose-milk skin treatments and elite OPI nail curation." },
                { when: "The Wedding Day", title: "Sublime Mastery Reveal", text: "Relax inside your private sterilized suite while our team delivers magic." },
              ];
              return tl.map((t, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center">
                    <span className="z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gold bg-ink" />
                    {i < tl.length - 1 && <span className="h-px flex-1 bg-gold/40" />}
                  </div>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{t.when}</p>
                  <h3 className="font-serif mt-2 text-lg font-bold leading-snug text-white">{t.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/55">{t.text}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* inquiry */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(43,33,40,0.5)] md:p-10">
            <h2 className="font-serif text-3xl font-bold text-ink">Bridal Inquiry</h2>
            <p className="mt-2 text-[13.5px] text-body">
              Let us customize your grand beauty vision. Register your priority slot today.
            </p>
            {status === "success" ? (
              <div
                role="alert"
                className="mt-7 flex flex-col items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-50/50 p-8 text-center sm:p-10"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <IconCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif mt-4 text-xl font-bold text-ink">Inquiry Received</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-body">
                  Thank you, <strong className="text-ink">{submittedName}</strong>! Your bridal inquiry has been securely submitted. Our coordination team will contact you shortly to confirm your consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-line mt-6 !py-2.5"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} aria-label="Bridal inquiry form">
                <div>
                  <label htmlFor="inquiry-name" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    required
                    aria-required="true"
                    className="input-luxe"
                    placeholder="Enter name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-phone" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    required
                    aria-required="true"
                    type="tel"
                    className="input-luxe"
                    placeholder="+1 (310) 555-0199"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-date" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Wedding Date <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inquiry-date"
                    required
                    aria-required="true"
                    type="date"
                    className="input-luxe min-h-[44px]"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-pkg" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Package Preference
                  </label>
                  <select
                    id="inquiry-pkg"
                    className="input-luxe min-h-[44px] appearance-none"
                    value={formData.pkg}
                    onChange={(e) => setFormData(prev => ({ ...prev, pkg: e.target.value }))}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select Package</option>
                    <option value="Glow Package">Glow Package</option>
                    <option value="Luxe Package">Luxe Package</option>
                    <option value="Elite Package">Elite Package</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="inquiry-reqs" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Special Requests or Hair/Skin Concerns
                  </label>
                  <textarea
                    id="inquiry-reqs"
                    rows={4}
                    className="input-luxe resize-none"
                    placeholder="Describe your veil preferences, dress neckline, wedding theme, or special requests…"
                    value={formData.requests}
                    onChange={(e) => setFormData(prev => ({ ...prev, requests: e.target.value }))}
                    disabled={status === "submitting"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  aria-disabled={status === "submitting"}
                  className="btn-gold w-full !py-4 transition-all disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:col-span-2"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Secure Request"}
                </button>
              </form>
            )}
          </div>
          <div className="overflow-hidden rounded-xl shadow-[0_25px_60px_-28px_rgba(43,33,40,0.55)]">
            <img src={IMG.bridalFabric} alt="Bridal styling" className="h-full min-h-[380px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Stars outline starClass="w-5 h-5" className="justify-center gap-2" />
          <blockquote className="mt-7 font-serif text-xl leading-relaxed text-ink md:text-[22px]">
            "Finding a salon that balances contemporary bridal hair couture with calming holistic skin prep was
            a dream come true. Elena's makeup and veil styling held up effortlessly through an 8-hour celebration,
            and the private bridal suite was peaceful and serene. The ultimate luxury standard in Beverly Hills."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img src={IMG.avatarZainab} alt="Victoria Sterling" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40" />
            <div className="text-left">
              <p className="text-[13.5px] font-bold text-ink">Victoria Sterling</p>
              <p className="text-[11.5px] text-body">Bridal Client · Beverly Hills</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
