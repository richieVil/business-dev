'use client';

import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function VendorVisionShieldDossier() {
  const branding = {
    title: "Vendor-Vision Shield",
    subtitle: "BI-0063 // Strategic Dossier",
    version: "V2.1-FEB2026"
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20technical%20dossier%20for%20Vendor-Vision%20Shield%20and%20am%20interested%20in%20discussing%20the%20next%20steps.",
    email: "quadraticldm@gmail.com",
    website: "business-dev-two.vercel.app/vendor-vision-shield"
  };

  const theme = {
    parchment: "#0A0A0A",
    ink: "#FFFFFF",
    accent: "#DC2626",
    muted: "#A3A3A3"
  };

  const slides = [
    // S01: EXECUTIVE BRIEFING – STRATEGIC THESIS
    {
      phase: "PHASE I: THE CATALYST",
      title: "EXECUTIVE BRIEFING\nSTRATEGIC THESIS",
      label: "FISCAL CONTINUITY INFRASTRUCTURE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <p className="d-para">
            Vendor-Vision Shield is a hardened <strong>Fiscal Gatekeeper</strong> designed to insulate US Tier-1 Manufacturers from systemic tax contamination in the Mexican corridor.
          </p>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>$14 M USD</div>
            <div className="d-metric-label">HOSTAGE VAT REFUNDS AT RISK</div>
          </div>
          <div className="d-quote">
            "I don't care about 'AI visibility.' I care about the $14 M USD VAT refund the Mexican government is holding hostage."
          </div>
          <p className="d-para">
            We transform Mexican vendor compliance from a manual, error-prone administrative task into a <strong>Hardened Digital Perimeter</strong>.
          </p>
        </div>
      )
    },

    // S02: THE "WHY NOW?" Catalyst
    {
      phase: "PHASE I: THE CATALYST",
      title: "THE \"WHY NOW?\"\nREGULATORY PINCER",
      label: "UFLPA & SAT COMPLIANCE CONVERGENCE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <p className="d-para">
            Supply chains are currently facing an unprecedented <strong>Dual-Enforcement Wave</strong> that threatens both physical transit and fiscal liquidity.
          </p>
          <div className="d-grid-2">
            <div className="d-card d-card-accent">
              <div className="d-tag-mono">US ENFORCEMENT</div>
              <div className="d-list-item">
                <div className="d-dot"></div>
                <span>Shipment Seizures: Forced Labor (UFLPA) Tier-2 audits.</span>
              </div>
            </div>
            <div className="d-card d-card-accent">
              <div className="d-tag-mono">MEXICAN PURGE</div>
              <div className="d-list-item">
                <div className="d-dot"></div>
                <span>Immediate de-certification of "Toxic" IMMEX vendors.</span>
              </div>
            </div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">THE IMPACT</div>
            <p className="d-para" style={{ marginBottom: 0 }}>
              A single vendor failure results in the immediate loss of <strong>16.00% VAT Credits</strong> and suspension of FAST-LANE border privileges.
            </p>
          </div>
        </div>
      )
    },

    // S03: THE INVISIBLE TAX
    {
      phase: "PHASE I: THE CATALYST",
      title: "THE INVISIBLE TAX\nANNUAL FISCAL LEAKAGE",
      label: "QUANTIFIED OPERATIONAL WASTE",
      render: () => (
        <div className="d-content" style={{ color: theme.ink }}>
          <p className="d-para">
            For a Tier-1 Manufacturer with <strong>$500 M USD</strong> in annual Mexican spend, the status quo is a multi-million dollar EBITDA leak.
          </p>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>$2.85 M USD</div>
            <div className="d-metric-label">TOTAL ANNUAL FISCAL WASTE</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit" style={{ fontSize: '18px' }}>$1.6 M USD</div>
              <div className="d-metric-label">LOST VAT CREDITS</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit" style={{ fontSize: '18px' }}>$0.8 M USD</div>
              <div className="d-metric-label">SAT PENALTIES</div>
            </div>
          </div>
          <div className="d-card-accent" style={{ padding: '8px 12px', marginTop: '4px' }}>
            <div className="d-list-item" style={{ marginBottom: 0 }}>
              <div className="d-dot"></div>
              <span>Operational Latency: <strong>$450 k USD</strong> in idling fees.</span>
            </div>
          </div>
        </div>
      )
    },

    // S04: THE SAMPLING BLIND SPOT
{
	phase: "PHASE I: THE CATALYST",
	title: "THE SAMPLING\nBLIND SPOT",
	label: "DETECTION VACUUM",
	render: () => (
		<div className="d-content" style={{ color: theme.ink }}>
			<p className="d-para">
				Legacy compliance models rely on <strong>Statistical Sampling</strong> (5.00% audit rate). This creates a mathematical detection vacuum.
			</p>
			<div className="d-card d-card-dark">
				<div className="d-metric-unit" style={{ color: theme.parchment }}>60.00%</div>
				<div className="d-metric-label">PROBABILITY OF MISSING CONTAMINATION</div>
			</div>
			<div className="d-card d-card-accent">
				<div className="d-tag-mono">SUBJECTIVITY GAP</div>
				<p className="d-para" style={{ marginBottom: 0 }}>
					Human auditors check for document <em>presence</em>, but are technically blind to <strong>Cryptographic Fraud</strong> and SAT de-certifications occurring mid-cycle.
				</p>
			</div>
			<div className="d-quote">
				"Statistical sampling is just a high-priced way to guess at compliance."
			</div>
		</div>
	)
},

