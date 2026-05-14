"use client";
import { useState } from "react";
import WaveHero from "@/components/WaveHero";

const CHURCHES = [
  { name: "Église Unie de Sainte-Adèle", region: "Laurentides", color: "#2980B9" },
  { name: "Morin Heights United", region: "Laurentides", color: "#27AE60" },
  { name: "Shawbridge United", region: "Laurentides", color: "#E67E22" },
  { name: "Arundel United", region: "Laurentides", color: "#C0392B" },
  { name: "Harrington United", region: "Laurentides", color: "#1ABC9C" },
  { name: "Lachute United", region: "Argenteuil", color: "#8E44AD" },
  { name: "St. Andrew's Avoca", region: "Argenteuil", color: "#F1C40F" },
  { name: "St. Mungo's, Cushing", region: "Laurentides", color: "#E67E22" },
  { name: "Knox-Wesley, Grenville", region: "Argenteuil", color: "#2980B9" },
];

const TEAM = [
  { name: "Kelley Molloy", role: { fr: "Ministre coordinatrice", en: "Coordinating Minister" }, initial: "K" },
  { name: "Stéphane Godbout", role: { fr: "Pasteur — Sainte-Adèle", en: "Pastor — Sainte-Adèle" }, initial: "S" },
  { name: "Gail Hocquard", role: { fr: "Célébrante laïque certifiée", en: "Licensed Lay Worship Leader" }, initial: "G" },
  { name: "Cathy Hamilton", role: { fr: "Révérende", en: "Reverend" }, initial: "C" },
  { name: "Jim Kenney", role: { fr: "Ministre", en: "Minister" }, initial: "J" },
];

const T = {
  fr: {
    tagline: "Ministère régional des Laurentides · Église Unie du Canada",
    title: "Unis dans la foi, ancrés dans les Laurentides",
    subtitle: "9 paroisses inclusives, accueillantes et engagées — du nord de Montréal jusqu'à l'Argenteuil.",
    cta: "Découvrir nos paroisses",
    section1: "Nos 9 paroisses",
    section1sub: "Un réseau de communautés vivantes à travers les Laurentides et l'Argenteuil",
    section2: "Notre équipe",
    section2sub: "Des personnes dédiées qui accompagnent nos communautés",
    section3: "Ce que nous croyons",
    values: [
      { icon: "🌿", title: "Inclusivité totale", body: "Nous accueillons tout le monde sans égard à l'identité de genre, l'orientation sexuelle ou l'état civil." },
      { icon: "🕊️", title: "Foi ouverte", body: "Nous explorons ensemble la spiritualité, incluant le doute. Nous n'avons pas toutes les réponses." },
      { icon: "🤝", title: "Justice sociale", body: "Engagés dans la réconciliation avec les peuples autochtones, l'environnement et la dignité humaine." },
      { icon: "🎵", title: "Célébration vivante", body: "La musique, la communauté et les célébrations sont au cœur de notre vie ensemble." },
    ],
    donateLabel: "Faire un don",
    footer: "Ministère régional des Laurentides · Église Unie du Canada",
    siteLabel: "LAM · MRL",
  },
  en: {
    tagline: "Laurentian Area Ministry · United Church of Canada",
    title: "United in Faith, Rooted in the Laurentians",
    subtitle: "9 inclusive, welcoming and engaged parishes — from north of Montreal to Argenteuil.",
    cta: "Discover our parishes",
    section1: "Our 9 Parishes",
    section1sub: "A network of vibrant communities across the Laurentians and Argenteuil",
    section2: "Our Team",
    section2sub: "Dedicated people supporting our communities",
    section3: "What We Believe",
    values: [
      { icon: "🌿", title: "Full Inclusivity", body: "We welcome everyone regardless of gender identity, sexual orientation or marital status." },
      { icon: "🕊️", title: "Open Faith", body: "We explore spirituality together, including doubt. We don't have all the answers." },
      { icon: "🤝", title: "Social Justice", body: "Committed to Indigenous reconciliation, the environment, and human dignity." },
      { icon: "🎵", title: "Living Celebration", body: "Music, community and celebrations are at the heart of our life together." },
    ],
    donateLabel: "Make a Donation",
    footer: "Laurentian Area Ministry · United Church of Canada",
    siteLabel: "LAM · MRL",
  }
};

