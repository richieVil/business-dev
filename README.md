


clear; Write-Host '```'; Get-ChildItem -Path . -Recurse -Depth 4 | Where-Object { $_.FullName -notmatch '\\(node_modules|\.git|\.next|dist)\\' } | Select-Object -ExpandProperty FullName; Write-Host '```'


clear; $path = "strategic-lab-architect/generated-plans"; Get-ChildItem -Path $path -File | ForEach-Object { $file = $_.FullName; Write-Host "--- START OF FILE: $file ---"; Write-Host '```'; Get-Content -LiteralPath $file -Encoding Utf8 | Out-String; Write-Host '```'; Write-Host "--- END OF FILE: $file ---"; Write-Host "" }



clear; $files = "app/components/DossierEngineV2.tsx"; foreach ($file in $files) { Write-Host "--- START OF FILE: $file ---"; Write-Host '```'; Get-Content -LiteralPath $file -Encoding Utf8 | Out-String; Write-Host '```'; Write-Host "--- END OF FILE: $file ---"; Write-Host "" }






# Strategic Dossier Portfolio: Technical Manifest v2.1 (system instructions)

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















---










# Strategic Dossier Execution Playbook: 6-Stage Atomic Pipeline

This document contains the sequential prompts required to build a "Junior Legal" Strategic Dossier. Execute these one by one in a new LLM conversation.

(one stage per prompt/response)
---







# [STAGE 1]: INFRASTRUCTURE, PRINT ENGINE & SEMANTIC SKINNING

"You are the **Strategic Lab Architect**. We are initializing the implementation of a High-Stakes Technical Dossier for: **[INSERT VENTURE NAME HERE]**. 

## 1. IDENTITY & SEMANTIC SKINNING
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
- **Contrast Integrity Mandate (CRITICAL):** You must ensure that text within high-contrast containers (`.d-card-dark`) is explicitly verified for readability. You are strictly forbidden from using `muted` grays inside dark cards. They must inherit the `parchment` color.

## 2. THE UI STRESS TEST (NEW)
- Slide ID 00 must be a **UI Stress Test Slide**. 
- It must render every atomic class (`.d-card`, `.d-card-dark`, `.d-card-accent`, `.d-grid-2`) in a single view to verify contrast and font-size floor before we begin the content sprints.
- **The 12px Floor:** Every text element must have a minimum `font-size: 12px`. You are strictly forbidden from using smaller text.

## 3. METADATA SHADOW
Generate `app/[venture-id]/layout.tsx` (Server Component). Define the `Metadata` object:
- Title: '[Venture Name] - Strategic Dossier'
- Description: 'Technical Blueprint and Commercial Logic for Project ID: [ID].'

## 4. VIEWPORT GOVERNANCE
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

## **6. CONTACT & BRANDING INTEGRITY**
- **Phone Format:** Must use the exact format `"+[CountryCode] [Area] [Number] [Number]"`. Keep the number from the Dossier Engine (+52 614 546 3178).
- **WhatsApp URL Mandate:** You must generate a URL in the format `https://wa.me/[CountryCode][Number]?text=[EncodedMessage]`.
- **Preset Message:** The message must be: `"I read the technical dossier for [Venture Name] and am interested in discussing the next steps."`
- **Email:** keep the email from the Dossier Engine (quadraticldm@gmail.com)
- **Layout Sync:** The `layout.tsx` title must match the venture name provided.



---





# [STAGE 2]: DATA HARVESTING, ARITHMETIC AUDIT & STRATEGIC FILTERING

"Infrastructure verified. We are now executing the **Pre-Code Data Harvest**. Your goal is to extract the 'Hard Truths' from the Master Technical Business Plan (MTBP) to ensure every slide projects Technical Authority.

## 1. THE METRIC & PERSONA VAULT (NEW)
Analyze the MTBP and generate a JSON-style 'Metric Vault'. 
- Every slide ID must be assigned at least one **Hard Metric**. 
- **Persona Harvest:** Extract 3-5 high-impact "Pain Quotes" from the Task 1.0 (VoC Audit) to be used as Social Validation.
- If a slide lacks a metric, flag it for deletion or merge.
- **Currency Mandate:** All monetary figures MUST include ISO 4217 codes (e.g., USD, MXN). Do not use '$' in isolation.
- **Decimal Precision:** Use exactly two decimals for unit costs/rates; zero decimals for large aggregate totals.

