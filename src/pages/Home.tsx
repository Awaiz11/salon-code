import { useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, SectionHead, Stars } from "../components/shared";
import { ICONS, IconArrowR, IconCheck, IconChevronL, IconChevronR, IconMail } from "../components/icons";
import { HOME_PREVIEWS, IMG, LUXE_CARDS, MASTERS, STORIES, TESTIMONIALS } from "../data";

export default function Home() {
  const rail = useRef<HTMLDivElement>(null);
  const [tIndex, setTIndex] = useState(0);
  const t = TESTIMONIALS[tIndex];

  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-ink md:min-h-[620px]">
        <img src={IMG.homeHero} alt="Luxe Haven salon interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211720]/95 via-[#211720]/80 to-[#211720]/45" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Beverly Hills' Premier Luxury Haven</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.08] text-white md:text-[68px]">
              Where Beauty
              <br />
              Becomes an
              <br />
              Experience
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
              Step into Beverly Hills' most exclusive aesthetic sanctuary. Our award-winning therapists and master stylists
              customize every indulgence to reveal your sublime signature glow.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#/booking" className="btn-gold">Book Appointment</a>
              <a href="#/services" className="btn-line-light">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Aesthetic Offerings" title="Immersive Services Preview" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {HOME_PREVIEWS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <article
                  key={s.title}
                  className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_35px_-18px_rgba(43,33,40,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(43,33,40,0.35)]"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-body">{s.text}</p>
                    <a
                      href="#/services"
                      className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-golddark hover:text-gold"
                    >
                      Learn More <IconArrowR className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LUXE DISTINCTION (dark) ============ */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <Eyebrow>The Luxe Distinction</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-[40px]">
              Uncompromising
              <br />
              Excellence in Every
              <br />
              Indulgence
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/65">
              At Luxe Haven, we define high-performance aesthetic wellness. From medical-grade sterilized
              tools to certified clean European formulas, we bring Beverly Hills the ultimate standard of luxury care.
            </p>
            <a href="#/about" className="btn-line-light mt-9">Learn About Our Standards</a>
          </div>
          <div className="space-y-5">
            {LUXE_CARDS.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="flex gap-5 rounded-xl border border-white/8 bg-cocoa/70 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gold">{c.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">{c.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED MASTERS ============ */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Meet the Masters</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[38px]">Featured Master Artisans</h2>
            </div>
            <div className="hidden gap-3 md:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-gold hover:text-gold"
              >
                <IconChevronL className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink transition hover:bg-golddark hover:text-white"
              >
                <IconChevronR className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div ref={rail} className="no-scrollbar mt-10 flex snap-x gap-6 overflow-x-auto pb-2">
            {MASTERS.map((m) => (
              <article
                key={m.name}
                className="w-[300px] shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-18px_rgba(43,33,40,0.3)] md:w-[340px]"
              >
                <div className="h-64 overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-golddark">{m.role}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Stars />
                    <span className="text-[11.5px] text-body">5.0 Rating</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{m.text}</p>
                  <a href="#/booking" className="btn-gold mt-5 w-full !py-3">
                    {m.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REAL RESULTS ============ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Aesthetic Transformations" title="Flawless Real Results" />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative overflow-hidden rounded-xl">
                <img src={IMG.before} alt="Before therapy" className="h-72 w-full object-cover md:h-96" />
                <figcaption className="absolute left-3 top-3 rounded bg-ink/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  Before Therapy
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-xl">
                <img src={IMG.after} alt="After luxury treatment" className="h-72 w-full object-cover md:h-96" />
                <figcaption className="absolute left-3 top-3 rounded bg-gold px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                  After Luxury Treatment
                </figcaption>
              </figure>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold leading-snug text-ink md:text-[32px]">
                Premium Keratin Blowout &amp; Amino Acid Therapy
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-body">
                Witness the sublime rejuvenation. Designed specifically to eliminate humidity-related frizz, our
                non-formaldehyde botanical treatment rebuilds protein bonds to restore vibrant health, mirror-shine,
                and lightweight flow.
              </p>
              <ul className="mt-6 space-y-3.5">
                {[
                  "Locks in hydration for up to 12 weeks",
                  "Saves up to 40 minutes of morning style time daily",
                  "Safe, certified botanical active formulation",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold text-gold">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#/service" className="btn-gold">Book This Therapy</a>
                <a href="#/gallery" className="btn-line">See More Transformations</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHead eyebrow="Client Adoration" title="Beloved by California's Discerning Elite" />
          <div className="mt-12 rounded-xl bg-white p-8 text-center shadow-[0_15px_45px_-20px_rgba(43,33,40,0.3)] md:p-12">
            <Stars outline starClass="w-5 h-5" className="justify-center gap-2" />
            <blockquote className="mx-auto mt-7 max-w-3xl font-serif text-xl leading-relaxed text-ink md:text-[22px]">
              "{t.quote}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40" />
              <div className="text-left">
                <p className="text-[13.5px] font-bold text-ink">{t.name}</p>
                <p className="text-[11.5px] text-body">{t.role}</p>
              </div>
            </div>
            <div className="mt-7 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === tIndex ? "w-5 bg-gold" : "w-1.5 bg-line"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STORIES GRID ============ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Curated Style Feed</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[38px]">Stories of Bespoke Elegance</h2>
            </div>
            <a href="#/gallery" className="btn-line !py-3">Follow @LuxeHavenBeverlyHills</a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STORIES.map((s, i) => (
              <div key={i} className="group aspect-square overflow-hidden rounded-lg">
                <img
                  src={s}
                  alt="Luxe Haven story"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUBSCRIBE ============ */}
      <section className="bg-cream pb-24 pt-6">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-white p-8 shadow-[0_15px_45px_-25px_rgba(43,33,40,0.4)] md:flex-row md:items-center md:p-12">
            <div className="max-w-md">
              <Eyebrow>Privileged Community</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl font-bold text-ink md:text-[30px]">Subscribe to the Haven Journal</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-body">
                Receive exclusive seasonal menus, prioritized early booking codes for Beverly Hills slots, and
                masterclasses from our master stylists.
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <IconMail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="input-luxe !pl-10"
                  />
                </div>
                <button type="submit" className="btn-gold !px-6">Subscribe</button>
              </form>
              <p className="mt-3 text-[11px] text-mist">We respect your privacy. Opt-out of the haven updates at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
