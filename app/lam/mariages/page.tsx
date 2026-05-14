"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const CONTACTS = [
  { church: "Église Unie Ste-Adèle", name: "Jacques-Henri Honoré", phone: "(450) 512-8007", color: "#2980B9" },
  { church: "Morin Heights United", name: "Lucille Green", phone: "(450) 226-6681", color: "#27AE60" },
  { church: "Shawbridge United", name: "Sandra Trubiano", phone: "(450) 224-5188", color: "#E67E22" },
  { church: "St Mungo's Cushing", name: "Pasteure Kelley Molloy", phone: "(450) 421-3596", color: "#1ABC9C" },
  { church: "Lachute United (Hamford)", name: "Pat Hodge", phone: "(450) 562-8365", color: "#8E44AD" },
  { church: "Knox-Wesley (Grenville)", name: "Jim Hocquard", phone: "(819) 242-4722", color: "#2980B9" },
  { church: "Arundel United", name: "Pasteure Kelley Molloy", phone: "(450) 421-3596", color: "#C0392B" },
  { church: "St Andrew's Avoca", name: "Joanne Arthurs", phone: "(819) 242-6559", color: "#F1C40F" },
  { church: "Harrington United", name: "Pat Downing", phone: "(819) 242-9597", color: "#1ABC9C" },
];

const NAVFR = [
  { label: "← Retour accueil", href: "/lam" },
  { label: "Horaire des cultes", href: "/lam/horaire" },
  { label: "Sermons", href: "/lam/sermons" },
  { label: "Notre équipe", href: "/lam#equipe" },
];
const NAVEN = [
  { label: "← Back home", href: "/lam" },
  { label: "Worship schedule", href: "/lam/horaire" },
  { label: "Sermons", href: "/lam/sermons" },
  { label: "Our team", href: "/lam#equipe" },
];

const FAQ_FR = [
  { q: "Qui peut se marier à l'Église Unie?", a: "Tout le monde. Les mariages sont ouverts aux personnes de toute confession, culture, identité de genre ou orientation sexuelle. Le fait d'être divorcé n'est pas un obstacle — un jugement final de divorce est requis." },
  { q: "Faut-il être membre de l'Église Unie?", a: "Non. Aucune exigence de membership ni de baptême pour célébrer votre union dans l'une de nos paroisses, même pour une cérémonie religieuse." },
  { q: "Qui peut célébrer le mariage?", a: "Un de nos pasteurs peut officier pour une cérémonie chrétienne, ou vous pouvez trouver votre propre célébrant autorisé par le Directeur de l'état civil du Québec." },
  { q: "Comment contacter le ministre pour officier?", a: "Contactez la Pasteure Kelley Molloy au (450) 421-3596 pour toute demande de services d'un ministre du réseau." },
];
const FAQ_EN = [
  { q: "Who can get married in the United Church?", a: "Everyone. Weddings are open to people of all faiths, cultures, gender identities and orientations. Being divorced is not an obstacle — a final divorce judgment is required." },
  { q: "Do you need to be a member?", a: "No. There is no requirement for the couple to be members or baptized to celebrate their union, even for a religious ceremony." },
  { q: "Who can officiate?", a: "One of our ministers can officiate a Christian ceremony, or you may find your own celebrant authorized by Quebec's Directeur de l'état civil." },
  { q: "How do I contact a minister to officiate?", a: "Contact Pastor Kelley Molloy at (450) 421-3596 for any minister service requests." },
];

export default function MariagesPage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const faq = lang === "fr" ? FAQ_FR : FAQ_EN;

  return (
    <div>
      <CrossNav site="lam" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>
          {lang==="fr"?"Mariages & Célébrations":"Weddings & Celebrations"}
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl" style={{fontFamily:"system-ui"}}>
          {lang==="fr"
            ?"Nous célébrons tous les couples légaux avec joie et sans discrimination."
            :"We celebrate all legal couples with joy and without discrimination."}
        </p>

        {/* FAQ */}
        <div className="flex flex-col gap-4 mb-14">
          {faq.map((f, i) => (
            <div key={i} className="card p-6">
              <div className="font-bold mb-2" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{f.q}</div>
              <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui", fontSize:"14px"}}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* Contacts */}
        <h2 className="text-2xl font-bold mb-6" style={{color:"#1a3d2b"}}>
          {lang==="fr"?"Contacts par paroisse":"Contacts by parish"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACTS.map((c, i) => (
            <div key={i} className="card p-5 flex items-start gap-3">
              <div className="w-2 h-full min-h-[40px] rounded-full flex-shrink-0" style={{background:c.color}}/>
              <div>
                <div className="font-bold text-sm" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{c.church}</div>
                <div className="text-sm text-gray-600 mt-0.5" style={{fontFamily:"system-ui"}}>{c.name}</div>
                <a href={`tel:${c.phone.replace(/\D/g,"")}`}
                  className="text-sm font-semibold mt-1 block"
                  style={{color:c.color, fontFamily:"system-ui"}}>{c.phone}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