// S05: BEHAVIORAL FRICTION
{
	phase: "PHASE I: THE CATALYST",
	title: "BEHAVIORAL FRICTION\nTHE INERTIA BARRIERS",
	label: "INTEGRATION DEBT & LIABILITY FEAR",
	render: () => (
		<div className="d-content" style={{ color: theme.ink }}>
			<p className="d-para">
				High-stakes adoption is stalled by two primary structural fears that override pure Return on Investment logic.
			</p>
			<div className="d-card-accent">
				<div className="d-tag-mono">ERP TRAUMA (INTEGRATION DEBT)</div>
				<p className="d-para" style={{ fontSize: '12px' }}>
					Supply Chain Directors fear the <strong>18-Month SAP/Oracle Cycle</strong>. They perceive any new software as a hidden integration debt that risks global payment runs.
				</p>
			</div>
			<div className="d-card-accent" style={{ marginTop: '12px' }}>
				<div className="d-tag-mono">THE SAFE HARBOR FALLACY</div>
				<p className="d-para" style={{ fontSize: '12px' }}>
					Legal teams cling to "Big-4" advisory firms for <strong>Liability Deflection</strong>. They fear an algorithm cannot act as a human scapegoat during a SAT federal audit.
				</p>
			</div>
			<p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
				<em>Solution:</em> Shield enters as a <strong>Zero-Integration Sidecar</strong>, bypassing IT blockers via retrospective forensic lookbacks.
			</p>
		</div>
	)
},

// S06: TECHNICAL USP – THE INGESTION FLOW
{
	phase: "PHASE I: THE CATALYST",
	title: "TECHNICAL USP\nTHE INGESTION FLOW",
	label: "NODE SYMMETRY",
	render: () => (
		<div className="d-content" style={{ color: theme.ink }}>
			<div className="d-grid-2">
				<div className="d-card">
					<div className="d-tag-mono">HQ NODE</div>
					<div className="d-metric-label">OFFICE CLEAN</div>
					<div className="d-list-item" style={{ marginTop: '8px' }}>
						<div className="d-dot"></div>
						<span>ERP Bulk Upload: CFDI XML/PDF Ingestion.</span>
					</div>
					<div className="d-list-item">
						<div className="d-dot"></div>
						<span>Digital Signature Validation (RSA-2048).</span>
					</div>
				</div>
				<div className="d-card d-card-accent">
					<div className="d-tag-mono">GRIT NODE</div>
					<div className="d-metric-label">INDUSTRIAL BORDER</div>
					<div className="d-list-item" style={{ marginTop: '8px' }}>
						<div className="d-dot"></div>
						<span>Mobile Web-Bot: WhatsApp Capture.</span>
					</div>
					<div className="d-list-item">
						<div className="d-dot"></div>
						<span>10-Lux Low-Light & Grit Correction.</span>
					</div>
				</div>
			</div>
			<div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
				<div className="d-metric-unit" style={{ color: theme.parchment }}>&lt; 200.00 ms</div>
				<div className="d-metric-label">TOTAL VALIDATION LATENCY</div>
			</div>
			<p className="d-para" style={{ marginTop: '8px', fontSize: '12px' }}>
				Shield synchronizes the <strong>Clean Office</strong> ledger with <strong>Border Reality</strong>, eliminating data latency at the gate.
			</p>
		</div>
	)
},
// S07: PERFORMANCE BENCHMARKS – THE BRUTALISTA PARITY
{
  phase: "PHASE I: THE CATALYST",
  title: "PERFORMANCE\nBRUTALISTA PARITY",
  label: "ENVIRONMENTAL STRESS TEST",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Theoretical laboratory accuracy fails at the industrial border. We calibrate for <strong>Environmental Grit</strong> as a baseline requirement.
      </p>
      <div className="d-card">
        <div className="d-grid-2" style={{ borderBottom: '1px solid #333', paddingBottom: '4px', marginBottom: '8px' }}>
          <div className="d-tag-mono">STRESSOR</div>
          <div className="d-tag-mono" style={{ textAlign: 'right' }}>SHIELD SOLUTION</div>
        </div>
        <div className="d-grid-2" style={{ marginBottom: '8px' }}>
          <div className="d-metric-label">THERMAL FADE</div>
          <div className="d-list-item" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
            <span>Contrast-Stretching Vision Transformer</span>
          </div>
        </div>
        <div className="d-grid-2" style={{ marginBottom: '8px' }}>
          <div className="d-metric-label">LOW-LUX (10 LUX)</div>
          <div className="d-list-item" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
            <span>Atmospheric Binarization Filter</span>
          </div>
        </div>
        <div className="d-grid-2">
          <div className="d-metric-label">PORTAL BLACKOUT</div>
          <div className="d-list-item" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
            <span>24-HR Edge-Cached State Ledger</span>
          </div>
        </div>
      </div>
      <div className="d-grid-2" style={{ marginTop: '8px' }}>
        <div className="d-card d-card-dark">
          <div className="d-metric-unit" style={{ color: theme.parchment }}>99.90%</div>
          <div className="d-metric-label">FIELD ACCURACY</div>
        </div>
        <div className="d-card d-card-dark">
          <div className="d-metric-unit" style={{ color: theme.parchment }}>166x</div>
          <div className="d-metric-label">EFFICIENCY GAIN</div>
        </div>
      </div>
    </div>
  )
},

