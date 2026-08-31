import { PageHero, SectionHead } from "../components/shared";
import { ICONS } from "../components/icons";
import { IMG } from "../data";

const PILLS = [
  { icon: "award", title: "Aesthetic Excellence", text: "We pursue perfection. From clean nail geometry to absolute balayage transition blends, we set uncompromising standards." },
  { icon: "gem", title: "Artisanal Craft", text: "Deeply respectful of timeless techniques. We formulate specialized treatments optimized for every hair texture and couture bridal styling." },
  { icon: "leaf", title: "Holistic Wellness", text: "Beauty is not skin-deep. We incorporate customized therapeutic aromatherapy and clean scalp detoxification into every salon service." },
];

const CURATORS = [
  { img: IMG.aboutAmna, name: "Elena Vance", role: "Creative Director" },
  { img: IMG.aboutYousuf, name: "Marcus Hayes", role: "Master Hair Colorist" },
  { img: IMG.aboutMaria, name: "Dr. Maria Ross", role: "Aesthetic Skin Specialist" },
  { img: IMG.aboutRina, name: "Chloe Bennett", role: "Nail Art Curator" },
];

const BRANDS = ["Kérastase", "Olaplex", "OPI", "Dermalogica", "Dyson"];

const STATS = [
  { n: "5,000+", l: "Elegantly Served Clients" },
  { n: "15+", l: "Global Master Stylists" },
  { n: "50+", l: "Industry & Style Accolades" },
  { n: "100%", l: "Clean & Sterile Guarantee" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The Legend of Luxury"
        title="Our Story & Philosophy"
        sub="Founded on the ideals of grace, wellness, and uncompromised quality, Luxe Haven has pioneered standard-setting holistic beauty care in Southern California."
        image={IMG.aboutHero}
      />

      {/* story */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-[0_25px_60px_-25px_rgba(43,33,40,0.4)]">
            <img src={IMG.aboutReception} alt="Luxe Haven reception" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Established 2018</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink md:text-[38px]">
              Bespoke Sanctuary in the Heart of Beverly Hills
            </h2>
            <p className="mt-6 text-[14px] leading-relaxed text-body">
              Founded in 2018 in the iconic neighborhood of Beverly Hills, California, Luxe Haven was conceived by
              visionaries who sought to elevate salon experiences into deeply restorative journeys.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-body">
              We noticed a gap in the beauty space — while salons provided quick appointments, they rarely cultivated peace. We
              designed Luxe Haven to be a serene sanctuary from the metropolitan hum. Today, we are proud to serve over
              5,000 esteemed clients, providing medical-grade cleanliness paired with the
              timeless luxury of authentic botanical rituals.
            </p>
            <div className="mt-8 flex items-center gap-10">
              <div>
                <p className="font-serif text-3xl font-bold text-gold">8 Years+</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-body">Of Aesthetic Craft</p>
              </div>
              <span className="h-10 w-px bg-line" />
              <div>
                <p className="font-serif text-3xl font-bold text-gold">100%</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-body">Clean &amp; Safe Methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Our Core Pillars" title="What Guides Our Sanctuary" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLS.map((p) => {
              const Icon = ICONS[p.icon];
              return (
                <div key={p.title} className="rounded-xl border border-line bg-cream/60 p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(43,33,40,0.35)]">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-golddark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif mt-6 text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-body">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* curators */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHead eyebrow="The Artists" title="Meet Our Exceptional Curators" />
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {CURATORS.map((c) => (
              <figure key={c.name} className="text-center">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-gold ring-offset-4 ring-offset-cream md:h-32 md:w-32">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                </div>
                <figcaption className="font-serif mt-5 text-lg font-bold text-ink">{c.name}</figcaption>
                <p className="mt-1 text-[12px] text-body">{c.role}</p>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#/team" className="btn-line">Meet the Full Team</a>
          </div>
        </div>
      </section>

      {/* brands */}
      <section className="border-y border-line bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.3em] text-mist">
            We exclusively formulate with premium brands
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-14 gap-y-5">
            {BRANDS.map((b) => (
              <span key={b} className="font-serif text-xl tracking-[0.08em] text-[#b3a99b] md:text-2xl">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-gold py-14 text-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4 md:px-8">
          {STATS.map((s) => (
            <div key={s.l}>
              <p className="font-serif text-4xl font-bold md:text-5xl">{s.n}</p>
              <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.2em]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-serif text-3xl font-bold text-white md:text-[40px]">Experience Sublime Luxury</h2>
          <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-white/65">
            Reserve your priority appointment today in Beverly Hills, CA. Enjoy customized consultation and zero waiting
            times.
          </p>
          <a href="#/booking" className="btn-gold mt-9">Book Your Visit Today</a>
        </div>
      </section>
    </>
  );
}
