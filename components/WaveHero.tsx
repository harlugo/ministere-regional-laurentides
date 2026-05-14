"use client";

interface WaveHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  lang: "fr" | "en";
  onToggleLang: () => void;
  siteLabel: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function WaveHero({ title, subtitle, tagline, lang, onToggleLang, siteLabel, ctaLabel, ctaHref }: WaveHeroProps) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "linear-gradient(175deg,#0f2a1a 0%,#1a3d2b 40%,#0d2440 100%)" }}>
      
      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="7.5" y="1" width="3" height="16" rx="1" fill="white"/>
              <rect x="1" y="5.5" width="16" height="3" rx="1" fill="white"/>
            </svg>
          </div>
          <span className="text-white/90 text-sm font-semibold tracking-wide" style={{fontFamily:"system-ui"}}>{siteLabel}</span>
        </div>
        <div className="lang-toggle">
          <button className={"lang-btn " + (lang==="fr"?"active":"inactive")} onClick={onToggleLang}>FR</button>
          <button className={"lang-btn " + (lang==="en"?"active":"inactive")} onClick={onToggleLang}>EN</button>
        </div>
      </nav>

      {/* WAVES */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{top:"64px"}}>
        <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M0,280 L60,250 L120,270 L180,230 L240,255 L300,210 L360,240 L420,195 L480,220 L540,175 L600,200 L660,158 L720,185 L780,145 L840,170 L900,130 L960,158 L1020,118 L1080,145 L1140,108 L1200,135 L1260,100 L1320,128 L1380,105 L1440,132 L1440,300 L0,300 Z" fill="#1a5c2a"/>
            <path d="M0,310 L80,275 L160,295 L240,260 L320,280 L400,245 L480,265 L560,228 L640,250 L720,212 L800,235 L880,195 L960,218 L1040,178 L1120,200 L1200,162 L1280,185 L1360,150 L1440,172 L1440,320 L0,320 Z" fill="#145022"/>
          </g>
          <g className="wave-animate-1">
            <path d="M-80,415 C180,375 420,455 720,418 C1020,381 1220,440 1520,405 L1520,600 L-80,600 Z" fill="#C0392B" opacity="0.92"/>
          </g>
          <g className="wave-animate-2">
            <path d="M-80,435 C160,398 400,475 700,440 C1000,405 1200,462 1520,428 L1520,600 L-80,600 Z" fill="#E67E22" opacity="0.88"/>
          </g>
          <g className="wave-animate-3">
            <path d="M-80,454 C175,418 415,494 715,458 C1015,422 1215,478 1520,446 L1520,600 L-80,600 Z" fill="#F1C40F" opacity="0.82"/>
          </g>
          <g className="wave-animate-4">
            <path d="M-80,472 C165,438 405,512 705,476 C1005,440 1205,495 1520,462 L1520,600 L-80,600 Z" fill="#2980B9" opacity="0.88"/>
          </g>
          <g className="wave-animate-5">
            <path d="M-80,490 C185,458 425,528 725,493 C1025,458 1225,512 1520,480 L1520,600 L-80,600 Z" fill="#1ABC9C" opacity="0.82"/>
          </g>
          <path d="M-80,508 C175,478 415,545 715,510 C1015,475 1215,528 1520,496 L1520,600 L-80,600 Z" fill="#27AE60" opacity="0.92"/>
          <g className="cross-glow" transform="translate(720,155)">
            <rect x="-5.5" y="-58" width="11" height="116" rx="2.5" fill="white" opacity="0.95"/>
            <rect x="-36" y="-18" width="72" height="11" rx="2.5" fill="white" opacity="0.95"/>
          </g>
          <g opacity="0.1" transform="translate(720,155)">
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i} x1="0" y1="0" x2={Math.cos((a-90)*Math.PI/180)*380} y2={Math.sin((a-90)*Math.PI/180)*380} stroke="white" strokeWidth="1.5"/>
            ))}
          </g>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pb-40 pt-4">
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/55 mb-5 uppercase" style={{fontFamily:"system-ui"}}>{tagline}</p>
        <h1 className="fade-up-2 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl" style={{textShadow:"0 2px 24px rgba(0,0,0,0.45)"}}>
          {title}
        </h1>
        <p className="fade-up-3 mt-5 text-lg md:text-xl text-white/72 max-w-xl leading-relaxed" style={{fontFamily:"system-ui"}}>{subtitle}</p>
        <a href={ctaHref} className="fade-up-4 mt-8 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105" style={{fontFamily:"system-ui", background:"white", color:"#1a3d2b", boxShadow:"0 4px 20px rgba(0,0,0,0.25)"}}>
          {ctaLabel}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-8 bg-white animate-pulse"/>
        <div className="w-1.5 h-1.5 rounded-full bg-white"/>
      </div>
    </div>
  );
}
