"use client";
import { useState } from "react";
import CrossNav from "@/components/CrossNav";

const NAVFR = [
  { label: "← Retour Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blogue & Nouvelles", href: "/sainte-adele/blog" },
  { label: "Nous joindre", href: "/sainte-adele#contact" },
];
const NAVEN = [
  { label: "← Back to Sainte-Adèle", href: "/sainte-adele" },
  { label: "Blog & News", href: "/sainte-adele/blog" },
  { label: "Contact us", href: "/sainte-adele#contact" },
];

const PRODUCTS = [
  {
    id: 1,
    emoji: "👕",
    collection: { fr: "Collection Lumière", en: "Light Collection" },
    name: { fr: "Chandail — Tu es accueilli ici", en: "Sweatshirt — You are welcome here" },
    desc: { fr: "Coupe unisexe en coton lavé premium. Message brodé au dos, logo chapelle devant. XS à 3XL.", en: "Unisex premium washed cotton. Message embroidered on back, chapel logo front. XS to 3XL." },
    price: 52,
    colors: ["#2F4F3E","#DCC9A6","#1a3a5c"],
    colorNames: { fr: ["Forêt","Crème","Marine"], en: ["Forest","Cream","Navy"] },
    tag: { fr: "Populaire", en: "Popular" },
    tagColor: "#E67E22",
    badge: "⭐",
  },
  {
    id: 2,
    emoji: "🧢",
    collection: { fr: "Collection Laurentides", en: "Laurentians Collection" },
    name: { fr: "Casquette — Rosace", en: "Cap — Rose Window" },
    desc: { fr: "100% coton lavé. Broderie 3D rosace. Boucle ajustable en métal. Symbole de lumière et d'unité.", en: "100% washed cotton. 3D rose window embroidery. Metal adjustable buckle. Symbol of light and unity." },
    price: 28,
    colors: ["#2F4F3E","#DCC9A6","#1a3a5c"],
    colorNames: { fr: ["Forêt","Sable","Marine"], en: ["Forest","Sand","Navy"] },
    tag: null,
    tagColor: "",
    badge: "",
  },
  {
    id: 3,
    emoji: "☕",
    collection: { fr: "Collection Lumière", en: "Light Collection" },
    name: { fr: "Tasse — Que la paix t'accompagne", en: "Mug — May peace be with you" },
    desc: { fr: "Céramique de qualité 350ml. Fini moucheté mat. Résistante au lave-vaisselle. Message gravé.", en: "Quality 350ml ceramic. Matte speckled finish. Dishwasher safe. Engraved message." },
    price: 20,
    colors: ["#F2EFE6","#2F4F3E"],
    colorNames: { fr: ["Crème","Forêt"], en: ["Cream","Forest"] },
    tag: { fr: "Cadeau idéal", en: "Perfect gift" },
    tagColor: "#2980B9",
    badge: "🎁",
  },
  {
    id: 4,
    emoji: "🚪",
    collection: { fr: "Collection Laurentides", en: "Laurentians Collection" },
    name: { fr: "Tapis d'entrée — Entre comme tu es", en: "Doormat — Come as you are" },
    desc: { fr: "Fibre de coco naturelle. Anti-dérapant, résistant. 60×90 cm. Intérieur et extérieur abrité.", en: "Natural coconut fiber. Anti-slip, durable. 60×90 cm. Indoor and sheltered outdoor." },
    price: 45,
    colors: ["#C9A96E"],
    colorNames: { fr: ["Naturel"], en: ["Natural"] },
    tag: null,
    tagColor: "",
    badge: "",
  },
  {
    id: 5,
    emoji: "🖱️",
    collection: { fr: "Collection Lumière", en: "Light Collection" },
    name: { fr: "Tapis de souris — Paix. Lumière. Accueil.", en: "Mouse pad — Peace. Light. Welcome." },
    desc: { fr: "Surface polyester lisse. Base antidérapante en caoutchouc. 23×19 cm. Résistant et durable.", en: "Smooth polyester surface. Rubber non-slip base. 23×19 cm. Durable and resistant." },
    price: 18,
    colors: ["#2F4F3E","#F2EFE6"],
    colorNames: { fr: ["Forêt","Crème"], en: ["Forest","Cream"] },
    tag: null,
    tagColor: "",
    badge: "",
  },
  {
    id: 6,
    emoji: "👜",
    collection: { fr: "Collection Laurentides", en: "Laurentians Collection" },
    name: { fr: "Sac fourre-tout — Communauté & Amour", en: "Tote bag — Community & Love" },
    desc: { fr: "100% coton épais. Anses renforcées. Impression écologique. 38×42 cm, anse 70 cm.", en: "100% thick cotton. Reinforced handles. Eco-friendly print. 38×42 cm, 70 cm handles." },
    price: 24,
    colors: ["#F2EFE6","#2F4F3E"],
    colorNames: { fr: ["Crème","Forêt"], en: ["Cream","Forest"] },
    tag: null,
    tagColor: "",
    badge: "",
  },
];

