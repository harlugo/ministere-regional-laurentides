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
      style={{ background: "linear-gradient(175deg,#1a5090 0%,#3a8ec8 35%,#52a8d8 65%,#2a6035 100%)", minHeight: "100vh" }}>

      {/* ── BACKGROUND SCENE — absolute, decorative only ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMax slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="h1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a7245"/><stop offset="100%" stopColor="#1e4828"/>
            </linearGradient>
            <linearGradient id="h2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8a52"/><stop offset="100%" stopColor="#245830"/>
            </linearGradient>
            <linearGradient id="lk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4898d0" stopOpacity="0.78"/>
              <stop offset="100%" stopColor="#2a6090" stopOpacity="0.58"/>
            </linearGradient>
          </defs>
          {/* Clouds */}
          <ellipse cx="120" cy="60" rx="88" ry="22" fill="white" opacity="0.22"/>
          <ellipse cx="175" cy="50" rx="56" ry="17" fill="white" opacity="0.17"/>
          <ellipse cx="570" cy="55" rx="98" ry="22" fill="white" opacity="0.18"/>
          <ellipse cx="632" cy="43" rx="60" ry="16" fill="white" opacity="0.13"/>
          <ellipse cx="370" cy="78" rx="65" ry="15" fill="white" opacity="0.10"/>
          {/* Hills */}
          <path d="M0,310 L90,258 L185,288 L280,230 L375,264 L470,213 L565,248 L660,196 L755,233 L900,206 L900,380 L0,380 Z" fill="url(#h1)"/>
          <path d="M0,352 L110,300 L215,332 L325,278 L430,312 L540,260 L645,296 L755,263 L900,282 L900,420 L0,420 Z" fill="url(#h2)"/>
          <path d="M0,395 L80,355 L150,368 L230,330 L300,348 L400,355 L500,332 L600,350 L700,368 L900,355 L900,450 L0,450 Z" fill="#2e6e38"/>
          {/* Houses left */}
          <g transform="translate(28,335)"><rect x="0" y="18" width="36" height="30" fill="#e8e0d0" rx="1"/><polygon points="18,0 -2,20 38,20" fill="#3a5c28"/><rect x="12" y="26" width="12" height="22" fill="#7a6040" rx="1"/><rect x="2" y="21" width="9" height="9" fill="rgba(180,210,240,0.5)" rx="1"/><rect x="25" y="21" width="9" height="9" fill="rgba(180,210,240,0.5)" rx="1"/></g>
          <g transform="translate(70,325)"><rect x="0" y="20" width="30" height="36" fill="#ddd8c8" rx="1"/><polygon points="15,0 -2,22 32,22" fill="#2a5230"/><rect x="10" y="33" width="10" height="23" fill="#6a5030" rx="1"/><rect x="2" y="23" width="8" height="9" fill="rgba(180,210,240,0.4)" rx="1"/><rect x="20" y="23" width="8" height="9" fill="rgba(180,210,240,0.4)" rx="1"/></g>
          <g transform="translate(106,342)"><rect x="0" y="12" width="26" height="24" fill="#e4dcc8" rx="1"/><polygon points="13,0 -1,14 27,14" fill="#4a6830"/><rect x="8" y="20" width="10" height="16" fill="#7a5838" rx="1"/></g>
          <g transform="translate(50,318)"><rect x="0" y="14" width="28" height="26" fill="#d8d0bc" rx="1"/><polygon points="14,0 -1,16 29,16" fill="#2e4820"/><rect x="9" y="24" width="10" height="16" fill="#5a4828" rx="1"/></g>
          <g transform="translate(138,318)"><rect x="-2" y="20" width="5" height="22" rx="2" fill="#2a4820"/><ellipse cx="1" cy="13" rx="12" ry="14" fill="#3a6830"/></g>
          {/* Chapel right */}
          <g transform="translate(595,288)">
            <ellipse cx="105" cy="160" rx="118" ry="13" fill="#1a4a22" opacity="0.4"/>
            <ellipse cx="22" cy="152" rx="19" ry="11" fill="#2e6e34"/><ellipse cx="38" cy="148" rx="15" ry="9" fill="#388040"/><ellipse cx="52" cy="151" rx="13" ry="8" fill="#2e6e34"/>
            <ellipse cx="158" cy="150" rx="13" ry="8" fill="#2e6e34"/><ellipse cx="172" cy="148" rx="15" ry="9" fill="#388040"/><ellipse cx="188" cy="152" rx="19" ry="11" fill="#2e6e34"/>
            <rect x="22" y="96" width="6" height="54" rx="2" fill="#345a26"/><ellipse cx="25" cy="87" rx="22" ry="24" fill="#3e7038"/>
            <rect x="184" y="108" width="5" height="44" rx="2" fill="#2a4820"/><polygon points="187,48 171,112 203,112" fill="#2a5e28"/><polygon points="187,62 169,116 205,116" fill="#347030"/><polygon points="187,77 166,120 208,120" fill="#2a5e28"/>
            <rect x="65" y="90" width="88" height="64" rx="2" fill="#f2efe6"/><rect x="65" y="90" width="88" height="64" rx="2" fill="none" stroke="#2a4828" strokeWidth="1.4"/>
            <polygon points="109,45 60,93 158,93" fill="#2a5230"/>
            <rect x="98" y="18" width="22" height="29" rx="2" fill="#f2efe6"/><polygon points="109,2 97,20 121,20" fill="#2a5230"/>
            <rect x="107.5" y="-8" width="3" height="12" rx="1" fill="white"/><rect x="103" y="-3" width="12" height="3" rx="1" fill="white"/>
            <circle cx="109" cy="113" r="12" fill="white" stroke="#2a4828" strokeWidth="1.4"/>
            <circle cx="109" cy="113" r="7" fill="none" stroke="#5a8ac8" strokeWidth="1.1"/>
            <circle cx="109" cy="113" r="2.5" fill="#5a8ac8"/>
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i} x1={109+Math.cos(a*Math.PI/180)*2.5} y1={113+Math.sin(a*Math.PI/180)*2.5} x2={109+Math.cos(a*Math.PI/180)*7} y2={113+Math.sin(a*Math.PI/180)*7} stroke="#5a8ac8" strokeWidth="0.9"/>
            ))}
            <path d="M96,154 L96,130 Q109,118 122,130 L122,154 Z" fill="#8a7040" stroke="#2a4828" strokeWidth="1.1"/>
            <line x1="109" y1="120" x2="109" y2="154" stroke="#6a5030" strokeWidth="0.7"/>
            <path d="M90,154 L90,127 Q109,110 128,127 L128,154" fill="none" stroke="#9a9080" strokeWidth="2.2" opacity="0.5"/>
            <rect x="70" y="101" width="11" height="14" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="0.9"/>
            <rect x="137" y="101" width="11" height="14" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="0.9"/>
            <rect x="97" y="154" width="24" height="4" rx="1" fill="#c8bea8"/>
          </g>
          {/* Houses right */}
          <g transform="translate(810,360)"><rect x="0" y="14" width="32" height="28" fill="#e0d8c4" rx="1"/><polygon points="16,0 -2,16 34,16" fill="#344e22"/><rect x="11" y="24" width="10" height="18" fill="#6a5030" rx="1"/></g>
          <g transform="translate(556,368)"><rect x="0" y="12" width="28" height="24" fill="#ddd8c0" rx="1"/><polygon points="14,0 -1,14 29,14" fill="#2e4820"/><rect x="9" y="22" width="10" height="14" fill="#5a4828" rx="1"/></g>
          {/* Lake */}
          <ellipse cx="450" cy="508" rx="490" ry="48" fill="url(#lk)"/>
          <path d="M80,503 Q240,496 430,503 Q600,510 780,497" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" fill="none"/>
          {/* Grass */}
          <path d="M0,528 Q220,514 450,526 Q680,538 900,520 L900,570 L0,570 Z" fill="#2e6e38" opacity="0.85"/>
          {/* Waves */}
          <g className="wave-1"><path d="M-80,548 C200,524 480,568 800,548 L1520,535 L1520,600 L-80,600 Z" fill="#C0392B" opacity="0.97"/></g>
          <g className="wave-2"><path d="M-80,558 C180,536 460,578 780,558 L1520,546 L1520,600 L-80,600 Z" fill="#E67E22" opacity="0.92"/></g>
          <g className="wave-3"><path d="M-80,567 C195,547 475,586 795,567 L1520,555 L1520,600 L-80,600 Z" fill="#F1C40F" opacity="0.85"/></g>
          <g className="wave-4"><path d="M-80,575 C185,556 465,594 785,575 L1520,563 L1520,600 L-80,600 Z" fill="#2980B9" opacity="0.92"/></g>
          <g className="wave-5"><path d="M-80,582 C188,565 468,602 788,582 L1520,571 L1520,600 L-80,600 Z" fill="#1ABC9C" opacity="0.85"/></g>
          <path d="M-80,589 C192,574 472,608 792,589 L1520,578 L1520,600 L-80,600 Z" fill="#27AE60" opacity="0.97"/>
        </svg>
      </div>

      {/* ── CROSS + RAYS — absolute, top-centre, z above background ── */}
      <div className="absolute z-10 pointer-events-none"
        style={{ top: 0, left: 0, right: 0, height: "340px" }}>
        <svg viewBox="0 0 900 340" preserveAspectRatio="xMidYMid meet"
          className="w-full h-full" overflow="visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ch" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Halo */}
          <ellipse cx="450" cy="240" rx="300" ry="260" fill="url(#ch)" className="cross-glow"/>
          {/* Rays from (450, 240) */}
          <g className="rays-breath" transform="translate(450,240)">
            {Array.from({length:20},(_,i)=>{
              const a=i*18, rad=(a-90)*Math.PI/180;
              const r0=30;
              const isUp=(a>=288||a<=72);
              const r1=isUp?230+(i%4===0?40:18):340+(i%3===0?55:20);
              return <line key={i}
                x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                stroke="white"
                strokeWidth={i%5===0?"1.6":i%3===0?"1.0":"0.55"}
                opacity={i%5===0?"0.90":"0.60"}/>;
            })}
          </g>
          {/* Cross — top=168, bottom=328, horizontal at y=222 — all within 340px height */}
          <g className="cross-glow" transform="translate(450,248)">
            <rect x="-9" y="-80" width="18" height="160" rx="5" fill="white" opacity="0.97"/>
            <rect x="-58" y="-26" width="116" height="18" rx="5" fill="white" opacity="0.97"/>
          </g>
        </svg>
      </div>

      {/* ── TEXT — starts at 340px, below the cross zone ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pb-24"
        style={{ paddingTop: "340px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/55 mb-4 uppercase"
          style={{ fontFamily: "system-ui", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-3xl"
          style={{ fontSize: "clamp(28px,5vw,54px)", textShadow: "0 2px 18px rgba(0,0,0,0.5)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/75 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-7 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
          {ctaLabel} ↓
        </a>
      </div>
    </div>
  );
}
