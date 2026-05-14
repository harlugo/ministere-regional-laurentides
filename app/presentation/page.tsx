"use client";
import Image from "next/image";
import Link from "next/link";

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

function WaveBar({ h = 5 }: { h?: number }) {
  return (
    <div className="flex w-full" style={{ height: `${h}px` }}>
      {WAVES.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
      style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontFamily: "system-ui" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
      {children}
    </h2>
  );
}

function Card({ emoji, title, body, color = "#27AE60" }: { emoji: string; title: string; body: string; color?: string }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-2"
      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
          style={{ background: `${color}22` }}>
          {emoji}
        </div>
        <div className="font-bold text-sm text-white leading-tight" style={{ fontFamily: "system-ui" }}>{title}</div>
      </div>
      <p className="text-white/55 text-xs leading-relaxed" style={{ fontFamily: "system-ui" }}>{body}</p>
    </div>
  );
}

function PhaseCard({ number, title, duration, items, color }: {
  number: string; title: string; duration: string; items: string[]; color: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}` }}>
      <div className="px-5 py-4 flex items-center gap-3" style={{ background: `${color}22` }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
          style={{ background: color }}>
          {number}
        </div>
        <div>
          <div className="font-bold text-white text-sm" style={{ fontFamily: "system-ui" }}>{title}</div>
          <div className="text-xs mt-0.5" style={{ color, fontFamily: "system-ui" }}>⏱ {duration}</div>
        </div>
      </div>
      <div className="px-5 py-4 flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-xs text-white/65" style={{ fontFamily: "system-ui" }}>
            <span className="mt-0.5 flex-shrink-0" style={{ color }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareRow({ label, unie, cath }: { label: string; unie: string; cath: string }) {
  return (
    <div className="grid grid-cols-3 gap-2 py-3 border-b border-white/08">
      <div className="text-xs font-bold text-white/50 uppercase tracking-wide" style={{ fontFamily: "system-ui" }}>{label}</div>
      <div className="text-xs text-white/80" style={{ fontFamily: "system-ui" }}>{unie}</div>
      <div className="text-xs text-white/45" style={{ fontFamily: "system-ui" }}>{cath}</div>
    </div>
  );
}

function ProductBadge({ emoji, name, price }: { emoji: string; name: string; price: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="text-3xl">{emoji}</div>
      <div className="text-xs text-white/70 text-center leading-tight" style={{ fontFamily: "system-ui" }}>{name}</div>
      <div className="font-bold text-sm" style={{ color: "#A48C3A", fontFamily: "system-ui" }}>{price}</div>
    </div>
  );
}

export default function PresentationPage() {
  return (
    <div style={{ background: "linear-gradient(175deg,#061208 0%,#0e2218 30%,#0b1e35 100%)", minHeight: "100vh" }}>

      {/* ── COUVERTURE ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Animated rays background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <radialGradient id="p_halo" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="white" stopOpacity="0.10"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="400" cy="240" rx="500" ry="320" fill="url(#p_halo)" className="cross-glow"/>
            <g className="rays-breath" transform="translate(400,165)">
              {Array.from({length:20},(_,i)=>{
                const a=i*18, rad=(a-90)*Math.PI/180;
                const r1=(a>=300||a<=60)?220:280+(i%3===0?40:10);
                return <line key={i}
                  x1={Math.cos(rad)*24} y1={Math.sin(rad)*24}
                  x2={Math.cos(rad)*r1} y2={Math.sin(rad)*r1}
                  stroke="white" strokeWidth={i%5===0?"1.4":i%3===0?"0.8":"0.45"} opacity={i%5===0?"0.9":"0.55"}/>;
              })}
            </g>
            <g className="cross-glow" transform="translate(400,165)">
              <rect x="-6" y="-44" width="12" height="88" rx="3" fill="white" opacity="0.95"/>
              <rect x="-38" y="-13" width="76" height="12" rx="3" fill="white" opacity="0.95"/>
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto" style={{ paddingTop: "220px" }}>
          <div className="fade-up text-xs font-bold tracking-[0.3em] uppercase mb-4 text-white/40" style={{ fontFamily: "system-ui" }}>
            Église Unie du Canada · Transformation numérique
          </div>
          <h1 className="fade-up-2 font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(36px,6vw,68px)", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}>
            Église Unie<br/>
            <span style={{ color: "#A48C3A" }}>de Sainte-Adèle</span>
          </h1>
          <p className="fade-up-3 text-white/60 max-w-xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "system-ui", fontSize: "17px" }}>
            Une vision complète pour rayonner dans les Laurentides, attirer de nouveaux fidèles
            et refléter une communauté vivante, inclusive et ancrée dans son époque.
          </p>
          <div className="fade-up-4 flex justify-center mb-10">
            <WaveBar h={4} />
          </div>
          <p className="text-white/30 text-sm" style={{ fontFamily: "system-ui" }}>
            Présenté par Charles Hugo Couillard · Membre bénévole · Mai 2026
          </p>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-35">
          <div className="w-px h-10 bg-white animate-pulse"/>
          <div className="w-1.5 h-1.5 rounded-full bg-white"/>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTag>La vision</SectionTag>
        <SectionTitle>Pourquoi ce projet?</SectionTitle>
        <p className="text-white/60 max-w-2xl mb-12 leading-relaxed" style={{ fontFamily: "system-ui", fontSize: "16px" }}>
          Notre communauté est vivante. Pourtant, des centaines de personnes qui cherchent exactement
          ce que nous offrons ne savent pas que nous existons. L'objectif n'est pas de créer une
          "marque d'église" — c'est de refléter fidèlement ce qui se vit chaque dimanche.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card emoji="👨‍👩‍👧" title="Attirer de nouveaux fidèles" color="#27AE60"
            body="Familles, jeunes adultes, personnes LGBTQ+ qui cherchent un espace spirituel ouvert, sans dogme et sans jugement."/>
          <Card emoji="📱" title="Rejoindre l'esprit du temps" color="#2980B9"
            body="Site moderne, podcast, blogue, boutique : des outils de connexion humaine, pas de promotion commerciale."/>
          <Card emoji="🏔️" title="Rayonner dans les Laurentides" color="#1ABC9C"
            body="Être trouvable sur Google, visible sur les réseaux sociaux, présent dans la vie quotidienne de la région."/>
          <Card emoji="🔄" title="Autonomie pour le pasteur" color="#E67E22"
            body="Stéphane peut mettre à jour l'horaire, les événements et le blogue sans aide technique."/>
        </div>
      </section>

      <WaveBar h={3}/>

      {/* ── CE QUI A ÉTÉ CONSTRUIT ── */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTag>Ce qui a été construit</SectionTag>
        <SectionTitle>Deux sites complets, une nuit de travail</SectionTitle>
        <p className="text-white/55 mb-12" style={{ fontFamily: "system-ui" }}>
          Deux sites liés, bilingues FR/EN, déployables immédiatement sur Vercel.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* LAM */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(41,128,185,0.12)", border: "1px solid rgba(41,128,185,0.25)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-lam.svg" alt="LAM" width={44} height={44} className="rounded-full"/>
              <div>
                <div className="font-bold text-white text-sm" style={{ fontFamily: "system-ui" }}>Ministère régional des Laurentides</div>
                <div className="text-xs text-white/40" style={{ fontFamily: "system-ui" }}>LAM — MRL · 9 paroisses</div>
              </div>
            </div>
            {["Accueil des 9 paroisses avec logos officiels","Horaire régional + lien Zoom culte en ligne","Page Mariages avec contacts réels de chaque paroisse","Archive sermons téléchargeables"].map((item,i)=>(
              <div key={i} className="flex items-center gap-2 py-1.5 text-xs text-white/60 border-b border-white/06" style={{ fontFamily: "system-ui" }}>
                <span style={{ color: "#2980B9" }}>✓</span>{item}
              </div>
            ))}
          </div>

          {/* Sainte-Adèle */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(39,174,96,0.10)", border: "1px solid rgba(39,174,96,0.22)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-sainte-adele.svg" alt="Ste-Adèle" width={44} height={44} className="rounded-full"/>
              <div>
                <div className="font-bold text-white text-sm" style={{ fontFamily: "system-ui" }}>Église Unie de Sainte-Adèle</div>
                <div className="text-xs text-white/40" style={{ fontFamily: "system-ui" }}>La Chapelle sur le Lac</div>
              </div>
            </div>
            {["Hero illustré : montagne, chapelle, croix animée, lac","Lambert & Musique : chansons, paroles, concerts","Boutique : 8 produits, panier, 100% revenus communauté","Blogue, catalogue communautaire, Siège du Cœur"].map((item,i)=>(
              <div key={i} className="flex items-center gap-2 py-1.5 text-xs text-white/60 border-b border-white/06" style={{ fontFamily: "system-ui" }}>
                <span style={{ color: "#27AE60" }}>✓</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Card emoji="🤖" title="Transcription IA des homélies" color="#8E44AD"
            body="Célébration enregistrée → article de blogue automatique → podcast Spotify."/>
          <Card emoji="💳" title="Dons en ligne Stripe" color="#27AE60"
            body="Don unique ou mensuel récurrent. Reçu automatique. Fonds rénovation dédié."/>
          <Card emoji="🔍" title="SEO optimisé" color="#2980B9"
            body="Google Business Profile, méta-descriptions. Trouvable dans les Laurentides."/>
        </div>
      </section>

      <WaveBar h={3}/>

      {/* ── BOUTIQUE ── */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTag>Boutique communautaire</SectionTag>
        <SectionTitle>Des objets porteurs de sens</SectionTitle>
        <p className="text-white/55 mb-12 max-w-2xl" style={{ fontFamily: "system-ui" }}>
          Pas du "merch d'église". Des pièces que les gens auront envie de porter et de partager.
          100% des revenus soutiennent la communauté : rénovation, jeunesse, aide alimentaire.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <ProductBadge emoji="👕" name={'Chandail\n"Tu es accueilli ici"'} price="52 $"/>
          <ProductBadge emoji="🧢" name="Casquette Rosace" price="28 $"/>
          <ProductBadge emoji="☕" name={'Tasse\n"Que la paix t\'accompagne"'} price="20 $"/>
          <ProductBadge emoji="🚪" name={'Tapis\n"Entre comme tu es"'} price="45 $"/>
          <ProductBadge emoji="🖱️" name="Tapis de souris" price="18 $"/>
          <ProductBadge emoji="👜" name={'Sac\n"Communauté & Amour"'} price="24 $"/>
          <ProductBadge emoji="🎽" name="Rideau Lumière & Paix" price="65 $"/>
          <ProductBadge emoji="🧣" name="Foulard La lumière en nous" price="28 $"/>
        </div>
        <div className="rounded-2xl p-5 text-center"
          style={{ background: "rgba(164,140,58,0.12)", border: "1px solid rgba(164,140,58,0.25)" }}>
          <p className="text-sm font-bold" style={{ color: "#A48C3A", fontFamily: "system-ui" }}>
            Impression à la demande · Zéro inventaire · Zéro risque financier pour la communauté
          </p>
        </div>
      </section>

      <WaveBar h={3}/>

      {/* ── ÉGLISE UNIE ── */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTag>Comprendre l'Église Unie</SectionTag>
        <SectionTitle>Démystifier, expliquer, accueillir</SectionTitle>
        <p className="text-white/55 mb-10 max-w-2xl" style={{ fontFamily: "system-ui" }}>
          Le site inclut une section éducative complète pour briser la barrière d'entrée
          et répondre honnêtement aux préjugés les plus fréquents.
        </p>

        {/* Compare table */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-2 px-5 py-3"
            style={{ background: "#1a3d2b" }}>
            <div className="text-xs font-bold text-white/40 uppercase tracking-wide" style={{ fontFamily: "system-ui" }}></div>
            <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "#1ABC9C", fontFamily: "system-ui" }}>⛪ Église Unie</div>
            <div className="text-xs font-bold text-white/50 uppercase tracking-wide" style={{ fontFamily: "system-ui" }}>✝️ Catholique</div>
          </div>
          <div className="px-5" style={{ background: "rgba(255,255,255,0.04)" }}>
            <CompareRow label="Sacrements" unie="2 : baptême et communion" cath="7 sacrements"/>
            <CompareRow label="Femmes ministres" unie="Oui, depuis les années 1930" cath="Non autorisé"/>
            <CompareRow label="Mariage" unie="Tous les couples légaux" cath="Homme et femme, non divorcés"/>
            <CompareRow label="LGBTQ+" unie="Inclusion totale depuis 1988" cath="Non reconnu doctrinalement"/>
            <CompareRow label="Doute" unie="Accueilli et exploré ensemble" cath="La foi dépasse le doute"/>
            <CompareRow label="Confession" unie="Pas de confession privée" cath="Sacrement obligatoire"/>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ['"C\'est la même chose que catholique"', 'Pas de pape, 2 sacrements, femmes au ministère, LGBTQ+ inclus, pas de confession.'],
            ['"C\'est une église anglophone"', 'L\'Église Unie est francophone au Québec depuis des décennies. Sainte-Adèle en est la preuve.'],
            ['"Il faut être baptisé pour venir"', 'Tout le monde est bienvenu, quelle que soit son histoire, sa foi ou ses doutes.'],
            ['"C\'est une petite secte"', '2e plus grande dénomination chrétienne au Canada. Plus de 2 millions de membres.'],
          ].map(([myth, reality], i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.18)" }}>
              <div className="text-xs font-bold mb-1.5" style={{ color: "#C0392B", fontFamily: "system-ui" }}>✗ {myth}</div>
              <div className="text-xs text-white/60" style={{ fontFamily: "system-ui" }}>✓ {reality}</div>
            </div>
          ))}
        </div>
      </section>

      <WaveBar h={3}/>

      {/* ── PLAN ── */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <SectionTag>Plan de réalisation</SectionTag>
        <SectionTitle>3 phases progressives</SectionTitle>
        <p className="text-white/55 mb-12" style={{ fontFamily: "system-ui" }}>
          Du plus impactant au plus innovant. Chaque phase est indépendante et livrable.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <PhaseCard number="1" title="Impact immédiat" duration="2 à 3 semaines" color="#E67E22"
            items={["Déploiement des deux sites","SEO Google Business Profile","Dons en ligne Stripe","Intégration réseaux sociaux","Boutique à la demande"]}/>
          <PhaseCard number="2" title="Engagement communautaire" duration="1 mois" color="#2980B9"
            items={["Système de gestion Stéphane","Formulaires d'inscription","Page rénovation + fonds","Catalogue communautaire"]}/>
          <PhaseCard number="3" title="Innovation" duration="Progressif" color="#8E44AD"
            items={["Transcription IA → blogue","Podcast homélies Spotify","Campagnes saisonnières","Collaborations Lambert"]}/>
        </div>
      </section>

      {/* ── CONCLUSION ── */}
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg,#1a3d2b,#0d2440)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🙏</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Tu es chez toi ici.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8" style={{ fontFamily: "system-ui", fontSize: "16px" }}>
            Ce projet est offert entièrement bénévolement par Charles Hugo Couillard,
            membre de la communauté de Sainte-Adèle. L'investissement financier pour la
            communauté est minimal. Tout le travail est un don.
          </p>
          <div className="rounded-2xl p-6 mb-8"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <p className="font-bold text-white mb-1" style={{ fontFamily: "system-ui" }}>Prochaine étape</p>
            <p className="text-white/60 text-sm" style={{ fontFamily: "system-ui" }}>
              Autoriser le projet → déploiement Phase 1 dans les 2 prochaines semaines.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/sainte-adele"
              className="px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ background: "white", color: "#1a3d2b", fontFamily: "system-ui" }}>
              Voir le site Sainte-Adèle →
            </Link>
            <Link href="/lam"
              className="px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.10)", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", fontFamily: "system-ui" }}>
              Voir le site LAM-MRL →
            </Link>
          </div>
          <WaveBar h={4}/>
          <p className="text-white/25 text-xs mt-6" style={{ fontFamily: "system-ui" }}>
            Charles Hugo Couillard · boss@mu2.ca · Sainte-Adèle · Mai 2026
          </p>
        </div>
      </section>

    </div>
  );
}