export default function LAMPage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const t = T[lang];

  return (
    <div className="min-h-screen">
      <WaveHero
        lang={lang}
        onToggleLang={() => setLang(l => l === "fr" ? "en" : "fr")}
        tagline={t.tagline}
        title={t.title}
        subtitle={t.subtitle}
        ctaLabel={t.cta}
        ctaHref="#paroisses"
        siteLabel={t.siteLabel}
      />

      {/* PARISHES */}
      <section id="paroisses" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{color:"#1a3d2b"}}>{t.section1}</h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{fontFamily:"system-ui"}}>{t.section1sub}</p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1 w-8 rounded-full" style={{background:"#C0392B"}}/>
            <div className="h-1 w-8 rounded-full" style={{background:"#E67E22"}}/>
            <div className="h-1 w-8 rounded-full" style={{background:"#F1C40F"}}/>
            <div className="h-1 w-8 rounded-full" style={{background:"#2980B9"}}/>
            <div className="h-1 w-8 rounded-full" style={{background:"#27AE60"}}/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHURCHES.map((c, i) => (
            <div key={i} className="church-card p-6 flex items-start gap-4">
              <div className="w-3 h-12 rounded-full flex-shrink-0 mt-0.5" style={{background:c.color}}/>
              <div>
                <div className="font-bold text-base" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{c.name}</div>
                <div className="text-xs mt-1 font-medium tracking-wide uppercase" style={{color:c.color, fontFamily:"system-ui"}}>{c.region}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <WaveDivider from="#faf8f4" to="#f0f4f0"/>

      {/* VALUES */}
      <section className="py-20 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{color:"#1a3d2b"}}>{t.section3}</h2>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1 w-6 rounded-full" style={{background:"#27AE60"}}/>
              <div className="h-1 w-12 rounded-full" style={{background:"#2980B9"}}/>
              <div className="h-1 w-6 rounded-full" style={{background:"#27AE60"}}/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.values.map((v, i) => (
              <div key={i} className="church-card p-7">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-bold text-lg mb-2" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{v.title}</div>
                <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui", fontSize:"15px"}}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{color:"#1a3d2b"}}>{t.section2}</h2>
          <p className="text-gray-500" style={{fontFamily:"system-ui"}}>{t.section2sub}</p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1 w-8 rounded-full" style={{background:"#E67E22"}}/>
            <div className="h-1 w-8 rounded-full" style={{background:"#C0392B"}}/>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {TEAM.map((m, i) => (
            <div key={i} className="church-card p-5 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{background:`hsl(${i*67},55%,42%)`}}>
                {m.initial}
              </div>
              <div>
                <div className="font-bold text-sm" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{m.name}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-tight" style={{fontFamily:"system-ui"}}>{m.role[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DONATE */}
      <section className="py-16 px-6 text-center" style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)"}}>
        <h2 className="text-2xl font-bold text-white mb-4">{t.donateLabel}</h2>
        <p className="text-white/65 mb-8 max-w-md mx-auto" style={{fontFamily:"system-ui"}}>
          {lang === "fr" ? "Vos dons soutiennent les 9 paroisses du ministère régional." : "Your donations support all 9 parishes of the area ministry."}
        </p>
        <a href="https://www.canadahelps.org/fr/organismesdebienfaisance/LAM-MRL/" target="_blank" rel="noopener" className="inline-block px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105" style={{fontFamily:"system-ui", background:"white", color:"#1a3d2b", boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}}>
          {lang === "fr" ? "Donner via CanadaDon" : "Donate via CanadaHelps"} →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{background:"#0f1e14"}}>
        <p className="text-white/35 text-xs" style={{fontFamily:"system-ui"}}>{t.footer} · lam-mrl.com</p>
      </footer>
    </div>
  );
}

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{background:from, marginBottom:"-2px"}}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{height:"60px",display:"block"}}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={to}/>
      </svg>
    </div>
  );
}
