# SOP: Scoring & Categorization Policies (000-policies)

## 1. The Integer-5 Standard
All metrics within the VA-HF (High-Fidelity) engine must be scored using an **Integer scale from 1 to 5**. No decimals are allowed for raw input.

| Score | Qualitative | Standard Definition |
| :--- | :--- | :--- |
| **5** | **Critical / Max** | Best-in-class. Zero friction. Mandatory. Global potential. |
| **4** | **High** | Strong alignment. High value. Managed friction. |
| **3** | **Medium** | Acceptable. Standard industry performance. Moderate effort. |
| **2** | **Low / Weak** | Marginal value. Significant headwinds. High friction. |
| **1** | **Trivial / Fatal** | Nice-to-have only. Business-killer collision. No leverage. |

---

## 2. Weighted Calculation Policy
While input pillars must be integers, **Total Scores** are calculated using **Weighted Sums** to allow for precise strategic triage.
*   **Formula:** `Total = (Pillar1 * W1) + (Pillar2 * W2) + ...`
*   **Rounding:** Final weighted totals are rounded to two decimal places (e.g., 4.25).

---

## 3. Triage Thresholds (Universal)
Unless specified otherwise in a project-specific SOP, the following thresholds apply:
*   **> 4.25:** **GREENLIGHT / LAB-READY**
*   **3.30 - 4.24:** **REFINE / BUILD MOAT**
*   **< 3.30:** **PIVOT / ARCHIVE**