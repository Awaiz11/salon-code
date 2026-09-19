import { useEffect, useRef, useState } from "react";

/* ─── types ─────────────────────────────────────────────── */
interface Theme {
  name: string;
  bg: string;
  accent: string;
  text: string;
  light: string; // light/cream background color
}

/* ─── preset themes ──────────────────────────────────────── */
const PRESETS: Theme[] = [
  // Agency — Navy + Electric Blue
  { name: "Agency",  bg: "#0F172A", accent: "#3B82F6", text: "#64748B", light: "#EFF6FF" },
  // Neon — Deep Black + Emerald Green
  { name: "Neon",    bg: "#052E16", accent: "#10B981", text: "#6B7280", light: "#F0FDF4" },
  // Cyber — Dark Slate + Cyan
  { name: "Cyber",   bg: "#0C1322", accent: "#22D3EE", text: "#64748B", light: "#ECFEFF" },
  // Sunset — Charcoal + Rose
  { name: "Sunset",  bg: "#1C0A0F", accent: "#F43F5E", text: "#6B7280", light: "#FFF1F2" },
  // Mono — Pure Black + Silver
  { name: "Mono",    bg: "#111111", accent: "#A3A3A3", text: "#525252", light: "#FAFAFA" },
];

const LS_KEY = "lh-theme";

/* ─── hex colour utilities ───────────────────────────────── */
/** Parse "#rrggbb" → [r,g,b] */
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}
/** Darken a hex colour by `amount` (0‒255) */
function darken(hex: string, amount = 30): string {
  const [r, g, b] = hexToRgb(hex);
  const clamp = (n: number) => Math.max(0, Math.min(255, n));
  return `#${[clamp(r - amount), clamp(g - amount), clamp(b - amount)]
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")}`;
}
/** Lighten a hex colour by `amount` (0‒255) */
function lighten(hex: string, amount = 25): string {
  const [r, g, b] = hexToRgb(hex);
  const clamp = (n: number) => Math.max(0, Math.min(255, n));
  return `#${[clamp(r + amount), clamp(g + amount), clamp(b + amount)]
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")}`;
}

/* ─── apply theme to the site's actual Tailwind CSS vars ─── */
function applyTheme(bg: string, accent: string, text: string, light: string) {
  const r = document.documentElement.style;

  // dark background shades (used by bg-ink, bg-coal, bg-cocoa)
  r.setProperty("--color-ink",   bg);
  r.setProperty("--color-coal",  darken(bg, 8));
  r.setProperty("--color-cocoa", lighten(bg, 12));

  // accent / gold shades (used by text-gold, bg-gold, border-gold)
  r.setProperty("--color-gold",     accent);
  r.setProperty("--color-golddark", darken(accent, 25));

  // light / cream shades (used by bg-cream, bg-cream2, bg-sand, border-line)
  r.setProperty("--color-cream",  light);
  r.setProperty("--color-cream2", darken(light, 6));
  r.setProperty("--color-sand",   darken(light, 10));
  r.setProperty("--color-line",   darken(light, 18));

  // body text colours
  r.setProperty("--color-body", text);
  r.setProperty("--color-mist", lighten(darken(text, 40), 10));

  // also update the <body> background so cream sections look right
  document.body.style.background = light;
  document.body.style.color = bg;
}

function resetTheme() {
  const r = document.documentElement.style;
  [
    "--color-ink","--color-coal","--color-cocoa",
    "--color-gold","--color-golddark",
    "--color-cream","--color-cream2","--color-sand","--color-line",
    "--color-body","--color-mist",
  ].forEach((v) => r.removeProperty(v));
  document.body.style.background = "";
  document.body.style.color = "";
}

function saveTheme(bg: string, accent: string, text: string, light: string) {
  localStorage.setItem(LS_KEY, JSON.stringify({ bg, accent, text, light }));
}

