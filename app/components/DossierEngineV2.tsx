"use client";

import React, { useState } from "react";

interface SlideData {
  phase: string;
  title: string;
  label: string;
  render: () => React.ReactNode;
}

interface DossierEngineV2Props {
  slides: SlideData[];
  branding: {
    title: string;
    subtitle: string;
    version: string;
  };
  contact: {
    phone: string; // Format: "+52 614 546 3178"
    whatsapp: string; // URL: "https://wa.me/..."
    email: string;
    website: string;
  };
  theme: {
    parchment: string;
    ink: string;
    accent: string;
    muted: string;
  };
}

export default function DossierEngineV2({
  slides,
  branding,
  contact,
  theme
}: DossierEngineV2Props) {
  const [progress, setProgress] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const val = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
    setProgress(val);
  };

  return (
    <div className="dossier-v2-root antialiased h-screen overflow-hidden print:h-auto print:overflow-visible">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Roboto+Mono:wght@400;700&display=swap');

        :root {
          --parchment: ${theme.parchment};
          --ink: ${theme.ink};
          --accent: ${theme.accent};
          --muted: ${theme.muted};
        }

        .dossier-v2-root { font-family: 'Inter', sans-serif; background: #333; }
        
        .fixed-header {
          height: 53px; width: 100%; position: fixed; top: 0; left: 0; z-index: 100;
          background: var(--ink); color: white; display: flex; align-items: center;
          justify-content: space-between; padding: 0 16px; box-sizing: border-box;
        }

        .master-cage {
          margin: 53px auto 0 auto; width: 100%; max-width: 375px;
          height: calc(100vh - 53px); background: var(--parchment);
          overflow-y: auto; scroll-snap-type: y mandatory;
        }
        .master-cage::-webkit-scrollbar { display: none; }

        .slide {
          min-height: calc(100vh - 53px); width: 100%; scroll-snap-align: start;
          scroll-snap-stop: always; display: flex; flex-direction: column;
          padding: 32px 24px; box-sizing: border-box; position: relative;
          background: var(--parchment); border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .heading-hero { font-size: 38px; font-weight: 900; line-height: 0.95; color: var(--ink); margin-bottom: 12px; white-space: pre-line; letter-spacing: -0.02em; }
        .phase-tag { font-family: 'Roboto Mono', monospace; font-size: 10px; font-weight: 700; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 8px; }
        .label-technical { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--muted); border-left: 2px solid var(--accent); padding-left: 8px; margin-bottom: 20px; }
        .slide-id { font-family: 'Roboto Mono', monospace; font-size: 10px; color: var(--muted); position: absolute; top: 32px; right: 24px; }

        .sticky-footer { margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; }
        .contact-row { display: flex; justify-content: space-between; align-items: center; font-family: 'Roboto Mono', monospace; font-size: 8px; }
        .accent-link { color: var(--accent); text-decoration: none; font-weight: 700; }

        @media print {
          @page { size: 5in 8in; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; }
          .fixed-header { display: none !important; }
          .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; width: 5in !important; max-width: none !important; }
          .slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; padding: 0.5in !important; }
          .browser-only { display: none !important; }
          .print-only { display: block !important; }
        }
        .print-only { display: none; }
      `}</style>

      <header className="fixed-header print:hidden">
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
          <span style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--accent)' }}>{branding.title}</span>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#737373', textTransform: 'uppercase' }}>{branding.subtitle}</span>
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={() => window.print()} 
            style={{ background: '#262626', color: 'white', fontSize: '9px', fontWeight: 700, padding: '4px 12px', borderRadius: '4px', border: '1px solid #404040', cursor: 'pointer' }}
          >
            PDF
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-[1px] bg-neutral-800 w-full">
           <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, background: 'var(--accent)' }}></div>
        </div>
      </header>

      <main className="master-cage" onScroll={handleScroll}>
        {slides.map((slide, index) => {
          const sId = `S${String(index + 1).padStart(2, '0')}`;
          return (
            <section key={sId} className="slide">
              <div className="slide-id">{sId}</div>
              <div className="phase-tag">{slide.phase}</div>
              <h1 className="heading-hero">{slide.title}</h1>
              <div className="label-technical">{slide.label}</div>
              
              <div className="slide-content-body flex-1 flex flex-col" style={{ paddingBottom: '20px' }}>
                {slide.render()}
              </div>

              <footer className="sticky-footer">
                <div className="contact-row" style={{ marginBottom: '4px' }}>
                  <div className="browser-only">
                    <a href={contact.whatsapp} className="accent-link">WhatsApp</a>
                    <span style={{ margin: '0 8px', color: '#d4d4d4' }}>|</span>
                    <a href={`mailto:${contact.email}`} className="accent-link">Email</a>
                  </div>
                  <div className="print-only" style={{ color: 'var(--muted)' }}>
                    WA: {contact.phone} | {contact.email}
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--muted)' }}>{contact.website}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)' }}>Confidential // {branding.version}</span>
                   <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--muted)', fontFamily: 'Roboto Mono' }}>{index + 1} / {slides.length}</span>
                </div>
              </footer>
            </section>
          );
        })}
      </main>
    </div>
  );
}
