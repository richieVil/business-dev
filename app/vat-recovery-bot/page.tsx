"use client";

import React from "react";
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function VATRecoveryBotDossier() {
  const slides = [
    /* SLIDES 1-2: EXECUTIVE BRIEFING */
    {
      phase: "PHASE I",
      title: "The Forensic\nGhost Auditor",
      label: "PROJECT ID: BI-0154",
      render: () => (
        <div className="d-content">
          <p className="d-para" style={{ fontSize: '15px' }}>
            A dedicated FinTech engine for <strong>Maquiladora CFOs</strong> that converts historical data discrepancies into immediate cash recovery.
          </p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">VISION</div>
            <div style={{ fontSize: '18px', fontWeight: 900, fontStyle: 'italic', lineHeight: '1.1' }}>
              Deloitte-Quality Audit <br/>at Software Price.
            </div>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div className="d-tag-mono">TESIS CENTRAL</div>
             <div style={{ fontWeight: 900, fontSize: '14px' }}>Transparencia Radical como foso competitivo.</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE I",
      title: "Vision &\nIntention",
      label: "THE STRATEGIC HOOK",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <p className="d-para" style={{ margin: 0 }}>
              To dominate the <strong>Forensic Layer</strong> of the IMMEX economy by automating the most complex regulatory reconciliation in Mexican tax law.
            </p>
          </div>
          <div className="d-card" style={{ marginTop: '12px' }}>
             <div className="d-tag-mono">MANDATE</div>
             <div style={{ fontSize: '14px', fontWeight: 900 }}>Success-Based Disruption</div>
             <p className="d-para" style={{ fontSize: '10px', marginTop: '4px' }}>We remove the barrier to entry by charging only on recovered funds, making the "Yes" a mathematical certainty for the CFO.</p>
          </div>
          <div className="d-grid-2" style={{ marginTop: 'auto' }}>
            <div className="d-card-dark">
               <div className="d-metric-label">DNA</div>
               <div style={{ fontWeight: 900, fontSize: '11px' }}>Tech-Autonomous</div>
            </div>
            <div className="d-card-dark">
               <div className="d-metric-label">ASSET</div>
               <div style={{ fontWeight: 900, fontSize: '11px' }}>Asset-Light</div>
            </div>
          </div>
        </div>
      )
    },

    /* SLIDES 3-4: THE PROBLEM & THE FRICTION */
    {
      phase: "PHASE II",
      title: "The Invisible\nTax Leakage",
      label: "MARKET INEFFICIENCY",
      render: () => (
        <div className="d-content">
          <p className="d-para">
            IMMEX entities move $500B+ USD annually. Manual auditing processes fail to catch <strong>2-5%</strong> of recoverable VAT due to volume.
          </p>
          <div className="d-card">
             <div className="d-tag-mono">THE SAMPLING TRAP</div>
             <div style={{ fontSize: '12px', fontWeight: 900 }}>Human auditors check &lt;10% of records.</div>
             <p className="d-para" style={{ fontSize: '10px', marginTop: '4px' }}>Errors hiding in the other 90% represent "Found Money" currently held by the SAT.</p>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto' }}>
             <div className="d-metric-unit" style={{ color: 'var(--accent)' }}>3.5B USD</div>
             <div className="d-metric-label">Annual Unclaimed Pool (TAM)</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE II",
      title: "The Reconciliation\nFog",
      label: "LOGISTICAL LAG",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">FRICTION POINTS</div>
            <div className="d-list-item"><div className="d-dot"/> <div>ERP/Pedimento Time-Stamp Mismatches</div></div>
            <div className="d-list-item"><div className="d-dot"/> <div>Unstructured PDF Invoice Data</div></div>
            <div className="d-list-item"><div className="d-dot"/> <div>Regulatory "Anexo 24" Complexity</div></div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>This "Fog" prevents standard accounting software from performing a 1:1 match, creating a perpetual state of leakage.</p>
        </div>
      )
    },

    /* SLIDES 5-6: THE TECHNICAL USP */
    {
      phase: "PHASE III",
      title: "The Forensic\nEngine Core",
      label: "SPECIFICATION PARITY",
      render: () => (
        <div className="d-content">
          <div className="d-content" style={{ marginTop: '8px' }}>
            {/* TECHNICAL SCANNER HEADER */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', background: 'rgba(255,255,255,0.08)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
              <div className="d-tag-mono" style={{ margin: 0, color: 'var(--ink)', opacity: 0.6 }}>[ SYSTEM_VAR ]</div>
              <div className="d-tag-mono" style={{ margin: 0, color: 'var(--ink)', opacity: 0.4, textAlign: 'center' }}>LEGACY</div>
              <div className="d-tag-mono" style={{ margin: 0, color: 'var(--accent)', textAlign: 'right' }}>ENGINE_BOT</div>
            </div>

            {/* DATA GRID */}
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
              
              {/* ROW 01: DENSITY */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--muted)' }}>[01] CENSUS_DENSITY</div>
                <div style={{ fontSize: '11px', textAlign: 'center', color: 'var(--muted)', opacity: 0.5, fontStyle: 'italic' }}>10%</div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>100.00%</div>
                  <div style={{ height: '2px', background: 'var(--accent)', width: '100%', marginTop: '4px' }}></div>
                </div>
              </div>

              {/* ROW 02: VELOCITY */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--muted)' }}>[02] TIME_TO_VALUE</div>
                <div style={{ fontSize: '11px', textAlign: 'center', color: 'var(--muted)', opacity: 0.5 }}>30 Days</div>
                <div style={{ textAlign: 'right', fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>48.0 HRS</div>
              </div>

              {/* ROW 03: RISK */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', padding: '12px', alignItems: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--muted)' }}>[03] CAPITAL_RISK</div>
                <div style={{ fontSize: '11px', textAlign: 'center', color: 'var(--muted)', opacity: 0.5 }}>Hourly</div>
                <div style={{ textAlign: 'right', fontSize: '12px', fontWeight: 900, color: 'var(--accent)', fontFamily: 'Roboto Mono' }}>SUCCESS_FEE</div>
              </div>

            </div>
          </div>
          <p className="d-para" style={{ marginTop: 'auto' }}>We replace <strong>Subjective Sampling</strong> with <strong>Algorithmic Census</strong>.</p>
        </div>
      )
    },
    {
      phase: "PHASE III",
      title: "HS-Code Logic\nLibrary",
      label: "PROPRIETARY IP",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">NLP MAPPING</div>
            <p className="d-para" style={{ margin: 0 }}>
              The engine utilizes <strong>Natural Language Processing</strong> to link unstructured PDF descriptions to official SAT XML tax-exempt classifications.
            </p>
          </div>
          
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
               <div className="d-tag-mono" style={{ opacity: 0.5 }}>INFRA</div>
               <div style={{ fontSize: '10px', fontWeight: 900 }}>AWS Lambda + <br/>ElasticSearch</div>
            </div>
            <div className="d-card">
               <div className="d-tag-mono" style={{ opacity: 0.5 }}>LATENCY</div>
               <div style={{ fontSize: '10px', fontWeight: 900 }}>&lt;200ms <br/>Per Record</div>
            </div>
          </div>

          <div className="d-card" style={{ marginTop: 'auto', border: '1px solid var(--accent)', background: 'rgba(220, 38, 38, 0.1)' }}>
             <div className="d-tag-mono" style={{ color: 'white' }}>PATTERN_DENSITY</div>
             <div className="d-metric-unit" style={{ fontSize: '32px', color: 'white' }}>100,000+</div>
             <div className="d-metric-label" style={{ color: 'white', opacity: 0.8 }}>Mapped Discrepancy Patterns</div>
          </div>
        </div>
      )
    },

    /* SLIDES 7-10: MARKET INTELLIGENCE */
    {
      phase: "PHASE IV",
      title: "Tier-1\nMaquiladoras",
      label: "SEGMENT SUCCESS METRIC",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
             <div className="d-metric-unit">45%</div>
             <div className="d-metric-label">Share of SAM</div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            High-volume entities (&gt;10k transactions/mo). The decision cycle is slow, but the <strong>Recovery Potential</strong> per client exceeds $1M USD.
          </p>
          <div className="d-card" style={{ marginTop: 'auto' }}>
             <div className="d-tag-mono">KEY ATTRIBUTE</div>
             <div style={{ fontWeight: 900 }}>Established Digital Data Hygiene.</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE IV",
      title: "Tier-2 &\nPE Portfolio",
      label: "SEGMENT SUCCESS METRIC",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
             <div className="d-card">
                <div className="d-metric-unit">35%</div>
                <div className="d-metric-label">Tier-2 SAM</div>
             </div>
             <div className="d-card">
                <div className="d-metric-unit">20%</div>
                <div className="d-metric-label">PE SAM</div>
             </div>
          </div>
          <div className="d-card-accent d-card" style={{ marginTop: '12px' }}>
             <div className="d-tag-mono">THE EBITDA PLAY</div>
             <p className="d-para" style={{ margin: 0, fontSize: '11px' }}>
                Private Equity firms use the bot to <strong>instantly increase EBITDA</strong> of portfolio companies during the first 90 days post-acquisition.
             </p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE IV",
      title: "The Border\nStrategy",
      label: "GEOGRAPHIC PRIORITIZATION",
      render: () => (
        <div className="d-content">
          <div className="d-card">
             <div style={{ fontSize: '16px', fontWeight: 900 }}>Tijuana / Juarez</div>
             <div className="d-metric-label">The High-Volume Hubs</div>
          </div>
          <div className="d-card">
             <div style={{ fontSize: '16px', fontWeight: 900 }}>The Bajío Region</div>
             <div className="d-metric-label">The Complexity Hubs</div>
          </div>
          <p className="d-para" style={{ marginTop: 'auto' }}>
            We prioritize the <strong>Northern Border</strong> for rapid scale and the <strong>Bajío</strong> for high-margin forensic complexity.
          </p>
        </div>
      )
    },
    {
      phase: "PHASE IV",
      title: "Competitor\nMatrix",
      label: "BRUTALISTA COMPARISON",
      render: () => (
        <div className="d-content">
          <div className="d-card">
             <div className="d-tag-mono">THE LEGACY GAP</div>
             <div className="d-list-item"><div className="d-dot"/> <div><strong>Big 4:</strong> Manual, Expensive, Slow.</div></div>
             <div className="d-list-item"><div className="d-dot"/> <div><strong>Local Firms:</strong> Low-tech, High liability.</div></div>
             <div className="d-list-item"><div className="d-dot" style={{ background: 'white' }}/> <div><strong>The Bot:</strong> 100% Automated, Zero-risk.</div></div>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto' }}>
             <div style={{ fontSize: '11px', fontWeight: 900 }}>We compete on Speed and Performance, not relationships.</div>
          </div>
        </div>
      )
    },

    /* PHASE V: THE MACHINE (MVP & OPS) */
    {
      phase: "PHASE V",
      title: "MVP Critical\nPath",
      label: "TECH & IP REQUIREMENTS",
      render: () => (
        <div className="d-content">
          {/* SCANNER HEADER */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'rgba(255,255,255,0.08)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
            <div className="d-tag-mono" style={{ margin: 0, opacity: 0.6 }}>[ ASSET_TYPE ]</div>
            <div className="d-tag-mono" style={{ margin: 0, textAlign: 'right', color: 'var(--accent)' }}>SPECIFICATION</div>
          </div>

          <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', marginBottom: '12px' }}>
            {/* SOFTWARE ASSETS */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--muted)' }}>STACK</div>
              <div style={{ fontSize: '11px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>Python + Azure OCR</div>
            </div>
            
            {/* IP ASSETS (NEW SECTION) */}
            <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--accent)', marginBottom: '4px' }}>IP: AUDIT LOGIC KERNEL</div>
              <div className="d-list-item" style={{ marginBottom: '2px' }}><div className="d-dot"/> <div><strong>SAT Anexo 24/31:</strong> Compliance Ruleset.</div></div>
              <div className="d-list-item" style={{ marginBottom: '2px' }}><div className="d-dot"/> <div><strong>Pedimento Keys:</strong> (Clave A1 vs. IN).</div></div>
              <div className="d-list-item"><div className="d-dot"/> <div><strong>HS-Code Bridge:</strong> Tariff Correlation Table.</div></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--muted)' }}>INFRA</div>
              <div style={{ fontSize: '11px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>AWS Lambda (Serverless)</div>
            </div>
          </div>

          <div className="d-card d-card-accent">
            <div className="d-tag-mono">MVP DEFINITION</div>
            <p className="d-para" style={{ margin: 0, fontSize: '10px' }}>
              Unit #1 cannot ship without the <strong>Regulatory Knowledge Base</strong> encoded into the Python script. The software is useless without the tax law logic.
            </p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE V",
      title: "Asset Genesis\n(R&D Plan)",
      label: "BUILDING THE 'BLACK BOX'",
      render: () => (
        <div className="d-content">
          <p className="d-para" style={{ fontSize: '11px', marginBottom: '12px' }}>
             The core IP (Tax Logic Library) does not exist in an API. It must be <strong>engineered</strong> via a 90-day sprint.
          </p>

          <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px', marginLeft: '8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* MONTH 1: INGESTION */}
            <div style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', left: '-21px', top: '4px', width: '8px', height: '8px', background: 'var(--ink)', borderRadius: '50%' }}></div>
               <div className="d-tag-mono" style={{ color: 'var(--muted)' }}>MONTH 1: INGESTION</div>
               <div style={{ fontSize: '12px', fontWeight: 900 }}>Manual Mapping (The Grind)</div>
               <div className="d-metric-label">Contract Tax Engineer to map Top 500 Anexo-24 Codes to standard ERP descriptions.</div>
            </div>

            {/* MONTH 2: ENCODING */}
            <div style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', left: '-21px', top: '4px', width: '8px', height: '8px', background: 'var(--ink)', borderRadius: '50%' }}></div>
               <div className="d-tag-mono" style={{ color: 'var(--muted)' }}>MONTH 2: ENCODING</div>
               <div style={{ fontSize: '12px', fontWeight: 900 }}>RegEx Translation</div>
               <div className="d-metric-label">Convert manual CSVs into Python Logic Rules (e.g., "If 'Steel' + '7210' = EXEMPT").</div>
            </div>

            {/* MONTH 3: VALIDATION */}
            <div style={{ position: 'relative' }}>
               <div style={{ position: 'absolute', left: '-21px', top: '4px', width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
               <div className="d-tag-mono" style={{ color: 'var(--accent)' }}>MONTH 3: STABILIZATION</div>
               <div style={{ fontSize: '12px', fontWeight: 900 }}>Golden Dataset Test</div>
               <div className="d-metric-label">Back-test against 3 years of Partner Broker data to eliminate false positives.</div>
            </div>
          </div>

          <div className="d-card-dark" style={{ marginTop: 'auto', padding: '12px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div className="d-metric-label">R&D BUDGET</div>
                   <div className="d-metric-unit" style={{ fontSize: '18px' }}>15k USD</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div className="d-metric-label">RESULTING ASSET</div>
                   <div style={{ fontWeight: 900, fontSize: '11px', color: 'var(--accent)' }}>Proprietary .JSON Library</div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE V",
      title: "Shadow\nGovernance",
      label: "HUMAN QA PROTOCOLS",
      render: () => (
        <div className="d-content">
          <div className="d-card" style={{ border: '1px solid var(--accent)', background: 'rgba(220, 38, 38, 0.1)' }}>
             <div className="d-tag-mono" style={{ color: 'white' }}>THE FAIL-SAFE</div>
             <div style={{ fontSize: '14px', fontWeight: 900, color: 'white' }}>Human-in-the-Loop (HITL)</div>
             <p className="d-para" style={{ marginTop: '4px', fontSize: '10px', color: 'rgba(255,255,255,0.8)' }}>
                We do not let the AI file directly to the SAT. A Senior Tax Engineer must digitally sign the "Evidence Pack."
             </p>
          </div>

          <div style={{ marginTop: '12px' }}>
            <div className="d-list-item"><div className="d-dot"/> <div><strong>5% Spot Check:</strong> Random sampling of matched pairs.</div></div>
            <div className="d-list-item"><div className="d-dot"/> <div><strong>Ambiguity Threshold:</strong> Matches &lt;98% confidence trigger manual review.</div></div>
            <div className="d-list-item"><div className="d-dot"/> <div><strong>Liability Firewall:</strong> Client retains final filing authority.</div></div>
          </div>

          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div className="d-tag-mono">QA METRIC</div>
             <div style={{ fontWeight: 900 }}>Zero False-Positive Tolerance</div>
          </div>
        </div>
      )
    },

    /* PHASE VI: THE PHYSICS (FINANCIALS) */
    {
      phase: "PHASE VI",
      title: "CAPEX &\nSetup Costs",
      label: "ASSET POSTURE",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
               <div className="d-metric-label">Infrastructure</div>
               <div style={{ fontWeight: 900, fontSize: '14px' }}>15k USD</div>
            </div>
            <div className="d-card">
               <div className="d-metric-label">Legal/Setup</div>
               <div style={{ fontWeight: 900, fontSize: '14px' }}>10k USD</div>
            </div>
          </div>
          <div className="d-card d-card-accent" style={{ marginTop: '12px' }}>
             <div className="d-tag-mono">BOOTSTRAP EFFICIENCY</div>
             <p className="d-para" style={{ margin: 0, fontSize: '11px' }}>Total initial setup capital required: <strong>$25k USD</strong>. High AI leverage eliminates the need for physical auditing facilities.</p>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div className="d-metric-label">Capital Posture</div>
             <div style={{ fontWeight: 900 }}>ASSET-LIGHT / MAQUILA STYLE</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE VI",
      title: "Unit\nEconomics",
      label: "ADJUSTED PROFITABILITY",
      render: () => (
        <div className="d-content">
          {/* SCANNER HEADER */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'rgba(255,255,255,0.08)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', marginTop: '12px' }}>
            <div className="d-tag-mono" style={{ margin: 0, opacity: 0.6 }}>[ COST_DRIVER ]</div>
            <div className="d-tag-mono" style={{ margin: 0, textAlign: 'right', color: 'var(--accent)' }}>USD_ALLOC</div>
          </div>

          {/* DATA GRID */}
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--muted)' }}>ACQUISITION (CAC)</div>
              <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>8,000</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--muted)' }}>ENGINE COMPUTE</div>
              <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono' }}>1,500</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'rgba(220, 38, 38, 0.05)' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--accent)' }}>TOTAL MARGINAL</div>
              <div style={{ fontSize: '12px', fontWeight: 900, fontFamily: 'Roboto Mono', color: 'var(--accent)' }}>9,500</div>
            </div>
          </div>

          <div className="d-grid-2" style={{ marginTop: 'auto' }}>
            <div className="d-card" style={{ textAlign: 'center' }}>
               <div className="d-metric-label">AVG FEE</div>
               <div className="d-metric-unit">32k</div>
            </div>
            <div className="d-card" style={{ textAlign: 'center', borderColor: 'var(--accent)' }}>
               <div className="d-metric-label">GROSS MARGIN</div>
               <div className="d-metric-unit" style={{ color: 'var(--accent)' }}>70%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE VI",
      title: "3-Year P&L\nProjection",
      label: "GROWTH TARGETS",
      render: () => (
        <div className="d-content">
           {/* SCANNER HEADER */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.08)', padding: '8px 4px', border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', marginTop: '12px' }}>
            <div className="d-tag-mono" style={{ margin: 0, paddingLeft: '8px', opacity: 0.6 }}>METRIC</div>
            <div className="d-tag-mono" style={{ margin: 0, textAlign: 'right' }}>Y01</div>
            <div className="d-tag-mono" style={{ margin: 0, textAlign: 'right' }}>Y02</div>
            <div className="d-tag-mono" style={{ margin: 0, textAlign: 'right', paddingRight: '8px', color: 'var(--accent)' }}>Y03</div>
          </div>

          {/* DATA GRID */}
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
            {/* REVENUE */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '12px 4px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--muted)', paddingLeft: '8px' }}>REVENUE</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono' }}>285k</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono' }}>740k</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono', paddingRight: '8px', fontWeight: 900 }}>1.6M</div>
            </div>
            {/* EBITDA */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '12px 4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--accent)', paddingLeft: '8px' }}>EBITDA %</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono', opacity: 0.5 }}>-5%</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono' }}>21%</div>
              <div style={{ fontSize: '11px', textAlign: 'right', fontFamily: 'Roboto Mono', paddingRight: '8px', fontWeight: 900, color: 'var(--accent)' }}>33%</div>
            </div>
          </div>

          <div className="d-card" style={{ marginTop: 'auto', textAlign: 'center', border: '1px solid var(--accent)', background: 'rgba(220, 38, 38, 0.1)' }}>
             <div className="d-tag-mono" style={{ color: 'white' }}>CASH BREAK-EVEN</div>
             <div className="d-metric-unit" style={{ fontSize: '24px', color: 'white' }}>Month 14</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE VI",
      title: "18-Month\nCashflow",
      label: "STRESS-TEST: DELAYED PAYMENT",
      render: () => (
        <div className="d-content">
          <div className="d-card" style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid var(--accent)' }}>
             <div className="d-tag-mono">VALLEY OF DEATH</div>
             <div className="d-metric-unit" style={{ fontSize: '32px' }}>-218k USD</div>
             <div className="d-metric-label">Max. Cumulative Burn (Month 7)</div>
          </div>
          <div className="d-card" style={{ marginTop: '12px' }}>
             <div className="d-tag-mono">RISK MITIGATION</div>
             <p className="d-para" style={{ margin: 0, fontSize: '10px' }}>
                We maintain a <strong>$40k Liquidity Reserve</strong> to buffer against 90-day collection delays from major Maquiladoras.
             </p>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div className="d-tag-mono">SURVIVAL LEVER</div>
             <div style={{ fontWeight: 900 }}>Variable Sales Commission strictly tied to Cash Collection.</div>
          </div>
        </div>
      )
    },

    /* PHASE VII: EXECUTION & ENDGAME */
    {
      phase: "PHASE VII",
      title: "180-Day\nActivation",
      label: "EXECUTION ROADMAP",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
             <div style={{ fontWeight: 900, fontSize: '11px' }}>Days 1-60</div>
             <div className="d-metric-label">Channel Alliances (Broker Data Feeds)</div>
          </div>
          <div className="d-card">
             <div style={{ fontWeight: 900, fontSize: '11px' }}>Days 61-120</div>
             <div className="d-metric-label">Free Health Checks (Proof of Value)</div>
          </div>
          <div className="d-card">
             <div style={{ fontWeight: 900, fontSize: '11px' }}>Days 121-180</div>
             <div className="d-metric-label">Revenue Engine Conversion (Success Fees)</div>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div className="d-tag-mono">MARKET ENTRY</div>
             <div style={{ fontWeight: 900 }}>Audit-Based Entry Strategy [A3]</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE VII",
      title: "Exit Strategy\n& Endgame",
      label: "M&A TRIGGER POINTS",
      render: () => (
        <div className="d-content">
          <div className="d-card">
             <div style={{ fontWeight: 900 }}>Strategic Acquirers</div>
             <div className="d-metric-label">Thomson Reuters // Deloitte // EY TaxTech</div>
          </div>
          <div className="d-grid-2" style={{ marginTop: 'auto' }}>
            <div className="d-card-dark" style={{ textAlign: 'center' }}>
               <div className="d-metric-label">Multiple</div>
               <div style={{ fontWeight: 900, fontSize: '20px' }}>8x - 12x</div>
            </div>
            <div className="d-card-dark" style={{ textAlign: 'center' }}>
               <div className="d-metric-label">Valuation</div>
               <div style={{ fontWeight: 900, fontSize: '20px' }}>60M+</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "CONCLUSION",
      title: "Strategic\nMandate",
      label: "FINAL DIRECTIVE",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
             <div className="d-list-item"><div className="d-dot"/> <div>Execute First 10 Health Checks</div></div>
             <div className="d-list-item"><div className="d-dot"/> <div>Stabilize Ingestion SLAs</div></div>
             <div className="d-list-item"><div className="d-dot"/> <div>Target $3.2M ARR Milestone</div></div>
          </div>
          <div className="d-card-dark" style={{ marginTop: 'auto', textAlign: 'center' }}>
             <div style={{ fontWeight: 900, fontSize: '18px', fontStyle: 'italic' }}>Strategic Lab Architecture Locked.</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <DossierEngineV2
      slides={slides}
      branding={{
        title: "VAT Recovery Bot",
        subtitle: "Forensic Audit Dossier v2.0",
        version: "Internal // 2026.Q1"
      }}
      contact={{
        phone: "+52 614 546 3178",
        whatsapp: "https://wa.me/526145463178",
        email: "architect@stratlab.ai",
        website: "stratlab.ai/bot-0154"
      }}
      theme={{
        parchment: "#0A0A0A",
        ink: "#FFFFFF",
        accent: "#DC2626",
        muted: "#737373"
      }}
    />
  );
}
