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
*   **The Route Infrastructure:** Every dossier must consist of two files: (1) `page.tsx` (The Technical Shell) and (2) `layout.tsx` (The Metadata Shadow). This ensures the browser tab title respects the "Technical Authority" of the venture.
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

*   **S1: The Catalyst (Slides 1-10)**
    *   Slides 1-2: Executive Briefing (Project ID, Tesis, Catalyst/Why Now).
    *   Slides 3-5: The Problem & COI (Invisible Tax, Cost of Inaction, Status Quo Failure).
    *   Slides 6-7: The Technical USP (Benchmark Table, Technical Delta, Unit of Value).
    *   Slides 8-10: Market Strategy (Ecosystem Map, Substitution Audit, Entry Maneuver).
*   **S2: The Logic (Slides 11-18)**
    *   Slides 11-12: The Gatekeeper Gauntlet (IT/Legal Blockers & Neutralizers).
    *   Slides 13-14: The Golden Number (NCV thresholds, lead indicators).
    *   Slides 15-16: Revenue Physics (Asymmetric Pricing, Success Fees).
    *   Slides 17-18: Defensive Moats (Data/Formula Integration, Competitor Brutalista).
*   **S3: The Machine (Slides 19-24)**
    *   Slides 19-20: Architecture (MVP Critical Path, Technical Stack).
    *   Slides 21-22: Asset Genesis (The IP Construction Manual, Knowledge Vault).
    *   Slides 23-24: Governance (Shadow Oversight, Founder DNA Specs).
*   **S4: The Physics (Slides 25-30)**
    *   Slides 25-26: Commercial Logic (Cost Waterfall, Unit Economics, Valuation Multiplier).
    *   Slides 27-28: Stress Tests (Valley of Death, 18-Mo Cashflow, 20% Miss Pivot).
    *   Slide 29: The Funding Mandate (The Ask, Exit Triggers, ROI Milestones).
    *   Slide 30: Conclusion & Mandate (Strategic Mandate, 90-Day Milestone).

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

## 10. Technical Formatting & Localization

*   **Currency Mandate:** All monetary figures must include an explicit ISO 4217 currency code (e.g., `USD`, `MXN`). Never use the `$` symbol in isolation.
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
*   **Requirement:** Output a table mapping **Hard Metrics** (e.g., NCV: 14 Days, CAC: $8k, TAM: $3.5B) to their specific Slides.
*   **17.A The Bottom-Up Constraint:** Market analysis slides (TAM/SAM/SOM) must be engineered using **Units-to-USD Arithmetic**. (1) Define Total Units. (2) Apply Unit Yield. (3) Generate Total Market Value. Generic top-down industry stats are classified as "Fluff" and must be rejected.
*   **Audit Check:** If a slide in the `page.tsx` contains only prose and no harvested metric, it must be flagged for redesign.

## 18. Atomic Strict-Mode (Governance)
To ensure the PDF Print Engine does not break, the AI Developer is **forbidden** from using custom CSS or Tailwind spacing inside the `render()` function.
*   **Allowed:** `.d-content`, `.d-grid-2`, `.d-card`, `.d-card-accent`, `.d-card-dark`, `.d-para`, `.d-metric-unit`, `.d-metric-label`, `.d-tag-mono`, `.d-list-item`, `.d-dot`.
*   **Forbidden:** `mt-4`, `p-2`, `text-red-500`, `flex-row`.
*   **Result:** Consistency in layout and perfect mobile/print rendering across 100% of dossiers.




---



clear; Write-Host '```'; Get-ChildItem -Path . -Recurse -Depth 4 | Where-Object { $_.FullName -notmatch '\\(node_modules|\.git|\.next|dist)\\' } | Select-Object -ExpandProperty FullName; Write-Host '```'


clear; $files = "app/components/DossierEngineV2.tsx"; foreach ($file in $files) { Write-Host "--- START OF FILE: $file ---"; Write-Host '```'; Get-Content -LiteralPath $file -Encoding Utf8 | Out-String; Write-Host '```'; Write-Host "--- END OF FILE: $file ---"; Write-Host "" }