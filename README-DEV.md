# Developer README - business-dev

## Stack Overview
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables (Dossier Engine)
- **Governance:** Relational Task Board (`TASKBOARD.db`)

## Project Standards
- **Line Endings:** CRLF (\r\n) is the mandatory standard for all files.
- **Indentation:** 2 spaces for TSX/JSON; 4 spaces for PS1/PY.
- **Component Rules:** 
  - Use `DossierEngineV2` for all venture dossiers.
  - Maintain the "Junior Legal" 5"x8" print engine standards.

## Core Commands (PS Commander)
- `tb-report`: View project status and P-Score priority.
- `tb-update`: Task and Epic management.
- `Read-ProjectFiles -Forensic`: Establish ground truth for patching.

## Deployment & Routing
- Dossiers are routed via `app/[seed-slug]/page.tsx`.
- Branding assets are stored in `public/`.