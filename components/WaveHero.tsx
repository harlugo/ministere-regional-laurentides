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
    <div className="relative min-h-[92vh] flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(175deg,#0f2a1a 0%,#1a3d2b 40%,#0d2440 100%)" }}>

      {/* Wave SVG background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Forest */}
          <g opacity="0.28">
            <path d="M0,300 L60,255 L120,275 L180,235 L240,258 L300,215 L360,240 L420,198 L480,222 L540,178 L600,202 L660,160 L720,185 L780,145 L840,170 L900,132 L960,158 L1020,120 L1080,146 L1140,110 L1200,136 L1260,102 L1320,128 L1380,108 L1440,134 L1440,320 L0,320 Z" fill="#1a5c2a"/>
            <path d="M0,320 L80,280 L160,298 L240,262 L320,282 L400,248 L480,268 L560,230 L640,252 L720,215 L800,238 L880,198 L960,220 L1040,182 L1120,204 L1200,165 L1280,188 L1360,152 L1440,175 L1440,340 L0,340 Z" fill="#145022"/>
          </g>

          {/* Animated waves */}
          <g className="wave-1"><path d="M-80,415 C180,375 420,455 720,418 C1020,381 1220,440 1520,405 L1520,600 L-80,600 Z" fill="#C0392B" opacity="0.92"/></g>
          <g className="wave-2"><path d="M-80,435 C160,398 400,475 700,440 C1000,405 1200,462 1520,428 L1520,600 L-80,600 Z" fill="#E67E22" opacity="0.88"/></g>
          <g className="wave-3"><path d="M-80,454 C175,418 415,494 715,458 C1015,422 1215,478 1520,446 L1520,600 L-80,600 Z" fill="#F1C40F" opacity="0.8"/></g>
          <g className="wave-4"><path d="M-80,472 C165,438 405,512 705,476 C1005,440 1205,495 1520,462 L1520,600 L-80,600 Z" fill="#2980B9" opacity="0.88"/></g>
          <g className="wave-5"><path d="M-80,490 C185,458 425,528 725,493 C1025,458 1225,512 1520,480 L1520,600 L-80,600 Z" fill="#1ABC9C" opacity="0.8"/></g>
          <path d="M-80,508 C175,478 415,545 715,510 C1015,475 1215,528 1520,496 L1520,600 L-80,600 Z" fill="#27AE60" opacity="0.92"/>

          {/* Cross with glow */}
          <g className="cross-glow" transform="translate(720,160)">
            <rect x="-5.5" y="-60" width="11" height="120" rx="3" fill="white" opacity="0.95"/>
            <rect x="-38" y="-18" width="76" height="11" rx="3" fill="white" opacity="0.95"/>
          </g>
          {/* Light rays */}
          <g opacity="0.09" transform="translate(720,160)">
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i} x1="0" y1="0"
                x2={Math.cos((a-90)*Math.PI/180)*400}
                y2={Math.sin((a-90)*Math.PI/180)*400}
                stroke="white" strokeWidth="1.5"/>
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pb-36 pt-4">
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/50 mb-5 uppercase" style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-5 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed" style={{ fontFamily: "system-ui" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-8 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-xl"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
          {ctaLabel} ↓
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-35">
        <div className="w-px h-8 bg-white animate-pulse"/>
        <div className="w-1.5 h-1.5 rounded-full bg-white"/>
      </div>
    </div>
  );
}
