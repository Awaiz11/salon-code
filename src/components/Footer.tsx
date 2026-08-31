import { IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconTwitter, IconYoutube } from "./icons";

const quick = [
  { label: "About Our Journey", href: "#/about" },
  { label: "Meet the Experts", href: "#/team" },
  { label: "Bridal Packages", href: "#/bridal" },
  { label: "Exclusive Memberships", href: "#/membership" },
  { label: "Our Journal", href: "#/journal" },
  { label: "Client Testimonials", href: "#/" },
];

const services = [
  "Premium Hair Styling",
  "Luxury Nail Artistry",
  "Calming Spa Therapies",
  "Advanced Skincare",
  "Bespoke Bridal Styling",
  "Organic Botanical Pedicures",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#c3a05f57] bg-ink text-white/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.95fr_1.15fr]">
          <div>
            <p className="font-serif text-2xl font-bold tracking-[0.1em] text-gold">LUXE HAVEN</p>
            <p className="mt-1 text-[9px] font-medium tracking-[0.4em] text-white/40">SALON &amp; SPA</p>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed">
              Beverly Hills' sanctuary of bespoke elegance, where timeless artistry meets state-of-the-art beauty innovations.
              Experience hair, skin, and bridal refinement like never before.
            </p>
            <div className="mt-6 flex gap-3">
              {[IconInstagram, IconFacebook, IconYoutube, IconTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#/"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] transition hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-gold">Our Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#/services" className="text-[13px] transition hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-gold">Contact &amp; Location</h4>
            <ul className="mt-5 space-y-4 text-[13px]">
              <li className="flex gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>450 N Canon Dr, Beverly Hills, CA 90210, USA</span>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  +1 (310) 555-0199 <span className="text-white/25">|</span> +1 (310) 555-0144
                </span>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:appointments@luxehaven.com" className="transition hover:text-gold">
                  appointments@luxehaven.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[11px] text-white/40 md:flex-row md:px-8">
          <p>© 2026 Luxe Haven Salon &amp; Spa. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#/" className="hover:text-gold">Privacy Policy</a>
            <a href="#/" className="hover:text-gold">Terms of Service</a>
            <a href="#/" className="hover:text-gold">HIPAA &amp; Safety Protocols</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
