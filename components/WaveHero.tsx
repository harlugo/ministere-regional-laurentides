"use client";

interface WaveHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function WaveHero({ title, subtitle, tagline, ctaLabel, ctaHref }: WaveHeroProps) {
  return (
    <div className="relative overflow-hidden"
      style={{ background: "linear-gradient(175deg,#0e2a14 0%,#1a4228 40%,#142840 100%)" }}>

      {/* ── Rays only — purely decorative SVG behind everything ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="outerHalo" cx="50%" cy="22%" r="60%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.22"/>
              <stop offset="45%"  stopColor="white" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="innerHalo" cx="50%" cy="22%" r="18%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.38"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Halos behind rays — centred at y=155 (≈22% of 700) */}
          <ellipse cx="400" cy="155" rx="480" ry="380" fill="url(#outerHalo)" className="cross-glow"/>
          <ellipse cx="400" cy="155" rx="140" ry="140" fill="url(#innerHalo)" className="cross-glow"/>

          {/* Rays from y=155 — long in all directions */}
          <g className="rays-breath" transform="translate(400,155)">
            {Array.from({length: 24}, (_, i) => {
              const a = i * 15;
              const rad = (a - 90) * Math.PI / 180;
              const r0 = 26;
              const r1 = 380 + (i % 4 === 0 ? 60 : i % 4 === 1 ? 30 : 10);
              return (
                <line key={i}
                  x1={Math.cos(rad) * r0} y1={Math.sin(rad) * r0}
                  x2={Math.cos(rad) * r1} y2={Math.sin(rad) * r1}
                  stroke="white"
                  strokeWidth={i % 6 === 0 ? "1.5" : i % 3 === 0 ? "0.9" : "0.5"}
                  opacity={i % 6 === 0 ? "1" : "0.65"}/>
              );
            })}
          </g>

          {/* Forest silhouette */}
          <g opacity="0.35">
            <path d="M0,580 L50,545 L100,562 L150,530 L200,548 L250,518 L300,540 L350,512 L400,534 L450,508 L500,530 L550,504 L600,526 L650,500 L700,522 L750,498 L800,520 L800,610 L0,610 Z"
              fill="#2a7838"/>
          </g>

          {/* Colour waves */}
          <g className="wave-1"><path d="M-80,555 C200,525 480,575 800,555 C1020,540 1200,562 1520,548 L1520,700 L-80,700 Z" fill="#C0392B" opacity="0.98"/></g>
          <g className="wave-2"><path d="M-80,568 C180,540 460,590 780,568 C1080,546 1272,570 1520,558 L1520,700 L-80,700 Z" fill="#E67E22" opacity="0.93"/></g>
          <g className="wave-3"><path d="M-80,580 C195,554 475,602 795,580 C1090,558 1275,580 1520,568 L1520,700 L-80,700 Z" fill="#F1C40F" opacity="0.86"/></g>
          <g className="wave-4"><path d="M-80,590 C185,566 465,612 785,590 C1082,568 1273,590 1520,578 L1520,700 L-80,700 Z" fill="#2980B9" opacity="0.93"/></g>
          <g className="wave-5"><path d="M-80,600 C188,578 468,622 788,600 C1083,578 1273,600 1520,588 L1520,700 L-80,700 Z" fill="#1ABC9C" opacity="0.86"/></g>
          <path d="M-80,610 C192,590 472,632 792,610 C1085,590 1274,610 1520,598 L1520,700 L-80,700 Z" fill="#27AE60" opacity="0.98"/>
        </svg>
      </div>

      {/* ── CROSS in normal flow — ABOVE text, below nav buttons ── */}
      <div className="relative z-10 flex justify-center" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
        <svg width="100" height="136" viewBox="0 0 100 136" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical bar: full height, always fully visible */}
          <rect x="43" y="0" width="14" height="136" rx="4.5" fill="white" opacity="0.96" className="cross-glow"/>
          {/* Horizontal bar: upper third */}
          <rect x="8" y="34" width="84" height="14" rx="4.5" fill="white" opacity="0.96" className="cross-glow"/>
        </svg>
      </div>

      {/* ── TEXT — in normal flow, separated from cross by paddingBottom above ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 pt-0">
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/45 mb-4 uppercase"
          style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,58px)", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/65 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-7 mb-4 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.28)" }}>
          {ctaLabel} ↓
        </a>
      </div>
    </div>
  );
}
