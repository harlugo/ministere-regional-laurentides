"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const NAVFR = [
  { label: "← Retour Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blogue & Nouvelles", href: "/sainte-adele/blog" },
  { label: "Réserver concert", href: "/sainte-adele#contact" },
];
const NAVEN = [
  { label: "← Back to Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blog & News", href: "/sainte-adele/blog" },
  { label: "Reserve concert", href: "/sainte-adele#contact" },
];

const SONGS = [
  {
    title: "La Chapelle sur le Lac",
    theme: { fr: "Ancrage & communauté", en: "Roots & community" },
    color: "#2980B9",
    lyrics: {
      fr: `Au bord de l'eau, dans la lumière du matin
La cloche sonne et les gens se rassemblent
Des voix qui s'élèvent vers le ciel laurentien
Une communauté qui se tient, qui ressemble

À une famille où l'on revient toujours
Quelle que soit l'heure, quelle que soit la saison
La chapelle attend, les bras ouverts, les bras longs
Elle nous accueille avec le même amour`,
      en: `By the water's edge, in the morning light
The bell rings and the people gather round
Voices rising to the Laurentian sky
A community standing, a community found

Like a family you always come back to
Whatever the hour, whatever the season
The chapel waits, with arms open wide
It welcomes us all, for the very same reason`,
    }
  },
  {
    title: "Chaque Dimanche",
    theme: { fr: "Rituel & espoir", en: "Ritual & hope" },
    color: "#27AE60",
    lyrics: {
      fr: `Chaque dimanche on revient
Poser nos fardeaux au pied de la croix
Stéphane parle et quelque chose se tient
Une lumière douce qui guide nos pas

On n'a pas toutes les réponses, c'est vrai
Mais on cherche ensemble dans l'espace commun
Le doute est le bienvenu quand il est honnête
Et la foi se construit, pas à pas, un par un`,
      en: `Every Sunday we return
To lay our burdens at the foot of the cross
Stéphane speaks and something holds
A gentle light that guides our steps across

We don't have all the answers, it's true
But we search together in our shared space
Doubt is welcome when it comes from the heart
And faith is built, step by step, face by face`,
    }
  },
  {
    title: "Les Vagues Colorées",
    theme: { fr: "Inclusion & diversité", en: "Inclusion & diversity" },
    color: "#E67E22",
    lyrics: {
      fr: `Rouge comme le feu qui réchauffe et unit
Orange comme l'automne dans les Laurentides
Jaune comme le soleil sur le lac au matin
Bleu comme le ciel infini, au-delà des rides

Turquoise comme les eaux calmes et profondes
Vert comme la forêt qui nous enracine ici
Toutes les couleurs de notre vie abonde
Chacun sa teinte, tous ensemble, tout est accompli`,
      en: `Red like the fire that warms and unites
Orange like autumn in the Laurentians wide
Yellow like the morning sun upon the lake
Blue like the endless sky reaching high inside

Teal like the still and deep and quiet waters
Green like the forest that roots us to this place
Every colour of the lives we live together
Each with our shade, as one, by grace`,
    }
  },
  {
    title: "Le Jardin de Ginette",
    theme: { fr: "Nature & soin", en: "Nature & care" },
    color: "#1ABC9C",
    lyrics: {
      fr: `Ginette plante ses mains dans la terre noire
Elle murmure des mots que seules les fleurs entendent
Le jardin de l'église est son territoire
Ses mains soignent ce que nos cœurs comprennent

Elle sait que la beauté est un don qu'on partage
Que chaque fleur est une prière silencieuse
Que le jardin grandit comme le sage
Et que la vie, comme la rose, est précieuse`,
      en: `Ginette plants her hands into the dark earth
She whispers words that only flowers hear
The church garden is her territory
Her hands tend what our hearts hold dear

She knows that beauty is a gift we share
That every flower is a silent prayer
That the garden grows the way the wise do
And life, like a rose, is precious and rare`,
    }
  },
  {
    title: "Première Fois",
    theme: { fr: "Accueil & nouvelle venue", en: "Welcome & new arrivals" },
    color: "#8E44AD",
    lyrics: {
      fr: `Peut-être que c'est ta première fois ici
Peut-être que tu hésites sur le seuil
Tu n'as besoin de rien, d'aucun esprit
Ni de foi parfaite, ni de deuil

Viens comme tu es, avec tes questions
Avec tes doutes que tu portes depuis longtemps
On ne demande pas d'explications
On t'accueille, simplement, maintenant`,
      en: `Maybe this is your first time here
Maybe you're hesitating on the threshold
You don't need anything, no special cheer
No perfect faith, no story to be told

Come as you are, with all your questions
With the doubts you've carried for so long
We don't ask for any explanations
We welcome you, simply, right where you belong`,
    }
  },
];

