# SOP: Venture Showcase Standards (004-venture-showcase)

## 1. Objective
To transform a high-fidelity Venture Dossier (4-file standard) into a "CFO-Ready" web presentation. The showcase presents the venture as a validated engineering project with a clear narrative arc.

---

## 2. Prerequisites (Input Requirements)
Showcase development begins **ONLY** after the VA-HF strategy is finalized:

1.  **Identity Strategy:** Selection of the Naming and Brand Archetype (SOP 002).
2.  **Strategic Dossier:** Access to the VPC, VMC, and BMC documents.
3.  **The Data Harvest:** A structured extraction of at least 12 "Hard Truths" (metrics, logic-rules, or security specs) from the strategy docs. Code implementation is forbidden until this harvest is verified by the Lead.

---

## 3. Visual Standards (The Junior Legal Format)
To maintain consistency with the `DossierEngine.tsx`:
*   **Viewport:** Fixed 375px width (max) for mobile-first scrolling.
*   **Layout:** Snap-to-section (Slide) behavior.
*   **Typography:** Slate-900 primary, with Accent colors (e.g., amber-500) for labels and metrics.

---

## 4. The Tiered Narrative Arc (VML-Standard)

To prevent "Strategic Bloat," the showcase is right-sized to the venture's maturity.

### 3.1 The "Genesis Brief" (The Architect's Manifesto)
The Genesis Brief is a clinical technical specification designed to establish peer-level authority with industry experts. (Standard: 12 Slides).

**The Tone Mandate:**
- **Clinical:** Use architectural terms (Orchestration, Latency, Thresholds, Persistence).
- **Assertion-Based:** Every header must be a high-impact claim, not a label.
- **Hypothesis-Driven:** Explicitly state what is being tested (The Stress-Test Roadmap).

| Slide | Narrative Assertion (Header Strategy) | Strategic Focus |
| :--- | :--- | :--- |
| **01** | **Structural Resolution of the [Market] [Pain] Gap.** | The Architectural Thesis |
| **02** | **The Failure of User-Initiated [Legacy Process].** | Quantified Fulfillment Drop |
| **03** | **Asynchronous Orchestration via Headless Middleware.** | The TOF Mechanism |
| **04** | **Identity Persistence: The [Anchor] as a Network Vault.** | Identity Moat Engineering |
| **05** | **Security Architecture: Non-Custodial [HSM/KMS] Vaulting.**| Technical Authority |
| **06** | **The [Engine Name]: Algorithmic [Specific Logic] Moat.** | Proprietary "Black Box" |
| **07** | **Vertical Specialization: High-Deduction Professional Archetypes.**| Commercial Focus |
| **08** | **The Gatekeeper Flywheel: [Partner-Type] Distribution.** | Zero-CAC (CAL 10) |
| **09** | **Operational Resilience: Multi-Node [API/Infra] Balancing.** | Risk Mitigation/Scalability |
| **10** | **Strategic Crossroads: Evolution and Pivot Alternatives.** | Strategic Elasticity |
| **11** | **Phase 1 Validation: Core Strategic Hypotheses.** | H1/H2/H3 Stress Tests |
| **12** | **Execution Mandate: The 90-Day Liquidation Threshold.** | Deterministic Go-Signal |

**The Assertion-Header Mandate:** 
Slides must not use labels (e.g., "The Problem"). They must use **Narrative Assertions**—high-impact claims that form a continuous story when read in sequence.

### 3.2 Genesis Brief: Technical Evidence & CTQ Matrix

Every slide must include a **Hard Metric** or a **Specific Technical Logic**. Placeholder prose is strictly forbidden.

| Slide | Mandatory Content (The Evidence) | Strategic CTQ (The "So What?") |
| :--- | :--- | :--- |
| **01** | OSV + Core Metrics (Latency/Throughput) + **The Partnership Ask**. | Establishes conviction and identifies the specific "Expert Gap" we are filling. |
| **02** | **Quantified Fiscal/Time Leak** ($ or Hours). | Proves the venture is a "Painkiller," not a "Vitamin." |
| **03** | Physical failure point of incumbents or manual data-entry limits. | Validates the "Subjectivity Gap" we are closing. |
| **04** | **TOF Table:** Trigger, Orchestrator, Fulfillment. | Proves the technical mechanism is decoupled & scalable. |
| **05** | **Phone-to-Identity Ledger** logic (The Vault). | Defines the "Switching Cost" and Network Effect. |
| **06** | The "Black Box" logic (e.g., Catalog Mapper, SDK, Model). | Proves defensibility against generic API-wrappers. |
| **07** | Platform Marketplace Logos + **Free Gatekeeper Model**. | Proves the Zero-CAC distribution flywheel. |
| **08** | Specific Security/Infra Specs (HSM, KMS, Multi-Sig). | Establishes "World-Class" engineering authority. |
| **09** | 100% Channel-Native UI (WhatsApp/QR/Web-Hook). | Proves zero onboarding friction for the end-user. |
| **10** | **Cost vs. Price Table** (Unit Cost Floor vs. MSRP). | Proves margin safety and unit economic health. |
| **11** | Margin % Delta (MVP vs. Scale). | Demonstrates the "Step-Up" potential of the asset. |
| **12** | The **Deterministic "Go" Metric** (Success Threshold). | Provides a clear de-risking exit for the Genesis Ask. |

### 3.3 The "Venture Dossier" (Stage 03-04: Domination)
Designed for capital scale-up. (30 Slides).
*   *Note:* This arc expands the Genesis Brief with Cohort Analysis, TAM Arithmetic, and 36-Month Projections.

---

## 5. Mandatory Atomic Components (DossierEngineV2)
All showcases must utilize the technical classes in `DossierEngineV2.tsx` to ensure print-parity:
1.  **`.d-metric-unit`**: For the BOI Score, CAL Level, and Unit Costs.
2.  **`.d-card-accent`**: For the "Identity Vault" highlight.
3.  **`.d-step`**: For the "Handshake" loop sequence.
4.  **`.d-grid-2`**: For the "Cost vs. Price" floor comparison.

---

## 6. Definition of Done (DoD)
- [ ] Route `/showcase/[slug]` renders all 12 Slides.
- [ ] Data is pulled dynamically from the `ventures/` directory.
- [ ] PDF print view produces a clean 12-page brief.