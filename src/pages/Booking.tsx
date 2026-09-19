import { useId, useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { IconCheck, IconChevronL, IconChevronR } from "../components/icons";
import { SERVICE_TABS, MASTERS, type Service } from "../data";

export const LUXE_APPT_KEY = "luxe_master_appointments_v2";

/* ─── constants ──────────────────────────────────────────── */
const STEPS = ["Select Service", "Choose Stylist", "Date & Time", "Your Details", "Confirmation"];

const MORNING = [
  { t: "9:00 AM",  ok: true  },
  { t: "9:30 AM",  ok: false },
  { t: "10:00 AM", ok: true  },
  { t: "10:30 AM", ok: true  },
  { t: "11:00 AM", ok: true  },
];
const AFTERNOON = [
  { t: "12:00 PM", ok: true  },
  { t: "1:00 PM",  ok: false },
  { t: "2:30 PM",  ok: true  },
  { t: "3:00 PM",  ok: true  },
  { t: "4:30 PM",  ok: true  },
];

/* October 2026 — 1st is a Wednesday */
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const cells: { d: number; kind: "prev" | "past" | "free" }[] = [
  ...[27, 28, 29, 30].map((d) => ({ d, kind: "prev" as const })),
  ...Array.from({ length: 13 }, (_, i) => ({ d: i + 1,  kind: "past" as const })),
  ...Array.from({ length: 17 }, (_, i) => ({ d: i + 14, kind: "free" as const })),
];

const fmtDate = (day: number) => {
  const g    = new Date(2026, 9, day).getDay();
  const wd   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][g];
  const long = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][g];
  const m    = day % 100;
  const suf  =
    day % 10 === 1 && m !== 11 ? "st"
    : day % 10 === 2 && m !== 12 ? "nd"
    : day % 10 === 3 && m !== 13 ? "rd"
    : "th";
  return { short: `${wd}, Oct ${day}${suf}`, full: `${long}, October ${day}, 2026` };
};

/* ─── DRY helper: sidebar CTA label ─────────────────────── */
function getCtaLabel(step: number): string {
  if (step === 1) return "Continue to Stylist";
  if (step === 2) return "Continue to Date & Time";
  if (step === 3) return "Continue to Details";
  return "Confirm Booking";
}

