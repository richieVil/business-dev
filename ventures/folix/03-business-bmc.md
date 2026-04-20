# Strategy: Business Model Canvas (03-business-bmc)
# Venture: fiscal-bridge

## 1. Customer Segments (The Personas)

### 1.1 The "Global POS" Retailer
*   **Persona:** Owner of high-traffic venues (Specialty Coffee, Craft Breweries, Boutique Pharmacies).
*   **Key Tech:** Uses **Square, Loyverse, or Shopify POS** for inventory management.
*   **Micro-Moment of Pain:** Peak hours (e.g., 2 PM Friday). A line of 10 people stops because one customer asks for a "factura," forcing the cashier to manually type tax data.
*   **Economic Motivation:** **Operational Throughput.** Reducing checkout time directly protects revenue and prevents "line abandonment."

### 1.2 The Specialized Healthcare Clinic
*   **Persona:** Private practices (Dentists, Dermatologists, Aesthetic Surgeons).
*   **Key Tech:** Uses simple card readers (Clip) or specialized booking software.
*   **Micro-Moment of Pain:** The end of the consultation. Patients require a factura because medical fees are 100% tax-deductible in Mexico. The receptionist spends 2 hours every evening "catching up" on invoice emails.
*   **Economic Motivation:** **Administrative Debt Reduction.** Outsourcing data entry to the patient via WhatsApp.

### 1.3 The Field Service Professional
*   **Persona:** Independent technicians (HVAC, Plumbers, Architects).
*   **Key Tech:** Mobile-first, bank transfers, or mobile POS.
*   **Micro-Moment of Pain:** Finishing a job tired and realizing they have 5 invoices to generate before they can get paid. 
*   **Economic Motivation:** **Liquidity Velocity.** "No Invoice = No Payment." Issuing on-site in < 30 seconds accelerates cash flow.

---

## 2. Value Propositions (The Stakeholder Matrix)

| Stakeholder | The "Magic" USP | Key Benefit |
| :--- | :--- | :--- |
| **The Seller** | **Asynchronous Bridge** | Reduces register friction by 90%; 100% accurate data. |
| **The Buyer** | **The Identity Vault** | One-click recognition. "We already have your info." |
| **The Staff** | **Portal Bypass** | Zero interaction with the clunky SAT portal or manual entry. |
| **The Accountant** | **Despacho Portal** | Zero-labor month-end. One-click download of all client XMLs. |

---

## 3. Channels (The Distribution Flywheel)

### 3.1 The "Platform Parasite" (Marketplace)
We list **fiscal-bridge** as the "Official Mexico Fiscal Add-on" in the **Loyverse** and **Square** App Marketplaces. We acquire users at the moment they search for "Factura" in their POS settings.

### 3.2 The Transactional Flywheel (CAL Level 7)
Every receipt printed by a Seller acts as a marketing flyer. The Buyer scans the QR, enters the "Identity Vault," and experiences the speed. When that Buyer goes to a different store, they look for the **fiscal-bridge** logo to avoid re-typing their data.

### 3.3 The Influencer Loop (Accountant-led)
We provide the **Despacho Portal for FREE**. Accountants mandate their 20-50 clients use our tool because it saves the *Accountant* 5+ hours of manual reconciliation per client per month.

---

## 4. Customer Relationships (The Stickiness)

*   **Invisible Assistant:** Zero-friction onboarding. The user never leaves WhatsApp.
*   **The Identity Moat:** Once a Buyer's RFC is in the Vault, the switching cost to a competitor (where they have to re-upload or re-type) is high.
*   **Contextual Branding:** The bot uses the Seller's logo/header in the chat, ensuring the Seller maintains their brand relationship while we provide the infrastructure.

---

## 5. Key Activities & Resources

*   **Activities:** Webhook/Payload Orchestration, Catalog Mapping Sprints (SKU -> SAT), Zero-Knowledge Vault Security Audits.
*   **Resources:** Identity Ledger IP (The Phone-to-RFC Database), CSD Signing Engine, WhatsApp Business API (WABA) Infrastructure.

---

## 6. Key Partnerships

*   **The Legal Backbone:** PAC APIs (e.g., Finkok/Facturama) for official XML certification.
*   **The Reseller Network:** Strategic alliances with local POS hardware distributors in Mexico.

---

## 7. Revenue & Cost Model (The Pricing Engine)

### 7.1 Unit Cost Structure (The Floor)
*   **Variable Cost (Customer-Initiated):** ~$0.43 MXN (Meta Free Window + PAC + OCR).
*   **Variable Cost (Business-Initiated):** ~$1.28 MXN (Meta Utility Fee + PAC + OCR).
*   **Fixed Costs:** Serverless infra, security vaulting, WABA account fees.

### 7.2 Pricing Tiers (Base + Usage)
**Policy:** No "Unlimited" tiers.

| Tier | Price (Monthly) | Inclusion | Overage Fee |
| :--- | :--- | :--- | :--- |
| **Freelancer** | $0 MXN | 0 | $15.00 MXN / inv |
| **Boutique** | $349 MXN | 50 Invoices | $3.00 MXN / inv |
| **Enterprise** | $1,200 MXN | 500 Invoices | $1.50 MXN / inv |

---

## 8. Strategic Verification (CTQs)
*   **Influencer Strategy:** Documented (Free for Accountants).
*   **Cost Floor Audit:** Confirmed ($0.43 floor vs $15.00 entry price).
*   **Data Gravity:** Confirmed (Identity Vault).