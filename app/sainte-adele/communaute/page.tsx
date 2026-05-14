"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const NAVFR = [
  { label: "← Retour Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blogue & Nouvelles", href: "/sainte-adele/blog" },
  { label: "Musique", href: "/sainte-adele/musique" },
];
const NAVEN = [
  { label: "← Back to Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blog & News", href: "/sainte-adele/blog" },
  { label: "Music", href: "/sainte-adele/musique" },
];

const MEMBERS = [
  { name: "Marie-Claire Bouchard", service: { fr: "Jardinage & Plantes", en: "Gardening & Plants" }, desc: { fr: "Conseils, dons de plants, aide pour jardins résidentiels.", en: "Advice, plant donations, help with residential gardens." }, color: "#27AE60", icon: "🌱" },
  { name: "Robert Théberge", service: { fr: "Menuiserie & Rénovation", en: "Carpentry & Renovation" }, desc: { fr: "Petits travaux de menuiserie, réparations mineures, bénévole.", en: "Small carpentry work, minor repairs, volunteer basis." }, color: "#E67E22", icon: "🔨" },
  { name: "Sylvie Lemaire", service: { fr: "Cuisine & Traiteur", en: "Cooking & Catering" }, desc: { fr: "Aide pour les dîners communautaires, recettes, formation.", en: "Help with community dinners, recipes, training." }, color: "#C0392B", icon: "🍽️" },
  { name: "Jean-François Morin", service: { fr: "Transport bénévole", en: "Volunteer transportation" }, desc: { fr: "Transport vers l'église ou rendez-vous médicaux pour les aînés.", en: "Transport to church or medical appointments for seniors." }, color: "#2980B9", icon: "🚗" },
  { name: "Carole Vachon", service: { fr: "Couture & Retouches", en: "Sewing & Alterations" }, desc: { fr: "Retouches de vêtements, confection de rideaux, bénévole.", en: "Clothing alterations, curtain making, volunteer basis." }, color: "#8E44AD", icon: "🧵" },
  { name: "Paul Deschênes", service: { fr: "Aide informatique", en: "Computer help" }, desc: { fr: "Aide aux aînés pour téléphone, tablette ou ordinateur.", en: "Help for seniors with phone, tablet or computer." }, color: "#1ABC9C", icon: "💻" },
  { name: "Lise Fontaine", service: { fr: "Garde d'enfants", en: "Childcare" }, desc: { fr: "Garde occasionnelle pendant les activités de l'église.", en: "Occasional childcare during church activities." }, color: "#F1C40F", icon: "👶" },
  { name: "André Blanchard", service: { fr: "Entretien paysager", en: "Landscaping" }, desc: { fr: "Tonte, déneigement, entretien des espaces verts communautaires.", en: "Mowing, snow removal, community green space maintenance." }, color: "#27AE60", icon: "🌿" },
];

export default function CommunautePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name:"", service:"", desc:"", contact:"" });
  const [sent, setSent] = useState(false);

  return (
    <div>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-14 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>
              {lang==="fr"?"Catalogue communautaire":"Community Catalogue"}
            </h1>
            <p className="text-gray-500" style={{fontFamily:"system-ui"}}>
              {lang==="fr"?"Les membres de notre communauté offrent leurs talents":"Our community members sharing their talents"}
            </p>
          </div>
          <button onClick={() => setShowForm(true)}
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold flex-shrink-0 transition-all hover:scale-105"
            style={{background:"#1a3d2b", fontFamily:"system-ui"}}>
            {lang==="fr"?"+ Offrir mon service":"+ Offer my service"}
          </button>
        </div>

        {/* Members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {MEMBERS.map((m, i) => (
            <div key={i} className="card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{background:m.color+"18"}}>
                  {m.icon}
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{m.name}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{color:m.color, fontFamily:"system-ui"}}>{m.service[lang]}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed" style={{fontFamily:"system-ui"}}>{m.desc[lang]}</p>
              <button className="w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80"
                style={{background:m.color+"18", color:m.color, fontFamily:"system-ui"}}>
                {lang==="fr"?"Contacter":"Contact"}
              </button>
            </div>
          ))}
        </div>

        {/* Offer service form */}
        {showForm && !sent && (
          <div className="card p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-5" style={{color:"#1a3d2b"}}>
              {lang==="fr"?"Offrir mon service à la communauté":"Offer my service to the community"}
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
              {[
                { key:"name", label:{fr:"Votre nom",en:"Your name"}, ph:{fr:"Marie Tremblay",en:"Marie Tremblay"} },
                { key:"service", label:{fr:"Service offert",en:"Service offered"}, ph:{fr:"Ex: Jardinage, Transport, Cuisine...",en:"E.g. Gardening, Transport, Cooking..."} },
                { key:"contact", label:{fr:"Courriel ou téléphone",en:"Email or phone"}, ph:{fr:"Pour que les gens vous contactent",en:"So people can reach you"} },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>{f.label[lang]}</label>
                  <input required value={form[f.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({...prev, [f.key]: e.target.value}))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{background:"#f0f4f0", fontFamily:"system-ui"}} placeholder={f.ph[lang]}/>
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b",fontFamily:"system-ui"}}>
                  {lang==="fr"?"Description (optionnel)":"Description (optional)"}
                </label>
                <textarea rows={3} value={form.desc} onChange={e => setForm(p => ({...p, desc:e.target.value}))}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                  style={{background:"#f0f4f0", fontFamily:"system-ui"}}
                  placeholder={lang==="fr"?"Décrivez votre service...":"Describe your service..."}/>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 py-3 rounded-full font-bold text-sm text-white"
                  style={{background:"#1a3d2b", fontFamily:"system-ui"}}>
                  {lang==="fr"?"Envoyer":"Submit"}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-full font-bold text-sm"
                  style={{background:"#f0f4f0", color:"#555", fontFamily:"system-ui"}}>
                  {lang==="fr"?"Annuler":"Cancel"}
                </button>
              </div>
            </form>
          </div>
        )}
        {sent && (
          <div className="card p-10 text-center max-w-xl mx-auto">
            <div className="text-4xl mb-3">🙏</div>
            <h2 className="text-xl font-bold mb-2" style={{color:"#1a3d2b"}}>
              {lang==="fr"?"Merci, "+form.name+"!":"Thank you, "+form.name+"!"}
            </h2>
            <p className="text-gray-500" style={{fontFamily:"system-ui"}}>
              {lang==="fr"?"Votre service sera ajouté au catalogue sous peu.":"Your service will be added to the catalogue shortly."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
