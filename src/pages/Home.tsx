import { useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, SectionHead, Stars } from "../components/shared";
import { ICONS, IconArrowR, IconCheck, IconChevronL, IconChevronR, IconMail, IconStar, IconX } from "../components/icons";
import { HOME_PREVIEWS, IMG, LUXE_CARDS, MASTERS, STORIES, TESTIMONIALS } from "../data";


export default function Home() {
  const rail = useRef<HTMLDivElement>(null);
  
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [tIndex, setTIndex] = useState(0);
  const t = reviews[tIndex];

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", role: "", quote: "", rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);

  const handleNextReview = () => setTIndex((prev) => (prev + 1) % reviews.length);
  const handlePrevReview = () => setTIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.quote) return;
    
    const newReview = {
      name: reviewForm.name,
      role: reviewForm.role || "Client",
      quote: reviewForm.quote,
      avatar: IMG.avatarZainab,
      rating: reviewForm.rating,
    };
    
    setReviews((prev) => [newReview, ...prev]);
    setTIndex(0);
    setIsReviewModalOpen(false);
    setReviewForm({ name: "", role: "", quote: "", rating: 5 });
  };

  /* ── carousel scroll (desktop buttons) ── */
  const scroll = (dir: number) => {
    if (!rail.current) return;
    const card = rail.current.firstElementChild as HTMLElement | null;
    const dist = card ? card.offsetWidth + 24 : 340;
    rail.current.scrollBy({ left: dir * dist, behavior: "smooth" });
  };

  /* ── carousel swipe (mobile touch) ── */
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) scroll(delta > 0 ? 1 : -1);
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden bg-ink sm:min-h-[580px] md:min-h-[640px]"
        aria-label="Hero — Beverly Hills' Premier Luxury Haven"
      >
        {/* Hero image is above-fold → eager load */}
        <img
          src={IMG.homeHero}
          alt="Luxe Haven salon interior, Beverly Hills"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211720]/95 via-[#211720]/80 to-[#211720]/45" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Beverly Hills' Premier Luxury Haven</Eyebrow>
            {/* Fluid typography — no overflow on 320px */}
            <h1 className="mt-4 font-serif text-[2.4rem] font-bold leading-[1.08] text-white sm:text-5xl md:text-[64px] lg:text-[72px]">
              Where Beauty
              <br />
              Becomes an
              <br />
              Experience
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
              Step into Beverly Hills' most exclusive aesthetic sanctuary. Our award-winning therapists and master stylists
              customize every indulgence to reveal your sublime signature glow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a href="#/booking" className="btn-gold" aria-label="Book an appointment at Luxe Haven">
                Book Appointment
              </a>
              <a href="#/services" className="btn-line-light" aria-label="Explore all Luxe Haven services">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead
            eyebrow="Aesthetic Offerings"
            title="Immersive Services Preview"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {HOME_PREVIEWS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <article
                  key={s.title}
                  className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_35px_-18px_rgba(43,33,40,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(43,33,40,0.35)] focus-within:ring-2 focus-within:ring-gold/40"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null; // prevent infinite loop
                        img.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23f6f1e7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='13' fill='%23a9a093' font-family='sans-serif'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold" aria-hidden="true">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-body">{s.text}</p>
                    <a
                      href="#/services"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-golddark hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/50"
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn More <IconArrowR className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LUXE DISTINCTION (dark) ============ */}
      <section className="bg-ink py-16 md:py-24" aria-labelledby="distinction-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <Eyebrow>The Luxe Distinction</Eyebrow>
            <h2
              id="distinction-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-[40px]"
            >
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
          <div className="space-y-4">
            {LUXE_CARDS.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="flex gap-5 rounded-xl border border-white/8 bg-cocoa/70 p-5 md:p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold" aria-hidden="true">
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
      <section className="bg-cream py-16 md:py-24" aria-labelledby="masters-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Meet the Masters</Eyebrow>
              <h2
                id="masters-heading"
                className="mt-3 font-serif text-3xl font-bold text-ink md:text-[38px]"
              >
                Featured Master Artisans
              </h2>
            </div>
            {/* Desktop nav — hidden on mobile; mobile uses swipe */}
            <div className="hidden gap-3 md:flex" role="group" aria-label="Carousel navigation">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous artisan"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <IconChevronL className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next artisan"
                className="grid h-11 w-11 place-items-center rounded-full bg-gold text-ink transition hover:bg-golddark hover:text-white focus-visible:ring-2 focus-visible:ring-golddark/60"
              >
                <IconChevronR className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Swipe hint on mobile */}
          <p className="mt-2 text-[11px] text-mist md:hidden" aria-hidden="true">
            ← Swipe to explore →
          </p>

          {/* Carousel rail — swipe enabled */}
          <div
            ref={rail}
            role="list"
            aria-label="Featured artisans carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto pb-3 md:mt-10 md:gap-6"
          >
            {MASTERS.map((m) => (
              <article
                key={m.name}
                role="listitem"
                className="w-[280px] shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-18px_rgba(43,33,40,0.3)] sm:w-[300px] md:w-[340px]"
              >
                <div className="h-64 overflow-hidden bg-cream">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='256' viewBox='0 0 340 256'%3E%3Crect width='340' height='256' fill='%23f6f1e7'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-golddark">{m.role}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Stars />
                    <span className="text-[11.5px] text-body">5.0 Rating</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{m.text}</p>
                  <a
                    href="#/booking"
                    className="btn-gold mt-5 w-full !py-3"
                    aria-label={`Book appointment with ${m.name}`}
                  >
                    {m.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REAL RESULTS ============ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="results-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Aesthetic Transformations" title="Flawless Real Results" />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {/* Before Image */}
              <figure className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Client hair before keratin treatment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='760' height='900' viewBox='0 0 760 900'%3E%3Crect width='760' height='900' fill='%23f6f1e7'/%3E%3C/svg%3E";
                  }}
                />
                <figcaption className="absolute z-10 left-3 top-3 rounded-md bg-ink/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
                  Before Therapy
                </figcaption>
              </figure>
              
              {/* After Image */}
              <figure className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Client hair after luxury keratin treatment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='760' height='900' viewBox='0 0 760 900'%3E%3Crect width='760' height='900' fill='%23f6f1e7'/%3E%3C/svg%3E";
                  }}
                />
                <figcaption className="absolute z-10 left-3 top-3 rounded-md bg-gold px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink shadow-xl sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
                  After Luxury Treatment
                </figcaption>
              </figure>
            </div>
            <div>
              <h3
                id="results-heading"
                className="font-serif text-2xl font-bold leading-snug text-ink md:text-[32px]"
              >
                Premium Keratin Blowout &amp; Amino Acid Therapy
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-body">
                Witness the sublime rejuvenation. Designed specifically to eliminate humidity-related frizz, our
                non-formaldehyde botanical treatment rebuilds protein bonds to restore vibrant health, mirror-shine,
                and lightweight flow.
              </p>
              <ul className="mt-6 space-y-3" role="list" aria-label="Treatment benefits">
                {[
                  "Locks in hydration for up to 12 weeks",
                  "Saves up to 40 minutes of morning style time daily",
                  "Safe, certified botanical active formulation",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold text-gold" aria-hidden="true">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a href="#/service" className="btn-gold">Book This Therapy</a>
                <a href="#/gallery" className="btn-line">See More Transformations</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="testimonial-heading">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHead eyebrow="Client Adoration" title="Beloved by California's Discerning Elite" />
          
          <div className="mt-10 relative">
            <div className="overflow-hidden rounded-xl bg-white p-6 text-center shadow-[0_15px_45px_-20px_rgba(43,33,40,0.3)] sm:p-8 md:p-12 relative min-h-[380px] flex flex-col justify-center">
              
              <div 
                key={tIndex}
                className="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
              >
                <Stars count={(t as any).rating || 5} outline={false} starClass="w-5 h-5" className="justify-center gap-2 text-gold" />
                <blockquote
                  className="mx-auto mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink sm:text-xl md:text-[22px]"
                  cite="#"
                >
                  "{t.quote}"
                </blockquote>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <img
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Crect width='44' height='44' rx='22' fill='%23e5dbc9'/%3E%3C/svg%3E";
                    }}
                  />
                  <div className="text-left">
                    <p className="text-[13.5px] font-bold text-ink">{t.name}</p>
                    <p className="text-[11.5px] text-body">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevReview}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-cream text-golddark hover:bg-gold hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Previous testimonial"
              >
                <IconChevronL className="h-5 w-5" />
              </button>
              <button 
                onClick={handleNextReview}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-cream text-golddark hover:bg-gold hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Next testimonial"
              >
                <IconChevronR className="h-5 w-5" />
              </button>

            </div>

            {/* Bottom Controls */}
            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
              <button 
                onClick={() => setIsReviewModalOpen(true)}
                className="btn-line !py-2.5 !text-[11px]"
              >
                Leave a Review
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3" role="tablist">
                {reviews.map((item, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === tIndex}
                    aria-label={`View testimonial from ${item.name}`}
                    onClick={() => setTIndex(i)}
                    className="flex min-h-[40px] min-w-[24px] items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  >
                    <span
                      className={cn(
                        "block rounded-full transition-all duration-300",
                        i === tIndex ? "h-2.5 w-8 bg-gold" : "h-2 w-2 bg-line hover:bg-gold/50"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STORIES GRID ============ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="stories-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <Eyebrow>Curated Style Feed</Eyebrow>
              <h2
                id="stories-heading"
                className="mt-3 font-serif text-2xl font-bold text-ink sm:text-3xl md:text-[38px]"
              >
                Stories of Bespoke Elegance
              </h2>
            </div>
            <a href="#/gallery" className="btn-line !py-3">Follow @LuxeHavenBeverlyHills</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {STORIES.map((s, i) => (
              <div
                key={i}
                className="group aspect-square overflow-hidden rounded-lg bg-cream"
              >
                <img
                  src={s}
                  alt={`Luxe Haven bespoke style story ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23f6f1e7'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUBSCRIBE ============ */}
      <section className="bg-cream pb-20 pt-6" aria-labelledby="newsletter-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-white p-6 shadow-[0_15px_45px_-25px_rgba(43,33,40,0.4)] sm:p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-md">
              <Eyebrow>Privileged Community</Eyebrow>
              <h3
                id="newsletter-heading"
                className="mt-3 font-serif text-2xl font-bold text-ink md:text-[30px]"
              >
                Subscribe to the Haven Journal
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-body">
                Receive exclusive seasonal menus, prioritized early booking codes for Beverly Hills slots, and
                masterclasses from our master stylists.
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              <form
                className="flex gap-2 sm:gap-3"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter subscription form"
              >
                <div className="relative flex-1">
                  <IconMail
                    className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="input-luxe !pl-10"
                    aria-label="Email address"
                  />
                </div>
                <button type="submit" className="btn-gold !px-5 sm:!px-6">Subscribe</button>
              </form>
              <p className="mt-3 text-[11px] text-mist">
                We respect your privacy. Opt-out of the haven updates at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============ REVIEW MODAL ============ */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-ink p-6 md:p-8 border border-gold/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute right-4 top-4 text-line hover:text-gold transition-colors"
            >
              <IconX className="h-6 w-6" />
            </button>
            <h3 className="font-serif text-2xl text-gold">Share Your Experience</h3>
            <p className="mt-2 text-[13px] text-body">We value your feedback and adore hearing from our clients.</p>
            
            <form onSubmit={handleReviewSubmit} className="mt-6 flex flex-col gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm(p => ({ ...p, rating: star }))}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <IconStar 
                        className={cn("h-7 w-7 transition-colors duration-200", star <= (hoverRating || reviewForm.rating) ? "text-gold" : "text-line")}
                        filled={star <= (hoverRating || reviewForm.rating)} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Name</label>
                  <input 
                    required
                    type="text"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-md border border-line/10 bg-white/5 px-4 py-2.5 text-[13px] text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Role / City</label>
                  <input 
                    type="text"
                    value={reviewForm.role}
                    onChange={(e) => setReviewForm(p => ({ ...p, role: e.target.value }))}
                    className="w-full rounded-md border border-line/10 bg-white/5 px-4 py-2.5 text-[13px] text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="e.g. VIP Member"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Your Review</label>
                <textarea 
                  required
                  rows={4}
                  value={reviewForm.quote}
                  onChange={(e) => setReviewForm(p => ({ ...p, quote: e.target.value }))}
                  className="w-full resize-none rounded-md border border-line/10 bg-white/5 px-4 py-3 text-[13px] text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Tell us about your flawless experience..."
                />
              </div>

              <button type="submit" className="btn-gold mt-2 w-full justify-center">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
