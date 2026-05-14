"use client";
import { useState } from "react";
import Link from "next/link";
import CrossNav from "@/components/CrossNav";
import WaveHero from "@/components/WaveHero";
import EgliseUnieSection from "@/components/EgliseUnieSection";

const CHURCHES = [
  { name: "Église Unie de Sainte-Adèle", region: "Laurentides", color: "#2980B9", href: "/sainte-adele" },
  { name: "Morin Heights United", region: "Laurentides", color: "#27AE60", href: null },
  { name: "Shawbridge United", region: "Laurentides", color: "#E67E22", href: null },
  { name: "Arundel United", region: "Laurentides", color: "#C0392B", href: null },
  { name: "Harrington United", region: "Laurentides", color: "#1ABC9C", href: null },
  { name: "Lachute United (Hamford)", region: "Argenteuil", color: "#8E44AD", href: null },
  { name: "St. Andrew's Avoca", region: "Argenteuil", color: "#F1C40F", href: null },
  { name: "St. Mungo's, Cushing", region: "Laurentides", color: "#E67E22", href: null },
  { name: "Knox-Wesley, Grenville", region: "Argenteuil", color: "#2980B9", href: null },
];

const TEAM = [
  { name: "Kelley Molloy", role: { fr: "Ministre coordinatrice", en: "Coordinating Minister" }, color: "#2980B9" },
  { name: "Stéphane Godbout", role: { fr: "Pasteur — Sainte-Adèle", en: "Pastor — Sainte-Adèle" }, color: "#27AE60" },
  { name: "Gail Hocquard", role: { fr: "Célébrante laïque certifiée", en: "Licensed Lay Worship Leader" }, color: "#E67E22" },
  { name: "Cathy Hamilton", role: { fr: "Révérende", en: "Reverend" }, color: "#1ABC9C" },
  { name: "Jim Kenney", role: { fr: "Ministre", en: "Minister" }, color: "#C0392B" },
];

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

const T = {
  fr: {
    navItems: [
      { label: "Horaire des cultes", href: "/lam/horaire" },
      { label: "Nos 9 paroisses", href: "#paroisses" },
      { label: "Mariages & Célébrations", href: "/lam/mariages" },
      { label: "Sermons", href: "/lam/sermons" },
      { label: "Notre équipe", href: "#equipe" },
      { label: "C'est quoi l'Église Unie?", href: "#eglise-unie" },
      { label: "Faire un don", href: "#don" },
    ],
    tagline: "Ministère régional des Laurentides · Église Unie du Canada",
    title: "Unis dans la foi, ancrés dans les Laurentides",
    subtitle: "9 paroisses inclusives et accueillantes — du nord de Montréal jusqu'à l'Argenteuil.",
    cta: "Découvrir nos paroisses",
    sect1: "Nos 9 paroisses",
    sect1sub: "Un réseau de communautés vivantes à travers les Laurentides et l'Argenteuil",
    teamTitle: "Notre équipe",
    teamSub: "Des personnes dédiées qui accompagnent nos communautés",
    donTitle: "Soutenir le ministère",
    donSub: "Vos dons soutiennent les 9 paroisses de notre réseau régional.",
    donBtn: "Donner via CanadaDon",
    zoomLabel: "Célébration en ligne — Zoom",
    zoomSub: "Rejoignez-nous chaque dimanche",
  },
  en: {
    navItems: [
      { label: "Worship schedule", href: "/lam/horaire" },
      { label: "Our 9 parishes", href: "#paroisses" },
      { label: "Weddings & Celebrations", href: "/lam/mariages" },
      { label: "Sermons", href: "/lam/sermons" },
      { label: "Our team", href: "#equipe" },
      { label: "What is the United Church?", href: "#eglise-unie" },
      { label: "Make a donation", href: "#don" },
    ],
    tagline: "Laurentian Area Ministry · United Church of Canada",
    title: "United in Faith, Rooted in the Laurentians",
    subtitle: "9 inclusive, welcoming parishes — from north of Montreal to Argenteuil.",
    cta: "Discover our parishes",
    sect1: "Our 9 Parishes",
    sect1sub: "A network of vibrant communities across the Laurentians and Argenteuil",
    teamTitle: "Our Team",
    teamSub: "Dedicated people supporting our communities",
    donTitle: "Support the ministry",
    donSub: "Your gifts support all 9 parishes in our regional network.",
    donBtn: "Donate via CanadaHelps",
    zoomLabel: "Online worship — Zoom",
    zoomSub: "Join us every Sunday",
  }
};

