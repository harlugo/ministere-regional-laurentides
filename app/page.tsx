"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* ── FULL VIEWPORT SVG MOUNTAIN SCENE ── */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#1a4a7a"/>
              <stop offset="30%"  stopColor="#2e72b8"/>
              <stop offset="62%"  stopColor="#4a94c8"/>
              <stop offset="100%" stopColor="#2a5c3a"/>
            </linearGradient>
            <radialGradient id="crossHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.25"/>
              <stop offset="35%"  stopColor="white" stopOpacity="0.10"/>
              <stop offset="70%"  stopColor="white" stopOpacity="0.03"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="crossInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="mtnMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a6e42"/>
              <stop offset="100%" stopColor="#1a3a22"/>
            </linearGradient>
            <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c5c34"/>
              <stop offset="100%" stopColor="#142a18"/>
            </linearGradient>
            <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a5a9a" stopOpacity="0.75"/>
              <stop offset="100%" stopColor="#1a4a2a" stopOpacity="0.55"/>
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="800" height="600" fill="url(#sky)"/>

          {/* Subtle clouds */}
          <ellipse cx="120" cy="80" rx="80" ry="24" fill="white" opacity="0.18"/>
          <ellipse cx="170" cy="68" rx="55" ry="18" fill="white" opacity="0.14"/>
          <ellipse cx="610" cy="62" rx="90" ry="22" fill="white" opacity="0.15"/>
          <ellipse cx="665" cy="52" rx="58" ry="17" fill="white" opacity="0.12"/>
          <ellipse cx="360" cy="90" rx="65" ry="18" fill="white" opacity="0.10"/>

          {/* Stars */}
          {[[55,35],[110,20],[185,45],[295,25],[415,15],[520,38],[630,22],[720,48],[158,60],[390,12],[690,30]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%3===0?1.4:0.9} fill="white" opacity={0.15+((i*0.07)%0.2)}/>
          ))}

          {/* Far mountains */}
          <path d="M0,370 L80,295 L160,328 L240,262 L330,302 L420,238 L510,278 L590,222 L670,262 L750,218 L800,242 L800,420 L0,420 Z"
            fill="#1e4828" opacity="0.80"/>

          {/* Mid mountains */}
          <path d="M0,400 L100,322 L190,355 L285,288 L380,330 L465,272 L545,308 L620,255 L695,292 L770,252 L800,268 L800,450 L0,450 Z"
            fill="url(#mtnMid)"/>

          {/* ── HIGHEST PEAK — centre (x≈400) — where the cross goes ── */}
          {/* This is the tallest peak, no snow cap */}
          <path d="M0,440 L80,385 L150,408 L230,360 L300,388 L350,400 L390,328 L400,310 L410,328 L450,370 L520,350 L580,380 L650,405 L720,425 L800,435 L800,480 L0,480 Z"
            fill="url(#mtnMain)"/>

          {/* Secondary foreground ridge */}
          <path d="M0,460 L90,418 L160,430 L250,408 L340,425 L420,445 L500,422 L580,438 L660,450 L760,458 L800,462 L800,490 L0,490 Z"
            fill="#0e2216" opacity="0.75"/>

          {/* Forest on slopes */}
          {[[305,428],[320,420],[335,426],[350,418],[365,424],[375,416]].map(([x,y],i)=>(
            <g key={`fl${i}`}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#1a5a24" opacity="0.95"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#1e6628" opacity="0.88"/>
            </g>
          ))}
          {[[425,416],[440,424],[455,418],[470,426],[485,420],[500,428]].map(([x,y],i)=>(
            <g key={`fr${i}`}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#1a5a24" opacity="0.95"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#1e6628" opacity="0.88"/>
            </g>
          ))}

          {/* ── CROSS on highest peak — x=400, y=340 — NO snow cap ── */}
          <ellipse cx="400" cy="300" rx="320" ry="260" fill="url(#crossHalo)" className="cross-glow"/>
          <ellipse cx="400" cy="300" rx="110" ry="110" fill="url(#crossInner)" className="cross-glow"/>

          {/* Rays from cross */}
          <g className="rays-breath" transform="translate(400,300)">
            {Array.from({length:20}, (_,i) => {
              const a = i * 18;
              const rad = (a - 90) * Math.PI / 180;
              const isUp = (a >= 300 || a <= 60);
              const r1 = isUp ? 260 + (i%3===0?50:20) : 200 + (i%3===0?40:15);
              return (
                <line key={i}
                  x1={Math.cos(rad)*20} y1={Math.sin(rad)*20}
                  x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                  stroke="white"
                  strokeWidth={i%5===0?"1.5":i%3===0?"0.9":"0.5"}
                  opacity={i%5===0?"1":"0.7"}/>
              );
            })}
          </g>

          {/* Cross — sits right on the peak tip */}
          <g className="cross-glow" transform="translate(400,300)">
            <rect x="-6.5" y="-58" width="13" height="116" rx="3.5" fill="white" opacity="0.97"/>
            <rect x="-40" y="-16" width="80" height="13" rx="3.5" fill="white" opacity="0.97"/>
          </g>

          {/* Lake */}
          <ellipse cx="400" cy="528" rx="340" ry="46" fill="url(#lake)"/>
          <path d="M180,523 Q300,517 420,525 Q530,531 620,520" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none"/>

          {/* Village — left side */}
          {[[90,445,24,20],[116,450,17,14],[170,435,22,18],[198,441,15,12]].map(([x,y,w,h],i)=>(
            <g key={`h${i}`} transform={`translate(${x},${y})`}>
              <rect x="0" y={h*0.45} width={w} height={h} fill="#2a6030" rx="1"/>
              <polygon points={`${w/2},0 -2,${h*0.5} ${w+2},${h*0.5}`} fill="#1a4820"/>
              <rect x={w*0.35} y={h*0.88} width={w*0.3} height={h*0.58} fill="#050e08"/>
              <rect x="2" y={h*0.52} width={w*0.26} height={h*0.34} fill="rgba(255,225,120,0.22)" rx="1"/>
            </g>
          ))}

          {/* Chapel — left zone */}
          <g transform="translate(60,425)" className="float">
            <rect x="0" y="28" width="44" height="30" fill="#2e6a38" rx="2"/>
            <polygon points="22,8 -2,30 46,30" fill="#245828"/>
            <rect x="17" y="50" width="10" height="8" fill="#050e08"/>
            <rect x="3" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="33" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="17" y="0" width="10" height="18" fill="#2a6235" rx="1"/>
            <polygon points="22,-5 14,2 30,2" fill="#1e4a26"/>
          </g>

          {/* Coloured waves */}
          <g className="wave-1"><path d="M-50,558 C150,538 380,570 640,552 C760,542 790,550 850,544 L850,578 L-50,578 Z" fill="#C0392B" opacity="0.95"/></g>
          <g className="wave-2"><path d="M-50,566 C140,548 370,578 630,561 C752,552 788,560 850,554 L850,586 L-50,586 Z" fill="#E67E22" opacity="0.82"/></g>
          <g className="wave-3"><path d="M-50,573 C155,556 380,585 640,568 C755,560 788,567 850,561 L850,594 L-50,594 Z" fill="#F1C40F" opacity="0.75"/></g>
          <g className="wave-4"><path d="M-50,580 C148,564 373,592 633,576 C752,568 787,574 850,568 L850,602 L-50,602 Z" fill="#2980B9" opacity="0.82"/></g>
          <g className="wave-5"><path d="M-50,587 C152,572 377,598 637,583 C753,575 787,581 850,575 L850,610 L-50,610 Z" fill="#1ABC9C" opacity="0.75"/></g>
          <path d="M-50,594 C155,580 380,604 640,589 C754,582 787,588 850,582 L850,616 L-50,616 Z" fill="#27AE60" opacity="0.95"/>
        </svg>
      </div>

      {/* Lang toggle */}
      <div className="absolute top-4 right-5 z-20">
        <div className="lang-toggle">
          <button className={`lang-btn ${lang==="fr"?"active":"inactive"}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`lang-btn ${lang==="en"?"active":"inactive"}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      {/* Text + logo cards — upper left */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-14"
        style={{ maxWidth:"440px" }}>

        <p className="fade-up text-xs font-bold tracking-[0.3em] mb-4 uppercase"
          style={{ color:"rgba(255,255,255,0.45)", fontFamily:"system-ui" }}>
          {lang==="fr"?"Église Unie du Canada":"United Church of Canada"}
        </p>
        <h1 className="fade-up-2 font-bold text-white leading-tight mb-3"
          style={{ fontSize:"clamp(32px,5.5vw,58px)", textShadow:"0 2px 20px rgba(0,0,0,0.7)" }}>
          {lang==="fr"?"Laurentides":"The Laurentians"}
        </h1>
        <p className="fade-up-3 text-white/55 mb-8"
          style={{ fontFamily:"system-ui", fontSize:"15px", lineHeight:"1.65" }}>
          {lang==="fr"?"9 paroisses inclusives au nord de Montréal":"9 inclusive parishes north of Montreal"}
        </p>

        {/* Site cards with real logos */}
        <div className="fade-up-4 flex flex-col gap-4">

          {/* LAM card */}
          <Link href="/lam"
            className="flex items-center gap-4 py-4 px-5 rounded-2xl transition-all hover:scale-[1.02]"
            style={{ background:"rgba(255,255,255,0.10)", border:"1.5px solid rgba(255,255,255,0.18)", textDecoration:"none" }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden"
              style={{ background:"#234734" }}>
              <Image src="/logo-lam.svg" alt="LAM-MRL" width={56} height={56} style={{ width:"100%", height:"100%" }}/>
            </div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily:"system-ui" }}>
                {lang==="fr"?"Ministère régional":"Area Ministry"}
              </div>
              <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily:"system-ui" }}>
                LAM — MRL · 9 {lang==="fr"?"paroisses":"parishes"}
              </div>
            </div>
          </Link>

          {/* Sainte-Adèle card */}
          <Link href="/sainte-adele"
            className="flex items-center gap-4 py-4 px-5 rounded-2xl transition-all hover:scale-[1.02]"
            style={{ background:"rgba(255,255,255,0.10)", border:"1.5px solid rgba(255,255,255,0.18)", textDecoration:"none" }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden"
              style={{ background:"#234734" }}>
              <Image src="/logo-sainte-adele.svg" alt="Église Unie de Sainte-Adèle" width={56} height={56} style={{ width:"100%", height:"100%" }}/>
            </div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily:"system-ui" }}>
                {lang==="fr"?"Église Sainte-Adèle":"Sainte-Adèle Church"}
              </div>
              <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily:"system-ui" }}>
                {lang==="fr"?"La Chapelle sur le Lac":"The Chapel on the Lake"}
              </div>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