// S08: STRATEGIC POSITIONING – UNIT OF VALUE
{
  phase: "PHASE I: THE CATALYST",
  title: "STRATEGIC POSITIONING\nUNIT OF VALUE",
  label: "RECLAIMED AUDIT LIQUIDITY",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        We define the <strong>Unit of Value</strong> as the net avoided liability preserved per individual cross-border transaction.
      </p>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">PRIMARY UNIT YIELD</div>
        <div className="d-metric-unit">$28 k USD</div>
        <div className="d-metric-label">AVOIDED LIABILITY PER $100 k USD INVOICE</div>
      </div>
      <div className="d-grid-2" style={{ marginTop: '12px' }}>
        <div className="d-card">
          <div className="d-metric-unit">20+ HRS</div>
          <div className="d-metric-label">RECLAIMED CLERK TIME</div>
        </div>
        <div className="d-card">
          <div className="d-metric-unit">100%</div>
          <div className="d-metric-label">FISCAL CENSUS</div>
        </div>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
        Vendor-Vision Shield transforms "Compliance" from an administrative expense into a <strong>Direct Capital Recovery Engine</strong>.
      </p>
    </div>
  )
},

// S09: SUBSTITUTION AUDIT – ENTRY MANEUVER
{
  phase: "PHASE I: THE CATALYST",
  title: "SUBSTITUTION AUDIT\nENTRY MANEUVER",
  label: "DIRECT BUDGET DISPLACEMENT",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        The pilot is engineered for <strong>High Sales Velocity</strong> by categorizing the entry as a Direct Substitution for existing Trade Compliance fees.
      </p>
      <div className="d-card d-card-dark">
        <div className="d-metric-unit" style={{ color: theme.parchment }}>$15 k USD</div>
        <div className="d-metric-label">DIAGNOSTIC LOOKBACK ENTRY FEE</div>
      </div>
      <div className="d-card-accent">
        <div className="d-tag-mono">THE BYPASS STRATEGY</div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Budget Alignment:</strong> Below $25 k USD CFO discretionary limit.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>IT Friction:</strong> Zero-Integration "Sidecar" delivery model.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Substitution:</strong> Replaces quarterly consultant sample-audits.</span>
        </div>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
        We capture 100% of existing compliance budget for 50.00% of the legacy consultant cost.
      </p>
    </div>
  )
},
// S10: STRATEGIC INTEGRATION – THE DIGITAL SIDECAR
{
  phase: "PHASE II: INTELLIGENCE",
  title: "STRATEGIC INTEGRATION\nTHE DIGITAL SIDECAR",
  label: "BYPASSING THE 18-MONTH IT GATE",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        To achieve immediate deployment, Shield utilizes a <strong>Zero-Integration "Sidecar"</strong> architecture that bypasses the Enterprise IT Security cycle.
      </p>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">THE BYPASS PROTOCOL</div>
        <div className="d-list-item" style={{ marginTop: '4px' }}>
          <div className="d-dot"></div>
          <span><strong>Ingestion:</strong> Manual "Data Dump" of Electronic Tax Receipt archives via secure SFTP.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Processing:</strong> External Cryptographic Validation of digital signatures without ERP write-access.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Output:</strong> Secure Risk Contamination PDF delivered to CFO within 48 hours.</span>
        </div>
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">THE DEFENSIVE MOAT</div>
        <div className="d-metric-unit" style={{ color: theme.parchment }}>5 YEARS</div>
        <div className="d-metric-label">FORENSIC HISTORY / AUDIT PERSISTENCE</div>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '12px' }}>
        We store immutable, timestamped snapshots required to defend against government clawbacks up to 5 years after the transaction.
      </p>
    </div>
  )
},

// S11: MARKET INTELLIGENCE – BOTTOM-UP ARITHMETIC
{
  phase: "PHASE II: INTELLIGENCE",
  title: "MARKET INTELLIGENCE\nREVENUE ARITHMETIC",
  label: "CAPITAL PROTECTION TAM / SAM / SOM",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card">
        <div className="d-tag-mono">TAM (GLOBAL TRADE SECURITY)</div>
        <div className="d-metric-unit">$2.25 B USD</div>
        <div className="d-metric-label" style={{ fontSize: '9px' }}>[50,000 Global Manufacturers] * [$45,000 USD Base Fee]</div>
      </div>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">SAM (US-MX CORRIDOR)</div>
        <div className="d-metric-unit">$157 M USD</div>
        <div className="d-metric-label" style={{ fontSize: '9px' }}>[3,500 IMMEX Entities] * [$45,000 USD Platform Fee]</div>
      </div>
      <div className="d-card d-card-dark">
        <div className="d-tag-mono">SOM (TIER-1 OEM TARGET)</div>
        <div className="d-metric-unit" style={{ color: theme.parchment }}>$22.5 M USD</div>
        <div className="d-metric-label" style={{ color: theme.parchment, fontSize: '9px' }}>[375 Target OEMs] * [$60,000 USD ACV]</div>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '12px' }}>
        Revenue is engineered from the bottom-up based on <strong>Validated Capital Recovery</strong> rather than generic industry percentages.
      </p>
    </div>
  )
},