export default function LAMPage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const t = T[lang];

  return (
    <div>
      <CrossNav site="lam" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={t.navItems}/>

      <WaveHero
        tagline={t.tagline} title={t.title} subtitle={t.subtitle}
        ctaLabel={t.cta} ctaHref="#paroisses"
      />

      {/* Color strip */}
      <div className="color-strip">{WAVES.map((c,i)=><div key={i} style={{background:c}}/>)}</div>

      {/* Zoom card */}
      <div className="py-8 px-6 max-w-2xl mx-auto">
        <div className="card p-6 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{background:"#2980B9"}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M15 10l4.55-2.27A1 1 0 0121 8.77v6.46a1 1 0 01-1.45.9L15 14"/><rect x="3" y="8" width="12" height="8" rx="2"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-bold" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{t.zoomLabel}</div>
            <div className="text-sm text-gray-500 mt-0.5" style={{fontFamily:"system-ui"}}>{t.zoomSub}</div>
          </div>
          <a href="https://us02web.zoom.us/j/86284441521" target="_blank" rel="noopener"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold flex-shrink-0"
            style={{background:"#2980B9", fontFamily:"system-ui"}}>
            Rejoindre →
          </a>
        </div>
      </div>

      {/* Parishes */}
      <section id="paroisses" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>{t.sect1}</h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{fontFamily:"system-ui"}}>{t.sect1sub}</p>
          <div className="flex justify-center gap-2 mt-4">
            {WAVES.map((c,i)=><div key={i} className="h-1 w-7 rounded-full" style={{background:c}}/>)}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHURCHES.map((c, i) => (
            c.href ? (
              <Link key={i} href={c.href} className="card p-6 flex items-start gap-4 group">
                <div className="w-3 h-12 rounded-full flex-shrink-0" style={{background:c.color}}/>
                <div className="flex-1">
                  <div className="font-bold text-base group-hover:underline" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{c.name}</div>
                  <div className="text-xs mt-1 font-medium tracking-wide uppercase" style={{color:c.color, fontFamily:"system-ui"}}>{c.region}</div>
                  <div className="text-xs mt-1.5 text-gray-400" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Voir le site →":"View site →"}</div>
                </div>
              </Link>
            ) : (
              <div key={i} className="card p-6 flex items-start gap-4">
                <div className="w-3 h-12 rounded-full flex-shrink-0" style={{background:c.color}}/>
                <div>
                  <div className="font-bold text-base" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{c.name}</div>
                  <div className="text-xs mt-1 font-medium tracking-wide uppercase" style={{color:c.color, fontFamily:"system-ui"}}>{c.region}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-16 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>{t.teamTitle}</h2>
            <p className="text-gray-500" style={{fontFamily:"system-ui"}}>{t.teamSub}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {TEAM.map((m, i) => (
              <div key={i} className="card p-5 text-center flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{background:m.color}}>
                  {m.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{m.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight" style={{fontFamily:"system-ui"}}>{m.role[lang]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eglise Unie Section */}
      <section id="eglise-unie">
        <EgliseUnieSection lang={lang}/>
      </section>

      {/* Donate */}
      <section id="don" className="py-16 px-6 text-center" style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)"}}>
        <div className="text-3xl mb-4">🌿</div>
        <h2 className="text-2xl font-bold text-white mb-3">{t.donTitle}</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto" style={{fontFamily:"system-ui"}}>{t.donSub}</p>
        <a href="https://www.canadahelps.org/fr/organismesdebienfaisance/LAM-MRL/" target="_blank" rel="noopener"
          className="inline-block px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
          style={{fontFamily:"system-ui", background:"white", color:"#1a3d2b", boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}}>
          {t.donBtn} →
        </a>
      </section>

      {/* Footer */}
      <div className="color-strip">{WAVES.map((c,i)=><div key={i} style={{background:c}}/>)}</div>
      <footer className="py-6 px-6 text-center" style={{background:"#0f1e14"}}>
        <p className="text-white/30 text-xs" style={{fontFamily:"system-ui"}}>
          Ministère régional des Laurentides · Laurentian Area Ministry · lam-mrl.com
        </p>
      </footer>
    </div>
  );
}
