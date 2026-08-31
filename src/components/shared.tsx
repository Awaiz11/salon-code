import { cn } from "../utils/cn";
import { IconStar } from "./icons";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
  light = false,
  className,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center", "flex flex-col items-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-serif mt-3 text-3xl md:text-[40px] leading-tight font-bold",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      <span className="mt-4 block h-px w-16 bg-gold" />
      {sub && (
        <p className={cn("mt-5 max-w-2xl text-[15px] leading-relaxed", light ? "text-white/70" : "text-body")}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function Stars({
  count = 5,
  outline = false,
  className,
  starClass = "w-3.5 h-3.5",
}: {
  count?: number;
  outline?: boolean;
  className?: string;
  starClass?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-gold", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} className={starClass} filled={!outline} />
      ))}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  center = false,
  height = "min-h-[340px] md:min-h-[420px]",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  image: string;
  center?: boolean;
  height?: string;
}) {
  return (
    <section className={cn("relative flex items-center overflow-hidden bg-ink", height)}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#211720]/90 via-[#211720]/75 to-[#211720]/50" />
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 py-20">
        <div className={cn(center && "mx-auto max-w-3xl text-center flex flex-col items-center")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1]">{title}</h1>
          {sub && <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">{sub}</p>}
        </div>
      </div>
    </section>
  );
}
