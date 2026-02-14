'use client';

import React, { useEffect } from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function CtpatSentinelDossier() {
  // Robust Title Injection
  useEffect(() => {
    const title = "C-TPAT Sentinel - Strategic Dossier";
    document.title = title;
    // Force override for some browser environments
    const metaTitle = document.querySelector('title');
    if (metaTitle) metaTitle.innerText = title;
  }, []);

  const branding = {
    title: "C-TPAT SENTINEL",
    subtitle: "Autonomous Border Compliance",
    version: "V1.04-BLUEPRINT"
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20have%20reviewed%20the%20BI-0153%20C-TPAT%20Sentinel%20dossier%20and%20request%20a%20technical%20briefing.",
    email: "architect@business-dev.com",
    website: "sentinel.supplychain.ai"
  };

  const theme = {
    parchment: "#FFFFFF",
    ink: "#0F172A",
    accent: "#2563EB",
    muted: "#475569"
  };

  const slides = [
    {
      phase: "S01 // THE CATALYST",
      title: "EXECUTIVE\nBRIEFING",
      label: "Project ID: BI-0153",
      render: () => (
        <div className="d-content">
          <p className="d-para">Global trade is transitioning from <strong>"Paper-Based Trust"</strong> to <strong>"Cryptographic Evidence."</strong> Sentinel is the Edge-AI layer automating this shift.</p>
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">The Tesis</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Replacing manual guard logs with an <strong>Automated Census</strong> of border transits to secure "Fast Lane" credentials.</p>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">2025</div>
              <div className="d-metric-label">CBP Mandate</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">14 MO</div>
              <div className="d-metric-label">Opportunity Window</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "WHY NOW?\nTHE PIVOT",
      label: "Strategic Rationale",
      render: () => (
        <div className="d-content">
          <p className="d-para">The 2025 CBP Modernization Mandate creates a <strong>regulatory vacuum</strong> that legacy vendors cannot fill with manual guards.</p>
          <div className="d-card">
            <div className="d-tag-mono">The Vision</div>
            <p className="d-para" style={{ marginBottom: 0 }}>To become the <strong>"Visa of Global Compliance,"</strong> digitizing the movement of liability across all border nodes.</p>
          </div>
          <div className="d-list-item"><div className="d-dot" /> Nearshoring volume up 30%</div>
          <div className="d-list-item"><div className="d-dot" /> Incumbents: Vertically bloated/slow</div>
          <div className="d-list-item"><div className="d-dot" /> Target: Fast-Lane Predictability</div>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "THE INVISIBLE\nTAX (COI)",
      label: "Cost of Inaction Audit",
      render: () => (
        <div className="d-content">
          <p className="d-para">Doing nothing costs the average logistics node <strong>142,000 USD/year</strong> in accepted friction leakage.</p>
          <div className="d-card-dark d-card">
            <div className="d-metric-unit">11,833 USD</div>
            <div className="d-metric-label">Monthly Operational Drag</div>
          </div>
          <div className="d-list-item"><div className="d-dot" /> 32k USD: Idle Driver/Fuel Labor</div>
          <div className="d-list-item"><div className="d-dot" /> 45k USD: Audit Prep & Recon</div>
          <div className="d-list-item"><div className="d-dot" /> 65k USD: Provisioned Penalties</div>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "STATUS QUO\nFAILURE",
      label: "Manual Log Vulnerability",
      render: () => (
        <div className="d-content">
          <p className="d-para">Current protocols rely on <strong>"Sampling"</strong> (&lt;15%) rather than <strong>"Census"</strong> (100%), creating a systematic liability gap.</p>
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">The Pencil-Whip Risk</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Human guards falsify logs to clear traffic jams. <strong>85% of cargo enters the network with zero deep-verification.</strong></p>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">82%</div>
              <div className="d-metric-label">Guard Accuracy</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">100%</div>
              <div className="d-metric-label">Corruption Risk</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "TECHNICAL\nUSP",
      label: "Specification Parity",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-grid-2" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>
              <div className="d-metric-label">Metric</div>
              <div className="d-metric-label">Sentinel (AI)</div>
            </div>
            <div className="d-grid-2" style={{ paddingTop: '8px' }}>
              <div className="d-para" style={{ marginBottom: 0 }}>Latency</div>
              <div className="d-tag-mono" style={{ fontSize: '12px' }}>&lt; 1.5 SEC</div>
            </div>
            <div className="d-grid-2">
              <div className="d-para" style={{ marginBottom: 0 }}>Accuracy</div>
              <div className="d-tag-mono" style={{ fontSize: '12px' }}>99.6%</div>
            </div>
            <div className="d-grid-2">
              <div className="d-para" style={{ marginBottom: 0 }}>Coverage</div>
              <div className="d-tag-mono" style={{ fontSize: '12px' }}>100% Census</div>
            </div>
          </div>
          <p className="d-para">We substitute the <strong>"Pencil-Whip"</strong> of manual logs with an <strong>Immutable Forensic Ledger.</strong></p>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "UNIT OF\nVALUE",
      label: "The Validated Pass-Through",
      render: () => (
        <div className="d-content">
          <p className="d-para">We do not sell cameras; we sell the <strong>Validated Pass-Through (VPT)</strong>—a single, cryptographically verified gate transaction.</p>
          <div className="d-card-dark d-card">
            <div className="d-tag-mono">The Metric</div>
            <div className="d-metric-unit">COMPLIANCE HOURS</div>
            <div className="d-metric-label">Saved per month</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>We convert a <strong>"Variable Risk"</strong> (Human Error) into a <strong>"Fixed Asset"</strong> (Digital Evidence).</p>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "ECOSYSTEM\nMAP",
      label: "Stakeholder Decision Logic",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">The Champion</div>
            <div className="d-para" style={{ marginBottom: 0 }}><strong>VP of Compliance:</strong> KPIs tied to Zero-Defect audits.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Blocker</div>
            <div className="d-para" style={{ marginBottom: 0 }}><strong>Regional Ops:</strong> Incentivized by "Units Moved." Fears downtime.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Influencer</div>
            <div className="d-para" style={{ marginBottom: 0 }}><strong>CBP SCSS Officers:</strong> Set the re-validation standards.</div>
          </div>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "SUBSTITUTION\nAUDIT",
      label: "Market Entry Physics",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">Track A: Direct Substitution</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Replacing the <strong>"3PL Security/Compliance"</strong> line item. No new budget required.</p>
          </div>
          <div className="d-card d-card">
            <div className="d-tag-mono">Track B: Behavioral Redirection</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Moving from <strong>"Stop-and-Inspect"</strong> to <strong>"Drive-Through-by-Exception."</strong></p>
          </div>
          <p className="d-para">We frame the transition as <strong>"Upskilling"</strong> the guard force from entry-clerk to security-auditor.</p>
        </div>
      )
    },
    {
      phase: "S01 // THE CATALYST",
      title: "ENTRY\nMANEUVER",
      label: "Audit-Based Entry Strategy",
      render: () => (
        <div className="d-content">
          <div className="d-card-dark d-card">
            <div className="d-tag-mono">The Trojan Horse</div>
            <div className="d-metric-unit">GAP ANALYSIS</div>
            <div className="d-metric-label">Free Retrospective Audit</div>
          </div>
          <p className="d-para">We offer a 48-hour <strong>"Shadow Audit"</strong> of existing video feeds to prove the human error rate before a contract is signed.</p>
          <div className="d-list-item"><div className="d-dot" /> Zero-Impact Pilot</div>
          <div className="d-list-item"><div className="d-dot" /> Bypasses IT Security Block</div>
          <div className="d-list-item"><div className="d-dot" /> Creates "Liability Panic"</div>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "TAM: UNIT\nARITHMETIC",
      label: "Total Addressable Market Physics",
      render: () => (
        <div className="d-content">
          <p className="d-para">TAM is calculated by applying the <strong>Unit Yield</strong> to the global volume of regulated transit nodes.</p>
          <div className="d-card">
            <div className="d-metric-label">Global Regulated Nodes</div>
            <div className="d-metric-unit">250,000</div>
            <p className="d-para" style={{ fontSize: '10px', marginTop: '4px' }}>Est. Manufacturing & 3PL Gateways globally requiring Tier-1 Compliance.</p>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">32.4k</div>
              <div className="d-metric-label">USD Yield/Node</div>
            </div>
            <div className="d-card-dark d-card">
              <div className="d-metric-unit">8.1B USD</div>
              <div className="d-metric-label">Global TAM</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '8px' }}>Logic: 250k Units &times; 32,400 USD (Avg Node ARPU) = <strong>8.1B USD Gross Ceiling.</strong></p>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "SAM: SEGMENTED\nOPPORTUNITY",
      label: "Serviceable Market (North America)",
      render: () => (
        <div className="d-content">
          <p className="d-para">SAM focuses on the <strong>42,000 High-Velocity Lanes</strong> in the NAFTA/USMCA corridors.</p>
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">Segment A: JIT Manufacturers</div>
            <div className="d-para" style={{ marginBottom: 0 }}>24,000 Lanes (Nearshore Automotive/Electronics).</div>
          </div>
          <div className="d-card d-card">
            <div className="d-tag-mono">Segment B: Tier-1 Forwarders</div>
            <div className="d-para" style={{ marginBottom: 0 }}>18,000 Lanes (Global 3PL Hubs: DHL, DSV, K&N).</div>
          </div>
          <div className="d-card-dark d-card" style={{ marginTop: '8px' }}>
            <div className="d-metric-unit">1.36B USD</div>
            <div className="d-metric-label">Total Annual SAM</div>
          </div>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "THE GOLDEN\nNUMBER",
      label: "Shadow Audit Reliance (SAR)",
      render: () => (
        <div className="d-content">
          <p className="d-para">The single metric governing survival is the <strong>SAR Index</strong>: the % of transits requiring human intervention.</p>
          <div className="d-card-accent d-card">
            <div className="d-metric-unit">&lt; 1.5%</div>
            <div className="d-metric-label">Elite Range (Venture Scale)</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">21 DAYS</div>
              <div className="d-metric-label">Target NCV</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">&gt; 12%</div>
              <div className="d-metric-label">Death Range</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "REVENUE\nPHYSICS",
      label: "Fiscal Ingestion Model",
      render: () => (
        <div className="d-content">
          <div className="d-card-dark d-card">
            <div className="d-metric-unit">0.75 USD</div>
            <div className="d-metric-label">Fee per Transit (VSE)</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">7.5k USD</div>
              <div className="d-metric-label">Setup Fee</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">450 USD</div>
              <div className="d-metric-label">Monthly Node Fee</div>
            </div>
          </div>
          <p className="d-para">Pricing is decoupled from seats and anchored to <strong>Operational Velocity</strong>. As trucks move, revenue scales.</p>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "DEFENSIVE\nMOATS",
      label: "Competitive Resilience",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">Moat A: The Vault</div>
            <p className="d-para" style={{ marginBottom: 0 }}>5-year historical ledger for CBP. <strong>Switching creates a Data Void.</strong></p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Moat B: The Workflow Lock</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Integration into WMS/ERP. <strong>Sentinel becomes a "Vital Organ."</strong></p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Moat C: SHA-256 Ledger</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Cryptographic Sequence of Custody between nodes.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S02 // THE LOGIC",
      title: "COMPETITOR\nBRUTALISTA",
      label: "The Specification Gap",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">Manual Guard</div>
              <p className="d-para" style={{ fontSize: '10px' }}>High Friction. SUSCEPTIBLE TO BRIBERY.</p>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Legacy OCR</div>
              <p className="d-para" style={{ fontSize: '10px' }}>Reads text; IGNORES TAMPER INTEGRITY.</p>
            </div>
          </div>
          <div className="d-card-dark d-card" style={{ marginTop: '8px' }}>
            <div className="d-tag-mono">Sentinel (AI)</div>
            <p className="d-para" style={{ marginBottom: 0 }}>100% Census + Forensic Integrity + Immutable Ledger.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "MVP CRITICAL\nPATH",
      label: "Implementation Milestone",
      render: () => (
        <div className="d-content">
          <p className="d-para">The critical path is a <strong>72-hour deployment</strong> from signature to live node verification.</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">30 DAYS</div>
              <div className="d-metric-label">Shadow Calibration</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">99.6%</div>
              <div className="d-metric-label">Target Accuracy</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>We utilize <strong>Docker/Balena</strong> to treat 1,000 gates as a single programmable cluster.</p>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "EDGE-FIRST\nARCHITECTURE",
      label: "Technical Stack v1.0",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">The Eyes (Edge)</div>
            <div className="d-list-item"><div className="d-dot" /> NVIDIA TensorRT / YOLOv8</div>
            <div className="d-list-item"><div className="d-dot" /> &lt; 350ms Local Inference</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Memory (Cloud)</div>
            <div className="d-list-item"><div className="d-dot" /> AWS GovCloud (FedRAMP High)</div>
            <div className="d-list-item"><div className="d-dot" /> Amazon QLDB (Immutable Ledger)</div>
          </div>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "ASSET\nGENESIS",
      label: "IP Construction Manual",
      render: () => (
        <div className="d-content">
          <p className="d-para">We convert <strong>"Visual Noise"</strong> into <strong>"Regulatory Signal"</strong> through a proprietary refining plant.</p>
          <div className="d-card-accent d-card">
            <div className="d-metric-unit">1.5M</div>
            <div className="d-metric-label">Labeled Frame Target</div>
          </div>
          <div className="d-list-item"><div className="d-dot" /> 1.50 USD "Laredo Bounty" per Grit image</div>
          <div className="d-list-item"><div className="d-dot" /> Adversarial Training (GAN) for Tamper Detection</div>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "KNOWLEDGE\nVAULT",
      label: "Model Traceability",
      render: () => (
        <div className="d-content">
          <p className="d-para">We maintain a <strong>Regulatory Correlation Document</strong> linking every AI weight to a specific C-TPAT MSC rule.</p>
          <div className="d-card-dark d-card">
            <div className="d-tag-mono">The Asset Lock</div>
            <p className="d-para" style={{ marginBottom: 0 }}>The "Construction Manual" survives personnel turnover; the <strong>Inference Logic</strong> is documented to the physics level.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "SHADOW\nOVERSIGHT",
      label: "Operational Governance",
      render: () => (
        <div className="d-content">
          <p className="d-para">We achieve 85%+ AI Leverage without sacrificing zero-day audit readiness through <strong>Confidence-Triggered Escalation.</strong></p>
          <div className="d-card">
            <div className="d-tag-mono">RSA Protocol</div>
            <div className="d-metric-unit">&lt; 60 SEC</div>
            <div className="d-metric-label">Human Resolution Target</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>The <strong>HITL Signature</strong> ensures commercial liability remains with the decision-maker, not the code.</p>
        </div>
      )
    },
    {
      phase: "S03 // THE MACHINE",
      title: "FOUNDER DNA\nSPECS",
      label: "Technical Leadership Gear-Ratio",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">CEO: The Compliance Lobbyist</div>
            <p className="d-para" style={{ fontSize: '10px' }}>10Y in Global Trade. Secures the "Regulatory Blessing."</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">CTO: The Edge Veteran</div>
            <p className="d-para" style={{ fontSize: '10px' }}>Deep CV exp in "Industrial Grit" (Laredo at 2 AM).</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">CRO: The Logistics Lifer</div>
            <p className="d-para" style={{ fontSize: '10px' }}>Knows how to navigate Fortune 500 Net-90 Mazes.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "COMMERCIAL\nLOGIC",
      label: "Unit Economic Audit",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card-dark d-card">
              <div className="d-metric-unit">32k USD</div>
              <div className="d-metric-label">Per Customer CAC</div>
            </div>
            <div className="d-card-dark d-card">
              <div className="d-metric-unit">4.4x</div>
              <div className="d-metric-label">LTV / CAC Ratio</div>
            </div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Year 3 Performance</div>
            <div className="d-metric-unit">1,925 USD</div>
            <div className="d-metric-label">Adj. Profit / Node / Mo</div>
          </div>
          <p className="d-para">The model achieves <strong>71% Net Margin</strong> post-calibration by decoupling growth from human labor.</p>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "ALLOCATION\nMERITOCRACY",
      label: "Profit Velocity Rules",
      render: () => (
        <div className="d-content">
          <p className="d-para">We deploy capital where the <strong>Cash-to-Cash</strong> cycle is shortest.</p>
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">Priority 1 (60% Budget)</div>
            <p className="d-para" style={{ marginBottom: 0 }}><strong>JIT Manufacturers:</strong> Fastest velocity, highest localized pain.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Priority 3 (10% Budget)</div>
            <p className="d-para" style={{ marginBottom: 0 }}><strong>Trophy Ports:</strong> High prestige, but stagnant sales cycles (18mo+).</p>
          </div>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "EXPANSION\nMULTIPLIER",
      label: "Net Dollar Retention (NDR)",
      render: () => (
        <div className="d-content">
          <div className="d-card-dark d-card">
            <div className="d-metric-unit">125%</div>
            <div className="d-metric-label">NDR Target by Year 2</div>
          </div>
          <div className="d-list-item"><div className="d-dot" /> +15%: Viral Node Expansion</div>
          <div className="d-list-item"><div className="d-dot" /> +10%: "7-Point" Module Stacking</div>
          <p className="d-para" style={{ marginTop: '12px' }}>Revenue expands autonomously as the client deepens their dependency on the <strong>Forensic Vault.</strong></p>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "VALLEY OF\nDEATH",
      label: "18-Month Cashflow",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent d-card">
            <div className="d-metric-unit">MONTH 13</div>
            <div className="d-metric-label">The Abyssal Point</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Cumulative Bottom</div>
            <div className="d-metric-unit" style={{ color: '#dc2626' }}>-920k USD</div>
            <div className="d-metric-label">Liquidity Deficit</div>
          </div>
          <p className="d-para">We utilize <strong>Invoice Factoring</strong> and <strong>Mobilization Fees</strong> to bridge the Fortune 500 Net-90/135 lag.</p>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "BRIDGING THE\nGAP",
      label: "Liquidity Engineering",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">Tactic A: Mobilization Fee</div>
            <p className="d-para" style={{ fontSize: '10px' }}>50% of Setup ($3,750) due Net-15 on signature.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Tactic B: Invoice Factoring</div>
            <p className="d-para" style={{ fontSize: '10px' }}>Selling Net-90 invoices at 3% discount for Net-3 cash.</p>
          </div>
          <p className="d-para">We use the <strong>Credit Worthiness</strong> of our customers as a high-speed financing vehicle.</p>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "INVISIBLE\nECONOMICS",
      label: "Hidden Margin Expansion",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">FX Arbitrage</div>
              <p className="d-para" style={{ fontSize: '10px' }}>Revenue in USD; RSA Labor in MXN/PHP. +6% Margin.</p>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Data Salvage</div>
              <p className="d-para" style={{ fontSize: '10px' }}>Selling "Border Pulse" indices to Macro-Analysts. 100% Margin.</p>
            </div>
          </div>
          <div className="d-card-accent d-card" style={{ marginTop: '8px' }}>
            <div className="d-tag-mono">Regulatory Tailwinds</div>
            <p className="d-para" style={{ marginBottom: 0 }}><strong>ESG Offset Reports:</strong> Lowering real cost via idle-time reduction credits.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "THE FUNDING\nMANDATE",
      label: "Series A Trigger",
      render: () => (
        <div className="d-content">
          <div className="d-card-dark d-card">
            <div className="d-metric-unit">2.5M USD</div>
            <div className="d-metric-label">Seed Equity Ask</div>
          </div>
          <div className="d-list-item"><div className="d-dot" /> 45% Asset Genesis (R&D)</div>
          <div className="d-list-item"><div className="d-dot" /> 30% Commercial / Lobbying</div>
          <div className="d-list-item"><div className="d-dot" /> 25% Working Capital Float</div>
          <div className="d-card">
            <div className="d-tag-mono">The Inflection Point</div>
            <p className="d-para" style={{ marginBottom: 0 }}><strong>50 Active Nodes</strong> across 3 geographies + Regulatory Affirmation Letter.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S04 // THE PHYSICS",
      title: "CONCLUSION\n& MANDATE",
      label: "Strategic 90-Day Vision",
      render: () => (
        <div className="d-content">
          <p className="d-para">We are building the <strong>Global Infrastructure for Liability Transfer.</strong></p>
          <div className="d-card-accent d-card">
            <div className="d-tag-mono">The Mandate</div>
            <p className="d-para" style={{ marginBottom: 0 }}>Secure 3 "Shadow Pilots" and secure the <strong>Trusted Trader Architect</strong> to anchor the regulatory moat.</p>
          </div>
          <div className="d-card d-card">
            <div className="d-tag-mono">Valuation Target</div>
            <div className="d-metric-unit">30M USD</div>
            <div className="d-metric-label">Pre-Money for Series A</div>
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
