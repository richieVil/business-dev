"use client";

import React from "react";
import DossierEngineV2 from "../components/DossierEngineV2";

export default function EngineV2TestPage() {
  const testSlides = [
    {
      phase: "PRUEBA 01",
      title: "Validación de\nIndexación",
      label: "Test de Conectividad",
      render: () => (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-neutral-800">
            Esta diapositiva demuestra la <strong>indexación automática</strong>. El ID "S01" en la esquina superior derecha y el contador "1 / 3" en el footer no fueron escritos manualmente.
          </p>
          <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
            <div className="text-[10px] font-bold text-red-600 mb-1 uppercase">Dato de Prueba</div>
            <div className="text-xl font-black">Conexión Exitosa</div>
          </div>
        </div>
      )
    },
    {
      phase: "PRUEBA 02",
      title: "Gobernanza\nVertical",
      label: "Test de Flexbox y Sticky Footer",
      render: () => (
        <div className="flex-1 flex flex-col justify-center items-center text-center p-6 border-2 border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50">
          <div className="text-4xl mb-4">⚓</div>
          <p className="text-xs text-neutral-500 max-w-[200px]">
            Incluso con poco contenido, el footer debe permanecer pegado al fondo del viewport gracias a la lógica de <code>margin-top: auto</code>.
          </p>
        </div>
      )
    },
    {
      phase: "PRUEBA 03",
      title: "Lógica de\nContacto Dual",
      label: "Test de Salida de Impresión",
      render: () => (
        <div className="space-y-6">
          <div className="bg-neutral-900 text-white p-5 rounded-2xl">
            <h3 className="text-red-500 font-bold text-xs mb-2 uppercase tracking-widest">Instrucciones de Prueba</h3>
            <p className="text-[11px] leading-snug text-neutral-400 italic">
              "Abre el diálogo de impresión (Ctrl+P). El footer debe cambiar: los links azules de 'WhatsApp' desaparecerán y verás el número de teléfono y el correo en texto plano."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className="p-3 border border-neutral-200 rounded-lg text-center">
                <div className="text-[10px] font-bold text-neutral-400">STATUS</div>
                <div className="text-xs font-black">ENGINE V2.0</div>
             </div>
             <div className="p-3 border border-neutral-200 rounded-lg text-center">
                <div className="text-[10px] font-bold text-neutral-400">STABILITY</div>
                <div className="text-xs font-black text-green-600">VERIFIED</div>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <DossierEngineV2
      slides={testSlides}
      branding={{
        title: "Dossier Engine",
        subtitle: "Technical Validation v2.0",
        version: "STABLE-2026"
      }}
      contact={{
        phone: "+1 234 567 890",
        whatsapp: "https://wa.me/1234567890",
        email: "dev@tech-dossier.io",
        website: "tech-dossier.io"
      }}
      theme={{
        parchment: "#fafafa",
        ink: "#171717",
        accent: "#dc2626", // Rojo vibrante
        muted: "#737373"
      }}
    />
  );
}
