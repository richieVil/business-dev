# Strategic Dossier Execution Playbook: 6-Stage Atomic Pipeline

This document contains the sequential prompts required to build a "Junior Legal" Strategic Dossier. Execute these one by one in a new LLM conversation.

---



clear; Write-Host '```'; Get-ChildItem -Path . -Recurse -Depth 4 | Where-Object { $_.FullName -notmatch '\\(node_modules|\.git|\.next|dist)\\' } | Select-Object -ExpandProperty FullName; Write-Host '```'


clear; $path = "strategic-lab-architect/generated-plans"; Get-ChildItem -Path $path -File | ForEach-Object { $file = $_.FullName; Write-Host "--- START OF FILE: $file ---"; Write-Host '```'; Get-Content -LiteralPath $file -Encoding Utf8 | Out-String; Write-Host '```'; Write-Host "--- END OF FILE: $file ---"; Write-Host "" }



clear; $files = "app/components/DossierEngineV2.tsx"; foreach ($file in $files) { Write-Host "--- START OF FILE: $file ---"; Write-Host '```'; Get-Content -LiteralPath $file -Encoding Utf8 | Out-String; Write-Host '```'; Write-Host "--- END OF FILE: $file ---"; Write-Host "" }










# [STAGE 1]: INFRASTRUCTURE, PRINT ENGINE & SEMANTIC SKINNING

"You are the **Strategic Lab Architect**. We are initializing the implementation of a High-Stakes Technical Dossier for: **[INSERT VENTURE NAME HERE]**. 

