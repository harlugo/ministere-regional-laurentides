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
      style={{ background: "linear-gradient(175deg,#0a1f10 0%,#122d1a 40%,#0b1e35 100%)" }}>

      {/* ── CROSS — top centre, own dedicated space ── */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-4">
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="halo1" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="halo2" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Large outer halo */}
          <ellipse cx="50" cy="52" rx="48" ry="48" fill="url(#halo2)" className="cross-glow"/>
          {/* Inner halo */}
          <ellipse cx="50" cy="52" rx="28" ry="28" fill="url(#halo1)" className="cross-glow"/>
          {/* Rays */}
          <g className="rays-breath" transform="translate(50,52)">
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i}
                x1={Math.cos((a-90)*Math.PI/180)*14}
                y1={Math.sin((a-90)*Math.PI/180)*14}
                x2={Math.cos((a-90)*Math.PI/180)*46}
                y2={Math.sin((a-90)*Math.PI/180)*46}
                stroke="white" strokeWidth={i%2===0?"1.2":"0.7"}/>
            ))}
          </g>
          {/* Cross */}
          <g className="cross-glow" transform="translate(50,52)">
            <rect x="-4.5" y="-44" width="9" height="88" rx="2.5" fill="white" opacity="0.96"/>
            <rect x="-28" y="-13" width="56" height="9" rx="2.5" fill="white" opacity="0.96"/>
          </g>
        </svg>
      </div>

      {/* ── TEXT — clearly below the cross ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 pt-2">
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/45 mb-4 uppercase"
          style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,60px)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
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

      {/* ── WAVE SVG — purely decorative, at the bottom ── */}
      <div className="relative z-0" style={{ height: "220px", marginTop: "-20px" }}>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-full">
          {/* Forest silhouette */}
          <g opacity="0.3">
            <path d="M0,160 L60,120 L120,142 L180,102 L240,128 L300,88 L360,114 L420,76 L480,102 L540,65 L600,92 L660,55 L720,82 L780,48 L840,75 L900,42 L960,68 L1020,35 L1080,62 L1140,30 L1200,58 L1260,28 L1320,55 L1380,32 L1440,58 L1440,180 L0,180 Z"
              fill="#1a5c2a"/>
          </g>
          {/* Waves */}
          <g className="wave-1"><path d="M-80,135 C200,105 480,165 800,135 C1100,105 1280,148 1520,128 L1520,220 L-80,220 Z" fill="#C0392B" opacity="0.88"/></g>
          <g className="wave-2"><path d="M-80,150 C180,122 460,178 780,150 C1080,122 1270,162 1520,142 L1520,220 L-80,220 Z" fill="#E67E22" opacity="0.82"/></g>
          <g className="wave-3"><path d="M-80,163 C195,137 475,190 795,163 C1090,137 1275,174 1520,155 L1520,220 L-80,220 Z" fill="#F1C40F" opacity="0.75"/></g>
          <g className="wave-4"><path d="M-80,175 C185,150 465,200 785,175 C1082,150 1272,185 1520,167 L1520,220 L-80,220 Z" fill="#2980B9" opacity="0.82"/></g>
          <g className="wave-5"><path d="M-80,186 C188,162 468,210 788,186 C1083,162 1273,195 1520,178 L1520,220 L-80,220 Z" fill="#1ABC9C" opacity="0.75"/></g>
          <path d="M-80,196 C192,174 472,220 792,196 C1085,174 1274,205 1520,188 L1520,220 L-80,220 Z" fill="#27AE60" opacity="0.88"/>
        </svg>
      </div>
    </div>
  );
}
