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
              <stop offset="0%"   stopColor="#0a2a4a"/>
              <stop offset="35%"  stopColor="#1a4a7a"/>
              <stop offset="65%"  stopColor="#2e6ea6"/>
              <stop offset="100%" stopColor="#1a3d2b"/>
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

          {/* Sky */}
          <rect width="800" height="600" fill="url(#sky)"/>

          {/* Subtle clouds */}
          <ellipse cx="120" cy="80" rx="70" ry="20" fill="white" opacity="0.06"/>
          <ellipse cx="165" cy="72" rx="48" ry="16" fill="white" opacity="0.05"/>
          <ellipse cx="610" cy="62" rx="78" ry="19" fill="white" opacity="0.05"/>
          <ellipse cx="658" cy="55" rx="52" ry="14" fill="white" opacity="0.04"/>

          {/* Stars */}
          {[[55,35],[110,20],[185,45],[295,25],[415,15],[520,38],[630,22],[720,48],[158,60],[390,12],[690,30]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%3===0?1.4:0.9} fill="white" opacity={0.15+((i*0.07)%0.2)}/>
          ))}

          {/* Far mountains */}
          <path d="M0,370 L80,295 L160,328 L240,262 L330,302 L420,238 L510,278 L590,222 L670,262 L750,218 L800,242 L800,420 L0,420 Z"
            fill="#0f2618" opacity="0.85"/>

          {/* Mid mountains */}
          <path d="M0,400 L100,322 L190,355 L285,288 L380,330 L465,272 L545,308 L620,255 L695,292 L770,252 L800,268 L800,450 L0,450 Z"
            fill="url(#mtnMid)"/>

          {/* ── HIGHEST PEAK — centre (x≈400) — where the cross goes ── */}
          {/* This is the tallest peak, no snow cap */}
          <path d="M0,470 L80,415 L150,438 L230,390 L300,418 L350,430 L390,358 L400,340 L410,358 L450,400 L520,380 L580,410 L650,435 L720,455 L800,465 L800,510 L0,510 Z"
            fill="url(#mtnMain)"/>

          {/* Secondary foreground ridge */}
          <path d="M0,490 L90,448 L160,460 L250,438 L340,455 L420,475 L500,452 L580,468 L660,480 L760,488 L800,492 L800,520 L0,520 Z"
            fill="#0e2216" opacity="0.75"/>

          {/* Forest on slopes */}
          {[[305,448],[320,440],[335,446],[350,438],[365,444],[375,436]].map(([x,y],i)=>(
            <g key={`fl${i}`}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#082010" opacity="0.95"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#0b2814" opacity="0.88"/>
            </g>
          ))}
          {[[425,436],[440,444],[455,438],[470,446],[485,440],[500,448]].map(([x,y],i)=>(
            <g key={`fr${i}`}>
              <polygon points={`${x},${y} ${x-6},${y+13} ${x+6},${y+13}`} fill="#082010" opacity="0.95"/>
              <polygon points={`${x},${y-5} ${x-4},${y+4} ${x+4},${y+4}`} fill="#0b2814" opacity="0.88"/>
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
          {[[90,465,24,20],[116,470,17,14],[170,455,22,18],[198,461,15,12]].map(([x,y,w,h],i)=>(
            <g key={`h${i}`} transform={`translate(${x},${y})`}>
              <rect x="0" y={h*0.45} width={w} height={h} fill="#1a3d20" rx="1"/>
              <polygon points={`${w/2},0 -2,${h*0.5} ${w+2},${h*0.5}`} fill="#102815"/>
              <rect x={w*0.35} y={h*0.88} width={w*0.3} height={h*0.58} fill="#050e08"/>
              <rect x="2" y={h*0.52} width={w*0.26} height={h*0.34} fill="rgba(255,225,120,0.22)" rx="1"/>
            </g>
          ))}

          {/* Chapel — left zone */}
          <g transform="translate(60,425)" className="float">
            <rect x="0" y="28" width="44" height="30" fill="#1e4a28" rx="2"/>
            <polygon points="22,8 -2,30 46,30" fill="#163820"/>
            <rect x="17" y="50" width="10" height="8" fill="#050e08"/>
            <rect x="3" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="33" y="34" width="8" height="10" fill="rgba(255,240,160,0.28)" rx="1"/>
            <rect x="17" y="0" width="10" height="18" fill="#1a4225" rx="1"/>
            <polygon points="22,-5 14,2 30,2" fill="#112a18"/>
          </g>

          {/* Coloured waves */}
          <g className="wave-1"><path d="M-50,558 C150,538 380,570 640,552 C760,542 790,550 850,544 L850,578 L-50,578 Z" fill="#C0392B" opacity="0.88"/></g>
          <g className="wave-2"><path d="M-50,566 C140,548 370,578 630,561 C752,552 788,560 850,554 L850,586 L-50,586 Z" fill="#E67E22" opacity="0.82"/></g>
          <g className="wave-3"><path d="M-50,573 C155,556 380,585 640,568 C755,560 788,567 850,561 L850,594 L-50,594 Z" fill="#F1C40F" opacity="0.75"/></g>
          <g className="wave-4"><path d="M-50,580 C148,564 373,592 633,576 C752,568 787,574 850,568 L850,602 L-50,602 Z" fill="#2980B9" opacity="0.82"/></g>
          <g className="wave-5"><path d="M-50,587 C152,572 377,598 637,583 C753,575 787,581 850,575 L850,610 L-50,610 Z" fill="#1ABC9C" opacity="0.75"/></g>
          <path d="M-50,594 C155,580 380,604 640,589 C754,582 787,588 850,582 L850,616 L-50,616 Z" fill="#27AE60" opacity="0.88"/>
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
