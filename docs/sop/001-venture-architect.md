# SOP: Venture Architect Strategy (001-venture-architect)

## 1. Objective & Scope

### 1.1 Mission
The objective of this SOP is to provide a rigorous, repeatable framework for transforming a raw industrial or fintech idea into a "World-Class" strategic venture. It replaces subjective "ideation" with a scientific audit process focused on **Mechanism**, **Leverage**, and **Fiscal Necessity**.

### 1.2 Core Principles
*   **Cash-First Priority:** Favor ideas that recover cash (Tax/Energy/Audit) or prevent fines over "Efficiency" tools.
*   **Mechanism over Magic:** A venture is defined by its *physical/technical bridge* (The "How"), not its intended outcome.
*   **Leverage-Driven Growth:** Prioritize "Platform Parasite" strategies (using existing networks) over direct-sales grinds.
*   **Anti-Friction Design:** The barrier to entry for the user must be near-zero (e.g., WhatsApp, QR, Webhook).

### 1.3 Critical to Quality (CTQ) Metrics
*   **BOI Score:** Must exceed **4.25** for "Lab-Ready" status.
*   **ROIE Index:** Must exceed **4.0** for implementation greenlight.
*   **CAL Factor:** Must score **4.0 or higher** (Leverage).

---

## 2. Phase 1: Seed & OSV (The Entry Gate)

### 2.1 The One-Sentence Value (OSV)
Every venture begins as a single, immutable sentence. If the idea cannot be expressed in this syntax, the mechanism is too complex.
*   **Mandatory Syntax:** "A **[Product/Platform Type]** that **[Primary Technical Action]** for **[Economic Buyer]** to solve **[Acute Pain Point]** via **[Specific Mechanism]**."
*   **The OSV Standard:** The OSV must identify the *handshake* between the parties.

### 2.2 Seed Slug Generation
To prevent "Identity Debt" (naming a project before the Brand Soul is found), use a descriptive seed slug for the filesystem.
*   **Rule:** 2-word hyphenated slug. `[Functional-Attribute]-[Noun]`.
*   **Format:** Lowercase alphanumeric only.
*   **Example:** `fiscal-bridge`, `audit-sync`, `vault-ledger`.

### 2.3 Venture Initialization (The Dossier)
Once the OSV and Seed Slug are approved, initialize the "Venture Dossier" directory: `ventures/[seed-slug]/`. 

Per **SOP 003-venture-drafting**, this directory must contain three distinct strategic documents to prevent "skeleton" truncation and ensure technical/economic depth.

### 2.4 Taxonomy Alignment (The Catalog)
To ensure the portfolio remains searchable and analytically sound, all ventures must be mapped to the standardized taxonomy in `docs/venture-catalog.json`.
*   **Sectors:** Defines the vertical market and regulatory environment (e.g., `FINTECH`, `LOGISTICS`).
*   **Archetypes:** Defines the technical/psychological mechanism (e.g., `THE_LEDGER`, `THE_FORFEIT`).
*   **Rule:** Multiple tags are allowed (comma-separated). No new tags may be used in the registry without first being defined in the master catalog.

---

## 3. Phase 2: Strategic Triage (The BOI Matrix)

### 3.1 The Gateway Filter: The "Painkiller" Test
Before calculating the BOI, the idea must pass the "Painkiller" gate.
*   **The Question:** "Does this idea recover cash, prevent jail time, or stop a production-halting event?"
*   **Requirement:** If the idea is a **"Vitamin"** (Optional efficiency, "Better feeling"), it must be pivoted to find a "Painkiller" hook (e.g., instead of "Better training," use "Avoid Federal safety fines").

### 3.2 The Business Opportunity Index (BOI) Rubric
Score each pillar using the **Integer-5 / Qualitative** scale.

| Score | Qualitative | Metric Description (Simplified) |
| :--- | :--- | :--- |
| **5.0** | **Max (Critical)** | Blocking / High Liability / Global Mandate / Network Effect. |
| **4.0** | **High** | Important / Strategic / Industry Standard / Hard to copy. |
| **3.0** | **Med** | Desirable / Moderate stakes / 1-year shelf life. |
| **2.0** | **Low** | Marginal / Clerical / Commoditized. |
| **1.0** | **Trivial** | Cosmetic / "Nice-to-have" / Purely elective. |

