'use client';
import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function FolixDossier() {
  const branding = {
    title: "FOLIX",
    subtitle: "FISCAL MIDDLEWARE & IDENTITY NETWORK",
    version: "v2.1-HF"
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20technical%20dossier%20for%20Folix%20and%20am%20interested%20in%20discussing%20the%20next%20steps.",
    email: "quadraticldm@gmail.com",
    website: "business-dev.vercel.app/folix"
  };

  const theme = {
    parchment: "#FFFFFF", // THE LEDGER (Institutional White)
    ink: "#0F172A",       // Slate 900 (Professional Ink)
    accent: "#2563EB",    // Cobalt Blue (Trust)
    muted: "#64748B"      // Slate 500 (Muted Detail)
  };

  const slides = [
    {
      phase: "S1: THE CATALYST",
      title: "STRUCTURAL RESOLUTION OF THE MEXICAN FISCAL FULFILLMENT GAP.",
      label: "EXECUTIVE THESIS",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">INFRASTRUCTURE ASSET</div>
            <p className="d-para" style={{ fontSize: '11px', marginBottom: '0' }}>
              Folix is a clinical response to the structural failure of fiscal fulfillment. We treat the 'Factura' not as a clerical task, but as a high-speed technical event.
            </p>
          </div>
          <div className="d-grid-2" style={{ marginTop: '12px' }}>
            <div className="d-card">
              <div className="d-tag-mono">LATENCY GOAL</div>
              <div className="d-metric-unit">&lt; 10s</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">ACCURACY</div>
              <div className="d-metric-unit">100%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "S1: THE CATALYST",
      title: "THE FAILURE OF USER-INITIATED REDIRECTION AND PORTAL-CLASS UX.",
      label: "FULFILLMENT DROP ANALYSIS",
      render: () => (
        <div className="d-content">
          <p className="d-para">
            Redirecting buyers to external URLs or manual portals creates an <strong>85% Fulfillment Drop</strong>. The 'Homework' model is a legacy failure.
          </p>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">THE FRICTION WALL</div>
            <p className="d-para" style={{ fontSize: '12px' }}>
              Transitioning from a physical checkout to a digital manual-entry portal creates a fatal UX collision in mobile environments.
            </p>
          </div>
        </div>
      )
    },
    {
      phase: "S1: THE CATALYST",
      title: "ASYNCHRONOUS ORCHESTRATION VIA HEADLESS FISCAL MIDDLEWARE.",
      label: "TECHNICAL MECHANISM",
      render: () => (
        <div className="d-content">
          <div className="d-step">TRIGGER: POS Webhook Payload</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">ORCHESTRATOR: Asynchronous Payload Ledger</div>
          <div className="d-step-arrow">↓</div>
          <div className="d-step">FULFILLMENT: Automated WhatsApp Certification</div>
          <p className="d-para" style={{ marginTop: '16px' }}>
            The sale is finalized instantly; the legal fulfillment is handled in the background. Zero human data entry at the point of sale.
          </p>
        </div>
      )
    },
    {
      phase: "S1: THE CATALYST",
      title: "IDENTITY PERSISTENCE: THE PHONE NUMBER AS THE MULTI-RFC NETWORK ANCHOR.",
      label: "IDENTITY VAULT",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">ZERO-FRICTION RECOGNITION</div>
            <p className="d-para" style={{ fontSize: '12px' }}>
              The WhatsApp ID serves as a persistent anchor. A single identity can manage multiple RFC aliases, creating a cross-merchant recognition moat.
            </p>
          </div>
          <div className="d-list-item"><div className="d-dot" /> Multi-Identity Support</div>
          <div className="d-list-item"><div className="d-dot" /> Phone-to-RFC Secure Ledger Mapping</div>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "SECURITY ARCHITECTURE: NON-CUSTODIAL HSM AND KMS VAULTING.",
      label: "TECHNICAL AUTHORITY",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">HSM</div>
              <div className="d-metric-label">SEAL ISOLATION</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">KMS</div>
              <div className="d-metric-label">ENCRYPTION</div>
            </div>
          </div>
          <p className="d-para">
            Digital Seals (CSD) are never stored in plain text. Every certification event is an isolated, encrypted transaction within a Hardware Security Module environment.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "THE CATALOG MAPPER: ALGORITHMIC SKU-TO-SAT KEY INHERITANCE.",
      label: "ENGINEERING MOAT",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent" style={{ padding: '12px' }}>
            <div className="d-tag-mono">CATEGORY INHERITANCE</div>
            <p className="d-para">
              Automated translation of internal POS SKUs to mandatory <strong>8-digit SAT keys</strong>. 
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            Reduces merchant setup latency by {">"}90% compared to legacy mapping, creating a deep barrier against generic API wrappers.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "VERTICAL SPECIALIZATION: TARGETING HIGH-DEDUCTION PROFESSIONAL SEGMENTS.",
      label: "COMMERCIAL ARCHETYPES",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">PRIVATE CLINICS</div>
              <p className="d-para" style={{ fontSize: '10px' }}>100% deductible medical fees.</p>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">FIELD TECHS</div>
              <p className="d-para" style={{ fontSize: '10px' }}>B2B operational expenses.</p>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            We prioritize segments where tax certainty is a <strong>Mandatory Requirement</strong>, not a convenience.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "THE GATEKEEPER FLYWHEEL: ACCOUNTANT-LED DISTRIBUTION AND ADOPTION.",
      label: "INFLUENCER CHANNEL",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-tag-mono">FREE DESPACHO PORTAL</div>
            <p className="d-para" style={{ fontSize: '11px' }}>
              We eliminate 'Month-End Debt' for accountants by providing a unified portal for client XML downloads. 
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            Accountants mandate Folix adoption across their client base to ensure 100% data accuracy and zero-labor reconciliation.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "OPERATIONAL RESILIENCE: DISTRIBUTED MULTI-NODE WABA API MESH.",
      label: "PLATFORM SHIELD",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">NODE BALANCING</div>
            <p className="d-para">
              Traffic is balanced across multiple <strong>WhatsApp Business Accounts (WABA)</strong> to mitigate Meta-level platform risk.
            </p>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            Architecture ensures 99.9% fulfillment uptime even in the event of localized account flagging or network throttling.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "STRATEGIC CROSSROADS: EVOLUTION AND PIVOT ALTERNATIVES.",
      label: "RISK MITIGATION",
      render: () => (
        <div className="d-content">
          <div className="d-list-item">
            <div className="d-tag-mono">UP-LEVEL</div>
            <p className="d-para" style={{ fontSize: '11px' }}>Pivot from individual SMB retail to <strong>Franchise Groups & Malls</strong> for unified fiscal branding.</p>
          </div>
          <div className="d-list-item">
            <div className="d-tag-mono">ADJACENCY</div>
            <p className="d-para" style={{ fontSize: '11px' }}>Utilize the Identity Vault for <strong>Employee Social Welfare Deductions</strong> (Maquiladora sector).</p>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            The architecture is designed for <strong>Strategic Elasticity</strong>, ensuring the core asset remains viable even if the primary POS bridge requires redirection.
          </p>
        </div>
      )
    },
    {
      phase: "S2: THE MACHINE",
      title: "PHASE 1 VALIDATION: CORE STRATEGIC HYPOTHESES.",
      label: "STRESS-TEST ROADMAP",
      render: () => (
        <div className="d-content">
          <div className="d-list-item">
            <div className="d-tag-mono">H1: PROXY USAGE</div>
            <p className="d-para" style={{ fontSize: '11px' }}>Multi-RFC management by professional assistants is the primary driver of retention.</p>
          </div>
          <div className="d-list-item">
            <div className="d-tag-mono">H2: TRUST LATENCY</div>
            <p className="d-para" style={{ fontSize: '11px' }}>Certifications exceeding 60s correlate with a 15% drop in buyer trust.</p>
          </div>
          <div className="d-list-item">
            <div className="d-tag-mono">H3: CATALOG DECAY</div>
            <p className="d-para" style={{ fontSize: '11px' }}>Manual SKU-override frequency is the critical metric for catalog health.</p>
          </div>
        </div>
      )
    },
    {
      phase: "S3: THE MANDATE",
      title: "EXECUTION MANDATE: THE 90-DAY DETERMINISTIC LIQUIDATION THRESHOLD.",
      label: "PROJECT GO-SIGNAL",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">50</div>
              <div className="d-metric-label">PAID USERS</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">30</div>
              <div className="d-metric-label">DAYS POST-LAUNCH</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}>
            Failure to hit the <strong>Success Benchmark</strong> triggers immediate project liquidation to preserve laboratory capital. 
          </p>
          <div className="d-step">MILESTONE: DOMAIN CHAMPION AUDIT PENDING</div>
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