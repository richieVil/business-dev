'use client';
import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function AIStandardWorkDossier() {
  const slides = [
    {
      phase: "PHASE I: THE CATALYST",
      title: "THE INDUSTRIAL\nCORTEX",
      label: "EXECUTIVE BRIEFING // THESIS CENTRAL",
      render: () => (
        <div className="d-content">
          <p className="d-para">
            BI-0003 is the <strong>Infrastructure of Competence</strong>. We provide an AI-native operating layer that extracts, standardizes, and governs tribal knowledge.
          </p>
          <div className="d-card-accent">
            <div className="d-tag-mono">STRATEGIC INTENT</div>
            <p className="d-para">Replace the high-friction, unrecorded <strong>Oral Tradition</strong> of factory training with an immutable, video-verified <strong>Process Ledger</strong>.</p>
          </div>
          <div className="d-card-dark">
            <div className="d-metric-unit">IGNITION KEY</div>
            <div className="d-metric-label">Venture Vision: Machines do not operate without a verified competence handshake.</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "SILVER\nTSUNAMI",
      label: "MACRO-CATALYST // LABOR FRACTURE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Tribal knowledge is evaporating faster than it can be recorded due to a synchronized workforce exit.</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">25%</div>
              <div className="d-metric-label">Workforce Retirement (2024-2030)</div>
            </div>
            <div className="d-card">
              <div className="d-metric-unit">40%+</div>
              <div className="d-metric-label">Annual New Hire Churn</div>
            </div>
          </div>
          <p className="d-para">Static PDFs and manual shadowing cannot scale against the current velocity of <strong>Labor Fracture</strong>.</p>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "THE INVISIBLE\nTAX",
      label: "THE FRICTION // GHOST WAGES",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent">
            <div className="d-tag-mono">SHADOWING TAX</div>
            <p className="d-para">Paying two operators (Senior + Junior) for the productive output of one during onboarding.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">GHOST WAGES</div>
            <p className="d-para">Paying full wages to new hires operating at <strong>30% Efficiency</strong> for 8 weeks.</p>
          </div>
          <div className="d-list-item"><div className="d-dot" /> <span>Direct drain on Gross Margin hidden in general labor variance.</span></div>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "$615,000 USD\nANNUAL LEAK",
      label: "COST OF INACTION // FISCAL AUDIT",
      render: () => (
        <div className="d-content">
          <p className="d-para">A mid-market facility ($100M USD ARR) loses significant margin to the <strong>Ignorance Tax</strong>.</p>
          <div className="d-card-dark">
            <div className="d-grid-2">
              <div>
                <div className="d-metric-unit">$420k</div>
                <div className="d-metric-label">Shadowing Labor</div>
              </div>
              <div>
                <div className="d-metric-unit">$180k</div>
                <div className="d-metric-label">Scrap / Rework</div>
              </div>
            </div>
          </div>
          <p className="d-para">BI-0003 converts these losses into <strong>Net Profit</strong> through ramp-time compression.</p>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "DIGITAL\nGRAVEYARDS",
      label: "STATUS QUO FAILURE // COMPLIANCE GAP",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">BEHAVIORAL FRICTION</div>
            <p className="d-para">Operators do not read 40-page PDFs. They default to "asking a friend," leading to dangerous <strong>Process Drift</strong>.</p>
          </div>
          <div className="d-grid-2">
            <div className="d-card-accent">
              <div className="d-tag-mono">LEGACY</div>
              <div className="d-metric-unit">SAMPLING</div>
              <div className="d-metric-label">Hope the worker read it.</div>
            </div>
            <div className="d-card-dark">
              <div className="d-tag-mono">BI-0003</div>
              <div className="d-metric-unit">CENSUS</div>
              <div className="d-metric-label">Verified proof of understanding.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "ACTION\nSERIALIZATION",
      label: "THE ENGINE // TECHNICAL USP",
      render: () => (
        <div className="d-content">
          <p className="d-para">We move beyond Generative Text. We anchor every instruction to a <strong>Verified Physical Event</strong>.</p>
          <div className="d-card">
            <div className="d-tag-mono">COMPUTER VISION NATIVE</div>
            <div className="d-list-item"><div className="d-dot" /> <span>Identify distinct steps (e.g., "Torque Applied").</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>State detection (e.g., "Safety Guard Engaged").</span></div>
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">ENVIRONMENTAL GRIT</div>
            <p className="d-para">Engineered for <strong>95dB Acoustic Isolation</strong> and <strong>&lt; 200 Lux</strong> low-light performance.</p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "SPECIFICATION\nPARITY",
      label: "BRUTALISTA COMPARISON // BENCHMARK",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-grid-2">
              <div className="d-tag-mono">METRIC</div>
              <div className="d-tag-mono" style={{ textAlign: 'right' }}>BI-0003 DELTA</div>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '8px 0' }} />
            <div className="d-grid-2">
              <div className="d-metric-label">Capture Latency</div>
              <div className="d-metric-unit" style={{ textAlign: 'right' }}>22x FAST</div>
            </div>
            <div className="d-grid-2">
              <div className="d-metric-label">Verification</div>
              <div className="d-metric-unit" style={{ textAlign: 'right' }}>CENSUS</div>
            </div>
            <div className="d-grid-2">
              <div className="d-metric-label">Uptime (Grit)</div>
              <div className="d-metric-unit" style={{ textAlign: 'right' }}>99.9%</div>
            </div>
          </div>
          <p className="d-para">Capture time reduced from 4.5 Hours to <strong>12 Minutes</strong> per process.</p>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "THE PROCESS\nMINUTE",
      label: "STRATEGIC POSITIONING // UNIT OF VALUE",
      render: () => (
        <div className="d-content">
          <p className="d-para">We do not sell software; we sell <strong>Ramp-Hour Reduction</strong>.</p>
          <div className="d-card-dark">
            <div className="d-tag-mono">THE METRIC</div>
            <div className="d-metric-unit">280 HOURS</div>
            <div className="d-metric-label">Productive time returned to P&L per new hire.</div>
          </div>
          <p className="d-para">Reducing onboarding time-to-competence from <strong>320 Hours</strong> (8 weeks) to <strong>40 Hours</strong> (1 week).</p>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "MICRO-BOUNTY\nMECHANICS",
      label: "SUBSTITUTION AUDIT // BEHAVIOR",
      render: () => (
        <div className="d-content">
          <p className="d-para">We solve the friction of documentation by converting it into <strong>Side-Hustle</strong> income for operators.</p>
          <div className="d-card-accent">
            <div className="d-metric-unit">$25.00 USD</div>
            <div className="d-metric-label">Paid directly to operator per verified SOP video.</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">SUNNK COST RECOVERY</div>
            <p className="d-para">"Legacy Ingestion Engine" converts existing PDFs into digital placeholders to bypass switching inertia.</p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE I: THE CATALYST",
      title: "TROJAN HORSE\nENTRY",
      label: "MARKET ENTRY // THE MANEUVER",
      render: () => (
        <div className="d-content">
          <p className="d-para">We bypass the CEO/CIO. We sell directly to the <strong>Quality Manager</strong>.</p>
          <div className="d-card-dark">
            <div className="d-tag-mono">THE INFECTION POINT</div>
            <p className="d-para"><strong>Corrective Action Report (CAR).</strong> When a quality failure occurs, we offer a sub-$5,000 USD pilot to close the audit finding permanently.</p>
          </div>
          <p className="d-para">Fix the "Problem Machine" first, then expand to the whole floor using the <strong>Quality Budget</strong>.</p>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "$3.78 BILLION\nUSD TAM",
      label: "MARKET INTELLIGENCE // BOTTOM-UP",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">TOTAL ADDRESSABLE MARKET</div>
            <div className="d-metric-unit">90,000</div>
            <div className="d-metric-label">Global Mid-Market Manufacturing Entities</div>
          </div>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">$42k</div>
              <div className="d-metric-label">Avg Annual Contract Value</div>
            </div>
            <div className="d-card-accent">
              <div className="d-metric-unit">$450M</div>
              <div className="d-metric-label">Serviceable (Rust Belt / Mexico)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "THE GRIT\nCORRIDORS",
      label: "GEOGRAPHIC DENSITY // CLUSTERS",
      render: () => (
        <div className="d-content">
          <p className="d-para">Strategic focus on high-churn industrial corridors requiring bilingual, NPU-accelerated solutions.</p>
          <div className="d-card">
            <div className="d-tag-mono">PRIMARY CLUSTER</div>
            <div className="d-metric-unit">LAREDO-MONTERREY</div>
            <div className="d-metric-label">High concentration of Tier-2 Maquiladoras.</div>
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">SECONDARY CLUSTER</div>
            <div className="d-metric-unit">GREAT LAKES</div>
            <div className="d-metric-label">Greatest concentration of "Silver Tsunami" retirement risk.</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "NODE COVERAGE\nVELOCITY",
      label: "THE GOLDEN NUMBER // SURVIVAL",
      render: () => (
        <div className="d-content">
          <p className="d-para">Measuring the % of critical machine-nodes protected by verified digital SOPs.</p>
          <div className="d-card-dark">
            <div className="d-metric-unit">&gt; 85%</div>
            <div className="d-metric-label">ELITE RANGE: Facility is "Audit-Proof." Churn &lt; 1%.</div>
          </div>
          <div className="d-card">
            <div className="d-metric-unit">&lt; 30%</div>
            <div className="d-metric-label">DEATH RANGE: viewed as "Extra Work." Churn imminent.</div>
          </div>
          <p className="d-para">Node Coverage Velocity is the lead indicator for <strong>Net Dollar Retention</strong>.</p>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "THE 90-DAY\nNCV SPRINT",
      label: "SURVIVAL THRESHOLDS // EXECUTION",
      render: () => (
        <div className="d-content">
          <p className="d-para">Every installation must hit <strong>80% Node Coverage Velocity</strong> by Day 60 to survive the "Doorstop Risk."</p>
          <div className="d-card-accent">
            <div className="d-tag-mono">THE ACCELERATOR</div>
            <p className="d-para">Aggressive "Micro-Bounty" payout in Month 1 to flood the system with verified data.</p>
          </div>
          <div className="d-list-item"><div className="d-dot" /> <span>Auto-Alert: Triggers Success Manager intervention if NCV stalls at Day 45.</span></div>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "BRUTALISTA\nMATRIX",
      label: "COMPETITIVE RESILIENCE // DEFENSE",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">WHY INCUMBENTS FAIL</div>
            <p className="d-para"><strong>The "Carpet-Walker" Bias:</strong> Workday/SAP build for clean offices. They cannot handle dust, low light, or 100dB noise.</p>
          </div>
          <div className="d-card-dark">
            <div className="d-tag-mono">BI-0003 DIFFERENTIATOR</div>
            <div className="d-list-item"><div className="d-dot" /> <span>NPU Edge Inference (No Wi-Fi Needed)</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>90dB Frequency Filtering (&gt;300Hz)</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>Action-Based Census Verification</span></div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "THE STACK\nBIFURCATION",
      label: "MACHINE ARCHITECTURE // DEPLOYMENT",
      render: () => (
        <div className="d-content">
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">THE WEDGE (Y1)</div>
              <p className="d-para" style={{fontSize: '10px'}}>PWA + Cloud Multi-modal APIs + <strong>Shadow Auditors</strong>.</p>
            </div>
            <div className="d-card-dark">
              <div className="d-tag-mono">DOMINANCE (Y3)</div>
              <p className="d-para" style={{fontSize: '10px'}}>On-Device NPU + <strong>Proprietary Weights</strong> + Local Edge.</p>
            </div>
          </div>
          <p className="d-para">Hardware agnostic deployment on existing <strong>Zebra/Honeywell</strong> rugged handhelds.</p>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "ASSET\nGENESIS",
      label: "IP MANUAL // THE REFINERY",
      render: () => (
        <div className="d-content">
          <p className="d-para">Value is not in the code, but in the <strong>Proprietary Action Library</strong>.</p>
          <div className="d-card-accent">
            <div className="d-tag-mono">THE REFINERY</div>
            <p className="d-para">Conversion of raw video into <strong>Temporal Action Fragments</strong>.</p>
          </div>
          <div className="d-card">
            <div className="d-metric-unit">10,000 HRS</div>
            <div className="d-metric-label">Target Dataset of Verified Industrial Movement.</div>
          </div>
          <p className="d-para">We own the mathematical logic of the work, not just the video storage.</p>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "FULFILLMENT\nCHAIN",
      label: "THE ASSEMBLY LINE // LATENCY",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">WORK CENTERS</div>
            <p className="d-para" style={{fontSize: '11px'}}>1. Capture -&gt; 2. Ingest -&gt; 3. Serialize -&gt; 4. Shadow Audit -&gt; 5. MES Injection.</p>
          </div>
          <div className="d-grid-2">
            <div className="d-card-dark">
              <div className="d-metric-unit">&lt; 4 HRS</div>
              <div className="d-metric-label">Wedge Latency (End of Shift)</div>
            </div>
            <div className="d-card-accent">
              <div className="d-metric-unit">&lt; 5 MIN</div>
              <div className="d-metric-label">Dominance Latency (Real-Time)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE II: THE MACHINE",
      title: "SHADOW\nOVERSIGHT",
      label: "OPERATIONAL GOVERNANCE // HITL",
      render: () => (
        <div className="d-content">
          <p className="d-para">Algorithmic speed never compromises <strong>ISO Compliance</strong>.</p>
          <div className="d-card">
            <div className="d-tag-mono">MULTI-SIG PROTOCOL</div>
            <p className="d-para">Safety-critical steps require signatures from: <strong>AI + Shadow Auditor + Master Operator</strong>.</p>
          </div>
          <div className="d-card-dark">
            <div className="d-tag-mono">LIABILITY FIREWALL</div>
            <p className="d-para">BI-0003 provides the Refinery; the client <strong>Owns the Standard</strong>. This isolates the venture from industrial malpractice claims.</p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "VALIDATION\nROADMAP",
      label: "SCIENTIFIC R&D // HYPOTHESIS",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent">
            <div className="d-tag-mono">HYPOTHESIS</div>
            <p className="d-para">Proprietary Action Recognition achieves <strong>&gt; 90% Accuracy</strong> in 95dB grit without cloud compute.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">THE TEST</div>
            <p className="d-para">"Auto-Shop Stress Test": 100 sequences of manual calibration in low-light using only <strong>On-Device NPU</strong>.</p>
          </div>
          <p className="d-para">Success = <strong>&lt; 5% Human Intervention Rate</strong> (19/20 correct trials).</p>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "FOUNDER\nDNA",
      label: "ELITE TEAM // SPECIFICATIONS",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">THE ARCHITECT</div>
            <p className="d-para">5+ Years in Temporal Computer Vision / Action Recognition.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">THE OPERATOR</div>
            <p className="d-para">ISO-Fluent. 1,000+ Floor Hours in Tier-2 Quality Management.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">THE SALES LEAD</div>
            <p className="d-para">Expert in "Backdoor" industrial sales and <strong>Net-120</strong> cycles.</p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "NODE + TIER\nPRICING",
      label: "COMMERCIAL LOGIC // REVENUE",
      render: () => (
        <div className="d-content">
          <p className="d-para">Move from "Per-User" to <strong>Asset Protection</strong> pricing.</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-tag-mono">STARTER (W)</div>
              <div className="d-metric-unit">$12k</div>
              <div className="d-metric-label">USD ARR / 10 Nodes</div>
            </div>
            <div className="d-card-dark">
              <div className="d-tag-mono">PRO (D)</div>
              <div className="d-metric-unit">$42k+</div>
              <div className="d-metric-label">USD ARR / MES Interlock</div>
            </div>
          </div>
          <div className="d-card-accent">
            <div className="d-metric-unit">$7,500 USD</div>
            <div className="d-metric-label">Upfront Implementation (Grit-Audit + PDF Ingestion)</div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "MARGIN\nBRIDGE",
      label: "UNIT ECONOMICS // EFFICIENCY",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-grid-2">
              <div className="d-metric-label">Cost per Minute (W)</div>
              <div className="d-metric-unit" style={{ textAlign: 'right' }}>$15.00</div>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '8px 0' }} />
            <div className="d-grid-2">
              <div className="d-metric-label">Cost per Minute (D)</div>
              <div className="d-metric-unit" style={{ textAlign: 'right' }}>$0.80</div>
            </div>
          </div>
          <div className="d-card-dark">
            <div className="d-grid-2">
              <div>
                <div className="d-metric-unit">89x</div>
                <div className="d-metric-label">LTV / CAC Ratio</div>
              </div>
              <div>
                <div className="d-metric-unit">92%</div>
                <div className="d-metric-label">Target Net Margin</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "ALLOCATION\nMERITOCRACY",
      label: "INVESTMENT RULES // VELOCITY",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent">
            <div className="d-tag-mono">PRIORITY 1</div>
            <p className="d-para"><strong>PE Roll-ups:</strong> Highest Profit Velocity. One deal unlocks 10+ facilities.</p>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">PRIORITY 2</div>
            <p className="d-para"><strong>Regulated MedTech:</strong> Highest Defensibility. Zero churn once in Quality Manual.</p>
          </div>
          <p className="d-para">Expansion Target: <strong>125% Net Dollar Retention</strong> via automated Node Proliferation.</p>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "VALLEY OF\nDEATH",
      label: "FINANCIAL PHYSICS // CASHFLOW",
      render: () => (
        <div className="d-content">
          <p className="d-para">Survival depends on bridging the gap between implementation labor and <strong>Net-120 payment terms</strong>.</p>
          <div className="d-card-dark">
            <div className="d-metric-unit">-$90,000</div>
            <div className="d-metric-label">USD Projected Cash Bottom (Month 4)</div>
          </div>
          <div className="d-card">
            <div className="d-tag-mono">SURVIVAL BRIDGES</div>
            <div className="d-list-item"><div className="d-dot" /> <span>$4,950 Credit Card Pilots (Bypass AP)</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>AR Factoring on Tier-1 Invoices</span></div>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "STRESS-TESTING\nTHE MISS",
      label: "SCALE-UP PHYSICS // RESILIENCE",
      render: () => (
        <div className="d-content">
          <div className="d-card-accent">
            <div className="d-tag-mono">20% SALES MISS</div>
            <p className="d-para">Instant pause of "Insurance Channel" R&D and 100% pivot to variable <strong>Shadow Auditor</strong> labor to protect runway.</p>
          </div>
          <div className="d-card-dark">
            <div className="d-metric-unit">62 NODES</div>
            <div className="d-metric-label">Active facilities required for Cash-Neutral Break-even.</div>
          </div>
          <p className="d-para">Subscription profit covers $65k/month burn at facility #62.</p>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "INVISIBLE\nECONOMICS",
      label: "GHOST MARGINS // SALVAGE",
      render: () => (
        <div className="d-content">
          <div className="d-card">
            <div className="d-tag-mono">FX ARBITRAGE</div>
            <p className="d-para">USD Revenue vs MXN/PLN fulfillment costs. <strong>250bps</strong> margin lift via remote audit hubs.</p>
          </div>
          <div className="d-card-accent">
            <div className="d-tag-mono">DATA SALVAGE</div>
            <p className="d-para">Re-selling anonymized "Global Benchmarks" to machine OEMs at <strong>100% Gross Margin</strong>.</p>
          </div>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "$2.5 MILLION\nUSD SEED ASK",
      label: "THE FUNDING MANDATE // EXIT",
      render: () => (
        <div className="d-content">
          <p className="d-para">Capital earmarked for <strong>Model Sovereignty</strong> and scaling the Trojan Horse entry.</p>
          <div className="d-grid-2">
            <div className="d-card">
              <div className="d-metric-unit">18 MO</div>
              <div className="d-metric-label">Projected Runway</div>
            </div>
            <div className="d-card-dark">
              <div className="d-metric-unit">5x</div>
              <div className="d-metric-label">Valuation Step-up Trigger</div>
            </div>
          </div>
          <p className="d-para">Target Exit: Strategic acquisition by <strong>Workday</strong> or Industrial OEMs (Haas/Fanuc).</p>
        </div>
      )
    },
    {
      phase: "PHASE III: PHYSICS & MANDATE",
      title: "90-DAY\nMANDATE",
      label: "CONCLUSION // MILESTONES",
      render: () => (
        <div className="d-content">
          <p className="d-para">Transitioning the global factory floor from Oral Tradition to the <strong>Verified Process Ledger</strong>.</p>
          <div className="d-card-dark">
            <div className="d-list-item"><div className="d-dot" /> <span>Secure 5 Paid Pilots via Quality CAR.</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>Achieve &gt; 80% Node Coverage Velocity.</span></div>
            <div className="d-list-item"><div className="d-dot" /> <span>Harvest 500+ Hours of Golden Video.</span></div>
          </div>
          <p className="d-para" style={{marginTop: '12px'}}><em>"We do not sell software; we insure the Institutional Memory of the Supply Chain."</em></p>
        </div>
      )
    }
  ];

  return (
    <DossierEngineV2
      slides={slides}
      branding={{
        title: "INDUSTRIAL CORTEX",
        subtitle: "BI-0003 // AI-STANDARD WORK",
        version: "V1.0-LAB-READY"
      }}
      contact={{
        phone: "+52 614 546 3178",
        whatsapp: "https://wa.me/526145463178?text=I%20read%20the%20business%20dossier%20for%20BI-0003%20Industrial%20Cortex%20and%20want%20to%20discuss%20the%20Seed%20Mandate.",
        email: "ricardo@lab.com",
        website: "business-dev-two.vercel.app/ai-standard-work"
      }}
      theme={{
        parchment: "#0A0A0A", // Charcoal/Black for THE SCANNER skin
        ink: "#FFFFFF",
        accent: "#DC2626", // Red
        muted: "#A3A3A3"
      }}
    />
  );
}
