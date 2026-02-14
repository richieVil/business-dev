"use client";

import React from "react";
import DossierEngineV2 from "@/app/components/DossierEngineV2";

/**
 * BI-0152: ESG CARBON-TRACER
 * Strategic Dossier: 20-Slide Mandate
 */

export default function CarbonTracerDossier() {
  const branding = {
    title: "BI-0152 // CARBON-TRACER",
    subtitle: "US-MEXICO SCOPE 3 COMPLIANCE",
    version: "V2.1-STRATEGIC",
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20business%20proposal%20for%20BI-0152%20Carbon-Tracer%20and%20want%20to%20discuss%20the%20implementation.",
    email: "",
    website: "business-dev-two.vercel.app/carbon-tracer",
  };

  const theme = {
    parchment: "#0A0A0A", // Charcoal/Black
    ink: "#F5F5F5",      // Off-white
    accent: "#FF3B30",   // High-Energy Red
    muted: "#A3A3A3",    // Neutral Gray
  };

  const slides = [
    // --- EXECUTIVE BRIEFING ---
    {
      phase: "01 / PREAMBLE",
      title: "THE MEXICAN\nBRIDGE",
      label: "TESIS CENTRAL",
      render: () => (
        <div className="d-content">
          <p className="d-para">US Public Companies are now legally mandated (<strong>SEC / SB 253</strong>) to report emissions they cannot see: the Mexican Supply Chain.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">STRATEGIC HOOK</div>
            <div className="d-para" style={{ marginBottom: 0 }}><strong>Deloitte Quality at Software Price.</strong> We provide the "Reasonable Assurance" of a manual audit with 85% SaaS margins.</div>
          </div>
          <p className="d-para">We turn a looming <strong>Material Misstatement</strong> risk into a predictable, defensible digital asset.</p>
        </div>
      ),
    },
    {
      phase: "02 / PREAMBLE",
      title: "VISION &\nINTENTION",
      label: "CORE OBJECTIVE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Moving the industry from <strong>"Spend-Based Guesses"</strong> to <strong>"Activity-Based Ground Truth"</strong> via direct fiscal ingestion.</p>
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-metric-unit">90%</div>
              <div className="d-metric-label">AI LEVERAGE</div>
            </div>
            <div className="d-card d-card-dark">
              <div className="d-metric-unit">VENTURE</div>
              <div className="d-metric-label">RISK CAPITAL</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>We don't just track carbon; we <strong>index the industrial heartbeat</strong> of the US-Mexico corridor.</p>
        </div>
      ),
    },

    // --- PROBLEM & FRICTION ---
    {
      phase: "03 / MARKET PAIN",
      title: "THE INVISIBLE\nTAX",
      label: "QUANTIFYING LEAKAGE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Data-blindness in the Mexican Tier 1/2 cluster is no longer an "operational quirk"—it is a <strong>billion-dollar liability</strong>.</p>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit">USD 1M+</div>
            <div className="d-metric-label">EST. SEC INVESTIGATION & AUDIT COSTS</div>
          </div>
          <p className="d-para">OEMs are currently paying "Big 4" premiums for <strong>stale, unverified spreadsheets</strong> that offer zero legal protection.</p>
        </div>
      ),
    },
    {
      phase: "04 / MARKET PAIN",
      title: "SURVEY\nFATIGUE",
      label: "OPERATIONAL FRICTION",
      render: () => (
        <div className="d-content">
          <p className="d-para">The "Excel Audit" is a failing strategy. Mexican plant managers prioritize <strong>production over paperwork</strong>.</p>
          <div className="d-card">
            <div className="d-list-item"><div className="d-dot" /> 60% Data Abandonment Rate</div>
            <div className="d-list-item"><div className="d-dot" /> "Garbage In, Garbage Out" modeling</div>
            <div className="d-list-item"><div className="d-dot" /> 160+ man-hours/year per facility</div>
          </div>
          <p className="d-para">We replace "Chasing People" with "Querying Pipes," eliminating the <strong>Behavioral Redirection</strong> barrier.</p>
        </div>
      ),
    },

    // --- TECHNICAL USP ---
    {
      phase: "05 / THE ENGINE",
      title: "THE CONTEXT\nENGINE",
      label: "PROPRIETARY INGESTION",
      render: () => (
        <div className="d-content">
          <p className="d-para">Global SaaS fails in Mexico because it expects standardized APIs. BI-0152 ingests the <strong>"Digital Reality"</strong> of the border.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">CFDI PARSING</div>
            <div className="d-para" style={{ marginBottom: 0 }}>Automatic extraction of <strong>XML Tax Receipts</strong> (SAT) for energy, fuel, and refrigerant codes.</div>
          </div>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">CFE INTEGRATION</div>
            <div className="d-para" style={{ marginBottom: 0 }}>Proprietary logic for 54+ regional <strong>CFE Tariffs</strong> (GDMTO/GDMTH) often invisible to US platforms.</div>
          </div>
        </div>
      ),
    },
    {
      phase: "06 / THE ENGINE",
      title: "SPECIFICATION\nPARITY",
      label: "TECHNICAL BENCHMARK",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-grid-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px', marginBottom: '8px' }}>
              <div className="d-metric-label">FEATURE</div>
              <div className="d-metric-label" style={{ textAlign: 'right' }}>BI-0152</div>
            </div>
            {[
              { f: "Data Source", v: "Fiscal XML" },
              { f: "Accuracy", v: "98% Verified" },
              { f: "Chain of Custody", v: "Immutable" },
              { f: "Reporting", v: "Activity-Based" },
              { f: "Bilingual Support", v: "Native" }
            ].map((row, i) => (
              <div key={i} className="d-grid-2" style={{ marginBottom: '4px' }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{row.f}</div>
                <div style={{ fontSize: '10px', fontWeight: 700, textAlign: 'right', color: 'var(--accent)' }}>{row.v}</div>
              </div>
            ))}
          </div>
          <p className="d-para" style={{ fontSize: '11px' }}>Generic SaaS (Salesforce/Watershed) relies on <strong>"Spend-Based Averages,"</strong> which are legally indefensible under SEC scrutiny.</p>
        </div>
      ),
    },

    // --- MARKET INTELLIGENCE ---
    {
      phase: "07 / INTELLIGENCE",
      title: "GEOGRAPHIC\nDOMINANCE",
      label: "SEGMENT PRIORITIZATION",
      render: () => (
        <div className="d-content">
          <p className="d-para">We prioritize the <strong>High-Density Industrial Corridors</strong> where US OEMs have the highest "Materiality Risk."</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">BAJÍO CORRIDOR</div>
              <div style={{ fontSize: '10px', fontWeight: 700 }}>Automotive & Tier 1 (QRO, GTO, AGS)</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">NORTHERN BORDER</div>
              <div style={{ fontSize: '10px', fontWeight: 700 }}>Aerospace & Electronics (MTY, CDJ, TIJ)</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>This clustering allows our localized <strong>Success Team</strong> to manage 500+ nodes with minimal travel overhead.</p>
        </div>
      ),
    },
    {
      phase: "08 / INTELLIGENCE",
      title: "THE GOLDEN\nNUMBER",
      label: "KPI GOVERNANCE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Survival is not governed by ARR, but by <strong>NCV (Node Coverage Velocity)</strong>.</p>
          <div className="d-card d-card-dark" style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div className="d-metric-unit" style={{ fontSize: '42px', color: 'var(--accent)' }}>14 DAYS</div>
            <div className="d-metric-label">TARGET NCV TO 80% CONNECTIVITY</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>If NCV {'>'} 60 days, the reporting window closes and the product fails. <strong>Velocity is our primary defense.</strong></p>
        </div>
      ),
    },
    {
      phase: "09 / INTELLIGENCE",
      title: "BRUTALISTA\nMATRIX",
      label: "COMPETITOR VIEW",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">LEGACY (BIG 4)</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>High Trust, but Manual/Slow ($250k+ per audit). Non-Scalable.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">GENERIC SAAS (SALESFORCE)</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Low Friction, but "Spend-Based" guesses. Audit-Vulnerable.</div>
          </div>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">BI-0152</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Automated Fiscal Evidence. Native Cross-Border Logic. 98% Accuracy.</div>
          </div>
        </div>
      ),
    },
    {
      phase: "10 / INTELLIGENCE",
      title: "THE DATA\nMOAT",
      label: "DATA PERSISTENCE",
      render: () => (
        <div className="d-content">
          <p className="d-para">We don't sell a dashboard; we build an <strong>Immutable Ledger</strong> of Mexican industrial history.</p>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit">24 MONTHS</div>
            <div className="d-metric-label">TIME TO TOTAL CLIENT LOCK-IN</div>
          </div>
          <p className="d-para">Once 2+ years of verified activity data are stored, the <strong>cost of switching</strong> is the loss of historical compliance defensibility.</p>
        </div>
      ),
    },

    // --- THE MACHINE ---
    {
      phase: "11 / ARCHITECTURE",
      title: "AUDIT-PROOF\nSTACK",
      label: "MVP CRITICAL PATH",
      render: () => (
        <div className="d-content">
          <p className="d-para">We utilize a <strong>High-Frequency Data Refinery</strong> architecture to maintain 90% AI leverage and near-zero marginal costs.</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">INGESTION</div>
              <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Belvo/Finerio API for SAT/CFE Portals</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">COGNITION</div>
              <div style={{ fontSize: '10px', color: 'var(--muted)' }}>GPT-4o + LayoutLM Semantic Parser</div>
            </div>
          </div>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono" style={{ color: 'var(--parchment)', opacity: 0.6 }}>SECURITY BASELINE</div>
            <div style={{ fontSize: '11px', fontWeight: 700 }}>AWS GOVCLOUD + IMMUTABLE QLDB LEDGER</div>
          </div>
        </div>
      ),
    },
    {
      phase: "12 / ARCHITECTURE",
      title: "10,000 XML\nASSET",
      label: "R&D PIPELINE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Our core IP is the <strong>"Mexican Context Engine."</strong> We don't just use AI; we engineer the training set.</p>
          <div className="d-card">
            <div className="d-list-item"><div className="d-dot" /> <strong>Phase 1:</strong> Acquire 10,000+ anonymized CFDI XMLs.</div>
            <div className="d-list-item"><div className="d-dot" /> <strong>Phase 2:</strong> Manual tagging by Mexican Fiscal Auditors (CPAs).</div>
            <div className="d-list-item"><div className="d-dot" /> <strong>Phase 3:</strong> Regional "Grid Intensity" mapping (54 CFE Zones).</div>
          </div>
          <p className="d-para" style={{ fontSize: '11px' }}>This genesis creates a <strong>Proprietary Context</strong> that generic LLMs cannot replicate.</p>
        </div>
      ),
    },
    {
      phase: "13 / ARCHITECTURE",
      title: "CAPEX &\nGOVERNANCE",
      label: "INVESTMENT & QA",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono" style={{ color: 'var(--accent)' }}>INITIAL INVESTMENT</div>
            <div className="d-metric-unit">USD 1.5M</div>
            <div className="d-metric-label">SEED ROUND TARGET</div>
          </div>
          <p className="d-para" style={{ fontSize: '11px', marginTop: '12px' }}>Capital is deployed into <strong>Asset Genesis</strong> (The 10k XML Training Set) and bridging the <strong>Fortune 500 Float</strong>.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">SHADOW OVERSIGHT</div>
            <div className="d-para" style={{ fontSize: '11px', margin: 0 }}>We maintain <strong>5% Human-in-the-Loop</strong> spot checks to ensure "Reasonable Assurance" for SEC legal filings.</div>
          </div>
        </div>
      ),
    },

    // --- COMMERCIAL LOGIC ---
    {
      phase: "14 / ECONOMICS",
      title: "UNIT\nECONOMICS",
      label: "WATERFALL ANALYSIS",
      render: () => (
        <div className="d-content">
          <p className="d-para">We model a <strong>$350K ACV</strong> based on 1 US OEM + 150 Mexican Supplier Nodes.</p>
          <div className="d-card">
            <div className="d-grid-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px', marginBottom: '8px' }}>
              <div className="d-metric-label">COST COMPONENT</div>
              <div className="d-metric-label" style={{ textAlign: 'right' }}>EST. (YR 1)</div>
            </div>
            {[
              { c: "Sales & Marketing (CAC)", v: "($85K)" },
              { c: "Onboarding (Success Team)", v: "($15K)" },
              { c: "API & Data Pipes (Belvo)", v: "($18K)" },
              { c: "Verification (Human-QA)", v: "($20K)" },
              { c: "GovCloud & Security", v: "($25K)" }
            ].map((row, i) => (
              <div key={i} className="d-grid-2" style={{ marginBottom: '4px' }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{row.c}</div>
                <div style={{ fontSize: '10px', fontWeight: 700, textAlign: 'right' }}>{row.v}</div>
              </div>
            ))}
          </div>
          <div className="d-grid-2">
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">50%</div>
              <div className="d-metric-label">GP YR 1</div>
            </div>
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">85%</div>
              <div className="d-metric-label">GP YR 2+</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      phase: "15 / ECONOMICS",
      title: "PROFIT\nVELOCITY",
      label: "ALLOCATION MERITOCRACY",
      render: () => (
        <div className="d-content">
          <p className="d-para">Capital is allocated strictly by <strong>Profit Velocity</strong>—favoring clusters with the lowest Success-overhead.</p>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">DENSITY STRATEGY</div>
            <div style={{ fontSize: '11px', fontWeight: 700 }}>1 Success Architect : 500 Nodes</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>By prioritizing the <strong>Bajío and Northern Border</strong> clusters, we achieve a Revenue-per-Employee ratio 5x higher than legacy ESG consulting.</p>
        </div>
      ),
    },
    {
      phase: "16 / ECONOMICS",
      title: "VALLEY OF\nDEATH",
      label: "CASHFLOW STRESS TEST",
      render: () => (
        <div className="d-content">
          <p className="d-para">The primary survival risk is the <strong>Fortune 500 Net-90 Float</strong> versus our Net-30 OpEx.</p>
          <div className="d-card d-card-accent" style={{ background: 'rgba(255, 59, 48, 0.1)' }}>
            <div className="d-tag-mono">CRITICAL DIP (MONTH 16)</div>
            <div className="d-metric-unit">USD 430K</div>
            <div className="d-metric-label" style={{ color: 'var(--accent)' }}>CUMULATIVE CASH BOTTOM</div>
          </div>
          <p className="d-para" style={{ fontSize: '11px', marginTop: '12px' }}>We bridge this gap via <strong>Implementation Fees</strong> on signature (Net-15) and <strong>Venture Debt</strong> to factor OEM receivables.</p>
        </div>
      ),
    },

    // --- EXECUTION ---
    {
      phase: "17 / EXECUTION",
      title: "180-DAY\nBRIDGE",
      label: "ACTIVATION ROADMAP",
      render: () => (
        <div className="d-content">
          <p className="d-para">We move from <strong>Contract to Compliance</strong> in three distinct 60-day sprints.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">DAYS 1-60: DIAGNOSTIC</div>
            <div style={{ fontSize: '11px' }}>Alpha Ingestion for top 10% suppliers; baseline gap analysis.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">DAYS 61-120: GAUNTLET</div>
            <div style={{ fontSize: '11px' }}>US IT-Security review and "e.firma" trust-building in Mexico.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">DAYS 121-180: ROLLOUT</div>
            <div style={{ fontSize: '11px' }}>Full API connectivity across the 150+ supplier node cluster.</div>
          </div>
        </div>
      ),
    },
    {
      phase: "18 / EXECUTION",
      title: "TROJAN HORSE\nENTRY",
      label: "MARKET PENETRATION",
      render: () => (
        <div className="d-content">
          <p className="d-para">We do not sell "Software"; we sell a <strong>30-Day Risk Diagnostic</strong> to bypass the Procurement Block.</p>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">THE "CARBON GAP" AUDIT</div>
            <div className="d-para" style={{ fontSize: '11px', margin: 0 }}>We ingest 6 months of historical data to show the OEM exactly where their <strong>Materiality Risks</strong> are hidden. Once the "Blind Spot" is visualized, the SaaS subscription becomes a mandatory legal shield.</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>This <strong>Audit-Based Entry</strong> lowers the barrier to "Yes" by proving value before requiring full ERP integration.</p>
        </div>
      ),
    },

    // --- ENDGAME ---
    {
      phase: "19 / ENDGAME",
      title: "STRATEGIC\nEXIT",
      label: "LIQUIDITY TRIGGERS",
      render: () => (
        <div className="d-content">
          <p className="d-para">We position BI-0152 for acquisition by global entities seeking to own the <strong>Supply Chain Data Pipeline</strong>.</p>
          <div className="d-card">
            <div className="d-tag-mono">TARGET ACQUIRERS</div>
            <div style={{ fontSize: '11px', fontWeight: 700 }}>Salesforce (Net Zero Cloud) // Watershed // MSCI // S&P Global</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-metric-unit">12X</div>
              <div className="d-metric-label">REV MULTIPLE</div>
            </div>
            <div className="d-card d-card-dark">
              <div className="d-metric-unit">USD 20M</div>
              <div className="d-metric-label">EXIT ARR TARGET</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px', fontSize: '11px' }}>The "Utility" status of our <strong>Mexican Context Logic</strong> commands a premium over generic ESG dashboards.</p>
        </div>
      ),
    },
    {
      phase: "20 / MANDATE",
      title: "THE\nMANDATE",
      label: "NEXT STEPS",
      render: () => (
        <div className="d-content">
          <p className="d-para">The architecture is finalized. Success depends on <strong>Velocity of Ingestion</strong> and <strong>Asset Lock</strong>.</p>
          <div className="d-card d-card-accent">
            <div className="d-list-item"><div className="d-dot" /> <strong>Asset Lock:</strong> Secure proprietary Grid Factor IP.</div>
            <div className="d-list-item"><div className="d-dot" /> <strong>Profit Velocity:</strong> Target $2.5M GP by Year 3.</div>
            <div className="d-list-item"><div className="d-dot" /> <strong>Expansion:</strong> Activate "Reduction Marketplace."</div>
          </div>
          <div className="d-card d-card-dark" style={{ marginTop: 'auto' }}>
            <div className="d-tag-mono" style={{ color: 'var(--accent)' }}>90-DAY MILESTONE</div>
            <div style={{ fontSize: '12px', fontWeight: 900 }}>LAUNCH ALPHA PILOT WITH US AUTO OEM (QUERÉTARO)</div>
          </div>
        </div>
      ),
    },
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
