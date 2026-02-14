# Strategic Dossier Portfolio: Technical Manifest v2.1

## 1. Executive Philosophy: "The Technical Intelligence Report"
These dossiers are not websites; they are high-stakes digital assets for investors and stakeholders. The primary goal is to project **Radical Transparency** and **Technical Authority**.
*   **Narrative Tone:** Minimalist prose. Every slide must support a data point.
*   **The "Audit-Noir" Aesthetic:** High-contrast, structured containment, and metric-heavy layouts.
*   **Metric-to-Ink Ratio:** If a slide doesn't have a metric (KPI, dollar amount, or technical spec), it is filler and should be removed.

## 2. Global Architecture: The Bulletproof Cage
To ensure zero style dropouts across Next.js sub-routes and reliable PDF generation, we use a single-file "Technical Shell" pattern.
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

## 6. Standard Narrative Sequence (The 20-Slide Mandate)
Every dossier must follow this specific 20-slide structure. Deviations are forbidden.

*   **Slides 1-2: Executive Briefing.**
    *   *Content:* Project ID, Tesis Central, Vision, and the "Hook" (e.g., Deloitte Quality at Software Price).
*   **Slides 3-4: The Problem & The Friction.**
    *   *Content:* Quantify the "Invisible Tax" (Leakage, Lag, Error Rates).
*   **Slides 5-6: The Technical USP.**
    *   *Content:* Specification Parity, HS-Code Logic, proprietary algorithms.
*   **Slides 7-10: Market Intelligence.**
    *   *Content:* TAM/SAM, Geographic Focus, Competitor Matrix (Brutalista).
*   **Slides 11-13: The Machine (Technical & Operational Architecture).** 
    - *Mandatory:* **MVP Critical Path** (Software/Hardware Specs), **Asset Genesis** (The R&D Plan to build/acquire the Core IP), **CAPEX & Setup Costs** (Initial Investment), and **Shadow Governance** (Human QA/Training).
*   **Slides 14-16: Commercial Logic.**
    *   *Mandatory:* **Unit Economics** (Gross Profit), **3-Year P&L Projection** (Growth Targets), and **18-Month Cashflow** (The "Valley of Death" stress test).
*   **Slides 17-18: Execution Strategy.**
    *   *Content:* Activation Bridge (0-180 Days) and Market Entry Strategy (Trojan Horse).
*   **Slide 19: The Endgame.**
    *   *Content:* Exit Liquidity triggers and Valuation Multiples (6x-12x EBITDA).
*   **Slide 20: Conclusion & Mandate.**
    *   *Content:* Strategic Mandate summary and Next Steps.

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
