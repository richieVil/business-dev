'use client';

import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function FiscalGhostDossier() {
  const ventureName = "Fiscal Ghost";
  const whatsappMsg = encodeURIComponent(`I read the technical dossier for ${ventureName} and am interested in discussing the next steps.`);

  const theme = {
    parchment: "#0A0A0A",
    ink: "#FFFFFF",
    accent: "#DC2626",
    muted: "#A3A3A3"
  };

  const branding = {
    title: "FISCAL GHOST",
    subtitle: "HTS RECOVERY & AUDIT DEFENSE",
    version: "v2.10-BI-0163"
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: `https://wa.me/526145463178?text=${whatsappMsg}`,
    email: "quadraticldm@gmail.com",
    website: "business-dev-two.vercel.app/fiscal-ghost"
  };

  const slides = [
    {
      phase: "01: THE CATALYST",
      title: "FISCAL GHOST\nHTS SENTINEL",
      label: "EXECUTIVE BRIEFING // PROJECT BI-0163",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Venture Thesis</div>
          <div className="d-para">
            <strong>Fiscal Ghost</strong> is an asset-light Audit-as-a-Service platform engineered to exhume non-dilutive liquidity via collaborative trade reconciliation.
          </div>
          <div className="d-card-accent">
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              We replace statistical sampling with an <strong>Algorithmic Census</strong> that reconciles 100.00% of technical data to secure Value-Added Tax certifications.
            </div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">100%</div>
              <div className="d-metric-label">Data Census</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">USD</div>
              <div className="d-metric-label">Liquidity Anchor</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px' }}>
            Our engine identifies technical asymmetries between physical labels and digital filings, creating a <strong>shared liability shield</strong> for producers and brokers.
          </div>
        </div>
      )
    },
    {
      phase: "01: THE CATALYST",
      title: "THE AUTOMATED\nRECONCILIATION TRAP",
      label: "REGULATORY URGENCY // TAX AUTHORITY PIVOT",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">The Signal</div>
          <div className="d-para">
            The Mexican Tax Authority has transitioned to real-time algorithmic enforcement, cross-referencing digital declarations against credit balances with absolute precision.
          </div>
          <div className="d-grid-2">
            <div className="d-card-dark">
              <div className="d-metric-unit">180</div>
              <div className="d-metric-label">Correction Window (Days)</div>
            </div>
            <div className="d-card-dark">
              <div className="d-metric-unit">16.00%</div>
              <div className="d-metric-label">VAT Cash-Flow Hit</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px' }}>
            Failure to align technical data within the <strong>180 Day Window</strong> triggers a permanent loss of Value-Added Tax credits, jeopardizing fiscal solvency.
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div>Automated bots now identify discrepancies that human teams statistically ignore.</div>
          </div>
        </div>
      )
    },
    {
      phase: "01: THE CATALYST",
      title: "THE INVISIBLE TAX\nBALANCE SHEET EROSION",
      label: "WASTE QUANTIFICATION // FISCAL LEAKAGE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Mid-market facilities pay a <strong>Hidden Tax</strong> of clerical noise. Legacy 5.00% sampling models leave 95.00% of data as a permanent un-audited liability.
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">Benchmark: $50 M USD Facility</div>
            <div className="d-metric-unit">$920 k USD</div>
            <div className="d-metric-label">Total Annual Risk Exposure</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">$320 k USD</div>
              <div className="d-metric-label">Trapped VAT Credits</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">$600 k USD</div>
              <div className="d-metric-label">Statutory Penalties</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
            <strong>Strategic Mandate:</strong> Shift from probabilistic sampling to deterministic census to exhumed "dead money" from historical archives.
          </div>
        </div>
      )
    },

    // CONTENT SPRINT 2 – FRICTION & INGESTION (SLIDES 4-6)
    {
      phase: "02: THE FRICTION",
      title: "THE SAMPLING\nBLIND SPOT",
      label: "STATUS QUO FAILURE // SUBJECTIVITY GAP",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Manual audits rely on statistical probability. In a high-volume environment, this creates a <strong>Visibility Gap</strong> that hides systemic clerical drift.
          </div>
          <div className="d-card-dark">
            <div className="d-metric-unit">95.00%</div>
            <div className="d-metric-label">Un-audited Data Surface</div>
          </div>
          <div className="d-para" style={{ marginTop: '16px' }}>
            In a 10,000-entry facility, a 5.00% sample catches only 20 errors. <strong>780 errors remain hidden</strong>, providing a fertile ground for retroactive government fines.
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div>Humans cannot physically reconcile 50,000 pages of technical invoices per year.</div>
          </div>
        </div>
      )
    },
    {
      phase: "02: THE FRICTION",
      title: "THE FILING\nSOVEREIGNTY SHIELD",
      label: "BEHAVIORAL FRICTION // BROKER DEFENSE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">The Barrier</div>
          <div className="d-para">
            Managers resist switching due to <strong>Integration Debt</strong>. Traditional tools demand ERP write-access, triggering 12-month IT security vetos.
          </div>
          <div className="d-card-accent">
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              <strong>The Solution:</strong> A "Read-Only Sidecar" protocol. We ingest data from broker portals and warehouse labels without touching internal core systems.
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px' }}>
            By providing the technical evidence (labels/specs) the broker lacks, we transition from adversarial auditing to a <strong>Partner-Centric Defense</strong>.
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div>Zero-IT Friction: Operational in 72 hours.</div>
          </div>
        </div>
      )
    },
    {
      phase: "02: THE FRICTION",
      title: "INGESTION ENGINE\nDATA ASYMMETRY BRIDGE",
      label: "TECHNICAL USP // NODE ARCHITECTURE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We bridge the gap between structured digital filings and the "Grit" of the physical warehouse via a bifurcated pipeline.
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">HQ NODE</div>
              <div className="d-metric-label">Digital Archive</div>
              <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0' }}>
                Batch ingestion of broker XML declarations and PDF invoices.
              </div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">GRIT NODE</div>
              <div className="d-metric-label">Loading Dock</div>
              <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0' }}>
                Smartphone photos of faded 2:00 AM packing slips and labels.
              </div>
            </div>
          </div>
          <div className="d-card-dark" style={{ marginTop: '12px' }}>
            <div className="d-metric-unit">97.00%</div>
            <div className="d-metric-label">Vision-Language Model Confidence</div>
          </div>
          <div className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
            Our sentinel normalizes <strong>atmospheric noise</strong> (dust, glare, faded ink) to extract the technical proof needed for Value-Added Tax recovery.
          </div>
        </div>
      )
    },

    // CONTENT SPRINT 3 – PERFORMANCE & LOGIC (SLIDES 7-9)
    {
      phase: "03: THE MACHINE",
      title: "BRUTALISTA\nPARITY TABLE",
      label: "PERFORMANCE BENCHMARKS // GRIT RESILIENCE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Legacy OCR fails in industrial environments. We benchmark against <strong>Physical Degradation</strong> to ensure filing accuracy under field stress.
          </div>
          <div className="d-card-dark">
            <div className="d-grid-2">
              <div>
                <div className="d-tag-mono">Laboratory Floor</div>
                <div className="d-para" style={{ fontSize: '12px', marginBottom: '0' }}>Clean Digital PDF</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="d-metric-unit">99.9%</div>
              </div>
            </div>
          </div>
          <div className="d-card-accent">
            <div className="d-grid-2">
              <div>
                <div className="d-tag-mono" style={{ color: theme.accent }}>Grit Reality</div>
                <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', color: theme.ink }}>Wrinkled 2:00 AM Scan</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="d-metric-unit" style={{ color: theme.ink }}>97.00%</div>
              </div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px' }}>
            <strong>The Solution:</strong> Localized contrast-normalization + Vision-Language grounding allows us to parse technical specs where manual auditors see only "noise."
          </div>
        </div>
      )
    },
    {
      phase: "03: THE MACHINE",
      title: "UNIT OF VALUE\nCORRECTED DECLARATION",
      label: "STRATEGIC POSITIONING // FISCAL PHYSICS",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We do not measure progress by "hours worked." We measure by <strong>Corrected Declaration Value</strong> reclaimed for the balance sheet.
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Yield Multiplier</div>
            <div className="d-metric-unit">16x</div>
            <div className="d-metric-label">Yield on Secured VAT Credits</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card-dark">
              <div className="d-metric-unit">$1 USD</div>
              <div className="d-metric-label">Service Cost</div>
            </div>
            <div className="d-card-dark">
              <div className="d-metric-unit">$16 USD</div>
              <div className="d-metric-label">Recovered Liquidity</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px' }}>
            This "Fiscal Ingestion" creates a <strong>defense-in-depth ledger</strong>. By the time a government audit arrives, the proof is already archived.
          </div>
        </div>
      )
    },
    {
      phase: "03: THE MACHINE",
      title: "DIRECT P&L\nSUBSTITUTION",
      label: "SUBSTITUTION AUDIT // SALES VELOCITY",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Conversion Logic</div>
          <div className="d-para">
            <strong>Fiscal Ghost</strong> is a direct substitute for the "External Compliance Retainer." We replace a fixed op-ex cost with a variable success-based gain.
          </div>
          <div className="d-card-accent">
            <div className="d-metric-label">Displaced Line Item</div>
            <div className="d-para" style={{ fontWeight: '700', color: theme.ink, marginBottom: '0' }}>
              Specialized Trade Tax Consulting
            </div>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
              <div className="d-tag-mono">Consulting</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>$15 k USD Fixed Retainer</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono" style={{ color: theme.accent }}>Fiscal Ghost</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Contingency Yield</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px', fontSize: '12px' }}>
            By identifies the <strong>$920 k USD Leak</strong> during the initial diagnostic, we prove the ROI before a single Mexican Peso is committed.
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 4 – GTM & MARKET (SLIDES 10-12)
    {
      phase: "04: THE ENTRY",
      title: "ZERO-INTEGRATION\nSTRATEGIC ENTRY",
      label: "ENTRY MANEUVER // THE SIDECAR PROTOCOL",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Traditional software sales die in the <strong>6-Month IT Security Gate</strong>. We bypass corporate infrastructure entirely via an air-gapped data pipeline.
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">The Digital Sidecar</div>
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              We ingest read-only exports from external Customs Broker portals and VUCEM digital windows. No API or write-access to the ERP is required.
            </div>
          </div>
          <div className="d-grid-2" style={{ marginTop: '16px' }}>
            <div className="d-card-dark">
              <div className="d-metric-unit">72</div>
              <div className="d-metric-label">Deployment (Hours)</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">Zero</div>
              <div className="d-metric-label">IT Friction</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px', fontSize: '12px' }}>
            <strong>Strategic Advantage:</strong> By classifying the pilot as a "Consulting Audit" rather than "Software Deployment," we enter the facility through the Finance budget.
          </div>
        </div>
      )
    },
    {
      phase: "04: THE ENTRY",
      title: "MARKET INTELLIGENCE\nBOTTOM-UP VALUATION",
      label: "YIELD ANALYSIS // USD REVENUE MODEL",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Arithmetic Receipts</div>
          <div className="d-card">
            <div className="d-metric-unit">$512 M USD</div>
            <div className="d-metric-label">TAM (Total Certified IMMEX)</div>
            <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0' }}>
              [6,100 Entities] * [12 Months] * [$7,000 Total Yield]
            </div>
          </div>
          <div className="d-card-dark">
            <div className="d-metric-unit">$245 M USD</div>
            <div className="d-metric-label">SAM (Mid-Market Focus)</div>
            <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0', color: theme.parchment }}>
              [3,500 Entities] * [$70,000 ACV Weighted Average]
            </div>
          </div>
          <div className="d-card">
            <div className="d-metric-unit">$7 M USD</div>
            <div className="d-metric-label">SOM (Year 3 Dominance)</div>
            <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0' }}>
              [100 Entities] * [$70,000 ACV]
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "04: THE ENTRY",
      title: "GEOGRAPHIC DENSITY\nTHE GRIT CORRIDORS",
      label: "CLUSTER MAPPING // HIGH-FRICTION NODES",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We prioritize clusters where logistics friction and <strong>environmental grit</strong> maximize the value of algorithmic reconciliation.
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div><strong>Tijuana-Tecate:</strong> High-precision medical assembly requiring 100% technical documentation fidelity.</div>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div><strong>Juarez-Chihuahua:</strong> Tier-2 Automotive nodes with 10,000+ SKU volatility and 2:00 AM transit drift.</div>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <div><strong>Laredo-Monterrey:</strong> Maximum throughput-per-node; high exposure to legacy data fragmentation.</div>
          </div>
          <div className="d-card-accent" style={{ marginTop: '12px' }}>
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              Strategic concentration allows for <strong>Network Efficiency</strong>—training local models on regional HTS misclassification patterns.
            </div>
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 5 – SURVIVAL & COMPETITION (SLIDES 13-15)
    {
      phase: "05: THE PHYSICS",
      title: "THE GOLDEN NUMBER\nMANUAL INTERVENTION",
      label: "SURVIVAL METRIC // OPERATIONAL LEVERAGE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Core Efficiency</div>
          <div className="d-para">
            The <strong>Manual Intervention Rate (MIR)</strong> is our primary lead indicator for scalability. It measures the percentage of declarations requiring the Logic Architect's oversight.
          </div>
          <div className="d-card-accent">
            <div className="d-metric-unit">MIR</div>
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              Operational decoupling occurs when the machine achieves logic saturation, allowing revenue to grow without linear headcount.
            </div>
          </div>
          <div className="d-grid-2" style={{ marginTop: '16px' }}>
            <div className="d-card-dark">
              <div className="d-metric-unit">&lt; 5.00%</div>
              <div className="d-metric-label">Target MIR (Elite)</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">82.30%</div>
              <div className="d-metric-label">Target Gross Margin</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px', fontSize: '12px' }}>
            <strong>Strategic Value:</strong> Lowering MIR directly increases the venture's valuation multiple by proving software-level unit economics.
          </div>
        </div>
      )
    },
    {
      phase: "05: THE PHYSICS",
      title: "THRESHOLD ZONES\nCAPACITY BANKRUPTCY",
      label: "SCALING PHYSICS // RISK GOVERNANCE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Revenue can mask terminal structural defects. We monitor MIR to prevent <strong>Capacity Bankruptcy</strong>—where fulfillment burn outpaces sales velocity.
          </div>
          <div className="d-card-dark">
            <div className="d-tag-mono" style={{ color: theme.accent }}>ELITE: &lt; 5.00% MIR</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', color: theme.parchment }}>
              SaaS Economics. The machine is autonomous. EBITDA expansion is decoupled from labor.
            </div>
          </div>
          <div className="d-card" style={{ marginTop: '8px' }}>
            <div className="d-tag-mono">HEALTHY: 15.00% – 25.00% MIR</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0' }}>
              Linear Growth. Profitable agency-style fulfillment requiring fractional data janitors.
            </div>
          </div>
          <div className="d-card-accent" style={{ marginTop: '8px' }}>
            <div className="d-tag-mono" style={{ color: theme.accent }}>DEATH: &gt; 40.00% MIR</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', color: theme.ink }}>
              Operational Failure. AI noise requires constant human correction. Churn is imminent.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "05: THE PHYSICS",
      title: "COMPETITOR MATRIX\nLOGIC SOVEREIGNTY",
      label: "MARKET DEFENSE // API-WRAPPER GAP",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Simple GPT-4 wrappers fail in industrial trade. Our moat is built on <strong>"Grit" Normalization</strong> and a 25,000-entry verified logic vault.
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">LEGACY AUDIT</div>
              <div className="d-list-item"><div className="d-dot"></div><div>5.00% Sample</div></div>
              <div className="d-list-item"><div className="d-dot"></div><div>$400/hr Cost</div></div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">GENERIC SAAS</div>
              <div className="d-list-item"><div className="d-dot"></div><div>No "Grit" AI</div></div>
              <div className="d-list-item"><div className="d-dot"></div><div>ERP Dependency</div></div>
            </div>
          </div>
          <div className="d-card-dark" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono" style={{ color: theme.accent }}>FISCAL GHOST</div>
            <div className="d-grid-2">
              <div className="d-list-item" style={{ fontSize: '10px' }}><div className="d-dot"></div><div>100% Census</div></div>
              <div className="d-list-item" style={{ fontSize: '10px' }}><div className="d-dot"></div><div>Triple-Model Consensus</div></div>
            </div>
            <div className="d-para" style={{ fontSize: '11px', marginTop: '8px', marginBottom: '0', color: theme.parchment }}>
              <strong>The Defense:</strong> Generic LLMs hallucinate technical trade codes. Our "Verified Triple" vault ensures legal defensibility that wrappers cannot match.
            </div>
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 6 – ARCHITECTURE & SCOPE (SLIDES 16-18)
    {
      phase: "06: THE ARCHITECTURE",
      title: "STACK EVOLUTION\nREFINERY TO MACHINE",
      label: "TECHNICAL ROADMAP // MARGIN EXPANSION",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We prioritize sales velocity over early automation. The stack transitions from high-cost variable APIs to high-margin proprietary logic.
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">Phase 1: Refinery</div>
              <div className="d-metric-unit">44.30%</div>
              <div className="d-metric-label">Gross Margin</div>
              <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0' }}>
                Manual logic validation and variable API token burn.
              </div>
            </div>
            <div className="d-card-accent">
              <div className="d-tag-mono">Phase 2: Machine</div>
              <div className="d-metric-unit">82.30%</div>
              <div className="d-metric-label">Gross Margin</div>
              <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0', color: theme.ink }}>
                Logic saturation and local distilled model hosting.
              </div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '16px', fontSize: '12px' }}>
            <strong>Strategic Pivot:</strong> At 25,000 verified transactions, the machine decouples from founder labor, unlocking the 82.30% profit floor.
          </div>
        </div>
      )
    },
    {
      phase: "06: THE ARCHITECTURE",
      title: "ASSET GENESIS\nIP CONSTRUCTION",
      label: "KNOWLEDGE VAULT // LOGIC SOVEREIGNTY",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            The venture's value is not the code, but the <strong>Verified Logic Ledger</strong>. We build this asset through a recursive 3-phase manual.
          </div>
          <div className="d-card">
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div><strong>01: Extraction:</strong> Converting raw "Grit" data and blurred technical specs into high-fidelity digital records.</div>
            </div>
          </div>
          <div className="d-card">
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div><strong>02: Distillation:</strong> Mapping discrepancies between broker claims and technical descriptions into "Verified Triples."</div>
            </div>
          </div>
          <div className="d-card-dark">
            <div className="d-list-item" style={{ color: theme.parchment }}>
              <div className="d-dot"></div>
              <div><strong>03: Hardening:</strong> Encoding triples into a proprietary heuristic vault that becomes the un-churnable source of truth.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "06: THE ARCHITECTURE",
      title: "SCOPE INTEGRITY\nTHE OMISSION LIST",
      label: "MVP BOUNDARIES // 90-DAY SHIP DATE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Risk Mitigation</div>
          <div className="d-para">
            To protect the <strong>90-Day Ship Date</strong> and maintain asset-light DNA, the following features are strictly excluded from the Phase 1 MVP:
          </div>
          <div className="d-card-dark">
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div>Real-Time ERP Synchronization (Deferred to Year 2).</div>
            </div>
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div>SOC2 Type II Audit (Neutralized via RAM-only processing).</div>
            </div>
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div>Custom Model Fine-tuning (API-commodity is sufficient).</div>
            </div>
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div>Edge-Container Deployment (Cloud-batch is the baseline).</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
            By deferring high-burn R&D, we ensure the first 3 clients fund the transition to logic sovereignty.
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 7 – EXECUTION & INTEGRITY (SLIDES 19-21)
    {
      phase: "07: THE EXECUTION",
      title: "FULFILLMENT CHAIN\nTHE LOGIC FACTORY",
      label: "OPERATIONAL STEPS // RAW TO RECOVERY",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            The machine operates as an asynchronous logic factory, engineered for exception-only human intervention.
          </div>
          
          <div className="d-step">01: INGESTION</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">02: EXTRACTION (TEXTRACT)</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">03: TRIPLE-MODEL CONSENSUS</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">04: SHADOW AUDIT (SIGN-OFF)</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">05: RECTIFICATION EXPORT</div>

          <div className="d-para" style={{ marginTop: '16px', fontSize: '11px' }}>
            <strong>Internal Latency:</strong> Standard batch processing (200 declarations) is completed in ~4.2 hours, maintaining a 72-hour external SLA.
          </div>
        </div>
      )
    },
    {
      phase: "07: THE EXECUTION",
      title: "INTEGRITY PROTOCOL\nTHE KILL-SWITCH",
      label: "RISK GOVERNANCE // FIELD SUPPORT",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-tag-mono">Logic Recall</div>
          <div className="d-para">
            To prevent systemic "Self-Incrimination," we maintain an <strong>Integrity Kill-Switch</strong>. If a regulatory rule changes, all actionable reports are frozen globally.
          </div>
          <div className="d-card-dark">
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div><strong>Global Freeze:</strong> Immediate halt of flawed logic versions.</div>
            </div>
            <div className="d-list-item">
              <div className="d-dot"></div>
              <div><strong>Impact Ledger:</strong> Recursive SQL query identifies every transaction filed under the old rule.</div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px' }}>
            <strong>Field Support:</strong> We utilize regional Managed Service Providers in Juarez and Laredo for 2-hour hardware swaps of "Grit-Node" appliances.
          </div>
        </div>
      )
    },
    {
      phase: "07: THE EXECUTION",
      title: "VALIDATION ROADMAP\nSCIENTIFIC R&D",
      label: "GENESIS MILESTONES // MONTHS 0-3",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We exit the Genesis phase only after achieving <strong>Schema-Logical Parity</strong> against human-vetted benchmarks.
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Hypothesis: Vision Accuracy</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '8px' }}>
              Vision-AI can extract technical specs from low-light thermal paper with higher fidelity than manual entry.
            </div>
            <div className="d-grid-2">
              <div className="d-card-dark" style={{ padding: '8px' }}>
                <div className="d-metric-label">Stress Test</div>
                <div style={{ fontSize: '10px' }}>500 "Grit" Scans</div>
              </div>
              <div className="d-card-dark" style={{ padding: '8px' }}>
                <div className="d-metric-label">Pass Metric</div>
                <div className="d-metric-unit" style={{ fontSize: '14px' }}>&lt; 2.00%</div>
                <div className="d-metric-label">Char Error Rate</div>
              </div>
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px', fontSize: '11px' }}>
            Reaching this gate proves the machine can technically outperform a human customs broker on a per-unit basis.
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 8 – DNA & COMMERCE (SLIDES 22-24)
    {
      phase: "08: THE PHYSICS",
      title: "FOUNDER DNA\nDOMINATION SPECS",
      label: "ELITE SPECIFICATIONS // SOLO ORCHESTRATOR",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Execution relies on the convergence of technical orchestration and regulatory sovereignty. A solo operator replaces a Big 4 team via three core superpowers:
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Technical</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', fontWeight: '700', color: theme.ink }}>Grit-Data Orchestration</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Gluing commodity Optical Character Recognition and Large Language Models into resilient, field-ready pipelines.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Regulatory</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', fontWeight: '700', color: theme.ink }}>Fiscal Logic Sovereignty</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Deep forensic understanding of Annex 24 and the "General Rules of Foreign Trade" to dismantle broker errors.</div>
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">Commercial</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', fontWeight: '700', color: theme.ink }}>Value-Injection Sales</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Pivoting conversations from "Technical Accuracy" to "Non-Dilutive Liquidity Generation" for the Chief Financial Officer.</div>
          </div>
        </div>
      )
    },
    {
      phase: "08: THE PHYSICS",
      title: "COMMERCIAL LOGIC\nNODE-BASED PRICING",
      label: "FEE ARCHITECTURE // USD REVENUE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Pricing is engineered to solve the "Success Fee Paradox" while providing immediate working capital for the venture.
          </div>
          <div className="d-grid-2">
            <div className="d-card-dark">
              <div className="d-metric-unit">$2,500</div>
              <div className="d-metric-label">Monthly Platform Fee (USD)</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0', color: theme.parchment }}>
                Covers 24/7 monitoring and Audit-Defense Ledger maintenance.
              </div>
            </div>
            <div className="d-card-accent">
              <div className="d-metric-unit">12.50%</div>
              <div className="d-metric-label">Success Fee (Contingency)</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0', color: theme.ink }}>
                Calculated on actual Value-Added Tax credits exhumed or penalties avoided.
              </div>
            </div>
          </div>
          <div className="d-card" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono">Liquidity Bridge</div>
            <div className="d-metric-unit">$4,500 USD</div>
            <div className="d-metric-label">Implementation Fee (Net-15 Terms)</div>
            <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0' }}>
              <strong>Non-Negotiable:</strong> This fee funds the "Genesis Implementation" and secures client skin-in-the-game.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "08: THE PHYSICS",
      title: "REFINERY ECONOMICS\nTHE MARGIN STEP-UP",
      label: "UNIT ECONOMIC BRIDGE // PHASES 1-2",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Phase 1 margins reflect the "Labor-Heavy" cost of logic validation. Phase 2 unlocks "Elite" software economics through logic saturation.
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">Phase 1: Entry</div>
              <div className="d-metric-unit">44.30%</div>
              <div className="d-metric-label">Gross Margin</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '8px', marginBottom: '0' }}>
                $3,250 USD Monthly Cost of Goods Sold per Mid-Market client.
              </div>
            </div>
            <div className="d-card-dark">
              <div className="d-tag-mono" style={{ color: theme.accent }}>Phase 2: Scale</div>
              <div className="d-metric-unit">82.30%</div>
              <div className="d-metric-label">Gross Margin</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '8px', marginBottom: '0', color: theme.parchment }}>
                $1,030 USD Monthly Cost of Goods Sold. Decoupled from labor.
              </div>
            </div>
          </div>
          <div className="d-card" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono">Operational Decoupling</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0' }}>
              For every $1.00 USD of new revenue added in Phase 2, <strong>$0.82 USD</strong> flows directly to EBITDA as variable costs collapse.
            </div>
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 9 – FINANCIAL PHYSICS (SLIDES 25-27)
    {
      phase: "09: THE PHYSICS",
      title: "ALLOCATION\nMERITOCRACY",
      label: "CAPITAL VELOCITY // RESOURCE PRIORITY",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            We allocate logic engineering and founder innovation cycles strictly based on <strong>Profit Velocity</strong>—the speed from data ingestion to cash collection.
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Priority 1: Automotive (70%)</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              High SKU complexity (10,000+) leads to maximum technical misclassification and highest contingency yields.
            </div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Priority 2: PE Portfolios (20%)</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Strategic "1-to-Many" sales velocity. Centralized decision-making across multiple industrial facilities.
            </div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">Priority 3: Commodity (10%)</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Low-complexity imports serviced via the fully automated Phase 2 stack with zero custom R&D.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "09: THE PHYSICS",
      title: "36-MONTH MODEL\nEFFICIENCY STEP-UP",
      label: "CASHFLOW PROJECTION // THE J-CURVE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            The venture follows a distinct J-Curve, defined by the transition from <strong>Manual Logic Validation</strong> to <strong>Automated Asset Leverage</strong>.
          </div>
          <div className="d-grid-2">
            <div className="d-card-dark">
              <div className="d-tag-mono" style={{ color: theme.accent }}>Genesis (0-3)</div>
              <div className="d-metric-unit">-$20 k</div>
              <div className="d-metric-label">Burn (USD)</div>
              <div style={{ fontSize: '10px', marginTop: '4px', color: theme.parchment }}>Architecture focus.</div>
            </div>
            <div className="d-card-dark">
              <div className="d-tag-mono" style={{ color: theme.accent }}>Scale (19+)</div>
              <div className="d-metric-unit">82.30%</div>
              <div className="d-metric-label">Gross Margin</div>
              <div style={{ fontSize: '10px', marginTop: '4px', color: theme.parchment }}>Labor decoupling.</div>
            </div>
          </div>
          <div className="d-card-accent" style={{ marginTop: '12px' }}>
            <div className="d-para" style={{ marginBottom: '0px', color: theme.ink }}>
              <strong>The Inflection:</strong> Crossing 25,000 "Verified Triples" triggers the transition to local distilled models, collapsing per-audit variable costs by 90.00%.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "09: THE PHYSICS",
      title: "LIQUIDITY SURVIVAL\nTHE FLOAT BRIDGE",
      label: "WORKING CAPITAL // THE FORTUNE 500 FLOAT",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Mid-market and Tier-1 facilities utilize <strong>Net-120 Payment Terms</strong> as treasury management. Without a liquidity shunt, growth is lethal.
          </div>
          <div className="d-card-dark">
            <div className="d-metric-unit">-$55 k USD</div>
            <div className="d-metric-label">Terminal Cash Trough (Month 10)</div>
          </div>
          <div className="d-card-accent" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono">Survival Maneuver</div>
            <div className="d-metric-unit">$4,500 USD</div>
            <div className="d-metric-label">Net-15 Implementation Pre-Pay</div>
            <div className="d-para" style={{ fontSize: '11px', marginTop: '6px', marginBottom: '0', color: theme.ink }}>
              <strong>Non-Negotiable:</strong> We carve out "Data Readiness" into a separate SOW to bridge the Net-120 float gap.
            </div>
          </div>
          <div className="d-para" style={{ marginTop: '12px', fontSize: '11px' }}>
            By recycling implementation fees within 30 days, we fund the 108-day sales cycle without external bridge debt.
          </div>
        </div>
      )
    },
		// CONTENT SPRINT 10 – THE MANDATE (SLIDES 28-30)
    {
      phase: "10: THE MANDATE",
      title: "INVISIBLE ECONOMICS\nHIDDEN PROFIT LAYERS",
      label: "GHOST MARGINS // STRUCTURAL ARBITRAGE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Beyond the core service, we leverage structural asymmetries to generate "Ghost Margins" that protect the net fiscal posture of the venture.
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">FX Arbitrage</div>
              <div className="d-metric-unit">4-7%</div>
              <div className="d-metric-label">Operational Cushion</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0' }}>
                USD Revenue / MXN fulfillment labor inversion.
              </div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Decree 2023</div>
              <div className="d-metric-unit">89.00%</div>
              <div className="d-metric-label">Acc. Depreciation</div>
              <div className="d-para" style={{ fontSize: '10px', marginTop: '4px', marginBottom: '0' }}>
                Structuring as R&D for tax-neutral client onboarding.
              </div>
            </div>
          </div>
          <div className="d-card-dark" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono" style={{ color: theme.accent }}>Data Salvage: The Drift Index</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', color: theme.parchment }}>
              Aggregating anonymized HTS misclassification patterns to sell "Compliance Intelligence" to logistics insurers at 100.00% EBITDA.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "10: THE MANDATE",
      title: "THE FUNDING MANDATE\nLIQUIDITY ALLOCATION",
      label: "THE ASK // VALUATION STEP-UP",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-card-dark">
            <div className="d-metric-unit">$120 k USD</div>
            <div className="d-metric-label">Total Capital Allocation (18 Months)</div>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
              <div className="d-tag-mono">Genesis ($78 k)</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Validation, architecture hardening, and SDR outreach.</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Shunt ($42 k)</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>Liquidity reserve to absorb the Net-120 Float.</div>
            </div>
          </div>
          <div className="d-card-accent" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono">Step-Up Trigger</div>
            <div className="d-para" style={{ fontSize: '12px', marginBottom: '0', color: theme.ink, fontWeight: '700' }}>
              10 Signed MSAs + &lt; 5.00% Manual Intervention Rate
            </div>
            <div className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: '0' }}>
              This milestone unlocks an 8x-12x SaaS valuation multiple for strategic exit.
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "10: THE MANDATE",
      title: "CONCLUSION\nIMMEDIATE MANDATE",
      label: "90-DAY MILESTONE // GENESIS PHASE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <div className="d-para">
            Fiscal Ghost is the engineered response to the automated weaponization of the Mexican Tax Authority. We sell <strong>Logic Sovereignty</strong>.
          </div>
          <div className="d-tag-mono">Immediate 90-Day Milestone</div>
          <div className="d-step">PHASE I: SCHEMA-LOGICAL PARITY</div>
          <div className="d-card" style={{ marginTop: '16px' }}>
            <div className="d-list-item"><div className="d-dot"></div><div>250 Synthetic "Grit" Transactions Processed.</div></div>
            <div className="d-list-item"><div className="d-dot"></div><div>Manual Intervention Rate &lt; 20.00%.</div></div>
            <div className="d-list-item"><div className="d-dot"></div><div>100.00% Accuracy vs. Human-Vetted Benchmarks.</div></div>
          </div>
          <div className="d-card-dark" style={{ marginTop: '16px' }}>
            <div className="d-para" style={{ fontSize: '13px', textAlign: 'center', marginBottom: '0', color: theme.parchment }}>
              <strong>The Signal is Deterministic.</strong><br/>
              The chasm between spec and filing is the opportunity.
            </div>
          </div>
        </div>
      )
    }
	
		
		
		
		
		
		
		
		
		
		
  ];
		
		
		
		
		
		
		


  return (
    <>
      <style>{`
        @media print {
          @page { size: 5in 8in; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; background: white !important; }
          .fixed-header { display: none !important; }
          .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; width: 5in !important; max-width: none !important; }
          .slide { 
            display: flex !important; 
            height: 8in !important; 
            width: 5in !important; 
            break-after: page !important; 
            padding: 0.5in !important; 
            background: ${theme.parchment} !important;
            border: none !important;
          }
          .heading-hero { color: ${theme.ink} !important; }
          .d-para { color: ${theme.muted} !important; }
          .d-metric-unit { color: ${theme.ink} !important; }
        }

        .master-cage {
          max-width: 375px;
          margin: 53px auto 0 auto;
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          background: ${theme.parchment};
        }

        .slide {
          min-height: calc(100vh - 53px);
          max-height: 600px; /* The 600px Rule */
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>
      
      <DossierEngineV2 
        slides={slides}
        branding={branding}
        contact={contact}
        theme={theme}
      />
    </>
  );
}
