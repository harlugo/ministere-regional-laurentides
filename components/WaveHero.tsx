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
    <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 900 760" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#1e5a9a"/>
              <stop offset="42%"  stopColor="#3a8ec8"/>
              <stop offset="72%"  stopColor="#52a8d8"/>
              <stop offset="100%" stopColor="#2a6035"/>
            </linearGradient>
            <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a7245"/><stop offset="100%" stopColor="#1e4828"/>
            </linearGradient>
            <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8a52"/><stop offset="100%" stopColor="#245830"/>
            </linearGradient>
            <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4898d0" stopOpacity="0.80"/>
              <stop offset="100%" stopColor="#2a6090" stopOpacity="0.60"/>
            </linearGradient>
            <radialGradient id="crossHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="skyGlow" cx="50%" cy="26%" r="55%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.16"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="900" height="760" fill="url(#sky)"/>
          <ellipse cx="450" cy="200" rx="520" ry="310" fill="url(#skyGlow)" className="cross-glow"/>

          {/* Clouds */}
          <ellipse cx="120" cy="88"  rx="88"  ry="25" fill="white" opacity="0.22"/>
          <ellipse cx="178" cy="75"  rx="58"  ry="19" fill="white" opacity="0.17"/>
          <ellipse cx="570" cy="80"  rx="100" ry="24" fill="white" opacity="0.18"/>
          <ellipse cx="635" cy="65"  rx="62"  ry="18" fill="white" opacity="0.13"/>
          <ellipse cx="380" cy="102" rx="68"  ry="17" fill="white" opacity="0.10"/>

          {/* ── CROSS — centred at x=450, top=148 (well inside), bottom=288 ── */}
          <g className="rays-breath" transform="translate(450,218)">
            {Array.from({length:20},(_,i)=>{
              const a=i*18, rad=(a-90)*Math.PI/180;
              const r0=24;
              const isUp=(a>=288||a<=72);
              const r1=isUp?165+(i%4===0?35:15):300+(i%3===0?50:15);
              return <line key={i}
                x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                stroke="white"
                strokeWidth={i%5===0?"1.5":i%3===0?"0.9":"0.5"}
                opacity={i%5===0?"0.88":"0.55"}/>;
            })}
          </g>
          <ellipse cx="450" cy="218" rx="95" ry="95" fill="url(#crossHalo)" className="cross-glow"/>
          {/* Cross: vertical top=148 bottom=288, horizontal at y=200 */}
          <g className="cross-glow" transform="translate(450,218)">
            <rect x="-7" y="-70" width="14" height="140" rx="4" fill="white" opacity="0.97"/>
            <rect x="-48" y="-20" width="96" height="14"  rx="4" fill="white" opacity="0.97"/>
          </g>

          {/* ── HILLS ── */}
          <path d="M0,445 L90,390 L185,420 L280,362 L375,396 L470,345 L565,380 L660,328 L755,365 L900,338 L900,515 L0,515 Z"
            fill="url(#hill1)"/>
          <path d="M0,482 L110,432 L215,462 L325,408 L430,442 L540,392 L645,426 L755,395 L900,412 L900,548 L0,548 Z"
            fill="url(#hill2)"/>

          {/* ── HOUSES LEFT SIDE ── */}
          <g transform="translate(28,422)">
            <rect x="0" y="18" width="38" height="32" fill="#e8e0d0" rx="1"/>
            <polygon points="19,0 -2,20 40,20" fill="#3a5c28"/>
            <rect x="13" y="28" width="12" height="22" fill="#7a6040" rx="1"/>
            <rect x="3"  y="22" width="9"  height="10" fill="rgba(180,210,240,0.5)" rx="1"/>
            <rect x="26" y="22" width="9"  height="10" fill="rgba(180,210,240,0.5)" rx="1"/>
          </g>
          <g transform="translate(72,412)">
            <rect x="0" y="20" width="32" height="38" fill="#ddd8c8" rx="1"/>
            <polygon points="16,0 -2,22 34,22" fill="#2a5230"/>
            <rect x="11" y="35" width="10" height="23" fill="#6a5030" rx="1"/>
            <rect x="2"  y="24" width="8"  height="9"  fill="rgba(180,210,240,0.45)" rx="1"/>
            <rect x="22" y="24" width="8"  height="9"  fill="rgba(180,210,240,0.45)" rx="1"/>
          </g>
          <g transform="translate(110,430)">
            <rect x="0" y="12" width="28" height="26" fill="#e4dcc8" rx="1"/>
            <polygon points="14,0 -1,14 29,14" fill="#4a6830"/>
            <rect x="9"  y="20" width="10" height="18" fill="#7a5838" rx="1"/>
            <rect x="1"  y="14" width="7"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
            <rect x="20" y="14" width="7"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
          </g>
          {/* Back-row house left */}
          <g transform="translate(52,402)">
            <rect x="0" y="14" width="30" height="28" fill="#d8d0bc" rx="1"/>
            <polygon points="15,0 -1,16 31,16" fill="#2e4820"/>
            <rect x="10" y="24" width="10" height="18" fill="#5a4828" rx="1"/>
          </g>
          {/* Tree between left houses */}
          <g transform="translate(140,406)">
            <rect x="-2" y="20" width="5" height="24" rx="2" fill="#2a4820"/>
            <ellipse cx="1" cy="13" rx="13" ry="15" fill="#3a6830"/>
          </g>

          {/* ── CHAPEL — right side x≈580 ── */}
          <g transform="translate(558, 345)">
            <ellipse cx="110" cy="174" rx="128" ry="15" fill="#1a4a22" opacity="0.45"/>

            {/* Bushes */}
            <ellipse cx="20"  cy="165" rx="20" ry="12" fill="#2e6e34"/>
            <ellipse cx="37"  cy="160" rx="16" ry="10" fill="#388040"/>
            <ellipse cx="52"  cy="163" rx="14" ry="9"  fill="#2e6e34"/>
            <ellipse cx="168" cy="162" rx="14" ry="9"  fill="#2e6e34"/>
            <ellipse cx="183" cy="160" rx="16" ry="10" fill="#388040"/>
            <ellipse cx="200" cy="165" rx="20" ry="12" fill="#2e6e34"/>

            {/* Deciduous tree left */}
            <rect x="22" y="102" width="6" height="58" rx="2" fill="#345a26"/>
            <ellipse cx="25" cy="93"  rx="23" ry="25" fill="#3e7038"/>
            <ellipse cx="14" cy="103" rx="15" ry="17" fill="#346030"/>
            <ellipse cx="37" cy="101" rx="13" ry="15" fill="#4a8044"/>

            {/* Pine right */}
            <rect x="196" y="115" width="6" height="48" rx="2" fill="#2a4820"/>
            <polygon points="199,52 181,118 217,118" fill="#2a5e28"/>
            <polygon points="199,67 178,122 220,122" fill="#347030"/>
            <polygon points="199,83 175,126 223,126" fill="#2a5e28"/>

            {/* Body */}
            <rect x="68" y="97" width="92" height="68" rx="2" fill="#f2efe6"/>
            <rect x="68" y="97" width="92" height="68" rx="2" fill="none" stroke="#2a4828" strokeWidth="1.5"/>
            {/* Roof */}
            <polygon points="114,50 63,100 165,100" fill="#2a5230"/>
            <polygon points="114,50 63,100 165,100" fill="none" stroke="#1e3a22" strokeWidth="1.5"/>
            {/* Steeple */}
            <rect x="103" y="20" width="22" height="32" rx="2" fill="#f2efe6"/>
            <rect x="103" y="20" width="22" height="32" rx="2" fill="none" stroke="#2a4828" strokeWidth="1.2"/>
            <polygon points="114,3 102,22 126,22" fill="#2a5230"/>
            <polygon points="114,3 102,22 126,22" fill="none" stroke="#1e3a22" strokeWidth="1"/>
            {/* Steeple cross */}
            <rect x="112.5" y="-8"  width="3"  height="13" rx="1" fill="white"/>
            <rect x="108"   y="-2"  width="12" height="3"  rx="1" fill="white"/>
            {/* Rosace */}
            <circle cx="114" cy="120" r="13" fill="white"   stroke="#2a4828" strokeWidth="1.5"/>
            <circle cx="114" cy="120" r="8"  fill="none"    stroke="#5a8ac8" strokeWidth="1.2"/>
            <circle cx="114" cy="120" r="3"  fill="#5a8ac8"/>
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i}
                x1={114+Math.cos(a*Math.PI/180)*3} y1={120+Math.sin(a*Math.PI/180)*3}
                x2={114+Math.cos(a*Math.PI/180)*8} y2={120+Math.sin(a*Math.PI/180)*8}
                stroke="#5a8ac8" strokeWidth="1"/>
            ))}
            {/* Door */}
            <path d="M100,165 L100,138 Q114,125 128,138 L128,165 Z" fill="#8a7040" stroke="#2a4828" strokeWidth="1.2"/>
            <line x1="114" y1="127" x2="114" y2="165" stroke="#6a5030" strokeWidth="0.8"/>
            <line x1="100" y1="150" x2="128" y2="150" stroke="#6a5030" strokeWidth="0.8"/>
            <circle cx="111" cy="152" r="1.8" fill="#4a3820"/>
            <path d="M94,165 L94,135 Q114,116 134,135 L134,165" fill="none" stroke="#9a9080" strokeWidth="2.5" opacity="0.5"/>
            {/* Windows */}
            <rect x="74"  y="108" width="12" height="16" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="1"/>
            <rect x="142" y="108" width="12" height="16" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="1"/>
            {/* Steps */}
            <rect x="101" y="165" width="26" height="4" rx="1" fill="#c8bea8"/>
            <rect x="104" y="169" width="20" height="3" rx="1" fill="#b8ae98"/>
          </g>

          {/* ── HOUSES RIGHT (smaller, flanking chapel) ── */}
          <g transform="translate(760,430)">
            <rect x="0" y="16" width="34" height="30" fill="#e0d8c4" rx="1"/>
            <polygon points="17,0 -2,18 36,18" fill="#344e22"/>
            <rect x="12" y="26" width="10" height="20" fill="#6a5030" rx="1"/>
            <rect x="2"  y="20" width="8"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
            <rect x="24" y="20" width="8"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
          </g>
          <g transform="translate(800,440)">
            <rect x="0" y="12" width="26" height="24" fill="#e4dcc8" rx="1"/>
            <polygon points="13,0 -1,14 27,14" fill="#4a6830"/>
            <rect x="8"  y="18" width="10" height="18" fill="#7a5838" rx="1"/>
          </g>
          <g transform="translate(548,432)">
            <rect x="0" y="14" width="30" height="28" fill="#ddd8c0" rx="1"/>
            <polygon points="15,0 -1,16 31,16" fill="#2e4820"/>
            <rect x="10" y="24" width="10" height="18" fill="#5a4828" rx="1"/>
          </g>

          {/* ── LAKE ── */}
          <ellipse cx="450" cy="620" rx="490" ry="55" fill="url(#lake)"/>
          <path d="M80,614 Q240,606 430,614 Q600,622 780,608" stroke="rgba(255,255,255,0.20)" strokeWidth="1.8" fill="none"/>
          <path d="M120,626 Q300,618 470,627 Q630,635 800,620" stroke="rgba(255,255,255,0.11)" strokeWidth="1.2" fill="none"/>

          {/* Foreground grass */}
          <path d="M0,652 Q220,638 450,650 Q680,662 900,645 L900,695 L0,695 Z"
            fill="#2e6e38" opacity="0.88"/>

          {/* Colour waves */}
          <g className="wave-1"><path d="M-80,675 C200,650 480,695 800,675 C1020,660 1200,680 1520,665 L1520,760 L-80,760 Z" fill="#C0392B" opacity="0.97"/></g>
          <g className="wave-2"><path d="M-80,686 C180,663 460,706 780,686 C1080,666 1272,686 1520,674 L1520,760 L-80,760 Z" fill="#E67E22" opacity="0.92"/></g>
          <g className="wave-3"><path d="M-80,696 C195,675 475,715 795,696 C1090,677 1275,696 1520,685 L1520,760 L-80,760 Z" fill="#F1C40F" opacity="0.85"/></g>
          <g className="wave-4"><path d="M-80,705 C185,685 465,723 785,705 C1082,687 1273,705 1520,694 L1520,760 L-80,760 Z" fill="#2980B9" opacity="0.92"/></g>
          <g className="wave-5"><path d="M-80,714 C188,696 468,732 788,714 C1083,696 1273,714 1520,703 L1520,760 L-80,760 Z" fill="#1ABC9C" opacity="0.85"/></g>
          <path d="M-80,722 C192,706 472,740 792,722 C1085,706 1274,722 1520,712 L1520,760 L-80,760 Z" fill="#27AE60" opacity="0.97"/>
        </svg>
      </div>

      {/* ── TEXT — centred, below cross zone ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-20"
        style={{ paddingTop: "330px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/55 mb-4 uppercase"
          style={{ fontFamily: "system-ui", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,56px)", textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/75 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
          {subtitle}
        </p>
        <a href={ctaHref}
          className="fade-up-4 mt-7 mb-6 inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
          {ctaLabel} ↓
        </a>
      </div>
    </div>
  );
}
