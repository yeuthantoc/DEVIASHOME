---
description: Verify every data-i18n key exists in all three languages (en/ko/vi) and flag any untranslated visible text in index.html.
---

1. Read `index.html`.

2. Collect every key used in the markup as `data-i18n="..."`.

3. Collect every key defined under `en`, `ko`, and `vi` inside the `I18N` object.

4. Report problems:
   - keys used in the HTML but **missing** from any of the three languages;
   - keys defined in one language but **not** in the others (out-of-sync);
   - any **visible user-facing text** in the markup that is NOT wired with `data-i18n`
     (ignore `<svg>`, `<script>`, comments, and placeholder IDs).

5. Output a compact table: `key | en | ko | vi | status`, then a short list of any untranslated text found.

6. Do **not** edit files in this workflow — only report. If fixes are needed, ask the user
   whether to add the missing translations.
