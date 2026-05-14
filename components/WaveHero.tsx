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
      style={{ background: "linear-gradient(175deg,#0a1f10 0%,#122d1a 40%,#0b1e35 100%)", minHeight: "520px" }}>

      {/* ── CROSS + RAYS — full-width SVG, top half of hero ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMin meet"
          className="w-full" style={{ height: "420px" }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bigHalo" cx="50%" cy="28%" r="55%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.22"/>
              <stop offset="35%"  stopColor="white" stopOpacity="0.10"/>
              <stop offset="70%"  stopColor="white" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="innerHalo" cx="50%" cy="28%" r="20%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.30"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Enormous background halo — nearly full viewport */}
          <ellipse cx="400" cy="115" rx="500" ry="380" fill="url(#bigHalo)" className="cross-glow"/>
          {/* Inner concentrated halo */}
          <ellipse cx="400" cy="115" rx="160" ry="160" fill="url(#innerHalo)" className="cross-glow"/>

          {/* Long rays — reaching far down the page */}
          <g className="rays-breath" transform="translate(400,115)">
            {Array.from({length:24}, (_,i) => {
              const a = i * 15;
              const rad = (a - 90) * Math.PI / 180;
              const r0 = 28;
              const r1 = 370 + (i % 3 === 0 ? 40 : i % 3 === 1 ? 20 : 0);
              return (
                <line key={i}
                  x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                  x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                  stroke="white"
                  strokeWidth={i%6===0?"1.6":i%3===0?"1.1":"0.6"}
                  opacity={i%6===0?"1":"0.7"}/>
              );
            })}
          </g>

          {/* Cross — large, centered, clear of text */}
          <g className="cross-glow" transform="translate(400,115)">
            <rect x="-9" y="-78" width="18" height="156" rx="4" fill="white" opacity="0.97"/>
            <rect x="-56" y="-24" width="112" height="18" rx="4" fill="white" opacity="0.97"/>
          </g>
        </svg>
      </div>

      {/* ── TEXT — z-index above rays, pushed below cross zone ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-0 pt-0" style={{ marginTop: "200px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/45 mb-4 uppercase"
          style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,60px)", textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/65 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-7 mb-8 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.28)" }}>
          {ctaLabel} ↓
        </a>
      </div>

      {/* ── WAVES — bottom decorative band ── */}
      <div className="relative z-0" style={{ height: "180px" }}>
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-full">
          <g opacity="0.28">
            <path d="M0,100 L80,70 L160,88 L240,58 L320,78 L400,48 L480,68 L560,38 L640,60 L720,32 L800,54 L880,26 L960,50 L1040,22 L1120,46 L1200,20 L1280,44 L1360,22 L1440,46 L1440,120 L0,120 Z" fill="#1a5c2a"/>
          </g>
          <g className="wave-1"><path d="M-80,95 C200,68 500,118 800,95 C1100,68 1280,105 1520,88 L1520,180 L-80,180 Z" fill="#C0392B" opacity="0.9"/></g>
          <g className="wave-2"><path d="M-80,108 C180,82 480,130 780,108 C1080,82 1272,118 1520,100 L1520,180 L-80,180 Z" fill="#E67E22" opacity="0.84"/></g>
          <g className="wave-3"><path d="M-80,120 C195,96 495,142 795,120 C1090,96 1275,130 1520,112 L1520,180 L-80,180 Z" fill="#F1C40F" opacity="0.76"/></g>
          <g className="wave-4"><path d="M-80,130 C185,108 485,152 785,130 C1082,108 1273,140 1520,123 L1520,180 L-80,180 Z" fill="#2980B9" opacity="0.84"/></g>
          <g className="wave-5"><path d="M-80,140 C188,119 488,160 788,140 C1083,119 1273,149 1520,133 L1520,180 L-80,180 Z" fill="#1ABC9C" opacity="0.76"/></g>
          <path d="M-80,149 C192,130 492,168 792,149 C1085,130 1274,158 1520,143 L1520,180 L-80,180 Z" fill="#27AE60" opacity="0.9"/>
        </svg>
      </div>
    </div>
  );
}
