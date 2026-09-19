import { IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconTwitter, IconYoutube } from "./icons";

const SOCIALS = [
  { Icon: IconInstagram, label: "Follow Luxe Haven on Instagram", href: "https://instagram.com" },
  { Icon: IconFacebook,  label: "Follow Luxe Haven on Facebook",  href: "https://facebook.com" },
  { Icon: IconYoutube,   label: "Subscribe to Luxe Haven on YouTube", href: "https://youtube.com" },
  { Icon: IconTwitter,   label: "Follow Luxe Haven on Twitter / X", href: "https://twitter.com" },
];

const quick = [
  { label: "About Our Journey",     href: "#/about"      },
  { label: "Meet the Experts",      href: "#/team"       },
  { label: "Bridal Packages",       href: "#/bridal"     },
  { label: "Exclusive Memberships", href: "#/membership" },
  { label: "Our Journal",           href: "#/journal"    },
  { label: "Client Testimonials",   href: "#/"           },
];

const services = [
  { label: "Premium Hair Styling",        href: "#/services" },
  { label: "Luxury Nail Artistry",        href: "#/services" },
  { label: "Calming Spa Therapies",       href: "#/services" },
  { label: "Advanced Skincare",           href: "#/services" },
  { label: "Bespoke Bridal Styling",      href: "#/bridal" },
  { label: "Organic Botanical Pedicures", href: "#/services" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#c3a05f57] bg-ink text-white/60" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.25fr_0.85fr_0.95fr_1.15fr]">

          {/* Brand column */}
          <div>
            <p className="font-serif text-2xl font-bold tracking-[0.1em] text-gold">LUXE HAVEN</p>
            <p className="mt-1 text-[9px] font-medium tracking-[0.4em] text-white/40">SALON &amp; SPA</p>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed">
              Beverly Hills' sanctuary of bespoke elegance, where timeless artistry meets state-of-the-art beauty innovations.
              Experience hair, skin, and bridal refinement like never before.
            </p>
            {/* Social links — 44px touch targets */}
            <nav aria-label="Social media links" className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h4 className="font-serif text-lg font-bold text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-2.5" role="list">
              {quick.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services links */}
          <nav aria-label="Services">
            <h4 className="font-serif text-lg font-bold text-gold">Our Services</h4>
            <ul className="mt-5 space-y-2.5" role="list">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[13px] transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-serif text-lg font-bold text-gold">Contact &amp; Location</h4>
            <ul className="mt-5 space-y-4 text-[13px]" role="list">
              <li className="flex gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=450+N+Canon+Dr,+Beverly+Hills,+CA+90210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  450 N Canon Dr, Beverly Hills, CA 90210, USA
                </a>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <a
                    href="tel:+13105550199"
                    className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    +1 (310) 555-0199
                  </a>
                  <span className="mx-1.5 text-white/25" aria-hidden="true">|</span>
                  <a
                    href="tel:+13105550144"
                    className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    +1 (310) 555-0144
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="mailto:appointments@luxehaven.com"
                  className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  appointments@luxehaven.com
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-[11px] text-white/40 md:flex-row md:px-8">
          <p>© 2026 Luxe Haven Salon &amp; Spa. All Rights Reserved.</p>
          <nav aria-label="Legal links" className="flex gap-5">
            <a href="#/privacy" className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Privacy Policy</a>
            <a href="#/terms" className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">Terms of Service</a>
            <a href="#/" className="transition-colors duration-300 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">HIPAA &amp; Safety</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
