# Strategic Dossier Portfolio: Technical Manifest v2.0

## 1. Executive Philosophy: "The Technical Intelligence Report"
These dossiers are not websites; they are high-stakes digital assets for investors and stakeholders. The primary goal is to project **Radical Transparency** and **Technical Authority**.
*   **Narrative Tone:** Minimalist prose. Every slide must support a data point.
*   **The "Audit-Noir" Aesthetic:** High-contrast, structured containment, and metric-heavy layouts.
*   **Metric-to-Ink Ratio:** If a slide doesn't have a metric (KPI, dollar amount, or technical spec), it is filler and should be removed.

## 2. Global Architecture: The Bulletproof Cage
To ensure zero style dropouts across Next.js sub-routes and reliable PDF generation, we use a single-file "Technical Shell" pattern.
*   **The Master Cage:** A container with \`margin-top: 53px\` (to offset the fixed header) and \`height: calc(100vh - 53px)\`.
*   **The Internal Style Engine:** CSS should be defined within a \`<style>\` block in the component to guarantee the environment is identical across all devices and print engines.
*   **Portrait-Only Constraint:** A hard \`max-w-[375px]\` and \`mx-auto\` rule on the main container to cage the viewport.

## 3. The Portrait-First Viewport Standard
*   **Design Boundary:** 375px (iPhone SE) is the absolute baseline. 
*   **Zero-Bleed Policy:** \`overflow-x: hidden\` on the root. Side-scrolling is a failure of delivery.
*   **Snap Governance:** Use \`scroll-snap-stop: always\` for critical financial/technical slides to prevent stakeholders from skipping key data via "flick-scrolling."

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
1.  **Context (Material):** Background mimicking a surface (e.g., #F2EFE9 Parchment, #0F0F0F Charcoal).
2.  **The Ink:** High-contrast text color (min 7:1 ratio).
3.  **The High-Energy Accent:** One color reserved strictly for the "Golden Number" (e.g., #dc2626 Red).

### B. Containment Logic (The Data Card)
Technical data must be housed in containers to mimic a physical dossier:
*   **The Audit Card:** Rounded corners (\`border-radius: 12px\`), a clear border, and a shadow to distinguish data from background.
*   **Typography:** Bold, Italic Serifs for headlines; Monospace for numbers and technical specs.

## 6. Standard Narrative Sequence (Universal Arc)
1.  **Phase I: The Hook & Identity.** Project ID, executive summary, and capital/intent identification.
2.  **Phase II: The Opportunity Tesis.** Market inefficiency analysis, competitive gap validation, and core "Alpha" metrics.
3.  **Phase III: The Technical Engine.** Product/solution architecture, specification-parity protocols, and design strategy.
4.  **Phase IV: Economic Architecture.** The "Math." Cost modeling, unit economics, revenue cascades, and cash flow risk (The Valley of Death).
5.  **Phase V: The Endgame.** Valuation multiples, acquisition/liquidity scenarios, and the execution roadmap.

## 7. Pre-Flight Testing Checklist
1.  [ ] **DevTools:** Set to iPhone SE (375x667). 
2.  [ ] **Bleed Check:** Ensure zero horizontal scrollbar.
3.  [ ] **Snap Check:** Ensure \`snap-stop: always\` works on technical slides.
4.  [ ] **PDF Check:** Open Print Preview; confirm 5"x8" pages and that text doesn't cut off.

## 8. Standardized CSS Classes (The Verified Skeleton)
*   \`.master-cage\`: Handles the scroll-snap and mobile width boundary.
*   \`.fixed-header\`: Standardized 53px height with high-contrast branding.
*   \`.slide\`: Standardized padding and \`100vh - 53px\` height logic.
*   \`.heading-hero\`: 44px font-black italic, uppercase.

## 9. Reference Technical Skeleton

	'use client';
	import React from 'react';

	export default function TechnicalDossierSkeleton() {
		return (
			<div className="antialiased h-screen overflow-hidden bg-neutral-800">
				<style>{\`
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
					/* ... Insert CSS from Section 4 & 8 here ... */
				\`}</style>

				<header className="fixed-header">
					{/* Branding & PDF Trigger */}
				</header>
				<main className="master-cage">
					<section className="slide">
									{/* Phase I Content */}
					</section>
					{/* Repeat sections for all phases... */}
				</main>
					{/* Hidden Print Footer */}
			</div>
		);
	}

## 10. Technical Formatting & Localization

*   **Currency Mandate:** All monetary figures must include an explicit ISO 4217 currency code (e.g., \`USD\`, \`MXN\`). Never use the \`$\` symbol in isolation.
*   **Language Protocol:** The Project Lead must explicitly define the primary output language (e.g., English, Spanish) during Phase 1 of the development cycle.
*   **Decimal Precision:** Financial projections should use a maximum of two decimal places for unit costs and zero decimals for large aggregate totals.

## 11. The Dynamic Content Engine (DCE)

To ensure the dossier remains maintainable and prevents "Layout Drift" across 20+ slides, we use a centralized metadata loop with conditional injection.

### A. The Loop Strategy
Define a \`slides\` constant array containing IDs, Titles, and Labels. Render the \`.master-cage\` using a \`.map()\` function.

### B. Conditional Injection Pattern
Inside the loop, use a ternary or switch statement based on \`slide.id\` to inject specific technical data cards.

## 12. Content Density & Vertical Governance

To maintain "Technical Authority" and ensure perfect PDF rendering, we adhere to the **Rule of the Single Viewport**:

*   **No Internal Scrolling:** A slide must NEVER require internal scrolling.
*   **The Safe Zone:** All critical data cards and Golden Numbers must reside within the first 600px of vertical space.
*   **Flexibility over Constraint:** Use \`min-height: calc(100vh - 53px)\` instead of a fixed \`height\`.

## 13. The "Audience Conscience" Mandate (Strategic Storytelling)

Technical data is a tool, not the goal. Every slide must function as a piece of **Strategic Intelligence**. 

*   **The Strategic Filter:** Avoid "Standard vs. Us" comparisons on every detail. Focus only on what creates a **Moat**, identifies a **Risk**, or unlocks an **Opportunity**.
*   **The Narrative Hierarchy:** (1) Metric/Fact. (2) Strategic Value. (3) Action/Risk.
*   **The "Executive Summary" Tone:** Use minimalist, high-impact language.

## 14. Versioned Engines: DossierEngineV2 (The 2026 Standard)
Post-February 2026 projects should utilize the \`DossierEngineV2.tsx\` component for enhanced governance.
*   **Automatic Re-indexing:** The engine generates \`S01\`, \`S02\`, etc., and the \`X / Total\` counter dynamically from the input array.
*   **Sticky Vertical Footer:** Every slide uses a Flexbox shell with \`margin-top: auto\` to lock the footer to the viewport floor.
*   **Print-Aware Contact Logic:** The engine automatically toggles between interactive links (WhatsApp/Email) on the browser and raw text/numbers in the PDF print engine.
*   **Theme Injection:** Styles (colors/fonts) are passed via a theme prop to ensure the engine remains skinable without modifying core logic.
