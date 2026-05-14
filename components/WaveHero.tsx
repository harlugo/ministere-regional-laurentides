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
        <svg viewBox="0 0 800 820" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wh_sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2a6aaa"/>
              <stop offset="45%"  stopColor="#4a9ad4"/>
              <stop offset="75%"  stopColor="#5aaed8"/>
              <stop offset="100%" stopColor="#2e6e3a"/>
            </linearGradient>
            <linearGradient id="wh_hill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a7245"/>
              <stop offset="100%" stopColor="#1e4828"/>
            </linearGradient>
            <linearGradient id="wh_hill2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8855"/>
              <stop offset="100%" stopColor="#266035"/>
            </linearGradient>
            <linearGradient id="wh_lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8ec8" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#2a5e88" stopOpacity="0.70"/>
            </linearGradient>
            <radialGradient id="wh_cross_halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.30"/>
              <stop offset="40%"  stopColor="white" stopOpacity="0.10"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="wh_sky_glow" cx="50%" cy="28%" r="55%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="800" height="820" fill="url(#wh_sky)"/>

          {/* Sky glow behind cross */}
          <ellipse cx="400" cy="230" rx="500" ry="340" fill="url(#wh_sky_glow)" className="cross-glow"/>

          {/* Clouds */}
          <ellipse cx="140" cy="95"  rx="95"  ry="28" fill="white" opacity="0.22"/>
          <ellipse cx="200" cy="82"  rx="62"  ry="21" fill="white" opacity="0.17"/>
          <ellipse cx="570" cy="80"  rx="105" ry="26" fill="white" opacity="0.19"/>
          <ellipse cx="635" cy="66"  rx="68"  ry="20" fill="white" opacity="0.14"/>
          <ellipse cx="390" cy="108" rx="72"  ry="19" fill="white" opacity="0.11"/>

          {/* ── RAYS from cross centre (400, 230) ── */}
          <g className="rays-breath" transform="translate(400,230)">
            {Array.from({length:24},(_,i)=>{
              const a=i*15, rad=(a-90)*Math.PI/180;
              const r0=26;
              const isUp=(a>=300||a<=60);
              const r1=isUp?185+(i%4===0?40:18):320+(i%3===0?55:18);
              return <line key={i}
                x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                stroke="white"
                strokeWidth={i%6===0?"1.6":i%3===0?"0.9":"0.5"}
                opacity={i%6===0?"0.90":"0.55"}/>;
            })}
          </g>

          {/* ── CROSS — centre (400,230), fully visible top=165 bottom=305 ── */}
          <g className="cross-glow" transform="translate(400,230)">
            <rect x="-7.5" y="-65" width="15" height="135" rx="4.5" fill="white" opacity="0.97"/>
            <rect x="-50"  y="-20" width="100" height="15"  rx="4.5" fill="white" opacity="0.97"/>
          </g>
          {/* Cross inner halo */}
          <ellipse cx="400" cy="230" rx="90" ry="90" fill="url(#wh_cross_halo)" className="cross-glow"/>

          {/* ── BACKGROUND HILLS ── */}
          <path d="M0,480 L80,420 L170,452 L265,392 L360,428 L450,372 L540,408 L620,358 L700,395 L800,365 L800,540 L0,540 Z"
            fill="url(#wh_hill)"/>
          <path d="M0,520 L100,462 L200,490 L310,438 L410,468 L510,415 L610,448 L710,418 L800,440 L800,570 L0,570 Z"
            fill="url(#wh_hill2)"/>

          {/* ── CHAPEL SCENE — centred, sits on the hill ── */}
          <g transform="translate(280, 362)">

            {/* Ground / base */}
            <ellipse cx="120" cy="168" rx="145" ry="18" fill="#1e5228" opacity="0.6"/>

            {/* Bushes left */}
            <ellipse cx="18"  cy="158" rx="22" ry="14" fill="#2a6a32"/>
            <ellipse cx="35"  cy="152" rx="18" ry="12" fill="#337a3a"/>
            <ellipse cx="52"  cy="155" rx="16" ry="11" fill="#2a6a32"/>

            {/* Bushes right */}
            <ellipse cx="188" cy="155" rx="16" ry="11" fill="#2a6a32"/>
            <ellipse cx="205" cy="152" rx="18" ry="12" fill="#337a3a"/>
            <ellipse cx="222" cy="158" rx="22" ry="14" fill="#2a6a32"/>

            {/* Deciduous tree — left */}
            <rect x="28" y="98" width="7" height="55" rx="3" fill="#3a5a28"/>
            <ellipse cx="31" cy="90" rx="26" ry="28" fill="#3a7235"/>
            <ellipse cx="20" cy="100" rx="18" ry="20" fill="#2e6230"/>
            <ellipse cx="43" cy="98" rx="16" ry="18" fill="#468040"/>

            {/* Pine tree — right */}
            <rect x="208" y="110" width="6" height="50" rx="3" fill="#2a4a1e"/>
            <polygon points="211,48 192,115 230,115" fill="#2a5c28"/>
            <polygon points="211,62 188,118 234,118" fill="#337030"/>
            <polygon points="211,78 185,122 237,122" fill="#2a5c28"/>

            {/* Chapel body */}
            <rect x="72" y="95" width="96" height="68" rx="3" fill="#f0ede5"/>
            <rect x="72" y="95" width="96" height="68" rx="3" fill="none" stroke="#2a4a28" strokeWidth="1.5"/>

            {/* Roof */}
            <polygon points="120,48 68,98 172,98" fill="#2a5230"/>
            <polygon points="120,48 68,98 172,98" fill="none" stroke="#1e3a22" strokeWidth="1.5"/>

            {/* Steeple base */}
            <rect x="108" y="18" width="24" height="32" rx="2" fill="#f0ede5"/>
            <rect x="108" y="18" width="24" height="32" rx="2" fill="none" stroke="#2a4a28" strokeWidth="1.2"/>

            {/* Steeple spire */}
            <polygon points="120,0 107,20 133,20" fill="#2a5230"/>
            <polygon points="120,0 107,20 133,20" fill="none" stroke="#1e3a22" strokeWidth="1"/>

            {/* Steeple cross */}
            <rect x="118.5" y="-10" width="3" height="12" rx="1" fill="white"/>
            <rect x="114"   y="-4"  width="12" height="3"  rx="1" fill="white"/>

            {/* Rose window */}
            <circle cx="120" cy="118" r="14" fill="white" stroke="#2a4a28" strokeWidth="1.5"/>
            <circle cx="120" cy="118" r="9"  fill="none" stroke="#5a8ac8" strokeWidth="1.2"/>
            <circle cx="120" cy="118" r="3"  fill="#5a8ac8"/>
            {[0,45,90,135,180,225,270,315].map((a,i)=>(
              <line key={i}
                x1={120+Math.cos(a*Math.PI/180)*3} y1={118+Math.sin(a*Math.PI/180)*3}
                x2={120+Math.cos(a*Math.PI/180)*9} y2={118+Math.sin(a*Math.PI/180)*9}
                stroke="#5a8ac8" strokeWidth="1"/>
            ))}

            {/* Door arch */}
            <path d="M104,163 L104,135 Q120,122 136,135 L136,163 Z"
              fill="#8a7040" stroke="#2a4a28" strokeWidth="1.2"/>
            <path d="M104,163 L104,135 Q120,122 136,135 L136,163 Z"
              fill="none" stroke="#2a4a28" strokeWidth="1.2"/>
            {/* Door panels */}
            <line x1="120" y1="125" x2="120" y2="163" stroke="#6a5030" strokeWidth="0.8"/>
            <line x1="104" y1="148" x2="136" y2="148" stroke="#6a5030" strokeWidth="0.8"/>
            {/* Door handle */}
            <circle cx="116" cy="150" r="2" fill="#4a3820"/>

            {/* Stone arch around door */}
            <path d="M98,163 L98,132 Q120,114 142,132 L142,163"
              fill="none" stroke="#8a8878" strokeWidth="2.5" opacity="0.6"/>

            {/* Windows */}
            <rect x="78"  y="108" width="14" height="18" rx="2" fill="white" stroke="#2a4a28" strokeWidth="1"/>
            <rect x="148" y="108" width="14" height="18" rx="2" fill="white" stroke="#2a4a28" strokeWidth="1"/>
            <line x1="85"  y1="108" x2="85"  y2="126" stroke="#aac8e8" strokeWidth="0.8"/>
            <line x1="155" y1="108" x2="155" y2="126" stroke="#aac8e8" strokeWidth="0.8"/>

            {/* Steps */}
            <rect x="105" y="163" width="30" height="4"  rx="1" fill="#c8c0a8"/>
            <rect x="108" y="167" width="24" height="3"  rx="1" fill="#b8b098"/>

          </g>

          {/* ── LAKE — in front of chapel scene ── */}
          <ellipse cx="400" cy="612" rx="420" ry="58" fill="url(#wh_lake)"/>
          {/* Lake shimmer */}
          <path d="M140,607 Q260,600 400,608 Q530,615 660,604" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" fill="none"/>
          <path d="M180,618 Q310,611 440,619 Q560,626 680,614" stroke="rgba(255,255,255,0.10)" strokeWidth="1.2" fill="none"/>
          {/* Chapel reflection in lake — soft */}
          <ellipse cx="400" cy="625" rx="55" ry="12" fill="rgba(240,237,229,0.12)"/>

          {/* Foreground grass strip */}
          <path d="M0,635 Q200,620 400,632 Q600,644 800,630 L800,680 L0,680 Z"
            fill="#2e6e38" opacity="0.9"/>

          {/* Colour waves */}
          <g className="wave-1"><path d="M-80,668 C200,640 480,690 800,668 C1020,653 1200,675 1520,661 L1520,820 L-80,820 Z" fill="#C0392B" opacity="0.97"/></g>
          <g className="wave-2"><path d="M-80,681 C180,655 460,703 780,681 C1080,659 1272,683 1520,671 L1520,820 L-80,820 Z" fill="#E67E22" opacity="0.92"/></g>
          <g className="wave-3"><path d="M-80,693 C195,669 475,715 795,693 C1090,671 1275,693 1520,681 L1520,820 L-80,820 Z" fill="#F1C40F" opacity="0.85"/></g>
          <g className="wave-4"><path d="M-80,703 C185,681 465,725 785,703 C1082,681 1273,703 1520,691 L1520,820 L-80,820 Z" fill="#2980B9" opacity="0.92"/></g>
          <g className="wave-5"><path d="M-80,713 C188,693 468,735 788,713 C1083,693 1273,713 1520,701 L1520,820 L-80,820 Z" fill="#1ABC9C" opacity="0.85"/></g>
          <path d="M-80,723 C192,705 472,745 792,723 C1085,705 1274,723 1520,711 L1520,820 L-80,820 Z" fill="#27AE60" opacity="0.97"/>
        </svg>
      </div>

      {/* ── TEXT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-20"
        style={{ paddingTop: "340px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/55 mb-4 uppercase"
          style={{ fontFamily: "system-ui", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,58px)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
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
