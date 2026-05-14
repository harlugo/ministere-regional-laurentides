"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const SERMONS = [
  { date:"2019-06-16", location:"Arundel United", title:"Living outside the box", preacher:"Rev. Georgia Copland", lang:"EN", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Sermon_2019_06_16_Living_outside_the_box.pdf" },
  { date:"2019-08-18", location:"Harrington Cemetery", title:"Remembering our ancestors", preacher:"Joëlle Leduc", lang:"EN", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/sermon_2019-08-18_harrington-cemetery-service.pdf" },
  { date:"2019-04-19", location:"—", title:"Good Friday sermon 2019", preacher:"Joëlle Leduc", lang:"EN/FR", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Good%20Friday%20sermon%202019.docx" },
  { date:"2019-01-27", location:"Shawbridge / Morin Heights", title:"Spouse of God (John 2:1-11)", preacher:"Cathy Hamilton", lang:"EN", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Spouse%20of%20God%20Sermon.docx" },
  { date:"2019-01-27", location:"Arundel United", title:"Prédication", preacher:"Joëlle Leduc", lang:"FR", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/2019-01-27%20Sermon%20Arundel%20JL.docx" },
  { date:"2018-08-02", location:"Knox-Wesley / Lachute", title:"The Spirit works in us — Confronting racism in the United Church", preacher:"Cathy Hamilton", lang:"EN", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/The%20Spirit%20works%20in%20us%20Confronting%20racism%20in%20the%20United%20Church%20of%20Canada.pdf" },
  { date:"2018-04-08", location:"Knox-Wesley / Lachute", title:"How wonderful it is, how pleasant, for God's people to live together in harmony!", preacher:"Joëlle Leduc", lang:"EN/FR", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Sermon_2018_04_08_B_Easter_2.pdf" },
  { date:"2018-03-31", location:"St-Sauveur", title:"Vigile de Pâques", preacher:"Joëlle Leduc", lang:"FR", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Sermon_vigile_de_P%C3%A2ques.pdf" },
  { date:"2018-01-14", location:"Knox-Wesley / Lachute", title:"Mary Magdalene", preacher:"Cathy Hamilton", lang:"EN", url:"https://irp-cdn.multiscreensite.com/4e8a4e06/files/uploaded/Mary%20Magdalene%20Sermon.docx" },
];

const NAVFR = [
  { label: "← Retour accueil", href: "/lam" },
  { label: "Horaire des cultes", href: "/lam/horaire" },
  { label: "Mariages", href: "/lam/mariages" },
];
const NAVEN = [
  { label: "← Back home", href: "/lam" },
  { label: "Worship schedule", href: "/lam/horaire" },
  { label: "Weddings", href: "/lam/mariages" },
];

export default function SermonsPage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");

  return (
    <div>
      <CrossNav site="lam" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2" style={{color:"#1a3d2b"}}>
          {lang==="fr"?"Sermons & Homélies":"Sermons & Homilies"}
        </h1>
        <p className="text-gray-500 mb-10" style={{fontFamily:"system-ui"}}>
          {lang==="fr"?"Archive des sermons de notre réseau — téléchargement gratuit":"Sermon archive from our network — free download"}
        </p>

        <div className="flex flex-col gap-3">
          {SERMONS.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener"
              className="card p-5 flex items-start gap-4 hover:no-underline group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{background:"#f0f4f0"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3d2b" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm group-hover:text-blue-600 transition-colors" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{s.title}</div>
                <div className="text-xs text-gray-500 mt-1" style={{fontFamily:"system-ui"}}>
                  {s.preacher} · {s.location}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-mono text-gray-400">{s.date}</div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded" style={{background:"#f0f4f0", color:"#555", fontFamily:"system-ui"}}>{s.lang}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
