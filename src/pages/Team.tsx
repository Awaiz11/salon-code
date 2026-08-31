import { PageHero, SectionHead } from "../components/shared";
import { IconStar } from "../components/icons";
import { IMG, TEAM } from "../data";

const SPOT_THUMBS = [IMG.spotThumb1, IMG.spotThumb2, IMG.spotThumb3, IMG.spotThumb4];
const SLOTS = ["11:30 AM", "01:00 PM", "03:30 PM", "06:00 PM"];

export default function Team() {
  return (
    <>
      <PageHero
        title="Meet Our Experts"
        sub="The creative visionaries and master technicians dedicated to elevating your signature aesthetic at Luxe Haven Beverly Hills."
        image={IMG.membershipHero}
        center
      />

      {/* grid */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Our Elite Artisans" title="Master Stylists & Therapists" />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article
                key={m.name}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-22px_rgba(43,33,40,0.4)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(43,33,40,0.45)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-golddark">{m.role}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] text-body">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <IconStar className="h-4 w-4 text-gold" />
                    <span className="text-[12px] font-semibold text-body">{m.rating} Rating</span>
                  </div>
                  <a href="#/booking" className="btn-gold mt-5 w-full !py-3">View Profile &amp; Book</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* spotlight */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Artisan Spotlight" title="Meet Sarah Jenkins" />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-xl shadow-[0_25px_60px_-28px_rgba(43,33,40,0.5)]">
              <img src={IMG.spotlight} alt="Sarah Jenkins" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-ink md:text-[32px]">Master of Balayage &amp; French Cuts</h3>
              <p className="mt-5 text-[14px] leading-relaxed text-body">
                Sarah Jenkins brings over a decade of international training from Paris and New York to Beverly Hills. Specializing in advanced
                hair transformation, she is renowned for her precise color blending that enhances natural hair
                patterns with absolute bond protection.
              </p>

              <p className="eyebrow mt-9">Sarah's Recent Creations</p>
              <div className="mt-4 flex gap-3">
                {SPOT_THUMBS.map((t, i) => (
                  <div key={i} className="h-16 w-16 overflow-hidden rounded-lg">
                    <img src={t} alt="Recent creation" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>

              <p className="eyebrow mt-9">Sarah's Next Available Slots (Today)</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {SLOTS.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-gold/60 bg-white px-4 py-2 text-[12.5px] font-medium text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a href="#/booking" className="btn-gold mt-9">Book with Sarah</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
