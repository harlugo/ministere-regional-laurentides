"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* ── FULL VIEWPORT SVG SCENE ── */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Blue sky gradient */}
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#0a2a4a"/>
              <stop offset="30%"  stopColor="#1a4a7a"/>
              <stop offset="65%"  stopColor="#2e6ea6"/>
              <stop offset="100%" stopColor="#1a3d2b"/>
            </linearGradient>
            {/* Cross halo — large radial */}
            <radialGradient id="crossHaloPage" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.25"/>
              <stop offset="30%"  stopColor="white" stopOpacity="0.12"/>
              <stop offset="65%"  stopColor="white" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="crossInnerPage" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="mtnMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a5030"/>
              <stop offset="100%" stopColor="#0e2216"/>
            </linearGradient>
            <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c3e22"/>
              <stop offset="100%" stopColor="#0a1a10"/>
            </linearGradient>
            <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3a6a" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#0e2a1a" stopOpacity="0.65"/>
            </linearGradient>
          </defs>

          {/* Sky — blue */}
          <rect width="800" height="600" fill="url(#sky)"/>

          {/* Clouds — subtle */}
          <ellipse cx="120" cy="80" rx="70" ry="22" fill="white" opacity="0.06"/>
          <ellipse cx="160" cy="72" rx="50" ry="18" fill="white" opacity="0.05"/>
          <ellipse cx="600" cy="65" rx="80" ry="20" fill="white" opacity="0.05"/>
          <ellipse cx="650" cy="58" rx="55" ry="16" fill="white" opacity="0.04"/>

          {/* Stars (subtle — partly visible in dark blue sky) */}
          {[[55,35],[110,20],[185,45],[295,25],[415,15],[520,38],[630,22],[720,48],[158,60],[390,12],[690,30]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%3===0?1.4:0.9}
              fill="white" opacity={0.15+((i*0.07)%0.2)}/>
          ))}

          {/* Far mountains */}
          <path d="M0,370 L80,295 L160,328 L240,262 L330,302 L420,238 L510,278 L590,222 L670,262 L750,218 L800,242 L800,420 L0,420 Z"
            fill="#0f2618" opacity="0.85"/>

          {/* Mid mountains */}
          <path d="M0,400 L100,322 L190,355 L285,288 L380,330 L465,272 L545,308 L620,255 L695,292 L770,252 L800,268 L800,450 L0,450 Z"
            fill="url(#mtnMid)"/>

          {/* ── MAIN PEAK — right of centre, where the cross lives ── */}
          {/* Peak at x≈540, so cross is off-centre right, text is left */}
          <path d="M0,460 L80,400 L150,420 L240,370 L320,400 L400,440 L460,400 L500,360 L540,300 L580,355 L630,385 L700,420 L760,445 L800,460 L800,510 L0,510 Z"
            fill="url(#mtnMain)"/>

          {/* Snow cap on main peak (x=540, y=300) */}
          <path d="M533,305 L540,298 L547,304 L552,298 L557,303 L553,310 L545,314 L535,311 Z"
            fill="white" opacity="0.6"/>

          {/* Left secondary peak */}
          <path d="M0,480 L90,415 L150,435 L220,390 L290,415 L360,440 L420,470 L0,510 Z"
            fill="#0e2216" opacity="0.8"/>

          {/* Forest on main peak slopes */}
          {[[445,450],[460,442],[475,447],[490,440],[505,445],[520,438],[555,438],[570,432],[585,438],[600,432],[615,437]].map(([x,y],i)=>(
            <g key={i}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#082010" opacity="0.95"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#0b2814" opacity="0.88"/>
            </g>
          ))}

          {/* Left forest */}
          {[[130,465],[148,458],[166,463],[184,456],[202,461],[220,454]].map(([x,y],i)=>(
            <g key={i}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#082010" opacity="0.9"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#0b2814" opacity="0.85"/>
            </g>
          ))}

          {/* ── CROSS on peak (x=540, y=300) — large rays fill sky ── */}

          {/* Enormous background halo — fills much of sky */}
          <ellipse cx="540" cy="270" rx="340" ry="280" fill="url(#crossHaloPage)" className="cross-glow"/>
          {/* Concentrated inner halo */}
          <ellipse cx="540" cy="270" rx="120" ry="120" fill="url(#crossInnerPage)" className="cross-glow"/>

          {/* Long rays from peak cross */}
          <g className="rays-breath" transform="translate(540,270)">
            {Array.from({length:20}, (_,i) => {
              const a = i * 18;
              const rad = (a - 90) * Math.PI / 180;
              const r0 = 22;
              const r1 = 280 + (i%4===0?60:i%4===1?30:i%4===2?10:0);
              return (
                <line key={i}
                  x1={Math.cos(rad)*r0} y1={Math.sin(rad)*r0}
                  x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                  stroke="white"
                  strokeWidth={i%5===0?"1.6":i%3===0?"1.0":"0.55"}
                  opacity={i%5===0?"1":"0.75"}/>
              );
            })}
          </g>

          {/* The cross — good size, sits on peak */}
          <g className="cross-glow" transform="translate(540,270)">
            <rect x="-7.5" y="-62" width="15" height="124" rx="3.5" fill="white" opacity="0.97"/>
            <rect x="-46" y="-18" width="92" height="15" rx="3.5" fill="white" opacity="0.97"/>
          </g>

          {/* Lake */}
          <ellipse cx="400" cy="528" rx="340" ry="48" fill="url(#lake)"/>
          <path d="M180,523 Q300,517 420,525 Q530,531 620,520" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none"/>

          {/* Village houses — left side, away from cross */}
          {[
            [90,460,24,20],[115,466,17,14],[170,452,22,18],[198,458,15,12],
          ].map(([x,y,w,h],i)=>(
            <g key={i} transform={`translate(${x},${y})`}>
              <rect x="0" y={h*0.45} width={w} height={h} fill="#1a3d20" rx="1"/>
              <polygon points={`${w/2},0 -2,${h*0.5} ${w+2},${h*0.5}`} fill="#102815"/>
              <rect x={w*0.35} y={h*0.88} width={w*0.3} height={h*0.58} fill="#050e08"/>
              <rect x="2" y={h*0.52} width={w*0.26} height={h*0.34} fill="rgba(255,225,120,0.22)" rx="1"/>
              <rect x={w*0.72} y={h*0.52} width={w*0.26} height={h*0.34} fill="rgba(255,225,120,0.22)" rx="1"/>
            </g>
          ))}

          {/* Chapel — left zone, below the text area */}
          <g transform="translate(65,422)" className="float">
            <rect x="0" y="28" width="42" height="30" fill="#1e4a28" rx="2"/>
            <polygon points="21,8 -2,30 44,30" fill="#163820"/>
            <rect x="16" y="50" width="10" height="8" fill="#050e08"/>
            <rect x="3" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="31" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="16" y="0" width="10" height="18" fill="#1a4225" rx="1"/>
            <polygon points="21,-5 13,2 29,2" fill="#112a18"/>
          </g>

          {/* Coloured wave ribbon at very bottom */}
          <g className="wave-1"><path d="M-50,560 C150,540 380,572 640,554 C760,544 790,552 850,546 L850,580 L-50,580 Z" fill="#C0392B" opacity="0.88"/></g>
          <g className="wave-2"><path d="M-50,568 C140,550 370,580 630,563 C752,554 788,562 850,556 L850,588 L-50,588 Z" fill="#E67E22" opacity="0.82"/></g>
          <g className="wave-3"><path d="M-50,575 C155,558 380,587 640,570 C755,562 788,569 850,563 L850,596 L-50,596 Z" fill="#F1C40F" opacity="0.75"/></g>
          <g className="wave-4"><path d="M-50,582 C148,566 373,594 633,578 C752,570 787,576 850,570 L850,604 L-50,604 Z" fill="#2980B9" opacity="0.82"/></g>
          <g className="wave-5"><path d="M-50,589 C152,574 377,600 637,585 C753,577 787,583 850,577 L850,610 L-50,610 Z" fill="#1ABC9C" opacity="0.75"/></g>
          <path d="M-50,596 C155,582 380,606 640,591 C754,583 787,589 850,583 L850,616 L-50,616 Z" fill="#27AE60" opacity="0.88"/>
        </svg>
      </div>

      {/* Lang toggle */}
      <div className="absolute top-4 right-5 z-20">
        <div className="lang-toggle">
          <button className={`lang-btn ${lang==="fr"?"active":"inactive"}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`lang-btn ${lang==="en"?"active":"inactive"}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      {/* ── TEXT — upper LEFT, well away from cross (upper right) ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-14"
        style={{ maxWidth: "420px" }}>

        <p className="fade-up text-xs font-bold tracking-[0.3em] mb-4 uppercase"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "system-ui" }}>
          {lang==="fr"?"Église Unie du Canada":"United Church of Canada"}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight mb-3"
          style={{ fontSize: "clamp(32px,5.5vw,58px)", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}>
          {lang==="fr"?"Laurentides":"The Laurentians"}
        </h1>
        <p className="fade-up-3 text-white/55 mb-8"
          style={{ fontFamily: "system-ui", fontSize: "15px", lineHeight: "1.65" }}>
          {lang==="fr"
            ?"9 paroisses inclusives au nord de Montréal"
            :"9 inclusive parishes north of Montreal"}
        </p>

        {/* Site cards — stacked on left */}
        <div className="fade-up-4 flex flex-col gap-3">
          <Link href="/lam"
            className="py-4 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02]"
            style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.18)", textDecoration: "none" }}>
            <span className="text-2xl flex-shrink-0">🌲</span>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "system-ui" }}>
                {lang==="fr"?"Ministère régional":"Area Ministry"}
              </div>
              <div className="text-white/35 text-xs mt-0.5" style={{ fontFamily: "system-ui" }}>
                LAM — MRL · 9 {lang==="fr"?"paroisses":"parishes"}
              </div>
            </div>
          </Link>
          <Link href="/sainte-adele"
            className="py-4 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02]"
            style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.18)", textDecoration: "none" }}>
            <span className="text-2xl flex-shrink-0">⛪</span>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "system-ui" }}>
                {lang==="fr"?"Église Sainte-Adèle":"Sainte-Adèle Church"}
              </div>
              <div className="text-white/35 text-xs mt-0.5" style={{ fontFamily: "system-ui" }}>
                {lang==="fr"?"La Chapelle sur le Lac":"The Chapel on the Lake"}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
