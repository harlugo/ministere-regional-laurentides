"use client";
import Link from "next/link";
import { useState } from "react";

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function Home() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <main className="min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(175deg,#0a1f10 0%,#122d1a 35%,#0b1e35 100%)" }}>

      {/* Lang toggle top right */}
      <div className="absolute top-4 right-5 z-20">
        <div className="lang-toggle">
          <button className={`lang-btn ${lang==="fr"?"active":"inactive"}`} onClick={() => setLang("fr")}>FR</button>
          <button className={`lang-btn ${lang==="en"?"active":"inactive"}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      {/* Hero SVG — mountain scene */}
      <div className="relative flex-1 flex flex-col items-center justify-center min-h-screen">

        {/* Full-viewport SVG illustration */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"
            className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

            {/* Sky gradient */}
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#050f08"/>
                <stop offset="60%" stopColor="#0d2440"/>
                <stop offset="100%" stopColor="#1a3d2b"/>
              </linearGradient>
              <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e4d2b"/>
                <stop offset="100%" stopColor="#0f2a16"/>
              </linearGradient>
              <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16402a"/>
                <stop offset="100%" stopColor="#0a1f12"/>
              </linearGradient>
              <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d2440" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#1a3d2b" stopOpacity="0.7"/>
              </linearGradient>
              <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C0392B"/>
                <stop offset="20%" stopColor="#E67E22"/>
                <stop offset="40%" stopColor="#F1C40F"/>
                <stop offset="60%" stopColor="#2980B9"/>
                <stop offset="80%" stopColor="#1ABC9C"/>
                <stop offset="100%" stopColor="#27AE60"/>
              </linearGradient>
              <radialGradient id="crossHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Sky */}
            <rect width="800" height="600" fill="url(#sky)"/>

            {/* Stars */}
            {[[60,40],[120,25],[200,55],[350,30],[480,45],[580,22],[680,38],[740,60],[160,80],[420,15],[540,70],[310,50]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r={i%3===0?1.5:1} fill="white" opacity={0.4+Math.random()*0.4}/>
            ))}

            {/* Background mountains (far) */}
            <path d="M0,340 L60,260 L130,300 L200,220 L280,280 L360,200 L440,255 L520,195 L600,245 L680,185 L760,230 L800,210 L800,400 L0,400 Z"
              fill="#0d2218" opacity="0.8"/>

            {/* Mid mountains */}
            <path d="M0,370 L80,290 L160,330 L250,265 L350,310 L430,255 L510,295 L580,240 L660,280 L740,235 L800,265 L800,420 L0,420 Z"
              fill="url(#mountainGrad2)" opacity="0.95"/>

            {/* Main Sainte-Adèle mountain — la montagne */}
            <path d="M0,400 L100,320 L180,355 L280,270 L380,330 L420,290 L480,320 L560,255 L640,300 L700,270 L760,295 L800,280 L800,450 L0,450 Z"
              fill="url(#mountainGrad)"/>

            {/* Snow cap on main peak */}
            <path d="M555,260 L560,255 L565,258 L570,252 L575,257 L572,262 L565,265 L558,263 Z"
              fill="white" opacity="0.7"/>

            {/* Forests on mountain slopes */}
            {/* Left forest */}
            {[[100,395],[115,388],[130,393],[145,386],[160,390],[175,384],[190,389]].map(([x,y],i)=>(
              <polygon key={i} points={`${x},${y} ${x-7},${y+14} ${x+7},${y+14}`} fill="#0d3018" opacity="0.9"/>
            ))}
            {/* Right forest */}
            {[[600,355],[615,348],[630,353],[645,346],[660,351],[675,345],[690,350]].map(([x,y],i)=>(
              <polygon key={i} points={`${x},${y} ${x-7},${y+14} ${x+7},${y+14}`} fill="#0d3018" opacity="0.9"/>
            ))}

            {/* Lake at base */}
            <ellipse cx="400" cy="480" rx="320" ry="45" fill="url(#lakeGrad)" opacity="0.85"/>
            {/* Lake shimmer */}
            <path d="M200,475 Q270,470 350,476 Q420,481 500,473 Q560,468 610,476" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none"/>
            <path d="M180,483 Q260,478 380,485 Q460,490 540,481 Q600,474 640,482" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"/>

            {/* Village / maisons on hillside */}
            {/* House 1 */}
            <g transform="translate(220, 360)">
              <rect x="0" y="10" width="22" height="16" fill="#1a4025" rx="1"/>
              <polygon points="11,0 -2,12 24,12" fill="#0f2a16"/>
              <rect x="8" y="14" width="6" height="12" fill="#0d1f10"/>
              <rect x="2" y="12" width="5" height="5" fill="rgba(255,220,100,0.3)" rx="1"/>
              <rect x="15" y="12" width="5" height="5" fill="rgba(255,220,100,0.3)" rx="1"/>
            </g>
            {/* House 2 */}
            <g transform="translate(250, 368)">
              <rect x="0" y="8" width="18" height="14" fill="#163520" rx="1"/>
              <polygon points="9,0 -1,10 19,10" fill="#0e2618"/>
              <rect x="6" y="12" width="5" height="10" fill="#0d1f10"/>
            </g>
            {/* House 3 — bigger */}
            <g transform="translate(480, 340)">
              <rect x="0" y="12" width="28" height="20" fill="#1a4025" rx="1"/>
              <polygon points="14,0 -3,14 31,14" fill="#102812"/>
              <rect x="10" y="18" width="8" height="14" fill="#0d1f10"/>
              <rect x="2" y="14" width="6" height="6" fill="rgba(255,220,100,0.25)" rx="1"/>
              <rect x="20" y="14" width="6" height="6" fill="rgba(255,220,100,0.25)" rx="1"/>
            </g>
            {/* House 4 */}
            <g transform="translate(515, 350)">
              <rect x="0" y="8" width="16" height="13" fill="#163520" rx="1"/>
              <polygon points="8,0 -1,9 17,9" fill="#0e2618"/>
              <rect x="5" y="11" width="5" height="10" fill="#0d1f10"/>
            </g>

            {/* Chapel — Église Unie de Sainte-Adèle */}
            <g transform="translate(365, 318)" className="float">
              {/* Foundation */}
              <rect x="-1" y="52" width="52" height="4" fill="#0f2a16" rx="1"/>
              {/* Main building */}
              <rect x="4" y="26" width="42" height="28" fill="#1e4a28" rx="2"/>
              {/* Roof */}
              <polygon points="25,8 2,28 48,28" fill="#163820"/>
              {/* Door */}
              <path d="M18,54 L18,38 Q25,33 32,38 L32,54 Z" fill="#0a1f10"/>
              {/* Windows */}
              <rect x="6" y="32" width="8" height="10" fill="rgba(255,240,180,0.35)" rx="1"/>
              <rect x="36" y="32" width="8" height="10" fill="rgba(255,240,180,0.35)" rx="1"/>
              {/* Tower */}
              <rect x="18" y="0" width="14" height="20" fill="#1a4225" rx="1"/>
              <polygon points="25,-8 16,2 34,2" fill="#122a18"/>
              {/* Cross halo */}
              <ellipse cx="25" cy="-14" rx="18" ry="18" fill="url(#crossHalo)"/>
              {/* Cross on tower */}
              <g className="cross-glow">
                <rect x="23" y="-22" width="4" height="16" rx="1.5" fill="white" opacity="0.95"/>
                <rect x="18" y="-16" width="14" height="4" rx="1.5" fill="white" opacity="0.95"/>
              </g>
              {/* "Sainte-Adèle" label */}
              <text x="25" y="70" textAnchor="middle" fill="rgba(255,255,255,0.5)"
                style={{fontSize:"7px", fontFamily:"system-ui", fontWeight:"600", letterSpacing:"0.1em"}}>
                SAINTE-ADÈLE
              </text>
            </g>

            {/* Colored wave ribbon */}
            <g className="wave-1">
              <path d="M-50,530 C150,510 350,550 600,528 C750,514 780,525 850,518 L850,560 L-50,560 Z" fill="#C0392B" opacity="0.85"/>
            </g>
            <g className="wave-2">
              <path d="M-50,542 C130,522 330,562 580,540 C730,526 770,538 850,530 L850,570 L-50,570 Z" fill="#E67E22" opacity="0.8"/>
            </g>
            <g className="wave-3">
              <path d="M-50,552 C150,534 350,570 600,550 C740,537 775,548 850,542 L850,580 L-50,580 Z" fill="#F1C40F" opacity="0.72"/>
            </g>
            <g className="wave-4">
              <path d="M-50,560 C140,544 340,578 590,558 C735,546 772,556 850,550 L850,590 L-50,590 Z" fill="#2980B9" opacity="0.8"/>
            </g>
            <g className="wave-5">
              <path d="M-50,568 C155,554 355,586 605,566 C740,555 776,564 850,558 L850,600 L-50,600 Z" fill="#1ABC9C" opacity="0.75"/>
            </g>
            <path d="M-50,576 C150,562 350,594 600,575 C740,563 775,572 850,566 L850,600 L-50,600 Z" fill="#27AE60" opacity="0.85"/>

          </svg>
        </div>

        {/* Text content — above SVG */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-8 pb-4" style={{marginTop:"-80px"}}>
          <p className="fade-up text-xs font-bold tracking-[0.3em] mb-4 uppercase"
            style={{color:"rgba(255,255,255,0.45)", fontFamily:"system-ui"}}>
            {lang==="fr"?"Église Unie du Canada":"United Church of Canada"}
          </p>
          <h1 className="fade-up-2 font-bold text-white leading-tight"
            style={{fontSize:"clamp(28px,6vw,58px)", textShadow:"0 2px 20px rgba(0,0,0,0.6)", maxWidth:"600px"}}>
            {lang==="fr"?"Laurentides":"The Laurentians"}
          </h1>
          <p className="fade-up-3 text-white/60 mt-3 max-w-sm"
            style={{fontFamily:"system-ui", fontSize:"15px"}}>
            {lang==="fr"
              ?"9 paroisses inclusives au nord de Montréal"
              :"9 inclusive parishes north of Montreal"}
          </p>

          {/* Site cards */}
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md">
            <Link href="/lam"
              className="flex-1 py-4 px-6 rounded-2xl text-center transition-all hover:scale-105"
              style={{background:"rgba(255,255,255,0.1)", border:"1.5px solid rgba(255,255,255,0.2)", textDecoration:"none"}}>
              <div className="text-xl mb-1">🌲</div>
              <div className="font-bold text-white text-sm" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"Ministère régional":"Area Ministry"}
              </div>
              <div className="text-white/40 text-xs mt-0.5" style={{fontFamily:"system-ui"}}>LAM — MRL</div>
            </Link>
            <Link href="/sainte-adele"
              className="flex-1 py-4 px-6 rounded-2xl text-center transition-all hover:scale-105"
              style={{background:"rgba(255,255,255,0.1)", border:"1.5px solid rgba(255,255,255,0.2)", textDecoration:"none"}}>
              <div className="text-xl mb-1">⛪</div>
              <div className="font-bold text-white text-sm" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"Église de Sainte-Adèle":"Sainte-Adèle Church"}
              </div>
              <div className="text-white/40 text-xs mt-0.5" style={{fontFamily:"system-ui"}}>
                {lang==="fr"?"La Chapelle sur le Lac":"The Chapel on the Lake"}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