## 1. IDENTITY & SEMANTIC SKINNING (Section 1, 5, 16)
Analyze the Venture DNA and select the **Identity Pattern**. 
- **Contrast Mandate:** You must ensure a **7:1 ratio** for `ink` vs `parchment`.
- **The "Muted" Floor:** Your `muted` color (used for secondary text) MUST satisfy a **4.5:1 ratio** against the background. 
    - *Dark Mode Rule:* Do not use dark greys (#666-#888). Use Silver/Zinc (#A3A3A3 or lighter).
    - *Light Mode Rule:* Do not use light greys (#AAA). Use Slate/Charcoal (#64748B or darker).
- **THE SCANNER (Tech-Autonomous):** #0A0A0A (Parchment) | #FFFFFF (Ink) | #DC2626 (Accent). [Monospace focus].
- **THE LEDGER (Asset-Light):** #F5F5F0 (Parchment) | #164E63 (Ink) | #0891B2 (Accent). [Serif focus].
- **THE BLUEPRINT (Logistics/Owned):** #FFFFFF (Parchment) | #111827 (Ink) | #2563EB (Accent). [Sans focus].
- **THE LABORATORY (R&D/Bio):** #064E3B (Parchment) | #ECFDF5 (Ink) | #10B981 (Accent).
- **THE FORTRESS (Security/Defense):** #1F2937 (Parchment) | #F9FAFB (Ink) | #6B7280 (Accent).
- **CUSTOM:** Propose a hex triplet if the DNA requires a unique signature.

## 2. THE UI STRESS TEST (NEW)
- Slide ID 00 must be a **UI Stress Test Slide**. 
- It must render every atomic class (`.d-card`, `.d-card-dark`, `.d-card-accent`, `.d-grid-2`) in a single view to verify contrast and font-size floor before we begin the content sprints.
- **The 12px Floor:** Every text element must have a minimum `font-size: 12px`. You are strictly forbidden from using smaller text.

## 3. METADATA SHADOW (Section 9.A)
Generate `app/[venture-id]/layout.tsx` (Server Component). Define the `Metadata` object:
- Title: '[Venture Name] - Strategic Dossier'
- Description: 'Technical Blueprint and Commercial Logic for Project ID: [ID].'

## 4. VIEWPORT GOVERNANCE (Section 2, 3, 12)
Target Hardware: **iPhone SE (375px x 667px)**. 
- **The Master Cage:** Initialize a container with `max-w-[375px]`, `mx-auto`, `scroll-snap-type: y mandatory`, and `overflow-y: scroll`.
- **The 600px Rule:** Every slide must utilize `min-height: calc(100vh - 53px)`. You are strictly forbidden from exceeding **600px of vertical content height** per slide to ensure zero internal scrolling.
- **Header Offset:** The content must be awareness-compatible with the 53px fixed header.

## 5. THE TECHNICAL SHELL & PRINT ENGINE (CRITICAL)
Generate `app/[venture-id]/page.tsx` (Client Component). 
- **CSS Injection:** You MUST inject a `<style>` block at the top of the component containing the **Junior Legal (5"x8")** Digital PDF Engine:
    ```css
    @media print {
        @page { size: 5in 8in; margin: 0; }
        body { -webkit-print-color-adjust: exact !important; }
        .fixed-header { display: none !important; }
        .master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; }
        .slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; }
    }
    ```
- Initialize `DossierEngineV2` using the `theme` object.
- **The Slide Matrix:** Define a `slides` constant array with IDs 1 through 30.
- Each slide object must include: `id`, `title`, `label`, and a placeholder `render: (theme) => <></>`.

**Constraint:** Output ONLY the code for `layout.tsx` and the `page.tsx` skeleton. Do not implement slide content yet. Standing by for infrastructure verification."






---





# [STAGE 2]: DATA HARVESTING, ARITHMETIC AUDIT & STRATEGIC FILTERING

"Infrastructure verified. We are now executing the **Pre-Code Data Harvest** (Section 17). Your goal is to extract the 'Hard Truths' from the Master Technical Business Plan (MTBP) to ensure every slide projects Technical Authority.

## 1. THE METRIC VAULT (NEW)
Analyze the MTBP and generate a JSON-style 'Metric Vault'. 
- Every slide ID must be assigned at least one **Hard Metric**. 
- If a slide lacks a metric, flag it for deletion or merge.
- **Currency Mandate:** All monetary figures MUST include ISO 4217 codes (e.g., USD, MXN). Do not use '$' in isolation.
- **Decimal Precision:** Use exactly two decimals for unit costs/rates; zero decimals for large aggregate totals.

## 2. INCUMBENT FAILURE AUDIT (NEW)
- Define the 'Physical Failure Point' for existing solutions (e.g., Why exactly does a human or a $20k camera fail in 105dB?). 
- Map these failures directly to the technical specifications for the USP slides.

## 3. ENVIRONMENTAL GRIT MAPPING (Section 7, 12, 17)
Itemize the specific 'Environmental Grit' (Acoustic saturation, oil-mist, 105dB noise, legacy infrastructure, Laredo lighting, etc.) and map them specifically to the **Technical USP (Slides 6 & 7)**. Define the technical solution for each grit factor.

## 4. BOTTOM-UP MARKET ARITHMETIC (Section 17.A)
Provide the **Units-to-USD Arithmetic** for the TAM/SAM/SOM analysis. 
- *The Logic:* [Total Units] * [Annual Yield per Unit] = [Total Market Value].
- *Constraint:* You are strictly forbidden from providing generic top-down industry percentages. Show the raw math.

## 5. THE STRATEGIC FILTER (Section 13)
For every primary metric identified, define its **Strategic Narrative Hierarchy**:
1. **Metric/Fact:** (The raw number).
2. **Strategic Value:** (Does this identify a Moat, a Risk, or an Opportunity?).
3. **Action/Risk:** (What must the stakeholder do or fear because of this number?).

**Constraint:** Output ONLY the Mapping Table, the Grit Specifications, and the Market Arithmetic. You are strictly forbidden from generating React code or component logic in this turn. Standing by for verification of the harvest."





---





# [STAGE 3]: CONTENT SPRINT A - THE CATALYST (SLIDES 1-10)

"Data Harvest verified. We are now initializing Stage 3: Content Implementation for **Slides 1 through 10**. Your goal is to project Technical Authority and Radical Transparency.

## 1. VERTICAL GOVERNANCE & VIEWPORT (Section 3 & 12)
Target Device: **iPhone SE (375x667)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide. 
- **Character Limits:** For `.d-grid-2` cards, you are limited to **15 words per card**. Prioritize nouns and metrics. 
- **Theme Injection:** Ensure every `render` wrapper enforces the theme ink color: `<div className="d-content" style={{ color: theme.ink }}>`.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
You are strictly forbidden from using custom CSS or Tailwind utility classes (`text-*`, `p-*`, `m-*`, `flex-*`) inside the `render` functions. You must exclusively use the following Atomic Classes:
- `.d-content`: Root wrapper.
- `.d-grid-2`: 50/50 metric/card split.
- `.d-card` | `.d-card-accent` | `.d-card-dark`: Data containers.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item` | `.d-dot`.

## 3. NARRATIVE HIERARCHY (Section 6 & 13)
Implement the `render` functions for the following arc:
- **Slides 1-2 [Executive Briefing]:** The Thesis Central and 'Why Now?' Catalyst.
- **Slides 3-5 [The Friction]:** The 'Invisible Tax' (use `.d-metric-unit` for the USD COI) and the 'Status Quo Failure'.
- **Slides 6-7 [Technical USP]:** 'The Engine' and the **Brutalista Benchmark Table**. 
    - *Requirement:* Explicitly include the 'Environmental Grit' solutions mapped in Stage 2.
- **Slides 8-10 [Strategic Positioning]:** The 'Unit of Value' definition, 'Substitution Audit', and the 'Trojan Horse' Entry Maneuver.

## 4. DATA INTEGRITY (Section 10)
- Ensure 100% adherence to the **ISO 4217 Currency Mandate**.
- **Metric Vault Audit:** Every slide MUST pull directly from the **Metric Vault** established in Stage 2. No invented or 'placeholder' data.

**Constraint:** Output ONLY the `render` functions for Slides 1-10. No conversational fluff. Standing by for verification."






---






# [STAGE 4]: CONTENT SPRINT B - THE MACHINE (SLIDES 11-20)

"Content Sprint A verified. We are now initializing Stage 4: Implementation of **Slides 11 through 20**. This arc must define the 'Machine's' operational dominance and long-term defensibility.

## 1. VERTICAL GOVERNANCE & VIEWPORT (Section 3 & 12)
Target Device: **iPhone SE (375x667)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide.
- **Complexity Management:** For dense slides (Matrix/Architecture), use `.d-grid-2` or minimalist bullet lists. If the data density threatens the 600px limit, prioritize the 'Golden Number' over descriptive prose.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
Strict Enforcement: No custom CSS. No Tailwind color/spacing utilities. Use only:
- `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item`, `.d-dot`.

## 3. NARRATIVE SEQUENCE & LOGIC (Section 6 & 11)
Implement the `render` functions for the following:
- **Slides 11-12 [Market Intelligence]:** Bottom-up TAM/SAM/SOM (using the arithmetic from Stage 2) and 'Grit Corridors' (Geographic Clusters).
- **Slides 13-14 [The Golden Number]:** The Primary Survival Metric (e.g., Node Coverage Velocity) and the **90-Day Survival Thresholds** (Elite/Healthy/Death zones).
- **Slides 15-16 [Competitor Matrix]:** A brutal 'Us vs. Legacy vs. Generic SaaS' comparison. 
    - *Requirement:* Use `.d-grid-2` to highlight the **Technical Specification Lock** that incumbents cannot replicate.
- **Slides 17-19 [Architecture & IP]:** Technical Stack (Wedge vs. Dominance), Asset Genesis (The IP Manual), and the **Fulfillment Chain**.
    - *Requirement:* Slide 19 must visualize the step-by-step movement from 'Raw Input' to 'Verified Value'.
- **Slide 20 [Operational Governance]:** Shadow Oversight and Multi-Sig HITL Protocols (Section 13 of MTBP).

## 4. LINGUISTIC & DATA INTEGRITY (Section 10)
- **No Acronyms:** Use descriptive terms (e.g., 'Manual Intervention Rate') instead of internal shorthand.
- **Currency/Decimals:** 100% adherence to ISO 4217 and Stage 2 Decimal Precision.

**Constraint:** Output ONLY the `render` functions for Slides 11-20. No conversational fluff. Standing by for verification."







---







# [STAGE 5]: CONTENT SPRINT C - THE MANDATE (SLIDES 21-30)

"Content Sprint B verified. We are now initializing Stage 5: Implementation of **Slides 21 through 30**. This final arc must define the commercial viability, the funding requirement, and the immediate path to execution.

## 1. VERTICAL GOVERNANCE & VIEWPORT (Section 3 & 12)
Target Device: **iPhone SE (375px x 667px)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide. 
- **Financial Density:** For complex financial slides (26-27), use `.d-grid-2` to keep the 'Golden Numbers' visible without requiring a scroll.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
Strict Enforcement: No custom CSS. No Tailwind utilities. Use ONLY:
- `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item`, `.d-dot`.

## 3. NARRATIVE SEQUENCE & COMMERCIAL LOGIC (Section 6 & 10)
Implement the `render` functions for the following:
- **Slide 21 [Validation Roadmap]:** The Scientific R&D Plan. Use `.d-list-item` to map the (Hypothesis) -> (Stress Test) -> (Pass Metric) logic from the MTBP.
- **Slide 22 [Founder DNA]:** The 3 Elite Technical/Domain Specifications (Superpowers).
- **Slides 23-25 [Commercial Logic]:** Node-Based Pricing, Unit Economics (LTV/CAC), and **Allocation Meritocracy** (where the next dollar of capital goes).
- **Slides 26-27 [Financial Physics]:** The '18-Month Cashflow' vs. 'The Float'. 
    - *Requirement:* Use `.d-grid-2` to contrast the Cash-on-Hand against the **Net-120 Payment Term** reality. Use `.d-card-accent` for the 'Survival Bridge' (Factoring/Credit) logic.
- **Slide 28 [Invisible Economics]:** Quantify the FX Arbitrage, Tax Credits (e.g., IRA/CBAM), or Data Salvage value.
- **Slide 29 [The Funding Mandate]:** **The "Ask"**. 
    - *Requirement:* Use `.d-card-dark` to house the Golden Number (Total USD/MXN required). You must explicitly mention the **EBITDA Multiplier** effect (Section 4.4 of MTBP).
- **Slide 30 [Strategic Mandate]:** The Immediate **90-Day Milestone**. Define the deterministic 'Go' signal.

## 4. LINGUISTIC & DATA INTEGRITY (Section 10 & 13)
- **Currency Mandate:** Every financial figure MUST include the ISO 4217 code. 
- **Narrative Hierarchy:** (1) Metric -> (2) Strategic Value -> (3) Action/Risk.
- **No Acronyms:** Replace all internal shorthand with descriptive, plain-English value terms.

**Constraint:** Output ONLY the `render` functions for Slides 21-30. No conversational fluff. Standing by for final content verification."
















# Strategic Dossier Portfolio: Technical Manifest v2.1

## 1. Executive Philosophy: "The Technical Intelligence Report" v3.0
These dossiers are not websites; they are high-stakes digital assets for investors and stakeholders. The primary goal is to project **Radical Transparency** and **Technical Authority**.
*   **Narrative Tone:** Minimalist prose. Every slide must support a data point.
*   **The "Semantic Skinning" Mandate:** The visual identity must reflect the **Business DNA**. 
    *   **THE SCANNER (Tech-Autonomous/Venture):** #0A0A0A background, #DC2626 accent. High density, monospace focus.
    *   **THE LEDGER (Asset-Light/Bootstrapped):** #F5F5F0 parchment, #164E63 teal/navy. More whitespace, serif focus.
    *   **THE BLUEPRINT (Owned/Logistics):** #FFFFFF background, #2563EB blue. Grid-lines and heavy table usage.
*   **Metric-to-Ink Ratio:** If a slide doesn't have a metric (KPI, dollar amount, or technical spec), it is filler and should be removed.

## 2. Global Architecture: The Bulletproof Cage
To ensure zero style dropouts across Next.js sub-routes and reliable PDF generation, we use a single-file "Technical Shell" pattern.
*   **The Route Infrastructure:** Every dossier must consist of two files in its route folder:
    1.  `page.tsx`: The Technical Shell (Interactive Content).
    2.  `layout.tsx`: The Metadata Shadow (Server-side SEO and tab branding).
*   **Metadata Shadow Protocol:** The `layout.tsx` must be a server component that defines the `Metadata` object using the venture's branding (e.g., "C-TPAT Sentinel - Strategic Dossier").
*   **The Master Cage:** A container with `margin-top: 53px` (to offset the fixed header) and `height: calc(100vh - 53px)`.
*   **The Internal Style Engine:** CSS should be defined within a `<style>` block in the component to guarantee the environment is identical across all devices and print engines.
*   **Portrait-Only Constraint:** A hard `max-w-[375px]` and `mx-auto` rule on the main container to cage the viewport.

## 3. The Portrait-First Viewport Standard
*   **Design Boundary:** 375px (iPhone SE) is the absolute baseline. 
*   **Zero-Bleed Policy:** `overflow-x: hidden` on the root. Side-scrolling is a failure of delivery.
*   **Snap Governance:** Use `scroll-snap-stop: always` for critical financial/technical slides to prevent stakeholders from skipping key data via "flick-scrolling."

## 4. The "Junior Legal" Digital PDF Engine
The PDF is designed for **Digital Persistence**, not for paper. It is optimized for viewing on a phone screen via the Files/Books app.
*   **Dimensions:** 5.0" x 8.0" (Junior Legal).
*   **Implementation:** Every dossier must include the following print-engine block:

	@media print {
		@page { size: 5in 8in; margin: 0; }
		body { -webkit-print-color-adjust: exact !important; }
		.fixed-header { display: none !important; }
		.master-cage { margin: 0 !important; display: block !important; overflow: visible !important; height: auto !important; }
		.slide { display: flex !important; height: 8in !important; width: 5in !important; break-after: page !important; }
	}

## 5. Visual Identity & Skinning Protocol
### A. The Three-Color Palette
1.  **Context (Material):** Background mimicking a surface (e.g., #F2EFE9 Parchment, #0A0A0A Charcoal).
2.  **The Ink:** High-contrast text color (min 7:1 ratio).
3.  **The High-Energy Accent:** One color reserved strictly for the "Golden Number" (e.g., #dc2626 Red).

### B. Containment Logic (The Data Card)
Technical data must be housed in containers to mimic a physical dossier:
*   **The Audit Card:** Rounded corners (`border-radius: 12px`), a clear border, and a shadow to distinguish data from background.
*   **Typography:** Bold, Italic Serifs for headlines; Monospace for numbers and technical specs.

## 6. Standard Narrative Sequence (The 30-Slide Matrix)
Every dossier must map the **Tasks** from Sprints 1-4 into a 30-slide arc.

*   **S1: The Catalyst (Slides 1-10: The Problem & Solution)**
    *   Slides 1-2: **Executive Briefing.** Thesis Central (Industrial Cortex) and "Why Now?" (Silver Tsunami).
    *   Slides 3-5: **The Friction.** The "Invisible Tax" (Ghost Wages), COI ($615k Leak), and Status Quo Failure (Digital Graveyards).
    *   Slides 6-7: **Technical USP.** "The Engine" (Action Serialization) and **Brutalista Parity Table** (90dB Noise/Low Lux specs).
    *   Slides 8-10: **Strategic Positioning.** "Verified Process Minute" definition, Substitution Audit (Bounties), and Entry Maneuver (Trojan Horse).
*   **S2: The Intelligence & Machine (Slides 11-20)**
    *   Slides 11-12: **Market Intelligence.** Bottom-up TAM/SAM/SOM and "Grit Corridors" (Geographic Clusters).
    *   Slides 13-14: **The Golden Number.** Node Coverage Velocity (NCV) and 90-Day Survival Thresholds.
    *   Slides 15-16: **Competitor Matrix.** Manual vs. Generic SaaS vs. BI-0003.
    *   Slides 17-19: **Architecture.** Technical Stack (Wedge vs. Dominance), Asset Genesis (The IP Manual), and Fulfillment Chain.
    *   Slide 20: **Operational Governance.** Shadow Oversight and Multi-Sig HITL Protocols.
*   **S3: The Physics & Mandate (Slides 21-30)**
    *   Slide 21: **Validation Roadmap.** Scientific R&D Plan (Hypothesis -> Stress Test).
    *   Slide 22: **Founder DNA.** The 3 Elite Technical/Domain Specifications.
    *   Slides 23-25: **Commercial Logic.** Node-Based Pricing, Unit Economics (LTV/CAC 89x), and Allocation Meritocracy.
    *   Slides 26-27: **Financial Physics.** 18-Month Cashflow and the "Valley of Death" Bridge (Factoring).
    *   Slide 28: **Invisible Economics.** FX Arbitrage and Data Salvage.
    *   Slide 29: **The Funding Mandate.** The $2.5M Ask and the EBITDA Multiplier.
    *   Slide 30: **Strategic Mandate.** The Immediate 90-Day Milestone.


## 7. Pre-Flight Testing Checklist
1.  [ ] **DevTools:** Set to iPhone SE (375x667). 
2.  [ ] **Bleed Check:** Ensure zero horizontal scrollbar.
3.  [ ] **Snap Check:** Ensure `snap-stop: always` works on technical slides.
4.  [ ] **PDF Check:** Open Print Preview; confirm 5"x8" pages and that text doesn't cut off.

## 8. Standardized CSS Classes (The Verified Skeleton)
*   `.master-cage`: Handles the scroll-snap and mobile width boundary.
*   `.fixed-header`: Standardized 53px height with high-contrast branding.
*   `.slide`: Standardized padding and `100vh - 53px` height logic.
*   `.heading-hero`: 44px font-black italic, uppercase.

## 9. Reference Technical Skeleton

### A. layout.tsx (The Metadata Shadow)
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venture Name - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: [ID].',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### B. page.tsx (The Technical Shell)
```typescript
'use client';
import React from 'react';
import DossierEngineV2 from "@/app/components/DossierEngineV2";

export default function TechnicalDossier() {
    // Define Slides Array...
    return (
        <DossierEngineV2 
            slides={slides} 
            branding={{...}} 
            contact={{...}} 
            theme={{...}} 
        />
    );
}
```

## 10. Technical Formatting & Localization

*   **Currency Mandate:** All monetary figures must include an explicit ISO 4217 currency code (e.g., `USD`, `MXN`). Never use the `$` symbol in isolation.
*   **Executive Clarity Mandate:** You are strictly forbidden from using internal venture acronyms (VPT, SAR, NCV) in the code. You must use descriptive terms (e.g., "Verified Transits," "Manual Intervention Rate").
*   **Language Protocol:** The Project Lead must explicitly define the primary output language (e.g., English, Spanish) during Phase 1 of the development cycle.
*   **Decimal Precision:** Financial projections should use a maximum of two decimal places for unit costs and zero decimals for large aggregate totals.

## 11. The Dynamic Content Engine (DCE)

To ensure the dossier remains maintainable and prevents "Layout Drift" across 20+ slides, we use a centralized metadata loop with conditional injection.

### A. The Loop Strategy
Define a `slides` constant array containing IDs, Titles, and Labels. Render the `.master-cage` using a `.map()` function.

### B. Conditional Injection Pattern
Inside the loop, use a ternary or switch statement based on `slide.id` to inject specific technical data cards.

## 12. Content Density & Vertical Governance

To maintain "Technical Authority" and ensure perfect PDF rendering, we adhere to the **Rule of the Single Viewport**:

*   **No Internal Scrolling:** A slide must NEVER require internal scrolling.
*   **The Safe Zone:** All critical data cards and Golden Numbers must reside within the first 600px of vertical space.
*   **Flexibility over Constraint:** Use `min-height: calc(100vh - 53px)` instead of a fixed `height`.

## 13. The "Audience Conscience" Mandate (Strategic Storytelling)

Technical data is a tool, not the goal. Every slide must function as a piece of **Strategic Intelligence**. 

*   **The Strategic Filter:** Avoid "Standard vs. Us" comparisons on every detail. Focus only on what creates a **Moat**, identifies a **Risk**, or unlocks an **Opportunity**.
*   **The Narrative Hierarchy:** (1) Metric/Fact. (2) Strategic Value. (3) Action/Risk.
*   **The "Executive Summary" Tone:** Use minimalist, high-impact language.

## 14. Versioned Engines: DossierEngineV2 (The 2026 Standard)
Post-February 2026 projects should utilize the `DossierEngineV2.tsx` component for enhanced governance.
*   **Automatic Re-indexing:** The engine generates `S01`, `S02`, etc., and the `X / Total` counter dynamically from the input array.
*   **Sticky Vertical Footer:** Every slide uses a Flexbox shell with `margin-top: auto` to lock the footer to the viewport floor.
*   **Print-Aware Contact Logic:** The engine automatically toggles between interactive links (WhatsApp/Email) on the browser and raw text/numbers in the PDF print engine.
*   **Theme Injection:** Styles (colors/fonts) are passed via a theme prop to ensure the engine remains skinable without modifying core logic.

## 15. The Atomic Technical Framework (Repeatability API)
To prevent CSS leakage and theme failures, all `render()` functions in a dossier page must exclusively use these pre-defined classes from `DossierEngineV2.tsx`:

1.  **Layouts:**
    *   `.d-content`: The root wrapper for the `render` function. Forces `color: var(--ink)`.
    *   `.d-grid-2`: Standard 50/50 split for metrics or cards.
2.  **Containers:**
    *   `.d-card`: Semi-transparent glass container for data.
    *   `.d-card-accent`: Container with a 4px left-border of `var(--accent)`.
    *   `.d-card-dark`: Inverted container using `var(--ink)` as background.
        *   *Note:* `.d-metric-unit` inside `.d-card-dark` automatically inverts to `var(--parchment)`.
3.  **Typography & Metrics:**
    *   `.d-para`: Standard technical prose. Use `<strong>` for high-contrast emphasis.
    *   `.d-metric-unit`: Large, bold monospace for primary numbers (e.g., $1.2M).
    *   `.d-metric-label`: Small, muted uppercase label for metrics.
    *   `.d-tag-mono`: Accent-colored labels for tags (e.g., PHASE I).
4.  **Elements:**
    *   `.d-list-item`: Flex container for bullet points.
    *   `.d-dot`: The standard `var(--accent)` colored bullet.

**Constraint:** Avoid Tailwind color utilities (e.g., `text-white`) inside `render()`. Rely on the Atomic Classes to bridge the theme variables.

## 16. The Theme Logic (The "Contrast Rule")
Every new page must define its own `theme` object in the `DossierEngineV2` prop. The AI Developer must verify:
1.  **Ink vs. Parchment:** `var(--ink)` must have a contrast ratio of at least 7:1 against `var(--parchment)`.
2.  **Noir Override:** If `parchment` is dark (e.g., #0A0A0A), `ink` must be light (e.g., #FFFFFF).
3.  **Accent Intent:** `var(--accent)` is reserved strictly for Golden Numbers, Bullet Dots, and Primary Callouts.

## 17. The Pre-Code Protocol: Data Harvesting
Before writing a single line of React code, the AI Developer **MUST** perform a "Data Harvest" from the Sprint logs.
*   **Requirement:** Output a table mapping **Hard Metrics** (e.g., Setup Velocity: 14 Days, CAC: $8k, TAM: $3.5B) to their specific Slides.
*   **Grit Mapping:** The harvest MUST include a mapping of "Environmental Grit" (weather/infrastructure/lighting) to the Technical USP slides.
*   **17.A The Bottom-Up Constraint:** Market analysis slides (TAM/SAM/SOM) must be engineered using **Units-to-USD Arithmetic**. (1) Define Total Units. (2) Apply Unit Yield. (3) Generate Total Market Value. Generic top-down industry stats are classified as "Fluff" and must be rejected.
*   **Audit Check:** If a slide in the `page.tsx` contains only prose and no harvested metric, it must be flagged for redesign.

## 18. Atomic Strict-Mode (Governance)
To ensure the PDF Print Engine does not break, the AI Developer is **forbidden** from using custom CSS or Tailwind spacing inside the `render()` function.
*   **Allowed:** `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`, `.d-para`, `.d-metric-unit`, `.d-metric-label`, `.d-tag-mono`, `.d-list-item`, `.d-dot`.
*   **Forbidden:** `mt-4`, `p-2`, `text-red-500`, `flex-row`.
*   **Result:** Consistency in layout and perfect mobile/print rendering across 100% of dossiers.



