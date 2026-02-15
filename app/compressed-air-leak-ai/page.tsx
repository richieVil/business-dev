"use client";

import React from "react";
import DossierEngineV2 from "../components/DossierEngineV2";

export default function CompressedAirLeakDossier() {
  const theme = {
    parchment: "#0A0A0A", // Dark Background
    ink: "#FFFFFF",       // Light Text
    accent: "#DC2626",    // Red Accent
    muted: "#A3A3A3",     // High-Contrast Silver (8.6:1 Ratio)
  };

  const branding = {
    title: "Compressed Air Leak AI",
    subtitle: "Acoustic Spectrogram Inference Engine",
    version: "V1.0-LAB-READY",
  };

  const contact = {
    phone: "+52 614 546 3178",
    whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20business%20proposal%20for%20Compressed%20Air%20Leak%20AI%20and%20am%20interested%20in%20getting%20involved.",
    email: "quadraticldm@gmail.com",
    website: "business-dev.app/air-leak-ai",
  };

  // --- CONTENT SLIDES (1-30) ---
  const slides = [
    {
      id: 1,
      phase: "STRATEGIC CORE",
      title: "Executive\nBriefing",
      label: "Fiscal Momentum",
      render: () => (
        <div className="d-content">
          <p className="d-para">Converting industrial noise into verifiable EBITDA through <strong>Acoustic Spectrogram Inference</strong>. We transform a maintenance liability into Found Capacity.</p>
          <div className="d-card d-card-accent">
            <div className="d-metric-unit">328,000</div>
            <div className="d-metric-label">Annual kWh Waste (Typical 200HP Facility)</div>
          </div>
          <div className="d-list-item"><div className="d-dot"></div><span>Continuous Audit vs. Periodic Sampling</span></div>
          <div className="d-list-item"><div className="d-dot"></div><span>Fiscal Ledger Integration (SAP/Maximo)</span></div>
          <div className="d-list-item"><div className="d-dot"></div><span>ISO 50001 Compliance Automation</span></div>
        </div>
      )
    },
    {
      id: 2,
      phase: "STRATEGIC CORE",
      title: "Catalyst\n& Vision",
      label: "Market Drivers",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Energy-to-EBITDA Compression</div>
          <div className="d-grid-2">
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">40%</div>
              <div className="d-metric-label">Electricity Tariff Spike</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">30%</div>
              <div className="d-metric-label">Leakage Baseline</div>
            </div>
          </div>
          <p className="d-para">Rising utility rates in industrial hubs (MX, DE, SE USA) have converted air leaks from maintenance annoyances into <strong>Solvency Risks</strong>.</p>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono" style={{ color: theme.parchment }}>The Vision</div>
            <div className="d-para" style={{ color: theme.parchment, marginBottom: 0 }}>Establish the <strong style={{ color: theme.parchment }}>Acoustic Operating System</strong> for the industrial floor.</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      phase: "THE PROBLEM",
      title: "The\nInvisible Tax",
      label: "Liability Breakdown",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>615,000 USD</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Total Annual Invisible Tax (Tier-1 Plant)</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">300,000</div>
              <div className="d-metric-label">Energy Waste USD</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">200,000</div>
              <div className="d-metric-label">CAPEX Pull-Forward</div>
            </div>
          </div>
          <p className="d-para">Compressed air is the most expensive utility. 25% waste represents <strong>wasted capital</strong> that could be profit.</p>
        </div>
      )
    },
    {
      id: 4,
      phase: "THE PROBLEM",
      title: "The\nSampling Gap",
      label: "Legacy Friction",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Legacy Audit Failure</div>
          <div className="d-card d-card-accent">
            <div className="d-metric-unit">330 Days</div>
            <div className="d-metric-label">Detection Latency (Periodic Gap)</div>
          </div>
          <p className="d-para">Manual audits occur every 12 months. A leak forming in Month 2 drains capital for <strong>11 months</strong> before detection.</p>
          <div className="d-list-item"><div className="d-dot"></div><span>Acoustic Saturation: Manual failure in 105dB</span></div>
          <div className="d-list-item"><div className="d-dot"></div><span>Verification Void: No "Closing Scan" proof</span></div>
        </div>
      )
    },
    {
      id: 5,
      phase: "THE PROBLEM",
      title: "Behavioral\nFriction",
      label: "Human Barriers",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Accountability Anxiety</div>
          <div className="d-card">
            <div className="d-metric-unit">45.00 USD</div>
            <div className="d-metric-label">Hourly Tech Rate (Ghost Hunt Cost)</div>
          </div>
          <p className="d-para">Maintenance teams reject tools that hallucinate. One <strong>Ghost Hunt</strong> kills tool credibility for the entire facility.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">The Solve: Autonomous Logic</div>
            <div className="d-para" style={{ marginBottom: 0 }}>Converting data into <strong>Pre-Filled Work Orders</strong> to prioritize USD impact over noise.</div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      phase: "THE MACHINE",
      title: "Acoustic\nInference",
      label: "Technical USP",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Engine Architecture</div>
          <div className="d-grid-2">
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">192 kHz</div>
              <div className="d-metric-label">Sampling Rate</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">85%</div>
              <div className="d-metric-label">LPM Correlation</div>
            </div>
          </div>
          <div className="d-card d-card-dark">
            <div className="d-tag-mono" style={{ color: theme.parchment }}>The Engine</div>
            <div className="d-para" style={{ color: theme.parchment, marginBottom: 0 }}><strong style={{ color: theme.parchment }}>Temporal Rhythmic Analysis:</strong> Separating machine process noise from turbulent leak flow.</div>
          </div>
          <div className="d-list-item"><div className="d-dot"></div><span>Decoupling turbulent signatures from 105dB</span></div>
        </div>
      )
    },
    {
      id: 7,
      phase: "THE MACHINE",
      title: "Specification\nParity",
      label: "Competitive Audit",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>&lt; 3.00%</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Verified False Positive Rate</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">Grit Solve</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}><strong>Gore-Tex Vents:</strong> Oil-mist and dust proofing.</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Privacy</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}><strong>Silicon Muzzle:</strong> Voice-range physical suppression.</div>
            </div>
          </div>
          <div className="d-list-item"><span>Legacy Camera: 10% Ghost / $20k CAPEX</span></div>
          <div className="d-list-item"><span><strong>Leak AI: 3% Ghost / Asset-Light Sub</strong></span></div>
        </div>
      )
    },
    {
      id: 8,
      phase: "THE MACHINE",
      title: "Strategic\nPositioning",
      label: "Unit of Value",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Unit of Value</div>
          <div className="d-card d-card-accent">
            <div className="d-metric-unit">39,360.00 USD</div>
            <div className="d-metric-label">Annual Recovery (200HP Facility)</div>
          </div>
          <p className="d-para">We do not sell software; we sell <strong>Found Capacity</strong>. We capture 10% of the energy value we create.</p>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>10x</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Average Verified ROI Multiplier</div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      phase: "THE MACHINE",
      title: "Trojan Horse\nEntry",
      label: "Wedge Maneuver",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Bypassing the IT Blockade</div>
          <div className="d-card">
            <div className="d-metric-unit">4,500.00 USD</div>
            <div className="d-metric-label">Initial Diagnostic Audit Revenue</div>
          </div>
          <p className="d-para">Entry via <strong>Direct Substitution</strong> of the Annual Audit budget. No Wi-Fi or Cloud integration required for Wedge Phase.</p>
          <div className="d-list-item"><div className="d-dot"></div><span>Handheld capture with Physical Air-Gap</span></div>
          <div className="d-list-item"><div className="d-dot"></div><span>Reveal: Fiscal Bleed Ledger in 24 Hours</span></div>
        </div>
      )
    },
    {
      id: 10,
      phase: "THE MACHINE",
      title: "Category\nDisplacement",
      label: "Scale Roadmap",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Scale Roadmap</div>
          <div className="d-card d-card-accent">
            <div className="d-metric-unit">45,000 USD</div>
            <div className="d-metric-label">Target Year 2 ACV (Tier-1)</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">Phase 1</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Audit Replacement. Smartphone Wedge.</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Phase 2</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Continuous Nodes. SAP Integration.</div>
            </div>
          </div>
          <p className="d-para">Expansion via <strong>Nitrogen (N2)</strong> and <strong>Predictive Mechanical</strong> modules.</p>
        </div>
      )
    },
    {
      id: 11,
      phase: "MARKET LOGIC",
      title: "Market\nIntelligence",
      label: "TAM / SAM / SOM",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Bottom-Up Arithmetic</div>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>540,000,000 USD</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Global TAM (45,000 Facilities * 12,000 ACV)</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">144.0M</div>
              <div className="d-metric-label">SAM (North America)</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">12.5M</div>
              <div className="d-metric-label">SOM (Grit Corridors)</div>
            </div>
          </div>
          <p className="d-para">We target facilities with &gt;500HP capacity where <strong>Energy Volatility</strong> is a top-3 operational expense.</p>
        </div>
      )
    },
    {
      id: 12,
      phase: "MARKET LOGIC",
      title: "Geographic\nDensity",
      label: "Grit Corridors",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Strategic Clusters</div>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">The Maquiladora Belt</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Monterrey-Laredo. High-humidity accelerated corrosion.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Bajío Automotive Cluster</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Querétaro-Silao. High-dust noise saturation.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Rust Belt</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Midwest USA. Legacy infrastructure with high demand charges.</div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      phase: "THE GOVERNANCE",
      title: "The Golden\nNumber",
      label: "Verified Value Ratio",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Survival Metric</div>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>5.00x</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Survival Threshold (VVR)</div>
          </div>
          <p className="d-para"><strong>Verified Value Ratio (VVR):</strong> Total USD Savings / Subscription Cost. If VVR &lt; 3.0x, churn is imminent.</p>
          <div className="d-card d-card-accent">
            <div className="d-para" style={{ marginBottom: 0 }}>This metric prevents the <strong>Optimization Paradox</strong> by quantifying the value of <strong>Avoided Regression</strong>.</div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      phase: "THE GOVERNANCE",
      title: "Survival\nThresholds",
      label: "Risk & Opportunity Zones",
      render: () => (
        <div className="d-content">
          <div className="d-list-item"><div className="d-dot" style={{ background: '#10B981' }}></div><span><strong>Elite (&gt;12.0x):</strong> Automatic expansion trigger.</span></div>
          <div className="d-list-item"><div className="d-dot" style={{ background: '#0891B2' }}></div><span><span><strong>Healthy (5.0x-11.9x):</strong> Baseline for ISO 50001.</span></span></div>
          <div className="d-list-item"><div className="d-dot" style={{ background: '#DC2626' }}></div><span><strong>Death (&lt;3.0x):</strong> Deploys Customer Success SWAT.</span></div>
          <div className="d-card d-card-dark" style={{ marginTop: '12px' }}>
            <div className="d-para" style={{ fontSize: '11px', margin: 0, color: theme.parchment }}>We do not sell insights; we sell <strong>EBITDA Accretion</strong>. If the multiplier drops, the tool is a cost, not an asset.</div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      phase: "THE GOVERNANCE",
      title: "Competitor\nMatrix",
      label: "Brutalista Audit",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-tag-mono" style={{ color: theme.parchment }}>Leak AI</div>
              <div className="d-para" style={{ fontSize: '11px', color: theme.parchment, marginBottom: 0 }}>Continuous Audit. AI Verification. <strong style={{ color: theme.parchment }}>&lt;3% Ghost Hunts.</strong></div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Legacy Camera</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Manual Spot-Check. $20k CAPEX. <strong>15% False Positive.</strong></div>
            </div>
          </div>
          <div className="d-card d-card-accent" style={{ marginTop: '12px' }}>
            <div className="d-para" style={{ fontSize: '11px', margin: 0 }}><strong>The Difference:</strong> We verify the repair. Legacy cameras only see the leak; they don't audit the fix.</div>
          </div>
        </div>
      )
    },
    {
      id: 16,
      phase: "THE GOVERNANCE",
      title: "The Dominance\nStack",
      label: "Hardened Infrastructure",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card d-card-accent">
              <div className="d-tag-mono">Connectivity</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Private LoRaWAN / LTE backhaul for industrial steel.</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">The Shield</div>
              <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>IP67 / Class 1 Div 2 Intrinsic Safety.</div>
            </div>
          </div>
          <p className="d-para" style={{ marginTop: '12px' }}><strong>The Silicon Muzzle:</strong> Edge-processing only. Raw audio is hardware-purged every 500ms.</p>
        </div>
      )
    },
    {
      id: 17,
      phase: "THE REFINERY",
      title: "Asset\nGenesis I",
      label: "The Raw Harvest",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>5,000 Hours</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Proprietary "Dirty" Audio Harvest</div>
          </div>
          <p className="d-para">We ingest the <strong>Acoustic DNA</strong> of the factory floor: High-pressure cleaning, pneumatic exhaust, and mechanical vibration.</p>
          <div className="d-list-item"><div className="d-dot"></div><span>Recursive Feedback from human technicians</span></div>
          <div className="d-list-item"><div className="d-dot"></div><span>Atmospheric Normalization Logic</span></div>
        </div>
      )
    },
    {
      id: 18,
      phase: "THE REFINERY",
      title: "Asset\nGenesis II",
      label: "The Knowledge Vault",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Defensible Intellectual Property</div>
          <div className="d-card">
            <div className="d-tag-mono">Spectral Normalization</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Adjusting for humidity and altitude speed-of-sound variables.</div>
          </div>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">The Lock</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Immutable <strong>Block-Storage Ledger</strong> for ISO 50001 audit trails.</div>
          </div>
        </div>
      )
    },
    {
      id: 19,
      phase: "THE REFINERY",
      title: "Fulfillment\nChain",
      label: "Data Factory Line",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Raw Noise to Verified USD</div>
          <div className="d-list-item"><span>1. Ingestion: Raw Spectral + Atmospheric Meta</span></div>
          <div className="d-list-item"><span>2. Parsing: Temporal Rhythmic Masking</span></div>
          <div className="d-list-item"><span>3. Inference: Volumetric LPM to USD Math</span></div>
          <div className="d-list-item"><span>4. Verification: Human-in-the-Loop Multi-Sig</span></div>
          <div className="d-list-item"><span>5. Injection: Automated SAP PM Work Order</span></div>
          <div className="d-list-item"><span>6. Closure: Verified Acoustic Baseline Drop</span></div>
        </div>
      )
    },
    {
      id: 20,
      phase: "THE REFINERY",
      title: "Operational\nGovernance",
      label: "Shadow Oversight",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-metric-unit" style={{ color: theme.parchment }}>1 : 250</div>
              <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Auditor to Site Ratio (Scale)</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">&gt; 92%</div>
              <div className="d-metric-label">Autonomous Confidence Floor</div>
            </div>
          </div>
          <p className="d-para"><strong>Shadow Oversight:</strong> 100% of detections are analyzed; low-confidence hits are routed to human Multi-Sig verification.</p>
          <div className="d-list-item"><div className="d-dot"></div><span>Liability Firewall: Professional sign-off</span></div>
        </div>
      )
    },
    {
      id: 21,
      phase: "VALIDATION",
      title: "Validation\nRoadmap",
      label: "Neutralizing Objections",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Scientific Success Gates</div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span><strong>Noise Decoupling:</strong> Blind test in 100dB stamping plant. Pass: &gt;95% Precision.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span><strong>Fiscal Correlation:</strong> CT-Clamp motor draw vs. AI estimate. Pass: &gt;0.85 Correlation.</span>
          </div>
          <div className="d-list-item">
            <div className="d-dot"></div>
            <span><strong>Security:</strong> Third-party buffer-purge audit. Pass: Certification of Non-Recording status.</span>
          </div>
          <div className="d-card d-card-dark" style={{ marginTop: '8px' }}>
            <div className="d-para" style={{ fontSize: '11px', margin: 0, color: theme.parchment }}>We do not move to Series A until the <strong>Unit of Value</strong> is scientifically indisputable.</div>
          </div>
        </div>
      )
    },
    {
      id: 22,
      phase: "VALIDATION",
      title: "Founder\nDNA",
      label: "Technical Trinity",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">The Signal Architect</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>10+ years DSP/CNN focus on non-stationary noise. Experience in "Dirty" industrial acoustics.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Industrial Closer</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Former Plant P&L Owner. Deep Rolodex in Tier-1 Automotive. Navigates Union and Net-120 friction.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">The Edge Engineer</div>
            <div className="d-para" style={{ fontSize: '11px', marginBottom: 0 }}>Expert in LoRaWAN and Intrinsic Safety hardware. Proven track record in Class 1 Div 2 zones.</div>
          </div>
        </div>
      )
    },
    {
      id: 23,
      phase: "THE PHYSICS",
      title: "Acquisition\nPhysics",
      label: "Net Acquisition Cost",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">14,000</div>
              <div className="d-metric-label">Gross CAC USD</div>
            </div>
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">4,500</div>
              <div className="d-metric-label">Audit Offset USD</div>
            </div>
          </div>
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>9,500 USD</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Net Customer Acquisition Cost</div>
          </div>
          <p className="d-para"><strong>9.5 Month Payback:</strong> The "Paid Audit" strategy self-funds the high cost of industrial on-site reveals.</p>
        </div>
      )
    },
    {
      id: 24,
      phase: "THE PHYSICS",
      title: "Delivery\nPhysics",
      label: "Margin Bridge",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">Fulfillment Evolution</div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">75%</div>
              <div className="d-metric-label">Entry Margin</div>
            </div>
            <div className="d-card d-card-accent">
              <div className="d-metric-unit">94%</div>
              <div className="d-metric-label">Scale Margin</div>
            </div>
          </div>
          <p className="d-para">Scale is achieved by displacing <strong>Shadow Auditor</strong> labor with <strong>Autonomous Edge Inference</strong>. Fulfillment cost remains flat as revenue quadruples.</p>
        </div>
      )
    },
    {
      id: 25,
      phase: "THE PHYSICS",
      title: "Unit\nEconomics",
      label: "Profit Velocity",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-metric-unit" style={{ color: theme.parchment }}>6,075</div>
              <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Profit Velocity Score</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">113%</div>
              <div className="d-metric-label">Net Retention</div>
            </div>
          </div>
          <p className="d-para"><strong>Allocation Meritocracy:</strong> Capital is funneled exclusively into High-Intensity segments that yield the fastest Adjusted Profit return.</p>
          <div className="d-list-item"><div className="d-dot"></div><span>Expansion: Nitrogen + Predictive Mechanical</span></div>
        </div>
      )
    },
    {
      id: 26,
      phase: "THE PHYSICS",
      title: "36-Month\nCashflow",
      label: "Efficiency Step-Up",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Capital Bridge</div>
          <div className="d-card">
            <div className="d-metric-unit">79,500 USD</div>
            <div className="d-metric-label">Genesis Build Burn (0-3M)</div>
          </div>
          <div className="d-card d-card-accent">
            <div className="d-metric-unit">337,500 USD</div>
            <div className="d-metric-label">Net Validation Burn (4-12M)</div>
          </div>
          <p className="d-para">We utilize <strong>Industrial Cost Controls</strong> to survive the "Valley of Death" before scaling toward 92% Gross Margins.</p>
        </div>
      )
    },
    {
      id: 27,
      phase: "THE PHYSICS",
      title: "The Valley\nof Death",
      label: "Survival Bridges",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card d-card-dark">
              <div className="d-metric-unit" style={{ color: theme.parchment }}>120 Days</div>
              <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Fortune 500 Float</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">Net-0</div>
              <div className="d-metric-label">Mobilization Fee</div>
            </div>
          </div>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">Survival Bridge: AR Factoring</div>
            <div className="d-para" style={{ fontSize: '11px', margin: 0 }}>Converting Net-120 into <strong>Net-2 Liquidity</strong> via a 3.50% discount fee. Cash-flow neutral implementation from Day 1.</div>
          </div>
        </div>
      )
    },
    {
      id: 28,
      phase: "THE PHYSICS",
      title: "Invisible\nEconomics",
      label: "Data Salvage",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">FX Arbitrage</div>
              <div className="d-para" style={{ fontSize: '10px', margin: 0 }}>USD Revenue vs. MXN Cost Center in Monterrey.</div>
            </div>
            <div className="d-card">
              <div className="d-tag-mono">Tax Credits</div>
              <div className="d-para" style={{ fontSize: '10px', margin: 0 }}>IRA Section 179D Measurement & Verification logic.</div>
            </div>
          </div>
          <div className="d-card d-card-dark" style={{ marginTop: '10px' }}>
            <div className="d-metric-unit" style={{ color: theme.parchment }}>15.00%</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Year 3 Revenue: Data Salvage</div>
          </div>
          <p className="d-para" style={{ fontSize: '11px', marginTop: '8px' }}>Selling anonymized <strong>Failure Indexes</strong> to industrial insurers and compressor manufacturers.</p>
        </div>
      )
    },
    {
      id: 29,
      phase: "THE PHYSICS",
      title: "Funding\nMandate",
      label: "Series A Trigger",
      render: () => (
        <div className="d-content">
          <div className="d-card d-card-dark">
            <div className="d-metric-unit" style={{ color: theme.parchment }}>4,000,000 USD</div>
            <div className="d-metric-label" style={{ color: theme.parchment, opacity: 0.7 }}>Total Growth Capital Ask</div>
          </div>
          <p className="d-para">Funding the 18-month transition to <strong>Autonomous Industrial Governance</strong>. Target: 1.5M ARR.</p>
          <div className="d-card d-card-accent">
            <div className="d-tag-mono">The EBITDA Multiplier Effect</div>
            <div className="d-para" style={{ fontSize: '11px', margin: 0 }}>Every 1 USD of energy waste recovered is 1 USD of pure EBITDA. At an 8x-12x multiple, we generate significant <strong>Asset Value Lift</strong>.</div>
          </div>
        </div>
      )
    },
    {
      id: 30,
      phase: "THE PHYSICS",
      title: "Conclusion\n& Mandate",
      label: "90-Day Success Gate",
      render: () => (
        <div className="d-content">
          <div className="d-tag-mono">The Deterministic Go Signal</div>
          <div className="d-list-item"><span>1. Complete "Laredo at 2 AM" Blind Test.</span></div>
          <div className="d-list-item"><span>2. Ingest 5,000 Hours of multi-sector audio.</span></div>
          <div className="d-list-item"><span>3. Secure 10 Paid Diagnostic Audits.</span></div>
          <div className="d-card d-card-dark" style={{ marginTop: '20px' }}>
            <div className="d-para" style={{ fontSize: '13px', fontWeight: '900', textAlign: 'center', margin: 0, color: theme.parchment }}>CONVERTING NOISE TO EQUITY.</div>
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
        branding={branding}
        contact={contact}
        theme={theme}
      />
    </>
  );
}