export default function MusiquePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const [open, setOpen] = useState<number|null>(null);

  return (
    <div>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-14 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl"
            style={{background:"linear-gradient(135deg,#E67E22,#F1C40F)"}}>
            🎵
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>Lambert</h1>
          <p className="text-gray-500 mb-1" style={{fontFamily:"system-ui"}}>
            {lang==="fr"?"Musicien en résidence · Église Unie de Sainte-Adèle":"Musician in residence · United Church of Sainte-Adèle"}
          </p>
          <p className="text-gray-400 text-sm max-w-md mx-auto mt-3 leading-relaxed" style={{fontFamily:"system-ui"}}>
            {lang==="fr"
              ?"Lambert compose des chansons originales inspirées de notre communauté, de la nature des Laurentides et de la foi vécue au quotidien. Il se produit avec Ginette Renaud lors des célébrations et concerts mensuels."
              :"Lambert composes original songs inspired by our community, the Laurentian landscape and everyday faith. He performs with Ginette Renaud at celebrations and monthly concerts."}
          </p>
        </div>

        {/* Songs list */}
        <div className="flex flex-col gap-4">
          {SONGS.map((song, i) => (
            <div key={i} className="card overflow-hidden">
              {/* Song header — clickable */}
              <button className="w-full p-5 flex items-center gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold"
                  style={{background:song.color}}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{song.title}</div>
                  <div className="text-xs mt-0.5" style={{color:song.color, fontFamily:"system-ui"}}>{song.theme[lang]}</div>
                </div>
                <div className="flex-shrink-0 text-gray-400 transition-transform"
                  style={{transform: open === i ? "rotate(180deg)" : "none"}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              {/* Lyrics — expandable */}
              {open === i && (
                <div className="px-5 pb-6 border-t" style={{borderColor:"rgba(0,0,0,0.06)"}}>
                  <div className="pt-4">
                    <pre className="whitespace-pre-wrap leading-loose text-gray-600 font-serif text-sm"
                      style={{fontFamily:"Georgia, serif"}}>
                      {song.lyrics[lang]}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Concert CTA */}
        <div className="mt-12 card p-8 text-center" style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)"}}>
          <div className="text-3xl mb-3">🎶</div>
          <h2 className="text-xl font-bold text-white mb-2">
            {lang==="fr"?"Concerts mensuels — Chapelle sur le Lac":"Monthly Concerts — Chapel on the Lake"}
          </h2>
          <p className="text-white/60 mb-6 text-sm" style={{fontFamily:"system-ui"}}>
            {lang==="fr"?"Places limitées · 15-25$ · Réservation recommandée":"Limited seats · $15-25 · Reservation recommended"}
          </p>
          <a href="/sainte-adele#contact"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm"
            style={{background:"white", color:"#1a3d2b", fontFamily:"system-ui"}}>
            {lang==="fr"?"Réserver ma place":"Reserve my seat"} →
          </a>
        </div>
      </div>
    </div>
  );
}