/* ─── Booking component ──────────────────────────────────── */
export default function Booking() {
  /* unique id prefix for form labels (React 19 / concurrent-safe) */
  const uid = useId();

  /* wizard step */
  const [step, setStep] = useState(1);

  /* service & stylist state — drives sidebar and confirmation */
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedStylist, setSelectedStylist]  = useState<string>("");

  useEffect(() => {
    const rebookServiceStr = localStorage.getItem("luxe_rebook_service");
    if (rebookServiceStr) {
      const matchedServices: Service[] = [];
      for (const tab of SERVICE_TABS) {
        for (const svc of tab.items) {
          if (rebookServiceStr.includes(svc.title)) {
            matchedServices.push(svc);
          }
        }
      }
      if (matchedServices.length > 0) {
        setSelectedServices(matchedServices);
      }
      localStorage.removeItem("luxe_rebook_service");
    }
  }, []);

  /* date & time */
  const [day,  setDay]  = useState(14);
  const [slot, setSlot] = useState("10:30 AM");

  /* step-4 form values */
  const [formName,    setFormName]    = useState("");
  const [formPhone,   setFormPhone]   = useState("");
  const [formEmail,   setFormEmail]   = useState("");
  const [formNotes,   setFormNotes]   = useState("");

  const [bookingRef, setBookingRef] = useState("");

  const done = step === 5;
  const fd   = fmtDate(day);

  const canContinueStep1 = selectedServices.length > 0;
  const canContinueStep2 = selectedStylist !== "";

  /* sidebar "Continue" handler */
  const confirmBooking = () => {
    const newRef = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(newRef);

    if (selectedServices.length > 0) {
      const newBooking = {
        id: newRef,
        service: selectedServices.map(s => s.title).join(", ") || "Signature Luxury Treatment",
        stylist: selectedStylist || "Master Stylist",
        date: `Oct ${day}, 2026 at ${slot}`,
        time: slot,
        status: "UPCOMING"
      };

      const currentList = JSON.parse(localStorage.getItem(LUXE_APPT_KEY) || "[]");
      const updatedList = [newBooking, ...currentList];
      localStorage.setItem(LUXE_APPT_KEY, JSON.stringify(updatedList));
      window.dispatchEvent(new Event("luxe_booking_sync"));
    }

    setStep(5);
  };

  const handleSidebarContinue = () => {
    if (step === 1 && canContinueStep1) setStep(2);
    else if (step === 2 && canContinueStep2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) confirmBooking();
  };

  const sidebarDisabled =
    (step === 1 && !canContinueStep1) ||
    (step === 2 && !canContinueStep2);

  return (
    <>
      {/* ── Step progress bar ── */}
      <nav aria-label="Booking steps" className="border-b border-line bg-white">
        <ol className="no-scrollbar mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 sm:gap-4 sm:px-5 md:justify-between md:px-8">
          {STEPS.map((s, i) => {
            const n     = i + 1;
            const state = n < step ? "done" : n === step ? "active" : "todo";
            return (
              <li key={s} className="flex shrink-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold sm:h-7 sm:w-7 sm:text-[11px]",
                    state === "done"   && "bg-gold text-ink",
                    state === "active" && "bg-gold text-ink ring-4 ring-gold/20",
                    state === "todo"   && "bg-line text-body"
                  )}
                >
                  {state === "done" ? <IconCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> : n}
                </span>
                <span
                  aria-current={state === "active" ? "step" : undefined}
                  className={cn(
                    "text-[11px] font-medium sm:text-[13px]",
                    state === "active" ? "text-golddark" : state === "done" ? "text-ink" : "text-body"
                  )}
                >
                  {s}
                </span>
              </li>
            );
          })}
        </ol>
      </nav>

      <section className="bg-cream py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          {!done ? (
            <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[1fr_340px]">
              <div className="space-y-6 md:space-y-8">

                {/* ══ STEP 1 — Select Service ══ */}
                {step === 1 && (
                  <div className="rounded-xl bg-white p-5 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] sm:p-6 md:p-8">
                    <h2 className="font-serif text-xl font-bold text-ink sm:text-2xl">Select a Service</h2>
                    <p className="mt-2 text-[13px] text-body">
                      Choose the treatment you'd like to book for your visit.
                    </p>

                    {SERVICE_TABS.map((tab) => (
                      <div key={tab.id} className="mt-7">
                        <p
                          id={`${uid}-cat-${tab.id}`}
                          className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-golddark"
                        >
                          {tab.label}
                        </p>
                        <div
                          role="group"
                          aria-labelledby={`${uid}-cat-${tab.id}`}
                          className="mt-3 grid gap-3 sm:grid-cols-2"
                        >
                          {tab.items.map((svc) => {
                            const isSelected = selectedServices.some(s => s.title === svc.title);
                            return (
                              <button
                                key={svc.title}
                                role="checkbox"
                                aria-checked={isSelected}
                                onClick={() => {
                                  setSelectedServices(prev =>
                                    prev.some(s => s.title === svc.title)
                                      ? prev.filter(s => s.title !== svc.title)
                                      : [...prev, svc]
                                  );
                                }}
                                className={cn(
                                  "flex w-full items-start gap-3 rounded-lg border p-3.5 text-left transition sm:gap-4 sm:p-4",
                                  "focus-visible:ring-2 focus-visible:ring-gold/60",
                                  isSelected
                                    ? "border-gold bg-gold/10 shadow-sm"
                                    : "border-line bg-white hover:border-gold/60 hover:bg-cream"
                                )}
                              >
                                <img
                                  src={svc.img}
                                  alt=""
                                  aria-hidden="true"
                                  loading="lazy"
                                  decoding="async"
                                  className="h-12 w-12 shrink-0 rounded-md object-cover sm:h-14 sm:w-14"
                                  onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    img.onerror = null;
                                    img.src =
                                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Crect width='56' height='56' rx='4' fill='%23e5dbc9'/%3E%3C/svg%3E";
                                  }}
                                />
                                <div className="min-w-0 flex-1">
                                  <p className="text-[13px] font-semibold leading-snug text-ink">{svc.title}</p>
                                  <p className="mt-0.5 text-[11.5px] text-body">{svc.time}</p>
                                  <p className="mt-1 font-serif text-[15px] font-bold text-golddark">{svc.price}</p>
                                </div>
                                {isSelected && (
                                  <span
                                    aria-hidden="true"
                                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-ink"
                                  >
                                    <IconCheck className="h-3 w-3" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div className="mt-8">
                      <button
                        onClick={() => canContinueStep1 && setStep(2)}
                        disabled={!canContinueStep1}
                        className="btn-gold focus-visible:ring-2 focus-visible:ring-golddark/60"
                        aria-disabled={!canContinueStep1}
                      >
                        Continue to Stylist
                      </button>
                    </div>
                  </div>
                )}

                {/* ══ STEP 2 — Choose Stylist ══ */}
                {step === 2 && (
                  <div className="rounded-xl bg-white p-5 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] sm:p-6 md:p-8">
                    <h2 className="font-serif text-xl font-bold text-ink sm:text-2xl">Choose Your Stylist</h2>
                    <p className="mt-2 text-[13px] text-body">
                      Select a master artisan for your session.
                    </p>
                    <div
                      role="radiogroup"
                      aria-label="Select your stylist"
                      className="mt-5 grid gap-4 sm:grid-cols-3"
                    >
                      {MASTERS.map((m) => {
                        const isSelected = selectedStylist === m.name;
                        return (
                          <button
                            key={m.name}
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => setSelectedStylist(m.name)}
                            className={cn(
                              "overflow-hidden rounded-xl border text-left transition",
                              "focus-visible:ring-2 focus-visible:ring-gold/60",
                              isSelected
                                ? "border-gold ring-2 ring-gold/30"
                                : "border-line hover:border-gold/60"
                            )}
                          >
                            <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-cream">
                              <img
                                src={m.img}
                                alt={`${m.name} — ${m.role}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center transition duration-300"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='176' viewBox='0 0 300 176'%3E%3Crect width='300' height='176' fill='%23f6f1e7'/%3E%3C/svg%3E";
                                }}
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <p className="font-serif text-[15px] font-bold text-ink">{m.name}</p>
                                  <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-golddark">
                                    {m.role}
                                  </p>
                                </div>
                                {isSelected && (
                                  <span
                                    aria-hidden="true"
                                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-ink"
                                  >
                                    <IconCheck className="h-3 w-3" />
                                  </span>
                                )}
                              </div>
                              <p className="mt-2 text-[12px] leading-relaxed text-body">{m.text}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                      <button onClick={() => setStep(1)} className="btn-line">Back</button>
                      <button
                        onClick={() => canContinueStep2 && setStep(3)}
                        disabled={!canContinueStep2}
                        className="btn-gold"
                        aria-disabled={!canContinueStep2}
                      >
                        Continue to Date &amp; Time
                      </button>
                    </div>
                  </div>
                )}

                {/* ══ STEP 3 — Date & Time ══ */}
                {step === 3 && (
                  <>
                    {/* Calendar */}
                    <div className="rounded-xl bg-white p-5 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] sm:p-6 md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h2 className="font-serif text-xl font-bold text-ink sm:text-2xl">Select Date</h2>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-[13px] font-semibold text-golddark sm:text-[14px]">October 2026</span>
                          <button
                            aria-label="Previous month"
                            className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-body transition hover:border-gold hover:text-golddark focus-visible:ring-2 focus-visible:ring-gold/50 sm:h-11 sm:w-11"
                          >
                            <IconChevronL className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            aria-label="Next month"
                            className="grid h-10 w-10 place-items-center rounded-md bg-gold text-ink transition hover:bg-golddark hover:text-white focus-visible:ring-2 focus-visible:ring-golddark/60 sm:h-11 sm:w-11"
                          >
                            <IconChevronR className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Calendar grid */}
                      <div
                        role="grid"
                        aria-label="October 2026 calendar"
                        className="mt-6 grid grid-cols-7 gap-y-1 text-center"
                      >
                        {WEEKDAYS.map((w) => (
                          <span
                            key={w}
                            role="columnheader"
                            aria-label={w}
                            className="pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-body sm:pb-3 sm:text-[10.5px]"
                          >
                            {w}
                          </span>
                        ))}
                        {cells.map((c, i) =>
                          c.kind === "free" ? (
                            <button
                              key={i}
                              role="gridcell"
                              aria-label={`October ${c.d}, 2026`}
                              aria-pressed={day === c.d}
                              onClick={() => setDay(c.d)}
                              /* 44px touch target at all breakpoints */
                              className={cn(
                                "mx-auto grid h-10 w-10 place-items-center rounded-full text-[13px] transition focus-visible:ring-2 focus-visible:ring-gold/50",
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
                              role="gridcell"
                              aria-disabled="true"
                              className="mx-auto grid h-10 w-10 place-items-center rounded-full text-[13px] text-[#cfc5b4]"
                            >
                              {c.d}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Time slots — z-20 prevents ThemeSwitcher (z-50) from blocking on mobile when scrolled */}
                    <div className="relative z-20 rounded-xl bg-white p-5 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] sm:p-6 md:p-8">
                      <h2 className="font-serif text-xl font-bold text-ink sm:text-2xl">Select Time Slot</h2>
                      {[
                        { label: "Morning",   items: MORNING   },
                        { label: "Afternoon", items: AFTERNOON },
                      ].map((g) => (
                        <div key={g.label} className="mt-5 sm:mt-6">
                          <p
                            id={`${uid}-${g.label}`}
                            className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-golddark"
                          >
                            {g.label}
                          </p>
                          <div
                            role="radiogroup"
                            aria-labelledby={`${uid}-${g.label}`}
                            className="mt-3 flex flex-wrap gap-2 sm:gap-3"
                          >
                            {g.items.map((s) => (
                              <button
                                key={s.t}
                                role="radio"
                                aria-checked={slot === s.t}
                                aria-disabled={!s.ok}
                                disabled={!s.ok}
                                onClick={() => s.ok && setSlot(s.t)}
                                /* min-h-[44px] ensures 44px touch target on all devices */
                                className={cn(
                                  "min-h-[44px] rounded-md border px-3 py-2 text-[13px] font-medium transition focus-visible:ring-2 focus-visible:ring-gold/50 sm:px-4 sm:py-2.5",
                                  !s.ok
                                    ? "cursor-not-allowed border-line text-[#c3b9a8] opacity-60"
                                    : slot === s.t
                                      ? "border-gold bg-gold font-bold text-ink"
                                      : "border-line bg-white text-ink hover:border-gold hover:text-golddark"
                                )}
                              >
                                {s.t}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                        <button onClick={() => setStep(2)} className="btn-line">Back</button>
                        <button onClick={() => setStep(4)} className="btn-gold">
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ══ STEP 4 — Your Details ══ */}
                {step === 4 && (
                  <form onSubmit={(e) => { e.preventDefault(); confirmBooking(); }} className="rounded-xl bg-white p-5 shadow-[0_12px_35px_-25px_rgba(43,33,40,0.5)] sm:p-6 md:p-8">
                    <h2 className="font-serif text-xl font-bold text-ink sm:text-2xl">Your Details</h2>
                    <p className="mt-2 text-[13px] text-body">
                      Almost there — confirm your contact details and we'll hold your slot.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
                      <div>
                        <label htmlFor={`${uid}-name`} className="mb-1.5 block text-[12px] font-semibold text-ink">
                          Full Name <span className="text-gold" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={`${uid}-name`}
                          type="text"
                          required
                          autoComplete="name"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="input-luxe"
                          placeholder="Enter your full name"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor={`${uid}-phone`} className="mb-1.5 block text-[12px] font-semibold text-ink">
                          Phone Number <span className="text-gold" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={`${uid}-phone`}
                          type="tel"
                          required
                          autoComplete="tel"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="input-luxe"
                          placeholder="+1 (310) 555-0199"
                          aria-required="true"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor={`${uid}-email`} className="mb-1.5 block text-[12px] font-semibold text-ink">
                          Email Address <span className="text-gold" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={`${uid}-email`}
                          type="email"
                          required
                          autoComplete="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="input-luxe"
                          placeholder="you@example.com"
                          aria-required="true"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor={`${uid}-notes`} className="mb-1.5 block text-[12px] font-semibold text-ink">
                          Special Requests
                        </label>
                        <textarea
                          id={`${uid}-notes`}
                          rows={3}
                          autoComplete="off"
                          value={formNotes}
                          onChange={(e) => setFormNotes(e.target.value)}
                          className="input-luxe resize-none"
                          placeholder="Anything our team should prepare for your visit…"
                        />
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                      <button type="button" onClick={() => setStep(3)} className="btn-line">Back</button>
                      <button type="submit" className="btn-gold">Confirm Booking</button>
                    </div>
                  </form>
                )}
              </div>

              {/* ══ Booking Summary sidebar ══ */}
              <aside
                role="complementary"
                aria-label="Booking summary"
                className="rounded-xl bg-ink p-6 text-white sm:p-7 lg:sticky lg:top-28"
              >
                <h2 className="font-serif text-2xl font-bold text-gold">Booking Summary</h2>
                <dl className="mt-5 space-y-5 border-t border-white/15 pt-5">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Selected Treatments
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium">
                      {selectedServices.length > 0 ? (
                        <ul className="space-y-1">
                          {selectedServices.map(s => (
                            <li key={s.title}>• {s.title}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="italic text-white/40">Not selected yet</span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Your Stylist
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium">
                      {selectedStylist || <span className="italic text-white/40">Not selected yet</span>}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Appointment Schedule
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium">
                      {fd.short} @ {slot}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                  <p className="text-[15px] font-medium">Total Amount</p>
                  <p className="font-serif text-2xl font-bold text-gold" aria-live="polite" aria-atomic="true">
                    ${selectedServices.reduce((sum, s) => sum + parseInt(s.price.replace(/[^0-9.-]+/g, "")), 0)}
                  </p>
                </div>
                <button
                  onClick={handleSidebarContinue}
                  disabled={sidebarDisabled}
                  aria-disabled={sidebarDisabled}
                  className="btn-gold mt-6 w-full focus-visible:ring-2 focus-visible:ring-golddark/60"
                >
                  {getCtaLabel(step)}
                </button>
              </aside>
            </div>
          ) : (
            /* ══ STEP 5 — Confirmation ══ */
            <div className="mx-auto max-w-xl">
              <div className="rounded-2xl bg-white p-6 text-center shadow-[0_25px_60px_-30px_rgba(43,33,40,0.5)] sm:p-8 md:p-12">
                <span
                  role="img"
                  aria-label="Booking confirmed"
                  className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600"
                >
                  <IconCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-bold text-ink md:text-4xl">Booking Confirmed!</h2>
                <p className="mt-3 text-[14px] text-body">
                  Your luxury session is reserved. We look forward to pampering you.
                </p>

                <div className="mt-7 divide-y divide-line rounded-lg bg-cream/70 text-left">
                  <div className="flex items-start justify-between gap-4 px-4 py-3.5 sm:px-5">
                    <span className="text-[12.5px] text-body">Reference ID:</span>
                    <span className="text-[13px] font-bold text-ink">{bookingRef}</span>
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-3.5 sm:px-5">
                    <span className="text-[12.5px] text-body">Services:</span>
                    <span className="max-w-[55%] text-right text-[13px] font-bold text-ink">
                      {selectedServices.length > 0
                        ? selectedServices.map(s => s.title).join(", ")
                        : "N/A"}
                      <br />
                      <span className="font-normal text-body">with {selectedStylist || "N/A"}</span>
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 px-4 py-3.5 sm:px-5">
                    <span className="text-[12.5px] text-body">Date &amp; Time:</span>
                    <span className="text-right text-[13px] font-bold text-ink">{fd.full}<br />at {slot}</span>
                  </div>
                  {formName && (
                    <div className="flex items-start justify-between gap-4 px-4 py-3.5 sm:px-5">
                      <span className="text-[12.5px] text-body">Guest:</span>
                      <span className="text-[13px] font-bold text-ink">{formName}</span>
                    </div>
                  )}
                </div>

                <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[12px] font-medium text-emerald-600">
                  <IconCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  SMS &amp; Email reminder sent successfully
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
                  <a
                    download="luxe-haven-appointment.ics"
                    rel="noopener"
                    href={`data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:Luxe Haven - ${encodeURIComponent(selectedServices.map(s => s.title).join(", ") || "Appointment")} (${encodeURIComponent(selectedStylist)})%0ADTSTART:20261014T103000%0ADURATION:PT2H0M0S%0ALOCATION:450 N Canon Dr\\, Beverly Hills\\, CA 90210%0AEND:VEVENT%0AEND:VCALENDAR`}
                    className="btn-line"
                    aria-label="Download calendar event for your Luxe Haven appointment"
                  >
                    Add to Calendar
                  </a>
                  <a href="#/profile" className="btn-gold" aria-label="View Appointments in Profile">
                    View Appointments
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
