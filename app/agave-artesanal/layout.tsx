import type { Metadata } from "next";
import "./agave.css";

export const metadata: Metadata = {
  title: "Raíz Pura | Business Plan 2026",
  description: "Presentación Ejecutiva - Exportación de Mezcal Artesanal",
};

export default function AgaveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="agave-root">
      {children}
    </div>
  );
}
