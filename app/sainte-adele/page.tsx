"use client";
import { useState } from "react";
import Link from "next/link";
import CrossNav from "@/components/CrossNav";
import WaveHero from "@/components/WaveHero";
import EgliseUnieSection from "@/components/EgliseUnieSection";

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

const T = {
  fr: {
    navItems: [
      { label: "Horaire & Activités", href: "#horaire" },
      { label: "Services", href: "#services" },
      { label: "Lambert & Musique", href: "#musique" },
      { label: "Siège du Cœur", href: "/sainte-adele/siege" },
      { label: "Boutique", href: "/sainte-adele/boutique" },
      { label: "Blogue & Nouvelles", href: "/sainte-adele/blog" },
      { label: "Catalogue communautaire", href: "/sainte-adele/communaute" },
      { label: "C'est quoi l'Église Unie?", href: "#eglise-unie" },
      { label: "Donner", href: "#don" },
      { label: "Nous joindre", href: "#contact" },
      { label: "← Réseau LAM-MRL", href: "/lam" },
    ],
    tagline: "Église Unie de Sainte-Adèle · La Chapelle sur le Lac",
    title: "Une communauté vivante au cœur des Laurentides",
    subtitle: "Chaque dimanche à 10h30 — bienvenue chez vous, quelle que soit votre histoire.",
    cta: "Planifier ma visite",
    schedTitle: "Horaire & Activités",
    schedSub: "Tous les rendez-vous réguliers de notre communauté",
    sched: [
      { e:"⛪", day:"Dimanche", time:"10h30", label:"Célébration du dimanche" },
      { e:"🏃", day:"Mardi", time:"9h00", label:"Exercices sur chaises" },
      { e:"🏃", day:"Vendredi", time:"9h00", label:"Exercices sur chaises" },
      { e:"🍽️", day:"Mensuel", time:"12h00", label:"Dîner communautaire — 5$" },
      { e:"🎵", day:"Mensuel", time:"19h30", label:"Concert Lambert — 15$" },
    ],
    servTitle: "Services & Activités",
    servSub: "Tout ce que notre communauté offre",
    services: [
      { i:"💧", t:"Baptêmes", b:"Cérémonie d'accueil pour adultes et enfants. Pas besoin d'être membre." },
      { i:"💍", t:"Mariages", b:"La Chapelle sur le Lac pour tous les couples légaux. Cadre unique." },
      { i:"🕊️", t:"Funérailles", b:"Accompagnement bienveillant. Stéphane vous guide dans les démarches." },
      { i:"🎪", t:"Location chapelle", b:"Concerts, retraites, événements privés, photos. Sur le lac." },
      { i:"🌿", t:"Parc & Jardin famille", b:"Jeux extérieurs pour enfants. Ouvert à la communauté." },
      { i:"🏠", t:"Salle de réunion", b:"Sous-sol disponible pour groupes, ateliers, AA, rencontres." },
      { i:"🥫", t:"Collecte alimentaire", b:"Dons de nourriture et aide aux familles. Toute l'année." },
      { i:"🍂", t:"Corvées saisonnières", b:"Entretien collectif — printemps et automne. Rejoignez-nous!" },
    ],
    musicTitle: "Lambert & la Musique",
    musicSub: "La vie musicale de la Chapelle sur le Lac",
    lambertBio: "Lambert insuffle une âme unique à nos célébrations, avec Ginette Renaud à ses côtés. Ses concerts mensuels dans la chapelle sont des moments intimes et inoubliables.",
    concertCta: "Voir les chansons & paroles →",
    stephBio: "Stéphane anime notre communauté avec chaleur et profondeur. Ses réflexions touchent le cœur de chacun chaque dimanche matin.",
    renovTitle: "Fonds de rénovation",
    renovGoal: "Objectif : 60 000$",
    renovRaised: "23 000$ collectés",
    seatTitle: "Programme Siège du Cœur",
    seatBody: "Adoptez un banc pour 150$/an. Petite plaque discrète à votre nom. Fonds 100% rénovation.",
    seatCta: "Adopter un siège →",
    blogTitle: "Blogue & Nouvelles",
    blogSub: "La vie de notre communauté",
    communTitle: "Catalogue communautaire",
    communSub: "Membres qui offrent leurs services",
    donTitle: "Soutenir notre communauté",
    donRecur: "Don mensuel récurrent",
    donOnce: "Don unique",
    contactTitle: "Nous joindre",
    contactSub: "Pour mariages, baptêmes, locations et concerts",
  },
  en: {
    navItems: [
      { label: "Schedule & Activities", href: "#horaire" },
      { label: "Services", href: "#services" },
      { label: "Lambert & Music", href: "#musique" },
      { label: "Pew Dedication", href: "/sainte-adele/siege" },
      { label: "Shop", href: "/sainte-adele/boutique" },
      { label: "Blog & News", href: "/sainte-adele/blog" },
      { label: "Community Catalogue", href: "/sainte-adele/communaute" },
      { label: "What is the United Church?", href: "#eglise-unie" },
      { label: "Give", href: "#don" },
      { label: "Contact us", href: "#contact" },
      { label: "← LAM-MRL Network", href: "/lam" },
    ],
    tagline: "Sainte-Adèle United Church · The Chapel on the Lake",
    title: "A Living Community in the Heart of the Laurentians",
    subtitle: "Every Sunday at 10:30 AM — welcome, wherever you are in your journey.",
    cta: "Plan My Visit",
    schedTitle: "Schedule & Activities",
    schedSub: "All regular community gatherings",
    sched: [
      { e:"⛪", day:"Sunday", time:"10:30 AM", label:"Sunday worship" },
      { e:"🏃", day:"Tuesday", time:"9:00 AM", label:"Chair exercises" },
      { e:"🏃", day:"Friday", time:"9:00 AM", label:"Chair exercises" },
      { e:"🍽️", day:"Monthly", time:"12:00 PM", label:"Community dinner — $5" },
      { e:"🎵", day:"Monthly", time:"7:30 PM", label:"Lambert concert — $15" },
    ],
    servTitle: "Services & Activities",
    servSub: "Everything our community offers",
    services: [
      { i:"💧", t:"Baptisms", b:"Welcome ceremony for adults and children. No membership required." },
      { i:"💍", t:"Weddings", b:"The Chapel on the Lake for all legal couples. A unique lakeside setting." },
      { i:"🕊️", t:"Funerals", b:"Caring accompaniment. Stéphane will guide you through the process." },
      { i:"🎪", t:"Chapel rental", b:"Concerts, retreats, private events, photography. On the lake." },
      { i:"🌿", t:"Park & Family garden", b:"Outdoor play area for children. Open to the community." },
      { i:"🏠", t:"Meeting room", b:"Basement available for groups, workshops, AA, gatherings." },
      { i:"🥫", t:"Food drive", b:"Food donations and family support. Year-round." },
      { i:"🍂", t:"Seasonal work bees", b:"Collective grounds maintenance — spring and fall. Join us!" },
    ],
    musicTitle: "Lambert & Music",
    musicSub: "The musical life of the Chapel on the Lake",
    lambertBio: "Lambert gives our celebrations a unique soul, alongside Ginette Renaud. His monthly concerts in the chapel are intimate and unforgettable moments.",
    concertCta: "See songs & lyrics →",
    stephBio: "Stéphane brings warmth and depth to our community every week. His reflections touch everyone's heart each Sunday morning.",
    renovTitle: "Renovation Fund",
    renovGoal: "Goal: $60,000",
    renovRaised: "$23,000 raised",
    seatTitle: "Pew Dedication Program",
    seatBody: "Adopt a pew for $150/year. Small discreet plaque with your name. 100% renovation fund.",
    seatCta: "Adopt a pew →",
    blogTitle: "Blog & News",
    blogSub: "The life of our community",
    communTitle: "Community Catalogue",
    communSub: "Members offering their services",
    donTitle: "Support our community",
    donRecur: "Monthly recurring gift",
    donOnce: "One-time gift",
    contactTitle: "Contact us",
    contactSub: "For weddings, baptisms, rentals and concerts",
  }
};