## 2. INCUMBENT FAILURE AUDIT (NEW)
- Define the 'Physical Failure Point' for existing solutions (e.g., Why exactly does a human or a $20k camera fail in 105dB?). 
- Map these failures directly to the technical specifications for the USP slides.

## 3. ENVIRONMENTAL GRIT MAPPING
Itemize the specific 'Environmental Grit' (Acoustic saturation, oil-mist, 105dB noise, legacy infrastructure, Laredo lighting, etc.) and map them specifically to the **Technical USP (Slides 6 & 7)**. Define the technical solution for each grit factor.

## 4. BOTTOM-UP MARKET ARITHMETIC
Provide the **Units-to-USD Arithmetic** for the TAM/SAM/SOM analysis. 

- **The Calculation Mandate:** You must provide the raw arithmetic strings for each level.
    - *Example (Logistics):* [300 Nodes] * [500 SKUs] * [4 Refreshes] * [$45 Fee] = $27M.
    - *Example (FinTech):* [1k Entities] * [12 Reports/yr] * [$2,500 Audit Fee] = $30M.
- **The Yield Anchor:** Define the 'Unit of Yield' (e.g., Per SKU, Per Transaction, Per Node). 
- **Constraint:** You are strictly forbidden from providing generic top-down industry percentages (e.g., '1% of a $50B market'). You must engineer the value from the bottom-up based on the Entry Phase pricing.

## 5. THE STRATEGIC FILTER
For every primary metric identified, define its **Strategic Narrative Hierarchy**:
1. **Metric/Fact:** (The raw number).
2. **Strategic Value:** (Does this identify a Moat, a Risk, or an Opportunity?).
3. **Action/Risk:** (What must the stakeholder do or fear because of this number?).

**Constraint:** Output ONLY the Mapping Table, the Grit Specifications, and the Market Arithmetic. You are strictly forbidden from generating React code or component logic in this turn. Standing by for verification of the harvest."

## **6. SCALING & ABBREVIATION MANDATE**
- **The 1M Rule:** You are strictly forbidden from writing out six zeros in slide content. Any value $\ge$ 1,000,000 must be rendered as `"$[#] M [CURRENCY]"` (e.g., $2.5 M USD).
- **The 1k Rule:** Any value between 1,000 and 999,999 must be rendered as `"$[#] k [CURRENCY]"` (e.g., $185 k USD).
- **Math preservation:** Only the *displayed* metric is abbreviated. The raw math in brackets (e.g., `[500 * $45]`) must remain unscaled to preserve the audit trail.




---




#### [STAGE 3]: CONTENT SPRINT 1 – THE THESIS (SLIDES 1-3)
"Implement the **render** functions for **Slides 1, 2, and 3**.

**SHARED GOVERNANCE MANDATE:**
1. **Vertical Governance:** You are strictly forbidden from exceeding **600px of vertical content height**. Minimum font size: **12px**.
2. **Atomic Strict-Mode:** You are forbidden from using custom CSS or Tailwind spacing/color utilities. Use ONLY: `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`, `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`, `.d-list-item`, `.d-dot`.
3. **Data Integrity:** Adhere to the **ISO 4217 Currency Mandate** (e.g., USD, MXN). Use NO internal shorthand acronyms. Pull data directly from the **Metric Vault**.
4. **Theme Injection:** Ensure every render wrapper enforces the theme ink color: `<div className="d-content" style={{ color: theme.ink }}>`.

**SLIDE CONTENT:**
- **Slides 1-2 [Executive Briefing]:** Thesis Central, the 'Why Now?' Catalyst (Industrial/Regulatory), and the Intention.
- **Slide 3 [The Invisible Tax]:** Quantify the specific fiscal leak (e.g., $185k Annual Waste) solved by Phase 1."

---

