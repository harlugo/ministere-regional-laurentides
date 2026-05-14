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

      {/* ── SINGLE SVG — background, mountains, cross, rays, waves — all in one ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Sky gradient — bright blue top to forest green bottom */}
            <linearGradient id="wh_sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#1a4a7a"/>
              <stop offset="40%"  stopColor="#3478b0"/>
              <stop offset="72%"  stopColor="#4892c0"/>
              <stop offset="100%" stopColor="#2a5c3a"/>
            </linearGradient>
            {/* Mountain gradients — rich greens */}
            <linearGradient id="wh_mfar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c5c38"/>
              <stop offset="100%" stopColor="#163a20"/>
            </linearGradient>
            <linearGradient id="wh_mmid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a7045"/>
              <stop offset="100%" stopColor="#1e4828"/>
            </linearGradient>
            <linearGradient id="wh_mmain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a8855"/>
              <stop offset="100%" stopColor="#265832"/>
            </linearGradient>
            {/* Lake */}
            <linearGradient id="wh_lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a6aaa" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#1e4a2a" stopOpacity="0.5"/>
            </linearGradient>
            {/* Cross halo — radial from cross centre */}
            <radialGradient id="wh_halo_big" cx="50%" cy="0%" r="70%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.20"/>
              <stop offset="50%"  stopColor="white" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="wh_halo_inner" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="800" height="800" fill="url(#wh_sky)"/>

          {/* Clouds */}
          <ellipse cx="130" cy="90"  rx="90"  ry="26" fill="white" opacity="0.18"/>
          <ellipse cx="185" cy="78"  rx="60"  ry="20" fill="white" opacity="0.14"/>
          <ellipse cx="580" cy="75"  rx="100" ry="25" fill="white" opacity="0.16"/>
          <ellipse cx="640" cy="62"  rx="65"  ry="18" fill="white" opacity="0.12"/>
          <ellipse cx="380" cy="105" rx="70"  ry="18" fill="white" opacity="0.09"/>

          {/* Stars — subtle */}
          {[[60,35],[130,22],[220,48],[340,28],[490,18],[610,35],[730,25],[160,65],[430,15]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%3===0?1.4:0.9}
              fill="white" opacity={0.15+((i*0.07)%0.25)}/>
          ))}

          {/* Far mountains */}
          <path d="M0,420 L80,348 L160,378 L250,308 L340,348 L430,285 L520,322 L600,268 L680,305 L760,262 L800,282 L800,480 L0,480 Z"
            fill="url(#wh_mfar)"/>

          {/* Mid mountains */}
          <path d="M0,460 L100,385 L195,415 L295,348 L385,388 L475,328 L558,365 L635,308 L712,348 L782,308 L800,328 L800,510 L0,510 Z"
            fill="url(#wh_mmid)"/>

          {/* Main mountain peaks */}
          <path d="M0,510 L90,455 L160,475 L245,425 L330,458 L400,472 L460,428 L510,455 L560,438 L600,460 L660,480 L730,498 L800,508 L800,560 L0,560 Z"
            fill="url(#wh_mmain)"/>

          {/* Trees on slopes */}
          {[[220,498],[238,490],[256,496],[274,488],[292,494],[310,486],
            [490,448],[508,440],[526,446],[544,438],[562,444],[580,436]].map(([x,y],i)=>(
            <g key={i}>
              <polygon points={`${x},${y} ${x-7},${y+15} ${x+7},${y+15}`} fill="#1e6228" opacity="0.95"/>
              <polygon points={`${x},${y-6} ${x-5},${y+5} ${x+5},${y+5}`} fill="#267832" opacity="0.85"/>
            </g>
          ))}

          {/* Lake */}
          <ellipse cx="400" cy="600" rx="380" ry="52" fill="url(#wh_lake)"/>
          <path d="M150,596 Q280,590 410,597 Q530,604 650,592" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none"/>

          {/* ── CROSS + RAYS — all at same coordinate (400, 200) ── */}
          {/* Background halo — fills whole sky */}
          <ellipse cx="400" cy="200" rx="520" ry="380" fill="url(#wh_halo_big)" className="cross-glow"/>
          {/* Inner concentrated halo around cross */}
          <ellipse cx="400" cy="200" rx="110" ry="110" fill="url(#wh_halo_inner)" className="cross-glow"/>

          {/* Rays — all originate from (400,200) */}
          <g className="rays-breath" transform="translate(400,200)">
            {Array.from({length:24},(_,i)=>{
              const a = i*15;
              const rad = (a-90)*Math.PI/180;
              const r0 = 28;
              const isUp = (a>=300 || a<=60);
              const r1 = isUp ? 200+( i%4===0?50:25) : 340+(i%3===0?60:20);
              return (
                <line key={i}
                  x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                  x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                  stroke="white"
                  strokeWidth={i%6===0?"1.6":i%3===0?"1.0":"0.5"}
                  opacity={i%6===0?"0.95":"0.65"}/>
              );
            })}
          </g>

          {/* Cross — same centre (400,200), fully visible */}
          <g className="cross-glow" transform="translate(400,200)">
            {/* Vertical: -65 to +75 = y 135 to 275 — well within viewBox */}
            <rect x="-7" y="-65" width="14" height="140" rx="4" fill="white" opacity="0.97"/>
            {/* Horizontal: upper third */}
            <rect x="-48" y="-20" width="96" height="14" rx="4" fill="white" opacity="0.97"/>
          </g>

          {/* Forest at horizon */}
          <g opacity="0.40">
            <path d="M0,640 L55,608 L110,625 L165,595 L220,615 L275,585 L330,608 L385,578 L440,600 L495,572 L550,595 L605,568 L660,590 L715,565 L770,588 L800,578 L800,660 L0,660 Z"
              fill="#2a7838"/>
          </g>

          {/* Colour waves */}
          <g className="wave-1"><path d="M-80,648 C200,618 480,668 800,648 C1020,633 1200,655 1520,641 L1520,800 L-80,800 Z" fill="#C0392B" opacity="0.97"/></g>
          <g className="wave-2"><path d="M-80,661 C180,633 460,683 780,661 C1080,639 1272,663 1520,651 L1520,800 L-80,800 Z" fill="#E67E22" opacity="0.92"/></g>
          <g className="wave-3"><path d="M-80,673 C195,647 475,695 795,673 C1090,651 1275,673 1520,661 L1520,800 L-80,800 Z" fill="#F1C40F" opacity="0.85"/></g>
          <g className="wave-4"><path d="M-80,683 C185,659 465,705 785,683 C1082,661 1273,683 1520,671 L1520,800 L-80,800 Z" fill="#2980B9" opacity="0.92"/></g>
          <g className="wave-5"><path d="M-80,693 C188,671 468,715 788,693 C1083,671 1273,693 1520,681 L1520,800 L-80,800 Z" fill="#1ABC9C" opacity="0.85"/></g>
          <path d="M-80,703 C192,683 472,725 792,703 C1085,683 1274,703 1520,691 L1520,800 L-80,800 Z" fill="#27AE60" opacity="0.97"/>
        </svg>
      </div>

      {/* ── TEXT — floats over the SVG, well below the cross zone ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16"
        style={{ paddingTop: "320px" }}>
        <p className="fade-up text-xs font-bold tracking-[0.28em] text-white/50 mb-4 uppercase"
          style={{ fontFamily: "system-ui" }}>
          {tagline}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight max-w-4xl"
          style={{ fontSize: "clamp(28px,5.5vw,58px)", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}>
          {title}
        </h1>
        <p className="fade-up-3 mt-4 text-white/70 max-w-lg leading-relaxed"
          style={{ fontFamily: "system-ui", fontSize: "16px" }}>
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