// S12: GEOGRAPHIC DENSITY – GRIT CORRIDORS
{
  phase: "PHASE II: INTELLIGENCE",
  title: "GEOGRAPHIC DENSITY\nTHE GRIT CORRIDORS",
  label: "NODE CONCENTRATION & FRICTION",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Shield prioritizes high-friction nodes where the <strong>Cost of Inaction</strong> is highest due to volume and infrastructure decay.
      </p>
      <div className="d-grid-2">
        <div className="d-card-accent">
          <div className="d-tag-mono">LAREDO / MONTERREY</div>
          <div className="d-metric-unit">45.00%</div>
          <div className="d-metric-label">TOTAL US-MX FREIGHT VOLUME</div>
        </div>
        <div className="d-card">
          <div className="d-tag-mono">JUÁREZ / EL PASO</div>
          <div className="d-metric-label">JIT AUTOMOTIVE NODE</div>
          <div className="d-list-item" style={{ marginTop: '4px' }}>
            <div className="d-dot"></div>
            <span>High Portal Latency.</span>
          </div>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">TIJUANA / OTAY MESA</div>
        <div className="d-metric-label">UFLPA / TIER-2 ELECTRONICS</div>
        <p className="d-para" style={{ marginBottom: 0, marginTop: '4px', fontSize: '12px' }}>
          Deep-trace requirements for Tier-2 raw material providers (Aluminum/Steel) create mandatory adoption friction.
        </p>
      </div>
    </div>
  )
},
// S13: THE GOLDEN NUMBER – MANUAL OVERSIGHT RATE
{
  phase: "PHASE II: INTELLIGENCE",
  title: "THE GOLDEN NUMBER\nMANUAL OVERSIGHT RATE",
  label: "OPERATIONAL LEVERAGE INDICATOR",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        The Manual Oversight Rate is our primary lead indicator for venture scale. It measures the percentage of transactions requiring human adjudication.
      </p>
      <div className="d-card d-card-dark">
        <div className="d-metric-unit" style={{ color: theme.parchment }}>&lt; 2.00%</div>
        <div className="d-metric-label">TARGET OVERSIGHT THRESHOLD</div>
      </div>
      <div className="d-card-accent">
        <div className="d-tag-mono">STRATEGIC NARRATIVE</div>
        <p className="d-para" style={{ marginBottom: 0, fontSize: '12px' }}>
          This metric dictates our ability to decouple labor from revenue. Achieving <strong>Elite Range</strong> allows a single professional to oversee 40+ Tier-1 accounts.
        </p>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
        <em>Action:</em> Every 0.10% reduction in this rate represents a direct expansion of the <strong>Net Operating Margin</strong>.
      </p>
    </div>
  )
},

// S14: THRESHOLD ZONES – THE PHYSICS OF SCALE
{
  phase: "PHASE II: INTELLIGENCE",
  title: "THRESHOLD ZONES\nTHE PHYSICS OF SCALE",
  label: "VENTURE SCALE VS. CHURN IMMINENT",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-grid-2">
        <div className="d-card d-card-accent" style={{ borderColor: '#22c55e' }}>
          <div className="d-tag-mono" style={{ color: '#22c55e' }}>ELITE RANGE</div>
          <div className="d-metric-unit" style={{ fontSize: '24px' }}>&lt; 2.00%</div>
          <div className="d-metric-label">VENTURE SCALE</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot" style={{ background: '#22c55e' }}></div>
            <span>90.00%+ Gross Margin.</span>
          </div>
        </div>
        <div className="d-card d-card-accent" style={{ borderColor: theme.accent }}>
          <div className="d-tag-mono">DEATH RANGE</div>
          <div className="d-metric-unit" style={{ fontSize: '24px' }}>&gt; 15.00%</div>
          <div className="d-metric-label">CHURN IMMINENT</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot"></div>
            <span>Labor kills margin.</span>
          </div>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">THE SCALING BRIDGE</div>
        <p className="d-para" style={{ marginBottom: 0, fontSize: '12px' }}>
          We transition from Healthy to Elite after the <strong>200,000 Transaction Threshold</strong>. This volume of "adjudicated grit" provides the critical training mass for model dominance.
        </p>
      </div>
    </div>
  )
},

// S15: COMPETITOR MATRIX – THE BRUTALISTA COMPARISON
{
  phase: "PHASE II: INTELLIGENCE",
  title: "COMPETITOR MATRIX\nBRUTALISTA COMPARISON",
  label: "THE API-WRAPPER DEFENSE",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card">
        <div className="d-grid-2" style={{ borderBottom: '1px solid #333', paddingBottom: '4px' }}>
          <div className="d-tag-mono">FEATURE</div>
          <div className="d-tag-mono" style={{ textAlign: 'right' }}>SHIELD VS. WRAPPERS</div>
        </div>
        <div className="d-list-item" style={{ marginTop: '8px', justifyContent: 'space-between' }}>
          <span>FISCAL CENSUS (100%)</span>
          <span style={{ color: theme.accent }}>SHIELD ONLY</span>
        </div>
        <div className="d-list-item" style={{ justifyContent: 'space-between' }}>
          <span>CRYPTOGRAPHIC HASH</span>
          <span style={{ color: theme.accent }}>SHIELD ONLY</span>
        </div>
        <div className="d-list-item" style={{ justifyContent: 'space-between' }}>
          <span>SOVEREIGN PIPE (PAC)</span>
          <span style={{ color: theme.accent }}>SHIELD ONLY</span>
        </div>
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">THE MOAT DEFENSE</div>
        <p className="d-para" style={{ marginBottom: 0, color: theme.parchment, fontSize: '12px' }}>
          Generic SaaS and LLM-Wrappers lack direct access to <strong>Sovereign Fiscal Pipes</strong>. They are blind to "Tax-Simulation" fraud that only cryptographic hash validation can detect.
        </p>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '11px' }}>
        <em>Note:</em> Human clerks offer "Legal Scapegoating," but Shield provides <strong>Certified Materiality</strong> that is legally defensible in Mexican federal courts.
      </p>
    </div>
  )
},

