"use client";
import { useState } from "react";
import WaveHero from "@/components/WaveHero";

const T = {
  fr: {
    tagline: "Église Unie de Sainte-Adèle · La Chapelle sur le Lac",
    title: "Une communauté vivante au cœur des Laurentides",
    subtitle: "Chaque dimanche à 10h30 — bienvenue chez vous, quelle que soit votre histoire.",
    cta: "Planifier ma visite",
    siteLabel: "Sainte-Adèle",
    horaire: "Horaire",
    horaireSub: "Célébrations et activités régulières",
    activites: "Activités & Services",
    activitesSub: "Tout ce que notre communauté offre",
    lambert: "Lambert & la musique",
    lambertSub: "La vie musicale de notre chapelle",
    don: "Donner",
    donSub: "Soutenir notre communauté",
    contact: "Nous joindre",
    schedule: [
      { emoji: "⛪", day: "Dimanche", time: "10h30", label: "Célébration du dimanche" },
      { emoji: "🏃", day: "Mardi", time: "9h00", label: "Exercices sur chaises" },
      { emoji: "🏃", day: "Vendredi", time: "9h00", label: "Exercices sur chaises" },
      { emoji: "🍽️", day: "Mensuel", time: "12h00", label: "Dîner communautaire — 5$" },
    ],
    services: [
      { icon: "💧", title: "Baptêmes", body: "Cérémonie d'accueil dans la communauté de foi. Adultes et enfants bienvenus." },
      { icon: "💍", title: "Mariages", body: "La Chapelle sur le Lac pour tous les couples légaux — une cérémonie inoubliable." },
      { icon: "🕊️", title: "Funérailles", body: "Accompagnement bienveillant dans les moments difficiles." },
      { icon: "🎪", title: "Location de la chapelle", body: "Concerts, retraites, événements privés. Cadre unique sur le lac." },
      { icon: "🌿", title: "Jardin & Parc famille", body: "Espace extérieur avec jeux pour enfants. Ouvert à la communauté." },
      { icon: "🏠", title: "Salle de réunion", body: "Disponible pour groupes communautaires, ateliers, rencontres." },
      { icon: "🥫", title: "Collecte alimentaire", body: "Dons de nourriture et aide aux familles dans le besoin." },
      { icon: "🍂", title: "Corvées saisonnières", body: "Entretien collectif du terrain — printemps et automne." },
    ],
    seatProgram: "Programme Siège du Cœur",
    seatBody: "Adoptez un banc de la chapelle pour 150$/an. Votre nom sur une petite plaque discrète. Les fonds vont directement au projet de rénovation.",
    seatCta: "Adopter un siège",
    renovLabel: "Fonds de rénovation",
    renovBody: "Objectif : 60 000$",
    renovProgress: "23 000$ collectés",
    stephaneBio: "Pasteur Stéphane Godbout anime notre communauté avec passion depuis plusieurs années. Ses réflexions profondes touchent le cœur de chacun chaque dimanche.",
    lambertBio: "Lambert est notre musicien en résidence. Sa musique, partagée avec Ginette Renaud, donne une âme unique à nos célébrations. Concerts mensuels disponibles.",
    concertCta: "Réserver pour un concert",
    donRecurrent: "Don mensuel récurrent",
    donUnique: "Don unique",
    navItems: ["Horaire", "Services", "Musique", "Donner", "Nous joindre"],
  },
  en: {
    tagline: "Sainte-Adèle United Church · The Chapel on the Lake",
    title: "A Living Community in the Heart of the Laurentians",
    subtitle: "Every Sunday at 10:30 AM — welcome, wherever you are in your journey.",
    cta: "Plan My Visit",
    siteLabel: "Ste-Adèle",
    horaire: "Schedule",
    horaireSub: "Regular celebrations and activities",
    activites: "Activities & Services",
    activitesSub: "Everything our community offers",
    lambert: "Lambert & Music",
    lambertSub: "The musical life of our chapel",
    don: "Give",
    donSub: "Support our community",
    contact: "Contact Us",
    schedule: [
      { emoji: "⛪", day: "Sunday", time: "10:30 AM", label: "Sunday Worship" },
      { emoji: "🏃", day: "Tuesday", time: "9:00 AM", label: "Chair Exercises" },
      { emoji: "🏃", day: "Friday", time: "9:00 AM", label: "Chair Exercises" },
      { emoji: "🍽️", day: "Monthly", time: "12:00 PM", label: "Community Dinner — $5" },
    ],
    services: [
      { icon: "💧", title: "Baptisms", body: "A ceremony of welcome into the community of faith. All ages welcome." },
      { icon: "💍", title: "Weddings", body: "The Chapel on the Lake for all legal couples — an unforgettable ceremony." },
      { icon: "🕊️", title: "Funerals", body: "Caring accompaniment during difficult times." },
      { icon: "🎪", title: "Chapel Rental", body: "Concerts, retreats, private events. Unique lakeside setting." },
      { icon: "🌿", title: "Garden & Family Park", body: "Outdoor space with children's play equipment. Open to the community." },
      { icon: "🏠", title: "Meeting Room", body: "Available for community groups, workshops, gatherings." },
      { icon: "🥫", title: "Food Drive", body: "Food donations and support for families in need." },
      { icon: "🍂", title: "Seasonal Work Bees", body: "Collective grounds maintenance — spring and fall." },
    ],
    seatProgram: "Pew Dedication Program",
    seatBody: "Adopt a chapel pew for $150/year. Your name on a small discreet plaque. Funds go directly to the renovation project.",
    seatCta: "Adopt a Pew",
    renovLabel: "Renovation Fund",
    renovBody: "Goal: $60,000",
    renovProgress: "$23,000 raised",
    stephaneBio: "Pastor Stéphane Godbout leads our community with passion. His thoughtful reflections touch everyone's heart each Sunday morning.",
    lambertBio: "Lambert is our musician in residence. His music, shared with Ginette Renaud, gives a unique soul to our celebrations. Monthly concerts available.",
    concertCta: "Reserve for a Concert",
    donRecurrent: "Monthly Recurring Gift",
    donUnique: "One-Time Gift",
    navItems: ["Schedule", "Services", "Music", "Give", "Contact"],
  }
};