/* ─── svg icons ──────────────────────────────────────────── */
function GearIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── component ──────────────────────────────────────────── */
export default function ThemeSwitcher() {
  const [open, setOpen]         = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const [active, setActive] = useState<number | null>(null);
  const [custom, setCustom] = useState({ bg: "#0F172A", accent: "#3B82F6", text: "#CBD5E1", light: "#F0F4FF" });
  const panelRef            = useRef<HTMLDivElement>(null);

  /* restore from localStorage on mount */
  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
      try {
        const { bg, accent, text, light } = JSON.parse(saved);
        const l = light ?? "#F0F4FF";
        applyTheme(bg, accent, text, l);
        setCustom({ bg, accent, text, light: l });
        const idx = PRESETS.findIndex(p => p.bg === bg && p.accent === accent);
        if (idx !== -1) setActive(idx);
      } catch { /* ignore */ }
    }
  }, []);

  /* click outside to close */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  function handlePreset(i: number) {
    const t = PRESETS[i];
    setActive(i);
    setCustom({ bg: t.bg, accent: t.accent, text: t.text, light: t.light });
    applyTheme(t.bg, t.accent, t.text, t.light);
    saveTheme(t.bg, t.accent, t.text, t.light);
  }

  function handleCustom(field: "bg" | "accent" | "text" | "light", val: string) {
    const next = { ...custom, [field]: val };
    setCustom(next);
    setActive(null);
    applyTheme(next.bg, next.accent, next.text, next.light);
    saveTheme(next.bg, next.accent, next.text, next.light);
  }

  function handleReset() {
    localStorage.removeItem(LS_KEY);
    resetTheme();
    setActive(null);
    setCustom({ bg: "#0F172A", accent: "#3B82F6", text: "#CBD5E1", light: "#F0F4FF" });
  }

  const ringFor = (i: number) =>
    active === i
      ? "ring-2 ring-offset-2 ring-offset-[#1a1a2e] ring-white scale-110"
      : "ring-1 ring-white/20 hover:scale-110 hover:ring-white/50";

  return (
    <div ref={panelRef} className="fixed right-0 top-1/2 z-50 -translate-y-1/2 flex items-center pointer-events-none">

      {/* gear tab */}
      <div className={`transition-all duration-300 ease-in-out absolute right-0
        flex flex-col items-end gap-1.5 pointer-events-auto
        ${open ? "opacity-0 pointer-events-none translate-x-2" : "opacity-100 translate-x-0"}`}>

        {/* dismissible label */}
        {labelVisible && (
          <div className="flex items-center gap-2 rounded-l-full
            bg-[#0d0d1a]/90 backdrop-blur-md border border-r-0 border-white/20
            pl-3.5 pr-2 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setOpen(true)}
              className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/85 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Select your colors
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLabelVisible(false); }}
              className="grid h-4 w-4 place-items-center rounded-full text-white/40 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
              title="Close label"
              aria-label="Close label"
            >
              <XIcon className="w-2.5 h-2.5" />
            </button>
          </div>
        )}

        {/* gear button */}
        <button
          onClick={() => setOpen(true)}
          title="Open Theme Switcher"
          className="flex h-11 w-11 items-center justify-center rounded-l-xl
            bg-[#0d0d1a]/80 backdrop-blur-md border border-r-0 border-white/20
            text-white shadow-[0_4px_24px_rgba(0,0,0,0.5)]
            hover:bg-white/15 transition-all duration-200 cursor-pointer"
        >
          <GearIcon className="w-5 h-5" />
        </button>
      </div>

      {/* panel */}
      <div className={`transition-all duration-300 ease-in-out origin-right
        ${open ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"}`}>
        <div className="w-[270px] rounded-l-2xl border border-r-0 border-white/15
          bg-[#0d0d1a]/85 backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          text-white overflow-hidden">

          {/* header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4 text-[#a78bfa]">
                <circle cx="13.5" cy="6.5" r="1" />
                <circle cx="17.5" cy="10.5" r="1" />
                <circle cx="8.5" cy="7.5" r="1" />
                <circle cx="6.5" cy="12.5" r="1" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.059a1.648 1.648 0 0 1 1.648-1.648h1.94c3.033 0 5.442-2.282 5.442-5.302C22 6.415 17.522 2 12 2z" />
              </svg>
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90">
                Select Your Theme Colors
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="grid h-7 w-7 place-items-center rounded-lg text-white/50
                hover:bg-white/10 hover:text-white transition-colors"
            >
              <XIcon />
            </button>
          </div>

          <div className="px-4 py-4 space-y-5">

            {/* presets */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Preset Themes
              </p>
              <div className="grid grid-cols-5 gap-2.5">
                {PRESETS.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => handlePreset(i)}
                    title={p.name}
                    className={`relative h-10 w-10 rounded-full transition-all duration-200 ${ringFor(i)}`}
                    style={{ background: `linear-gradient(135deg, ${p.bg} 45%, ${p.accent})` }}
                  >
                    {active === i && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white drop-shadow" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-5 gap-2.5">
                {PRESETS.map((p) => (
                  <span key={p.name} className="text-center text-[8.5px] text-white/35 truncate">
                    {p.name}
                  </span>
                ))}
              </div>
            </div>

            {/* divider */}
            <div className="flex items-center gap-2">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Advanced
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* custom pickers */}
            <div className="space-y-2.5">
              {(
                [
                  { label: "Dark Background",       field: "bg"     as const, val: custom.bg     },
                  { label: "Accent / Gold",          field: "accent" as const, val: custom.accent  },
                  { label: "Body Text",              field: "text"   as const, val: custom.text    },
                  { label: "Light Background",       field: "light"  as const, val: custom.light   },
                ]
              ).map(({ label, field, val }) => (
                <div key={field}
                  className="flex cursor-pointer items-center justify-between gap-3
                    rounded-lg bg-white/5 border border-white/8 px-3 py-2.5
                    hover:bg-white/10 transition-colors">
                  <span className="text-[11.5px] text-white/70 font-medium">{label}</span>
                  <label className="relative flex items-center gap-2 shrink-0 cursor-pointer">
                    <span className="text-[9px] font-mono text-white/35 uppercase hidden sm:block">
                      {val}
                    </span>
                    <div
                      className="h-7 w-7 rounded-full border-2 border-white/20 shadow-inner relative overflow-hidden"
                      style={{ background: val }}
                    >
                      <input
                        type="color"
                        value={val}
                        onChange={(e) => handleCustom(field, e.target.value)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* reset */}
            <button
              onClick={handleReset}
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2
                text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50
                hover:bg-red-500/20 hover:border-red-500/40 hover:text-white transition-all duration-200"
            >
              Reset to Original Brand Colors
            </button>
          </div>

          {/* footer */}
          <div className="border-t border-white/8 px-4 py-2.5">
            <p className="text-center text-[9px] text-white/20 tracking-wider">
              ✦ Preferences saved automatically ✦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
