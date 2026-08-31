import { useState } from "react";
import { cn } from "../utils/cn";
import { IconCheck, IconChevronL, IconChevronR } from "../components/icons";

const STEPS = ["Select Service", "Choose Stylist", "Date & Time", "Your Details", "Confirmation"];

const MORNING = [
  { t: "9:00 AM", ok: true },
  { t: "9:30 AM", ok: false },
  { t: "10:00 AM", ok: true },
  { t: "10:30 AM", ok: true },
  { t: "11:00 AM", ok: true },
];
const AFTERNOON = [
  { t: "12:00 PM", ok: true },
  { t: "1:00 PM", ok: false },
  { t: "2:30 PM", ok: true },
  { t: "3:00 PM", ok: true },
  { t: "4:30 PM", ok: true },
];

/* October 2026 — 1st is a Wednesday */
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const cells: { d: number; kind: "prev" | "past" | "free" }[] = [
  ...[27, 28, 29, 30].map((d) => ({ d, kind: "prev" as const })),
  ...Array.from({ length: 13 }, (_, i) => ({ d: i + 1, kind: "past" as const })),
  ...Array.from({ length: 17 }, (_, i) => ({ d: i + 14, kind: "free" as const })),
];

const fmtDate = (day: number) => {
  const g = new Date(2026, 9, day).getDay();
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][g];
  const long = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][g];
  const m = day % 100;
  const suf = day % 10 === 1 && m !== 11 ? "st" : day % 10 === 2 && m !== 12 ? "nd" : day % 10 === 3 && m !== 13 ? "rd" : "th";
  return { short: `${wd}, Oct ${day}${suf}`, full: `${long}, October ${day}, 2026` };
};

