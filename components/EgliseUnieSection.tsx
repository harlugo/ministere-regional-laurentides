"use client";

interface Props { lang: "fr" | "en"; }

const COMPARE = [
  {
    theme: { fr: "Fondation", en: "Foundation" },
    unie: { fr: "1925 — fusion de 4 dénominations protestantes au Canada", en: "1925 — merger of 4 Protestant denominations in Canada" },
    cath: { fr: "~33 ap. J.-C., centralisée à Rome sous l'autorité du Pape", en: "~33 AD, centralized in Rome under papal authority" },
  },
  {
    theme: { fr: "Autorité & Bible", en: "Authority & Bible" },
    unie: { fr: "Chaque communauté interprète librement la Bible. Pas de dogme unique imposé.", en: "Each community interprets the Bible freely. No single imposed dogma." },
    cath: { fr: "Le magistère (Pape + évêques) est l'autorité officielle d'interprétation.", en: "The magisterium (Pope + bishops) is the official interpretive authority." },
  },
  {
    theme: { fr: "Sacrements", en: "Sacraments" },
    unie: { fr: "2 sacrements : baptême et communion", en: "2 sacraments: baptism and communion" },
    cath: { fr: "7 sacrements : baptême, confirmation, eucharistie, pénitence, onction, ordination, mariage", en: "7 sacraments: baptism, confirmation, eucharist, penance, anointing, ordination, marriage" },
  },
  {
    theme: { fr: "Mariage", en: "Marriage" },
    unie: { fr: "Ouvert à tous les couples légaux — incluant les couples divorcés et de religions différentes", en: "Open to all legal couples — including divorced couples and interfaith couples" },
    cath: { fr: "Réservé à un homme et une femme, non divorcés, tous deux catholiques", en: "Reserved for a man and woman, both Catholic, neither previously divorced" },
  },
  {
    theme: { fr: "Femmes au ministère", en: "Women in ministry" },
    unie: { fr: "Oui, depuis les années 1930. La ministre coordinatrice Kelley Molloy en est l'exemple.", en: "Yes, since the 1930s. Coordinating minister Kelley Molloy is an example." },
    cath: { fr: "Non autorisé par la doctrine officielle", en: "Not permitted under official doctrine" },
  },
  {
    theme: { fr: "Confession / Pénitence", en: "Confession / Penance" },
    unie: { fr: "Pas de confession privée. La réconciliation est personnelle et communautaire.", en: "No private confession. Reconciliation is personal and communal." },
    cath: { fr: "Sacrement obligatoire — confession auriculaire à un prêtre", en: "Mandatory sacrament — auricular confession to a priest" },
  },
  {
    theme: { fr: "Rapport au doute", en: "Relationship with doubt" },
    unie: { fr: "Accueilli et exploré ensemble. « Nous n'avons pas toutes les réponses. »", en: "Welcomed and explored together. \"We don't have all the answers.\"" },
    cath: { fr: "La foi dépasse le doute. La doctrine est ferme et définie.", en: "Faith transcends doubt. Doctrine is firm and defined." },
  },
  {
    theme: { fr: "Justice sociale", en: "Social justice" },
    unie: { fr: "Engagement actif : droits des peuples autochtones, environnement, droits civiques", en: "Active engagement: Indigenous rights, environment, civil rights" },
    cath: { fr: "Engagement social fort, mais positions traditionnelles sur les questions morales", en: "Strong social engagement, but traditional positions on moral issues" },
  },
];

