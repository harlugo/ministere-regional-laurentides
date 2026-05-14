import Link from "next/link";

const WAVES = ["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-8"
      style={{background:"linear-gradient(160deg,#0f2a1a 0%,#1a3d2b 50%,#0d2440 100%)"}}>

      {/* Cross logo */}
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 border border-white/20"
          style={{boxShadow:"0 4px 24px rgba(0,0,0,0.25)"}}>
          <svg width="36" height="36" viewBox="0 0 18 18" fill="none">
            <rect x="7.5" y="1" width="3" height="16" rx="1.5" fill="white"/>
            <rect x="1" y="5.5" width="16" height="3" rx="1.5" fill="white"/>
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Église Unie — Laurentides</h1>
        <p className="text-white/50 text-sm" style={{fontFamily:"system-ui"}}>
          Choisissez votre site / Choose your site
        </p>
        {/* Color strip */}
        <div className="flex gap-1.5 justify-center mt-5">
          {WAVES.map((c,i) => <div key={i} className="h-1.5 w-8 rounded-full" style={{background:c}}/>)}
        </div>
      </div>

      {/* Site cards */}
      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-xl">
        <Link href="/lam" className="flex-1 p-7 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-2xl"
          style={{background:"rgba(255,255,255,0.08)", border:"1.5px solid rgba(255,255,255,0.18)", color:"white", textDecoration:"none"}}>
          <div className="text-3xl mb-3">🌲</div>
          <div className="text-xs uppercase tracking-widest opacity-50 mb-1.5" style={{fontFamily:"system-ui"}}>Réseau régional</div>
          <div className="font-bold text-xl mb-1">LAM — MRL</div>
          <div className="text-xs opacity-50 mb-4" style={{fontFamily:"system-ui"}}>9 paroisses des Laurentides</div>
          <div className="text-xs font-bold" style={{color:"#1ABC9C", fontFamily:"system-ui"}}>Ministère régional des Laurentides →</div>
        </Link>
        <Link href="/sainte-adele" className="flex-1 p-7 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-2xl"
          style={{background:"rgba(255,255,255,0.08)", border:"1.5px solid rgba(255,255,255,0.18)", color:"white", textDecoration:"none"}}>
          <div className="text-3xl mb-3">⛪</div>
          <div className="text-xs uppercase tracking-widest opacity-50 mb-1.5" style={{fontFamily:"system-ui"}}>Paroisse locale</div>
          <div className="font-bold text-xl mb-1">Sainte-Adèle</div>
          <div className="text-xs opacity-50 mb-4" style={{fontFamily:"system-ui"}}>La Chapelle sur le Lac</div>
          <div className="text-xs font-bold" style={{color:"#E67E22", fontFamily:"system-ui"}}>Église Unie de Sainte-Adèle →</div>
        </Link>
      </div>

      <p className="text-white/25 text-xs text-center" style={{fontFamily:"system-ui"}}>
        Église Unie du Canada · United Church of Canada
      </p>
    </main>
  );
}