#### [STAGE 4]: CONTENT SPRINT 2 – FRICTION & INGESTION (SLIDES 4-6)
"Implement the **render** functions for **Slides 4, 5, and 6**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 4 [Status Quo Failure]:** Detail the 'Sampling Blind Spot' or the 'Subjectivity Gap' of the manual alternative.
- **Slide 5 [Behavioral Friction]:** Explain why managers resist switching (e.g., Integration Debt or Liability Fear). 
- **Slide 6 [Technical USP: The Ingestion Flow]:** Detail the hardware/software symmetry at the primary nodes.
    - *Requirement:* Use `.d-grid-2` to contrast the **HQ Node** (e.g., Portal upload) vs. the **Grit Node** (e.g., Mobile Web-Bot/Smartphone photo/Sensor data)."

---

#### [STAGE 5]: CONTENT SPRINT 3 – PERFORMANCE & LOGIC (SLIDES 7-9)
"Implement the **render** functions for **Slides 7, 8, and 9**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 7 [Performance Benchmarks]:** The **Brutalista Parity Table**.
    - *Requirement:* Contrast the 'Theoretical Floor' vs. the 'Environmental Grit' reality (e.g., Lab Accuracy vs. 105dB Field Accuracy). Include the 'Grit' solutions from Stage 2.
- **Slide 8 [Strategic Positioning]:** Define the 'Unit of Value' (e.g., Validated Border Minutes or Reclaimed Audit Hours). 
- **Slide 9 [Substitution Audit]:** Categorize the entry as **Direct Substitution** (replacing an existing invoice) to prove high sales velocity."

---

#### [STAGE 6]: CONTENT SPRINT 4 – GTM & MARKET (SLIDES 10-12)
"Implement the **render** functions for **Slides 10, 11, and 12**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 10 [Strategic Integration]:** Explicitly define the **'Zero-Integration' Entry Path** (e.g., 'Digital Sidecar' or 'Manual File Dump') that bypasses the 6-month IT Security Gate.
- **Slide 11-12 [Market Intelligence]:** Bottom-up TAM/SAM/SOM and Geographic Density Clusters (Grit Corridors). 
    - *Requirement:* Render the **Arithmetic Receipts** (Units * Yield) established in Stage 2."

---

#### [STAGE 7]: CONTENT SPRINT 5 – SURVIVAL & COMPETITION (SLIDES 13-15)
"Implement the **render** functions for **Slides 13, 14, and 15**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 13 [The Golden Number]:** Define the primary survival metric (e.g., Manual Intervention Rate).
- **Slide 14 [Threshold Zones]:** Contrast the **Elite Range** (Venture Scale) vs. the **Death Range** (Churn Imminent).
- **Slide 15 [Competitor Matrix]:** The 'Brutalista' comparison: Us vs. Legacy vs. Generic SaaS. 
    - *Requirement:* Highlight the **API-Wrapper Defense** (Why a simple GPT-4 wrapper cannot replicate your data moat)."

---

#### [STAGE 8]: CONTENT SPRINT 6 – ARCHITECTURE & SCOPE (SLIDES 16-18)
"Implement the **render** functions for **Slides 16, 17, and 18**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 16 [Stack Evolution]:** Use `.d-grid-2` to contrast **Phase 1 (The Refinery)** vs. **Phase 2 (The Machine)**.
- **Slide 17 [Asset Genesis]:** The 3-phase IP construction manual (Extraction -> Distillation -> Hardening).
- **Slide 18 [Scope Integrity: The Omission List]:** Define exactly what is **NOT** included in the Phase 1 MVP to protect the 90-day ship date."

---

#### [STAGE 9]: CONTENT SPRINT 7 – EXECUTION & INTEGRITY (SLIDES 19-21)
"Implement the **render** functions for **Slides 19, 20, and 21**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 19 [The Fulfillment Chain]:** Use `.d-step` to map the process from 'Raw Input' to 'Verified Value'.
- **Slide 20 [Support & Integrity Protocol]:** Address the **'Logic Recall' (Integrity Kill-Switch)** and **'Field Support'** reality. 
- **Slide 21 [Validation Roadmap]:** The Scientific R&D plan (Hypothesis -> Stress Test -> Pass Metric)."

---

