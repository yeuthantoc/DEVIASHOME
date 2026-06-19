---
description: Verify every data-i18n key exists in all three languages (en/ko/vi) and flag untranslated text.
---

Read `index.html` and verify the trilingual content is complete and in sync:

1. Collect every key used in the markup as `data-i18n="..."`.
2. Collect every key defined under `en`, `ko`, and `vi` in the `I18N` object.
3. Report problems:
   - keys used in the HTML but **missing** from any of the three languages;
   - keys defined in one language but **not** in the others (out of sync);
   - any **visible user-facing text** in the markup NOT wired with `data-i18n`
     (ignore `<svg>`, `<script>`, comments, and placeholder IDs).
4. Output a compact table: `key | en | ko | vi | status`, then list any untranslated text found.

Only report — do not edit files unless I ask. If fixes are needed, ask whether to add the missing translations.
