import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { IconClock, IconMenu, IconPin, IconSparkle, IconWhatsApp, IconX } from "./icons";

const NAV = [
  { label: "Home",       path: "/" },
  { label: "About",      path: "/about" },
  { label: "Services",   path: "/services" },
  { label: "Booking",    path: "/booking" },
  { label: "Team",       path: "/team" },
  { label: "Gallery",    path: "/gallery" },
  { label: "Bridal",     path: "/bridal" },
  { label: "Membership", path: "/membership" },
  { label: "Journal",    path: "/journal" },
  { label: "Profile",    path: "/profile" },
  { label: "Contact",    path: "/contact" },
];

export default function Header({ route }: { route: string }) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef             = useRef<HTMLElement>(null);

  const isActive = (item: (typeof NAV)[number]) => item.path === route;

  /* ── Scroll listener: activate frosted-glass effect after 10px ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    // Set initial state (e.g. if page loads already scrolled)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <header
      ref={headerRef}
      role="banner"
      /* fixed — bypasses overflow-x:hidden on body/html which kills sticky. */
      className={cn(
        "fixed inset-x-0 top-0 transition-all duration-300",
        open ? "z-50" : "z-30",
        scrolled
          ? "shadow-[0_4px_24px_-6px_rgba(43,33,40,0.55)] backdrop-blur-md"
          : "shadow-none backdrop-blur-none"
      )}
    >
      {/* ── Announcement bar ── */}
      <div
        className={cn(
          "bg-gold text-ink transition-all duration-300",
          /* Collapse announcement bar after scroll to save vertical space */
          scrolled ? "max-h-0 overflow-hidden py-0 opacity-0" : "max-h-16 py-2 opacity-100"
        )}
        role="complementary"
        aria-label="Promotional announcement"
        aria-hidden={scrolled}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-5 md:px-8">
          <p className="flex min-w-0 items-center gap-2 text-[11px] font-medium tracking-wide sm:text-[11.5px]">
            <IconSparkle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              EXCLUSIVE OFFER: Enjoy 20% off all signature luxury spa packages &amp; bespoke bridal hair therapy. Limited slots!
            </span>
          </p>
          <a
            href="#/booking"
            className="shrink-0 text-[11px] font-semibold tracking-wide hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/70 sm:text-[11.5px]"
            aria-label="Book a slot now — limited availability"
          >
            Book Slot Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* ── Info bar (md+, visible only when NOT scrolled) ── */}
      <div
        className={cn(
          "hidden border-b border-white/5 bg-[#2a2028] transition-all duration-300 md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0 py-0" : "max-h-10 py-1.5 opacity-100"
        )}
        aria-hidden="true"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-[11px] text-white/60 md:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <IconPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> 450 N Canon Dr, Beverly Hills, CA 90210
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> Mon - Sun: 9:00 AM – 8:00 PM
            </span>
          </div>
          <p>
            <span className="text-gold">Call Us:</span>{" "}
            <a
              href="tel:+13105550199"
              className="hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              +1 (310) 555-0199
            </a>
          </p>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div
        className={cn(
          "transition-colors duration-300",
          /* When scrolled: coal + frosted glass overlay for premium feel */
          scrolled ? "bg-coal/95" : "bg-coal"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 md:px-8">
          {/* Logo */}
          <a href="#/" className="leading-none" aria-label="Luxe Haven — Home">
            <span className="font-serif block text-[20px] font-bold tracking-[0.12em] text-gold sm:text-[22px]">
              LUXE HAVEN
            </span>
            <span className="mt-0.5 block text-[8px] font-medium tracking-[0.42em] text-white/50 sm:text-[8.5px]">
              SALON &amp; SPA
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                aria-current={isActive(item) ? "page" : undefined}
                className={cn(
                  "rounded-sm border-b-2 pb-0.5 text-[12.5px] tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                  isActive(item)
                    ? "border-gold text-gold"
                    : "border-transparent text-white/70 hover:text-gold"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp — 44px touch target */}
            <a
              href="#/booking"
              aria-label="Contact us on WhatsApp to book"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-emerald-400 transition hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <IconWhatsApp className="h-4 w-4" aria-hidden="true" />
            </a>

            {/* Book Now CTA */}
            <a href="#/booking" className="btn-gold hidden !px-4 !py-2.5 sm:inline-flex md:!px-5">
              Book Now
            </a>

            {/* Hamburger — 44px touch target */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="grid h-11 w-11 place-items-center rounded-md text-white/80 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold xl:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open
                ? <IconX    className="h-5 w-5" aria-hidden="true" />
                : <IconMenu className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ──
            Uses max-height animation instead of conditional rendering so the
            menu slides in/out smoothly and never breaks fixed positioning.
            overflow-y-auto ensures very long menus scroll within the viewport. */}
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          className={cn(
            "overflow-hidden border-t border-white/10 bg-coal transition-all duration-300 ease-in-out xl:hidden",
            open
              ? "max-h-[70vh] overflow-y-auto opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pb-5 pt-2 sm:px-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                aria-current={isActive(item) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-[44px] items-center border-b border-white/5 text-[13px] tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  isActive(item) ? "text-gold" : "text-white/70 hover:text-gold"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
