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
    <div className="bg-slate-900 font-sans text-slate-900 antialiased h-screen overflow-hidden print:h-auto print:overflow-visible print:bg-white">

      <header className="h-[53px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-900 px-4 text-white border-b border-slate-800 print:hidden">
        <div className="flex flex-col">
          <h1 className="text-sm font-black tracking-tight text-amber-500 italic leading-none uppercase">Strategic Dossier</h1>
          <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-1 italic">Malt Fractional Arbitrage v3.0</p>
        </div>
        <div className="flex gap-2">
           <span className="text-[8px] font-black bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400 uppercase tracking-tighter">Confidential</span>
           <button onClick={() => window.print()} className="rounded bg-amber-500 px-3 py-1 text-[9px] font-black text-slate-900 uppercase">PDF</button>
        </div>
      </header>

      <main className="snap-container mt-[53px] mx-auto w-full max-w-[375px] bg-white print:mt-0 print:block print:w-[375px]">

        {/* PILLAR I: THE MACRO THESIS */}
        
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
             <div className="text-right"><p className="text-[12px] font-black text-slate-900">$385.9M MXN</p><p className="text-[9px] text-slate-400 uppercase font-black">Annual GP Target</p></div>
          </div>
        </section>

        {/* 02. INDUSTRIAL DEMAND (481K TON EQUIVALENCE) */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-[32px] font-black text-slate-900 italic leading-[0.85] mb-6 tracking-tighter">480,630 Tons <br/><span className="text-slate-400 font-normal text-[24px]">Equivalent Demand</span></h3>
            <div className="space-y-3">
              {[ {f:"Group A: Whole Grain", e:"181,818", s:["Bev. Extraction", "Cereals", "Vinegar"]},
                 {f:"Group C: Standard Flour", e:"119,618", s:["Industrial Baking", "Pet Health"]},
                 {f:"Group B: Crushed Grits", e:"96,591", s:["Spirits", "Animal Health", "Bars"]},
                 {f:"Group D: Fine Flour", e:"64,566", s:["Instant Bev", "Confectionery"]},
                 {f:"Group E: Roasted Flour", e:"18,038", s:["Specialty Colorants"]} ].map((group, i) => (
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
             <p className="text-[11px] font-black text-amber-500 italic tracking-tighter">Unserved Market Cap</p>
             <p className="text-[14px] font-black italic">$10.2 Billion MXN</p>
          </div>
        </section>

        {/* 03. THE TECHNICAL USP */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200 text-center">
          <div>
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10 border-b border-slate-100 pb-2">03. The Technical USP</h3>
            <h4 className="text-[40px] font-black text-slate-900 italic leading-[0.9] mb-6">"The Enzymatic <br/>Engine."</h4>
            <p className="text-[16px] text-slate-500 italic leading-relaxed px-4 mb-10">Unlike standard brewing malt, B-Grade protein density (&gt;12%) creates a <span className="text-slate-900 font-black">superior functional precursor</span> for technical applications.</p>
            <div className="grid grid-cols-1 gap-4 text-left">
              {[ {s:"Baking", v:"Higher Maillard Precursors (FAN)", d:"Intense browning & faster yeast feeding."},
                 {s:"Distilling", v:"Maximized Diastatic Power", d:"15% higher enzymatic conversion than brewing grade."},
                 {s:"Beverage", v:"Enhanced Nutrient Density", d:"Clean mouthfeel with higher malt-solid solubility."} ].map((usp, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border-l-8 border-amber-500 shadow-sm">
                  <p className="text-[12px] font-black text-slate-900 italic leading-none mb-1">{usp.s}: {usp.v}</p>
                  <p className="text-[11px] text-slate-500 italic leading-tight">{usp.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-slate-900 p-4 rounded-full text-white"><p className="text-[12px] font-black italic">Strategic Pricing: 20% Discount vs. Landed US Imports</p></div>
        </section>

        {/* 04. OPERATIONAL GATES (VALUE-ADD) */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">04. Operational Value Gates</h3>
            <div className="space-y-6">
              {[ {g:"Gate 1: Pre-Refinement", o:"Scalping / Drying / Aspiration", u:"Unlocks Shelf Stability & Clean Stream."},
                 {g:"Gate 2: Fractionation", o:"Indented Separation / De-stoning", u:"Unlocks SKU Diversity (Wholes vs Pieces)."},
                 {g:"Gate 3: Finishing", o:"Fine Milling / Precision Roasting", u:"Unlocks Premium Technical Margins."} ].map((gate, i) => (
                <div key={i} className="relative pl-10 border-l-2 border-slate-200 pb-2">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center font-black text-white text-[10px] italic shadow-lg">{i+1}</div>
                  <p className="text-[14px] font-black text-slate-900 italic leading-none mb-1.5">{gate.g}</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter mb-2">{gate.o}</p>
                  <p className="text-[11px] text-amber-600 italic font-black">{gate.u}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[11px] italic text-slate-400 text-center font-bold border-t border-slate-100 pt-4">Process logic maximizes the extraction of the $17.32 MXN spread.</p>
        </section>

        {/* 05. THE STRATEGIC SHIELD */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-10 border-b border-slate-800 pb-2">05. The Strategic Shield</h3>
            <div className="space-y-8 mt-4">
              {[ {t:"The Border Moat", d:"Rising US labor & rail costs are inflating the 'Landed Import Parity'. Our domestic Chihuahua-MTY-GDL loop is immune."},
                 {t:"Inventory Liquidity", d:"Our 24-hr lead time allows Tier-1 clients to reduce safety stock from 21 days to 3 days, releasing millions in working capital."},
                 {t:"Institutional Lock", d:"Once CoA equivalency is validated in the client's BOM, we become a 'Hard-Coded' ingredient, creating high switching costs."} ].map((moat, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className="text-3xl font-black italic opacity-20 text-white leading-none">{i+1}</div>
                   <div>
                      <p className="text-[14px] font-black text-white italic leading-none mb-2">{moat.t}</p>
                      <p className="text-[12px] text-slate-400 leading-snug italic">{moat.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto p-4 bg-white rounded-2xl text-slate-900 text-center shadow-2xl"><p className="text-[12px] font-black italic uppercase italic">"Budget Certainty in a Volatile Landscape."</p></div>
        </section>

        {/* 06. THE MASS WATERFALL */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">06. Industrial Transformation</h3>
            <div className="space-y-2">
              {[ {l:"Intake: B-Grade Malt", v:1000, c:"bg-slate-900", d:""},
                 {l:"Scalping: Coarse Trash", v:990, c:"bg-slate-900", d:"-1% Loss"},
                 {l:"Aspiration: Dust/Sprouts", v:940, c:"bg-slate-900", d:"-5% Salvage"},
                 {l:"Drying: Brittle Fracture", v:900, c:"bg-slate-900", d:"-4% Humidity"},
                 {l:"Safety Gate: Stones/Metal", v:880, c:"bg-slate-900", d:"-2% Loss"} ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`h-6 ${step.c} rounded-r flex items-center justify-end px-3 font-black text-[10px] text-white italic transition-all`} style={{width: `${step.v/11}%`}}>{step.v}kg</div>
                  <div className="flex-1 flex justify-between items-center pr-2"><span className="text-[10px] font-black italic text-slate-900 leading-none">{step.l}</span><span className="text-[9px] font-bold text-slate-400 italic">{step.d}</span></div>
                </div>
              ))}
              
              <div className="mt-8 pt-4 border-t-2 border-slate-100 relative">
                 <div className="absolute -top-3 left-0 bg-white px-2 text-[10px] font-black text-amber-600 italic tracking-widest uppercase">Strategic Yield Paths</div>
                 
                 <div className="space-y-5 mt-4">
                    {/* PATH A: STANDARD FLOUR */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-end"><p className="text-[9px] font-black text-slate-900 uppercase italic tracking-tighter">Path A: Standard Flour (Full Stream)</p><p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">95% Prod. Yield</p></div>
                      <div className="h-8 bg-slate-900 rounded-r flex items-center justify-center font-black text-[11px] text-white italic shadow-sm transition-all" style={{width: '76%'}}>
                        836kg OUTPUT
                      </div>
                    </div>

                    {/* PATH B: FINE FLOUR */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-end"><p className="text-[9px] font-black text-slate-900 uppercase italic tracking-tighter">Path B: Fine Flour (Full Stream)</p><p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">88% Prod. Yield</p></div>
                      <div className="h-8 bg-slate-700 rounded-r flex items-center justify-center font-black text-[11px] text-white italic shadow-sm transition-all" style={{width: '70%'}}>
                        774kg OUTPUT
                      </div>
                    </div>

                    {/* PATH C: ROASTED + FINE */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-end"><p className="text-[9px] font-black text-slate-900 uppercase italic tracking-tighter">Path C: Specialty Roast (Split Stream)</p><p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">84% Whole / 88% Pieces</p></div>
                      <div className="flex h-8 rounded-r overflow-hidden font-black text-[10px] text-white italic shadow-sm" style={{width: '68%'}}>
                        <div className="h-full bg-amber-600 flex items-center justify-center border-r border-white/20" style={{width: '75%'}}>563kg ROASTED</div>
                        <div className="h-full bg-amber-400 flex items-center justify-center text-slate-900 italic" style={{width: '25%'}}>185kg FINE</div>
                      </div>
                    </div>
                 </div>

                 <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl mt-6">
                    <p className="text-[10px] font-bold text-slate-500 italic text-center leading-tight tracking-tighter">
                      Path Selection is dynamic based on <span className="text-slate-900">Highest Adjusted Profitability ($/Supply-kg)</span> at time of processing.
                    </p>
                 </div>
              </div>
            </div>
          </div>
          <p className="text-[11px] italic text-slate-500 text-center font-black mt-auto underline decoration-amber-500 decoration-2">Volume VII: The Physics of Industrial Transformation.</p>
        </section>

        {/* PILLAR III: TECHNICAL PHYSICS */}

        {/* 07. 1:1 DROP-IN SPECIFICATION */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">07. Technical Physics</h3>
            <h4 className="text-2xl font-black italic mb-6 leading-tight underline decoration-amber-500">CoA Parity Protocol.</h4>
            <div className="space-y-4">
               <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Technical Alpha</p>
                  <p className="text-xs text-slate-300 italic">We match the Diastatic Power (DP) and Alpha-Amylase profiles of US "Brewing-Grade" malts exactly, removing the formulation barrier.</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-800 text-center rounded-xl"><p className="text-[8px] uppercase text-slate-500">Enzymatic</p><p className="text-sm font-black italic text-amber-500">140+ WK</p></div>
                  <div className="p-3 bg-slate-800 text-center rounded-xl"><p className="text-[8px] uppercase text-slate-500">Particle Size</p><p className="text-sm font-black italic text-amber-500">&lt;150µm</p></div>
               </div>
            </div>
          </div>
          <div className="mt-auto bg-white p-3 rounded-lg text-slate-900 text-center shadow-xl"><p className="text-[10px] font-black italic uppercase">Zero-Friction BOM Integration Strategy.</p></div>
        </section>

        {/* 08. THE VALUE-ADD CHAIN */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">08. Engineering the Grain</h3>
            <div className="space-y-6">
              {[ {t:"Cleaning (Scalping)", d:"Removal of 3-5% trash/sprouts to stabilize the 'Purity Stream'."},
                 {t:"Milling (Micronization)", d:"High-speed surface optimization for CPG beverage solubility."},
                 {t:"Roasting (Maillard)", d:"Utilizing high protein precursors for intense umami/color specs."} ].map((step, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-amber-500 pl-4 py-1">
                  <div><p className="text-xs font-black text-slate-900 italic uppercase">{step.t}</p><p className="text-[10px] text-slate-500 italic leading-tight">{step.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[10px] italic text-slate-400 mt-auto">Physical transformation is a <b>Surface Area Optimization</b> play.</p>
        </section>

        {/* 09. SEGMENT-SPECIFIC USPs */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 underline decoration-amber-500 underline-offset-4">09. Segment Advantage</h3>
          <div className="grid grid-cols-1 gap-4">
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 mb-1">Industrial Baking</p>
                <p className="text-[10px] text-slate-500 italic">"The Engine": Naturally high proteases feed yeast and accelerate crust development.</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 mb-1">Instant Beverage</p>
                <p className="text-[10px] text-slate-500 italic">"The Mouthfeel": Removing fibrous husk ensures grittiness-free dissolution.</p>
             </div>
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 mb-1">Colorant Hub</p>
                <p className="text-[10px] text-slate-500 italic">"The Replacement": Natural E150 alternative for 'Clean Label' chocolate/wafer.</p>
             </div>
          </div>
        </section>

        {/* 10. REGULATORY SOVEREIGNTY */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">10. Regulatory Shield</h3>
              <div className="p-6 bg-slate-900 text-white rounded-3xl text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black italic text-4xl leading-none">CLEAN<br/>LABEL</div>
                <h4 className="text-sm font-black text-amber-500 uppercase mb-4 italic">NOM-051 Sovereignty</h4>
                <p className="text-xs text-slate-400 italic leading-relaxed">Our malted flours displace chemical emulsifiers (DATEM), allowing CPGs to market "Natural" status and avoid excess sodium octagons.</p>
              </div>
           </div>
           <div className="mt-8 grid grid-cols-2 gap-2 text-center">
              <div className="p-2 border border-slate-100 rounded italic text-[10px] font-bold text-slate-400 tracking-tighter">NOM-251 Compliance</div>
              <div className="p-2 border border-slate-100 rounded italic text-[10px] font-bold text-slate-400 tracking-tighter">COFEPRIS Certified Maquila</div>
           </div>
        </section>

        {/* PILLAR IV: OPERATIONAL ARCHITECTURE */}

        {/* 11. THE MEOQUI-DELICIAS HUB */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 underline decoration-amber-500 underline-offset-4">11. Logistics Physics</h3>
            <h4 className="text-xl font-black text-slate-900 leading-tight mb-4 italic underline decoration-slate-900 decoration-2">The 53km Corridor.</h4>
            <div className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed italic">By performing <b>Scalping & Aspiration</b> in Delicias (53km from Meoqui), we eliminate 8% waste weight at the source.</p>
              <div className="p-4 bg-slate-100 rounded-2xl border-l-8 border-slate-900 shadow-inner">
                <p className="text-[9px] font-black text-slate-500 uppercase mb-1">Freight Optimization</p>
                <p className="text-xl font-black text-slate-900 italic">1,440 Tons/yr of Trash removed before Long-Haul Freight.</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic">Margin preservation via localized waste exclusion.</p>
        </section>

        {/* 12. MAQUILA GOVERNANCE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 italic">12. Governance Model</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-3xl font-black italic opacity-20">QC</div>
                  <div><p className="text-sm font-black italic">Shadow Quality Control</p><p className="text-xs text-slate-400 italic">We station a Venture Auditor at the 3rd-party mill. We own the Governance, they own the Rollers.</p></div>
               </div>
               <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <p className="text-[9px] font-bold text-slate-500 uppercase mb-2">Pedigree Inheritance</p>
                  <p className="text-xs text-slate-300 italic">Leveraging FSSC 22000 certified finishers in MTY and GDL to bypass 24-month audit lags.</p>
               </div>
            </div>
          </div>
        </section>

        {/* 13. SUPPLY CHAIN RESILIENCE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
          <div>
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">13. Sourcing Resilience</h3>
             <p className="text-xs text-slate-600 leading-relaxed mb-6 italic">Managed redundancy: While Meoqui is the "Primary Glitch," the <b>Asset-Light</b> model allows rapid pivot to secondary streams.</p>
             <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded italic border-l-4 border-slate-300"><span className="text-xs font-black">Tier 1: Meoqui (CH)</span><span className="text-[10px] font-bold text-amber-600 italic">Primary Loop</span></div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded italic border-l-4 border-slate-300 opacity-60"><span className="text-xs font-black">Tier 2: Tlaxcala (MO)</span><span className="text-[10px] font-bold text-slate-500 italic">Risk Fallback</span></div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded italic border-l-4 border-slate-300 opacity-60"><span className="text-xs font-black">Tier 3: El Bajío (Barley)</span><span className="text-[10px] font-bold text-slate-500 italic">Open Market</span></div>
             </div>
          </div>
        </section>

        {/* 14. ZERO-WASTE SYMBIOSIS */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">14. The Dairy Bypass</h3>
              <div className="text-center py-10">
                <p className="text-5xl font-black text-slate-900 leading-none mb-2">$1.35</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-10">Salvage Value (MXN / kg)</p>
                <p className="text-xs text-slate-600 italic leading-tight px-6 underline decoration-amber-500 decoration-2 underline-offset-4 font-bold">"Malt sprouts pay for the Chihuahua factory's lights and labor."</p>
              </div>
           </div>
           <div className="p-4 bg-slate-900 rounded-xl text-white text-center shadow-lg"><p className="text-[9px] font-black uppercase tracking-widest italic text-amber-500">Net OPEX Neutrality Strategy.</p></div>
        </section>

        {/* PILLAR V: COMMERCIAL & FINANCIAL INTEGRITY */}

        {/* 15. UNIT ECONOMICS DEEP-DIVE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-50 border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2 italic">15. Unit Economics Audit</h3>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-[9px] text-left">
                   <thead className="bg-slate-900 text-white font-black italic">
                      <tr><th className="p-2">Component</th><th className="p-2 text-right">MXN/kg</th></tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100 font-bold text-slate-700 italic">
                      <tr><td className="p-2">Raw Material (Buy)</td><td className="p-2 text-right">$3.00</td></tr>
                      <tr><td className="p-2">Freight & Maquila</td><td className="p-2 text-right">$5.20</td></tr>
                      <tr><td className="p-2">Yield Adj + Salvage</td><td className="p-2 text-right">$1.70</td></tr>
                      <tr className="bg-amber-50 text-slate-900 font-black"><td className="p-2">Total Unit COGS</td><td className="p-2 text-right">$9.90</td></tr>
                      <tr className="bg-slate-50 text-slate-400"><td className="p-2">Market LIP (Import)</td><td className="p-2 text-right">$27.32</td></tr>
                   </tbody>
                </table>
              </div>
           </div>
           <p className="text-[9px] text-slate-400 italic mt-6 border-t border-slate-100 pt-2 text-center">Volume XIII: Detailed CAPEX/OPEX Modeling.</p>
        </section>

        {/* 16. THE HIT LIST */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2 underline decoration-amber-500 underline-offset-4 font-bold">16. The GTM Hit List</h3>
              <div className="space-y-4">
                 {[ {n:"Grupo Bimbo", s:"Baking Hub (MTY)", v:"9.0k T"},
                    {n:"Nestlé / Milo", s:"Beverage Hub (GDL)", v:"3.6k T"},
                    {n:"Mondelēz", s:"Confectionery (GDL)", v:"2.7k T"} ].map((h, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <div><p className="text-sm font-black italic text-slate-900">{h.n}</p><p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{h.s}</p></div>
                      <div className="bg-slate-900 text-amber-500 font-black italic px-2 py-1 rounded text-[9px]">{h.v}</div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="p-4 bg-amber-50 rounded-xl border border-amber-200"><p className="text-[10px] italic font-bold text-amber-900 text-center leading-tight tracking-tighter">These 3 Tier-1 accounts absorb 85% of Phase 1 fixed intake capacity.</p></div>
        </section>

        {/* 17. THE 10% SCARCITY RULE */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white">
           <div className="mt-10 text-center">
              <h4 className="text-2xl font-black italic mb-4 tracking-tighter text-amber-500 underline decoration-white underline-offset-8">Strategic Scarcity.</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-10 px-4 italic">"By capping our market share at 10% per segment, we create a First-Mover imperative for our clients while staying under the radar of the Big Two."</p>
              <div className="inline-block p-1 bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                 <div className="bg-slate-900 rounded-full px-8 py-4 border-2 border-white">
                    <p className="text-3xl font-black italic">10%</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Max Segment Cap</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 18. THE MXN SAFE HAVEN */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">18. The FX Hedge</h3>
              <div className="relative h-48 bg-slate-900 rounded-3xl p-6 text-white overflow-hidden shadow-2xl">
                 <h4 className="text-2xl font-black italic mb-2 leading-[0.85] tracking-tighter">The Pesos <br/>Closed Loop.</h4>
                 <p className="text-[10px] text-slate-400 italic leading-relaxed">We sell Budget Certainty. Unlike US importers, we are decoupled from the USD and CBOT barley futures.</p>
                 <div className="absolute bottom-0 right-0 p-4 opacity-10 font-black italic text-4xl">MXN</div>
              </div>
           </div>
           <p className="text-[10px] text-slate-900 italic font-black text-center mt-auto border-t border-slate-50 pt-4 uppercase tracking-widest underline decoration-amber-500">100% Currency Neutral Strategy.</p>
        </section>

        {/* 19. 100-DAY ROADMAP */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-white border-b border-slate-200">
           <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">19. Execution Roadmap</h3>
              <div className="p-4 bg-slate-100 rounded-2xl border-2 border-slate-900 mb-6 flex justify-between items-center">
                 <div><p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Phase 1 CAPEX</p><p className="text-2xl font-black italic text-slate-900">$2.8M <span className="text-xs">MXN</span></p></div>
                 <div className="text-right text-[10px] font-bold italic text-slate-500">Source: Volume XIII</div>
              </div>
              <div className="space-y-4">
                 <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 italic opacity-60"><p className="text-[10px] font-black text-slate-900 min-w-[50px]">D1-30</p><p className="text-[10px] text-slate-500">Meoqui Sourcing & Chihuahua Site Setup.</p></div>
                 <div className="flex gap-4 border-l-2 border-slate-100 pl-4 py-1 italic opacity-60"><p className="text-[10px] font-black text-slate-900 min-w-[50px]">D31-60</p><p className="text-[10px] text-slate-500">Golden Sample CoA Validation (SGS).</p></div>
                 <div className="flex gap-4 border-l-2 border-amber-500 pl-4 py-1 italic"><p className="text-[10px] font-black text-slate-900 min-w-[50px]">D61-100</p><p className="text-[10px] text-slate-900 font-black">Industrial Shipment to Tier-1 Clients.</p></div>
              </div>
           </div>
        </section>

        {/* 20. STRATEGIC EXIT */}
        <section className="snap-slide flex flex-col justify-between p-6 bg-slate-900 text-white">
           <div>
              <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">20. The Endgame</h3>
              <h2 className="text-[34px] font-black italic leading-[0.8] tracking-tighter mb-8 text-white underline decoration-amber-500 decoration-4 underline-offset-8">Exit Liquidity.</h2>
              <div className="grid grid-cols-1 gap-3">
                 <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                    <div><p className="text-[10px] font-black italic">Vertical Re-integration</p><p className="text-[8px] uppercase text-slate-500 font-bold">Heineken / Modelo</p></div>
                    <div className="text-xs font-black italic text-amber-500">8x-12x</div>
                 </div>
                 <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                    <div><p className="text-[10px] font-black italic">BOM Consolidation</p><p className="text-[8px] uppercase text-slate-500 font-bold">Grupo Bimbo</p></div>
                    <div className="text-xs font-black italic text-amber-500">EBITDA</div>
                 </div>
              </div>
           </div>
           <div className="mt-auto p-4 border-t border-slate-800 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest italic text-slate-600">Volume XIV: Path to Institutional Liquidity</p>
           </div>
        </section>

      </main>
    </div>
  );
}
