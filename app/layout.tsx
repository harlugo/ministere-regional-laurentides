import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Église Unie — Laurentides",
    default: "Ministère régional des Laurentides · Laurentian Area Ministry",
  },
  description: "Le Ministère régional des Laurentides regroupe 9 paroisses de l'Église Unie du Canada dans les Laurentides et l'Argenteuil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