### 3.3 Triage Actions (The Status Mandate)
Calculate the weighted score: `(Urgency * 0.25) + (Stakes * 0.30) + (Ease * 0.15) + (Moat * 0.20) + (Regulation * 0.10)`.

*   **SCORE > 4.25 (GREENLIGHT):** High-conviction venture. Proceed immediately to Phase 3 (VPC/VMC).
*   **SCORE 3.3 - 4.24 (BUILD MOAT):** Strong core, but vulnerable. You must identify the "Weak Pillar" and pivot the model to strengthen it before proceeding.
*   **SCORE < 3.3 (PIVOT/ARCHIVE):** Fundamental failure of market physics. Discard or return to Phase 1 for a "Customer Up-Level" (e.g., selling to the CFO instead of the Manager).

---

## 4. Phase 3: The Design Handshake (VPC & VMC)

### 4.1 The Value Proposition Canvas (External Fit)
This phase maps the psychological and operational reality of the user to the proposed solution.

#### 4.1.1 The Customer Profile (The Reality)
*   **Economic Buyer vs. End User:** Identify who signs the check vs. who uses the tool. (e.g., The CFO cares about "Compliance Risk"; the Cashier cares about "The Line").
*   **Jobs to be Done (JTBD):** Tasks they are legally or operationally forced to do (e.g., "Issue a compliant CFDI 4.0").
*   **Pains:** The negative outcomes and risks (e.g., "SAT Portal crashes," "Manual entry typos").
*   **Gains:** The "Delight" factors (e.g., "Closing the month in 5 minutes," "One-click deductions").

#### 4.1.2 The Value Map (The Promise)
*   **Pain Relievers:** Specific features that kill the Pains (e.g., "Asynchronous invoicing via WhatsApp").
*   **Gain Creators:** Specific features that exceed expectations (e.g., "Identity Vault for 1-click RFC reuse").

### 4.2 The Value Mapping Canvas (Internal Mechanism)
The VMC defines the **"Mechanism"**—the technical bridge that actually performs the work.

#### 4.2.1 The "Mechanism" Components
A world-class mechanism must define three logical layers:
1.  **The Trigger (Ingestion):** How does the data enter our world? (e.g., Webhook from POS, OCR of a PDF, IoT vibration sensor).
2.  **The Orchestrator (Transformation):** The "Black Box" logic. (e.g., Mapping internal SKUs to SAT keys, AI-driven audit reconciliation).
3.  **The Fulfillment (Output):** How is the value delivered? (e.g., WhatsApp PDF delivery, API call to a lender, Automated tax filing).

#### 4.2.2 The Functional Handshake (Step-by-Step)
Document the interaction loop between the Buyer, the Seller, and the Bot. 
*   *Example:* 1. Seller prints code -> 2. Buyer sends code to Bot -> 3. Bot retrieves transaction -> 4. Bot validates RFC -> 5. Bot issues invoice.

#### 4.2.3 Persona-Specific Interface Audit
The "Mechanism" must be audited for two distinct user experiences:
1.  **The Admin View (Paying Party):** Focused on configuration, reporting, and "Fiscal Vaulting."
2.  **The Guest View (Non-Paying Party):** Focused on zero-friction execution. Must require zero app downloads and zero account creation to fulfill the value.

---

## 5. Phase 4: Execution Economics (ROIE & CAL)

### 5.1 ROIE: Return on Implementation Effort
The ROIE measures the "Profit Density" relative to the "Build Pain." A high ROIE identifies "Easy-High Return" wins.

#### 5.1.1 The Financial Multiplier (Return - 1-5 Scale)
Calculate the weighted average of three return vectors:
1.  **Proximity to Transaction (40%):** 
    *   **5 (Direct):** Bot facilitates a loan/payment (e.g., "Broker fee").
    *   **4 (Utility):** Bot is mandatory for operations (e.g., "Invoicing").
    *   **1 (Efficiency):** Bot saves time but doesn't touch money.
2.  **Revenue Velocity (30%):** 
    *   **5 (Instant):** Success fees/Commission on Day 1.
    *   **3 (Cyclical):** Monthly SaaS subscription.
    *   **1 (Lagged):** Long sales cycles.