// S16: STACK EVOLUTION – THE REFINERY VS. THE MACHINE
{
  phase: "PHASE II: INTELLIGENCE",
  title: "STACK EVOLUTION\nSCALING ARCHITECTURE",
  label: "CONCIERGE TO AUTONOMOUS PIVOT",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        The architecture transitions from high-touch logic validation to a hardened, high-throughput industrial machine.
      </p>
      <div className="d-grid-2">
        <div className="d-card">
          <div className="d-tag-mono">PHASE 1: REFINERY</div>
          <div className="d-metric-label">COMMODITY GLUE</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot"></div>
            <span>Azure OCR Engines.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span>Python-Based Logic.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span>Manual Secure SFTP.</span>
          </div>
        </div>
        <div className="d-card d-card-accent">
          <div className="d-tag-mono">PHASE 2: MACHINE</div>
          <div className="d-metric-label">PROPRIETARY CORE</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot"></div>
            <span>Local Vision Transformer.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span>Rust Forensic Core.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span>10,000 TPS Throughput.</span>
          </div>
        </div>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
        <strong>Strategic Rationale:</strong> We rent commodity tools to validate the logic, then build proprietary assets to capture the margin.
      </p>
    </div>
  )
},

// S17: ASSET GENESIS – IP CONSTRUCTION
{
  phase: "PHASE II: INTELLIGENCE",
  title: "ASSET GENESIS\nIP CONSTRUCTION",
  label: "EXTRACT / DISTILL / HARDEN",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-step">STEP 01: HARVEST</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
        Paid diagnostic pilots ingest 100 k+ real-world Electronic Tax Receipts.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 02: DISTILL</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
        Synthetic grit injection (blur/noise) trains proprietary vision transformers.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 03: HARDEN</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
        Codifying tax logic into YAML-based unit tests; the "Compliance Kernel."
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">INTELLECTUAL PROPERTY MOAT</div>
        <p className="d-para" style={{ marginBottom: 0, color: theme.parchment, fontSize: '12px' }}>
          The machine is trained on <strong>Border Reality</strong>, making it resilient to anomalies that generic OCR and human clerks cannot process.
        </p>
      </div>
    </div>
  )
},

// S18: SCOPE INTEGRITY – MVP OMISSIONS
{
  phase: "PHASE II: INTELLIGENCE",
  title: "SCOPE INTEGRITY\nOMISSION GOVERNANCE",
  label: "PHASE 1 MVP EXCLUSIONS",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        To guarantee the <strong>90-Day Market Entry</strong>, we strictly omit high-friction features from the Phase 1 deployment.
      </p>
      <div className="d-card">
        <div className="d-tag-mono">FORBIDDEN IN PHASE 1</div>
        <div className="d-list-item">
          <div className="d-dot" style={{ background: theme.muted }}></div>
          <span><strong>Real-Time ERP Connectors:</strong> Bypassing 6-month SAP/Oracle cycles.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot" style={{ background: theme.muted }}></div>
          <span><strong>Self-Service Portal:</strong> PDF-only delivery prevents UI drift.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot" style={{ background: theme.muted }}></div>
          <span><span><strong>Mobile Field Apps:</strong> Restricting ingestion to HQ artifacts.</span></span>
        </div>
        <div className="d-list-item">
          <div className="d-dot" style={{ background: theme.muted }}></div>
          <span><strong>SOC2 Type II:</strong> Utilizing "Volatile Memory" sandbox logic.</span>
        </div>
      </div>
      <div className="d-card d-card-accent" style={{ marginTop: '8px' }}>
        <p className="d-para" style={{ marginBottom: 0, fontSize: '12px' }}>
          <strong>The Focus:</strong> We ship <strong>Forensic Truth</strong> in a PDF, not a software login. This moves the decision from IT Security to Procurement.
        </p>
      </div>
    </div>
  )
},

// S19: THE FULFILLMENT CHAIN – RAW INPUT TO VALUE
{
  phase: "PHASE II: INTELLIGENCE",
  title: "FULFILLMENT CHAIN\nPROCESS ARCHITECTURE",
  label: "DATA REFINERY PIPELINE",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-step">STEP 01: INGESTION</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: '8px' }}>
        Batch upload of CFDI XML and PDF artifacts via secure "Sidecar" portal.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 02: FORENSIC PARSING</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: '8px' }}>
        RSA-2048 Digital Seal validation and cryptographic hash re-calculation.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 03: LOGIC GATE</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: '8px' }}>
        Cross-reference against SAT 69-B, IMMEX, and UFLPA active registries.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 04: ADJUDICATION</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: '8px' }}>
        Exceptions routed to Professional Adjudicators for 4-hour SLA verification.
      </div>
      <div className="d-step-arrow">↓</div>
      <div className="d-step">STEP 05: CAPITAL PROTECTION</div>
      <div className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: 0 }}>
        Golden Record committal to the immutable Forensic Ledger.
      </div>
    </div>
  )
},

