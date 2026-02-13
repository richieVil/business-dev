'use client';

import React from 'react';
import DossierEngineV2 from '../components/DossierEngineV2';

export default function CbarTechnicalDossier() {
  // THEME CONTROL CENTER (The Template)
  // Changing these 4 values updates the entire dossier automatically.
  const theme = {
    parchment: "#050505", // Deep Black Background
    ink: "#FFFFFF",       // Pure White Text
    accent: "#DC2626",    // Regulatory Red (High Vis)
    muted: "#525252",     // Structural Grey
  };

  const branding = {
    title: "CBAR // PROTOCOL",
    subtitle: "Cross-Border Audit Reconciler",
    version: "REF. 2026.1",
  };

  const contact = {
    phone: "+52 (614) 546-3178",
    whatsapp: "https://wa.me/526145463178",
    email: "audit@cbar.com",
    website: "cbar.audit",
  };

  // TEMPLATE UTILITIES
  // These use the CSS Variables injected by DossierEngineV2
  const cardStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--muted)',
    borderRadius: '6px',
    padding: '16px',
    marginBottom: '12px'
  };

  const labelStyle = {
    fontSize: '9px',
    fontWeight: 700,
    color: 'var(--muted)',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
    letterSpacing: '0.05em'
  };

  const monoStyle = {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '11px',
    color: 'var(--ink)',
    opacity: 0.8
  };

  const slides = [
    // --- PHASE I: IDENTITY ---
    {
      phase: 'FASE I',
      title: 'CBAR Protocol:\nGuardia Regulatoria',
      label: 'Tesis Ejecutiva 2026',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '32px', color: 'var(--ink)', opacity: 0.9 }}>
            Despliegue de una <span style={{ borderBottom: '2px solid var(--accent)', fontWeight: 700 }}>Infraestructura de Cumplimiento Asset-Light</span> diseñada para eliminar el riesgo de multas aduaneras.
          </p>
          <div style={{ ...cardStyle, borderLeft: '4px solid var(--accent)' }}>
             <div style={{ color: 'var(--accent)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '8px' }}>TESIS CENTRAL</div>
             <div style={{ fontSize: '20px', fontWeight: 900, fontStyle: 'italic', lineHeight: '1', color: 'var(--ink)' }}>
               La Auditoría Automatizada<br/>como Servicio.
             </div>
          </div>
          <div style={{ marginTop: 'auto', padding: '16px', border: '1px solid var(--muted)', borderRadius: '8px', textAlign: 'center' }}>
             <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.2em' }}>Lanzamiento Q3 2026</span>
          </div>
        </div>
      )
    },
    {
      phase: 'FASE I',
      title: 'Resumen\nEjecutivo',
      label: 'Visión e Intención',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ ...cardStyle, borderLeft: '4px solid var(--ink)', marginBottom: '24px' }}>
            <p style={{ fontSize: '12px', lineHeight: '1.5', margin: 0, color: 'var(--ink)', opacity: 0.8 }}>
              CBAR es un "Guardia Digital" que realiza una <strong style={{ color: 'var(--ink)', opacity: 1 }}>reconciliación de 3 vías</strong> entre documentos legales, fiscales y logísticos.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
             <div style={cardStyle}>
                <div style={labelStyle}>CAPITAL REQ</div>
                <div style={{ fontSize: '18px', fontFamily: 'Roboto Mono', fontWeight: 700, color: 'var(--ink)' }}>$2,000 USD</div>
             </div>
             <div style={cardStyle}>
                <div style={labelStyle}>BREAK-EVEN</div>
                <div style={{ fontSize: '18px', fontFamily: 'Roboto Mono', fontWeight: 700, color: 'var(--ink)' }}>CLIENTE #1</div>
             </div>
          </div>

          <div style={{ marginTop: 'auto', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
             <div style={{ fontSize: '11px', fontStyle: 'italic', color: 'var(--muted)' }}>
                "Deloitte-Quality Governance at a Software Price."
             </div>
          </div>
        </div>
      )
    },
    {
      phase: 'FASE I',
      title: 'El Problema\nde $50k USD',
      label: 'Riesgo de Discrepancia',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '24px' }}>
              <div style={{ fontSize: '56px', fontWeight: 900, color: 'var(--ink)', lineHeight: '1' }}>20%</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>Tasa de Error Humano</div>
           </div>

           <div style={cardStyle}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px' }}>El Costo del Error</div>
              <ul style={{ ...monoStyle, listStyle: 'disc', paddingLeft: '16px', margin: 0 }}>
                 <li style={{ marginBottom: '8px' }}>Multas del <span style={{ fontWeight: 700, color: 'var(--ink)' }}>70% al 100%</span> del valor.</li>
                 <li style={{ marginBottom: '8px' }}>Suspensión del Padrón.</li>
                 <li>Pérdida de Certificación IVA/IEPS.</li>
              </ul>
           </div>
           
           <div style={{ marginTop: 'auto', fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>
              *Fuente: Auditorías de Comercio Exterior SAT 2024.
           </div>
        </div>
      )
    },

    // --- PHASE II: THE ENGINE ---
    {
      phase: 'FASE II',
      title: 'Mecanismo de\n3 Vías',
      label: 'Factura vs. BoL vs. Pedimento',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={{ position: 'relative', padding: '16px 0' }}>
              {/* Vertical Line */}
              <div style={{ position: 'absolute', left: '19px', top: 0, bottom: 0, width: '2px', background: 'var(--muted)', opacity: 0.3, zIndex: 0 }}></div>
              
              {[
                { label: 'D1', title: 'Factura Comercial', sub: 'Input: Ventas', color: 'var(--ink)' },
                { label: 'D2', title: 'Bill of Lading', sub: 'Input: Logística', color: 'var(--ink)' },
                { label: 'D3', title: 'Pedimento (V1)', sub: 'Input: Broker', color: 'var(--accent)' }
              ].map((item, i) => (
                <div key={i} style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--parchment)', border: `2px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>
                      {item.label}
                   </div>
                   <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>{item.title}</div>
                      <div style={{ fontSize: '9px', color: 'var(--muted)' }}>{item.sub}</div>
                   </div>
                </div>
              ))}
           </div>
           <div style={{ marginTop: 'auto', padding: '12px', border: '1px solid var(--accent)', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.1)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent)', textAlign: 'center', letterSpacing: '0.05em' }}>
                 ALERTA AUTOMÁTICA SI D1 ≠ D2 ≠ D3
              </div>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE II',
      title: 'Foso Regulatorio\n(The Moat)',
      label: 'Defensa de Auditoría SAT',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={cardStyle}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', textTransform: 'uppercase' }}>Foso 1: El Ledger Histórico</div>
              <div style={monoStyle}>
                 Poseemos la "Carpeta de Defensa". Si el cliente cancela, pierde su prueba organizada de cumplimiento para la auditoría de 5 años del SAT.
              </div>
           </div>
           <div style={{ padding: '16px', border: '1px solid var(--muted)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Switching Cost</div>
              <div style={{ fontSize: '11px', color: 'var(--ink)', lineHeight: '1.5' }}>
                 Re-certificar 5 años de Pedimentos con otro proveedor costaría miles de horas hombre.
              </div>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE II',
      title: 'Lógica Técnica\nHS-Code',
      label: 'Tribal Knowledge AI',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
           <div style={{ fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic' }}>
              "La IA genérica lee texto. CBAR entiende Ingeniería Industrial."
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={cardStyle}>
                 <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>GENERIC OCR</div>
                 <div style={monoStyle}>
                    Lee "1000" y "KGS".<br/>
                    No detecta error.
                 </div>
              </div>
              <div style={{ ...cardStyle, borderColor: 'var(--ink)' }}>
                 <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>CBAR LOGIC</div>
                 <div style={monoStyle}>
                    Sabe que <span style={{ color: 'var(--accent)' }}>HS-8542</span> se mide en PIEZAS, no KILOS.
                 </div>
              </div>
           </div>
           <div style={{ marginTop: 'auto', fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)', textAlign: 'center' }}>
              Tribal Knowledge injertado en Código.
           </div>
        </div>
      )
    },
    {
      phase: 'FASE II',
      title: 'Estándar\nAudit-Ready',
      label: 'Certificación Mensual',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ border: '4px solid var(--ink)', padding: '24px', borderRadius: '8px', textAlign: 'center', opacity: 0.5, transform: 'rotate(-12deg)' }}>
                 <div style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: 'var(--ink)' }}>Audit<br/>Ready</div>
                 <div style={{ fontSize: '10px', fontFamily: 'Roboto Mono', marginTop: '8px', color: 'var(--ink)' }}>CERTIFIED</div>
              </div>
           </div>
           <div style={cardStyle}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>EL ENTREGABLE</div>
              <div style={monoStyle}>
                 El día 1 de cada mes, el cliente recibe un Certificado de "0 Discrepancias Abiertas". Este documento se archiva para Contraloría.
              </div>
           </div>
        </div>
      )
    },

    // --- PHASE III: MARKET ---
    {
      phase: 'FASE III',
      title: 'Perfil del\nCliente',
      label: 'Avatar: The Fearful CFO',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '16px', paddingTop: '8px', paddingBottom: '8px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}>The Fearful CFO</div>
              <div style={{ fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>US-Based | Private Equity Owned</div>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={cardStyle}>
                 <div style={labelStyle}>DOLOR (PAIN)</div>
                 <div style={monoStyle}>No confía en los reportes manuales de México. Teme una multa sorpresa que arruine el EBITDA.</div>
              </div>
              <div style={cardStyle}>
                 <div style={labelStyle}>OBJETIVO (GOAL)</div>
                 <div style={monoStyle}>"Compliance Peace of Mind". Quiere dormir tranquilo sabiendo que el SAT no tocará la puerta.</div>
              </div>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE III',
      title: 'Matriz\nCompetitiva',
      label: 'Excel vs. Big 4 vs. CBAR',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           {/* Header */}
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center', borderBottom: '1px solid var(--muted)', paddingBottom: '8px' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--muted)' }}>MANUAL</div>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--muted)' }}>BIG 4</div>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ink)' }}>CBAR</div>
           </div>
           
           {/* Row 1 */}
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Excel</div>
              <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Deloitte</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>AI Engine</div>
           </div>

           {/* Row 2 */}
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: 'var(--accent)' }}>Error Prone</div>
              <div style={{ fontSize: '10px', color: 'var(--ink)' }}>High Quality</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>High Quality</div>
           </div>

           {/* Row 3 */}
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: 'var(--ink)' }}>$ Salary</div>
              <div style={{ fontSize: '10px', color: 'var(--accent)' }}>$$$$ Retainer</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#22c55e' }}>$$ SaaS</div>
           </div>

           <div style={{ marginTop: '16px', fontSize: '10px', color: 'var(--muted)', textAlign: 'center', fontStyle: 'italic' }}>
              "Calidad de Big 4 a precio de Software."
           </div>
        </div>
      )
    },
    {
      phase: 'FASE III',
      title: 'Priorización\nGeográfica',
      label: 'Corredor El Paso - Juárez',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={{ flex: 1, background: '#111', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--muted)' }}>
              {/* Abstract Map */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '200px', height: '150px' }}>
                 <div style={{ position: 'absolute', top: '20%', left: '20%', width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                 <div style={{ position: 'absolute', top: '25%', left: '25%', fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>EL PASO</div>
                 
                 <div style={{ position: 'absolute', top: '40%', left: '30%', width: '8px', height: '8px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                 <div style={{ position: 'absolute', top: '45%', left: '35%', fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>CD. JUÁREZ</div>
                 
                 <div style={{ position: 'absolute', top: '70%', left: '40%', width: '8px', height: '8px', background: 'var(--ink)', borderRadius: '50%' }}></div>
                 <div style={{ position: 'absolute', top: '75%', left: '45%', fontSize: '9px', color: 'var(--ink)', fontWeight: 700 }}>CHIHUAHUA</div>
                 
                 <div style={{ position: 'absolute', top: '30%', left: '25%', width: '80px', height: '40px', borderLeft: '2px dashed var(--muted)' }}></div>
              </div>
           </div>
           <div style={{ ...cardStyle, marginTop: '16px' }}>
              <div style={labelStyle}>Corredor Estratégico</div>
              <div style={monoStyle}>
                 La mayor concentración de Maquilas Aeroespaciales y Automotrices de Norteamérica. Un ecosistema cerrado con los mismos 10 Agentes Aduanales.
              </div>
           </div>
        </div>
      )
    },

    // --- PHASE IV: PRODUCT & OPS ---
    {
      phase: 'FASE IV',
      title: 'Interfaz de\nControl',
      label: 'Dashboard de Excepciones',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ background: '#111', border: '1px solid var(--muted)', borderRadius: '6px', padding: '16px', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Mock UI */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                 <div style={{ width: '64px', height: '8px', background: 'var(--muted)', borderRadius: '4px' }}></div>
                 <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                 </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                 <div style={{ height: '16px', background: '#222', borderRadius: '4px', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}><div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></div></div>
                 <div style={{ height: '16px', background: 'rgba(220, 38, 38, 0.2)', border: '1px solid rgba(220, 38, 38, 0.3)', borderRadius: '4px', width: '100%', display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '6px', color: 'var(--accent)', fontFamily: 'Roboto Mono' }}>MISMATCH HS-CODE</span>
                    </div>
                 </div>
                 <div style={{ height: '16px', background: '#222', borderRadius: '4px', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}><div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></div></div>
              </div>
           </div>
           <div style={{ ...monoStyle, opacity: 0.8 }}>
              <span style={{ color: 'var(--ink)', fontWeight: 700 }}>Dashboard de Excepciones:</span> El usuario solo ve lo que está mal. "Management by Exception."
           </div>
        </div>
      )
    },
    {
      phase: 'FASE IV',
      title: 'Modelo\nShadow QC',
      label: 'Arquitectura Human-in-the-Loop',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
           {[
               { l: 'CAPA 1', v: 'AI INGESTION (95%)', c: 'var(--ink)' },
               { l: 'CAPA 2', v: 'LOGIC FILTER (4%)', c: 'var(--ink)' },
               { l: 'CAPA 3', v: 'HUMAN AUDIT (1%)', c: 'var(--accent)' },
           ].map((row, i) => (
             <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${row.c === 'var(--accent)' ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`, paddingBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)' }}>{row.l}</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: row.c }}>{row.v}</span>
             </div>
           ))}
           
           <div style={{ marginTop: '16px', padding: '16px', background: '#111', borderRadius: '6px', border: '1px solid var(--muted)' }}>
              <span style={{ color: 'var(--ink)', fontWeight: 700, fontSize: '10px' }}>Protocolo Jr. IE:</span><br/>
              <span style={monoStyle}>Un Ingeniero en Chihuahua revisa las "Banderas Rojas" a las 8:00 AM. El cliente recibe el reporte validado a las 9:00 AM.</span>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE IV',
      title: 'Ingeniería de\nDatos',
      label: 'Protocolo de Ingesta PDF',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={cardStyle}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', textTransform: 'uppercase' }}>El Problema de Integración</div>
              <div style={monoStyle}>
                 Las Maquilas tardan 6 meses en aprobar una integración API con sus ERPs (SAP/Oracle). No tenemos ese tiempo.
              </div>
           </div>
           <div style={{ ...cardStyle, marginTop: '16px', borderColor: 'var(--ink)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', textTransform: 'uppercase' }}>La Solución: "Auto-Forward"</div>
              <div style={{ fontSize: '12px', fontFamily: 'Roboto Mono', color: '#22c55e', marginBottom: '8px' }}>
                 audit@cbar.com
              </div>
              <div style={monoStyle}>
                 Configuramos una regla en el email del Logístico para reenviar automáticamente los PDFs. Zero-Integration.
              </div>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE IV',
      title: 'Infraestructura\nCloud',
      label: 'Stack Asset-Light',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                  { l: 'OCR ENGINE', v: 'Azure Doc Intel', s: '$0.05 / Página' },
                  { l: 'DATABASE', v: 'Supabase (PG)', s: 'Encrypted' },
                  { l: 'LOGIC', v: 'Python Lambda', s: 'Serverless' },
                  { l: 'FRONTEND', v: 'Next.js', s: 'Global CDN' }
              ].map((item, i) => (
                  <div key={i} style={cardStyle}>
                     <div style={labelStyle}>{item.l}</div>
                     <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>{item.v}</div>
                     <div style={{ fontSize: '8px', color: 'var(--muted)', marginTop: '4px' }}>{item.s}</div>
                  </div>
              ))}
           </div>
        </div>
      )
    },

    // --- PHASE V: RISKS ---
    {
      phase: 'FASE V',
      title: 'Seguridad de\nDatos',
      label: 'Protocolo SOC2 / NDA',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={{ ...cardStyle, borderLeft: '4px solid #22c55e' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', textTransform: 'uppercase' }}>SOC2 Readiness</div>
              <div style={monoStyle}>
                 Arquitectura diseñada para auditoría SOC2 Tipo 1 en el Mes 12. Logs inmutables y acceso basado en roles (RBAC).
              </div>
           </div>
           <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>GARANTÍA LEGAL</div>
              <div style={{ ...monoStyle, border: '1px solid var(--muted)', padding: '8px', borderRadius: '4px' }}>
                 NDA Específico: "Datos no se venden a competidores."
              </div>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE V',
      title: 'Fricción de\nIntegración',
      label: 'La Regla del "Auto-Forward"',
      render: () => (
         <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '60px', fontWeight: 900, color: 'var(--ink)', lineHeight: '1' }}>ZERO</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>IT TICKETS</div>
               </div>
            </div>
            <div style={cardStyle}>
               <div style={monoStyle}>
                  Si requerimos que el departamento de TI del cliente instale algo, morimos. El sistema funciona 100% externo vía email forwarding.
               </div>
            </div>
         </div>
      )
    },
    {
      phase: 'FASE V',
      title: 'Mitigación de\nRiesgos',
      label: 'La Trampa del Piloto',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ padding: '16px', border: '1px solid var(--accent)', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.1)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>LA TRAMPA DEL PILOTO GRATIS</div>
              <div style={{ fontSize: '11px', color: 'var(--ink)' }}>
                 Las Maquilas aman los pilotos eternos. Consumen recursos y no firman.
              </div>
           </div>
           <div style={{ ...cardStyle, borderLeft: '4px solid #22c55e' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', marginBottom: '8px' }}>LA SOLUCIÓN: AUDITORÍA RETROSPECTIVA</div>
              <div style={monoStyle}>
                 No hacemos pilotos en vivo. Cobramos $500 USD por auditar el <strong>mes pasado</strong>. Si encontramos errores (siempre los hay), el contrato se vende solo.
              </div>
           </div>
        </div>
      )
    },

    // --- PHASE VI: ECONOMICS ---
    {
      phase: 'FASE VI',
      title: 'Economía\nUnitaria',
      label: 'Margen Bruto 95%',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ ...cardStyle, textAlign: 'center' }}>
                 <div style={labelStyle}>Rev / Unit</div>
                 <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>$10.00</div>
              </div>
              <div style={{ ...cardStyle, textAlign: 'center' }}>
                 <div style={labelStyle}>Cost / Unit</div>
                 <div style={{ fontSize: '20px', fontWeight: 700, color: '#22c55e' }}>$0.45</div>
              </div>
           </div>

           <div style={{ borderLeft: '2px solid var(--muted)', paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                  { l: 'Break Even:', v: 'Cliente #1' },
                  { l: 'Profitable:', v: 'Cliente #2' },
                  { l: 'Scale:', v: 'Cliente #30 (x1 IE)' },
              ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>
                      <span>{row.l}</span>
                      <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{row.v}</span>
                  </div>
              ))}
           </div>
        </div>
      )
    },
    {
      phase: 'FASE VI',
      title: 'Arquitectura\nde Precios',
      label: 'Modelo de Suscripción Tiered',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
           <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4px' }}>
                 <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>Tier: CORE</span>
                 <span style={{ fontSize: '14px', fontFamily: 'Roboto Mono', color: '#22c55e' }}>$2,000/mo</span>
              </div>
              <div style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>Hasta 200 Embarques</div>
           </div>
           
           <div style={{ ...cardStyle, opacity: 0.6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4px' }}>
                 <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>Tier: SCALE</span>
                 <span style={{ fontSize: '14px', fontFamily: 'Roboto Mono', color: 'var(--muted)' }}>$8/unit</span>
              </div>
              <div style={{ fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>Embarque Adicional</div>
           </div>

           <div style={{ marginTop: '16px', padding: '8px', border: '1px dashed var(--muted)', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' }}>Setup Fee: $5,000 USD (Mandatorio)</span>
           </div>
        </div>
      )
    },
    {
      phase: 'FASE VI',
      title: 'Arbitraje de\nSetup Fee',
      label: 'Financiamiento de Capital',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={{ ...cardStyle, background: 'rgba(34, 197, 94, 0.05)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Financiamiento Interno</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>Setup Fee ($5k)</div>
              <div style={{ fontSize: '10px', fontFamily: 'Roboto Mono', color: '#22c55e' }}>
                 El cobro inicial de "Auditoría Histórica" financia 3 meses de sueldo del Ingeniero Jr. antes de que empiece a trabajar.
              </div>
           </div>
           <div style={{ marginTop: 'auto', fontSize: '10px', fontFamily: 'Roboto Mono', color: 'var(--muted)', textAlign: 'center' }}>
              "Negative Working Capital desde el Día 1."
           </div>
        </div>
      )
    },
    {
      phase: 'FASE VI',
      title: 'Valle de la\nMuerte',
      label: 'Flujo de Caja Negativo',
      render: () => (
         <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '32px', gap: '8px', paddingLeft: '16px', paddingRight: '16px' }}>
               {/* Bars Chart */}
               {[
                   { l: 'DEV', h: '20%', c: 'var(--accent)' },
                   { l: 'SALE 1', h: '80%', c: '#22c55e' },
                   { l: '', h: '85%', c: '#22c55e' },
                   { l: '', h: '90%', c: '#22c55e' },
               ].map((bar, i) => (
                   <div key={i} style={{ width: '25%', height: bar.h, background: bar.c, borderTopLeftRadius: '4px', borderTopRightRadius: '4px', position: 'relative' }}>
                       <div style={{ position: 'absolute', top: '-16px', width: '100%', textAlign: 'center', fontSize: '8px', color: bar.c }}>{bar.l}</div>
                   </div>
               ))}
            </div>
            <div style={{ ...cardStyle, marginTop: 'auto' }}>
               <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
                  La disciplina de cobro <strong>Upfront</strong> elimina el valle de la muerte tradicional de SaaS. No hay "Burn Rate" sin ingresos.
               </div>
            </div>
         </div>
      )
    },

    // --- PHASE VII: EXECUTION & EXIT ---
    {
      phase: 'FASE VII',
      title: 'Motor de\nVentas',
      label: 'Estrategia Trojan Horse',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>El Caballo de Troya</div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                  { n: '01', t: 'Contactar Broker Local.', d: 'Ofrecer software GRATIS para uso interno.', c: 'var(--muted)' },
                  { n: '02', t: 'Broker instala CBAR.', d: 'Para evitar sus propios errores.', c: 'var(--muted)' },
                  { n: '03', t: 'Broker revende CBAR.', d: 'Value Add a sus 50 clientes Maquila.', c: 'var(--accent)' },
              ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                      <div style={{ fontSize: '20px', fontWeight: 900, color: step.c }}>{step.n}</div>
                      <div style={{ fontSize: '11px', color: step.c === 'var(--accent)' ? 'var(--ink)' : 'var(--muted)' }}>
                          <strong>{step.t}</strong> {step.d}
                      </div>
                  </div>
              ))}
           </div>
        </div>
      )
    },
    {
      phase: 'FASE VII',
      title: 'Hoja de Ruta\n(Roadmap)',
      label: 'Ejecución a 18 Meses',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
           {[
               { q: 'Q3 2026', t: 'PROTOTIPO (MVP)', d: 'Scripts Python + Validación Manual.', c: 'var(--ink)' },
               { q: 'Q4 2026', t: 'PILOTO (BETA)', d: '3 Clientes Pagos. 1 Ingeniero.', c: 'var(--accent)' },
               { q: '2027', t: 'ESCALA (GROWTH)', d: 'Integración Agentes Aduanales.', c: 'var(--muted)' },
           ].map((milestone, i) => (
               <div key={i} style={{ borderLeft: `2px solid ${milestone.c}`, paddingLeft: '16px', paddingBottom: '12px' }}>
                   <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)' }}>{milestone.q}</div>
                   <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>{milestone.t}</div>
                   <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{milestone.d}</div>
               </div>
           ))}
        </div>
      )
    },
    {
      phase: 'FASE VII',
      title: 'Estrategia\nde Salida',
      label: 'Data Asset vs. Software',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--ink)', fontStyle: 'italic', opacity: 0.8 }}>
              "No vendemos software. Vendemos una base de datos de riesgo."
           </div>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                  { l: 'Comprador A', v: 'Thomson Reuters', c: 'var(--ink)' },
                  { l: 'Comprador B', v: 'Descartes', c: 'var(--ink)' },
                  { l: 'Comprador C', v: 'Flexport', c: 'var(--ink)' },
              ].map((buyer, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                      <span style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' }}>{buyer.l}</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: buyer.c }}>{buyer.v}</span>
                  </div>
              ))}
           </div>
        </div>
      )
    },
    {
      phase: 'FASE VII',
      title: 'Drivers de\nValuación',
      label: 'Base de Datos de Anomalías',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
           <div style={cardStyle}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', textTransform: 'uppercase' }}>EL ACTIVO REAL</div>
              <div style={monoStyle}>
                 Base de datos propietaria que mapea <span style={{ color: 'var(--accent)' }}>Fracción Arancelaria</span> vs. <span style={{ color: 'var(--accent)' }}>Probabilidad de Error</span>.
              </div>
           </div>
           <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--ink)', lineHeight: '1' }}>6x - 8x</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Revenue Multiple</div>
              <div style={{ fontSize: '9px', color: 'var(--muted)', marginTop: '4px' }}>Valuación SaaS B2B Vertical</div>
           </div>
        </div>
      )
    }
  ];

  return (
    <DossierEngineV2 
      slides={slides} 
      branding={branding} 
      contact={contact} 
      theme={theme} 
    />
  );
}