3.  **Margin Potential (30%):** 
    *   **5 (Pure Software):** Near-zero marginal cost.
    *   **3 (Hybrid):** Moderate API costs or human oversight.

#### 5.1.2 The Execution Friction (Effort - 1-5 Scale)
Calculate the weighted average of two friction vectors:
1.  **Build Complexity (50%):** 
    *   **1 (Wrapper):** No-code/API-heavy (e.g., "Stripe + WhatsApp").
    *   **3 (Logic):** Custom algorithmic/database development.
    *   **5 (Hard Tech):** Custom hardware or new LLM foundations.
2.  **Dependency Drag (50%):** 
    *   **1 (Independent):** No partnerships needed to launch.
    *   **3 (Integrated):** Needs 1-2 API partnerships (e.g., "Shopify/Plaid").
    *   **5 (Regulated):** Needs banking licenses or government audits.

#### 5.1.3 The ROIE Formula
`ROIE = (Weighted Multiplier Score) / (Weighted Friction Score)`
*   **Target:** > 4.0 for a "Greenlight." (High Return / Low Friction).

### 5.2 CAL: Customer Acquisition Leverage
The CAL determines if the business can grow without a massive sales team.

*   **5.0 - Platform Parasite:** You live inside a marketplace where users *already* have the pain. (e.g., Shopify App Store, Chrome Web Store).
*   **4.0 - Viral Handshake:** The product sells itself during use. (e.g., A Buyer sees the bot's name on a receipt).
*   **1.0 - Direct Sales Grind:** You must find, call, and convince users 1-by-1. (Avoid if possible).

#### 5.3 Revenue Simulation & The "Variable Cost Floor"
Before setting prices, you must simulate the "Unit Cost Floor" to prevent margin collapse in high-volume scenarios.
1.  **Identify Variable Components:** List per-transaction fees (e.g., WhatsApp conversation fees, API signing fees, LLM token costs).
2.  **Calculate the Floor:** Sum the components to find the absolute minimum cost to fulfill one unit.
3.  **The "Unlimited" Trap:** If the total unit cost exceeds 20% of the proposed fixed monthly price, a "Flat/Unlimited" tier is strictly forbidden. 
4.  **Tier Strategy:** Use a **Base + Overage** model (e.g., $299 MXN includes 50 units + $1.50 per unit thereafter).

### 5.4 The "Influencer-as-Distribution" Strategy
Identify if the venture has a **"Secondary Gatekeeper"** (e.g., An Accountant, a Safety Inspector, a Logistics Broker).
*   **The Value-Shift:** If the Gatekeeper saves 4+ hours of manual labor by having their clients use the tool, the tool should be **FREE** for the Gatekeeper. 
*   **The Outcome:** The Influencer becomes an unpaid sales force, mandating the tool's adoption by the Economic Buyer to simplify their own professional workflow.

---

## 6. Phase 5: Platform Architecture & Risk Audit

### 6.1 The Platform vs. SaaS Decision
Before finalizing the technical spec, determine the "Data Gravity" model.

#### 6.1.1 The SaaS Tool Model (Isolated Data)
*   **Logic:** Each business owns its own database of users/transactions.
*   **When to use:** High privacy requirements (Legal/HR) or where users rarely overlap between different sellers.

#### 6.1.2 The Identity Network Model (Centralized Data)
*   **Logic:** A central "Identity Vault" recognizes the user (via Phone Number/Email) across the entire network of sellers.
*   **Decision Criteria:** 
    *   **Network Effect:** Does "knowing" the user once make the 2nd transaction at a *different* business faster?
    *   **Switching Cost:** Does the centralized history make it harder for a seller to leave the platform?
*   **Rule:** If the project relies on **Marketplace Leverage (CAL)**, you **MUST** prioritize the Identity Network model.

### 6.2 The Master Risk Ledger (Pre-Mortem Audit)
Every platform play must document mitigations for the following "Catastrophic Failure" points:

| Risk | Description | Mitigation Strategy |
| :--- | :--- | :--- |
| **The Ban-Hammer** | Platform-level suspension (e.g., Meta/WhatsApp/Apple). | **Multi-WABA Balancing:** Distribute sellers across multiple API accounts; strict user-initiated "Service" flows. |
| **CSD/Key Liability** | Security breach of digital certificates or signing keys. | **Zero-Knowledge Vaulting:** AES-256 encryption using keys not stored on the primary application server (HSM). |
| **Chat Clutter** | Users losing track of interactions in a single central thread. | **Structured Searchability:** Prefix every message with `#BusinessName`; Provide a "Magic Link" to a web-view dashboard. |
| **Brand Dilution** | Sellers feeling the platform "intrudes" on their customer relationship. | **Contextual Wrapping:** Use dynamic headers, logos, and custom "Thank You" footers based on the Seller ID. |
| **Fiscal Profiling** | Regulatory scrutiny regarding "Data Aggregation" of consumer spending. | **Minimalist Data Retention:** Purge transaction payloads within 72 hours; store only the "Identity" (RFC/Name). |
| **The "Nursery" Risk** | Large sellers outgrowing the tool and building their own. | **Tiered Autonomy:** Allow "Enterprise" tiers to connect their own WABA/API accounts while keeping our backend. |

---

## 7. Definition of Done (DoD)

A Venture Definition is officially complete and "Lab-Ready" when the following criteria are met:

### 7.1 Strategic & Market Validation
- [ ] **BOI Audit:** The `spec.md` contains a weighted Business Opportunity Index score of > **4.25**.
- [ ] **Painkiller Proof:** The "Gateway Filter" confirms the idea is a Mandatory necessity, not an optional efficiency.
- [ ] **Taxonomy Audit:** Sectors and Archetypes are correctly selected from the `docs/venture-catalog.json` master list.
- [ ] **Economic Buyer:** The specific persona responsible for the budget is identified and their "Micro-Moment of Pain" is documented.

### 7.2 Technical & Platform Logic
- [ ] **The Mechanism (VMC):** The "Black Box" logic (Trigger, Orchestrator, Fulfillment) is mapped as a step-by-step handshake.
- [ ] **Data Gravity Model:** The decision between a "SaaS Tool" and an "Identity Network" is justified based on **CAL potential (> 4.0)**.
- [ ] **Venture Seed:** The directory structure is initialized in `ventures/[seed-slug]/` with a descriptive, functional name.

### 7.3 Economic & Growth Readiness
- [ ] **ROIE Validation:** The `spec.md` documents a Return on Implementation Effort score of > **4.0**.
- [ ] **The "Variable Cost Floor" Audit:** A simulation has been performed documenting the total unit cost (e.g., WhatsApp + Signing + AI fees). "Unlimited" tiers are forbidden if variable costs exceed 20% of the price.
- [ ] **Unit Economics:** The variable cost vs. target price is documented with a projected > 80% gross margin at the base tier.
- [ ] **CAL Strategy:** At least one Level 7 or Level 10 distribution channel (Platform Parasite/Viral Loop) is identified and mapped.

### 7.4 Identity & Risk
- [ ] **Naming SOP (002-naming-framework):** A Masterbrand is selected and passes the "Shout Test" and "Spelling Test."
- [ ] **Risk Ledger:** The `audit-log.md` contains specific mitigations for "The Ban-Hammer," "CSD Liability," and "Nursery Risk."
- [ ] **Brand Soul:** A single paragraph is written defining the linguistic and strategic "vibe" of the venture.

---

## 8. Phase 6: Strategic Evolution (The Pivot Protocol)
If an idea fails the BOI (> 4.25) or ROIE (> 4.0) filters, apply the **"Rule of 3"** to attempt a rescue. Do not brainstorm freely; use these three specific levers:

1.  **The "Customer Up-Level" (Financial Pivot):** Move up the value chain. If selling to a Store Manager failed, how do we sell the result to the CFO, the Insurance Carrier, or the Auditor?
2.  **The "Business Model Flip" (Revenue Pivot):** Change the mechanic. Move from "Subscription" to "Success Fee" (Shared Savings) or "Transaction-Based Brokerage."
3.  **The "Adjacent Problem" (Data Pivot):** Identify the "Data Byproduct." If the primary service is hard to sell, is the data it collects (e.g., buyer identities, spending patterns) more valuable to a different buyer (Strategic Acquirers)?

**Documentation:** Every pivot must be recorded in the `audit-log.md` with a recalculation of the BOI/ROIE scores.
