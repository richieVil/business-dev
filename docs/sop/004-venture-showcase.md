# SOP: Venture Showcase Standards (004-venture-showcase)

## 1. Objective
To transform a high-fidelity Venture Dossier (4-file standard) into a "CFO-Ready" web presentation. The showcase presents the venture as a validated engineering project with a clear narrative arc.

---

## 2. Visual Standards (The Junior Legal Format)
To maintain consistency with the `DossierEngine.tsx`:
*   **Viewport:** Fixed 375px width (max) for mobile-first scrolling.
*   **Layout:** Snap-to-section (Slide) behavior.
*   **Typography:** Slate-900 primary, with Accent colors (e.g., amber-500) for labels and metrics.

---

## 3. The Tiered Narrative Arc (VML-Standard)

To prevent "Strategic Bloat," the showcase is right-sized to the venture's maturity.

### 3.1 The "Genesis Brief" (Stage 01-02: Inception)
Designed to recruit an **Industry Champion** and validate the "Mechanism." This is an expert-facing specification. (7 Slides).

| Slide | Narrative Assertion | Strategic Focus |
| :--- | :--- | :--- |
| **01** | **[Venture] is the mandatory infrastructure for [Market] [Pain].** | Thesis & Partnership Ask |
| **02** | **The "Homework Tax" creates a massive [Value] leak.** | The Post-Sale Friction |
| **03** | **Legacy portals fail to resolve the [Physical Gap].** | The Status Quo Failure |
| **04** | **The Identity Network turns every transaction into a moat.** | The Vault & Network Effects |
| **05** | **Zero-CAC growth is achieved via platform parasitism.** | Distribution (CAL 10) |
| **06** | **Bank-Grade security and unit margins ensure safety.** | Economics & Technical Authority |
| **07** | **Strategic validation is achieved at [Metric] in 90 days.** | The Go-Signal & Partnership Ask |

**The Assertion-Header Mandate:** 
Slides must not use labels (e.g., "The Problem"). They must use **Narrative Assertions**—high-impact claims that form a continuous story when read in sequence.

### 3.3 Genesis Brief: Technical Evidence & CTQ Matrix

Every slide must include a **Hard Metric** or a **Specific Technical Logic**. Placeholder prose is strictly forbidden.

| Slide | Mandatory Content (The Evidence) | Strategic CTQ (The "So What?") |
| :--- | :--- | :--- |
| **01** | OSV + BOI Score + **The Partnership Ask**. | Establishes conviction and identifies the specific "Expert Gap" we are filling. |
| **02** | **Quantified Fiscal/Time Leak** ($ or Hours). | Proves the venture is a "Painkiller," not a "Vitamin." |
| **03** | Physical failure point of incumbents (e.g., 105dB, Low-Lux). | Validates the "Subjectivity Gap" we are closing. |
| **04** | **TOF Table:** Trigger, Orchestrator, Fulfillment. | Proves the technical mechanism is decoupled & scalable. |
| **05** | **Phone-to-Identity Ledger** logic (The Vault). | Defines the "Switching Cost" and Network Effect. |
| **06** | The "Black Box" logic (e.g., Catalog Mapper, SDK, Model). | Proves defensibility against generic API-wrappers. |
| **07** | Platform Marketplace Logos + **Free Gatekeeper Model**. | Proves the Zero-CAC distribution flywheel. |
| **08** | Specific Security/Infra Specs (HSM, KMS, Multi-Sig). | Establishes "World-Class" engineering authority. |
| **09** | 100% Channel-Native UI (WhatsApp/QR/Web-Hook). | Proves zero onboarding friction for the end-user. |
| **10** | **Cost vs. Price Table** (Unit Cost Floor vs. MSRP). | Proves margin safety and unit economic health. |
| **11** | Margin % Delta (MVP vs. Scale). | Demonstrates the "Step-Up" potential of the asset. |
| **12** | The **Deterministic "Go" Metric** (Success Threshold). | Provides a clear de-risking exit for the Genesis Ask. |

### 3.2 The "Venture Dossier" (Stage 03-04: Domination)
Designed for capital scale-up. (30 Slides).
*   *Note:* This arc expands the Genesis Brief with Cohort Analysis, TAM Arithmetic, and 36-Month Projections.

---

## 4. Mandatory Atomic Components (DossierEngineV2)
All showcases must utilize the technical classes in `DossierEngineV2.tsx` to ensure print-parity:
1.  **`.d-metric-unit`**: For the BOI Score, CAL Level, and Unit Costs.
2.  **`.d-card-accent`**: For the "Identity Vault" highlight.
3.  **`.d-step`**: For the "Handshake" loop sequence.
4.  **`.d-grid-2`**: For the "Cost vs. Price" floor comparison.

---

## 4. Definition of Done (DoD)
- [ ] Route `/showcase/[slug]` renders all 6 Slides.
- [ ] Data is pulled dynamically from the `ventures/` directory.
- [ ] PDF print view produces a clean 6-page brief.