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
      style={{ background: "linear-gradient(175deg,#061208 0%,#0e2218 40%,#0b1e35 100%)" }}>

      {/* Full-bleed SVG — cross top-centre, rays fill entire hero including upward */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 800 560" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="outerHalo" cx="50%" cy="25%" r="65%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.18"/>
              <stop offset="40%"  stopColor="white" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="innerHalo" cx="50%" cy="25%" r="22%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.32"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Background halos centred at top */}
          <ellipse cx="400" cy="140" rx="520" ry="400" fill="url(#outerHalo)" className="cross-glow"/>
          <ellipse cx="400" cy="140" rx="180" ry="180" fill="url(#innerHalo)" className="cross-glow"/>

          {/* 24 rays from cross centre — reach all the way up AND down */}
          <g className="rays-breath" transform="translate(400,140)">
            {Array.from({length: 24}, (_, i) => {
              const a = i * 15;
              const rad = (a - 90) * Math.PI / 180;
              const r0 = 30;
              // Rays going upward (a between 300-360 and 0-60) are longer
              const isUp = (a >= 300 || a <= 60);
              const r1 = isUp
                ? 420 + (i % 4 === 0 ? 80 : 40)   // longer upward
                : 320 + (i % 3 === 0 ? 60 : 20);   // still long downward
              return (
                <line key={i}
                  x1={Math.cos(rad) * r0}
                  y1={Math.sin(rad) * r0}
                  x2={Math.cos(rad) * r1}
                  y2={Math.sin(rad) * r1}
                  stroke="white"
                  strokeWidth={i % 6 === 0 ? "1.6" : i % 3 === 0 ? "1.0" : "0.55"}
                  opacity={i % 6 === 0 ? "1" : "0.7"}/>
              );
            })}
          </g>

          {/* Cross — centred at top third, large and clear */}
          <g className="cross-glow" transform="translate(400,140)">
            {/* Vertical — tall */}
            <rect x="-7" y="-72" width="14" height="144" rx="4" fill="white" opacity="0.97"/>
            {/* Horizontal — in upper third of vertical */}
            <rect x="-48" y="-22" width="96" height="14" rx="4" fill="white" opacity="0.97"/>
          </g>

          {/* Forest silhouette at bottom */}
          <g opacity="0.22">
            <path d="M0,480 L50,440 L100,460 L150,425 L200,445 L250,415 L300,438 L350,408 L400,430 L450,405 L500,428 L550,400 L600,422 L650,396 L700,418 L750,395 L800,415 L800,500 L0,500 Z"
              fill="#1a5c2a"/>
          </g>

          {/* Waves at bottom */}
          <g className="wave-1"><path d="M-80,445 C200,415 480,468 800,445 C1020,428 1200,452 1520,438 L1520,560 L-80,560 Z" fill="#C0392B" opacity="0.9"/></g>
          <g className="wave-2"><path d="M-80,460 C180,432 460,482 780,460 C1080,438 1272,462 1520,450 L1520,560 L-80,560 Z" fill="#E67E22" opacity="0.84"/></g>
          <g className="wave-3"><path d="M-80,473 C195,447 475,495 795,473 C1090,451 1275,474 1520,462 L1520,560 L-80,560 Z" fill="#F1C40F" opacity="0.76"/></g>
          <g className="wave-4"><path d="M-80,484 C185,460 465,505 785,484 C1082,462 1273,484 1520,473 L1520,560 L-80,560 Z" fill="#2980B9" opacity="0.84"/></g>
          <g className="wave-5"><path d="M-80,494 C188,471 468,515 788,494 C1083,473 1273,494 1520,483 L1520,560 L-80,560 Z" fill="#1ABC9C" opacity="0.76"/></g>
          <path d="M-80,504 C192,482 472,524 792,504 C1085,483 1274,504 1520,493 L1520,560 L-80,560 Z" fill="#27AE60" opacity="0.9"/>
        </svg>
      </div>

      {/* Text — centred, pushed below the cross zone */}
      <div className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: "240px", paddingBottom: "60px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/45 mb-4 uppercase"
          style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,60px)", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/65 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-7 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.28)" }}>
          {ctaLabel} ↓
        </a>
      </div>
    </div>
  );
}
