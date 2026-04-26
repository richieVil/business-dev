'use client';
import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function FolixBlueprint() {
  const branding = {
    title: "FOLIX",
    subtitle: "FORENSIC ROADMAP MANIFESTO",
    version: "v1.1-FORENSIC"
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20technical%20roadmap%20manifesto%20and%20want%20to%20discuss%20Pillar%20deployment.",
    email: "quadraticldm@gmail.com",
    website: "business-dev.vercel.app/folix/blueprint"
  };

  const theme = {
    parchment: "#FFFFFF",
    ink: "#0F172A",
    accent: "#2563EB",
    muted: "#64748B"
  };

  const slides = [
    {
      phase: "STRATEGIC OVERVIEW",
      title: "ARCHITECTURAL BLUEPRINT & ROADMAP MANIFESTO.",
      label: "TECHNICAL NORTH STAR",
      render: () => (
        <div className="d-content">
          <p className="d-para">
            {"This manifesto defines the 7-Factor Resilience framework used to build the Folix bridge—decoupling the sales event from the fiscal event."}
          </p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">CORE MISSION</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              {"To eliminate checkout friction by translating modern POS payloads into SAT-compliant records with zero human data entry."}
            </p>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
              <div className="d-tag-mono">RESILIENCE</div>
              <div className="d-metric-label">7-FACTOR AUDIT</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">GOVERNANCE</div>
              <div className="d-metric-label">MILITARY-GRADE</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PILLAR I: INGESTION",
      title: "THE INTEGRATION MATURITY MODEL (IMM).",
      label: "PARASITE ARCHITECTURE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Phased evolution from manual scraping to native POS marketplace injection.</p>
          <div className="d-step">{"L1: Email Scraper (Zero-Code)"}</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">{"L2: Native Webhooks (Real-time)"}</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">{"L3: Marketplace Apps (Dynamic QR)"}</div>
          <p className="d-para" style={{ marginTop: '16px', fontSize: '11px' }}>
            Level 1 uses a <strong>Footer-Hack</strong> string in POS settings to trigger the 15s scan journey without API access.
          </p>
        </div>
      )
    },
    {
      phase: "PILLAR I: INGESTION",
      title: "PARSING RESILIENCE & ECONOMIC CEILINGS.",
      label: "INGESTION FAILSAFES",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">ECONOMIC THROTTLING</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Malformed payloads exceeding the LLM-Scraping cost ceiling are routed to manual correction to protect unit margins.
            </p>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
              <div className="d-tag-mono">HYBRID</div>
              <p className="d-para" style={{ fontSize: '10px' }}>Regex + LLM Fallback.</p>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">OCR</div>
              <p className="d-para" style={{ fontSize: '10px' }}>Photo-to-Extraction support.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PILLAR II: IDENTITY",
      title: "UNIVERSAL IDENTITY VAULT & SOCIAL INVOICING.",
      label: "THE NETWORK ANCHOR",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">SOCIAL INVOICING</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              {"Resolving the 'Prestame tu RFC' reality: Family and assistants can fulfill fresh tickets without legal ownership."}
            </p>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card d-card-accent">
              <div className="d-tag-mono">15S RULE</div>
              <div className="d-metric-label">NO-FRICTION ENTRY</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">PROXY-LOCK</div>
              <div className="d-metric-label">NO HISTORY ACCESS</div>
            </div>
          </div>
          <div className="d-list-item" style={{ marginTop: '12px' }}><div className="d-dot" /> Device-specific Channel-Lock</div>
          <div className="d-list-item"><div className="d-dot" /> Many-to-Many Phone:RFC Mapping</div>
        </div>
      )
    },
    {
      phase: "PILLAR II: IDENTITY",
      title: "CRYPTO-SOVEREIGNTY & REPUTATION GUARDS.",
      label: "GOVERNANCE GATES",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">69-B</div>
              <div className="d-metric-label">BLACKLIST SCRUB</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">ARCO</div>
              <div className="d-metric-label">72H PURGE</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            <strong>Sovereign Proof:</strong> Historical audits require a local e.firma handshake. Folix never touches the private key (.key).
          </p>
          <div className="d-step">RECOVERY: PKI Break-Glass Override</div>
        </div>
      )
    },
    {
      phase: "PILLAR III: MAPPING",
      title: "THE CLASSIFICATION PIPELINE & GOVERNANCE.",
      label: "MAPPING INTELLIGENCE",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">GOVERNANCE</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              "No Code, No Invoice." Fulfillment is hard-blocked for unknown items to protect the merchant from tax liability.
            </p>
          </div>
          <div className="d-tag-mono" style={{ marginTop: '16px', marginBottom: '8px' }}>INHERITANCE CASCADE</div>
          <div className="d-step">Verified SKU Mapping</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">Verified Category Mapping</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">Verified Merchant Default</div>
        </div>
      )
    },
    {
      phase: "PILLAR III: MAPPING",
      title: "MATHEMATICAL INTEGRITY: THE PENNY GUARD.",
      label: "FISCAL PRECISION",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">CENT-RECONCILIATION</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Algorithm forces mathematical parity with POS totals to prevent SAT XML rejection at scale.
            </p>
          </div>
          <div className="d-list-item" style={{ marginTop: '12px' }}><div className="d-dot" /> Varios Shield (Generic protection)</div>
          <div className="d-list-item"><div className="d-dot" /> Reverse-Base Calculation Logic</div>
          <div className="d-list-item"><div className="d-dot" /> IEPS/VAT Rate Resolver</div>
        </div>
      )
    },
    {
      phase: "PILLAR IV: UX",
      title: "STATELESS RESILIENCE & GHOST BUFFERING.",
      label: "CONCIERGE FLOW",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">POLLING</div>
              <div className="d-metric-label">15S GHOST WINDOW</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">RESUME</div>
              <div className="d-metric-label">DB-PERSISTENCE</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            <strong>Asynchronous Fallback:</strong> If missing after 15s, Maria is offered "Notify me when ready," transitioning to background fulfillment.
          </p>
          <div className="d-list-item"><div className="d-dot" /> Privacy Kill-Switch (Instant Purge)</div>
        </div>
      )
    },
    {
      phase: "PILLAR IV: UX",
      title: "NON-REPUDIATION & DELIVERY PROOFS.",
      label: "FLEXIBLE FULFILLMENT",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">LEGAL DELIVERY</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Tracking of Meta 'Read' status to prove fiscal delivery to the buyer's hands.
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '16px' }}>
            <strong>Delivery Shield:</strong> API failures trigger automatic fallback to verified Email delivery with SMS notification.
          </p>
        </div>
      )
    },
    {
      phase: "PILLAR V: ACCOUNTING",
      title: "THE CORRECTION CONCIERGE: SELF-HEALING.",
      label: "INFLUENCER CHANNEL",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">FORCE MULTIPLIER</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Eliminating the manual cancellation headache for Accountants.
            </p>
          </div>
          <div className="d-step" style={{ marginTop: '12px' }}>Accountant clicks 'FIX' in Dashboard</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">Bot asks Maria to re-sign with suggested 'Uso'</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">SAT Replacement XML issued automatically</div>
          <div className="d-list-item" style={{ marginTop: '12px' }}><div className="d-dot" /> Metadata Sync (Ghost Invoice Detection)</div>
        </div>
      )
    },
    {
      phase: "PILLAR V: ACCOUNTING",
      title: "FISCAL LOCKING & CFO CASH-FLOW PULSE.",
      label: "ADMINISTRATIVE CONTROL",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">MONTH-END SEAL</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Hard-lock periods to prevent late cancellations after tax returns are filed.
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '16px' }}>
            <strong>CFO View:</strong> Real-time tax liability preview (VAT/IEPS) showing debt-in-motion before month-end.
          </p>
          <div className="d-list-item"><div className="d-dot" /> White-Labeled Accountant Branding</div>
        </div>
      )
    },
    {
      phase: "PILLAR VI: COMPLIANCE",
      title: "THE SURGICAL EXTRACTION WORKFLOW.",
      label: "COMPLIANCE AUTOMATION",
      render: () => (
        <div className="d-content">
          <div className="d-quote">
            {"\"Automated recovery when a client demands an invoice for a ticket already in the Global CFDI.\""}
          </div>
          <div className="d-step">CANCEL Original Global CFDI (Reason 01)</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">ISSUE Individual XML for extracted ticket</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">RE-SIGN residual items in new Global Bundle</div>
          <p className="d-para" style={{ marginTop: '16px', fontSize: '11px' }}>
            Transforms a 2-hour manual reconciliation into a 1-click background task.
          </p>
        </div>
      )
    },
    {
      phase: "PILLAR VII: GOVERNANCE",
      title: "ZERO-VISIBILITY & FLE ENCRYPTION.",
      label: "TECHNICAL AUTHORITY",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">AES-256 FLE</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              PII is encrypted at the Field-Level. Keys are inaccessible to Folix Admins.
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '16px' }}>
            <strong>Blind Clerical Desk:</strong> Ingestion fixes are performed on a masked buffer. Admins see structure, never identity.
          </p>
          <div className="d-list-item"><div className="d-dot" /> M-of-N Sovereign Quorums</div>
          <div className="d-list-item"><div className="d-dot" /> Security Sentinel Blacklisting</div>
        </div>
      )
    },
    {
      phase: "EXECUTIVE SCORECARD",
      title: "THE SENTINEL METRICS: DETERMINISTIC SUCCESS.",
      label: "PROJECT KPIs",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">TTV INDEX</div>
              <div className="d-metric-unit">{"< 15s"}</div>
              <div className="d-metric-label">SCAN TO DELIVERY</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">REJECTION FLOOR</div>
              <div className="d-metric-unit">0%</div>
              <div className="d-metric-label">SAT REJECTION RATE</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">VAULT YIELD</div>
              <div className="d-metric-unit">{"> 40%"}</div>
              <div className="d-metric-label">RECOGNIZED IDENTITIES</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">SELF-HEALING</div>
              <div className="d-metric-unit">{"> 90%"}</div>
              <div className="d-metric-label">CORRECTION RATE</div>
            </div>
          </div>
          <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
            <div className="d-tag-mono">LIQUIDATION THRESHOLD</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '8px' }}>
              {"Folix operates on a deterministic venture mandate: Failure to maintain these benchmarks triggers immediate project liquidation to preserve capital."}
            </p>
            <div className="d-step">AUDIT: Immutable Latency Ledger</div>
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