// S20: SUPPORT & INTEGRITY – THE KILL-SWITCH
{
  phase: "PHASE II: INTELLIGENCE",
  title: "SUPPORT & INTEGRITY\nGOVERNANCE PROTOCOL",
  label: "LOGIC RECALL & FIELD REALITY",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">INTEGRITY KILL-SWITCH</div>
        <div className="d-metric-label">LOGIC RECALL PROTOCOL</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          If a regulatory misinterpretation is detected, Shield executes a <strong>Global Logic Recall</strong>. Every affected historic ledger is retroactively corrected and re-certified within 24 hours.
        </p>
      </div>
      <div className="d-card" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">FIELD SUPPORT TOPOLOGY</div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Zero Hardware Ownership:</strong> Client-owned mobile nodes.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Logic-First Support:</strong> Remote API fix; no on-site truck rolls.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Uptime:</strong> 24-HR Fail-Open Cache for government blackout resilience.</span>
        </div>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '11px' }}>
        <em>SLA:</em> Critical Logic patches are deployed to the Edge in &lt; 60 minutes.
      </p>
    </div>
  )
},

// S21: VALIDATION ROADMAP – SCIENTIFIC R&D
{
  phase: "PHASE III: MANDATE",
  title: "VALIDATION ROADMAP\nSCIENTIFIC R&D PLAN",
  label: "HYPOTHESIS-DRIVEN SCALE",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card">
        <div className="d-tag-mono">H1: UPTIME AUTONOMY</div>
        <div className="d-metric-label">STRESS TEST: SAT API BLACKOUT</div>
        <div className="d-list-item" style={{ marginTop: '4px' }}>
          <div className="d-dot"></div>
          <span><strong>Pass:</strong> &lt; 500.00 ms response via Cached Ledger.</span>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">H2: DATA SOVEREIGNTY</div>
        <div className="d-metric-label">STRESS TEST: BLIND INGESTION</div>
        <div className="d-list-item" style={{ marginTop: '4px' }}>
          <div className="d-dot"></div>
          <span><strong>Pass:</strong> 100% PII encryption; zero internal DB visibility.</span>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">H3: FORENSIC SUPERIORITY</div>
        <div className="d-metric-label">STRESS TEST: THE SHADOW PARALLEL</div>
        <div className="d-list-item" style={{ marginTop: '4px' }}>
          <div className="d-dot"></div>
          <span><strong>Pass:</strong> Detection of &gt; 2 toxic vendors missed by Big-4.</span>
        </div>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '11px' }}>
        <em>Exit Criteria:</em> 100.00% cryptographic precision on 10,000 historic training units.
      </p>
    </div>
  )
},

// S22: THE FOUNDER DNA – TECHNICAL SPECIFICATIONS
{
  phase: "PHASE III: MANDATE",
  title: "FOUNDER DNA\nEXECUTION SPECIFICATIONS",
  label: "TRIAD OF UNFAIR ADVANTAGES",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Execution is contingent on three non-negotiable DNA markers required to bridge the <strong>Regulatory-to-Code</strong> translation gap.
      </p>
      <div className="d-card-accent">
        <div className="d-tag-mono">SPEC 01: FISCAL ARCHITECT</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          7+ years in Mexican Trade Law/Compliance. Domain expert in <strong>Electronic Tax Receipt</strong> schemas and the IMMEX decree.
        </p>
      </div>
      <div className="d-card-accent" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">SPEC 02: SYSTEMS ARCHITECT</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          Experience scaling high-throughput transactional FinTech. Responsible for the <strong>Rust-based Forensic Core</strong> and Uptime Autonomy.
        </p>
      </div>
      <div className="d-card-accent" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">SPEC 03: ENTERPRISE CLOSER</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          Pre-existing network within C-Suite of Detroit/Monterrey Tier-1 OEMs. Expert in <strong>Risk-Arbitrage</strong> sales motions.
        </p>
      </div>
    </div>
  )
},

// S23: COMMERCIAL LOGIC – PRICING & FEES
{
  phase: "PHASE III: MANDATE",
  title: "COMMERCIAL LOGIC\nPRICING ARCHITECTURE",
  label: "NODE-BASED RISK RECOVERY",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card d-card-dark">
        <div className="d-metric-unit" style={{ color: theme.parchment }}>$60 k USD</div>
        <div className="d-metric-label">TARGET ANNUAL CONTRACT VALUE (ACV)</div>
      </div>
      <div className="d-grid-2" style={{ marginTop: '8px' }}>
        <div className="d-card">
          <div className="d-tag-mono">DIAGNOSTIC</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$15 k USD</div>
          <div className="d-metric-label">ONE-TIME LOOKBACK</div>
        </div>
        <div className="d-card">
          <div className="d-tag-mono">IMPLEMENTATION</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$10 k USD</div>
          <div className="d-metric-label">PER ERP INSTANCE</div>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">USAGE COMPONENT</div>
        <div className="d-metric-unit" style={{ fontSize: '18px' }}>$0.25 USD</div>
        <div className="d-metric-label">PER VALIDATED DIGITAL RECEIPT</div>
      </div>
      <p className="d-para" style={{ marginTop: '8px', fontSize: '12px' }}>
        Pricing is engineered to be <strong>Budget Neutral</strong>, funded by the immediate recovery of identified VAT leakage.
      </p>
    </div>
  )
},

