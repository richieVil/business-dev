'use client';

import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function TechnicalDossier() {
  const theme = {
    parchment: '#0A0A0A', // Charcoal/Black (The Scanner)
    ink: '#FFFFFF',       // White
    accent: '#DC2626',    // Regulatory Red
    muted: '#A3A3A3',     // Neutral-400 (Silver)
  };

  const slides = [
    // S1: Executive Briefing
		{ 
			phase: "PHASE I", 
			title: "EXECUTIVE BRIEFING", 
			label: "Thesis Central", 
			render: () => (
				<div className="d-content" style={{ color: theme.ink }}>
					<div className="d-card-accent">
						<p className="d-tag-mono">Core Thesis</p>
						<p className="d-metric-unit">Regulatory Indemnity</p>
						<p className="d-para">
							NOM compliance has transitioned from a localized warehouse task to a <strong>primary fiscal liability gateway</strong>. We provide a "Standard of Care" through logic automation.
						</p>
					</div>
					<div className="d-card">
						<p className="d-tag-mono">The Intention</p>
						<p className="d-para">
							We implement a <strong>Universal Compliance Infrastructure</strong> that removes fiduciary latency from North American trade corridors.
						</p>
						<div className="d-list-item">
							<div className="d-dot"></div>
							<span>Convert subjective interpretation into deterministic assets.</span>
						</div>
						<div className="d-list-item">
							<div className="d-dot"></div>
							<span>Bridge US technical specs with Mexican fiscal requirements.</span>
						</div>
					</div>
				</div>
			) 
		},

		// S2: The Catalyst
		{ 
			phase: "PHASE I", 
			title: "THE CATALYST", 
			label: "Digital Enforcement Pivot", 
			render: () => (
				<div className="d-content" style={{ color: theme.ink }}>
					<p className="d-para">
						The Mexican Tax Authority (SAT) has executed a structural pivot toward <strong>Digital Customs Files</strong>. Discrepancies now trigger automated fiscal flags.
					</p>
					<div className="d-grid-2">
						<div className="d-card">
							<p className="d-metric-unit">40%</p>
							<p className="d-metric-label">UVA Audit Surge</p>
						</div>
						<div className="d-card-accent">
							<p className="d-metric-unit">300%</p>
							<p className="d-metric-label">Fine on Commercial Value</p>
						</div>
					</div>
					<div className="d-card">
						<p className="d-tag-mono">Structural Driver</p>
						<p className="d-para">
							<strong>Nearshoring Velocity</strong> has created a critical shortage of technical compliance personnel, making automation the only path for high-volume throughput.
						</p>
					</div>
				</div>
			) 
		},

		// S3: The Invisible Tax
		{ 
			phase: "PHASE I", 
			title: "THE INVISIBLE TAX", 
			label: "$720k Fiscal Leak", 
			render: () => (
				<div className="d-content" style={{ color: theme.ink }}>
					<div className="d-card-dark">
						<p className="d-metric-label">Annual Invisible Tax</p>
						<p className="d-metric-unit">$720 k USD</p>
						<p className="d-para">
							Aggregate waste for a standard Mid-Market US Exporter shipping 2,000 SKUs annually.
						</p>
					</div>
					
					<div className="d-card">
						<p className="d-tag-mono">Leakage Breakdown</p>
						<div className="d-list-item">
							<div className="d-dot"></div>
							<span>Direct Manual Costs: <strong>$300 k USD</strong></span>
						</div>
						<div className="d-list-item">
							<div className="d-dot"></div>
							<span>Detention Fines: <strong>$270 k USD</strong></span>
						</div>
						<div className="d-list-item">
							<div className="d-dot"></div>
							<span>Opportunity Cost: <strong>$150 k USD</strong></span>
						</div>
					</div>

					<div className="d-card-accent">
						<div className="d-grid-2">
							 <div>
								 <p className="d-metric-unit">$648k</p>
								 <p className="d-metric-label">EBITDA Recovery</p>
							 </div>
							 <div>
								 <p className="d-metric-unit">10:1</p>
								 <p className="d-metric-label">Value Multiplier</p>
							 </div>
						</div>
					</div>
				</div>
			) 
		},
    // S4: Status Quo Failure
    {
        phase: "PHASE I",
        title: "STATUS QUO FAILURE",
        label: "Interpretative Volatility",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-metric-unit">72 Hrs</p>
                        <p className="d-metric-label">Legacy Latency</p>
                    </div>
                    <div className="d-card">
                        <p className="d-metric-unit">8%</p>
                        <p className="d-metric-label">Fatigue Error Rate</p>
                    </div>
                </div>

                <div className="d-card-dark">
                    <p className="d-tag-mono">The Zero-Day Blind Spot</p>
                    <p className="d-para">
                        Manual consultants operate on <strong>Static Knowledge</strong>. They cannot mentally index 2,000 SKUs against a 9:00 AM <em>Diario Oficial</em> update by 10:00 AM dispatch.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">The Liability Vacuum</p>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span>Consultants offer "Opinions."</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span>Exporters assume <strong>100% Fiscal Risk</strong>.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span>No deterministic audit trail exists.</span>
                    </div>
                </div>
            </div>
        )
    },

    // S5: Operational Deadlock
    {
        phase: "PHASE I",
        title: "OPERATIONAL DEADLOCK",
        label: "Border Latency Anatomy",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">The Friction Root</p>
                    <p className="d-metric-unit">4.2%</p>
                    <p className="d-metric-label">Capital Turnover Drag</p>
                    <p className="d-para">
                        Annual reduction in capital velocity caused solely by Laredo cross-dock "Dwell Time."
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Behavioral Resistance</p>
                    <p className="d-para">
                        <strong>The Broker Veto:</strong> Mexican Customs Brokers hold personal license liability. They default to "Excessive Inspection" to protect their livelihood, rejecting any label that lacks a professional citation.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Technical Translation Gap</p>
                    <p className="d-para">
                        The cycle between US Product Engineers (English Specs) and Mexican Compliance Lawyers (Spanish Legal) creates a <strong>48-hour Interpretation Loop</strong> per batch.
                    </p>
                </div>
            </div>
        )
    },

    // S6: The Technical USP
    {
        phase: "PHASE I",
        title: "THE TECHNICAL USP",
        label: "Environmental Grit Engine",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">&lt; 60s</p>
                            <p className="d-metric-label">Total Throughput</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">99.9%</p>
                            <p className="d-metric-label">Systemic Accuracy</p>
                        </div>
                    </div>
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-tag-mono">Node A: HQ Desk</p>
                        <p className="d-para">
                            <strong>Sidecar Portal</strong> for bulk PDF/CSV ingestion. Bypasses IT security friction.
                        </p>
                    </div>
                    <div className="d-card-accent">
                        <p className="d-tag-mono">Node B: Grit Node</p>
                        <p className="d-para">
                            <strong>Mobile PWA</strong> for Laredo warehouses. Handles 2:00 AM sodium-vapor lighting.
                        </p>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Spectro-Normalization</p>
                    <p className="d-para">
                        Proprietary vision pipeline specifically tuned to neutralize <strong>Sodium Haze</strong> and read text on glossy/wrinkled packaging in 95dB environments.
                    </p>
                </div>
            </div>
        )
    },
    // S7: Specification Parity
    {
        phase: "PHASE I",
        title: "SPECIFICATION PARITY",
        label: "Manual vs. Machine",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">$45.00</p>
                            <p className="d-metric-label">Target Unit Cost</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">$150.00</p>
                            <p className="d-metric-label">Legacy Manual Cost</p>
                        </div>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Environmental Grit Performance</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Input:</span>
                        <span><strong>2:00 AM Sodium Haze</strong> (Low Contrast)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Legacy:</span>
                        <span>0% Accuracy (Requires Office Light)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.accent }}>Machine:</span>
                        <span><strong>Spectro-Normalization</strong> (99.9% Read)</span>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Regulatory Latency</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Manual:</span>
                        <span>30+ Day Lag (Static Knowledge)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.accent }}>Machine:</span>
                        <span><strong>&lt; 24 Hours</strong> (Digital Fed-Sync)</span>
                    </div>
                </div>
            </div>
        )
    },

    // S8: The Unit of Value
    {
        phase: "PHASE I",
        title: "THE UNIT OF VALUE",
        label: "Regulatory Indemnity",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">Strategic Shift</p>
                    <p className="d-para">
                        The physical label is a low-margin byproduct. We monetize the <strong>History of Innocence</strong> required to move capital across borders.
                    </p>
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-metric-unit">5-Year</p>
                        <p className="d-metric-label">Audit Trail Vault</p>
                    </div>
                    <div className="d-card">
                        <p className="d-metric-unit">100%</p>
                        <p className="d-metric-label">Liability Liquidity</p>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">The Product is Evidence</p>
                    <p className="d-para">
                        <strong>Indemnified Compliance:</strong> A searchable vault of every logic decision, technical spec, and regulatory citation used at the moment of transit.
                    </p>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span>Converts "Customs Opinions" to <strong>Deterministic Logic</strong>.</span>
                    </div>
                </div>
            </div>
        )
    },

    // S9: Strategic Integration
    {
        phase: "PHASE I",
        title: "STRATEGIC INTEGRATION",
        label: "Forensic Audit Entry",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card">
                    <p className="d-tag-mono">The Entry Maneuver</p>
                    <p className="d-para">
                        We bypass the 5-month enterprise procurement cycle by utilizing an <strong>Audit-Based Entry</strong> (Retrospective Leakage Diagnostic).
                    </p>
                </div>

                <div className="d-card-dark">
                    <p className="d-tag-mono">The Diagnostic Hook</p>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Ingest:</strong> 100 Historical Shipments.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Reveal:</strong> The "Leakage Ledger" (Latent Fines).</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Convert:</strong> Skeptic to Internal Advocate.</span>
                    </div>
                </div>

                <div className="d-card-accent">
                    <p className="d-tag-mono">Substitution Logic</p>
                    <p className="d-para">
                        <strong>Direct Substitution:</strong> Replaces "External Compliance Review Fees" line-item. Zero new budget required; just a vendor swap.
                    </p>
                </div>
            </div>
        )
    },
    // S10: Infrastructure Lock
    {
        phase: "PHASE I",
        title: "INFRASTRUCTURE LOCK",
        label: "Standard of Care",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">The Maneuver</p>
                    <p className="d-para">
                        We transition from a "Diagnostic Tool" to <strong>Standard Operating Infrastructure</strong> by locking the workflow at the physical and legal nodes.
                    </p>
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-metric-unit">Broker</p>
                        <p className="d-metric-label">Endorsement Lock</p>
                    </div>
                    <div className="d-card">
                        <p className="d-metric-unit">WMS</p>
                        <p className="d-metric-label">Logic Gate Lock</p>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">The "Un-Plug" Penalty</p>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>Data Loss:</strong> Client forfeits the 5-year historical audit vault.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>Latency Spike:</strong> Reverting to manual means a return to 72-hour processing.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>Risk Reset:</strong> Immediate exposure to "Zero-Day" regulatory shifts.</span>
                    </div>
                </div>
            </div>
        )
    },

    // S11: Market Intelligence
    {
        phase: "PHASE II",
        title: "MARKET INTELLIGENCE",
        label: "$792M Compliance Opportunity",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <p className="d-metric-label">Total Addressable Market (TAM)</p>
                    <p className="d-metric-unit">$792 M USD</p>
                    <p className="d-para" style={{ fontSize: '10px', opacity: 0.8 }}>
                        [14k Exporters] * [1,500 SKUs] * [$37.50 Blended Cost]
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-metric-label">Serviceable Available Market (SAM)</p>
                    <p className="d-metric-unit">$340 M USD</p>
                    <p className="d-para" style={{ fontSize: '10px' }}>
                        <strong>High-Risk Categories:</strong> Electronics, CPG, Auto.<br/>
                        [5,230 Exporters] * [1,250 New SKUs] * [$52.00 Fee]
                    </p>
                </div>

                <div className="d-card-accent">
                    <p className="d-metric-label">Serviceable Obtainable Market (SOM)</p>
                    <p className="d-metric-unit">$82 M USD</p>
                    <p className="d-para" style={{ fontSize: '10px' }}>
                        <strong>Grit Corridor Targets:</strong> Top 500 Enterprise + Top 20 Brokers.<br/>
                        [500 Clients] * [2,186 SKUs] * [$75.00 Entry Price]
                    </p>
                </div>
            </div>
        )
    },

    // S12: Geographic Density
    {
        phase: "PHASE II",
        title: "GEOGRAPHIC DENSITY",
        label: "Grit Corridors",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card">
                    <p className="d-tag-mono">Deployment Strategy</p>
                    <p className="d-para">
                        The machine is deployed at the physical nodes where trade volume meets regulatory inertia. We target <strong>High-Velocity Transit Corridors</strong>.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Primary Grit Nodes</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.accent }}>Laredo:</span>
                        <span><strong>The Control Node.</strong> 40% of all trade. High CPG/Auto density.</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>El Paso:</span>
                        <span><strong>The Industrial Node.</strong> Complex machinery & Medical Device (NOM-001).</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Otay Mesa:</span>
                        <span><strong>The Electronics Node.</strong> High-churn SKU catalogs (NOM-024).</span>
                    </div>
                </div>

                <div className="d-card-accent">
                    <p className="d-metric-unit">$1,200 / day</p>
                    <p className="d-metric-label">Dwell-Time Cost</p>
                    <p className="d-para">
                        Immediate pull for automation in Laredo cross-docks where storage fees exceed capital turnover gains.
                    </p>
                </div>
            </div>
        )
    },
    // S13: The Golden Number
    {
        phase: "PHASE II",
        title: "THE GOLDEN NUMBER",
        label: "Manual Intervention Rate (MIR)",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">Metric Definition</p>
                    <p className="d-para">
                        The percentage of SKU classifications requiring human override. This is the only true measure of <strong>Logic Debt</strong> and scalability.
                    </p>
                </div>

                <div className="d-card-dark">
                    <p className="d-metric-label">The Survival Threshold</p>
                    <p className="d-metric-unit">&lt; 5%</p>
                    <p className="d-para">
                        <strong>Elite Range:</strong> The "Autonomous Machine" state where revenue growth decouples from headcount.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">The Scaling Bridge</p>
                    <p className="d-para">
                        We cross from "Agency" to "Infrastructure" at the <strong>5,000 Verified SKU Threshold</strong>, where the Knowledge Vault reaches critical density.
                    </p>
                </div>
            </div>
        )
    },

    // S14: Threshold Zones
    {
        phase: "PHASE II",
        title: "THRESHOLD ZONES",
        label: "Survival Physics",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">&lt; 5%</p>
                            <p className="d-metric-label">Elite Range</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">90%</p>
                            <p className="d-metric-label">Gross Margin</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        <strong>Venture Scale:</strong> Logic is autonomous. 10x Valuation Multiple.
                    </p>
                </div>

                <div className="d-card">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">25%</p>
                            <p className="d-metric-label">Healthy Range</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">65%</p>
                            <p className="d-metric-label">Gross Margin</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        <strong>Agency Floor:</strong> Profitable but labor-linear. Every 50 clients require 1 new auditor.
                    </p>
                </div>

                <div className="d-card">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">&gt; 40%</p>
                            <p className="d-metric-label">Death Range</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">Churn</p>
                            <p className="d-metric-label">Imminent</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        <strong>Systemic Failure:</strong> Operational friction consumes the "Time-to-Value" promise.
                    </p>
                </div>
            </div>
        )
    },

    // S15: Competitor Matrix
    {
        phase: "PHASE II",
        title: "COMPETITOR MATRIX",
        label: "The Brutalista Audit",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card">
                    <p className="d-tag-mono">Logic Freshness</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Manual:</span>
                        <span>30-Day Lag (Monthly Billable)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Wrapper:</span>
                        <span>Unknown (Training Cutoff)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.accent }}>Machine:</span>
                        <span><strong>Daily Sync</strong> (Digital Federal-Feed)</span>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Liability Stance</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.muted }}>Manual:</span>
                        <span>"Advisory Only" (No Bond)</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '80px', color: theme.accent }}>Machine:</span>
                        <span><strong>Bonded Indemnity</strong> ($100k - $500k USD)</span>
                    </div>
                </div>

                <div className="d-card-accent">
                    <p className="d-tag-mono">Grit Resilience</p>
                    <p className="d-para">
                        <strong>The API-Wrapper Defense:</strong> Generic LLMs fail on "2:00 AM Sodium Haze." Our proprietary Spectro-Normalization creates a moat that generic AI cannot cross.
                    </p>
                </div>
            </div>
        )
    },
    // S16: Stack Evolution
    {
        phase: "PHASE II",
        title: "STACK EVOLUTION",
        label: "The Logic Step-Up",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-para">
                    Transitioning from <strong>Inference Arbitrage</strong> (renting generic intelligence) to <strong>Logic Sovereignty</strong> (owning the distilled model).
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-tag-mono">Phase 1: The Refinery</p>
                        <p className="d-metric-label">Focus: Logic Validation</p>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>Manual PDF Dumps</span>
                        </div>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>Human-in-the-Loop</span>
                        </div>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>Frontier Large Models</span>
                        </div>
                    </div>

                    <div className="d-card-accent">
                        <p className="d-tag-mono">Phase 2: The Machine</p>
                        <p className="d-metric-label">Focus: Scale & Margin</p>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>API-Direct Sync</span>
                        </div>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>Autonomous Logic</span>
                        </div>
                        <div className="d-list-item">
                            <div className="d-dot"></div>
                            <span>Distilled Local Weights</span>
                        </div>
                    </div>
                </div>

                <div className="d-card-dark">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-unit">$18.00</p>
                            <p className="d-metric-label">Fulfillment COGS (P1)</p>
                        </div>
                        <div>
                            <p className="d-metric-unit">$1.93</p>
                            <p className="d-metric-label">Fulfillment COGS (P2)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    // S17: Asset Genesis
    {
        phase: "PHASE II",
        title: "ASSET GENESIS",
        label: "IP Construction Manual",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card">
                    <p className="d-tag-mono">Step 1: Raw Extraction</p>
                    <p className="d-para">
                        Ingestion of 10,000+ "Grit" data points from warehouse floors to train the <strong>Spectro-Normalization</strong> vision layer.
                    </p>
                </div>

                <div className="d-card-accent">
                    <p className="d-tag-mono">Step 2: Logic Distillation</p>
                    <p className="d-para">
                        Crossing the <strong>5,000 Verified SKU Threshold</strong>. This converts subjective regulatory interpretation into a deterministic Knowledge Vault.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Step 3: Protocol Hardening</p>
                    <p className="d-para">
                        IP is locked into a <strong>Logic-as-Code</strong> versioned ledger, citing specific <em>Diario Oficial</em> articles for every generated asset.
                    </p>
                </div>

                <div className="d-card-dark">
                    <p className="d-metric-label">Current IP Trajectory</p>
                    <p className="d-metric-unit">5-Year Vault</p>
                    <p className="d-para">
                        Searchable evidence portfolios for all historical border events.
                    </p>
                </div>
            </div>
        )
    },

    // S18: Scope Integrity
    {
        phase: "PHASE II",
        title: "SCOPE INTEGRITY",
        label: "The Omission List",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <p className="d-tag-mono">Strict MVP Governance</p>
                    <p className="d-para">
                        To protect the <strong>90-Day Execution Window</strong>, the following features are strictly excluded from the Entry Phase:
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-metric-label">Deferred Technical Complexity</p>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>No ERP/SAP Integration:</strong> Uses "Sidecar" PDF dumps to bypass 6-month IT security reviews.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>No Fixed Hardware:</strong> Uses Smartphone Mobile App rather than high-cost warehouse cameras.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>No Multi-Market Expansion:</strong> Mexico NOM standards only; zero distraction from the US-Mexico corridor.</span>
                    </div>
                </div>

                <div className="d-card-accent">
                    <p className="d-para">
                        <strong>Strategy:</strong> Bypassing Corporate IT "Red Tape" is our primary speed moat. We launch as a "Logistics Utility," not a "Software Integration."
                    </p>
                </div>
            </div>
        )
    },
    // S19: Fulfillment Chain
    {
        phase: "PHASE II",
        title: "FULFILLMENT CHAIN",
        label: "15-Second Pipeline",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-step">1. INGESTION: Technical PDFs + Field Photos</div>
                <div className="d-step-arrow">↓</div>
                <div className="d-step">2. STRUCTURAL PARSING: Vision-to-JSON Mapping</div>
                <div className="d-step-arrow">↓</div>
                <div className="d-step">3. LOGICAL CLASSIFICATION: Retrieval-Augmented Generation</div>
                <div className="d-step-arrow">↓</div>
                <div className="d-step">4. AFFIRMATION: Professional Handshake</div>
                <div className="d-step-arrow">↓</div>
                <div className="d-step">5. DISBURSEMENT: Secured Print-Trigger</div>

                <div className="d-card-accent" style={{ marginTop: '20px' }}>
                    <p className="d-tag-mono">The Output</p>
                    <p className="d-para">
                        Generation of the <strong>Compliance Passport</strong>: A machine-readable audit trail citing specific <em>Diario Oficial</em> articles for every shipment.
                    </p>
                </div>
            </div>
        )
    },

    // S20: Operational Governance
    {
        phase: "PHASE II",
        title: "OPERATIONAL GOVERNANCE",
        label: "Liability Firewall",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <p className="d-tag-mono">The Integrity Kill-Switch</p>
                    <p className="d-para">
                        Automated <strong>Mass Logic Recall</strong>: If a regulatory shift occurs mid-transit, the system revokes the verification hash and triggers an immediate hold at the Mexican Customs Broker node.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Shadow Oversight</p>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>Statistical Audit:</strong> 5% random anomaly spot-check.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot"></div>
                        <span><strong>Human Anchor:</strong> Machine provides logic; human provides the legal indemnity signature.</span>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Field Support Topology</p>
                    <p className="d-para">
                        <strong>4-Hour Hardware Swap:</strong> Redundant Laredo-based service partners maintain local buffer stock for warehouse nodes to ensure zero bridge-dwell time.
                    </p>
                </div>
            </div>
        )
    },

    // S21: Validation Roadmap
    {
        phase: "PHASE III",
        title: "VALIDATION ROADMAP",
        label: "Genesis Phase (0-3 Months)",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">Hypothesis: Logic Parity</p>
                    <p className="d-para">
                        Enterprises will accept machine-generated compliance if backed by a <strong>Forensic Baseline</strong> of historical shipments.
                    </p>
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Pass Metric</p>
                            <p className="d-metric-unit">98%</p>
                            <p className="d-metric-label">Logit Confidence</p>
                        </div>
                        <div>
                            <p className="d-metric-label">Sample Set</p>
                            <p className="d-metric-unit">500</p>
                            <p className="d-metric-label">Verified SKUs</p>
                        </div>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Stress Test: Grit Resilience</p>
                    <p className="d-para">
                        The vision pipeline must reconstruct data from blurred warehouse captures without human correction.
                    </p>
                    <div className="d-metric-label">Target manual intervention</div>
                    <p className="d-metric-unit">&lt; 15% MIR</p>
                </div>
            </div>
        )
    },
    // S22: Founder DNA
		{
				phase: "PHASE III",
				title: "FOUNDER DNA",
				label: "Entry Phase Architecture",
				render: () => (
						<div className="d-content" style={{ color: theme.ink }}>
								<div className="d-card-accent">
										<p className="d-tag-mono">1. Regulatory Credibility</p>
										<p className="d-para">
												10+ years within the <strong>Mexican Customs Framework</strong>. Technical authority to convince Top-20 Brokers to trust a digital hash over a human signature.
										</p>
								</div>

								<div className="d-card">
										<p className="d-tag-mono">2. Applied LLM Orchestration</p>
										<p className="d-para">
												Expertise in <strong>Deterministic RAG</strong> and Model Distillation. Engineering the "Hard-Coded Constraints" that prevent regulatory hallucination.
										</p>
								</div>

								<div className="d-card">
										<p className="d-tag-mono">3. Revenue Architecture</p>
										<p className="d-para">
												Specialization in <strong>Multi-Stakeholder Fiscal Ingestion</strong>. Capability to bypass 5-month IT cycles via Broker-Proxy billing rails.
										</p>
								</div>
						</div>
				)
		},

		// S23: Commercial Logic
		{
				phase: "PHASE III",
				title: "COMMERCIAL LOGIC",
				label: "Node-Based Pricing",
				render: () => (
						<div className="d-content" style={{ color: theme.ink }}>
								<div className="d-card-dark">
										<p className="d-metric-label">Implementation Fee</p>
										<p className="d-metric-unit">$2.5 M USD</p>
										<p className="d-para">One-time "Sidecar" setup and data sanitization.</p>
								</div>

								<div className="d-grid-2">
										<div className="d-card">
												<p className="d-tag-mono">Platform Fee</p>
												<p className="d-metric-unit">$12k</p>
												<p className="d-metric-label">Annual Base (USD)</p>
										</div>
										<div className="d-card">
												<p className="d-tag-mono">SKU Fresh</p>
												<p className="d-metric-unit">$75.00</p>
												<p className="d-metric-label">Per Logic Map (USD)</p>
										</div>
								</div>

								<div className="d-card-accent">
										<p className="d-tag-mono">Scale Utility: Transit Pulse</p>
										<p className="d-metric-unit">$2.50 USD</p>
										<p className="d-metric-label">Per Pallet / Manifest</p>
										<p className="d-para">Automated "Pulse" check against new SAT circulars for previously certified SKUs.</p>
								</div>
						</div>
				)
		},

		// S24: Unit Economics
		{
				phase: "PHASE III",
				title: "UNIT ECONOMICS",
				label: "The Efficiency Step-Up",
				render: () => (
						<div className="d-content" style={{ color: theme.ink }}>
								<div className="d-para">
										Structural margin expansion triggered by the collapse of <strong>Inference Arbitrage</strong>.
								</div>

								<div className="d-grid-2">
										<div className="d-card">
												<p className="d-tag-mono">Entry: HITL-Heavy</p>
												<p className="d-metric-label">Marginal COGS</p>
												<p className="d-metric-unit">$18.00</p>
												<p className="d-metric-label">USD / SKU</p>
												<p className="d-para" style={{ fontSize: '10px', marginTop: '4px' }}>
														Manual Shadow Auditors (100% Review).
												</p>
										</div>

										<div className="d-card-accent">
												<p className="d-tag-mono">Scale: Autonomous</p>
												<p className="d-metric-label">Marginal COGS</p>
												<p className="d-metric-unit">$1.93</p>
												<p className="d-metric-label">USD / SKU</p>
												<p className="d-para" style={{ fontSize: '10px', marginTop: '4px' }}>
														Distilled Model + Anomaly-Only Audit.
												</p>
										</div>
								</div>

								<div className="d-card-dark" style={{ marginTop: '12px' }}>
										<div className="d-grid-2">
												<div>
														<p className="d-metric-label">Entry Margin</p>
														<p className="d-metric-unit">76%</p>
												</div>
												<div>
														<p className="d-metric-label">Scale Margin</p>
														<p className="d-metric-unit">95.7%</p>
												</div>
										</div>
								</div>
						</div>
				)
		},
    // S25: Allocation Meritocracy
    {
        phase: "PHASE III",
        title: "ALLOCATION MERITOCRACY",
        label: "Capital Velocity Rules",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <p className="d-metric-label">Priority 1 (60%)</p>
                    <p className="d-metric-unit">High-Velocity CPG</p>
                    <p className="d-para">
                        <strong>Logic:</strong> Frequent packaging updates trigger high "Fresh SKU" fees.
                        <br/>
                        <strong>Focus:</strong> Vision-to-JSON accuracy for glossy/irregular packaging.
                    </p>
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-tag-mono">Priority 2 (30%)</p>
                        <p className="d-metric-label">3PL Aggregators</p>
                        <p className="d-para" style={{ fontSize: '10px' }}>
                            Low margin, massive distribution leverage. Focus on API stability.
                        </p>
                    </div>
                    <div className="d-card-accent">
                        <p className="d-tag-mono">Priority 3 (10%)</p>
                        <p className="d-metric-label">Industrial OEM</p>
                        <p className="d-para" style={{ fontSize: '10px' }}>
                            "Trophy Clients" with low recurrence. Maintenance mode only.
                        </p>
                    </div>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Expansion Multiplier</p>
                    <p className="d-metric-unit">125% NDR</p>
                    <p className="d-para">
                        Targeting Net Dollar Retention via "Horizontal Standards" (NMX Quality Certs) and "Grit-Node" Hardware upsells.
                    </p>
                </div>
            </div>
        )
    },

    // S26: 36-Month Cashflow
    {
        phase: "PHASE III",
        title: "36-MONTH CASHFLOW",
        label: "The J-Curve Physics",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-tag-mono">Phase 1: Logic Build</p>
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Monthly Burn</p>
                            <p className="d-metric-unit">$45k</p>
                        </div>
                        <div>
                            <p className="d-metric-label">Net Burn-to-Gate</p>
                            <p className="d-metric-unit">$349k</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        Months 0-12. Buying accuracy via Shadow Auditors.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Phase 2: Efficiency Step-Up</p>
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Gross Margin</p>
                            <p className="d-metric-unit">86%</p>
                        </div>
                        <div>
                            <p className="d-metric-label">CARR Target</p>
                            <p className="d-metric-unit">$1.2M</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        Months 13-36. Proprietary models replace human labor. Revenue grows 3x; OpEx stays flat.
                    </p>
                </div>

                <div className="d-card-dark">
                    <p className="d-metric-label">Terminal Cash Trough (Month 13)</p>
                    <p className="d-metric-unit">-$542 k USD</p>
                    <p className="d-para">
                        Maximum negative cash position due to Fortune 500 payment latency.
                    </p>
                </div>
            </div>
        )
    },

    // S27: Valley of Death
    {
        phase: "PHASE III",
        title: "VALLEY OF DEATH",
        label: "Fiduciary Latency",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-dark">
                    <p className="d-tag-mono">The Structural Threat</p>
                    <p className="d-para">
                        Fortune 500 Exporters weaponize their balance sheets, demanding <strong>Net-120</strong> payment terms.
                    </p>
                </div>

                <div className="d-card-accent">
                    <p className="d-metric-label">Primary Survival Maneuver</p>
                    <p className="d-metric-unit">Net-15 Pre-Pay</p>
                    <p className="d-para">
                        <strong>The Implementation SOW:</strong> A $25,000 "Compliance Infrastructure Setup Fee" billed separately as Professional Services due Net-15 days from Pilot Start.
                    </p>
                </div>

                <div className="d-grid-2">
                    <div className="d-card">
                        <p className="d-tag-mono">Broker Rail</p>
                        <p className="d-para" style={{ fontSize: '10px' }}>
                            Bill the Broker (Net-30); Broker bills Client (Net-120).
                        </p>
                    </div>
                    <div className="d-card">
                        <p className="d-tag-mono">Liquidity Shunt</p>
                        <p className="d-para" style={{ fontSize: '10px' }}>
                            AR Factoring at 3.5% discount to unlock immediate cash.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    // S28: Invisible Economics
    {
        phase: "PHASE III",
        title: "INVISIBLE ECONOMICS",
        label: "Systemic Arbitrage",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card">
                    <p className="d-tag-mono">1. FX Arbitrage</p>
                    <p className="d-para">
                        <strong>Maquila Ghost Margin:</strong> 100% Revenue in USD (Strong); 45% OpEx in MXN (Volatile). A 10% Peso depreciation yields a +4.5% EBITDA lift.
                    </p>
                </div>

                <div className="d-card-accent">
                    <p className="d-tag-mono">2. Regulatory Tailwinds</p>
                    <p className="d-para">
                        Positioning implementation fees as <strong>USMCA Trade Facilitation Grants</strong> subsidizes the client's onboarding cost by 30%.
                    </p>
                </div>

                <div className="d-card-dark">
                    <p className="d-tag-mono">3. Data Salvage</p>
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Product</p>
                            <p className="d-metric-unit">BVI Index</p>
                        </div>
                        <div>
                            <p className="d-metric-label">Margin</p>
                            <p className="d-metric-unit">100%</p>
                        </div>
                    </div>
                    <p className="d-para" style={{ marginTop: '8px' }}>
                        Selling aggregated "Border Dwell Time" intelligence to Maritime Insurers and Hedge Funds. Zero COGS.
                    </p>
                </div>
            </div>
        )
    },

    // S29: The Funding Mandate
    {
        phase: "PHASE III",
        title: "THE FUNDING MANDATE",
        label: "Series Seed Ask",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-card-accent">
                    <p className="d-metric-label">Capital Requirement</p>
                    <p className="d-metric-unit">$2.9 M USD</p>
                    <p className="d-para">
                        Funding 18 months of "Execution Physics" to bridge the Fortune 500 Net-120 Gap.
                    </p>
                </div>

                <div className="d-card">
                    <p className="d-tag-mono">Allocation Strategy</p>
                    <div className="d-list-item">
                        <span style={{ minWidth: '40px', color: theme.accent }}>45%</span>
                        <span><strong>Liquidity Engine:</strong> Funding CAC ($44k) & Working Capital Reserve.</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '40px', color: theme.muted }}>35%</span>
                        <span><strong>Machine Hardening:</strong> Distilled Model Migration (Llama 3).</span>
                    </div>
                    <div className="d-list-item">
                        <span style={{ minWidth: '40px', color: theme.muted }}>20%</span>
                        <span><strong>Regulatory Genesis:</strong> $250k Indemnity Bond & Broker Pilots.</span>
                    </div>
                </div>

                <div className="d-card-dark">
                    <p className="d-tag-mono">Valuation Step-Up Trigger</p>
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Target ARR</p>
                            <p className="d-metric-unit">$1.2M</p>
                        </div>
                        <div>
                            <p className="d-metric-label">Target MIR</p>
                            <p className="d-metric-unit">&lt; 8%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    // S30: Strategic Mandate
    {
        phase: "PHASE III",
        title: "STRATEGIC MANDATE",
        label: "The Architecture of Certainty",
        render: () => (
            <div className="d-content" style={{ color: theme.ink }}>
                <div className="d-para">
                    We are not building a labeling tool. We are building the <strong>Universal Compliance Standard</strong> for North American Nearshoring.
                </div>

                <div className="d-card-dark">
                    <p className="d-tag-mono">Immediate 90-Day Execution</p>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Metric:</strong> 500 Legacy SKUs ingested (98% Logit Confidence).</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Build:</strong> 5 "Grit Node" prototypes deployed to Laredo.</span>
                    </div>
                    <div className="d-list-item">
                        <div className="d-dot" style={{ background: theme.parchment }}></div>
                        <span><strong>Legal:</strong> "Broker-Proxy" MSA drafted & Bond secured.</span>
                    </div>
                </div>

                <div className="d-card-accent">
                    <div className="d-grid-2">
                        <div>
                            <p className="d-metric-label">Status</p>
                            <p className="d-metric-unit">LAB-READY</p>
                        </div>
                        <div>
                            <p className="d-metric-label">Action</p>
                            <p className="d-metric-unit">GENESIS</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
  ];

  return (
    <>
      <style>{`
        @media print {
          @page { size: 5in 8in; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; }
          .fixed-header { display: none !important; }
          .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; }
          .slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; }
        }
      `}</style>
      <DossierEngineV2 
        slides={slides} 
        branding={{
          title: "NOM-Auto-Labeler",
          subtitle: "Regulatory Indemnity Engine",
          version: "v2.1"
        }} 
        contact={{
          phone: "+52 614 546 3178",
          whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20business%20proposal%20for%20NOM%20Auto%20Labeler%20(BI-0001)%20and%20am%20interested%20in%20getting%20involved.",
          email: "quadraticldm@gmail.com",
          website: "business-dev-two.vercel.app/nom-auto-labeler"
        }} 
        theme={theme} 
      />
    </>
  );
}
