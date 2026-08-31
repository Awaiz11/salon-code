import { useState } from "react";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/shared";
import { GALLERY } from "../data";

const FILTERS = ["All", "Hair Transformations", "Nail Art", "Bridal", "Spa", "Makeup"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const items = GALLERY.filter((g) => filter === "All" || g.cat === filter);

  return (
    <>
      <section className="bg-white pb-10 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead
            eyebrow="Visual Inspirations"
            title="Our Portfolio"
            sub="A showcase of pristine hair transformations, majestic bridal updates, precise nail art, and peaceful spa moments at Luxe Haven."
          />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 px-5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-[12px] font-medium tracking-wide transition",
                filter === f
                  ? "border-gold bg-gold text-ink font-semibold"
                  : "border-line bg-white text-body hover:border-gold hover:text-golddark"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="columns-2 gap-5 md:columns-3 [&>*]:mb-5">
            {items.map((g, i) => (
              <figure key={i} className="group break-inside-avoid overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_-24px_rgba(43,33,40,0.45)]">
                <div className="overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.label}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-golddark">{g.label}</p>
                  <p className="mt-1 text-[12.5px] text-ink">{g.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-line">Load More Creations</button>
          </div>
        </div>
      </section>
    </>
  );
}
