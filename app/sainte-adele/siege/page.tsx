"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const NAVFR = [
  { label: "← Retour Sainte-Adèle", href: "/sainte-adele" },
  { label: "Services", href: "/sainte-adele#services" },
  { label: "Nous joindre", href: "/sainte-adele#contact" },
  { label: "Donner", href: "/sainte-adele#don" },
];
const NAVEN = [
  { label: "← Back to Sainte-Adèle", href: "/sainte-adele" },
  { label: "Services", href: "/sainte-adele#services" },
  { label: "Contact us", href: "/sainte-adele#contact" },
  { label: "Give", href: "/sainte-adele#don" },
];

const LEVELS_FR = [
  { name: "Ami de la Chapelle", price: "150$/an", desc: "1 place. Plaque discrète avec votre prénom.", color: "#2980B9", seats: 1 },
  { name: "Famille de la Chapelle", price: "400$/an", desc: "Banc complet (4 places). Plaque familiale.", color: "#27AE60", seats: 4 },
  { name: "Bienfaiteur", price: "1 000$/an", desc: "Banc + reconnaissance dans le bulletin et sur le site.", color: "#E67E22", seats: 4 },
];
const LEVELS_EN = [
  { name: "Friend of the Chapel", price: "$150/yr", desc: "1 seat. Discreet plaque with your first name.", color: "#2980B9", seats: 1 },
  { name: "Chapel Family", price: "$400/yr", desc: "Full pew (4 seats). Family plaque.", color: "#27AE60", seats: 4 },
  { name: "Benefactor", price: "$1,000/yr", desc: "Pew + recognition in bulletin and on website.", color: "#E67E22", seats: 4 },
];

export default function SiegePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const [form, setForm] = useState({ name: "", email: "", phone: "", level: "", message: "" });
  const [sent, setSent] = useState(false);
  const levels = lang === "fr" ? LEVELS_FR : LEVELS_EN;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-5xl mb-4">🪑</div>
          <h1 className="text-3xl font-bold mb-3" style={{color:"#1a3d2b"}}>
            {lang==="fr"?"Programme Siège du Cœur":"Pew Dedication Program"}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto" style={{fontFamily:"system-ui"}}>
            {lang==="fr"
              ?"Adoptez un banc de notre chapelle et contribuez directement au projet de rénovation. Une façon concrète de laisser votre marque dans notre histoire commune."
              :"Adopt a pew in our chapel and contribute directly to the renovation project. A concrete way to leave your mark in our shared history."}
          </p>
        </div>

        {/* Progress bar */}
        <div className="card p-6 mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
              {lang==="fr"?"Fonds de rénovation":"Renovation fund"}
            </span>
            <span className="text-sm text-gray-500" style={{fontFamily:"system-ui"}}>
              {lang==="fr"?"23 000$ / 60 000$":"$23,000 / $60,000"}
            </span>
          </div>
          <div className="rounded-full h-4" style={{background:"#f0f4f0"}}>
            <div className="h-4 rounded-full flex items-center justify-end pr-2" style={{width:"38%", background:"linear-gradient(90deg,#27AE60,#1ABC9C)"}}>
              <span className="text-white text-xs font-bold">38%</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2" style={{fontFamily:"system-ui"}}>
            {lang==="fr"
              ?"Chaque adoption de siège aide directement à atteindre l'objectif."
              :"Each pew adoption helps directly towards the goal."}
          </p>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {levels.map((l, i) => (
            <div key={i} className="card p-6 text-center cursor-pointer transition-all hover:scale-105"
              onClick={() => setForm(f => ({...f, level: l.name}))}
              style={{borderTop: form.level === l.name ? `3px solid ${l.color}` : "3px solid transparent"}}>
              <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{background:l.color}}>
                <span className="text-white font-bold text-sm">{l.seats}</span>
              </div>
              <div className="font-bold mb-1" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{l.name}</div>
              <div className="text-2xl font-bold mb-2" style={{color:l.color, fontFamily:"system-ui"}}>{l.price}</div>
              <p className="text-xs text-gray-500" style={{fontFamily:"system-ui"}}>{l.desc}</p>
              {form.level === l.name && (
                <div className="mt-3 text-xs font-bold" style={{color:l.color, fontFamily:"system-ui"}}>
                  ✓ {lang==="fr"?"Sélectionné":"Selected"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        {!sent ? (
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6" style={{color:"#1a3d2b"}}>
              {lang==="fr"?"Réserver votre siège":"Reserve your pew"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
                    {lang==="fr"?"Nom complet":"Full name"} *
                  </label>
                  <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{background:"#f0f4f0", border:"1.5px solid transparent", fontFamily:"system-ui"}}
                    placeholder={lang==="fr"?"Votre nom":"Your name"}/>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
                    {lang==="fr"?"Courriel":"Email"} *
                  </label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{background:"#f0f4f0", border:"1.5px solid transparent", fontFamily:"system-ui"}}
                    placeholder="votre@courriel.ca"/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
                    {lang==="fr"?"Téléphone":"Phone"}
                  </label>
                  <input value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{background:"#f0f4f0", fontFamily:"system-ui"}}
                    placeholder="(450) 000-0000"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
                    {lang==="fr"?"Niveau choisi":"Selected level"}
                  </label>
                  <select value={form.level} onChange={e => setForm(f => ({...f, level: e.target.value}))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{background:"#f0f4f0", fontFamily:"system-ui"}}>
                    <option value="">{lang==="fr"?"Choisir un niveau":"Choose a level"}</option>
                    {levels.map((l,i) => <option key={i} value={l.name}>{l.name} — {l.price}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>
                  {lang==="fr"?"Message ou nom pour la plaque":"Message or plaque name"}
                </label>
                <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  rows={3} className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                  style={{background:"#f0f4f0", fontFamily:"system-ui"}}
                  placeholder={lang==="fr"?"Ex: Famille Tremblay, ou en mémoire de...":"E.g. The Tremblay Family, or in memory of..."}/>
              </div>
              <button type="submit"
                className="w-full py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 text-white mt-2"
                style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)", fontFamily:"system-ui"}}>
                {lang==="fr"?"Envoyer ma réservation":"Send my reservation"} →
              </button>
            </form>
          </div>
        ) : (
          <div className="card p-10 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-2xl font-bold mb-3" style={{color:"#1a3d2b"}}>
              {lang==="fr"?"Merci, "+form.name+"!":"Thank you, "+form.name+"!"}
            </h2>
            <p className="text-gray-500 max-w-md mx-auto" style={{fontFamily:"system-ui"}}>
              {lang==="fr"
                ?"Votre demande a été reçue. Stéphane vous contactera sous 48h pour confirmer les détails et le paiement."
                :"Your request has been received. Stéphane will contact you within 48h to confirm details and payment."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
