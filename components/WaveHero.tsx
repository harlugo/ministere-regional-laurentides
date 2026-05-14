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

      {/* ── SINGLE SVG SCENE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"  stopColor="#1e5a9a"/>
              <stop offset="42%" stopColor="#3a8ec8"/>
              <stop offset="72%" stopColor="#52a8d8"/>
              <stop offset="100%" stopColor="#2a6035"/>
            </linearGradient>
            <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a7245"/>
              <stop offset="100%" stopColor="#1e4828"/>
            </linearGradient>
            <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8a52"/>
              <stop offset="100%" stopColor="#245830"/>
            </linearGradient>
            <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4898d0" stopOpacity="0.80"/>
              <stop offset="100%" stopColor="#2a6090" stopOpacity="0.65"/>
            </linearGradient>
            <radialGradient id="crossGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="skyGlow" cx="50%" cy="30%" r="55%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.16"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="900" height="700" fill="url(#sky)"/>

          {/* Sky glow */}
          <ellipse cx="450" cy="210" rx="520" ry="320" fill="url(#skyGlow)" className="cross-glow"/>

          {/* Clouds */}
          <ellipse cx="120" cy="85"  rx="88"  ry="25" fill="white" opacity="0.22"/>
          <ellipse cx="175" cy="73"  rx="58"  ry="19" fill="white" opacity="0.17"/>
          <ellipse cx="560" cy="78"  rx="100" ry="24" fill="white" opacity="0.18"/>
          <ellipse cx="625" cy="64"  rx="62"  ry="18" fill="white" opacity="0.13"/>
          <ellipse cx="360" cy="100" rx="68"  ry="17" fill="white" opacity="0.10"/>

          {/* ── CROSS — centred horizontally at x=260 (left zone), y=220 fully visible ── */}
          {/* Cross top = 220-62=158, well inside viewBox */}
          <g className="rays-breath" transform="translate(260,220)">
            {Array.from({length:20},(_,i)=>{
              const a=i*18, rad=(a-90)*Math.PI/180;
              const r0=24;
              const isUp=(a>=288||a<=72);
              const r1=isUp?165+(i%4===0?35:15):290+(i%3===0?50:15);
              return <line key={i}
                x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                stroke="white"
                strokeWidth={i%5===0?"1.5":i%3===0?"0.9":"0.5"}
                opacity={i%5===0?"0.88":"0.55"}/>;
            })}
          </g>
          {/* Cross halo */}
          <ellipse cx="260" cy="220" rx="95" ry="95" fill="url(#crossGlow)" className="cross-glow"/>
          {/* Cross — top=158, bottom=290, fully visible */}
          <g className="cross-glow" transform="translate(260,220)">
            <rect x="-7" y="-62" width="14" height="130" rx="4" fill="white" opacity="0.97"/>
            <rect x="-46" y="-18" width="92" height="14"  rx="4" fill="white" opacity="0.97"/>
          </g>

          {/* ── BACKGROUND HILLS ── */}
          <path d="M0,440 L90,385 L185,415 L280,358 L375,392 L470,342 L565,376 L655,325 L745,362 L900,330 L900,510 L0,510 Z"
            fill="url(#hill1)"/>
          <path d="M0,478 L110,428 L215,458 L325,405 L430,438 L540,388 L645,422 L750,390 L900,408 L900,545 L0,545 Z"
            fill="url(#hill2)"/>

          {/* ── VILLAGE — left side, various houses ── */}
          {/* House 1 */}
          <g transform="translate(38,418)">
            <rect x="0" y="18" width="38" height="32" fill="#e8e0d0" rx="1"/>
            <polygon points="19,0 -2,20 40,20" fill="#3a5c28"/>
            <rect x="13" y="28" width="12" height="22" fill="#7a6040" rx="1"/>
            <rect x="3"  y="22" width="9"  height="10" fill="rgba(180,210,240,0.5)" rx="1"/>
            <rect x="26" y="22" width="9"  height="10" fill="rgba(180,210,240,0.5)" rx="1"/>
          </g>
          {/* House 2 — taller */}
          <g transform="translate(82,408)">
            <rect x="0" y="20" width="32" height="40" fill="#ddd8c8" rx="1"/>
            <polygon points="16,0 -2,22 34,22" fill="#2a5230"/>
            <rect x="11" y="35" width="10" height="25" fill="#6a5030" rx="1"/>
            <rect x="2"  y="24" width="8"  height="9"  fill="rgba(180,210,240,0.45)" rx="1"/>
            <rect x="22" y="24" width="8"  height="9"  fill="rgba(180,210,240,0.45)" rx="1"/>
          </g>
          {/* House 3 — small */}
          <g transform="translate(120,428)">
            <rect x="0" y="12" width="28" height="26" fill="#e4dcc8" rx="1"/>
            <polygon points="14,0 -1,14 29,14" fill="#4a6830"/>
            <rect x="9"  y="20" width="10" height="18" fill="#7a5838" rx="1"/>
            <rect x="1"  y="14" width="7"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
            <rect x="20" y="14" width="7"  height="8"  fill="rgba(180,210,240,0.4)" rx="1"/>
          </g>
          {/* House 4 */}
          <g transform="translate(155,415)">
            <rect x="0" y="16" width="35" height="34" fill="#e0d8c4" rx="1"/>
            <polygon points="17,0 -2,18 37,18" fill="#344e22"/>
            <rect x="12" y="28" width="11" height="22" fill="#6a5030" rx="1"/>
            <rect x="2"  y="20" width="8"  height="9"  fill="rgba(180,210,240,0.4)" rx="1"/>
            <rect x="25" y="20" width="8"  height="9"  fill="rgba(180,210,240,0.4)" rx="1"/>
          </g>
          {/* House 5 — back row */}
          <g transform="translate(58,398)">
            <rect x="0" y="14" width="30" height="28" fill="#d8d0bc" rx="1"/>
            <polygon points="15,0 -1,16 31,16" fill="#2e4820"/>
            <rect x="10" y="24" width="10" height="18" fill="#5a4828" rx="1"/>
          </g>

          {/* Trees between houses */}
          <g transform="translate(148,400)">
            <rect x="-2" y="18" width="5" height="22" rx="2" fill="#2a4820"/>
            <ellipse cx="1" cy="12" rx="12" ry="14" fill="#3a6830"/>
          </g>

          {/* ── CHAPEL — right side, x≈560 ── */}
          <g transform="translate(530, 340)">

            {/* Ground shadow */}
            <ellipse cx="118" cy="178" rx="135" ry="16" fill="#1a4a22" opacity="0.5"/>

            {/* Bushes left of chapel */}
            <ellipse cx="22"  cy="168" rx="22" ry="13" fill="#2e6e34"/>
            <ellipse cx="40"  cy="163" rx="18" ry="11" fill="#388040"/>
            <ellipse cx="55"  cy="166" rx="15" ry="10" fill="#2e6e34"/>

            {/* Bushes right */}
            <ellipse cx="180" cy="165" rx="16" ry="10" fill="#2e6e34"/>
            <ellipse cx="196" cy="163" rx="18" ry="11" fill="#388040"/>
            <ellipse cx="214" cy="168" rx="22" ry="13" fill="#2e6e34"/>

            {/* Deciduous tree — left */}
            <rect x="25" y="105" width="6" height="58" rx="2" fill="#345a26"/>
            <ellipse cx="28" cy="96"  rx="24" ry="26" fill="#3e7038"/>
            <ellipse cx="17" cy="106" rx="16" ry="18" fill="#346030"/>
            <ellipse cx="40" cy="104" rx="14" ry="16" fill="#4a8044"/>

            {/* Pine tree — right */}
            <rect x="207" y="118" width="6" height="48" rx="2" fill="#2a4820"/>
            <polygon points="210,55 192,120 228,120" fill="#2a5e28"/>
            <polygon points="210,70 188,124 232,124" fill="#347030"/>
            <polygon points="210,86 185,128 235,128" fill="#2a5e28"/>

            {/* Chapel body */}
            <rect x="70" y="100" width="96" height="70" rx="2" fill="#f2efe6"/>
            <rect x="70" y="100" width="96" height="70" rx="2" fill="none" stroke="#2a4828" strokeWidth="1.5"/>

            {/* Roof */}
            <polygon points="118,52 65,103 171,103" fill="#2a5230"/>
            <polygon points="118,52 65,103 171,103" fill="none" stroke="#1e3a22" strokeWidth="1.5"/>

            {/* Steeple base */}
            <rect x="106" y="22" width="24" height="32" rx="2" fill="#f2efe6"/>
            <rect x="106" y="22" width="24" height="32" rx="2" fill="none" stroke="#2a4828" strokeWidth="1.2"/>

            {/* Steeple spire */}
            <polygon points="118,4 105,24 131,24" fill="#2a5230"/>
            <polygon points="118,4 105,24 131,24" fill="none" stroke="#1e3a22" strokeWidth="1"/>

            {/* Chapel cross on spire */}
            <rect x="116.5" y="-7" width="3"  height="13" rx="1" fill="white"/>
            <rect x="112"   y="-2" width="12" height="3"  rx="1" fill="white"/>

            {/* Rosace */}
            <circle cx="118" cy="122" r="14" fill="white"   stroke="#2a4828" strokeWidth="1.5"/>
            <circle cx="118" cy="122" r="9"  fill="none"    stroke="#5a8ac8" strokeWidth="1.2"/>
            <circle cx="118" cy="122" r="3"  fill="#5a8ac8"/>
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i}
                x1={118+Math.cos(a*Math.PI/180)*3} y1={122+Math.sin(a*Math.PI/180)*3}
                x2={118+Math.cos(a*Math.PI/180)*9} y2={122+Math.sin(a*Math.PI/180)*9}
                stroke="#5a8ac8" strokeWidth="1"/>
            ))}

            {/* Door arch */}
            <path d="M103,170 L103,142 Q118,128 133,142 L133,170 Z" fill="#8a7040" stroke="#2a4828" strokeWidth="1.2"/>
            <line x1="118" y1="130" x2="118" y2="170" stroke="#6a5030" strokeWidth="0.8"/>
            <line x1="103" y1="154" x2="133" y2="154" stroke="#6a5030" strokeWidth="0.8"/>
            <circle cx="115" cy="156" r="1.8" fill="#4a3820"/>

            {/* Stone arch */}
            <path d="M97,170 L97,138 Q118,120 139,138 L139,170" fill="none" stroke="#9a9080" strokeWidth="2.5" opacity="0.55"/>

            {/* Side windows */}
            <rect x="76"  y="112" width="13" height="17" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="1"/>
            <rect x="147" y="112" width="13" height="17" rx="2" fill="rgba(180,210,240,0.7)" stroke="#2a4828" strokeWidth="1"/>

            {/* Steps */}
            <rect x="104" y="170" width="28" height="4" rx="1" fill="#c8bea8"/>
            <rect x="107" y="174" width="22" height="3" rx="1" fill="#b8ae98"/>
          </g>

          {/* ── LAKE — full width ── */}
          <ellipse cx="450" cy="610" rx="480" ry="56" fill="url(#lake)"/>
          <path d="M100,604 Q250,597 430,606 Q580,614 720,600" stroke="rgba(255,255,255,0.20)" strokeWidth="1.8" fill="none"/>
          <path d="M150,617 Q310,610 460,619 Q600,627 740,613" stroke="rgba(255,255,255,0.11)" strokeWidth="1.2" fill="none"/>

          {/* Foreground grass */}
          <path d="M0,648 Q220,634 450,645 Q680,656 900,638 L900,690 L0,690 Z"
            fill="#2e6e38" opacity="0.88"/>

          {/* Colour waves */}
          <g className="wave-1"><path d="M-80,668 C200,642 480,690 800,668 L1520,655 L1520,700 L-80,700 Z" fill="#C0392B" opacity="0.97"/></g>
          <g className="wave-2"><path d="M-80,679 C180,655 460,700 780,679 L1520,666 L1520,700 L-80,700 Z" fill="#E67E22" opacity="0.92"/></g>
          <g className="wave-3"><path d="M-80,688 C195,666 475,710 795,688 L1520,676 L1520,700 L-80,700 Z" fill="#F1C40F" opacity="0.85"/></g>
          <g className="wave-4"><path d="M-80,695 C185,675 465,717 785,695 L1520,683 L1520,700 L-80,700 Z" fill="#2980B9" opacity="0.92"/></g>
          <g className="wave-5"><path d="M-80,700 C188,682 468,722 788,700 L1520,689 L1520,710 L-80,710 Z" fill="#1ABC9C" opacity="0.85"/></g>
          <path      d="M-80,706 C192,690 472,728 792,706 L1520,695 L1520,720 L-80,720 Z" fill="#27AE60" opacity="0.97"/>
        </svg>
      </div>

      {/* ── TEXT — left-aligned, away from chapel on right ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-14 pb-24"
        style={{ maxWidth: "480px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/55 mb-5 uppercase"
          style={{ fontFamily: "system-ui", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(28px,4.5vw,52px)", textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
          {title}
        </h1>
        <p className="fade-up-3 text-white/75 leading-relaxed mb-8 max-w-sm"
          style={{ fontFamily: "system-ui", fontSize: "15px", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
          {subtitle}
        </p>
        <div className="fade-up-4">
          <a href={ctaHref}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
            style={{ fontFamily: "system-ui", background: "white", color: "#1a3d2b", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
            {ctaLabel} ↓
          </a>
        </div>
      </div>
    </div>
  );
}