export default function Booking() {
  const [step, setStep] = useState(3); // 1-based; arrives with service + stylist already selected
  const [day, setDay] = useState(14);
  const [slot, setSlot] = useState("10:30 AM");
  const done = step === 5;
  const fd = fmtDate(day);

  return (
    <>
      {/* step bar */}
      <div className="border-b border-line bg-white">
        <div className="no-scrollbar mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-5 py-5 md:px-8">
          {STEPS.map((s, i) => {
            const n = i + 1;
            const state = n < step || (n <= 2) ? "done" : n === step ? "active" : "todo";
            return (
              <div key={s} className="flex shrink-0 items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold",
                    state === "done" && "bg-gold text-ink",
                    state === "active" && "bg-gold text-ink ring-4 ring-gold/20",
                    state === "todo" && "bg-line text-body"
                  )}
                >
                  {state === "done" ? <IconCheck className="h-3.5 w-3.5" /> : n}
                </span>
                <span
                  className={cn(
                    "text-[13px] font-medium",
                    state === "active" ? "text-golddark" : state === "done" ? "text-ink" : "text-body"
                  )}
                >
                  {s}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {!done ? (
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
              <div className="space-y-8">
                {step === 3 && (
                  <>
                    {/* calendar */}
                    <div className="rounded-xl bg-white p-6 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="font-serif text-2xl font-bold text-ink">Select Date</h2>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] font-semibold text-golddark">October 2026</span>
                          <button aria-label="Previous month" className="grid h-8 w-8 place-items-center rounded-md border border-line bg-white text-body transition hover:border-gold hover:text-golddark">
                            <IconChevronL className="h-4 w-4" />
                          </button>
                          <button aria-label="Next month" className="grid h-8 w-8 place-items-center rounded-md bg-gold text-ink transition hover:bg-golddark hover:text-white">
                            <IconChevronR className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-7 grid grid-cols-7 gap-y-1 text-center">
                        {WEEKDAYS.map((w) => (
                          <span key={w} className="pb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-body">
                            {w}
                          </span>
                        ))}
                        {cells.map((c, i) =>
                          c.kind === "free" ? (
                            <button
                              key={i}
                              onClick={() => setDay(c.d)}
                              className={cn(
                                "mx-auto grid h-9 w-9 place-items-center rounded-full text-[13px] transition",
                                day === c.d
                                  ? "bg-gold font-bold text-ink"
                                  : "text-ink hover:bg-cream"
                              )}
                            >
                              {c.d}
                            </button>
                          ) : (
                            <span
                              key={i}
                              className="mx-auto grid h-9 w-9 place-items-center rounded-full text-[13px] text-[#cfc5b4]"
                            >
                              {c.d}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* time slots */}
                    <div className="rounded-xl bg-white p-6 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] md:p-8">
                      <h2 className="font-serif text-2xl font-bold text-ink">Select Time Slot</h2>
                      {[
                        { label: "Morning", items: MORNING },
                        { label: "Afternoon", items: AFTERNOON },
                      ].map((g) => (
                        <div key={g.label} className="mt-6">
                          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-golddark">{g.label}</p>
                          <div className="mt-3 flex flex-wrap gap-3">
                            {g.items.map((s) => (
                              <button
                                key={s.t}
                                disabled={!s.ok}
                                onClick={() => setSlot(s.t)}
                                className={cn(
                                  "rounded-md border px-4 py-2.5 text-[13px] font-medium transition",
                                  !s.ok
                                    ? "cursor-not-allowed border-line text-[#c3b9a8]"
                                    : slot === s.t
                                      ? "border-gold bg-gold text-ink font-bold"
                                      : "border-line bg-white text-ink hover:border-gold hover:text-golddark"
                                )}
                              >
                                {s.t}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {step === 4 && (
                  <div className="rounded-xl bg-white p-6 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] md:p-8">
                    <h2 className="font-serif text-2xl font-bold text-ink">Your Details</h2>
                    <p className="mt-2 text-[13px] text-body">
                      Almost there — confirm your contact details and we'll hold your slot.
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[12px] font-semibold text-ink">Full Name</label>
                        <input className="input-luxe" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[12px] font-semibold text-ink">Phone Number</label>
                        <input className="input-luxe" placeholder="+1 (310) 555-0199" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-[12px] font-semibold text-ink">Email Address</label>
                        <input type="email" className="input-luxe" placeholder="you@example.com" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-[12px] font-semibold text-ink">Special Requests</label>
                        <textarea rows={3} className="input-luxe resize-none" placeholder="Anything our team should prepare for your visit…" />
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-4">
                      <button onClick={() => setStep(3)} className="btn-line">Back</button>
                      <button onClick={() => setStep(5)} className="btn-gold">Confirm Booking</button>
                    </div>
                  </div>
                )}
              </div>

              {/* summary */}
              <aside className="rounded-xl bg-ink p-7 text-white lg:sticky lg:top-28">
                <h2 className="font-serif text-2xl font-bold text-gold">Booking Summary</h2>
                <div className="mt-5 space-y-5 border-t border-white/15 pt-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Selected Treatment</p>
                    <p className="mt-1 text-[15px] font-medium">Premium Keratin Blowout</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Your Stylist</p>
                    <p className="mt-1 text-[15px] font-medium">Elena Vance</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Appointment Schedule</p>
                    <p className="mt-1 text-[15px] font-medium">
                      {fd.short} @ {slot}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                  <p className="text-[15px] font-medium">Total Amount</p>
                  <p className="font-serif text-2xl font-bold text-gold">$280</p>
                </div>
                <button onClick={() => setStep(step === 3 ? 4 : 5)} className="btn-gold mt-6 w-full">
                  {step === 3 ? "Continue to Details" : "Confirm Booking"}
                </button>
              </aside>
            </div>
          ) : (
            /* confirmation */
            <div className="mx-auto max-w-xl">
              <div className="rounded-2xl bg-white p-8 text-center shadow-[0_25px_60px_-30px_rgba(43,33,40,0.5)] md:p-12">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <IconCheck className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-bold text-ink md:text-4xl">Booking Confirmed!</h2>
                <p className="mt-3 text-[14px] text-body">
                  Your luxury session is reserved. We look forward to pampering you.
                </p>
                <div className="mt-7 divide-y divide-line rounded-lg bg-cream/70 text-left">
                  <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-[12.5px] text-body">Reference ID:</span>
                    <span className="text-[13px] font-bold text-ink">#LH-2026-98122</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-[12.5px] text-body">Service:</span>
                    <span className="text-[13px] font-bold text-ink">Premium Keratin Blowout (Elena Vance)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-[12.5px] text-body">Date &amp; Time:</span>
                    <span className="text-[13px] font-bold text-ink">{fd.full} at {slot}</span>
                  </div>
                </div>
                <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[12px] font-medium text-emerald-600">
                  <IconCheck className="h-3.5 w-3.5" /> SMS &amp; Email reminder sent successfully
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-4">
                  <a
                    download="luxe-haven-appointment.ics"
                    href={`data:text/calendar;charset=utf-8,BEGIN:VCALENDAR VERSION:2.0 BEGIN:VEVENT SUMMARY:Luxe Haven - Premium Keratin Blowout (Elena Vance) DTSTART:20261014T103000 DURATION:PT2H0M0S LOCATION:450 N Canon Dr\\, Beverly Hills\\, CA 90210 END:VEVENT END:VCALENDAR`}
                    className="btn-line"
                  >
                    Add to Calendar
                  </a>
                  <a href="#/" className="btn-gold">Back to Home</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
