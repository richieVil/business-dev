'use client';

import React from 'react';

const SEGMENTS = [
  { id: 1, segment: "Industrial Baking", sku: "C: Std Flour", demand: 85000, adjProfit: 16.48, yield: "87%", target: "Bimbo", incumbent: "Bunge/Trimex" },
  { id: 2, segment: "Instant Beverages", sku: "D: Fine Flour", demand: 30000, adjProfit: 25.58, yield: "81%", target: "Nestlé", incumbent: "Briess (Import)" },
  { id: 3, segment: "Confectionery/Snacks", sku: "D: Fine Flour", demand: 20000, adjProfit: 30.44, yield: "81%", target: "Mondelēz", incumbent: "Technical Wholesalers" },
  { id: 4, segment: "Specialty Colorants", sku: "E: Roasted Flour", demand: 10000, adjProfit: 23.12, yield: "59%", target: "Arca", incumbent: "SIAVI Imports" },
  { id: 5, segment: "Nutritional Bars", sku: "B: Crushed Grits", demand: 10000, adjProfit: 24.04, yield: "92%", target: "Kellogg's", incumbent: "Specialty Spot" },
];

export default function TechnicalStrategicDossier() {
  return (
    <div className="font-sans text-slate-900 antialiased h-screen overflow-hidden print:h-auto print:overflow-visible print:bg-white">

      {/* FORCE PRINT SIZE: Junior Legal (5x8) & Background Colors */}
      <style>{`
        @media print {
          @page {
            size: 5in 8in;
            margin: 0mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      <header className="h-[53px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-900 px-4 text-white border-b border-slate-800 print:hidden">
        <div className="flex flex-col">
          <h1 className="text-sm font-black tracking-tight text-amber-500 italic leading-none uppercase">Strategic Dossier</h1>
          <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0 italic">Malt Fractional Arbitrage v0.1</p>
          <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mt-0">February 2026 - Delicias, MX</p>
        </div>
        <div className="flex gap-2">
           <span className="text-[8px] font-black bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400 uppercase tracking-tighter">Confidential</span>
           <button onClick={() => window.print()} className="rounded bg-amber-500 px-3 py-1 text-[9px] font-black text-slate-900 uppercase">PDF</button>
        </div>
      </header>

      <main className="snap-container mt-[53px] mx-auto w-full max-w-[375px] bg-white print:mt-0 print:block print:w-[375px]">
        
        {/* 01. EXECUTIVE BRIEFING */}
        <section className="snap-slide relative flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <span className="text-amber-600 font-black text-[11px] uppercase tracking-[0.2em] italic block mb-2 underline decoration-4 underline-offset-8">Executive Briefing</span>
            <h2 className="text-[44px] font-black text-slate-900 leading-[0.8] tracking-tighter mb-8 italic mt-4">Fractional <br/>Arbitrage.</h2>
            <div className="space-y-6 mt-10">
              {[ {t:"Feedstock Alpha", d:"18,000 tons of high-protein enzymatic malt locked at 80% market discount."},
                 {t:"Spec-Parity Protocol", d:"1:1 CoA matching for Diastatic Power & Protein. No formulation risk."},
                 {t:"Indestructible Margin", d:"$17.32 MXN weighted spread provides a dominant price-leadership floor."},
                 {t:"Supply Velocity", d:"Displacing 15-day 'Border Lag' with 24-hr domestic JIT delivery."} ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-l-4 border-amber-500 pl-4">
                  <div><p className="text-[12px] font-black uppercase text-slate-900 leading-none mb-1.5 italic tracking-tight">{item.t}</p><p className="text-[11px] text-slate-500 italic leading-snug">{item.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-slate-100 pt-6">
             <p className="text-[11px] font-black text-slate-400 italic">PROSPECTUS VOL. I</p>
             <div className="text-right"><p className="text-[12px] font-black text-slate-900">$366M MXN</p><p className="text-[9px] text-slate-400 uppercase font-black">Annual GP Target</p></div>
          </div>
        </section>

        {/* 02. INDUSTRIAL DEMAND (481K TON EQUIVALENCE) */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-[32px] font-black text-slate-900 italic leading-[0.85] mb-6 tracking-tighter">480,630 Tons <br/><span className="text-slate-400 font-normal text-[24px]">Equivalent Demand</span></h3>
            <div className="space-y-3">
              {[ {f:"Whole Grain", e:"181,818", s:["Bev. Extraction", "Cereals", "Vinegar"]},
                 {f:"Standard Flour", e:"119,618", s:["Industrial Baking", "Pet Health"]},
                 {f:"Crushed Grits", e:"96,591", s:["Spirits", "Animal Health", "Bars"]},
                 {f:"Fine Flour", e:"64,566", s:["Instant Bev", "Confectionery"]},
                 {f:"Roasted Flour", e:"18,038", s:["Specialty Colorants"]} ].map((group, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[12px] font-black text-slate-900 italic">{group.f}</p>
                    <p className="text-[11px] font-black text-amber-600 italic">{group.e} T</p>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {group.s.map((s, j) => (
                      <span key={j} className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">/ {s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl text-white shadow-xl flex justify-between items-center">
             <p className="text-[11px] font-black text-amber-500 italic tracking-tighter uppercase">Malt Imports Market</p>
             <p className="text-[14px] font-black italic">$10.2 Billion MXN</p>
          </div>
        </section>

        {/* 03. THE TECHNICAL USP */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200 text-center">
          <div>
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">03. The Technical USP</h3>
            <h4 className="text-[36px] font-black text-slate-900 italic leading-[0.9] mb-4">"The Enzymatic <br/>Engine."</h4>
            <p className="text-[14px] text-slate-500 italic leading-relaxed px-4 mb-6">Unlike standard brewing malt, B-Grade protein density (&gt;12%) creates a <span className="text-slate-900 font-black">superior functional precursor</span> for technical applications.</p>
            <div className="grid grid-cols-1 gap-3 text-left">
              {[ {s:"Baking", v:"Higher Maillard Precursors (FAN)", d:"Intense browning & faster yeast feeding."},
                 {s:"Distilling", v:"Maximized Diastatic Power", d:"15% higher enzymatic conversion than brewing grade."},
                 {s:"Beverage", v:"Enhanced Nutrient Density", d:"Clean mouthfeel with higher malt-solid solubility."} ].map((usp, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border-l-4 border-amber-500 shadow-sm">
                  <p className="text-[11px] font-black text-slate-900 italic leading-none mb-1">{usp.s}: {usp.v}</p>
                  <p className="text-[10px] text-slate-500 italic leading-tight">{usp.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-slate-900 p-3 rounded-full text-white"><p className="text-[11px] font-black italic">Strategic Pricing: 20% Discount vs. Landed US Imports</p></div>
        </section>
				
        {/* 04. SEGMENT BENEFIT LOGIC */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">04. Market Intelligence</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">Segment <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">Success Metrics.</span></h4>
            
            <div className="space-y-3">
              {[ {s:"Baking", b:"Crust Kinetics", d:"Precursors for Maillard browning & yeast feeding."},
                 {s:"Beverage", b:"Solubility Alpha", d:"Husk-free solids match micronized import performance."},
                 {s:"Spirits", b:"Enzymatic Yield", d:"Maximized Diastatic Power for high-gravity mashing."},
                 {s:"Colorants", b:"Natural E150", d:"Natural replacement for synthetic caramel colors."} ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex gap-3 items-center mb-1">
                    <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded uppercase italic">{item.s}</span>
                    <p className="text-[11px] font-black text-slate-900 italic">{item.b}</p>
                  </div>
                  <p className="text-[10px] text-slate-500 italic leading-snug">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-xl flex justify-between items-center">
             <p className="text-[10px] font-black text-amber-500 italic uppercase">Deal-Breaker spec matching</p>
             <p className="text-[12px] font-black italic text-white uppercase">Guaranteed.</p>
          </div>
        </section>

        {/* 05. 1:1 DROP-IN SPECIFICATION */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 italic">05. Technical Physics</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-white">CoA Parity <br/><span className="text-amber-500 underline decoration-white decoration-4 underline-offset-8 font-black">Audit Protocol.</span></h4>
            
            <div className="space-y-1 mt-8">
              <div className="grid grid-cols-3 gap-1 mb-1 px-1 italic">
                <span className="text-[8px] font-black text-slate-500 uppercase">KPI</span>
                <span className="text-[8px] font-black text-slate-500 uppercase text-center">US Import</span>
                <span className="text-[8px] font-black text-amber-500 uppercase text-center">Venture Spec</span>
              </div>
              {[ {k:"Enzymatic (DP)", u:"110-120", v:"140+ WK"},
                 {k:"Alpha-Amylase", u:"45-50", v:"60+ DU"},
                 {k:"Protein %", u:"10.5%", v:"12.5%+"},
                 {k:"FX Risk", u:"High", v:"ZERO"} ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-1 items-center p-2.5 bg-slate-800/50 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-black italic text-slate-400">{row.k}</span>
                  <span className="text-[10px] font-bold text-slate-300 text-center">{row.u}</span>
                  <span className="text-[11px] font-black text-white text-center italic">{row.v}</span>
                </div>
              ))}
            </div>

            {/* TECHNICAL LEGEND / GLOSSARY */}
            <div className="mt-8 grid grid-cols-1 gap-4 px-1 text-left">
              <div className="flex gap-3 items-start border-l border-slate-700 pl-3">
                <div className="text-[10px] font-black text-amber-500 italic uppercase min-w-[30px]">WK / DU</div>
                <p className="text-[9px] text-slate-500 italic leading-tight">
                  <span className="text-slate-300 font-bold">Enzymatic Horsepower:</span> Windisch-Kolbach (WK) measures the total starch-to-sugar conversion speed. Higher levels in B-Grade malt accelerate fermentation cycles for Industrial Bakers.
                </p>
              </div>
              <div className="flex gap-3 items-start border-l border-slate-700 pl-3">
                <div className="text-[10px] font-black text-amber-500 italic uppercase min-w-[30px]">PRO %</div>
                <p className="text-[9px] text-slate-500 italic leading-tight">
                  <span className="text-slate-300 font-bold">Maillard Precursors:</span> High-protein kernels contain denser amino acid levels. This provides more "fuel" for crust browning and umami development in roasting.
                </p>
              </div>
              <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-2 italic">
                Source: Benchmarks derived from standard US Malt TDS (Technical Data Sheets).
              </p>
            </div>
          </div>
          <div className="mt-auto bg-white p-3.5 rounded-2xl text-slate-900 text-center shadow-2xl">
            <p className="text-[11px] font-black italic uppercase italic tracking-tighter">"Zero Formulation Change Required for Integration."</p>
          </div>
        </section>

        {/* 06. THE IMPORT FRICTION AUDIT */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">06. Market Intelligence</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">The "Invisible" <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">Import Tax.</span></h4>
            
            <div className="space-y-4 mt-8">
              {[ {t:"Logistical Friction", d:"1,500km+ rail transit from the US Midwest vs. our 24-hr JIT loop.", v:"High Cost"},
                 {t:"Customs Friction", d:"The 'Border Lag': Avg. 15-day delay for brokerage and inspections.", v:"Volatility"},
                 {t:"Currency Friction", d:"USD-denominated sourcing vs. MXN revenue creates chronic margin leak.", v:"FX Risk"} ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 animate-pulse" />
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[12px] font-black text-slate-900 italic uppercase leading-none">{item.t}</p>
                      <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded italic">{item.v}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-slate-900 rounded-2xl text-white text-center">
            <p className="text-[10px] font-black italic uppercase tracking-widest">Displacing Structural Inefficiency with Domestic Proximity.</p>
          </div>
        </section>

        {/* 07. INDUSTRIAL YIELD ARCHITECTURE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">07. Technical Physics</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">Yield <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">Optimization.</span></h4>

            <div className="flex flex-col items-center">
              {/* INTAKE */}
              <div className="p-2.5 bg-slate-100 border-2 border-slate-900 rounded-xl text-center mb-2">
                <p className="text-[13px] font-black italic text-slate-900 leading-none mb-1">1,000kg B-Grade Intake</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Malted Barley Feedstock</p>
              </div>

              {/* THE BLACK BOX */}
              <div className="w-full max-w-[260px] p-4 bg-slate-900 rounded-2xl shadow-xl text-center relative mb-2">
                <div className="absolute inset-0 border-2 border-amber-500/10 rounded-2xl animate-pulse" />
                <h4 className="text-amber-500 font-black italic text-[14px] leading-tight mb-0.5 uppercase tracking-tighter">Industrial Refining Engine</h4>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest italic leading-none">Cleaning • Drying • Sifting • Conditioning</p>
              </div>

              {/* THE 3 STREAMS */}
              <div className="grid grid-cols-3 gap-2 w-full mb-3 relative px-2">
                <div className="text-center p-2 bg-slate-50 border border-slate-200 rounded-xl relative">
                  <p className="text-[11px] font-black text-slate-900 leading-none">50kg</p>
                  <p className="text-[7px] font-bold text-slate-400 uppercase leading-none mt-1 text-slate-400">Salvage<br/>(Feed)</p>
                </div>
                <div className="text-center p-2 bg-amber-50 border-2 border-amber-500 rounded-xl shadow-lg transform -translate-y-1">
                  <p className="text-[14px] font-black text-slate-900 leading-none">880kg</p>
                  <p className="text-[7px] font-black text-amber-600 uppercase leading-none mt-1">Technical<br/>WIP Stream</p>
                </div>
                <div className="text-center p-2 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-[11px] font-black text-slate-400 leading-none">70kg</p>
                  <p className="text-[7px] font-bold text-slate-300 uppercase leading-none mt-1 text-slate-400 font-bold">Process<br/>Loss</p>
                </div>
              </div>

              {/* STRATEGIC PATHS */}
              <div className="w-full space-y-2 pt-3 border-t-2 border-dashed border-slate-100 px-1">
                <div className="grid grid-cols-1 gap-1.5">
                  <div className="flex justify-between items-center p-2.5 bg-white border border-slate-200 rounded-xl">
                    <div className="text-left"><p className="text-[10px] font-black text-slate-900 italic uppercase leading-none">Path A: Std Flour</p><p className="text-[7px] font-bold text-slate-400 uppercase mt-1 italic">95% Milling Yield</p></div>
                    <p className="text-[13px] font-black text-slate-900 italic">836kg</p>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-white border border-slate-200 rounded-xl">
                    <div className="text-left"><p className="text-[10px] font-black text-slate-900 italic uppercase leading-none">Path B: Fine Flour</p><p className="text-[7px] font-bold text-slate-400 uppercase mt-1 italic">88% Milling Yield</p></div>
                    <p className="text-[13px] font-black text-slate-900 italic">774kg</p>
                  </div>
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[10px] font-black text-amber-900 italic uppercase leading-none">Path C: Specialty Roast</p>
                      <p className="text-[13px] font-black text-amber-900 italic">563kg <span className="text-[8px] uppercase">Roasted</span></p>
                    </div>
                    <div className="flex justify-between items-center border-t border-amber-200/50 pt-1">
                      <p className="text-[7px] font-bold text-amber-700 uppercase italic leading-none">Diverted Broken Pieces (210kg Intake)</p>
                      <p className="text-[9px] font-black text-amber-800 italic leading-none">+185kg <span className="text-[7px] font-bold">Fine Flour</span></p>
                    </div>
                  </div>
								</div>
							</div>
						</div>
          </div>
          <p className="text-[10px] italic text-slate-500 text-center font-black mt-auto underline decoration-amber-500 decoration-2 italic">Volume VII: The Physics of Industrial Transformation.</p>
        </section>

        {/* 08. THE STRATEGIC SHIELD */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 italic text-center uppercase">08. Strategic Consolidation</h3>
            <h4 className="text-[32px] font-black italic mb-8 leading-[0.85] tracking-tighter text-white text-center">The Venture <br/><span className="text-amber-500 underline decoration-white decoration-4 underline-offset-8">Advantage.</span></h4>
            
            <div className="grid grid-cols-2 gap-1 mt-2">
              {[ {t:"Technical Lead", d:"Direct Import Replacement matching US quality while delivering superior enzymatic density.", s:"SPEC-MATCH"},
                 {t:"JIT Velocity", d:"Displacing the 15-day Border Lag to reduce safety stock and release millions in working capital.", s:"WC RELEASE"},
                 {t:"SKU Versatility", d:"Integrated coverage across 5 technical formats, from Whole Grain to Std/Fine Flour and Roasted Flour.", s:"ONE-STOP"},
                 {t:"Institutional Lock", d:"Technical Data Sheet validation creates a high switching-cost moat once coded into client formulations.", s:"BOM LOCK"} ].map((adv, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col justify-between min-h-[140px] text-left">
                  <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center mb-1 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <span className="text-[12px] font-black text-slate-900 italic">0{i+1}</span>
                  </div>
                  <div>
                    <p className="text-[18px] font-black italic text-white leading-none mb-1.5">{adv.t}</p>
                    <p className="text-[9px] text-slate-400 italic leading-snug mb-3">{adv.d}</p>
                    <span className="text-[8px] font-black bg-white text-slate-900 px-1.5 py-0.5 rounded uppercase tracking-tighter italic">{adv.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto p-4 bg-white rounded-2xl text-slate-900 text-center shadow-2xl">
            <p className="text-[11px] font-black italic uppercase tracking-tighter">"Displacing Imports through Total Supply Sovereignty."</p>
          </div>
        </section>
				
        {/* 09. STRATEGIC CAPEX EFFICIENCY */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">09. Operational Architecture</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">The Maquila <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">CAPEX Lever.</span></h4>
            
            <div className="space-y-4">
              <p className="text-[13px] text-slate-600 leading-relaxed italic">By trading fixed CAPEX for Service Level Agreements (SLAs), we reach Phase 1 capacity in <span className="text-slate-900 font-black">100 days</span> vs. 24 months.</p>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[20px] font-black italic text-slate-900 leading-none mb-1">$200M+</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-tight">Leveraged Partner Infrastructure</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-right">
                  <p className="text-[20px] font-black italic text-amber-600 leading-none mb-1">ZERO</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-tight">Secondary Milling CAPEX</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl text-white shadow-xl mt-4">
                <p className="text-[11px] font-black italic text-amber-500 uppercase mb-1">Asset-Light Advantage</p>
                <p className="text-[12px] text-slate-300 italic leading-snug">We utilize GFSI-certified partner rollers to bypass food-safety audit lags and immediate machinery depreciation.</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic text-center font-black mt-auto underline decoration-amber-500 decoration-2 italic uppercase tracking-widest">SLA Over CAPEX Strategy.</p>
        </section>

        {/* 10. THE REFINEMENT GATE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">10. Operational Architecture</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">The Net-Mass <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">Optimization.</span></h4>
            
            <div className="flex flex-col items-center mt-4">
              <div className="w-full p-4 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Refinement Gate (Source)</p>
                    <p className="text-[18px] font-black italic text-slate-900 leading-none">Weight Rejection</p>
                  </div>
                  <p className="text-[32px] font-black italic text-amber-600 leading-none tracking-tighter">12.0%</p>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-amber-500 w-[12%]" />
                </div>
              </div>

              <div className="space-y-3 mt-6 w-full px-2">
                {[ {t:"Cleaning & Sifting", d:"Removal of stones, straw, and dust before long-haul freight."},
                   {t:"Drying (Kinetics)", d:"Critical humidity reduction for 24-month shelf stability."},
                   {t:"Mold Prevention", d:"Non-negotiable gate to satisfy Tier-1 CPG microbiological audits."} ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start italic">
                    <div className="w-4 h-4 rounded-full bg-slate-900 text-white text-[8px] flex items-center justify-center font-black mt-1 shrink-0">{i+1}</div>
                    <div><p className="text-[11px] font-black text-slate-900 leading-none mb-1">{item.t}</p><p className="text-[10px] text-slate-500 leading-tight">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-900 rounded-2xl text-white text-center shadow-lg"><p className="text-[9px] font-black uppercase tracking-widest italic text-amber-500">Eliminating "Friction Weight" at Source.</p></div>
        </section>

        {/* 11. SHADOW QUALITY GOVERNANCE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 italic">11. Operational Architecture</h3>
            <h4 className="text-[32px] font-black italic mb-8 leading-[0.85] tracking-tighter text-white uppercase italic">The Human <br/><span className="text-amber-500 underline decoration-white decoration-4 underline-offset-8 font-black">Gatekeeper.</span></h4>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-4xl font-black italic opacity-20 text-white shrink-0">QC</div>
                  <div>
                    <p className="text-sm font-black italic text-amber-500 uppercase leading-none mb-2">Shadow Governance Model</p>
                    <p className="text-xs text-slate-400 italic leading-relaxed">We station a full-time Venture Auditor at every Maquila center. The partner mill provides the <span className="text-white font-bold italic">Mechanical Force</span>; we own the <span className="text-white font-bold italic">Process Parameters.</span></p>
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-2">
                 <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1 italic">Venture Control</p>
                    <p className="text-[11px] font-bold text-white italic">Recipe Release Sign-off • Batch Analytics • CoA Validation</p>
                 </div>
                 <div className="p-4 bg-slate-800/20 rounded-xl border border-dashed border-slate-800">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Partner Support</p>
                    <p className="text-[11px] font-bold text-slate-500 italic">Labor Force • Mechanical Energy • FSSC 22000 Compliance</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="mt-auto p-4 bg-white rounded-2xl text-slate-900 text-center shadow-2xl">
            <p className="text-[11px] font-black italic uppercase tracking-tighter">Total Intellectual Ownership of the Transformation Curve.</p>
          </div>
        </section>

        {/* 12. INSTITUTIONAL TRACEABILITY */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">12. Operational Architecture</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900">The Recall <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8">Shield.</span></h4>
            
            <p className="text-[13px] text-slate-500 leading-relaxed italic mb-8">We solve the primary Tier-1 CPG objection: <span className="text-slate-900 font-bold">Traceability of Brewery Byproducts.</span></p>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 relative">
               <div className="absolute top-0 right-0 p-3"><span className="text-[10px] font-black text-amber-600 italic uppercase">DNA Ledger</span></div>
               <div className="space-y-4 py-2">
                  {[ {l:"Origin Audit", d:"Batch COA from Meoqui malting plant."},
                     {l:"Refinement Log", d:"Processing temp & sifting curves in Chihuahua."},
                     {l:"Maquila Ledger", d:"Milling set-points and micro-screening tests."} ].map((log, i) => (
                    <div key={i} className="flex gap-3">
                       <div className="w-1 h-auto bg-slate-900 rounded-full" />
                       <div><p className="text-[11px] font-black text-slate-900 italic uppercase leading-none mb-1">{log.l}</p><p className="text-[10px] text-slate-500 leading-tight italic">{log.d}</p></div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="p-4 bg-slate-900 rounded-2xl text-white shadow-xl flex justify-between items-center mt-auto">
             <p className="text-[10px] font-black text-amber-500 italic uppercase">GFSI-Compliant Audit Trail</p>
             <p className="text-[12px] font-black italic text-white uppercase tracking-tighter">Guaranteed.</p>
          </div>
        </section>

        {/* 13. COMPARATIVE ECONOMICS MATRIX */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">13. Commercial Logic</h3>
            <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900 uppercase italic">Comparative <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8 font-black">Economics.</span></h4>
            
            <div className="relative mt-8">
              <div className="overflow-x-auto pb-4 custom-scrollbar">
                <table className="w-[620px] text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 italic font-black text-[11px] text-slate-400 uppercase tracking-tighter">
                      <th className="py-1 sticky left-0 bg-white z-20 w-[90px]">Format</th>
                      <th className="py-1 px-1 text-slate-900 bg-amber-100/50 text-center border-x border-white">Adj Profit (Supply-kg)</th>
                      <th className="py-1 px-1 text-center">Gross Profit</th>
                      <th className="py-1 px-1 text-center">Unit COGS</th>
                      <th className="py-1 px-1 text-center">Ref. Yield</th>
                      <th className="py-1 px-1 text-center">Freight</th>
                      <th className="py-1 px-1 text-center">Prod. Cost</th>
                      <th className="py-1 px-1 text-center">Prod. Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 italic">
                    {[
                      { s: "Whole", adj: "$10.28", gp: "$15.34", c: "$5.51", ry: "67%", f: "$0.00", pc: "$0.45", py: "100%" },
                      { s: "Grits", adj: "$12.46", gp: "$14.16", c: "$8.05", ry: "88%", f: "$2.50", pc: "$1.40", py: "100%" },
                      { s: "Std Flour", adj: "$15.29", gp: "$18.29", c: "$9.83", ry: "88%", f: "$2.50", pc: "$2.70", py: "95%" },
                      { s: "Fine Flour", adj: "$26.18", gp: "$33.80", c: "$10.60", ry: "88%", f: "$2.50", pc: "$2.70", py: "88%", h: true },
                      { s: "Roasted", adj: "$21.98", gp: "$39.06", c: "$15.94", ry: "67%", f: "$2.50", pc: "$5.80", py: "84%", h: true },
                    ].map((row, i) => (
                      <tr key={i} className={`text-[14px] font-bold group ${row.h ? 'bg-amber-100/60' : 'hover:bg-slate-50'}`}>
                        <td className={`py-1.5 sticky left-0 z-10 font-black text-slate-900 border-r border-slate-100 pr-2 ${row.h ? 'bg-amber-100 border-l-4 border-amber-600 pl-1' : 'bg-white group-hover:bg-slate-50'}`}>{row.s}</td>
                        <td className={`py-1.5 px-1 text-center text-slate-900 font-black border-x border-white/50 ${row.h ? 'bg-amber-200/40' : 'bg-amber-50/40'}`}>{row.adj}</td>
                        <td className="py-1.5 px-1 text-center text-slate-500">{row.gp}</td>
                        <td className="py-1.5 px-1 text-center text-slate-500 font-black">{row.c}</td>
                        <td className="py-1.5 px-1 text-center text-slate-400">{row.ry}</td>
                        <td className="py-1.5 px-1 text-center text-slate-400">{row.f}</td>
                        <td className="py-1.5 px-1 text-center text-slate-400">{row.pc}</td>
                        <td className="py-1.5 px-1 text-center text-slate-400">{row.py}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <div className="flex justify-center items-center gap-2 mt-2">
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                 </div>
                 <p className="text-[9px] font-black text-slate-400 uppercase italic">Swipe for detailed audit reference</p>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 italic text-center font-black mt-auto uppercase tracking-widest">Radical Transparency in Unit Economics.</p>
        </section>

        {/* 14. ALLOCATION MERITOCRACY */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">14. Commercial Logic</h3>
            <h4 className="text-[32px] font-black italic mb-2 leading-[0.85] tracking-tighter text-slate-900 uppercase italic">Allocation <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8 font-black">Meritocracy.</span></h4>
            
            <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-xl flex justify-between items-center mb-6">
               <p className="text-[10px] font-black text-amber-500 italic uppercase">Phase 1 GP Potential</p>
               <p className="text-[18px] font-black italic text-white leading-none">$366 <span className="text-[10px] uppercase font-bold text-slate-500">M MXN</span></p>
            </div>

            <div className="space-y-2">
               {[ {s:"Confectionery", f:"Fine Flour", gp:"$78 M", d:"20,000 T", ap:"$28.96", ta:"15%", ms:"10%", h:true},
                  {s:"Instant Beverage", f:"Fine Flour", gp:"$88 M", d:"30,000 T", ap:"$24.32", ta:"20%", ms:"9%", h:true},
                  {s:"Nutritional Bars", f:"Crushed Grits", gp:"$25 M", d:"10,000 T", ap:"$22.84", ta:"6%", ms:"10%", h:false},
                  {s:"Specialty Colorants", f:"Roasted Flour", gp:"$36 M", d:"10,000 T", ap:"$21.98", ta:"9%", ms:"9%", h:false},
                  {s:"Industrial Baking", f:"Std Flour", gp:"$140 M", d:"85,000 T", ap:"$15.29", ta:"50%", ms:"9%", h:false} ].map((item, i) => (
                 <div key={i} className={`p-3 rounded-2xl border shadow-sm ${item.h ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200'}`}>
                    <div className="flex justify-between items-center mb-1">
                       <p className="text-[11px] font-black text-slate-900 italic uppercase leading-none">{item.s} <span className="text-[8px] font-bold text-slate-400 ml-1">({item.f})</span></p>
                       <p className="text-[12px] font-black italic text-slate-900 leading-none">{item.gp}</p>
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-500 font-bold uppercase border-t border-slate-100/50 pt-2 tracking-tighter">
                       <p>Demand: {item.d}</p>
                       <p className="text-slate-900">Adj Profit: {item.ap}</p>
                       <p>Alloc: {item.ta}</p>
                       <p className="text-amber-600">M/S: {item.ms}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <p className="text-[9px] text-slate-400 italic text-center font-black mt-auto uppercase tracking-widest italic underline decoration-amber-500 underline-offset-2">Prioritized by Adjusted Profit Velocity.</p>
        </section>

        {/* 15. THE GOLIATH DEFENSE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 italic text-center">15. Commercial Strategy</h3>
            <h4 className="text-[32px] font-black italic mb-8 leading-[0.85] tracking-tighter text-white text-center italic">The Goliath <br/><span className="text-amber-500 underline decoration-white decoration-4 underline-offset-8 font-black">Defense.</span></h4>
            
            <div className="mt-10 text-center relative">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <p className="text-[48px] font-black italic text-white leading-none tracking-tighter mb-2">10.0%</p>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-10 italic">Strategic Market Cap</p>
                
                <div className="space-y-4 text-left px-2">
                   {[ {t:"Low Visibility", d:"Prevents price retaliation from Heineken/Modelo giants."},
                      {t:"Anti-Commodity", d:"Focuses on technical high-alpha niches, avoiding bulk price-wars."},
                      {t:"Risk Dispersion", d:"A $385M GP portfolio built on 12 diverse, non-correlated sectors."} ].map((def, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                       <div><p className="text-[12px] font-black italic text-white leading-none mb-1 uppercase tracking-tighter">{def.t}</p><p className="text-[10px] text-slate-400 italic leading-snug">{def.d}</p></div>
                    </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-500 italic text-center font-black mt-auto uppercase tracking-widest italic">Capturing Alpha without Triggering Conflict.</p>
        </section>

        {/* 16. THE HIT LIST */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">16. Execution Strategy</h3>
              <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900 italic uppercase">The 10x <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8 font-black">Pipeline.</span></h4>
              
              <div className="space-y-2">
                 {[ 
                    {s:"Confectionery", sku:"Fine Flour", t:"2.7k T", p:"15%", tier1:"Mondelēz (6k), Ferrero (3k), Hershey's (4k)", rest:"12.8k"},
                    {s:"Instant Beverage", sku:"Fine Flour", t:"3.6k T", p:"20%", tier1:"Nestlé (12k), Choco Milk (5k), Herdez (4k)", rest:"17.7k"},
                    {s:"Nutritional Bars", sku:"Crushed Grits", t:"1.1k T", p:"6%", tier1:"Kellogg's (3k), Bimbo (2k), Qualtia (1k)", rest:"5.3k"},
                    {s:"Spec. Colorants", sku:"Roasted Flour", t:"1.6k T", p:"9%", tier1:"Sensient (4k), Döhler (3k), Givaudan (1k)", rest:"9.7k"},
                    {s:"Industrial Baking", sku:"Std Flour", t:"9.0k T", p:"50%", tier1:"Bimbo (35k), Gamesa (12k), Harinera Valle (8k)", rest:"46.6k"} 
                 ].map((h, i) => (
                   <div key={i} className="border-b border-slate-100 pb-2 italic">
                      <div className="flex justify-between items-end mb-1">
                        <div className="text-left">
                          <p className="text-sm font-black text-slate-900 leading-none">{h.s}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{h.sku}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[14px] font-black text-slate-900 leading-none italic">{h.t}</p>
                          <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest leading-none mt-1">{h.p} ALLOC</p>
                        </div>
                      </div>
                      <div className="mt-1 space-y-0.5">
                        <p className="text-[9px] text-slate-600 leading-tight">
                          <span className="text-slate-900 font-black uppercase text-[7px] tracking-widest mr-1">Tier-1 Leads:</span> 
                          {h.tier1}
                        </p>
                        <p className="text-[8px] text-slate-500 italic font-bold">
                          + Fragmented Sector Tail: {h.rest} T equivalent demand
                        </p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="p-4 bg-slate-900 rounded-xl text-white shadow-xl mt-6"><p className="text-[10px] italic font-bold text-amber-500 text-center leading-tight tracking-tighter uppercase italic">Target allocation represents &lt;12% of individual client BOM. Low-friction, non-displacement entry.</p></div>
        </section>

        {/* 17. ACTIVATION BRIDGE & LAUNCH BUDGET */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">17. Execution Strategy</h3>
              <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900 italic uppercase">The 180-Day <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8 font-black">Activation.</span></h4>
              
              <div className="bg-slate-900 p-4 rounded-2xl shadow-xl mb-6 italic">
                 <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                    <p className="text-[10px] font-black text-amber-500 uppercase italic">Launch Allocation</p>
                    <p className="text-[18px] font-black italic text-white">$4.15M <span className="text-[10px] text-slate-500 uppercase">MXN</span></p>
                 </div>
                 <div className="space-y-1.5">
                    {[ {l:"Source Hub CAPEX (Sorters/Silos)", v:"$2.80M"},
                       {l:"Maquila SLA Trials (MTY/GDL)", v:"$0.35M"},
                       {l:"CPG R&D Sample Burn (10x Pipeline)", v:"$0.65M"},
                       {l:"Certifications (COFEPRIS/SGS)", v:"$0.35M"} ].map((cost, i) => (
                      <div key={i} className="flex justify-between text-[9px] font-bold">
                         <span className="text-slate-400 uppercase tracking-tighter">{cost.l}</span>
                         <span className="text-slate-200 font-black">{cost.v}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-5 px-1">
                 {[ {m:"M1-M2: Strategic Base", d:"Maquila trials & capacity allocation. Shipping Golden Samples to Tier-1 Leads."},
                    {m:"M3-M4: Facility & Audit", d:"Chihuahua Hub install. COFEPRIS sanitation audit & CPG lab validation plant trials."},
                    {m:"M5-M6: Conversion Ramp", d:"Converting Pilot approvals into Industrial POs. 18k Ton supply chain saturation starts."} ].map((step, i) => (
                  <div key={i} className="flex gap-4 italic relative">
                    <div className="w-0.5 bg-slate-200 absolute left-[7px] top-4 bottom-0" />
                    <div className="w-4 h-4 rounded-full bg-slate-900 z-10 shrink-0 mt-1" />
                    <div><p className="text-[11px] font-black text-slate-900 leading-none mb-1 uppercase tracking-tighter">{step.m}</p><p className="text-[10px] text-slate-500 leading-tight italic">{step.d}</p></div>
                  </div>
                 ))}
              </div>
           </div>
           <p className="text-[9px] text-slate-400 italic text-center font-black mt-auto uppercase tracking-widest italic underline decoration-amber-500 underline-offset-4">180-Day Bridge to Industrial Revenue.</p>
        </section>

        {/* 18. THE STRATEGIC ECOSYSTEM */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 italic">18. Execution Synergy</h3>
              <h4 className="text-[32px] font-black italic mb-6 leading-[0.85] tracking-tighter text-slate-900 italic uppercase">The Strategic <br/><span className="text-amber-600 underline decoration-slate-900 decoration-4 underline-offset-8 font-black">Ecosystem.</span></h4>
              
              <div className="grid grid-cols-1 gap-3">
                 {[ 
                   {t:"Capital & Governance", l:"Industry-Smart Money", d:"Family Offices / Strategic Angels. Terms: Preferred Equity + Board seat.", b:"Smart-CAPEX"},
                   {t:"Regulatory Mastery", l:"Audit & Compliance", d:"Independent Labs (SGS) + Regulatory Boutiques for fast-track COFEPRIS.", b:"Audit-Ready"},
                   {t:"Commercial Velocity", l:"Door-Openers", d:"Technical Brokers with active BOM-access at Bimbo/Nestlé/Sensient.", b:"PO-Velocity"},
                   {t:"Supply-Chain Logic", l:"The Maquila Partner", d:"Established MTY/GDL Millers with GFSI certs and rail-head access.", b:"SLA-Locked"}
                 ].map((part, i) => (
                   <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 italic relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-2"><span className="text-[7px] font-black bg-slate-900 text-amber-500 px-1.5 py-0.5 rounded tracking-widest uppercase">{part.b}</span></div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-1">{part.t}</p>
                      <p className="text-[12px] font-black text-slate-900 leading-none mb-2">{part.l}</p>
                      <p className="text-[10px] text-slate-500 leading-snug">{part.d}</p>
                   </div>
                 ))}
              </div>
           </div>
           <p className="text-[9px] text-slate-400 italic text-center font-black mt-auto uppercase tracking-widest italic underline decoration-amber-500">De-risking through Strategic Institutional Alliances.</p>
        </section>

        {/* 19. STRATEGIC EXIT ROADMAP */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
           <div>
              <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2 italic text-center uppercase">19. The Endgame</h3>
              <h2 className="text-[44px] font-black italic leading-[0.8] tracking-tighter mb-8 text-white text-center italic">Exit <br/><span className="text-amber-500 underline decoration-white decoration-4 underline-offset-8 font-black">Liquidity.</span></h2>
              
              <div className="space-y-4">
                 <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 relative italic">
                    <div className="absolute top-0 right-0 p-3"><span className="text-[8px] font-black text-amber-500 uppercase tracking-widest italic">5-Year Roadmap</span></div>
                    <p className="text-[12px] font-black italic text-white uppercase tracking-tighter mb-2 underline decoration-amber-500 decoration-2">Liquidity Triggers</p>
                    <div className="space-y-2 mt-4">
                       {[ {t:"Supply Saturation", d:"100% capture of the 18k Ton Meoqui discharge."},
                          {t:"BOM Integration", d:"'Formula-Lock' with 3+ Tier-1 Multi-nationals (Nestlé/Bimbo)."},
                          {t:"Diversified Origin", d:"Establishing secondary hubs in Tlaxcala and El Bajío."} ].map((trig, i) => (
                         <div key={i} className="flex gap-2 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                            <p className="text-[10px] text-slate-300 italic"><span className="text-white font-black">{trig.t}:</span> {trig.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 gap-2">
                    {[ {t:"Vertical Re-integration", s:"Heineken / Modelo", m:"8x-12x EBITDA"},
                       {t:"BOM Consolidation", s:"Grupo Bimbo / PepsiCo", m:"Strategic Premium"},
                       {t:"Global Ingredient Firm", s:"Kerry / ADM / Ingredion", m:"Market Entry Buyout"} ].map((exit, i) => (
                     <div key={i} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 flex justify-between items-center italic">
                       <div><p className="text-[10px] font-black text-white italic leading-none mb-1">{exit.t}</p><p className="text-[8px] uppercase text-slate-500 font-bold tracking-widest">{exit.s}</p></div>
                       <div className="text-[10px] font-black italic text-amber-500 uppercase text-right leading-none">{exit.m}</div>
                     </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="mt-auto p-4 border-t border-slate-800 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest italic text-slate-600 italic">Volume XIV: Path to Institutional Liquidity</p>
           </div>
        </section>


{/* 20. THE EXECUTIVE MANDATE (FINAL) */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200 font-black italic">
           <div>
              <span className="text-amber-600 font-black text-[11px] uppercase tracking-[0.2em] block mb-2 underline decoration-4 underline-offset-8">Conclusion</span>
              <h2 className="text-[36px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 italic mt-4 uppercase">The Strategic <br/>Mandate.</h2>
              
              <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-2xl relative overflow-hidden mb-8">
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-4xl italic">ALPHA</div>
                 <p className="text-[14px] leading-relaxed mb-6 font-bold">
                    We have identified a mispriced industrial asset, engineered a specification-parity solution, and mapped a 10x-deep commercial pipeline.
                 </p>
                 <div className="space-y-3">
                    {[ "18,000 Ton Sourcing Lock", "$366 M MXN Annual GP", "180-Day Activation Bridge" ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center">
                         <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                         <p className="text-[11px] font-black uppercase tracking-widest">{item}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="text-center mt-10">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Next Step: Technical Briefing</p>
                 <a 
                   href="https://wa.me/526145463178?text=I%20have%20reviewed%20the%20Malt%20Arbitrage%20Dossier%20and%20would%20like%20to%20schedule%20a%20technical%20briefing."
                   target="_blank"
                   rel="noopener noreferrer" 
                   className="inline-block px-8 py-4 bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:bg-amber-400 transition-colors cursor-pointer"
                 >
                    <p className="text-[16px] font-black text-slate-900 italic tracking-tighter leading-none flex items-center justify-center gap-2">
                       <span>WhatsApp: +52 614 546 3178</span>
                    </p>
                    <p className="text-[8px] font-black uppercase text-amber-900 mt-1">Direct Secure Line • Delicias, Chihuahua</p>
                 </a>
              </div>
           </div>
           
           <div className="mt-auto border-t border-slate-100 pt-6 flex justify-between items-center">
              <div className="text-left">
                 <p className="text-[9px] font-black text-slate-900 italic uppercase">Operational HQ</p>
                 <p className="text-[9px] text-slate-400 font-bold italic uppercase">Delicias, CHIH, MX</p>
              </div>
              <div className="text-right">
                 <p className="text-[9px] font-black text-slate-900 italic uppercase leading-none mb-1">Dossier Revision</p>
                 <span className="text-[8px] bg-slate-900 text-white px-2 py-0.5 rounded font-black italic">V. 0.0.1 - FEB 2026</span>
              </div>
           </div>
        </section>
				

      {/* PRINT-ONLY FOOTER (Appears on every page of PDF) */}
      <div className="hidden print:fixed print:bottom-0 print:left-0 print:w-full print:flex print:justify-between print:px-6 print:py-2 print:text-[6px] print:text-slate-400 print:italic print:bg-white print:border-t print:border-slate-100 z-50">
          <span>Web: https://business-dev-two.vercel.app/malt-arbitrage</span>
          <span>WhatsApp: +52 614 546 3178</span>
      </div>


      </main>
    </div>
  );
}