const COLLECTIONS_FR = ["Tout", "Collection Lumière", "Collection Laurentides"];
const COLLECTIONS_EN = ["All", "Light Collection", "Laurentians Collection"];

type CartItem = { id: number; name: string; price: number; color: string; qty: number };

export default function BoutiquePage() {
  const [lang, setLang] = useState<"fr"|"en">("fr");
  const [filter, setFilter] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<Record<number,number>>({});
  const [added, setAdded] = useState<number|null>(null);

  const cols = lang === "fr" ? COLLECTIONS_FR : COLLECTIONS_EN;

  const filtered = filter === 0 ? PRODUCTS : PRODUCTS.filter(p =>
    p.collection[lang] === cols[filter]
  );

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (p: typeof PRODUCTS[0]) => {
    const colorIdx = selectedColors[p.id] ?? 0;
    const colorName = p.colorNames[lang][colorIdx];
    setCart(prev => {
      const ex = prev.find(i => i.id === p.id && i.color === colorName);
      if (ex) return prev.map(i => i.id === p.id && i.color === colorName ? {...i, qty: i.qty+1} : i);
      return [...prev, { id: p.id, name: p.name[lang], price: p.price, color: colorName, qty: 1 }];
    });
    setAdded(p.id);
    setTimeout(() => setAdded(null), 1800);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#faf8f4" }}>
      <CrossNav site="sainte-adele" lang={lang} onToggleLang={() => setLang(l => l==="fr"?"en":"fr")} items={lang==="fr"?NAVFR:NAVEN}/>

      {/* Hero */}
      <div className="py-14 px-6 text-center" style={{ background: "linear-gradient(135deg,#1a3d2b 0%,#2F4F3E 60%,#0d2440 100%)" }}>
        <p className="text-xs font-bold tracking-[0.28em] mb-3 uppercase" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "system-ui" }}>
          {lang === "fr" ? "Église Unie de Sainte-Adèle" : "United Church of Sainte-Adèle"}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {lang === "fr" ? "Boutique communautaire" : "Community Shop"}
        </h1>
        <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed" style={{ fontFamily: "system-ui" }}>
          {lang === "fr"
            ? "Des objets porteurs de sens — pour les membres, les visiteurs, et tous ceux qui cherchent un espace humain et chaleureux."
            : "Meaningful objects — for members, visitors, and everyone seeking a warm and human space."}
        </p>
        {/* Color strip */}
        <div className="flex h-1 max-w-xs mx-auto mt-8 rounded-full overflow-hidden">
          {["#C0392B","#E67E22","#F1C40F","#2980B9","#1ABC9C","#27AE60"].map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">

        {/* Filters + cart button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {cols.map((c, i) => (
              <button key={i} onClick={() => setFilter(i)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  fontFamily: "system-ui",
                  background: filter===i ? "#2F4F3E" : "white",
                  color: filter===i ? "white" : "#555",
                  border: `1.5px solid ${filter===i ? "#2F4F3E" : "rgba(0,0,0,0.1)"}`,
                }}>
                {c}
              </button>
            ))}
          </div>

          {/* Cart button */}
          <button onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 relative"
            style={{ background: "#2F4F3E", color: "white", fontFamily: "system-ui" }}>
            🛒 {lang === "fr" ? "Panier" : "Cart"}
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#E67E22", color: "white" }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const colorIdx = selectedColors[p.id] ?? 0;
            const isAdded = added === p.id;
            return (
              <div key={p.id} className="card flex flex-col overflow-hidden">
                {/* Product illustration area */}
                <div className="flex items-center justify-center relative"
                  style={{ background: `${p.colors[colorIdx]}18`, height: "180px" }}>
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: p.tagColor, color: "white", fontFamily: "system-ui" }}>
                      {p.badge} {p.tag[lang]}
                    </span>
                  )}
                  <span style={{ fontSize: "72px", lineHeight: 1 }}>{p.emoji}</span>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Collection label */}
                  <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "#A48C3A", fontFamily: "system-ui" }}>
                    {p.collection[lang]}
                  </div>

                  {/* Name */}
                  <div className="font-bold text-base leading-snug" style={{ color: "#1a3d2b" }}>
                    {p.name[lang]}
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed flex-1" style={{ fontFamily: "system-ui" }}>
                    {p.desc[lang]}
                  </p>

                  {/* Color selector */}
                  {p.colors.length > 1 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400" style={{ fontFamily: "system-ui" }}>
                        {p.colorNames[lang][colorIdx]}
                      </span>
                      <div className="flex gap-1.5">
                        {p.colors.map((c, ci) => (
                          <button key={ci} onClick={() => setSelectedColors(s => ({...s, [p.id]: ci}))}
                            className="w-5 h-5 rounded-full transition-all hover:scale-110"
                            style={{
                              background: c,
                              border: colorIdx === ci ? "2px solid #1a3d2b" : "2px solid transparent",
                              boxShadow: colorIdx === ci ? "0 0 0 1px #1a3d2b" : "none",
                            }}/>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price + Add to cart */}
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-2xl font-bold" style={{ color: "#2F4F3E", fontFamily: "system-ui" }}>
                      {p.price}$
                    </span>
                    <button onClick={() => addToCart(p)}
                      className="px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
                      style={{
                        background: isAdded ? "#27AE60" : "#2F4F3E",
                        color: "white",
                        fontFamily: "system-ui",
                        transition: "background 0.3s",
                      }}>
                      {isAdded
                        ? (lang === "fr" ? "✓ Ajouté" : "✓ Added")
                        : (lang === "fr" ? "Ajouter" : "Add")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission note */}
        <div className="mt-14 p-8 rounded-2xl text-center" style={{ background: "linear-gradient(135deg,#1a3d2b,#0d2440)" }}>
          <div className="text-2xl mb-3">🌿</div>
          <h3 className="text-xl font-bold text-white mb-2">
            {lang === "fr" ? "Des achats qui font du bien" : "Purchases that make a difference"}
          </h3>
          <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "system-ui" }}>
            {lang === "fr"
              ? "100% des revenus de la boutique soutiennent directement les activités de notre communauté — rénovation, activités jeunesse, aide alimentaire, et concerts."
              : "100% of shop revenue directly supports our community — renovation, youth activities, food assistance, and concerts."}
          </p>
        </div>
      </div>

      {/* Cart sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} onClick={() => setCartOpen(false)}/>
          <div className="relative flex flex-col w-full max-w-sm h-full shadow-2xl" style={{ background: "white" }}>
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="font-bold text-lg" style={{ color: "#1a3d2b" }}>
                🛒 {lang === "fr" ? "Mon panier" : "My cart"}
              </h2>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="text-center text-gray-400 mt-12" style={{ fontFamily: "system-ui" }}>
                  <div className="text-4xl mb-3">🛒</div>
                  {lang === "fr" ? "Votre panier est vide" : "Your cart is empty"}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-3 p-3 rounded-xl" style={{ background: "#f8f8f5" }}>
                      <div className="flex-1">
                        <div className="text-sm font-bold" style={{ color: "#1a3d2b", fontFamily: "system-ui" }}>{item.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "system-ui" }}>{item.color}</div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => setCart(c => c.map(x => x===item && x.qty>1 ? {...x,qty:x.qty-1} : x).filter(x => x.qty>0))}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ background: "#eee", color: "#333" }}>−</button>
                        <span className="text-sm font-bold w-4 text-center" style={{ fontFamily: "system-ui" }}>{item.qty}</span>
                        <button onClick={() => setCart(c => c.map(x => x===item ? {...x,qty:x.qty+1} : x))}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ background: "#eee", color: "#333" }}>+</button>
                        <span className="text-sm font-bold ml-1" style={{ color: "#2F4F3E", fontFamily: "system-ui" }}>{item.price * item.qty}$</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-bold" style={{ fontFamily: "system-ui" }}>{lang === "fr" ? "Total" : "Total"}</span>
                  <span className="text-xl font-bold" style={{ color: "#2F4F3E", fontFamily: "system-ui" }}>{cartTotal}$</span>
                </div>
                <button className="w-full py-3.5 rounded-full font-bold text-white text-sm transition-all hover:scale-105"
                  style={{ background: "#2F4F3E", fontFamily: "system-ui" }}>
                  {lang === "fr" ? "Commander →" : "Checkout →"}
                </button>
                <p className="text-xs text-center text-gray-400 mt-3" style={{ fontFamily: "system-ui" }}>
                  {lang === "fr" ? "Impression à la demande · Livraison 7-10 jours" : "Print on demand · Delivery 7-10 days"}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
