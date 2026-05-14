"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const NAVFR = [
  { label: "← Retour Sainte-Adèle", href: "/sainte-adele" },
  { label: "Communauté", href: "/sainte-adele/communaute" },
  { label: "Musique", href: "/sainte-adele/musique" },
];
const NAVEN = [
  { label: "← Back to Sainte-Adèle", href: "/sainte-adele" },
  { label: "Community", href: "/sainte-adele/communaute" },
  { label: "Music", href: "/sainte-adele/musique" },
];

const POSTS = [
  {
    date: "2026-04-27",
    category: { fr: "Célébration", en: "Worship" },
    catColor: "#2980B9",
    title: { fr: "Dimanche de Pâques — Une célébration inoubliable", en: "Easter Sunday — An unforgettable celebration" },
    excerpt: { fr: "Plus de 90 personnes réunies autour du thème de la renaissance. Lambert et Ginette ont transporté la chapelle avec un programme musical exceptionnel.", en: "Over 90 people gathered around the theme of renewal. Lambert and Ginette transported the chapel with an exceptional musical programme." },
    author: "Stéphane Godbout",
  },
  {
    date: "2026-04-15",
    category: { fr: "Communauté", en: "Community" },
    catColor: "#27AE60",
    title: { fr: "Le jardin prend vie — appel aux bénévoles", en: "The garden comes alive — call for volunteers" },
    excerpt: { fr: "Avec le printemps, notre jardin communautaire reprend vie. Nous cherchons des bénévoles pour planter et entretenir cet espace vert unique sur le lac.", en: "With spring, our community garden comes alive. We are looking for volunteers to plant and maintain this unique green space on the lake." },
    author: "Charles Lapointe",
  },
  {
    date: "2026-04-08",
    category: { fr: "Musique", en: "Music" },
    catColor: "#E67E22",
    title: { fr: "Concert de Lambert — soirée du 14 mai", en: "Lambert concert — evening of May 14" },
    excerpt: { fr: "Notre musicien en résidence Lambert vous invite à une soirée acoustique intime dans la Chapelle sur le Lac. Places limitées — réservez maintenant.", en: "Our musician in residence Lambert invites you to an intimate acoustic evening in the Chapel on the Lake. Limited seats — reserve now." },
    author: "Lambert",
  },
  {
    date: "2026-03-25",
    category: { fr: "Foi & Réflexion", en: "Faith & Reflection" },
    catColor: "#8E44AD",
    title: { fr: "Carême vivant — une tradition renouvelée", en: "Living Lent — a renewed tradition" },
    excerpt: { fr: "Cette année, nous avons vécu le Carême comme une invitation à l'émerveillement plutôt qu'à la privation. Stéphane partage ses réflexions sur cette expérience transformatrice.", en: "This year, we experienced Lent as an invitation to wonder rather than deprivation. Stéphane shares his reflections on this transformative experience." },
    author: "Stéphane Godbout",
  },
  {
    date: "2026-03-10",
    category: { fr: "Activités", en: "Activities" },
    catColor: "#C0392B",
    title: { fr: "Succès du dîner de mars — 47 personnes réunies", en: "March dinner success — 47 people gathered" },
    excerpt: { fr: "Notre dîner mensuel à 5$ a accueilli 47 convives. Un record pour cette formule conviviale. La prochaine édition aura lieu le 2e dimanche d'avril.", en: "Our monthly $5 dinner welcomed 47 guests — a record for this friendly format. The next edition will be held on the 2nd Sunday of April." },
    author: "Comité communautaire",
  },
  {
    date: "2026-02-18",
    category: { fr: "Nouvelles", en: "News" },
    catColor: "#1ABC9C",
    title: { fr: "Fonds de rénovation — 23 000$ collectés!", en: "Renovation fund — $23,000 raised!" },
    excerpt: { fr: "Grâce à votre générosité et au programme Siège du Cœur, nous avons franchi le cap des 23 000$. Merci à tous les donateurs. L'objectif reste 60 000$.", en: "Thanks to your generosity and the Pew Dedication program, we have passed the $23,000 mark. Thank you to all donors. The goal remains $60,000." },
    author: "Conseil de fabrique",
  },
];

const CATEGORIES_FR = ["Tout", "Célébration", "Communauté", "Musique", "Foi & Réflexion", "Activités", "Nouvelles"];
const CATEGORIES_EN = ["All", "Worship", "Community", "Music", "Faith & Reflection", "Activities", "News"];

export default function BlogPage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const [filter, setFilter] = useState(0);
  const cats = lang === "fr" ? CATEGORIES_FR : CATEGORIES_EN;

  const filtered = filter === 0 ? POSTS : POSTS.filter(p =>
    p.category[lang] === cats[filter]
  );

  return (
    <div>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-14 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>
            {lang==="fr"?"Blogue & Nouvelles":"Blog & News"}
          </h1>
          <p className="text-gray-500" style={{fontFamily:"system-ui"}}>
            {lang==="fr"?"La vie de notre communauté, semaine après semaine":"The life of our community, week after week"}
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c, i) => (
            <button key={i} onClick={() => setFilter(i)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={{
                fontFamily:"system-ui",
                background: filter===i ? "#1a3d2b" : "white",
                color: filter===i ? "white" : "#555",
                border: "1.5px solid",
                borderColor: filter===i ? "#1a3d2b" : "rgba(0,0,0,0.1)",
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <article key={i} className="blog-card cursor-pointer">
              {/* Color top bar */}
              <div className="h-1.5 w-full" style={{background:post.catColor}}/>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="blog-tag" style={{background:post.catColor+"22", color:post.catColor}}>
                    {post.category[lang]}
                  </span>
                  <span className="text-xs text-gray-400" style={{fontFamily:"system-ui"}}>{post.date}</span>
                </div>
                <h2 className="font-bold text-lg mb-2 leading-snug" style={{color:"#1a3d2b"}}>
                  {post.title[lang]}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{fontFamily:"system-ui"}}>
                  {post.excerpt[lang]}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{background:post.catColor}}>
                    {post.author[0]}
                  </div>
                  <span className="text-xs text-gray-400" style={{fontFamily:"system-ui"}}>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