// S24: REFINERY ECONOMICS – THE STEP-UP
{
  phase: "PHASE III: MANDATE",
  title: "REFINERY ECONOMICS\nTHE EFFICIENCY STEP-UP",
  label: "LABOR DECOUPLING PHYSICS",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-grid-2">
        <div className="d-card">
          <div className="d-tag-mono">PHASE 1: REFINERY</div>
          <div className="d-metric-unit">85.00%</div>
          <div className="d-metric-label">GROSS MARGIN</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot" style={{ background: theme.muted }}></div>
            <span>$0.22 USD / Unit</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot" style={{ background: theme.muted }}></div>
            <span>8.00% Oversight</span>
          </div>
        </div>
        <div className="d-card d-card-accent">
          <div className="d-tag-mono">PHASE 2: MACHINE</div>
          <div className="d-metric-unit">91.80%</div>
          <div className="d-metric-label">GROSS MARGIN</div>
          <div className="d-list-item" style={{ marginTop: '8px' }}>
            <div className="d-dot"></div>
            <span>$0.04 USD / Unit</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span>1.20% Oversight</span>
          </div>
        </div>
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">THE UNIT STEP-UP</div>
        <p className="d-para" style={{ color: theme.parchment, fontSize: '12px', marginBottom: 0 }}>
          We achieve <strong>81.00% Cost Reduction</strong> by transitioning from commodity OCR to proprietary Vision Transformers and local model hosting.
        </p>
      </div>
    </div>
  )
},

// S25: ALLOCATION MERITOCRACY – CAPITAL VELOCITY
{
  phase: "PHASE III: MANDATE",
  title: "ALLOCATION MERITOCRACY\nCAPITAL VELOCITY RULES",
  label: "RESOURCE PRIORITIZATION",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Capital is allocated strictly to the nodes with the highest <strong>Fiscal Density</strong> to maximize EBITDA expansion.
      </p>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">PRIORITY 01: AUTOMOTIVE HUBS</div>
        <div className="d-metric-label">HIGH VAT DENSITY NODES</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          60.00% of R&D is committed to <strong>High-Volume Corridor</strong> logic. Every 0.10% oversight reduction here yields maximum profit.
        </p>
      </div>
      <div className="d-card d-card-accent" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">PRIORITY 02: RECOVERY ENGINE</div>
        <div className="d-metric-label">SUCCESS-FEE ACCELERATOR</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          30.00% allocation to the <strong>Audit Defense</strong> module. Triggers the 10.00% Contingent Fee on identified VAT leakage.
        </p>
      </div>
      <div className="d-card" style={{ marginTop: '8px', opacity: 0.7 }}>
        <div className="d-tag-mono">DEPRIORITIZED: LOW-SPEND NICHE</div>
        <div className="d-metric-label">B2G / SERVICE SECTORS</div>
        <p className="d-para" style={{ fontSize: '12px', marginBottom: 0 }}>
          Zero custom engineering. Low transaction frequency dilutes the efficiency of the Machine.
        </p>
      </div>
    </div>
  )
},

// S26: 36-MONTH CASHFLOW – THE INFLECTION
{
  phase: "PHASE III: MANDATE",
  title: "36-MONTH CASHFLOW\nTHE INFLECTION POINT",
  label: "BURN-TO-GATE DYNAMICS",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-grid-2">
        <div className="d-card">
          <div className="d-tag-mono">GENESIS PHASE</div>
          <div className="d-metric-label">MONTHS 0-3</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$176.5 k USD</div>
          <div className="d-metric-label">TOTAL BUILD BURN</div>
        </div>
        <div className="d-card d-card-accent">
          <div className="d-tag-mono">MARKET GATE</div>
          <div className="d-metric-label">MONTHS 4-12</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$549 k USD</div>
          <div className="d-metric-label">CUMULATIVE BURN</div>
        </div>
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
        <div className="d-tag-mono">EFFICIENCY STEP-UP</div>
        <div className="d-metric-label" style={{ color: theme.parchment }}>MONTH 15+ PIVOT</div>
        <p className="d-para" style={{ color: theme.parchment, fontSize: '12px', marginBottom: 0 }}>
          Achieving <strong>Logarithmic Scale</strong>. Monthly Gross Profit expands while the manual oversight cost skeleton remains stagnant.
        </p>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '11px' }}>
        <em>Note:</em> Revenue offset assumes 5 Paid Pilots @ $20 k USD avg each during Validation.
      </p>
    </div>
  )
},

// S27: LIQUIDITY SURVIVAL – THE BRIDGE
{
  phase: "PHASE III: MANDATE",
  title: "LIQUIDITY SURVIVAL\nTHE VALLEY OF DEATH",
  label: "NAVIGATING THE NET-120 FLOAT",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card d-card-accent" style={{ borderColor: theme.accent }}>
        <div className="d-tag-mono">THE FLOAT TRAP</div>
        <div className="d-metric-unit">$825 k USD</div>
        <div className="d-metric-label">TERMINAL CASH TROUGH (MONTH 17)</div>
      </div>
      <p className="d-para" style={{ marginTop: '12px', fontSize: '12px' }}>
        Enterprise payment cycles (Net-120) create a <strong>Liquidity Chasm</strong> between service delivery and cash receipt.
      </p>
      <div className="d-card d-card-dark">
        <div className="d-tag-mono" style={{ color: theme.parchment }}>SURVIVAL MANEUVER</div>
        <div className="d-metric-unit" style={{ color: theme.parchment }}>NET-15</div>
        <div className="d-metric-label" style={{ color: theme.parchment }}>PROFESSIONAL SERVICES SOW</div>
        <p className="d-para" style={{ color: theme.parchment, fontSize: '12px', marginBottom: 0, marginTop: '8px' }}>
          Mandatory <strong>$25 k USD Implementation Fee</strong> billed upon signature. This shunt provides the non-dilutive capital to fund implementation labor.
        </p>
      </div>
      <div className="d-list-item" style={{ marginTop: '12px' }}>
        <div className="d-dot"></div>
        <span><strong>Factoring:</strong> 3.50% Haircut for immediate AR liquidity.</span>
      </div>
    </div>
  )
},

