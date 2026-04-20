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

## 3. The Narrative Arc (Mandatory Slides)

### 3.1 Slide 1: Mission Control (The Hook)
*   **Source:** `01-strategy-vpc.md`
*   **Visuals:** Codename (Large Italic), OSV, and the BOI Matrix Radar (Scores 1-5).

### 3.2 Slide 2: Anatomy of Pain (The Friction)
*   **Source:** `01-strategy-vpc.md`
*   **Visuals:** "Micro-Moment of Pain" narrative block followed by a high-contrast Pain/Gain comparison.

### 3.3 Slide 3: The Mechanism (TOF Flow)
*   **Source:** `02-mechanism-vmc.md`
*   **Visuals:** The Trigger -> Orchestrator -> Fulfillment diagram.
*   **Key Highlight:** Must visually isolate the "Identity Vault" as the technical moat.

### 3.4 Slide 4: Growth Physics (The Flywheel)
*   **Source:** `03-business-bmc.md`
*   **Visuals:** CAL Level (1-10) badge and the "Influencer Gatekeeper" strategy (Accountant-led distribution).

### 3.5 Slide 5: Execution Economics (The Yield)
*   **Source:** `04-meta-analysis.md`
*   **Visuals:** ROIE Index (1-5) and a "Cost vs. Price" floor table ($0.43 vs $15.00).

### 3.6 Slide 6: Risk Shield (The Pre-Mortem)
*   **Source:** `04-meta-analysis.md`
*   **Visuals:** Top 3 Strategic Risks and their technical mitigations.

---

## 4. Definition of Done (DoD)
- [ ] Route `/showcase/[slug]` renders all 6 Slides.
- [ ] Data is pulled dynamically from the `ventures/` directory.
- [ ] PDF print view produces a clean 6-page brief.