import { useState } from "react";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/shared";
import {
  IconArrowR,
  IconMail,
  IconMinus,
  IconPhone,
  IconPin,
  IconPlus,
  IconSearch,
} from "../components/icons";
import { ARTICLES, FAQS } from "../data";

function FakeMap() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line">
      <svg viewBox="0 0 640 460" className="block h-auto w-full bg-[#cfe5dc]">
        {/* water */}
        <path d="M0 340 Q160 300 320 350 T640 330 V460 H0 Z" fill="#a8d3e0" opacity="0.7" />
        {/* park */}
        <rect x="60" y="60" width="120" height="90" rx="10" fill="#b8dcc4" />
        <rect x="440" y="240" width="130" height="80" rx="10" fill="#b8dcc4" />
        {/* blocks */}
        {[
          [200, 40, 90, 60], [310, 40, 70, 60], [200, 130, 90, 70], [310, 130, 150, 70],
          [60, 190, 100, 80], [200, 240, 90, 60], [310, 240, 70, 60], [440, 60, 100, 120],
          [60, 300, 100, 60], [440, 350, 130, 50], [200, 330, 180, 50],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="#b5d6c9" stroke="#ffffff" strokeWidth="2" />
        ))}
        {/* streets */}
        <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
          <line x1="0" y1="115" x2="640" y2="115" />
          <line x1="0" y1="222" x2="640" y2="222" />
          <line x1="0" y1="315" x2="640" y2="315" />
          <line x1="180" y1="0" x2="180" y2="460" />
          <line x1="300" y1="0" x2="300" y2="460" />
          <line x1="430" y1="0" x2="430" y2="460" />
        </g>
        {/* highlighted route */}
        <path d="M180 0 L180 115 L300 115 L300 222 L430 222" fill="none" stroke="#f2c14e" strokeWidth="6" strokeDasharray="14 10" strokeLinecap="round" />
        {/* pin */}
        <g transform="translate(430 222)">
          <circle cx="0" cy="0" r="16" fill="#c3a05f" opacity="0.35" />
          <circle cx="0" cy="0" r="7" fill="#c3a05f" stroke="#fff" strokeWidth="2.5" />
        </g>
      </svg>
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/95 px-4 py-2 text-[11px] font-medium text-white shadow-lg">
        <IconPin className="h-3.5 w-3.5 text-gold" /> Beverly Hills, CA
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10.5px] text-ink shadow">
        <IconSearch className="h-3 w-3 text-body" /> 450 N Canon Dr, Beverly Hills
      </div>
    </div>
  );
}

export default function Journal() {
  const [open, setOpen] = useState<string | null>(FAQS[0].items[0].q);

  return (
    <>
      {/* articles */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHead eyebrow="The Haven Journal" title="Aesthetic Journeys & Wisdom" />
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {ARTICLES.map((a) => (
              <article
                key={a.title}
                className="group overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_35px_-26px_rgba(43,33,40,0.5)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(43,33,40,0.5)]"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-golddark">
                      {a.tag}
                    </span>
                    <span className="text-[11px] text-mist">{a.date}</span>
                  </div>
                  <h3 className="font-serif mt-4 text-xl font-bold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{a.text}</p>
                  <a
                    href="#/journal"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-golddark hover:text-gold"
                  >
                    Read Full Article <IconArrowR className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (dark) */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHead eyebrow="Clarify Your Concerns" title="Frequently Asked Questions" light />
          <div className="mt-12 space-y-8">
            {FAQS.map((g) => (
              <div key={g.group}>
                <p className="eyebrow">{g.group}</p>
                <div className="mt-4 space-y-3">
                  {g.items.map((f) => {
                    const isOpen = open === f.q;
                    return (
                      <div key={f.q} className={cn("overflow-hidden rounded-lg border", isOpen ? "border-gold/50 bg-cocoa/60" : "border-white/12 bg-cocoa/30")}>
                        <button
                          onClick={() => setOpen(isOpen ? null : f.q)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className={cn("text-[13.5px] font-semibold", isOpen ? "text-gold" : "text-white")}>
                            {f.q}
                          </span>
                          <span className="text-gold">
                            {isOpen ? <IconMinus className="h-4 w-4" /> : <IconPlus className="h-4 w-4" />}
                          </span>
                        </button>
                        {isOpen && (
                          <p className="px-5 pb-5 text-[13px] leading-relaxed text-white/60">{f.a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-[38px]">Visit Our Sanctuary</h2>
            <span className="mt-4 block h-px w-14 bg-gold" />

            <ul className="mt-8 space-y-5 text-[13.5px]">
              <li className="flex gap-4">
                <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-golddark" />
                <div>
                  <p className="font-semibold text-ink">Address</p>
                  <p className="mt-0.5 text-body">450 N Canon Dr, Beverly Hills, CA 90210, USA</p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconPhone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-golddark" />
                <div>
                  <p className="font-semibold text-ink">Phone &amp; Concierge</p>
                  <p className="mt-0.5 text-body">+1 (310) 555-0199 | +1 (310) 555-0144</p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconMail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-golddark" />
                <div>
                  <p className="font-semibold text-ink">Email Address</p>
                  <p className="mt-0.5 text-body">hello@luxehaven.com</p>
                </div>
              </li>
            </ul>

            <div className="mt-9 rounded-xl bg-white p-6 shadow-[0_18px_45px_-30px_rgba(43,33,40,0.5)] md:p-7">
              <h3 className="font-serif text-xl font-bold text-ink">Send a Message</h3>
              <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-body">
                    Full Name
                  </label>
                  <input className="input-luxe" placeholder="Victoria Sterling" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-body">
                    Email Address
                  </label>
                  <input type="email" className="input-luxe" placeholder="zainab@example.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-body">
                    Message
                  </label>
                  <textarea rows={4} className="input-luxe resize-none" placeholder="Inquiring about membership benefits…" />
                </div>
                <button type="submit" className="btn-gold w-full !py-4">Send Message</button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <FakeMap />
            <div className="rounded-xl bg-white p-6 shadow-[0_18px_45px_-30px_rgba(43,33,40,0.5)] md:p-7">
              <h3 className="font-serif text-lg font-bold text-ink">Valet &amp; Access Details</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-body">
                Complimentary premium valet parking is available directly in front of Building 44-CCA. Safe ramp
                access is prepared for wheelchair entry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
