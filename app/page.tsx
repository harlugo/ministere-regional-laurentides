import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8" style={{background:"linear-gradient(135deg,#0f2a1a,#0d2440)"}}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
          <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
            <rect x="7.5" y="1" width="3" height="16" rx="1" fill="white"/>
            <rect x="1" y="5.5" width="16" height="3" rx="1" fill="white"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Ministère régional des Laurentides</h1>
        <p className="text-white/60 text-sm" style={{fontFamily:"system-ui"}}>Choisissez votre site / Choose your site</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/lam" className="px-8 py-4 rounded-2xl text-center transition-all hover:scale-105" style={{background:"rgba(255,255,255,0.1)", border:"1.5px solid rgba(255,255,255,0.2)", color:"white", fontFamily:"system-ui"}}>
          <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Réseau régional</div>
          <div className="font-bold text-lg">LAM — MRL</div>
          <div className="text-xs opacity-60 mt-1">Ministère régional des Laurentides</div>
        </Link>
        <Link href="/sainte-adele" className="px-8 py-4 rounded-2xl text-center transition-all hover:scale-105" style={{background:"rgba(255,255,255,0.1)", border:"1.5px solid rgba(255,255,255,0.2)", color:"white", fontFamily:"system-ui"}}>
          <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Paroisse locale</div>
          <div className="font-bold text-lg">Sainte-Adèle</div>
          <div className="text-xs opacity-60 mt-1">Église Unie de Sainte-Adèle</div>
        </Link>
      </div>
    </main>
  );
}
