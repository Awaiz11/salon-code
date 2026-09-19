import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/shared";
import { IconClock } from "../components/icons";
import { IMG, SERVICE_TABS } from "../data";

export default function Services() {
  const [tab, setTab] = useState("hair");
  const active = SERVICE_TABS.find((t) => t.id === tab)!;
  const panelId = "service-tab-panel";

  // Listen for hash changes to sync tab state with URL query parameters (e.g. ?tab=nail)
  useEffect(() => {
    const handleHash = () => {
      const match = window.location.hash.match(/\?tab=([^&]*)/);
      if (match && match[1]) {
        const tabId = match[1];
        if (SERVICE_TABS.some((t) => t.id === tabId)) {
          setTab(tabId);
          // Small timeout ensures the DOM has re-rendered the new tab content before scrolling
          setTimeout(() => {
            document.getElementById(panelId)?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }
      }
    };
    handleHash(); // check on mount
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      {/* intro */}
      <section className="bg-white pb-10 pt-16 text-center md:pt-24" aria-labelledby="services-page-heading">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead
            eyebrow="Our Curation"
            title="The Treatment Portfolio"
            sub="Curated premium beauty experiences tailored specifically to reveal your magnificent aura."
          />
        </div>
      </section>

      {/* ── Tab bar — sticky, with full ARIA tab roles ── */}
      <div
        className="sticky top-[92px] z-30 border-y border-line bg-white/95 backdrop-blur-sm md:top-[122px]"
        role="tablist"
        aria-label="Service categories"
      >
        <div className="no-scrollbar mx-auto flex max-w-7xl overflow-x-auto px-4 sm:px-5 md:justify-center md:px-8">
          {SERVICE_TABS.map((t) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={panelId}
              onClick={() => setTab(t.id)}
              className={cn(
                "shrink-0 border-b-2 px-3 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold sm:px-4 sm:py-4",
                /* min-h-[44px] guaranteed by py-3.5 + text line height ≈ 20px = 47px total */
                tab === t.id
                  ? "border-gold text-golddark"
                  : "border-transparent text-body hover:text-golddark"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Service cards ── */}
      <section
        id={panelId}
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="scroll-mt-[150px] bg-cream py-14 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {active.items.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-20px_rgba(43,33,40,0.35)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(43,33,40,0.4)]"
              >
                <div className="h-52 overflow-hidden bg-cream">
                  <img
                    src={s.img}
                    alt={`${s.title} — ${s.time}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='520' viewBox='0 0 700 520'%3E%3Crect width='700' height='520' fill='%23f6f1e7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='13' fill='%23a9a093' font-family='sans-serif'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[12px] text-body">
                      <IconClock className="h-3.5 w-3.5 text-golddark" aria-hidden="true" />
                      <span>{s.time}</span>
                    </span>
                    <span className="text-[13px] font-bold tracking-wide text-golddark">{s.price}</span>
                  </div>
                  <h3 className="font-serif mt-3 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-body">{s.text}</p>
                  <a
                    href="#/booking"
                    className="btn-gold mt-5 w-full !py-3"
                    aria-label={`Book ${s.title} session — ${s.price}`}
                  >
                    Book Session Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guidance CTA (dark) ── */}
      <section className="bg-ink py-16 md:py-24" aria-labelledby="guidance-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow">Bespoke Guidance</p>
            <h2
              id="guidance-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-[40px]"
            >
              Unsure of What Your Skin or Hair Needs?
            </h2>
            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-white/65">
              Schedule a complimentary 15-minute diagnostic profile session with our certified specialists. We analyze
              scalp moisture density, skin hydration profiles, and custom contouring matches for your special event.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a href="#/booking" className="btn-gold">Book Free Consultation</a>
              <a href="#/team" className="btn-line-light">Call Skincare Expert</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={IMG.guidanceRoom}
              alt="Luxe Haven private diagnostic suite"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1100' height='800' viewBox='0 0 1100 800'%3E%3Crect width='1100' height='800' fill='%23f6f1e7'/%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
