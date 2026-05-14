"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const SCHEDULE = [
  { church: "Église Unie de Sainte-Adèle", day: { fr: "Dimanche", en: "Sunday" }, time: "10h30", lang_note: "FR", color: "#2980B9" },
  { church: "Morin Heights United", day: { fr: "Dimanche", en: "Sunday" }, time: "10h00", lang_note: "EN", color: "#27AE60" },
  { church: "Shawbridge United", day: { fr: "Dimanche", en: "Sunday" }, time: "10h00", lang_note: "EN", color: "#E67E22" },
  { church: "Arundel United", day: { fr: "Dimanche", en: "Sunday" }, time: "10h30", lang_note: "EN", color: "#C0392B" },
  { church: "Harrington United", day: { fr: "Dimanche", en: "Sunday" }, time: "10h30", lang_note: "EN", color: "#1ABC9C" },
  { church: "Lachute United (Hamford)", day: { fr: "Dimanche", en: "Sunday" }, time: "10h30", lang_note: "EN/FR", color: "#8E44AD" },
  { church: "St. Andrew's Avoca", day: { fr: "Dimanche", en: "Sunday" }, time: "10h00", lang_note: "EN", color: "#F1C40F" },
  { church: "St. Mungo's, Cushing", day: { fr: "Dimanche", en: "Sunday" }, time: "10h30", lang_note: "EN", color: "#E67E22" },
  { church: "Knox-Wesley, Grenville", day: { fr: "Dimanche", en: "Sunday" }, time: "9h30", lang_note: "EN/FR", color: "#2980B9" },
];

const NAVFR = [
  { label: "← Retour accueil", href: "/lam" },
  { label: "Nos 9 paroisses", href: "/lam#paroisses" },
  { label: "Mariages", href: "/lam/mariages" },
  { label: "Sermons", href: "/lam/sermons" },
];
const NAVEN = [
  { label: "← Back home", href: "/lam" },
  { label: "Our 9 parishes", href: "/lam#paroisses" },
  { label: "Weddings", href: "/lam/mariages" },
  { label: "Sermons", href: "/lam/sermons" },
];

export default function HorairePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <div>
      <CrossNav site="lam" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>
          {lang==="fr"?"Horaire des cultes":"Worship Schedule"}
        </h1>
        <p className="text-gray-500 mb-10" style={{fontFamily:"system-ui"}}>
          {lang==="fr"?"Célébrations hebdomadaires dans nos 9 paroisses":"Weekly celebrations across our 9 parishes"}
        </p>

        {/* Zoom card */}
        <div className="card p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{background:"#2980B9"}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M15 10l4.55-2.27A1 1 0 0121 8.77v6.46a1 1 0 01-1.45.9L15 14"/><rect x="3" y="8" width="12" height="8" rx="2"/></svg>
          </div>
          <div className="flex-1">
            <div className="font-bold" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
              {lang==="fr"?"Célébration en ligne — Zoom":"Online worship — Zoom"}
            </div>
            <div className="text-sm text-gray-500 mt-1" style={{fontFamily:"system-ui"}}>
              {lang==="fr"?"Rejoignez-nous chaque dimanche · ID: 862 8444 1521 · Tél: 1-438-809-7799":"Join us every Sunday · ID: 862 8444 1521 · Tel: 1-438-809-7799"}
            </div>
          </div>
          <a href="https://us02web.zoom.us/j/86284441521" target="_blank" rel="noopener"
            className="px-6 py-2.5 rounded-full text-white text-sm font-bold flex-shrink-0"
            style={{background:"#2980B9", fontFamily:"system-ui"}}>
            {lang==="fr"?"Rejoindre":"Join"} →
          </a>
        </div>

        {/* Schedule list */}
        <div className="flex flex-col gap-3">
          {SCHEDULE.map((s, i) => (
            <div key={i} className="card p-5 flex items-center gap-4">
              <div className="w-1.5 h-12 rounded-full flex-shrink-0" style={{background:s.color}}/>
              <div className="flex-1">
                <div className="font-bold" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{s.church}</div>
                <div className="text-sm text-gray-500 mt-0.5" style={{fontFamily:"system-ui"}}>{s.day[lang]}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{color:s.color, fontFamily:"system-ui"}}>{s.time}</div>
                <div className="text-xs text-gray-400 mt-0.5" style={{fontFamily:"system-ui"}}>{s.lang_note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
