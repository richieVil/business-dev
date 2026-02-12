import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Malt Arbitrage - Strategic Dossier - Feb 2026",
  description: "Confidential Strategic Dossier: Fractional Arbitrage in the Mexican Industrial Ingredient Market.",
};

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MaltLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased malt-root`}>
      {children}
    </main>
  );
}
