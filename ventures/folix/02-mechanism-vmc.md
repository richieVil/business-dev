# Strategy: Technical Mechanism (02-mechanism-vmc)
# Venture: fiscal-bridge

## 1. The Mechanism (TOF Model)
The "fiscal-bridge" operates as a headless middleware that decouples the sales event from the fiscal event.

| Layer | Component | Description |
| :--- | :--- | :--- |
| **Trigger** | Webhook / Payload | POS sends a JSON payload (Items, Total, OrderID) upon sale closure. |
| **Orchestrator** | Payload Ledger | Stores transaction data until the **4th day of the following month** (Aligns with Mexican Month-end Factura Global window). |
| **Orchestrator** | Catalog Mapper | **The Black Box:** Translates internal POS SKUs/Categories into mandatory 8-digit SAT keys using pre-mapped rules. |
| **Orchestrator** | Identity Vault | **The Moat:** Maps RFCs as unique IDs. Support for **Multi-Identity** (one Phone Number can manage multiple RFCs). |
| **Orchestrator** | CSD Vault | Encrypted storage of the Seller's Digital Seals (Certificates) used for signing the XML. |
| **Fulfillment** | WhatsApp/Email | Multi-channel delivery of signed XML/PDF documents. |

---

## 2. The Functional Handshake (Step-by-Step)
The following loop defines the "Zero-Friction" interaction between all parties:

1.  **Sale Event:** Seller closes sale on a Global POS (e.g., Square/Loyverse).
2.  **Ingestion:** POS Webhook sends the transaction payload to the fiscal-bridge API.
3.  **Code Generation:** System generates a 6-character code (e.g., `ZNK-40`) and a **QR-Link** (wa.me URL with pre-filled text).
4.  **The Ticket:** Seller prints receipt with a **QR Code**. Text: *"¿Factura? Escanea el QR o manda ZNK-40 al 55-XXXX."*
5.  **Buyer Contact:** Buyer scans (auto-sends code) or manually types the code.
6.  **Identity Retrieval:**
    *   **The Switchboard:** If the Phone Number is linked to multiple RFCs, the Bot asks: *"¿Para qué RFC facturamos hoy? [List of Alias/RFCs]"*.
    *   **Case B (New/Update):** Bot says: *"Hola! Sube el PDF de tu Constancia Fiscal (máx. 3 meses de antigüedad) para empezar."*
7.  **The Sign-off:** Bot merges **Payload + Catalog Mapping + CSD + Buyer Data** and calls the PAC API (Timbrado).
8.  **Delivery:** Bot sends PDF/XML via WhatsApp and CC's the email found in the Constancia PDF.

---

## 3. The Orchestrator Logic (The "Black Box")
### 3.1 SKU-to-SAT Catalog Mapping
The system eliminates the need for the cashier to know SAT codes. 
*   **Initial Setup:** Seller performs a one-time "Mapping Sprint" where they associate their POS categories or top 100 SKUs with the correct SAT product keys. 
*   **Inheritance:** If a specific SKU is not mapped, the bot inherits the code from its parent Category.

### 3.2 Identity Vault Security
*   **Privacy:** Phone numbers are used as the unique ID.
*   **Data Minimization:** We store only the Fiscal Metadata (RFC/Name/Zip) required for the CFDI 4.0. We do not store credit card info or unrelated personal data.

---

## 4. Guest UX Audit (The Non-Paying Party)
*   **Zero-App Policy:** The buyer never downloads an app. All interaction is in the WhatsApp UI.
*   **Identity Switching:** Support for "Proxies" (Accountants/Assistants) to invoice for others by selecting from an RFC list.
*   **Constancia Recency:** System checks the "Fecha de Emisión" in the PDF. If > 90 days, it requests a fresh upload to ensure the "Régimen Fiscal" is current.

## 5. Security & Risk Audit (The "History Breach" Mitigation)
*   **Risk:** A malicious user uploads an RFC's PDF to gain access to that RFC's entire fiscal history within fiscal-bridge.
*   **Mitigation A (Channel Locking):** Historical records are only visible/retrievable if the current WhatsApp Phone Number matches the number that originally fulfilled that specific invoice.
*   **Mitigation B (Email Verification):** To view "All History" for an RFC from a new phone number, the user must click a **Magic Link** sent to the email address extracted from the latest verified Constancia PDF.
*   **Risk: Impersonation Signing:** A hacker generates an invoice for an RFC without authorization.
*   **Mitigation:** Since a "Factura" is a tax deduction for the recipient and a tax liability for the issuer, there is zero financial incentive for a hacker to "gift" a deduction to someone else. However, for privacy, we notify the email on file every time a new signing event occurs.