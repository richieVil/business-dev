'use client';

import React from 'react';

export default function AgaveTechnicalDossier() {
  const slides = [
    { id: 'S01', phase: 'FASE I', title: 'Raíz Pura:\nEspíritu Abierto', label: 'Tesis Ejecutiva 2026' },
    { id: 'S02', phase: 'FASE I', title: 'Resumen\nEjecutivo', label: 'Visión e Intención' },
    { id: 'S03', phase: 'FASE I', title: 'El Problema\ndel Mercado', label: 'Industrialización y Aditivos' },
    { id: 'S04', phase: 'FASE II', title: 'Puente Federal\nen EE. UU.', label: 'Foso Regulatorio: TTB/FDA' },
    { id: 'S05', phase: 'FASE II', title: 'Motor de\nExportación', label: 'Foso Regulatorio: NOM/CRT' },
    { id: 'S06', phase: 'FASE II', title: 'Arquitectura\nde 3 Niveles', label: 'Cumplimiento y Distribución' },
    { id: 'S07', phase: 'FASE III', title: 'Perfiles del\nConsumidor', label: 'Objetivo: Autenticidad' },
    { id: 'S08', phase: 'FASE III', title: 'Matriz\nCompetitiva', label: 'Comparativa Brutalista' },
    { id: 'S09', phase: 'FASE III', title: 'Priorización\nEstatal', label: 'CA / NY / TX' },
    { id: 'S10', phase: 'FASE IV', title: 'Portafolio de\nProductos', label: 'SKU 1 vs. SKU 2' },
    { id: 'S11', phase: 'FASE IV', title: 'Diseño\nIndustrial', label: 'Botella Cilíndrica Ergonómica' },
    { id: 'S12', phase: 'FASE IV', title: 'Etiqueta de\nTransparencia', label: 'Especificación de Cromatografía' },
    { id: 'S13', phase: 'FASE IV', title: 'Infraestructura\nde Producción', label: 'Sourcing y Master Blender' },
    { id: 'S14', phase: 'FASE V', title: 'La Ventaja\nde la AB 1246', label: 'Táctica DTC California' },
    { id: 'S15', phase: 'FASE V', title: 'Riesgos de la\nCadena', label: 'Incoterms y Seguro All-Risk' },
    { id: 'S16', phase: 'FASE V', title: 'Inventario y\nLógica de MOQ', label: 'Eficiencia de Capital' },
    { id: 'S17', phase: 'FASE VI', title: 'Modelo de\nCostos Landed', label: 'De EXW a Bodega en EE. UU.' },
    { id: 'S18', phase: 'FASE VI', title: 'Cascada de\nPrecios', label: 'Economía de Canales' },
    { id: 'S19', phase: 'FASE VI', title: 'Tácticas de\nActivación', label: 'Rituales de Venta Diaria' },
    { id: 'S20', phase: 'FASE VI', title: 'Motor de\nVentas (S&M)', label: 'Plan de Activación $100k' },
    { id: 'S21', phase: 'FASE VI', title: 'Arquitectura\nFinanciera', label: 'CAPEX y P&L a 3 Años' },
    { id: 'S22', phase: 'FASE VI', title: 'Flujo y el\nValle de la Muerte', label: 'Visualización de Capital Crítico' },
    { id: 'S23', phase: 'FASE VII', title: 'Hoja de Ruta\na 18 Meses', label: 'Ejecución de Milestones' },
    { id: 'S24', phase: 'FASE VII', title: 'Estrategia\nde Salida', label: 'Precedentes de M&A' },
    { id: 'S25', phase: 'ADDENDUM', title: 'Evolución:\nLa Plataforma', label: 'Agave Launchpad Strategy' },
    { id: 'S26', phase: 'ADDENDUM', title: 'Estandarización:\n"Agave OS"', label: 'Infraestructura Escalable' },
    { id: 'S27', phase: 'ADDENDUM', title: 'Economía de\nPlataforma', label: 'EBITDA vs. Riesgo de Inventario' },
    { id: 'S28', phase: 'ADDENDUM', title: 'Valuación:\nEl Gatekeeper', label: 'The Aggregator Exit' },
  ];

  return (
    <div className="agave-dossier-root antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&family=Inter:wght@400;700;900&family=Roboto+Mono:wght@400;700&display=swap');

        :root {
          --parchment: #F5F2ED;
          --ink: #1A1A1A;
          --terracotta: #BC472B;
          --muted: #8C857D;
        }

        body { margin: 0; background: #333; overflow: hidden; }

        .agave-dossier-root {
          font-family: 'Inter', sans-serif;
          background-color: #333;
          height: 100vh;
        }

        .fixed-header {
          height: 53px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          background-color: var(--ink);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .master-cage {
          margin: 53px auto 0 auto;
          width: 100%;
          max-width: 375px;
          height: calc(100vh - 53px);
          background-color: var(--parchment);
          overflow-y: auto;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .master-cage::-webkit-scrollbar { display: none; }

        .slide {
          min-height: calc(100vh - 53px);
          width: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          box-sizing: border-box;
          position: relative;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          background-color: var(--parchment);
        }

        .phase-tag {
          font-family: 'Roboto Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          color: var(--terracotta);
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .slide-id {
          font-family: 'Roboto Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          position: absolute;
          top: 32px;
          right: 24px;
        }

        .heading-hero {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          line-height: 0.9;
          font-style: italic;
          color: var(--ink);
          margin: 0 0 8px 0;
          white-space: pre-line;
        }

        .label-technical {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted);
          border-left: 2px solid var(--terracotta);
          padding-left: 8px;
          margin-bottom: 16px;
        }

        .skeleton-placeholder {
          flex: 1;
          border: 1px dashed var(--muted);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.02);
        }

        .skeleton-text {
          font-family: 'Roboto Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          text-align: center;
          padding: 20px;
        }

        .footer {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 12px;
        }

        @media print {
          @page { size: 5in 8in; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; }
          .fixed-header { display: none !important; }
          .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; width: 5in !important; max-width: none !important; }
          .slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; padding: 0.5in !important; }
        }
      `}</style>

      <header className="fixed-header">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Raíz Pura</span>
          <span style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>Dossier Técnico v2.0</span>
        </div>
        <button 
          onClick={() => window.print()}
          style={{ background: 'var(--terracotta)', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, cursor: 'pointer' }}
        >
          GENERAR PDF
        </button>
      </header>

      <main className="master-cage">
        {slides.map((slide, index) => (
          <section key={slide.id} className="slide">
            <div className="slide-id">{slide.id}</div>
            <div className="phase-tag">{slide.phase}</div>
            <h2 className="heading-hero">{slide.title}</h2>
            <div className="label-technical">{slide.label}</div>

{/* DYNAMIC CONTENT ENGINE */}
            {slide.id === 'S01' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--ink)', marginBottom: '32px', fontWeight: 500 }}>
                  Disrupción del mercado industrial de agave mediante <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>pureza técnica verificada</span> e infraestructura de venta directa.
                </p>
                <div className="data-card" style={{ background: 'var(--ink)', color: 'white', border: 'none' }}>
                  <div style={{ fontSize: '9px', fontFamily: 'Roboto Mono', color: 'var(--terracotta)', marginBottom: '4px' }}>TESIS CENTRAL</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontStyle: 'italic', lineHeight: '1.1' }}>
                    Transparencia Radical <br/>como foso competitivo.
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <div className="data-card" style={{ marginBottom: 0 }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--muted)' }}>SKU 1 PVP</div>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono' }}>49.99 USD</div>
                    <div style={{ fontSize: '8px', color: 'var(--terracotta)', fontWeight: 700 }}>FUNDAMENTAL</div>
                  </div>
                  <div className="data-card" style={{ marginBottom: 0 }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--muted)' }}>SKU 2 PVP</div>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono' }}>95.00 USD</div>
                    <div style={{ fontSize: '8px', color: 'var(--terracotta)', fontWeight: 700 }}>LO EXCLUSIVO</div>
                  </div>
                </div>
                <div style={{ marginTop: 'auto', padding: '12px', border: '1px solid var(--terracotta)', borderRadius: '8px', textAlign: 'center' }}>
                   <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: 'var(--terracotta)' }}>Lote 001 | Despliegue Q1 2026</span>
                </div>
              </div>
            ) : slide.id === 'S02' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="data-card" style={{ borderLeft: '4px solid var(--ink)', marginBottom: '20px' }}>
                  <p style={{ fontSize: '13px', lineHeight: '1.4', margin: 0 }}>
                    Raíz Pura es una <strong>"Branded House"</strong> diseñada para desplazar marcas de celebridades mediante rigor técnico y <strong>Transparencia Radical.</strong>
                  </p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>ESTRATEGIA DE MERCADO</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ flex: 1, background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '14px', fontWeight: 900 }}>CA</div>
                      <div style={{ fontSize: '9px', color: 'var(--muted)' }}>DTC</div>
                    </div>
                    <div style={{ flex: 1, background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '14px', fontWeight: 900 }}>NY</div>
                      <div style={{ fontSize: '9px', color: 'var(--muted)' }}>Boutique</div>
                    </div>
                    <div style={{ flex: 1, background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '14px', fontWeight: 900 }}>TX</div>
                      <div style={{ fontSize: '9px', color: 'var(--muted)' }}>Volume</div>
                    </div>
                  </div>
                </div>
                <div className="data-card" style={{ background: 'var(--parchment)', borderColor: 'var(--ink)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>CAPITAL</div>
                      <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>250K USD</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>BREAK-EVEN</div>
                      <div style={{ fontSize: '15px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>MES 14</div>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: 'auto', fontSize: '10px', color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center' }}>
                  *Cifras proyectadas basadas en modelo Landed 2026.
                </p>
              </div>
            ) : slide.id === 'S03' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '13px', lineHeight: '1.3', color: 'var(--ink)', marginBottom: '12px' }}>
                    El mercado está saturado de perfiles industriales que priorizan el volumen sobre la integridad.
                  </p>
                  <div className="data-card" style={{ background: '#fff', borderLeftColor: 'var(--terracotta)', padding: '10px', marginBottom: '10px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>EL ESTÁNDAR INDUSTRIAL</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--terracotta)' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 900 }}>Difusores y Autoclaves</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--terracotta)' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 900 }}>Uso de Aditivos (Abocantes)</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--terracotta)' }}></div>
                        <div style={{ fontSize: '11px', fontWeight: 900 }}>Opacidad en el Etiquetado</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '10px', background: 'var(--ink)', borderRadius: '12px', color: 'white' }}>
                    <div style={{ fontSize: '9px', fontFamily: 'Roboto Mono', color: 'var(--terracotta)', marginBottom: '4px' }}>DATOS DE MERCADO</div>
                    <div style={{ fontSize: '11px', fontWeight: 400, fontStyle: 'italic', lineHeight: '1.2' }}>
                      "El 80% de las marcas 'Top 10' utilizan procesos que comprometen la pureza del agave."
                    </div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '12px' }}>
                   <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--muted)', marginBottom: '10px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Consecuencias del Proceso Industrial</div>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                      <div style={{ flex: 1, textAlign: 'center' }}>
                         <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--terracotta)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>-40%</div>
                         <div style={{ fontSize: '9px', fontWeight: 900, marginTop: '4px', lineHeight: 1.1 }}>PÉRDIDA DE <br/>COMPLEJIDAD</div>
                         <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '2px' }}>(Sabor plano)</div>
                      </div>

                      <div style={{ flex: 1, textAlign: 'center' }}>
                         <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--terracotta)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>+15%</div>
                         <div style={{ fontSize: '9px', fontWeight: 900, marginTop: '4px', lineHeight: 1.1 }}>CARGA DE <br/>IMPUREZAS</div>
                         <div style={{ fontSize: '7px', color: 'var(--muted)', marginTop: '2px', textTransform: 'uppercase' }}>Resaca Química</div>
                      </div>
                   </div>
                </div>
              </div>
            ) : slide.id === 'S04' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* 1. Infraestructura de Cumplimiento */}
                <div className="data-card" style={{ padding: '10px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--muted)', marginBottom: '6px' }}>READY-TO-OPERATE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>TTB Basic</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Federal Permit</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>FDA / FSVP</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Food Safety</div>
                    </div>
                  </div>
                </div>

                {/* 2. La Ventaja: CBMA */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '16px', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>VENTAJA ESTRATÉGICA</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontStyle: 'italic', marginBottom: '8px' }}>Optimización Fiscal (CBMA)</div>
                  <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.3', margin: 0 }}>
                    Aprovechamiento de incentivos federales para pequeños productores que inyectan <strong>10.80 USD</strong> adicionales por galón al flujo operativo.
                  </p>
                  <div style={{ marginTop: '12px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: 'white' }}>80% DE AHORRO EN IMPUESTO FEDERAL</span>
                  </div>
                </div>

                {/* 3. El Requerimiento/Riesgo */}
                <div className="data-card" style={{ borderLeft: '4px solid var(--terracotta)', padding: '10px', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px' }}>REQUERIMIENTO CRÍTICO</div>
                  <div style={{ fontSize: '11px', fontWeight: 900 }}>Asignación de Créditos</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '2px 0 0 0', lineHeight: '1.2' }}>
                    Dependencia de la vinculación del productor mexicano en el portal myTTB. Factor clave para la viabilidad del modelo financiero.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S05' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* 1. Blindaje en Origen */}
                <div className="data-card" style={{ padding: '10px', marginBottom: '12px', background: '#fff' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--muted)', marginBottom: '6px' }}>ESTÁNDARES DE IDENTIDAD</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>NOM-006/070</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Cumplimiento Normativo</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>CRT / CRM</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Certificación de Origen</div>
                    </div>
                  </div>
                </div>

                {/* 2. El Nexo Legal: Corresponsalía */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '16px', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>NEXO ESTRATÉGICO</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontStyle: 'italic', marginBottom: '8px' }}>Contrato de Corresponsalía</div>
                  <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.3', margin: 0 }}>
                    Formalización jurídica de la relación entre el <strong>Dueño de Marca</strong> y el <strong>Productor</strong>. Este nexo es el único habilitador legal para la exportación de lotes certificados.
                  </p>
                </div>

                {/* 3. El Valor Ejecutivo: Control de Calidad */}
                <div className="data-card" style={{ borderLeft: '4px solid var(--terracotta)', padding: '10px', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px' }}>VALOR PARA EL STAKEHOLDER</div>
                  <div style={{ fontSize: '11px', fontWeight: 900 }}>Propiedad del "Asset" Líquido</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '2px 0 0 0', lineHeight: '1.2' }}>
                    Garantía de exclusividad sobre perfiles sensoriales y trazabilidad total de lote (Batch Identity), protegiendo el valor de marca a largo plazo.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S06' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* 1. Definición del Modelo */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '13px', lineHeight: '1.3', color: 'var(--ink)', marginBottom: '12px' }}>
                    Implementación de una <strong>Clearing House</strong> para actuar como Distribuidor Estatal (N2), manteniendo las licencias mayoristas requeridas sin ceder el control de la marca.
                  </p>
                  
                  <div className="data-card" style={{ padding: '10px', background: '#fff', borderLeftColor: 'var(--terracotta)' }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--muted)', marginBottom: '8px' }}>VENTAJAS ESTRATÉGICAS VS. TRADICIONAL</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                      
                      {/* Ventaja 1: Dinero */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 900 }}>Estructura de Costos</div>
                          <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Tarifa Plana (Flat Fee) por caja.</div>
                        </div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', textAlign: 'right' }}>
                          NO HAY MARGEN %<br/>(Ahorro del 30%)
                        </div>
                      </div>

                      {/* Ventaja 2: Control */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 900 }}>Control Comercial</div>
                          <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Equipo propio ejecuta la venta.</div>
                        </div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', textAlign: 'right' }}>
                          PROPIEDAD DE<br/>LA RELACIÓN
                        </div>
                      </div>

                      {/* Ventaja 3: Riesgo */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 900 }}>Seguridad de Marca</div>
                          <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Imposible ser "deslistado".</div>
                        </div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', textAlign: 'right' }}>
                          INMUNIDAD AL<br/>BAJO VOLUMEN
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* 2. Diagrama Simplificado */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '16px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>FLUJO OPERATIVO</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 900 }}>RAÍZ PURA</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>Importador (Dueño)</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--terracotta)' }}>→</div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 900 }}>CLEARING HOUSE</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>Licencias N2 (Servicio)</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--terracotta)' }}>→</div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 900 }}>CUENTAS</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>Retail / Bares</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : slide.id === 'S07' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '8px' }}>
                  No competimos por el consumidor masivo. Nos enfocamos en tres arquetipos de alto valor que impulsan la tendencia <strong>"Better-for-you"</strong> y Premium.
                </p>

                {/* Persona A: El Conocedor */}
                <div className="data-card" style={{ padding: '6px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 900 }}>EL CONOCEDOR (Purista)</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)' }}>ALTO MARGEN (SKU 2)</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.25' }}>
                    <strong>Motivación:</strong> Transparencia técnica y rareza del agave.<br/>
                    <strong>Comportamiento:</strong> Escanea el QR, verifica el lote en Tequila Matchmaker y evangeliza la marca.
                  </div>
                </div>

                {/* Persona B: El Mixólogo */}
                <div className="data-card" style={{ padding: '6px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 900 }}>EL MIXÓLOGO (Gatekeeper)</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)' }}>VOLUMEN (SKU 1)</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.25' }}>
                    <strong>Motivación:</strong> Versatilidad en coctelería y narrativa.<br/>
                    <strong>Comportamiento:</strong> Decide qué marca entra en la "Carta de la Casa". Es el validador de credibilidad ante el consumidor final.
                  </div>
                </div>

                {/* Persona C: El Consciente */}
                <div className="data-card" style={{ padding: '6px', background: '#fff', borderLeft: '4px solid #94a3b8', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 900 }}>EL ÉTICO (Clean Label)</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b' }}>LEALTAD / DTC</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.25' }}>
                    <strong>Motivación:</strong> "Sin Aditivos" y Trazabilidad.<br/>
                    <strong>Comportamiento:</strong> Rechaza marcas industriales por salud. Alta disposición a pagar sobreprecio por certificaciones orgánicas.
                  </div>
                </div>

                {/* Dato de Mercado */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '8px 12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--terracotta)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>+18%</div>
                      <div style={{ fontSize: '8px', fontWeight: 700, marginTop: '2px' }}>CAGR (2024-2028)</div>
                   </div>
                   <div style={{ textAlign: 'right', flex: 1, paddingLeft: '16px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 900, color: 'white' }}>CRECIMIENTO DEL NICHO</div>
                      <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '2px' }}>Segmento Super-Premium Agave vs. 4% del mercado general.</div>
                   </div>
                </div>
              </div>
            ) : slide.id === 'S08' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.3', color: 'var(--ink)', marginBottom: '16px' }}>
                  La competencia se divide en dos: <strong>Marcas de Celebridades</strong> (Marketing) y <strong>Marcas Legado</strong> (Volumen). Raíz Pura ocupa el vacío de <strong>Autoridad Técnica</strong>.
                </p>

                {/* Header Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', marginBottom: '8px', textAlign: 'center' }}>
                  <div style={{ padding: '6px', borderBottom: '2px solid #94a3b8' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: '#94a3b8' }}>CELEBRITY</div>
                    <div style={{ fontSize: '7px', color: '#cbd5e1' }}>(Industrial)</div>
                  </div>
                  <div style={{ padding: '6px', borderBottom: '2px solid var(--ink)' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--ink)' }}>LEGADO</div>
                    <div style={{ fontSize: '7px', color: '#64748b' }}>(Premium)</div>
                  </div>
                  <div style={{ padding: '6px', borderBottom: '2px solid var(--terracotta)', background: 'rgba(188, 71, 43, 0.05)' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--terracotta)' }}>RAÍZ PURA</div>
                    <div style={{ fontSize: '7px', color: 'var(--terracotta)' }}>(Técnico)</div>
                  </div>
                </div>

                {/* Row 1: Proceso */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', marginBottom: '6px', fontSize: '9px', textAlign: 'center' }}>
                  <div style={{ border: '1px dashed #cbd5e1', padding: '8px', borderRadius: '4px', color: '#94a3b8' }}>
                    <strong>Difusor</strong><br/>Químico
                  </div>
                  <div style={{ border: '1px solid #94a3b8', padding: '8px', borderRadius: '4px', color: 'var(--ink)' }}>
                    <strong>Autoclave</strong><br/>Mecánico
                  </div>
                  <div style={{ background: 'var(--ink)', padding: '8px', borderRadius: '4px', color: 'white', border: '1px solid var(--terracotta)' }}>
                    <strong>Artesanal</strong><br/>Horno Cónico
                  </div>
                </div>

                {/* Row 2: Aditivos */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', marginBottom: '6px', fontSize: '9px', textAlign: 'center' }}>
                  <div style={{ border: '1px dashed #cbd5e1', padding: '8px', borderRadius: '4px', color: '#94a3b8' }}>
                    <strong>Altos</strong><br/>(Glicerina)
                  </div>
                  <div style={{ border: '1px solid #94a3b8', padding: '8px', borderRadius: '4px', color: 'var(--ink)' }}>
                    <strong>Bajos</strong><br/>(&lt;1%)
                  </div>
                  <div style={{ background: 'var(--ink)', padding: '8px', borderRadius: '4px', color: 'white', border: '1px solid var(--terracotta)' }}>
                    <strong>CERO</strong><br/>Certificado
                  </div>
                </div>

                {/* Row 3: Transparencia */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', marginBottom: '16px', fontSize: '9px', textAlign: 'center' }}>
                  <div style={{ border: '1px dashed #cbd5e1', padding: '8px', borderRadius: '4px', color: '#94a3b8' }}>
                    <strong>Nula</strong><br/>Opaco
                  </div>
                  <div style={{ border: '1px solid #94a3b8', padding: '8px', borderRadius: '4px', color: 'var(--ink)' }}>
                    <strong>Básica</strong><br/>NOM #
                  </div>
                  <div style={{ background: 'var(--ink)', padding: '8px', borderRadius: '4px', color: 'white', border: '1px solid var(--terracotta)' }}>
                    <strong>Radical</strong><br/>QR Lote
                  </div>
                </div>

                {/* Strategic Insight */}
                <div className="data-card" style={{ borderLeft: '4px solid var(--terracotta)', padding: '10px', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px' }}>INSIGHT DE MERCADO</div>
                  <div style={{ fontSize: '11px', fontWeight: 900 }}>La Vulnerabilidad del Gigante</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '2px 0 0 0', lineHeight: '1.2' }}>
                    Las marcas industriales no pueden pivotar hacia la "pureza" sin destruir su estructura de costos. Raíz Pura ataca este flanco expuesto con márgenes protegidos.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S09' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  No dispersamos capital. Ejecutamos una secuencia de entrada en los tres mercados que concentran el <strong>55% del consumo</strong> de agave premium.
                </p>

                {/* State 1: CA */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--ink)' }}>CA</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--muted)' }}>CALIFORNIA (P1)</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>LABORATORIO DE MARGEN</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Venta Directa (DTC) + E-commerce.</div>
                  </div>
                </div>

                {/* State 2: NY */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--ink)' }}>NY</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--muted)' }}>NUEVA YORK (P2)</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--ink)' }}>VALIDACIÓN DE MARCA</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Influencia en Mixología / On-Premise.</div>
                  </div>
                </div>

                {/* State 3: TX */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid #94a3b8', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--ink)' }}>TX</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--muted)' }}>TEXAS (P3)</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: '#64748b' }}>MOTOR DE VOLUMEN</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Cadenas Retail (Off-Premise).</div>
                  </div>
                </div>

                {/* Strategic Logic */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>LÓGICA DE SECUENCIA</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                     <div>
                        <div style={{ fontSize: '8px', color: '#94a3b8' }}>FASE INICIAL (CA)</div>
                        <div style={{ fontSize: '11px', fontWeight: 900, color: 'white' }}>Maximar Flujo</div>
                        <div style={{ fontSize: '8px', color: '#64748b', lineHeight: '1.2' }}>Capturar 100% del MSRP vía web para financiar expansión.</div>
                     </div>
                     <div>
                        <div style={{ fontSize: '8px', color: '#94a3b8' }}>FASE EXPANSIÓN (TX)</div>
                        <div style={{ fontSize: '11px', fontWeight: 900, color: 'white' }}>Escalar Volumen</div>
                        <div style={{ fontSize: '8px', color: '#64748b', lineHeight: '1.2' }}>Entrar a cadenas solo con marca ya validada.</div>
                     </div>
                  </div>
                </div>
              </div>
            ) : slide.id === 'S10' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Evitamos la complejidad operativa con una estrategia de <strong>Dos Puntas</strong>: Un motor de volumen para flujo de caja y un motor de prestigio para valoración.
                </p>

                {/* SKU Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                  
                  {/* SKU 1 */}
                  <div className="data-card" style={{ padding: '10px', background: '#fff', borderTop: '4px solid var(--ink)', marginBottom: 0 }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px' }}>FUNDAMENTO (80% MIX)</div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--ink)', marginBottom: '2px' }}>ESPADÍN</div>
                    <div style={{ fontSize: '18px', fontFamily: 'Roboto Mono', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.05em' }}>49.99 USD</div>
                    
                    <div style={{ marginTop: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '6px' }}>
                      <div style={{ fontSize: '9px', fontWeight: 900 }}>Rol: Velocidad</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', lineHeight: '1.2' }}>Diseñado para el "Speed Rail" y coctelería de alta gama. Rotación rápida.</div>
                    </div>
                  </div>

                  {/* SKU 2 */}
                  <div className="data-card" style={{ padding: '10px', background: '#fff', borderTop: '4px solid var(--terracotta)', marginBottom: 0 }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px' }}>EXCLUSIVO (20% MIX)</div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--terracotta)', marginBottom: '2px' }}>TOBALÁ</div>
                    <div style={{ fontSize: '18px', fontFamily: 'Roboto Mono', fontWeight: 700, color: 'var(--terracotta)', letterSpacing: '-0.05em' }}>95.00 USD</div>
                    
                    <div style={{ marginTop: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '6px' }}>
                      <div style={{ fontSize: '9px', fontWeight: 900 }}>Rol: Margen</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', lineHeight: '1.2' }}>Ediciones limitadas para coleccionistas. Maximiza la utilidad unitaria.</div>
                    </div>
                  </div>

                </div>

                {/* Tabla de Unit Economics Simplificada */}
                <div style={{ marginBottom: '12px', padding: '0 4px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--ink)', paddingBottom: '4px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 900 }}>MÉTRICA</span>
                      <span style={{ fontSize: '9px', fontWeight: 900 }}>SKU 1</span>
                      <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--terracotta)' }}>SKU 2</span>
                   </div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '9px', color: 'var(--muted)' }}>Costo Landed</span>
                      <span style={{ fontSize: '9px', fontFamily: 'Roboto Mono' }}>10.48 USD</span>
                      <span style={{ fontSize: '9px', fontFamily: 'Roboto Mono' }}>14.65 USD</span>
                   </div>
                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '9px', color: 'var(--muted)' }}>Margen Bruto</span>
                      <span style={{ fontSize: '9px', fontFamily: 'Roboto Mono' }}>~58%</span>
                      <span style={{ fontSize: '9px', fontFamily: 'Roboto Mono', fontWeight: 700 }}>~72%</span>
                   </div>
                </div>

                {/* Strategic Insight */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>EFECTO HALO</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.3', margin: 0 }}>
                    El SKU 2 valida el precio. El consumidor ve la botella de <strong>95 USD</strong>, reconoce la calidad, y decide comprar la de <strong>49 USD</strong> sintiendo que obtiene una ganga de lujo.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S11' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Utilizamos una <strong>Plataforma Única</strong> de botella: una herramienta de precisión para el bartender que optimiza la operación y el CapEx.
                </p>

                {/* Contenedor de Imagen + Ventajas */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '12px' }}>
                  <img 
                    src="/agave/hero-bottle.png" 
                    alt="Diseño de Botella Cilíndrica Raíz Pura" 
                    style={{ maxHeight: '180px', objectFit: 'contain', margin: '0 auto' }} 
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                    <div className="data-card" style={{ padding: '8px', marginBottom: 0 }}>
                      <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--terracotta)' }}>ERGONOMÍA</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', lineHeight: '1.2' }}>Diseño para "Speed Rail".</div>
                    </div>
                    <div className="data-card" style={{ padding: '8px', marginBottom: 0 }}>
                      <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--ink)' }}>EFICIENCIA</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', lineHeight: '1.2' }}>Menor costo de flete.</div>
                    </div>
                  </div>
                </div>

                {/* Valor Estratégico */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '10px', color: 'white', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>VALOR ESTRATÉGICO</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.2', maxWidth: '70%' }}>
                        Eliminación de CapEx en moldes propietarios.
                     </div>
                     <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: 900, color: 'white' }}>0 USD</div>
                        <div style={{ fontSize: '7px', color: '#94a3b8' }}>COSTO MOLDE</div>
                     </div>
                  </div>
                </div>
              </div>

            ) : slide.id === 'S12' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Con una plataforma única, la diferenciación se logra a través del <strong>"vestido"</strong>: acabados y etiquetado que comunican dos propuestas de valor distintas.
                </p>

                {/* SKU Differentiation Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', flex: 1, marginBottom: '12px' }}>
                  
                  {/* SKU 1: Fundamento */}
                  <div className="data-card" style={{ padding: '8px', background: '#fff', borderTop: '4px solid var(--ink)', marginBottom: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px' }}>FUNDAMENTO</div>
                    <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--ink)' }}>ESPADÍN</div>
                    <div style={{ flex: 1, margin: '8px 0', overflow: 'hidden', borderRadius: '4px' }}>
                      <img src="/agave/bottle-hero.png" alt="SKU 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                      <strong>Acabado:</strong> Vidrio Claro, Sello Corcho.
                    </div>
                  </div>

                  {/* SKU 2: Exclusivo */}
                  <div className="data-card" style={{ padding: '8px', background: '#fff', borderTop: '4px solid var(--terracotta)', marginBottom: 0, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px' }}>EXCLUSIVO</div>
                    <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--terracotta)' }}>TOBALÁ</div>
                    <div style={{ flex: 1, margin: '8px 0', overflow: 'hidden', borderRadius: '4px' }}>
                       <img src="/agave/hero-bottle.png" alt="SKU 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                     <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                      <strong>Acabado:</strong> Vidrio Ahumado, Sello Lacre.
                    </div>
                  </div>
                </div>

                {/* Strategic Insight */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '10px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>PSICOLOGÍA DE PRECIOS</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.25', margin: 0 }}>
                    Inversión mínima en acabados para atacar los segmentos de <strong>Volumen</strong> y <strong>Prestigio</strong> simultáneamente.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S13' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Operamos con un modelo <strong>"asset-light"</strong>. No invertimos en infraestructura; invertimos en asegurar y controlar el proceso de producción artesanal.
                </p>

                {/* Card 1: Sourcing */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '8px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>SOURCING & VINCULACIÓN</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Alianza con Palenques Certificados</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    Aseguramos el suministro mediante un <strong>Contrato de Corresponsalía</strong> que garantiza la exclusividad de lotes y perfiles sensoriales.
                  </div>
                </div>
                
                {/* Card 2: Quality Control */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>CONTROL DE CALIDAD</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Supervisión por Master Blender</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    Un experto independiente certifica la consistencia de cada lote, asegurando que el perfil de sabor cumpla con nuestros estándares antes de cada pago.
                  </div>
                </div>

                {/* Empty space to push footer down */}
                <div style={{ flex: 1 }}></div>

                {/* Strategic Value */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>VALOR ESTRATÉGICO</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.3', margin: 0 }}>
                    <strong>Escalabilidad sin CAPEX.</strong> Podemos duplicar la producción anual sin invertir en un solo alambique de cobre, apalancando la capacidad instalada de nuestros socios.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S14' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  El 1 de enero de 2026, California desbloquea el canal de mayor margen: <strong>Venta Directa al Consumidor (DTC)</strong>. Nuestra estrategia se apalanca en esta disrupción regulatoria.
                </p>

                {/* Card 1: The Law */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '10px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>EL CATALIZADOR: AB 1246</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Apertura Histórica del Mercado</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    Permite a destilerías artesanales (&lt;150k gal/año) obtener un permiso <strong>"Type 94"</strong> para envíos directos a clientes finales en California vía E-commerce.
                  </div>
                </div>

                {/* Card 2: Margin Impact */}
                <div className="data-card" style={{ padding: '10px', background: 'var(--ink)', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>IMPACTO EN EL MARGEN</div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.2', maxWidth: '60%' }}>
                       Captura del <strong>100% del MSRP</strong>. Eludimos los márgenes del Distribuidor (35%) y Minorista (30%).
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: '24px', fontWeight: 900, color: 'white', fontFamily: 'Roboto Mono', lineHeight: 1 }}>2.5x</div>
                       <div style={{ fontSize: '8px', color: 'var(--terracotta)', fontWeight: 900 }}>MAYOR INGRESO / BOTELLA</div>
                    </div>
                  </div>
                </div>

                {/* Empty space to push footer down */}
                <div style={{ flex: 1 }}></div>

                {/* Strategic Value */}
                <div className="data-card" style={{ borderLeft: '4px solid var(--terracotta)', padding: '10px', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px' }}>VALOR ESTRATÉGICO</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: 0, lineHeight: '1.25' }}>
                    El canal DTC en California actuará como el <strong>motor de flujo de caja (Cash Flow)</strong>, inyectando capital de alta velocidad para financiar la expansión a mercados mayoristas más lentos como Texas.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S15' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '6px' }}>
                  Nuestra logística transfronteriza está diseñada como un sistema de <strong>mitigación proactiva</strong> para proteger el inventario, el activo principal del negocio.
                </p>

                {/* Risk 1: Physical */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '4px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>RIESGO FÍSICO (ROBO/DAÑO)</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Transferencia de Responsabilidad</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    <strong>Protocolo:</strong> Incoterm <strong>FCA</strong> (el productor es responsable en México) y seguro de carga <strong>All-Risk</strong> que cubre el valor de reposición.
                  </div>
                </div>

                {/* Risk 2: Regulatory */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '4px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>RIESGO REGULATORIO (ADUANAS/FDA)</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Prevención de Retenciones</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    <strong>Protocolo:</strong> Auditoría <strong>FSVP</strong> (Verificación de Proveedor Extranjero) previa y agente aduanal especializado en alcohol para evitar demoras.
                  </div>
                </div>

                {/* Risk 3: Quality */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid #94a3b8', marginBottom: '6px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>RIESGO DE CALIDAD (TRÁNSITO)</div>
                   <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Protección del Perfil Sensorial</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    <strong>Protocolo:</strong> Cobertura de seguro para "vicios propios" (daño por temperaturas extremas durante el cruce de desiertos).
                  </div>
                </div>

                {/* Strategic Value */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>VALOR ESTRATÉGICO</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.3', margin: 0 }}>
                    Este sistema de triple blindaje asegura la <strong>continuidad del suministro</strong> y protege el flujo de caja contra los shocks más comunes de la importación.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S16' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  La eficiencia de capital se enfoca en dos cuellos de botella: la compra anticipada de empaque y el ciclo de recuperación de efectivo.
                </p>

                {/* Card 1: MOQ */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '8px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>EL MURO DEL EMPAQUE (MOQ)</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: '1.2', maxWidth: '65%' }}>
                      Proveedores de vidrio premium exigen un Mínimo de Compra (MOQ) que congela capital en inventario no líquido.
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>20,000</div>
                       <div style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: 700 }}>UNIDADES</div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Cash Cycle */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>EL CICLO DE EFECTIVO LENTO</div>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '10px', color: 'var(--muted)', lineHeight: '1.2', maxWidth: '65%' }}>
                      El capital permanece "en tránsito" durante meses, desde el pago al productor hasta el cobro al distribuidor.
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>120 DÍAS</div>
                       <div style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: 700 }}>PROMEDIO</div>
                    </div>
                  </div>
                </div>

                {/* Empty space to push footer down */}
                <div style={{ flex: 1 }}></div>

                {/* Strategic Value */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>IMPACTO EN EL CAPITAL</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.3', margin: 0 }}>
                    Estos dos factores son los principales impulsores del "Valle de la Muerte" financiero y justifican la necesidad de un <strong>Fondo de Reserva Operativa</strong> robusto.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S17' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Análisis del <strong>Costo Landed</strong>: El valor total de la botella puesta en nuestra bodega de EE. UU., incluyendo producción, logística e impuestos.
                </p>

                {/* Tabla de Costos Comparativa */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '12px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                        <th style={{ textAlign: 'left', fontSize: '8px', paddingBottom: '4px' }}>CONCEPTO / BOTELLA</th>
                        <th style={{ textAlign: 'right', fontSize: '8px', paddingBottom: '4px' }}>SKU 1</th>
                        <th style={{ textAlign: 'right', fontSize: '8px', paddingBottom: '4px', color: 'var(--terracotta)' }}>SKU 2</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: '9px', fontFamily: 'Roboto Mono' }}>
                      <tr>
                        <td style={{ padding: '6px 0', borderBottom: '1px solid #f1f5f9' }}>Costo Producción (EXW)</td>
                        <td style={{ textAlign: 'right' }}>8.50 USD</td>
                        <td style={{ textAlign: 'right' }}>12.00 USD</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 0', borderBottom: '1px solid #f1f5f9' }}>Logística y Aduana</td>
                        <td style={{ textAlign: 'right' }}>1.55 USD</td>
                        <td style={{ textAlign: 'right' }}>2.17 USD</td>
                      </tr>
                      <tr style={{ fontWeight: 700 }}>
                        <td style={{ padding: '6px 0', borderBottom: '1px solid #f1f5f9' }}>Impuesto FET (Optimizado)</td>
                        <td style={{ textAlign: 'right' }}>0.43 USD</td>
                        <td style={{ textAlign: 'right' }}>0.48 USD</td>
                      </tr>
                      <tr style={{ fontSize: '11px', fontWeight: 900 }}>
                        <td style={{ padding: '8px 0', color: 'var(--ink)' }}>TOTAL COSTO LANDED</td>
                        <td style={{ textAlign: 'right' }}>10.48 USD</td>
                        <td style={{ textAlign: 'right', color: 'var(--terracotta)' }}>14.65 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Nota sobre FET / CBMA */}
                <div style={{ padding: '10px', background: 'var(--ink)', borderRadius: '12px', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>PROTECCIÓN DEL MARGEN</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '9px', color: '#94a3b8', lineHeight: '1.2' }}>
                      Sin la optimización <strong>CBMA</strong>, el costo por botella subiría <strong>1.70 USD</strong> inmediatamente.
                    </div>
                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 900, color: 'white' }}>-80%</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>TAX BURDEN</div>
                    </div>
                  </div>
                </div>

                {/* Strategic Insight */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '10px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Veredicto Ejecutivo</div>
                  <p style={{ fontSize: '10px', color: 'var(--ink)', margin: 0, lineHeight: '1.3' }}>
                    Nuestra estructura de costos es resiliente. El bajo costo de entrada permite absorber variaciones logísticas sin comprometer el <strong>Margen Bruto proyectado del 60%+.</strong>
                  </p>
                </div>
              </div>
            ) : slide.id === 'S18' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  Estructura de precios diseñada para incentivar la rotación en el canal tradicional mientras maximizamos el margen en el canal digital.
                </p>

                {/* Canal A: Mayorista (Volumen) */}
                <div className="data-card" style={{ padding: '10px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900 }}>DISTRIBUCIÓN (WHOLESALE)</div>
                    <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>~50% MSRP</div>
                  </div>
                  <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ background: 'var(--ink)', width: '50%', height: '100%' }}></div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    <strong>Ingreso Neto Est.:</strong> 25.00 USD (SKU 1) / 47.50 USD (SKU 2).<br/>
                    <strong>Valor:</strong> Acceso a escala nacional y cuentas "A-List".
                  </div>
                </div>

                {/* Canal B: Directo (Margen) */}
                <div className="data-card" style={{ padding: '10px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>DIRECTO (DTC CALIFORNIA)</div>
                    <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono', color: 'var(--terracotta)' }}>100% MSRP</div>
                  </div>
                  <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ background: 'var(--terracotta)', width: '100%', height: '100%' }}></div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    <strong>Ingreso Neto Est.:</strong> 49.99 USD (SKU 1) / 95.00 USD (SKU 2).<br/>
                    <strong>Valor:</strong> Caja inmediata y datos directos del consumidor.
                  </div>
                </div>

                {/* Strategic Metric */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>RENTABILIDAD MEZCLADA (BLENDED)</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                       <div style={{ fontSize: '18px', fontWeight: 900, color: 'white' }}>60% - 66%</div>
                       <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Margen Bruto Objetivo</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right', borderLeft: '1px solid #334155', paddingLeft: '12px' }}>
                       <div style={{ fontSize: '10px', fontWeight: 700, color: 'white' }}>PAYBACK PERÍODO</div>
                       <div style={{ fontSize: '8px', color: '#94a3b8' }}>Recuperación de inversión operativa en Año 2.</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : slide.id === 'S19' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '8px' }}>
                  La venta de spirits premium no es una transacción; es un <strong>asedio relacional</strong>. El éxito depende de la consistencia táctica diaria.
                </p>

                {/* Tactic Card 1: The Grind */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900 }}>BARRIDO DE CUENTAS</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--terracotta)', fontFamily: 'Roboto Mono' }}>DIARIO</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    10 Visitas de prospección / día. El objetivo es identificar al <strong>Beverage Director</strong> y entregar el sample (Lote 001).
                  </div>
                </div>

                {/* Tactic Card 2: Staff Training */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900 }}>STAFF TRAINING</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--ink)', fontFamily: 'Roboto Mono' }}>ALIANZA</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    Entrenamiento técnico a bartenders (4:00 PM). Si el staff no sabe contar la historia del Maestro, el producto no rota.
                  </div>
                </div>

                {/* Tactic Card 3: Bar Takeovers */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid #94a3b8', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900 }}>BAR TAKEOVERS</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: '#64748b', fontFamily: 'Roboto Mono' }}>MOMENTUM</div>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', lineHeight: '1.2' }}>
                    Eventos de una noche con "Batch Exclusives". Crea escasez y valida la marca ante el consumidor final del <strong>nicho conocedor</strong>.
                  </div>
                </div>

                {/* Strategic Value Card */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '10px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>DIFERENCIADOR DE VENTA</div>
                  <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '2px' }}>Lotes Colaborativos</div>
                  <p style={{ fontSize: '9px', color: '#cbd5e1', lineHeight: '1.25', margin: 0 }}>
                    Invitamos a bartenders influyentes a co-seleccionar lotes. No compramos espacio en la barra; los hacemos <strong>dueños de la narrativa</strong>.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S20' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Inversión estratégica de <strong>$100,000 USD</strong> enfocada en la validación de cuenta y educación del "Gatekeeper" (Bartender).
                </p>

                {/* Budget Allocation Table */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '10px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                        <th style={{ textAlign: 'left', paddingBottom: '4px' }}>CONCEPTO</th>
                        <th style={{ textAlign: 'right', paddingBottom: '4px' }}>INVERSIÓN</th>
                        <th style={{ textAlign: 'right', paddingBottom: '4px' }}>%</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontFamily: 'Roboto Mono' }}>
                      <tr>
                        <td style={{ padding: '4px 0' }}>Fuerza de Ventas (BA)</td>
                        <td style={{ textAlign: 'right' }}>45,000</td>
                        <td style={{ textAlign: 'right', color: 'var(--terracotta)' }}>45%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '4px 0' }}>Viáticos y T&E</td>
                        <td style={{ textAlign: 'right' }}>18,000</td>
                        <td style={{ textAlign: 'right' }}>18%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '4px 0' }}>Muestreo (Liquid to Lips)</td>
                        <td style={{ textAlign: 'right' }}>12,000</td>
                        <td style={{ textAlign: 'right' }}>12%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '4px 0' }}>Marketing Digital</td>
                        <td style={{ textAlign: 'right' }}>10,000</td>
                        <td style={{ textAlign: 'right' }}>10%</td>
                      </tr>
                      <tr style={{ fontWeight: 700 }}>
                        <td style={{ padding: '4px 0' }}>Otros (Eventos/POS)</td>
                        <td style={{ textAlign: 'right' }}>15,000</td>
                        <td style={{ textAlign: 'right' }}>15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Conversion Math Card */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>MÉTRICA DE CONVERSIÓN</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 900 }}>2,000</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8', textTransform: 'uppercase' }}>Visitas / Año</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--terracotta)' }}>→</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 900 }}>5%</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8', textTransform: 'uppercase' }}>Tasa Conv.</div>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--terracotta)' }}>→</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--terracotta)' }}>100</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8', textTransform: 'uppercase' }}>Cuentas A-List</div>
                    </div>
                  </div>
                </div>

                {/* Strategic Insight */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '10px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Estrategia de Gira (Rolling Tours)</div>
                  <p style={{ fontSize: '10px', color: 'var(--ink)', margin: 0, lineHeight: '1.3' }}>
                    Optimización de viáticos mediante <strong>giras de 2 semanas</strong> por estado. El objetivo es saturar visualmente el mercado local antes de expandir.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S21' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '12px', lineHeight: '1.2', color: 'var(--ink)', marginBottom: '10px' }}>
                  Inversión en activos intangibles y escalabilidad operativa. El modelo <strong>Asset-Light</strong> permite márgenes superiores al promedio.
                </p>

                {/* Uses of Funds Table */}
                <div className="data-card" style={{ padding: '8px', background: '#fff', borderLeft: '4px solid var(--ink)', marginBottom: '8px' }}>
                  <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Uso de Fondos (Inversión Total)</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                    <tbody style={{ fontFamily: 'Roboto Mono' }}>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '3px 0' }}>CAPEX (Setup & Vidrio)</td>
                        <td style={{ textAlign: 'right' }}>110,000 USD</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '3px 0' }}>OPEX (Marketing & S&M)</td>
                        <td style={{ textAlign: 'right' }}>100,000 USD</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '3px 0' }}>Reserva Operativa / WC</td>
                        <td style={{ textAlign: 'right' }}>40,000 USD</td>
                      </tr>
                      <tr style={{ fontWeight: 700 }}>
                        <td style={{ padding: '3px 0' }}>TOTAL CAPITAL REQ.</td>
                        <td style={{ textAlign: 'right', color: 'var(--terracotta)' }}>250,000 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* P&L Table */}
                <div className="data-card" style={{ padding: '8px', background: 'var(--ink)', color: 'white', marginBottom: '8px' }}>
                  <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--terracotta)', marginBottom: '4px', textTransform: 'uppercase' }}>Proyección a 3 Años (P&L)</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                        <th style={{ textAlign: 'left', paddingBottom: '4px' }}>MÉTRICA</th>
                        <th style={{ textAlign: 'right', paddingBottom: '4px' }}>AÑO 1</th>
                        <th style={{ textAlign: 'right', paddingBottom: '4px' }}>AÑO 2</th>
                        <th style={{ textAlign: 'right', paddingBottom: '4px' }}>AÑO 3</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontFamily: 'Roboto Mono' }}>
                      <tr style={{ borderBottom: '1px solid #1e293b' }}>
                        <td style={{ padding: '4px 0' }}>Ingresos</td>
                        <td style={{ textAlign: 'right' }}>285k</td>
                        <td style={{ textAlign: 'right' }}>740k</td>
                        <td style={{ textAlign: 'right' }}>1.6M</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #1e293b' }}>
                        <td style={{ padding: '4px 0' }}>M. Bruto</td>
                        <td style={{ textAlign: 'right' }}>60%</td>
                        <td style={{ textAlign: 'right' }}>62%</td>
                        <td style={{ textAlign: 'right' }}>66%</td>
                      </tr>
                      <tr style={{ fontWeight: 700 }}>
                        <td style={{ padding: '4px 0', color: 'var(--terracotta)' }}>EBITDA</td>
                        <td style={{ textAlign: 'right' }}>-5%</td>
                        <td style={{ textAlign: 'right', color: '#10b981' }}>+21%</td>
                        <td style={{ textAlign: 'right', color: '#10b981' }}>+33%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Strategic Value */}
                <div style={{ marginTop: 'auto', borderLeft: '3px solid var(--terracotta)', paddingLeft: '10px' }}>
                  <p style={{ fontSize: '9px', color: 'var(--muted)', margin: 0, lineHeight: '1.3' }}>
                    <strong>Escalabilidad:</strong> El punto de equilibrio operativo se alcanza al mes 14. La estructura permite absorber un crecimiento de 3x en ventas con solo un 1.5x de incremento en G&A.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S22' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Visualización del flujo acumulado. El <strong>"Valle de la Muerte"</strong> ocurre cuando el capital está atrapado en inventario antes de la cobranza.
                </p>

                {/* The Valley Visualizer */}
                <div style={{ flex: 1, position: 'relative', borderLeft: '1px dashed var(--muted)', marginLeft: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Month 1: Setup */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-24px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ink)' }}></div>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>M01-M03: SETUP</div>
                    <div style={{ fontSize: '12px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>-46,000 USD</div>
                  </div>

                  {/* Month 7: THE VALLEY */}
                  <div style={{ position: 'relative', background: 'rgba(188, 71, 43, 0.1)', padding: '12px', borderRadius: '8px', border: '1px solid var(--terracotta)', marginLeft: '-10px' }}>
                    <div style={{ position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--terracotta)' }}></div>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>M07: PUNTO CRÍTICO</div>
                    <div style={{ fontSize: '18px', fontFamily: 'Roboto Mono', fontWeight: 900, color: 'var(--ink)', lineHeight: 1 }}>-218,500 USD</div>
                    <div style={{ fontSize: '8px', fontWeight: 700, marginTop: '4px', color: 'var(--terracotta)', textTransform: 'uppercase' }}>Máxima Necesidad de Capital</div>
                  </div>

                  {/* Month 14: Break-even */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-24px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>M14: CASH BREAK-EVEN</div>
                    <div style={{ fontSize: '12px', fontFamily: 'Roboto Mono', color: '#059669' }}>+19,000 USD</div>
                  </div>

                  {/* Month 18: Stability */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-24px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ink)' }}></div>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>M18: RETORNO ACUMULADO</div>
                    <div style={{ fontSize: '14px', fontFamily: 'Roboto Mono', fontWeight: 900, color: 'var(--ink)' }}>+265,000 USD</div>
                  </div>

                </div>

                {/* Requirement Analysis */}
                <div style={{ marginTop: '20px', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>REQUERIMIENTO DE "DRY POWDER"</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                       <div style={{ fontSize: '18px', fontWeight: 900, color: 'white' }}>250K USD</div>
                       <div style={{ fontSize: '8px', color: '#94a3b8', textTransform: 'uppercase' }}>Capital de Inversión</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right', borderLeft: '1px solid #334155', paddingLeft: '12px' }}>
                       <p style={{ fontSize: '9px', color: '#cbd5e1', lineHeight: '1.2', margin: 0 }}>
                        Cubre el valle del <strong>Mes 7</strong> y deja una reserva de <strong>$32k</strong> para contingencias operativas.
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : slide.id === 'S23' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  Cronograma de ejecución táctica. El éxito depende del cumplimiento estricto de los hitos regulatorios y logísticos.
                </p>

                {/* Roadmap Timeline */}
                <div style={{ flex: 1, borderLeft: '2px solid var(--terracotta)', marginLeft: '10px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {/* Q1: Setup */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>Q1 2026: FUNDAMENTOS</div>
                    <div style={{ fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>LLC, TTB Permit, Registro FDA.</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Firma de corresponsalía en Oaxaca y compra de vidrio MOQ.</div>
                  </div>

                  {/* Q2: Product */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>Q2 2026: PRODUCCIÓN</div>
                    <div style={{ fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>Certificación CRT/CRM y COLA.</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Embarque del Lote 001 y activación de fianza aduanera.</div>
                  </div>

                  {/* Q3: Launch */}
                  <div style={{ marginBottom: '12px', background: 'rgba(188, 71, 43, 0.05)', padding: '8px', borderRadius: '4px', marginLeft: '-10px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>Q3 2026: DESPLIEGUE</div>
                    <div style={{ fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>Lanzamiento DTC California (AB 1246).</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Entrada a NY vía Distribuidor Boutique (Top 40 Bares).</div>
                  </div>

                  {/* Q4+: Scale */}
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--terracotta)' }}>Q4 2026 - Q2 2027: ESCALA</div>
                    <div style={{ fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>Entrada a Texas (Off-Premise).</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)' }}>Optimización de recurrencia DTC y expansión a Florida.</div>
                  </div>

                </div>

                {/* Milestone Counter */}
                <div style={{ marginTop: 'auto', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                   <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--terracotta)' }}>14</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>MESES AL BEP</div>
                   </div>
                   <div style={{ textAlign: 'center', borderLeft: '1px solid #334155', paddingLeft: '12px' }}>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: 'white' }}>12K</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>BOTS / AÑO 1</div>
                   </div>
                   <div style={{ textAlign: 'center', borderLeft: '1px solid #334155', paddingLeft: '12px' }}>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: 'white' }}>$250K</div>
                      <div style={{ fontSize: '7px', color: '#94a3b8' }}>CAPITAL TOTAL</div>
                   </div>
                </div>
              </div>
            ) : slide.id === 'S24' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  Nuestra meta no es la perpetuidad operativa, sino la <strong>consolidación de un activo</strong> de alto valor para su adquisición por una multinacional.
                </p>

                {/* Exit Multiples Card */}
                <div className="data-card" style={{ padding: '12px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>MÉTRICAS DE SALIDA (ESTIMADAS)</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>5x - 8x</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px' }}>Múltiplo de Ventas</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--ink)', fontFamily: 'Roboto Mono', lineHeight: 1 }}>$15M+</div>
                      <div style={{ fontSize: '8px', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px' }}>Valoración Obj. (Año 5)</div>
                    </div>
                  </div>
                </div>

                {/* Acquisition Logic */}
                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '16px', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>POR QUÉ SOMOS UN TARGET</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '11px', color: '#cbd5e1', borderLeft: '2px solid var(--terracotta)', paddingLeft: '8px' }}>
                      <strong>DTC Authority:</strong> Propiedad total de los datos del consumidor final.
                    </div>
                    <div style={{ fontSize: '11px', color: '#cbd5e1', borderLeft: '2px solid var(--terracotta)', paddingLeft: '8px' }}>
                      <strong>Technical Purity:</strong> Blindaje contra el movimiento "Additive-Free".
                    </div>
                  </div>
                </div>

                {/* Potential Acquirers */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '10px' }}>
                   <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Posibles Adquirentes</div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6, filter: 'grayscale(100%)' }}>
                      <span style={{ fontSize: '10px', fontWeight: 900 }}>DIAGEO</span>
                      <span style={{ fontSize: '10px', fontWeight: 900 }}>PERNOD RICARD</span>
                      <span style={{ fontSize: '10px', fontWeight: 900 }}>BACARDI</span>
                      <span style={{ fontSize: '10px', fontWeight: 900 }}>CAMPARI</span>
                   </div>
                </div>
              </div>
            ) : slide.id === 'S25' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '12px' }}>
                  Pivot de modelo: de <strong>Productor</strong> a <strong>Infraestructura (IaaS)</strong>. Resolvemos el cuello de botella de entrada al mercado para los 3,000+ palenques de México.
                </p>

                <div className="data-card" style={{ padding: '10px', background: 'var(--ink)', color: 'white', marginBottom: '12px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '8px', fontFamily: 'Roboto Mono' }}>EL VALOR DEL "LAUNCHPAD"</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div style={{ borderRight: '1px solid #334155', paddingRight: '8px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>Bajo CAPEX</div>
                      <div style={{ fontSize: '8px', color: '#94a3b8' }}>Sin inversión en alambiques o tierras.</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900 }}>Multi-Brand</div>
                      <div style={{ fontSize: '8px', color: '#94a3b8' }}>Diversificación del riesgo de marca.</div>
                    </div>
                  </div>
                </div>

                <div className="data-card" style={{ borderLeft: '4px solid var(--terracotta)', padding: '10px', marginTop: 'auto' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px' }}>HIPÓTESIS DE VALOR</div>
                  <div style={{ fontSize: '11px', fontWeight: 900 }}>Escalabilidad Exponencial</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: 0, lineHeight: '1.25' }}>
                    Standardizamos la entrada a EE. UU. (TTB, FDA, Logística) para marcas de terceros, cobrando por <strong>Setup + Fee Mensual + % de Ventas.</strong>
                  </p>
                </div>
              </div>
            ) : slide.id === 'S26' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '10px' }}>
                  Para escalar, convertimos nuestra experiencia operativa en un <strong>Sistema Operativo (OS)</strong> de 4 módulos plug-and-play.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', flex: 1 }}>
                  <div className="data-card" style={{ background: '#fff', borderTop: '3px solid var(--terracotta)', padding: '8px', marginBottom: 0 }}>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>1. COMPLIANCE</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '4px' }}>Permisos TTB/FDA automatizados por marca.</div>
                  </div>
                  <div className="data-card" style={{ background: '#fff', borderTop: '3px solid var(--ink)', padding: '8px', marginBottom: 0 }}>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>2. BRANDING</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '4px' }}>Etiquetado técnico y QR de cromatografía.</div>
                  </div>
                  <div className="data-card" style={{ background: '#fff', borderTop: '3px solid #94a3b8', padding: '8px', marginBottom: 0 }}>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>3. FIELD FORCE</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '4px' }}>Embajadores compartidos (Multi-Brand).</div>
                  </div>
                  <div className="data-card" style={{ background: '#fff', borderTop: '3px solid var(--terracotta)', padding: '8px', marginBottom: 0 }}>
                    <div style={{ fontSize: '9px', fontWeight: 900 }}>4. DTC ENGINE</div>
                    <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '4px' }}>Aggregator Marketplace (Fulfilment en CA).</div>
                  </div>
                </div>

                <div style={{ marginTop: '12px', background: 'var(--ink)', borderRadius: '12px', padding: '12px', color: 'white' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '4px', fontFamily: 'Roboto Mono' }}>REGLA DE ESCALA</div>
                  <p style={{ fontSize: '10px', color: '#cbd5e1', lineHeight: '1.3', margin: 0 }}>
                    Un solo <strong>Category Manager</strong> puede gestionar hasta 8 marcas, eliminando la necesidad de duplicar G&A por cada nuevo SKU.
                  </p>
                </div>
              </div>
            ) : slide.id === 'S27' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  El modelo de plataforma transforma el P&L: pasamos de <strong>Margen Bruto de Bienes</strong> a <strong>Margen Neto de Servicios.</strong>
                </p>

                <div className="data-card" style={{ padding: '0', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                    <thead style={{ background: 'var(--ink)', color: 'white' }}>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>MÉTRICA</th>
                        <th style={{ textAlign: 'right', padding: '8px' }}>MARCA</th>
                        <th style={{ textAlign: 'right', padding: '8px', color: 'var(--terracotta)' }}>PLATAFORMA</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontFamily: 'Roboto Mono' }}>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '8px' }}>Riesgo Inv.</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>ALTO</td>
                        <td style={{ textAlign: 'right', padding: '8px', fontWeight: 700 }}>CERO</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '8px' }}>CAPEX/Setup</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>$150k</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>SaaS-Style</td>
                      </tr>
                      <tr style={{ background: 'rgba(188, 71, 43, 0.05)' }}>
                        <td style={{ padding: '8px', fontWeight: 900 }}>EBITDA %</td>
                        <td style={{ textAlign: 'right', padding: '8px' }}>10-15%</td>
                        <td style={{ textAlign: 'right', padding: '8px', fontWeight: 900, color: 'var(--terracotta)' }}>40-55%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p style={{ marginTop: 'auto', fontSize: '10px', color: 'var(--muted)', fontStyle: 'italic', borderLeft: '2px solid var(--terracotta)', paddingLeft: '8px' }}>
                  Al escalar 10 marcas bajo la misma infraestructura, el margen EBITDA se dispara debido al apalancamiento operativo del personal regulatorio y de ventas.
                </p>
              </div>
            ) : slide.id === 'S28' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.25', color: 'var(--ink)', marginBottom: '16px' }}>
                  El valor de salida (Exit) de un <strong>Aggregator</strong> es sustancialmente mayor que el de una sola marca debido al foso tecnológico y regulatorio.
                </p>

                <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '20px', color: 'white', textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--terracotta)', marginBottom: '10px', fontFamily: 'Roboto Mono' }}>EXIT STRATEGY: THE GATEKEEPER</div>
                  <div style={{ fontSize: '28px', fontWeight: 900, fontFamily: 'Roboto Mono', lineHeight: 1 }}>10x - 15x</div>
                  <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', marginTop: '6px' }}>Múltiplo EBITDA (Plataforma)</div>
                </div>

                <div className="data-card" style={{ padding: '12px', background: '#fff', borderLeft: '4px solid var(--terracotta)', marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 900 }}>El Moat: Velocidad de Mercado</div>
                  <p style={{ fontSize: '10px', color: 'var(--muted)', margin: '4px 0 0 0', lineHeight: '1.25' }}>
                    Una multinacional compra la plataforma para lanzar nuevas marcas en <strong>90 días</strong>, en lugar de los 18 meses tradicionales. Usted posee el "Atajo" hacia el mercado de EE. UU.
                  </p>
                </div>

                <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                   <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--ink)' }}>RAÍZ PURA COLLECTIVE</div>
                   <div style={{ fontSize: '8px', color: 'var(--muted)', textTransform: 'uppercase' }}>Digital-First Spirits Infrastructure</div>
                </div>
              </div>
            ) : (
              <div className="skeleton-placeholder">
                <div className="skeleton-text">
                  [SKELETON_BLOCK_{slide.id}]<br/>
                  Awaiting Technical Data Injection...
                </div>
              </div>
            )}

            <div className="footer">
              <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)' }}>ESTRICTAMENTE CONFIDENCIAL</span>
              <span style={{ fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>
                {String(index + 1).padStart(2, '0')} / {slides.length}
              </span>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