// S28: INVISIBLE ECONOMICS – GHOST MARGINS
{
  phase: "PHASE III: MANDATE",
  title: "INVISIBLE ECONOMICS\nNON-PRICE VALUE CAPTURE",
  label: "STRUCTURAL ARBITRAGE",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Shield leverages structural asymmetries in the US-MX corridor to expand margins without increasing the price burden.
      </p>
      <div className="d-grid-2">
        <div className="d-card d-card-accent">
          <div className="d-tag-mono">FX ARBITRAGE</div>
          <div className="d-metric-unit">4.50%</div>
          <div className="d-metric-label">GHOST MARGIN EXPANSION</div>
          <p className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: 0 }}>
            USD Billing vs. MXN Compliance Labor.
          </p>
        </div>
        <div className="d-card">
          <div className="d-tag-mono">DATA SALVAGE</div>
          <div className="d-metric-label">NEARSHORING INTEGRITY INDEX</div>
          <p className="d-para" style={{ fontSize: '11px', marginTop: '4px', marginBottom: 0 }}>
            Secondary high-margin revenue from Institutional Due Diligence.
          </p>
        </div>
      </div>
      <div className="d-card-dark" style={{ marginTop: '12px', padding: '12px' }}>
        <div className="d-tag-mono">REGULATORY TAILWINDS</div>
        <div className="d-metric-unit" style={{ color: theme.parchment }}>50x</div>
        <div className="d-metric-label">USMCA VALUE MULTIPLIER</div>
        <p className="d-para" style={{ color: theme.parchment, fontSize: '12px', marginBottom: 0, marginTop: '4px' }}>
          Automated "Sub-Tier Traceability" secures 0.00% Tariff Eligibility, avoiding 25.00% Section 232 duties.
        </p>
      </div>
    </div>
  )
},

// S29: THE FUNDING MANDATE – THE ASK
{
  phase: "PHASE III: MANDATE",
  title: "THE FUNDING MANDATE\nTHE STRATEGIC ASK",
  label: "BRIDGE TO DOMINATION",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <div className="d-card d-card-dark">
        <div className="d-tag-mono">SEED ROUND ASK</div>
        <div className="d-metric-unit" style={{ color: theme.parchment }}>$2.5 M USD</div>
        <div className="d-metric-label">24-MONTH RUNWAY</div>
      </div>
      <div className="d-grid-2" style={{ marginTop: '8px' }}>
        <div className="d-card d-card-accent">
          <div className="d-tag-mono">GENESIS ASK</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$176.5 k USD</div>
          <div className="d-metric-label">LOGIC VALIDATION</div>
        </div>
        <div className="d-card">
          <div className="d-tag-mono">VENTURE ASK</div>
          <div className="d-metric-unit" style={{ fontSize: '18px' }}>$2.32 M USD</div>
          <div className="d-metric-label">MARKET DOMINATION</div>
        </div>
      </div>
      <div className="d-card" style={{ marginTop: '8px' }}>
        <div className="d-tag-mono">VALUATION STEP-UP TRIGGER</div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>ARR:</strong> $1.2 M USD Recurring Revenue.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Efficiency:</strong> Manual Oversight Rate &lt; 2.00%.</span>
        </div>
        <div className="d-list-item">
          <div className="d-dot"></div>
          <span><strong>Moat:</strong> 5+ Live "Approval-to-Pay" ERP Integrations.</span>
        </div>
      </div>
    </div>
  )
},

// S30: CONCLUSION & MANDATE
{
  phase: "PHASE III: MANDATE",
  title: "CONCLUSION\nIMMEDIATE MANDATE",
  label: "THE DETERMINISTIC GO SIGNAL",
  render: () => (
    <div className="d-content" style={{ color: theme.ink }}>
      <p className="d-para">
        Vendor-Vision Shield is the <strong>Sovereign Fiscal Pipe</strong> for North American industrialization. We provide technical certainty in a chaotic regulatory corridor.
      </p>
      <div className="d-card d-card-accent">
        <div className="d-tag-mono">IMMEDIATE 90-DAY MILESTONES</div>
        <div className="d-step" style={{ marginTop: '8px' }}>01: FORENSIC SOW</div>
        <p className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
          Signature of 1st $15 k USD Lookback Pilot (Net-15).
        </p>
        <div className="d-step" style={{ marginTop: '8px' }}>02: LOGIC STRESS TEST</div>
        <p className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
          10,000 Unit Cryptographic validation of historic artifacts.
        </p>
        <div className="d-step" style={{ marginTop: '8px' }}>03: GRIT BENCHMARK</div>
        <p className="d-para" style={{ fontSize: '12px', textAlign: 'center', marginTop: '4px', marginBottom: 0 }}>
          Vision Transformer accuracy floor &gt; 85.00% on field data.
        </p>
      </div>
      <div className="d-card d-card-dark" style={{ marginTop: '12px', textAlign: 'center' }}>
        <div className="d-metric-unit" style={{ color: theme.parchment, fontSize: '16px' }}>SYSTEM READY FOR DEPLOYMENT</div>
      </div>
    </div>
  )
}




  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: 5in 8in; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; }
          .fixed-header { display: none !important; }
          .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; width: 5in !important; max-width: none !important; }
          .slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; padding: 0.5in !important; }
        }
      `}} />
      <DossierEngineV2 
        slides={slides}
        branding={branding}
        contact={contact}
        theme={theme}
      />
    </>
  );
}
