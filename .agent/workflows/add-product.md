---
description: Add a new product category card to the Products section, fully wired for EN/KO/VI.
---

First, ask the user for the new category name in **English**, plus its **Korean** and
**Vietnamese** translations. If they don't provide KO/VI, offer to translate and confirm before continuing.

Then make the change in `index.html`:

1. Inside the `.grid4` container in the Products section, duplicate an existing `.pcard`
   block to use as the template for the new card.

2. Pick a short, unique i18n key in the form `cat_<slug>` (e.g. `cat_spoons`). Set the card's
   `<h3 data-i18n="cat_<slug>">`. Keep the existing OEM/ODM tag exactly as is
   (`<span data-i18n="oem_tag">`).

3. Keep the wood-gradient `.ph` placeholder, or swap the inline `<svg>` icon for one that
   fits the new category.

4. In the `I18N` object, add the `cat_<slug>` key with the correct value under **all three**
   languages: `en`, `ko`, `vi`.

5. Run the `/i18n-check` workflow to confirm the new key is present and in sync across languages.

6. Summarise what was added (the key and the three translations).