function SectionTitle({ title, sub, color }: { title:string; sub:string; color:string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>{title}</h2>
      <p className="text-gray-500 max-w-xl mx-auto" style={{fontFamily:"system-ui"}}>{sub}</p>
      <div className="mt-4 flex justify-center gap-2">
        <div className="h-1 w-8 rounded-full" style={{background:color}}/>
        <div className="h-1 w-14 rounded-full" style={{background:color, opacity:.4}}/>
        <div className="h-1 w-8 rounded-full" style={{background:color}}/>
      </div>
    </div>
  );
}

export default function SainteAdelePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const t = T[lang];

  return (
    <div>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={t.navItems}/>

      <WaveHero tagline={t.tagline} title={t.title} subtitle={t.subtitle} ctaLabel={t.cta} ctaHref="#horaire"/>

      <div className="color-strip">{WAVES.map((c,i)=><div key={i} style={{background:c}}/>)}</div>

      {/* ── SCHEDULE ── */}
      <section id="horaire" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTitle title={t.schedTitle} sub={t.schedSub} color="#2980B9"/>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.sched.map((s,i) => (
            <div key={i} className="card p-5 text-center">
              <div className="text-2xl mb-2">{s.e}</div>
              <div className="font-bold text-sm mb-1" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{s.day}</div>
              <div className="text-xl font-bold mb-1.5" style={{color:WAVES[i%WAVES.length], fontFamily:"system-ui"}}>{s.time}</div>
              <div className="text-xs text-gray-500 leading-tight" style={{fontFamily:"system-ui"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={t.servTitle} sub={t.servSub} color="#27AE60"/>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.map((s,i) => (
              <div key={i} className="card p-5 bg-white">
                <div className="text-2xl mb-3">{s.i}</div>
                <div className="font-bold text-sm mb-2" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{s.t}</div>
                <p className="text-gray-500 text-xs leading-relaxed" style={{fontFamily:"system-ui"}}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MUSIC ── */}
      <section id="musique" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTitle title={t.musicTitle} sub={t.musicSub} color="#E67E22"/>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{background:"#E67E22"}}>L</div>
              <div>
                <div className="font-bold text-lg" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Lambert</div>
                <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Musicien en résidence":"Musician in residence"}</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"system-ui",fontSize:"15px"}}>{t.lambertBio}</p>
            <Link href="/sainte-adele/musique"
              className="inline-block px-6 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{background:"#E67E22",fontFamily:"system-ui"}}>
              {t.concertCta}
            </Link>
          </div>
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{background:"#2980B9"}}>S</div>
              <div>
                <div className="font-bold text-lg" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Stéphane Godbout</div>
                <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Pasteur":"Pastor"}</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui",fontSize:"15px"}}>{t.stephBio}</p>
          </div>
        </div>
      </section>

      {/* ── RENO + SIEGE ── */}
      <section className="py-20 px-6 md:px-12" style={{background:"#1a3d2b"}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8" style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)"}}>
            <div className="text-2xl mb-3">🏗️</div>
            <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily:"system-ui"}}>{t.renovTitle}</h3>
            <p className="text-white/60 text-sm mb-5" style={{fontFamily:"system-ui"}}>{t.renovGoal}</p>
            <div className="rounded-full h-3 mb-2" style={{background:"rgba(255,255,255,0.1)"}}>
              <div className="h-3 rounded-full" style={{width:"38%",background:"linear-gradient(90deg,#27AE60,#1ABC9C)"}}/>
            </div>
            <div className="flex justify-between text-xs text-white/45" style={{fontFamily:"system-ui"}}>
              <span>{t.renovRaised}</span><span>38%</span>
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)"}}>
            <div className="text-2xl mb-3">🪑</div>
            <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily:"system-ui"}}>{t.seatTitle}</h3>
            <p className="text-white/65 text-sm mb-5 leading-relaxed" style={{fontFamily:"system-ui"}}>{t.seatBody}</p>
            <Link href="/sainte-adele/siege"
              className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{background:"white",color:"#1a3d2b",fontFamily:"system-ui"}}>
              {t.seatCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG + COMMUNAUTE quick links ── */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/sainte-adele/blog" className="card p-7 flex items-start gap-5 group" style={{textDecoration:"none"}}>
            <div className="text-3xl flex-shrink-0">📰</div>
            <div>
              <div className="font-bold text-lg mb-1 group-hover:text-blue-700 transition-colors" style={{color:"#1a3d2b"}}>{t.blogTitle}</div>
              <p className="text-gray-500 text-sm" style={{fontFamily:"system-ui"}}>{t.blogSub}</p>
              <div className="text-xs font-bold mt-3" style={{color:"#2980B9",fontFamily:"system-ui"}}>{lang==="fr"?"Lire les nouvelles →":"Read the news →"}</div>
            </div>
          </Link>
          <Link href="/sainte-adele/communaute" className="card p-7 flex items-start gap-5 group" style={{textDecoration:"none"}}>
            <div className="text-3xl flex-shrink-0">🤝</div>
            <div>
              <div className="font-bold text-lg mb-1 group-hover:text-green-700 transition-colors" style={{color:"#1a3d2b"}}>{t.communTitle}</div>
              <p className="text-gray-500 text-sm" style={{fontFamily:"system-ui"}}>{t.communSub}</p>
              <div className="text-xs font-bold mt-3" style={{color:"#27AE60",fontFamily:"system-ui"}}>{lang==="fr"?"Voir le catalogue →":"View catalogue →"}</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ÉGLISE UNIE ── */}
      <section id="eglise-unie">
        <EgliseUnieSection lang={lang}/>
      </section>

      {/* ── DONATE ── */}
      <section id="don" className="py-20 px-6 text-center" style={{background:"linear-gradient(135deg,#0d2440,#1a3d2b)"}}>
        <div className="text-3xl mb-4">💚</div>
        <h2 className="text-2xl font-bold text-white mb-3">{t.donTitle}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#" className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
            style={{background:"#27AE60",fontFamily:"system-ui"}}>{t.donRecur} →</a>
          <a href="#" className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
            style={{background:"rgba(255,255,255,0.12)",border:"1.5px solid rgba(255,255,255,0.25)",fontFamily:"system-ui"}}>{t.donOnce} →</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
        <SectionTitle title={t.contactTitle} sub={t.contactSub} color="#C0392B"/>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 text-lg font-bold" style={{color:"#1a3d2b"}}>JH</div>
            <div className="font-bold" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Jacques-Henri Honoré</div>
            <div className="text-xs text-gray-500 mt-0.5 mb-3" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Responsable des locations":"Rentals coordinator"}</div>
            <a href="tel:4505128007" className="text-lg font-bold" style={{color:"#2980B9",fontFamily:"system-ui"}}>(450) 512-8007</a>
          </div>
          <div className="card p-6 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-white" style={{background:"#2980B9"}}>S</div>
            <div className="font-bold" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Stéphane Godbout</div>
            <div className="text-xs text-gray-500 mt-0.5 mb-3" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Pasteur":"Pastor"}</div>
            <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>⛪ {lang==="fr"?"Dimanche 10h30":"Sunday 10:30 AM"}</div>
            <div className="text-sm text-gray-500 mt-1" style={{fontFamily:"system-ui"}}>📍 Sainte-Adèle, QC</div>
          </div>
        </div>
      </section>

      <div className="color-strip">{WAVES.map((c,i)=><div key={i} style={{background:c}}/>)}</div>
      <footer className="py-6 px-6 text-center" style={{background:"#0f1e14"}}>
        <p className="text-white/30 text-xs" style={{fontFamily:"system-ui"}}>
          Église Unie de Sainte-Adèle · Ministère régional des Laurentides · Église Unie du Canada
        </p>
      </footer>
    </div>
  );
}
