import { useState } from "react";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/shared";
import { IconClock } from "../components/icons";
import { IMG, SERVICE_TABS } from "../data";

export default function Services() {
  const [tab, setTab] = useState("hair");
  const active = SERVICE_TABS.find((t) => t.id === tab)!;

  return (
    <>
      {/* intro */}
      <section className="bg-white pt-20 pb-10 text-center md:pt-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead
            eyebrow="Our Curation"
            title="The Treatment Portfolio"
            sub="Curated premium beauty experiences tailored specifically to reveal your magnificent aura."
          />
        </div>
      </section>

      {/* tabs */}
      <div className="sticky top-[100px] z-30 border-y border-line bg-white/95 backdrop-blur md:top-[130px]">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-8 overflow-x-auto px-5 md:justify-center md:gap-12 md:px-8">
          {SERVICE_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "shrink-0 border-b-2 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                tab === t.id ? "border-gold text-golddark" : "border-transparent text-body hover:text-golddark"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* cards */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {active.items.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-20px_rgba(43,33,40,0.35)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(43,33,40,0.4)]"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[12px] text-body">
                      <IconClock className="h-3.5 w-3.5 text-golddark" /> {s.time}
                    </span>
                    <span className="text-[13px] font-bold tracking-wide text-golddark">{s.price}</span>
                  </div>
                  <h3 className="font-serif mt-3 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-body">{s.text}</p>
                  <a href="#/booking" className="btn-gold mt-6 w-full !py-3">Book Session Now</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* guidance (dark) */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Bespoke Guidance</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-[40px]">
              Unsure of What Your Skin or Hair Needs?
            </h2>
            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-white/65">
              Schedule a complimentary 15-minute diagnostic profile session with our certified specialists. We analyze
              scalp moisture density, skin hydration profiles, and custom contouring matches for your special event.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#/booking" className="btn-gold">Book Free Consultation</a>
              <a href="#/team" className="btn-line-light">Call Skincare Expert</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={IMG.guidanceRoom} alt="Diagnostic suite" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
