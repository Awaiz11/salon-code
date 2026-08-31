import { useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, SectionHead, Stars } from "../components/shared";
import { IconCheck, IconClock, IconShield, IconAward } from "../components/icons";
import { IMG } from "../data";

const INFO = [
  { icon: IconClock, title: "What to Expect", text: "A detailed consultation mapping your scalp hydration and texture density, followed by a double-shampoo prep, full treatment saturation, and custom flat-iron seal." },
  { icon: IconAward, title: "Primary Benefits", text: "Complete elimination of frizzy strands, deeply replenished keratin levels, dynamic lightweight texture, and a 40-minute daily morning styling reduction guaranteed." },
  { icon: IconShield, title: "Aftercare Advice", text: "Refrain from hair washing or pinning back for the first 72 hours. We highly recommend using sulfate-free Kérastase extension shampoos to preserve active treatment bonds." },
];

const STEPS = [
  { n: "01", title: "Holistic Scalp Consultation", text: "A master stylist maps your hair porosity profile, chemical history, and locks configuration to calibrate the custom active botanical formulation." },
  { n: "02", title: "Purifying Pre-Wash Prep", text: "A luxury double-wash ritual using specialized clarifying shampoos designed to lift product buildup and expand cuticles without stripping." },
  { n: "03", title: "Precision Saturate Therapy", text: "Even sectioning and meticulous brush application of premium keratin formulas, processed under precise thermal control." },
  { n: "04", title: "Molecular Heat Seal & Finish", text: "Flat-iron activation using advanced titanium irons tailored precisely to your strand limits, followed by a professional blowout finish." },
];

const ADDONS = [
  { title: "Deep Conditioning", text: "Ultra-concentrated restorative lipid wrap to fortify ends and deliver unmatched moisture.", price: "PKR 2,500" },
  { title: "Scalp Massage Ritual", text: "15-minute soothing reflexology session with cold-pressed organic lavender oils.", price: "PKR 1,500" },
  { title: "Signature Blow Dry", text: "Ultimate custom style finish leaving your hair runway-ready with perfect root lift.", price: "PKR 2,000" },
];

const ARTISTS = [
  { img: IMG.artisanAmna, name: "Amna Shah", role: "Senior Bridal & Hair Expert" },
  { img: IMG.artisanYousuf, name: "Yousuf Khan", role: "Master Barber & Stylist" },
  { img: IMG.artisanSarah, name: "Sarah Joseph", role: "Holistic Hair Therapist" },
];

const RELATED = [
  { img: IMG.relatedOlaplex, title: "Parisian Olaplex Bond Repair", price: "PKR 12,000" },
  { img: IMG.relatedDetox, title: "Organic Rosemary Scalp Detox", price: "PKR 8,500" },
  { img: IMG.relatedGloss, title: "Luxe Anti-Humidity Gloss Seal", price: "PKR 15,000" },
];

export default function ServiceDetail() {
  const [addons, setAddons] = useState<Record<number, boolean>>({ 0: true });
  const [artist, setArtist] = useState(0);

  const toggle = (i: number) => setAddons((a) => ({ ...a, [i]: !a[i] }));

  return (
    <>
      {/* breadcrumb + hero */}
      <section className="bg-cream pt-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav className="flex flex-wrap items-center gap-2 py-3 text-[12px] text-body">
            <a href="#/" className="hover:text-golddark">Home</a>
            <span className="text-mist">›</span>
            <a href="#/services" className="hover:text-golddark">Services</a>
            <span className="text-mist">›</span>
            <a href="#/services" className="hover:text-golddark">Hair Care</a>
            <span className="text-mist">›</span>
            <span className="text-golddark">Keratin Treatment</span>
          </nav>

          <div className="grid gap-10 pb-16 lg:grid-cols-[1.05fr_1fr] md:pb-20">
            <div className="overflow-hidden rounded-xl shadow-[0_25px_60px_-30px_rgba(43,33,40,0.5)]">
              <img src={IMG.keratinDetail} alt="Premium Keratin Blowout result" className="h-full min-h-[320px] w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <Eyebrow>Intensive Therapy</Eyebrow>
              <h1 className="mt-3 font-serif text-4xl font-bold text-ink md:text-[46px]">Premium Keratin Blowout</h1>
              <div className="mt-4 flex items-center gap-2">
                <Stars />
                <span className="text-[12px] font-semibold text-body">4.9</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="font-serif text-3xl font-bold text-gold">PKR 18,000</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[11.5px] text-body">
                  <IconClock className="h-3.5 w-3.5 text-golddark" /> 120 min
                </span>
              </div>
              <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-body">
                Our signature premium keratin blowout reconstructs protein bonds to restore vibrant health,
                mirror-shine, and lightweight flow. Specifically calibrated to combat Lahore's unique humidity frizz
                profiles.
              </p>
              <a href="#/booking" className="btn-gold mt-8 w-fit">Book This Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* info cards */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {INFO.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-cream/50 p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-golddark">
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-serif text-lg font-bold text-ink">{c.title}</h3>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-body">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* journey */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHead eyebrow="The Journey" title="Our Signature 4-Step Process" />
          <div className="mt-12 space-y-4">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-xl bg-white p-6 shadow-[0_10px_30px_-20px_rgba(43,33,40,0.35)] md:items-center md:p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold font-serif text-lg font-bold text-ink">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-body">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* add-ons */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow>Enhance Your Visit</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[36px]">Curated Treatment Add-Ons</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ADDONS.map((a, i) => {
              const on = !!addons[i];
              return (
                <button
                  key={a.title}
                  onClick={() => toggle(i)}
                  className={cn(
                    "rounded-xl border bg-cream/40 p-6 text-left transition",
                    on ? "border-gold shadow-[0_12px_30px_-18px_rgba(195,160,95,0.6)]" : "border-line hover:border-gold/50"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-lg font-bold text-ink">{a.title}</h3>
                    <span
                      className={cn(
                        "grid h-5 w-5 shrink-0 place-items-center rounded border transition",
                        on ? "border-gold bg-gold text-ink" : "border-line bg-white"
                      )}
                    >
                      {on && <IconCheck className="h-3 w-3" />}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{a.text}</p>
                  <p className="mt-4 text-[13px] font-bold text-golddark">{a.price}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* artists */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow>Master Artisans</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[36px]">Choose Your Expert Colorist</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ARTISTS.map((a, i) => {
              const sel = artist === i;
              return (
                <div
                  key={a.name}
                  className={cn(
                    "overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-22px_rgba(43,33,40,0.4)] transition",
                    sel && "ring-2 ring-gold"
                  )}
                >
                  <div className="h-60 overflow-hidden">
                    <img src={a.img} alt={a.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg font-bold text-ink">{a.name}</h3>
                      <span className={cn("h-2 w-2 rounded-full", sel ? "bg-emerald-500" : "bg-line")} />
                    </div>
                    <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-golddark">{a.role}</p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <Stars />
                      <span className="text-[11.5px] text-body">5.0</span>
                    </div>
                    <button
                      onClick={() => setArtist(i)}
                      className={cn("mt-5 w-full", sel ? "btn-gold" : "btn-line")}
                    >
                      {sel ? "Selected" : "Select Artist"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* related */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow>Complete Curation</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[36px]">Related Restorative Rituals</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RELATED.map((r) => (
              <a
                key={r.title}
                href="#/service"
                className="group overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(43,33,40,0.4)]"
              >
                <div className="h-48 overflow-hidden">
                  <img src={r.img} alt={r.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-ink">{r.title}</h3>
                  <p className="mt-2 text-[13px] font-bold text-golddark">{r.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
