---
description: Add a new product category card to the Products section, wired for EN/KO/VI.
argument-hint: [english category name]
---

Add a new product category to the Products section of `index.html`.

The English category name is: $ARGUMENTS
If that is empty, ask me for it. Also ask me for — or offer to translate and then confirm — the **Korean** and **Vietnamese** names.

Then:
1. Inside the `.grid4` container, duplicate an existing `.pcard` block as the template.
2. Pick a short, unique key `cat_<slug>` (e.g. `cat_spoons`). Set `<h3 data-i18n="cat_<slug>">`
   and keep the OEM/ODM tag exactly (`<span data-i18n="oem_tag">`).
3. Keep the wood-gradient `.ph` placeholder, or swap the inline `<svg>` icon for one that fits.
4. In the `I18N` object, add `cat_<slug>` under **all three** languages: `en`, `ko`, `vi`.
5. Verify the new key is present and in sync across all three languages (the `/i18n-check` checks).
6. Summarize what was added (the key and the three translations).
