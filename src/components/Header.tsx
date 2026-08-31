import { useState } from "react";
import { cn } from "../utils/cn";
import { IconClock, IconMenu, IconPin, IconSparkle, IconWhatsApp, IconX } from "./icons";

const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Booking", path: "/booking" },
  { label: "Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Bridal", path: "/bridal" },
  { label: "Membership", path: "/membership" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

export default function Header({ route }: { route: string }) {
  const [open, setOpen] = useState(false);

  const isActive = (item: (typeof NAV)[number]) => item.path === route;

  return (
    <header className="sticky top-0 z-50">
      {/* announcement bar */}
      <div className="bg-gold text-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 md:px-8">
          <p className="flex min-w-0 items-center gap-2 text-[11.5px] font-medium tracking-wide">
            <IconSparkle className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">
              EID SPECIAL OFFER: Enjoy 20% off all luxury spa packages &amp; customized bridal hair therapy. Limited slots!
            </span>
          </p>
          <a href="#/booking" className="shrink-0 text-[11.5px] font-semibold tracking-wide hover:underline">
            Book Slot Now <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* info bar */}
      <div className="hidden border-b border-white/5 bg-[#2a2028] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5 text-[11px] text-white/60 md:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <IconPin className="h-3.5 w-3.5 text-gold" /> DHA Phase 5, Lahore, Pakistan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="h-3.5 w-3.5 text-gold" /> Mon - Sun: 11:00 AM - 9:00 PM
            </span>
          </div>
          <p>
            <span className="text-gold">Call Us:</span> <a href="tel:+924235123456" className="hover:text-gold">+92 42 35123456</a>
          </p>
        </div>
      </div>

      {/* main nav */}
      <div className="bg-coal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#/" className="leading-none">
            <span className="font-serif block text-[22px] font-bold tracking-[0.12em] text-gold">LUXE HAVEN</span>
            <span className="mt-1 block text-[8.5px] font-medium tracking-[0.42em] text-white/50">SALON &amp; SPA</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                className={cn(
                  "border-b-2 pb-0.5 text-[12.5px] tracking-wide transition-colors",
                  isActive(item)
                    ? "border-gold text-gold"
                    : "border-transparent text-white/70 hover:text-gold"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#/booking"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-emerald-400 transition hover:bg-gold hover:text-ink"
            >
              <IconWhatsApp className="h-4 w-4" />
            </a>
            <a href="#/booking" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
              Book Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-9 w-9 place-items-center rounded-md text-white/80 hover:text-gold xl:hidden"
              aria-label="Menu"
            >
              {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="border-t border-white/10 bg-coal px-5 pb-5 pt-2 xl:hidden">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block border-b border-white/5 py-2.5 text-[13px] tracking-wide",
                  isActive(item) ? "text-gold" : "text-white/70"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