const WAVE_COLORS = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function SainteAdelePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const t = T[lang];

  return (
    <div className="min-h-screen">
      <WaveHero
        lang={lang}
        onToggleLang={() => setLang(l => l==="fr"?"en":"fr")}
        tagline={t.tagline}
        title={t.title}
        subtitle={t.subtitle}
        ctaLabel={t.cta}
        ctaHref="#horaire"
        siteLabel={t.siteLabel}
      />

      {/* COLORED STRIP */}
      <div className="flex h-2">
        {WAVE_COLORS.map((c,i) => <div key={i} className="flex-1" style={{background:c}}/>)}
      </div>

      {/* SCHEDULE */}
      <section id="horaire" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTitle title={t.horaire} sub={t.horaireSub} color="#2980B9"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {t.schedule.map((s,i) => (
            <div key={i} className="church-card p-6 text-center">
              <div className="text-3xl mb-3">{s.emoji}</div>
              <div className="font-bold text-lg mb-1" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>{s.day}</div>
              <div className="text-2xl font-bold mb-2" style={{color:WAVE_COLORS[i],fontFamily:"system-ui"}}>{s.time}</div>
              <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={t.activites} sub={t.activitesSub} color="#27AE60"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {t.services.map((s,i) => (
              <div key={i} className="church-card p-5 bg-white">
                <div className="text-2xl mb-3">{s.icon}</div>
                <div className="font-bold text-base mb-2" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>{s.title}</div>
                <p className="text-gray-500 text-sm leading-relaxed" style={{fontFamily:"system-ui"}}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAMBERT MUSIC */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTitle title={t.lambert} sub={t.lambertSub} color="#E67E22"/>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="church-card p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{background:"#E67E22"}}>L</div>
              <div>
                <div className="font-bold text-lg" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Lambert</div>
                <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Musicien en résidence":"Musician in Residence"}</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5" style={{fontFamily:"system-ui",fontSize:"15px"}}>{t.lambertBio}</p>
            <a href="#contact" className="inline-block px-6 py-2.5 rounded-full text-white text-sm font-semibold" style={{background:"#E67E22",fontFamily:"system-ui"}}>
              {t.concertCta} →
            </a>
          </div>
          <div className="church-card p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{background:"#2980B9"}}>S</div>
              <div>
                <div className="font-bold text-lg" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>Stéphane Godbout</div>
                <div className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>{lang==="fr"?"Pasteur":"Pastor"}</div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui",fontSize:"15px"}}>{t.stephaneBio}</p>
          </div>
        </div>
      </section>

      {/* RENOVATION + SEATS */}
      <section className="py-20 px-6 md:px-12" style={{background:"#1a3d2b"}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Renovation */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/15">
            <div className="text-2xl mb-2">🏗️</div>
            <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily:"system-ui"}}>{t.renovLabel}</h3>
            <p className="text-white/65 text-sm mb-5" style={{fontFamily:"system-ui"}}>{t.renovBody}</p>
            <div className="bg-white/10 rounded-full h-3 mb-2">
              <div className="h-3 rounded-full" style={{width:"38%",background:"linear-gradient(90deg,#27AE60,#1ABC9C)"}}/>
            </div>
            <div className="flex justify-between text-xs text-white/50" style={{fontFamily:"system-ui"}}>
              <span>{t.renovProgress}</span>
              <span>38%</span>
            </div>
          </div>
          {/* Seat program */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/15">
            <div className="text-2xl mb-2">🪑</div>
            <h3 className="text-xl font-bold text-white mb-3" style={{fontFamily:"system-ui"}}>{t.seatProgram}</h3>
            <p className="text-white/65 text-sm mb-5 leading-relaxed" style={{fontFamily:"system-ui"}}>{t.seatBody}</p>
            <a href="#contact" className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105" style={{background:"white",color:"#1a3d2b",fontFamily:"system-ui"}}>
              {t.seatCta} →
            </a>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donner" className="py-20 px-6 text-center" style={{background:"linear-gradient(135deg,#0d2440,#1a3d2b)"}}>
        <div className="text-3xl mb-4">💚</div>
        <h2 className="text-2xl font-bold text-white mb-3">{t.don}</h2>
        <p className="text-white/60 mb-10 max-w-md mx-auto" style={{fontFamily:"system-ui"}}>{t.donSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105" style={{background:"#27AE60",color:"white",fontFamily:"system-ui",boxShadow:"0 4px 20px rgba(39,174,96,0.4)"}}>
            {t.donRecurrent} →
          </a>
          <a href="#" className="px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105" style={{background:"rgba(255,255,255,0.12)",color:"white",fontFamily:"system-ui",border:"1.5px solid rgba(255,255,255,0.25)"}}>
            {t.donUnique} →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <SectionTitle title={t.contact} sub={lang==="fr"?"Nous sommes là pour vous":"We are here for you"} color="#C0392B"/>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { icon: "📍", label: lang==="fr"?"Adresse":"Address", val: "Sainte-Adèle, QC" },
            { icon: "⏰", label: lang==="fr"?"Dimanche":"Sunday", val: "10h30" },
            { icon: "✉️", label: lang==="fr"?"Courriel":"Email", val: "eglise@sainte-adele.ca" },
          ].map((c,i) => (
            <div key={i} className="church-card p-6 text-center">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-xs uppercase tracking-wide text-gray-400 mb-1" style={{fontFamily:"system-ui"}}>{c.label}</div>
              <div className="font-semibold" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>{c.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="flex h-1.5">
        {WAVE_COLORS.map((c,i) => <div key={i} className="flex-1" style={{background:c}}/>)}
      </div>
      <footer className="py-8 px-6 text-center" style={{background:"#0f1e14"}}>
        <p className="text-white/35 text-xs" style={{fontFamily:"system-ui"}}>
          Église Unie de Sainte-Adèle · Partie du Ministère régional des Laurentides · Église Unie du Canada
        </p>
      </footer>
    </div>
  );
}

function SectionTitle({ title, sub, color }: { title: string; sub: string; color: string }) {
  return (
    <div className="text-center mb-2">
      <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>{title}</h2>
      <p className="text-gray-500 max-w-xl mx-auto" style={{fontFamily:"system-ui"}}>{sub}</p>
      <div className="mt-4 flex justify-center gap-2">
        <div className="h-1 w-8 rounded-full" style={{background:color}}/>
        <div className="h-1 w-14 rounded-full" style={{background:color, opacity:0.4}}/>
        <div className="h-1 w-8 rounded-full" style={{background:color}}/>
      </div>
    </div>
  );
}
