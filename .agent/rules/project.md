---
trigger: always_on
description: DEVIAS HOME project guardrails — read before every edit.
---

# DEVIAS HOME — project rules

Always read `AGENTS.md` at the project root first. Then follow these guardrails on every change:

- **Trilingual (EN/KO/VI).** Every user-facing string must be rendered via a `data-i18n="key"`
  attribute and must exist under `en`, `ko`, and `vi` in the `I18N` object in `index.html`.
  Never hardcode visible text. English is the default. After any copy change, run `/i18n-check`.
- **Do not break analytics.** Keep the GA4 + Meta Pixel snippets in `<head>`, the `trackLead()`
  function, the `data-cta` hooks, and the form's `trackLead('lead_form')` call.
- **Colors only from CSS variables** in `:root`. Do not introduce new brand colors.
- **Stay a dependency-free single-file static site** (`index.html`) unless explicitly asked to migrate.
- Preserve responsive layout, visible keyboard focus, and `prefers-reduced-motion`.
