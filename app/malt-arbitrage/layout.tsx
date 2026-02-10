import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malt Arbitrage - Strategic Dossier - Feb 2026",
  description: "Confidential Strategic Dossier: Fractional Arbitrage in the Mexican Industrial Ingredient Market.",
};

export default function MaltLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