const MYTHS = [
  {
    myth: { fr: "« C'est la même chose que catholique »", en: "\"It's the same as Catholic\"" },
    reality: { fr: "Pas du tout. Pas de Pape, pas de confession, 2 sacrements au lieu de 7, gouvernance locale, clergé marié.", en: "Not at all. No Pope, no confession, 2 sacraments instead of 7, local governance, married clergy." },
  },
  {
    myth: { fr: "« C'est une église anglophone »", en: "\"It's an English church\"" },
    reality: { fr: "L'Église Unie existe en français au Québec depuis des décennies. Sainte-Adèle est une communauté principalement francophone.", en: "The United Church has existed in French in Quebec for decades. Sainte-Adèle is a predominantly francophone community." },
  },
  {
    myth: { fr: "« Il faut être baptisé pour venir »", en: "\"You need to be baptized to attend\"" },
    reality: { fr: "Faux. Tout le monde est bienvenu, quelle que soit son histoire, sa foi ou ses doutes.", en: "False. Everyone is welcome, regardless of their background, faith, or doubts." },
  },
  {
    myth: { fr: "« C'est une petite secte marginale »", en: "\"It's a small marginal sect\"" },
    reality: { fr: "La 2e plus grande dénomination chrétienne au Canada, avec plus de 2 millions de membres et 2 500 congrégations.", en: "The 2nd largest Christian denomination in Canada, with over 2 million members and 2,500 congregations." },
  },
  {
    myth: { fr: "« Ce n'est pas vraiment une église chrétienne »", en: "\"It's not really a Christian church\"" },
    reality: { fr: "La foi en Jésus-Christ est centrale. L'Église Unie explore cette foi avec ouverture, sans dogmatisme imposé.", en: "Faith in Jesus Christ is central. The United Church explores this faith openly, without imposed dogmatism." },
  },
];

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function EgliseUnieSection({ lang }: Props) {
  const t = {
    fr: {
      title: "C'est quoi l'Église Unie?",
      intro: "Fondée en 1925, l'Église Unie du Canada est la plus grande Église protestante au Canada — et l'une des plus progressistes au monde. Une foi ouverte, inclusive, ancrée dans la communauté.",
      historyTitle: "Une histoire canadienne unique",
      history: "Le 10 juin 1925, à Toronto, quatre dénominations protestantes fusionnent pour créer quelque chose de nouveau : une église proprement canadienne, née du pragmatisme et de l'œcuménisme. Les Méthodistes, les Congrégationalistes, les Presbytériens (les deux tiers) et les Églises d'union locale s'unissent pour mieux servir les communautés rurales et urbaines du pays. Cette fusion était révolutionnaire — aucun autre pays n'avait réussi à unir autant de traditions chrétiennes différentes en une seule institution nationale.",
      compareTitle: "Église Unie vs Église Catholique",
      compareSub: "Les grandes différences pour comprendre ce qui nous distingue",
      unieHeader: "Église Unie",
      cathHeader: "Église Catholique",
      mythsTitle: "Les préjugés — réponses claires",
      mythsSub: "Ce qu'on entend souvent… et la réalité",
      inclusiveTitle: "Une communauté réellement inclusive",
      inclusiveBody: "L'Église Unie de Sainte-Adèle accueille tout le monde sans condition — quelle que soit votre orientation sexuelle, votre identité de genre, votre situation familiale, votre foi ou vos doutes. Ce n'est pas un slogan : c'est inscrit dans nos pratiques depuis 1988. Nous croyons que la spiritualité est un chemin personnel, et que la communauté est là pour accompagner — pas pour juger.",
      firstVisitTitle: "C'est votre première fois?",
      firstVisit: [
        "Arrivez à 10h20 — le café est prêt, les gens sont chaleureux",
        "Pas de code vestimentaire — venez comme vous êtes",
        "Pas besoin d'être croyant — le doute est bienvenu ici",
        "Les enfants sont les bienvenus dans la salle commune",
        "Aucune obligation de participer — observez tranquillement",
      ],
    },
    en: {
      title: "What is the United Church?",
      intro: "Founded in 1925, the United Church of Canada is the largest Protestant church in Canada — and one of the most progressive in the world. An open, inclusive faith, rooted in community.",
      historyTitle: "A uniquely Canadian story",
      history: "On June 10, 1925, in Toronto, four Protestant denominations merged to create something new: a distinctly Canadian church, born of pragmatism and ecumenism. Methodists, Congregationalists, Presbyterians (two-thirds), and Local Union Churches united to better serve the country's rural and urban communities. This merger was revolutionary — no other country had succeeded in uniting so many different Christian traditions into a single national institution.",
      compareTitle: "United Church vs Catholic Church",
      compareSub: "The key differences to understand what sets us apart",
      unieHeader: "United Church",
      cathHeader: "Catholic Church",
      mythsTitle: "Common myths — clear answers",
      mythsSub: "What people often say… and the reality",
      inclusiveTitle: "A truly inclusive community",
      inclusiveBody: "The United Church of Sainte-Adèle welcomes everyone unconditionally — regardless of sexual orientation, gender identity, family situation, faith or doubt. This is not a slogan: it has been part of our practice since 1988. We believe that spirituality is a personal journey, and that community is there to support — not to judge.",
      firstVisitTitle: "Is this your first time?",
      firstVisit: [
        "Arrive at 10:20 — coffee is ready, people are warm",
        "No dress code — come as you are",
        "No need to be a believer — doubt is welcome here",
        "Children are welcome in the common room",
        "No obligation to participate — just observe quietly",
      ],
    },
  };
  const tx = t[lang];

  return (
    <div>
      {/* Intro */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-6">
          {WAVES.map((c,i) => <div key={i} className="h-1.5 w-8 rounded-full" style={{background:c}}/>)}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{color:"#1a3d2b"}}>{tx.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto" style={{fontFamily:"system-ui"}}>{tx.intro}</p>
      </section>

      {/* History */}
      <section className="py-16 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-5" style={{color:"#1a3d2b"}}>{tx.historyTitle}</h3>
          <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui", fontSize:"15px"}}>{tx.history}</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              {val:"1925", label:{fr:"Année de fondation",en:"Year founded"}},
              {val:"2M+", label:{fr:"Membres au Canada",en:"Members in Canada"}},
              {val:"2 500+", label:{fr:"Congrégations",en:"Congregations"}},
            ].map((s,i) => (
              <div key={i} className="card p-5">
                <div className="text-3xl font-bold mb-1" style={{color:WAVES[i*2], fontFamily:"system-ui"}}>{s.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide" style={{fontFamily:"system-ui"}}>{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2" style={{color:"#1a3d2b"}}>{tx.compareTitle}</h3>
          <p className="text-gray-500" style={{fontFamily:"system-ui"}}>{tx.compareSub}</p>
        </div>
        <div className="card overflow-hidden">
          <table className="compare-table">
            <thead>
              <tr style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)"}}>
                <th style={{color:"rgba(255,255,255,0.6)", width:"22%"}}></th>
                <th style={{color:"#1ABC9C"}}>⛪ {tx.unieHeader}</th>
                <th style={{color:"rgba(255,255,255,0.8)"}}>✝️ {tx.cathHeader}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i}>
                  <td className="font-semibold text-xs uppercase tracking-wide" style={{color:"#1a3d2b", fontFamily:"system-ui"}}>{row.theme[lang]}</td>
                  <td style={{color:"#1a5c35", fontFamily:"system-ui"}}>{row.unie[lang]}</td>
                  <td style={{color:"#555", fontFamily:"system-ui"}}>{row.cath[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Myths */}
      <section className="py-20 px-6 md:px-12" style={{background:"#f0f4f0"}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2" style={{color:"#1a3d2b"}}>{tx.mythsTitle}</h3>
            <p className="text-gray-500" style={{fontFamily:"system-ui"}}>{tx.mythsSub}</p>
          </div>
          <div className="flex flex-col gap-4">
            {MYTHS.map((m, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5" style={{background:"#C0392B"}}>✗</div>
                  <div className="flex-1">
                    <div className="font-bold mb-1.5" style={{color:"#C0392B", fontFamily:"system-ui", fontSize:"15px"}}>{m.myth[lang]}</div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg leading-none mt-0.5">✓</span>
                      <p className="text-gray-600 leading-relaxed" style={{fontFamily:"system-ui", fontSize:"14px"}}>{m.reality[lang]}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusive */}
      <section className="py-16 px-6 md:px-12" style={{background:"linear-gradient(135deg,#1a3d2b,#0d2440)"}}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{tx.inclusiveTitle}</h3>
            <p className="text-white/70 leading-relaxed" style={{fontFamily:"system-ui", fontSize:"15px"}}>{tx.inclusiveBody}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4" style={{color:"#1ABC9C"}}>{tx.firstVisitTitle}</h4>
            <div className="flex flex-col gap-2.5">
              {tx.firstVisit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:"rgba(26,188,156,0.25)", border:"1px solid rgba(26,188,156,0.5)"}}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/75" style={{fontFamily:"system-ui", fontSize:"14px"}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