#### [STAGE 10]: CONTENT SPRINT 8 – DNA & COMMERCE (SLIDES 22-24)
"Implement the **render** functions for **Slides 22, 23, and 24**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 22 [The Founder DNA]:** The 3 Elite Technical/Domain Specifications required for execution.
- **Slide 23 [Commercial Logic]:** Node-Based Pricing and the Fee Structure (Platform + Implementation). 
- **Slide 24 [Refinery Economics]:** Use `.d-grid-2` to contrast the **Unit Economic Step-Up** (MVP Labor-heavy Margin vs. Scale Autonomous Margin)."

---

#### [STAGE 11]: CONTENT SPRINT 9 – FINANCIAL PHYSICS (SLIDES 25-27)
"Implement the **render** functions for **Slides 25, 26, and 27**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 25 [Allocation Meritocracy]:** Define priority rules for capital velocity. 
- **Slide 26 [36-Month Cashflow]:** Model the Genesis Phase burn and the scale-up Step-Up.
- **Slide 27 [Liquidity Survival: The Bridge]:** Contrast the Cash-on-Hand against the **Net-120 Float**. 
    - *Requirement:* Explicitly render the **'Net-15 Implementation Pre-Pay'** as the primary survival maneuver."

---

#### [STAGE 12]: CONTENT SPRINT 10 – THE MANDATE (SLIDES 28-30)
"Implement the **render** functions for **Slides 28, 29, and 30**.
*(Reference the SHARED GOVERNANCE MANDATE from Stage 3)*

**SLIDE CONTENT:**
- **Slide 28 [Invisible Economics]:** Quantify FX Arbitrage, Regulatory Tailwinds, or Data Salvage.
- **Slide 29 [The Funding Mandate]:** Bifurcate the **Genesis Ask** (Validation) vs. the **Venture Ask** (Domination). Define the **Valuation Step-Up Trigger**.
- **Slide 30 [Conclusion & Mandate]:** The deterministic 'Go' signal and the **Immediate 90-Day Milestone**."

---

#### [STAGE 13]: DOCUMENTATION ARCHIVAL (CLEANUP)
"The technical implementation is complete. Based on the current Venture ID and the plan filename used in this session, provide a single PowerShell command to move the technical markdown document from `strategic-lab-architect/generated-plans/` to the `app/[venture-id]/` folder, renaming it to `DESIGN.md`."





















---

















[OLD VERSION]

# [STAGE 3]: CONTENT SPRINT A - THE CATALYST (SLIDES 1-10)

"Data Harvest verified. We are now initializing Stage 3: Content Implementation for **Slides 1 through 10**. Your goal is to project Technical Authority and Radical Transparency.

