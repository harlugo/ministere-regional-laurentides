"use client";
import Link from "next/link";
import { useState } from "react";

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function Home() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <main className="min-h-screen flex flex-col overflow-hidden relative"
      style={{ background: "linear-gradient(175deg,#060f08 0%,#0d1f14 35%,#08152a 100%)" }}>

      {/* Lang toggle */}
      <div className="absolute top-4 right-5 z-20">
        <div className="lang-toggle">
          <button className={`lang-btn ${lang==="fr"?"active":"inactive"}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`lang-btn ${lang==="en"?"active":"inactive"}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      {/* Full-viewport SVG mountain scene */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="crossHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.18"/>
              <stop offset="40%" stopColor="white" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="crossHaloLarge" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="mountainMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#243d28"/>
              <stop offset="100%" stopColor="#0e2216"/>
            </linearGradient>
            <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#162b1c"/>
              <stop offset="100%" stopColor="#0a1a10"/>
            </linearGradient>
            <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d2440" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#1a3d2b" stopOpacity="0.6"/>
            </linearGradient>
          </defs>

          {/* Deep sky */}
          <rect width="800" height="600" fill="#060f08"/>
          <rect width="800" height="380" fill="url(#mountainFar)" opacity="0.4"/>

          {/* Stars */}
          {[[55,35],[110,22],[185,48],[295,28],[415,38],[520,18],[630,42],[720,55],[158,72],[390,14],[510,65],[305,45],[72,80],[445,25],[695,30]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i%4===0?1.8:i%3===0?1.3:0.9}
              fill="white" opacity={0.3+((i*0.13)%0.5)}/>
          ))}

          {/* Far mountains */}
          <path d="M0,360 L70,278 L145,315 L220,245 L310,290 L395,220 L475,265 L555,205 L635,248 L715,195 L800,232 L800,400 L0,400 Z"
            fill="#0d1f14" opacity="0.9"/>

          {/* Mid mountains */}
          <path d="M0,390 L90,308 L175,342 L265,275 L360,318 L445,262 L530,300 L605,245 L680,282 L760,240 L800,260 L800,430 L0,430 Z"
            fill="url(#mountainFar)" opacity="0.95"/>

          {/* ═══ MAIN PEAK — centre, where the cross sits ═══ */}
          <path d="M200,440 L310,310 L360,338 L400,280 L440,310 L490,330 L560,360 L620,400 L680,430 L800,460 L800,500 L0,500 L0,470 L100,445 Z"
            fill="url(#mountainMain)"/>
          {/* Peak snow cap */}
          <path d="M393,284 L400,278 L407,283 L411,276 L416,281 L413,288 L406,292 L395,290 Z"
            fill="white" opacity="0.55"/>

          {/* Secondary peaks */}
          <path d="M0,470 L100,390 L155,415 L210,375 L270,400 L330,360 L370,380 L400,400 L800,460 L800,500 L0,500 Z"
            fill="#0e2216" opacity="0.7"/>

          {/* Forest left slope */}
          {[[230,430],[248,422],[266,428],[284,420],[302,425],[320,418],[338,423],[356,416]].map(([x,y],i)=>(
            <g key={i}>
              <polygon points={`${x},${y} ${x-7},${y+15} ${x+7},${y+15}`} fill="#0a1e10" opacity="0.92"/>
              <polygon points={`${x},${y-6} ${x-5},${y+4} ${x+5},${y+4}`} fill="#0d2614" opacity="0.85"/>
            </g>
          ))}
          {/* Forest right slope */}
          {[[450,420],[468,412],[486,418],[504,410],[522,416],[540,408],[558,414],[576,406]].map(([x,y],i)=>(
            <g key={i}>
              <polygon points={`${x},${y} ${x-7},${y+15} ${x+7},${y+15}`} fill="#0a1e10" opacity="0.92"/>
              <polygon points={`${x},${y-6} ${x-5},${y+4} ${x+5},${y+4}`} fill="#0d2614" opacity="0.85"/>
            </g>
          ))}

          {/* ═══ BIG CROSS on the mountain peak ═══ */}
          {/* Large halo behind cross */}
          <ellipse cx="400" cy="235" rx="90" ry="90" fill="url(#crossHaloLarge)" className="cross-glow"/>
          {/* Medium halo */}
          <ellipse cx="400" cy="235" rx="50" ry="50" fill="url(#crossHalo)" className="cross-glow"/>

          {/* Light rays — breathing */}
          <g className="rays-breath" transform="translate(400,235)">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
              <line key={i}
                x1={Math.cos((a-90)*Math.PI/180)*18}
                y1={Math.sin((a-90)*Math.PI/180)*18}
                x2={Math.cos((a-90)*Math.PI/180)*95}
                y2={Math.sin((a-90)*Math.PI/180)*95}
                stroke="white" strokeWidth={i%3===0?"1.2":"0.7"} opacity="1"/>
            ))}
          </g>

          {/* The cross itself */}
          <g className="cross-glow" transform="translate(400,235)">
            {/* Vertical */}
            <rect x="-5.5" y="-54" width="11" height="108" rx="3" fill="white" opacity="0.97"/>
            {/* Horizontal */}
            <rect x="-34" y="-16" width="68" height="11" rx="3" fill="white" opacity="0.97"/>
          </g>

          {/* Lake */}
          <ellipse cx="400" cy="508" rx="340" ry="52" fill="url(#lakeGrad)"/>
          <path d="M180,503 Q280,497 400,505 Q510,511 620,500" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none"/>
          <path d="M160,514 Q270,508 400,516 Q530,522 640,510" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none"/>

          {/* Village — houses */}
          {[
            [142,445,22,18],[163,450,16,14],[478,435,26,20],[506,442,17,14],
            [590,418,20,16],[612,424,14,12],
          ].map(([x,y,w,h],i)=>(
            <g key={i} transform={`translate(${x},${y})`}>
              <rect x="0" y={h*0.45} width={w} height={h} fill="#1a3d20" rx="1"/>
              <polygon points={`${w/2},0 -2,${h*0.5} ${w+2},${h*0.5}`} fill="#102815"/>
              <rect x={w*0.35} y={h*0.85} width={w*0.3} height={h*0.6} fill="#060f08"/>
              <rect x="2" y={h*0.5} width={w*0.25} height={h*0.35} fill="rgba(255,225,120,0.2)" rx="1"/>
              <rect x={w*0.72} y={h*0.5} width={w*0.25} height={h*0.35} fill="rgba(255,225,120,0.2)" rx="1"/>
            </g>
          ))}

          {/* Chapel */}
          <g transform="translate(352,370)" className="float">
            <rect x="0" y="32" width="50" height="34" fill="#1e4a28" rx="2"/>
            <polygon points="25,12 -2,34 52,34" fill="#163820"/>
            <rect x="19" y="58" width="12" height="8" fill="#060f08"/>
            <rect x="4" y="38" width="9" height="12" fill="rgba(255,240,160,0.3)" rx="1"/>
            <rect x="37" y="38" width="9" height="12" fill="rgba(255,240,160,0.3)" rx="1"/>
            <rect x="19" y="0" width="12" height="22" fill="#1a4225" rx="1"/>
            <polygon points="25,-6 16,2 34,2" fill="#112a18"/>
            <text x="25" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)"
              style={{fontSize:"6px",fontFamily:"system-ui",fontWeight:"700",letterSpacing:"0.12em"}}>STE-ADÈLE</text>
          </g>

          {/* Coloured wave ribbon */}
          <g className="wave-1"><path d="M-50,548 C150,528 380,562 630,542 C755,530 785,540 850,534 L850,575 L-50,575 Z" fill="#C0392B" opacity="0.88"/></g>
          <g className="wave-2"><path d="M-50,558 C140,540 360,572 610,553 C740,542 778,552 850,545 L850,582 L-50,582 Z" fill="#E67E22" opacity="0.82"/></g>
          <g className="wave-3"><path d="M-50,566 C155,550 375,580 625,562 C745,552 780,561 850,555 L850,590 L-50,590 Z" fill="#F1C40F" opacity="0.75"/></g>
          <g className="wave-4"><path d="M-50,574 C148,559 368,587 618,570 C742,561 778,569 850,563 L850,598 L-50,598 Z" fill="#2980B9" opacity="0.82"/></g>
          <g className="wave-5"><path d="M-50,581 C152,567 372,593 622,577 C744,568 779,576 850,570 L850,606 L-50,606 Z" fill="#1ABC9C" opacity="0.76"/></g>
          <path d="M-50,588 C155,575 375,600 625,584 C746,575 780,583 850,577 L850,610 L-50,610 Z" fill="#27AE60" opacity="0.88"/>
        </svg>
      </div>

      {/* Text content — centered, well above the mountain */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div style={{marginTop:"-120px"}}>
          <p className="fade-up text-xs font-bold tracking-[0.32em] mb-4 uppercase"
            style={{color:"rgba(255,255,255,0.4)", fontFamily:"system-ui"}}>
            {lang==="fr"?"Église Unie du Canada":"United Church of Canada"}
          </p>
          <h1 className="fade-up-2 font-bold text-white leading-tight mb-3"
            style={{fontSize:"clamp(30px,6vw,62px)", textShadow:"0 2px 24px rgba(0,0,0,0.7)", maxWidth:"580px"}}>
            {lang==="fr"?"Laurentides":"The Laurentians"}
          </h1>
          <p className="fade-up-3 text-white/55 mb-10 max-w-sm mx-auto"
            style={{fontFamily:"system-ui", fontSize:"15px", lineHeight:"1.6"}}>
            {lang==="fr"
              ?"9 paroisses inclusives au nord de Montréal"
              :"9 inclusive parishes north of Montreal"}
          </p>

          {/* Site selector cards */}
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lam"
              className="py-4 px-7 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-2xl"
              style={{background:"rgba(255,255,255,0.09)", border:"1.5px solid rgba(255,255,255,0.18)", textDecoration:"none", minWidth:"180px"}}>
              <div className="text-2xl mb-2">🌲</div>
              <div className="font-bold text-white text-sm" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"Ministère régional":"Area Ministry"}
              </div>
              <div className="text-white/35 text-xs mt-1" style={{fontFamily:"system-ui"}}>LAM — MRL · 9 {lang==="fr"?"paroisses":"parishes"}</div>
            </Link>
            <Link href="/sainte-adele"
              className="py-4 px-7 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-2xl"
              style={{background:"rgba(255,255,255,0.09)", border:"1.5px solid rgba(255,255,255,0.18)", textDecoration:"none", minWidth:"180px"}}>
              <div className="text-2xl mb-2">⛪</div>
              <div className="font-bold text-white text-sm" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"Église Sainte-Adèle":"Sainte-Adèle Church"}
              </div>
              <div className="text-white/35 text-xs mt-1" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"La Chapelle sur le Lac":"The Chapel on the Lake"}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
