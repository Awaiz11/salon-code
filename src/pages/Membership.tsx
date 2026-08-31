import { useState } from "react";
import { cn } from "../utils/cn";
import { PageHero, SectionHead } from "../components/shared";
import { IconCheck, IconGem } from "../components/icons";
import { IMG, MEMBERSHIP_TIERS } from "../data";

const GIFT_VALUES = ["PKR 5,000", "PKR 10,000", "PKR 25,000", "Custom Value"];

const HOW = [
  { n: "01", title: "Choose Amount", text: "Select one of our preset luxury experience packages or specify your bespoke custom PKR amount directly." },
  { n: "02", title: "Personalize Message", text: "Incorporate a tailored message for weddings, anniversaries, or traditional Eid sharing, choosing a template style." },
  { n: "03", title: "Send Instantly", text: "Dispatch directly via elegant email notification or request our physical premium custom gold-foiled card delivered to their doorstep." },
];

export default function Membership() {
  const [gift, setGift] = useState("PKR 10,000");
  const amount = gift === "Custom Value" ? "PKR —" : gift;

  return (
    <>
      <PageHero
        title="Exclusive Membership & Gift Cards"
        sub="Gain priority privileges inside Lahore's premium sanctuary. Tailored wellness monthly programs and magnificent gold-foiled sharing packages."
        image={IMG.membershipHero}
      />

      {/* tiers */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Monthly Packages" title="Select Your Aesthetic tier" />
          <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
            {MEMBERSHIP_TIERS.map((t) => (
              <div
                key={t.name}
                className={cn(
                  "relative flex flex-col rounded-xl p-8",
                  t.dark
                    ? "bg-ink text-white shadow-[0_30px_60px_-25px_rgba(43,33,40,0.6)]"
                    : t.popular
                      ? "border-2 border-gold bg-white shadow-[0_20px_50px_-28px_rgba(195,160,95,0.55)]"
                      : "border border-line bg-white shadow-[0_15px_40px_-28px_rgba(43,33,40,0.45)]"
                )}
              >
                {t.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-ink">
                    Popular Choice
                  </span>
                )}
                <p className={cn("text-[10.5px] font-bold uppercase tracking-[0.24em]", t.dark ? "text-gold" : "text-golddark")}>
                  {t.tier}
                </p>
                <h3 className={cn("font-serif mt-3 text-2xl font-bold", t.dark ? "text-white" : "text-ink")}>{t.name}</h3>
                <p className={cn("mt-4 font-serif text-3xl font-bold", "text-gold")}>
                  {t.price} <span className="font-sans text-[12px] font-normal text-body">/ month</span>
                </p>
                <span className={cn("my-6 block h-px w-full", t.dark ? "bg-white/15" : "bg-line")} />
                <ul className="flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-3 text-[13px]", t.dark ? "text-white/70" : "text-body")}>
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#/booking" className={cn("mt-8 w-full", t.dark ? "btn-gold" : "btn-gold")}>Join Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gift cards (dark) */}
      <section className="bg-ink py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Thoughtful Sharing</p>
            <h2 className="font-serif mt-4 text-3xl font-bold leading-tight text-white md:text-[42px]">
              The Luxe Gift of
              <br />
              Rejuvenation
            </h2>
            <span className="mt-5 block h-px w-16 bg-gold" />
            <p className="mt-7 max-w-lg text-[14px] leading-relaxed text-white/65">
              Give your loved ones in Lahore the perfect aesthetic indulgence. Whether for a customized bridal prep, a
              soothing deep tissue massage, or a complete style makeover. Choose from our digital delivery options or
              retrieve an elegantly physical gold-foiled package in our DHA salon.
            </p>
            <p className="mt-8 text-[12px] font-semibold text-white/80">Select Gift Value:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {GIFT_VALUES.map((v) => (
                <button
                  key={v}
                  onClick={() => setGift(v)}
                  className={cn(
                    "rounded-md border px-4 py-2.5 text-[12.5px] font-medium transition",
                    gift === v
                      ? "border-gold bg-gold text-ink font-bold"
                      : "border-white/25 text-white/80 hover:border-gold hover:text-gold"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
            <a href="#/booking" className="btn-gold mt-8">Purchase Gift Card</a>
          </div>

          {/* gift card visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl border border-gold/60 bg-gradient-to-br from-[#241b21] to-[#3a2c36] p-7 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.7)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-serif text-lg font-bold tracking-[0.1em] text-gold">LUXE HAVEN</p>
                  <p className="mt-0.5 text-[8px] font-medium tracking-[0.4em] text-white/40">SALON &amp; SPA</p>
                </div>
                <IconGem className="h-5 w-5 text-gold" />
              </div>
              <p className="mt-9 text-[9.5px] font-semibold uppercase tracking-[0.3em] text-white/45">
                Exclusive Gift Voucher
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-gold">{amount}</p>
              <div className="mt-10 flex items-end justify-between text-[9.5px] text-white/40">
                <span>Card Ref: LH-9842-8349</span>
                <span>DHA Lahore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how sharing works */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Step-by-Step" title="How Sharing Works" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {HOW.map((h) => (
              <div key={h.n} className="rounded-xl border border-line bg-white p-8">
                <p className="font-serif text-5xl font-bold text-gold/40">{h.n}</p>
                <h3 className="font-serif mt-5 text-xl font-bold text-ink">{h.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-body">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