## 1. VERTICAL GOVERNANCE & VIEWPORT
Target Device: **iPhone SE (375x667)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide. 
- **The Inversion Check:** For any content inside `.d-card-dark`, you must explicitly use `color: theme.parchment` for nested elements to prevent global CSS overrides.
- **Character Limits:** For `.d-grid-2` cards, you are limited to **15 words per card**. Prioritize nouns and metrics. 
- **Theme Injection:** Ensure every `render` wrapper enforces the theme ink color: `<div className="d-content" style={{ color: theme.ink }}>`.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
You are strictly forbidden from using custom CSS or Tailwind utility classes (`text-*`, `p-*`, `m-*`, `flex-*`) inside the `render` functions. You must exclusively use the following Atomic Classes:
- `.d-content`: Root wrapper.
- `.d-grid-2`: 50/50 metric/card split.
- `.d-card` | `.d-card-accent` | `.d-card-dark`: Data containers.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item` | `.d-dot`.

## 3. NARRATIVE HIERARCHY
Implement the `render` functions for the following arc:
- **Slides 1-2 [Executive Briefing]:** The Thesis Central and 'Why Now?' Catalyst.
- **Slides 3-5 [The Friction]:** The 'Invisible Tax' (use `.d-metric-unit` for the USD COI) and the 'Status Quo Failure'.
- **Slide 6 [Technical USP: The Ingestion Flow]:** Detail the hardware/software symmetry at the primary nodes.
    - *Requirement:* You must use `.d-grid-2` to contrast:
        1. **HQ Node:** (e.g., Web Portal for high-res PDF uploads / Server-side JSON ingestion).
        2. **Grit Node:** (e.g., Mobile Web-Bot for field photos / Edge-sensor data / 2AM low-light capture).
- **Slide 7 [Performance Benchmarks]:** The **Brutalista Parity Table**.
    - *Requirement:* Contrast the 'Theoretical Floor' vs. the 'Environmental Grit' reality (e.g., 99.7% accuracy in lab vs. 98.5% in 105dB noise or low-lux dust).
- **Slides 8-10 [Strategic Positioning]:**
    - *Requirement (Slide 10):* The **Strategic Integration Maneuver**. You must explicitly define the **'Zero-Integration' entry path** (e.g., 'Digital Sidecar' or 'Manual File Dump') that bypasses the IT Security Gate.

## 4. DATA INTEGRITY
- Ensure 100% adherence to the **ISO 4217 Currency Mandate**.
- **Metric Vault Audit:** Every slide MUST pull directly from the **Metric Vault** established in Stage 2. No invented or 'placeholder' data.

**Constraint:** Output ONLY the `render` functions for Slides 1-10. No conversational fluff. Standing by for verification."






---






# [STAGE 4]: CONTENT SPRINT B - THE MACHINE (SLIDES 11-20)

"Content Sprint A verified. We are now initializing Stage 4: Implementation of **Slides 11 through 20**. This arc must define the 'Machine's' operational dominance and long-term defensibility.

## 1. VERTICAL GOVERNANCE & VIEWPORT
Target Device: **iPhone SE (375x667)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide.
- **Complexity Management:** For dense slides (Matrix/Architecture), use `.d-grid-2` or minimalist bullet lists. If the data density threatens the 600px limit, prioritize the 'Golden Number' over descriptive prose.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
Strict Enforcement: No custom CSS. No Tailwind color/spacing utilities. Use only:
- `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item`, `.d-dot`.

## 3. NARRATIVE SEQUENCE & LOGIC
Implement the `render` functions for the following:
- **Slides 11-12 [Market Intelligence]:** Bottom-up TAM/SAM/SOM (using the arithmetic from Stage 2) and 'Grit Corridors' (Geographic Clusters).
- **Slides 13-14 [The Golden Number]:** The Primary Survival Metric (e.g., Node Coverage Velocity) and the **90-Day Survival Thresholds** (Elite/Healthy/Death zones).
- **Slides 15-16 [Competitor Matrix]:** A brutal 'Us vs. Legacy vs. Generic SaaS' comparison. 
    - *Requirement:* Use `.d-grid-2` to highlight the **Technical Specification Lock** that incumbents cannot replicate.
- **Slides 17-19 [Architecture & IP]:** Technical Stack (Wedge vs. Dominance), Asset Genesis (The IP - **Slide 17 [Architecture Evolution]:** Use `.d-grid-2` to contrast the **Phase 1 (The Refinery)** vs. **Phase 2 (The Machine)**.
    - *Requirement:* You must bifurcate the stack logic. 
        - *Refinery (MVP):* e.g., Commodity APIs, Web Portal, 100% HITL, 7-minute latency.
        - *Machine (Scale):* e.g., Proprietary Distilled Models, Edge Hardware, Autonomous, 4-second latency.
- **Slide 18 [Scope Integrity: The Omission List]:** Define exactly what is **NOT** included in the MVP to protect the 90-day ship date.
    - *Requirement:* List 3-4 high-complexity features deferred to the Dominance Phase.
    - *Examples:* 'Zero ERP Integration in Phase 1', 'No Proprietary Hardware drivers', 'No Fine-tuned Local Models'.
- **Slide 19 [The Fulfillment Chain]:**
    - *Requirement:* Utilize the `.d-step` and `.d-step-arrow` classes to map the vertical process flow.
- **Slide 20 [Support & Integrity Protocol]:**
    - *Requirement:* Address the **'Logic Recall' (Integrity Kill-Switch)** and **'Field Support'** reality. Define who fixes the hardware or errors at 2:00 AM.
- **Slide 13-14 [The Golden Number]:** 
    - *Requirement:* You must include a **"Sensitivity Note"**: Explain exactly how a 5% deviation in this metric impacts the Monthly OpEx or Payback Period.
- **Slide 20 [Operational Governance]:** Shadow Oversight and Multi-Sig HITL Protocols.

## 4. LINGUISTIC & DATA INTEGRITY
- **No Acronyms:** Use descriptive terms (e.g., 'Manual Intervention Rate') instead of internal shorthand.
- **Currency/Decimals:** 100% adherence to ISO 4217 and Stage 2 Decimal Precision.

**Constraint:** Output ONLY the `render` functions for Slides 11-20. No conversational fluff. Standing by for verification."







---







# [STAGE 5]: CONTENT SPRINT C - THE MANDATE (SLIDES 21-30)

"Content Sprint B verified. We are now initializing Stage 5: Implementation of **Slides 21 through 30**. This final arc must define the commercial viability, the funding requirement, and the immediate path to execution.

## 1. VERTICAL GOVERNANCE & VIEWPORT
Target Device: **iPhone SE (375px x 667px)**.
- **The 600px Safe Zone:** You are strictly forbidden from exceeding **600px of vertical content height** per slide. 
- **Financial Density:** For complex financial slides (26-27), use `.d-grid-2` to keep the 'Golden Numbers' visible without requiring a scroll.

## 2. ATOMIC TECHNICAL FRAMEWORK & PURGE (CRITICAL)
Strict Enforcement: No custom CSS. No Tailwind utilities. Use ONLY:
- `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`.
- `.d-metric-unit`, `.d-metric-label`, `.d-para`, `.d-tag-mono`.
- `.d-list-item`, `.d-dot`.

## 3. NARRATIVE SEQUENCE & COMMERCIAL LOGIC
Implement the `render` functions for the following:
- **Slide 21 [Validation Roadmap]:** The Scientific R&D Plan. Use `.d-list-item` to map the (Hypothesis) -> (Stress Test) -> (Pass Metric) logic from the MTBP.
- **Slide 22 [Founder DNA]:** The 3 Elite Technical/Domain Specifications (Superpowers).
- **Slide 24 [Refinery Economics]:** Use `.d-grid-2` to contrast the **Unit Economic Step-Up**.
    - *Requirement:* Display the **Phase 1 Gross Margin (Labor-Heavy)** vs. the **Phase 2 Gross Margin (Autonomous)**. 
    - *Goal:* Prove the 'Efficiency Step-Up' where marginal fulfillment costs drop by >90% after the distillation checkpoint.
- **Slide 27 [Liquidity Survival: The Bridge]:** Address the **Working Capital Chasm**.
    - *Requirement:* You must explicitly render the **'Net-15 Implementation Pre-Pay'** as the primary survival maneuver.
    - *Visual:* Use `.d-card-accent` to show the 'Liquidity Injection' (Setup Fee) vs. the 'Terminal Float' (Net-120/180 SaaS Fee).
- **Slide 29 [The Funding Mandate: The Ask]:** Bifurcate the capital requirement.
    - *Requirement:* Use `.d-grid-2` to separate:
        1. **Genesis Capital (Ask 1):** Funds purely for **Asset Acquisition & MVP Validation** (Months 0-9).
        2. **Venture Capital (Ask 2):** Funds for **Infrastructure Hardening & Market Domination** (Months 12+).
    - *Strategic Outcome:* Use `.d-card-dark` to define the **Valuation Step-Up Trigger** (e.g., 'Series A unlock at <2% MIR').
- **Slide 30 [Strategic Mandate]:** The Immediate **90-Day Milestone**. Define the deterministic 'Go' signal.

## 4. LINGUISTIC & DATA INTEGRITY
- **Currency Mandate:** Every financial figure MUST include the ISO 4217 code. 
- **Narrative Hierarchy:** (1) Metric -> (2) Strategic Value -> (3) Action/Risk.
- **No Acronyms:** Replace all internal shorthand with descriptive, plain-English value terms.

**Constraint:** Output ONLY the `render` functions for Slides 21-30. No conversational fluff. Standing by for final content verification."
















