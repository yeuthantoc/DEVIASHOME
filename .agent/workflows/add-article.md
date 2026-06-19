---
description: Add a new SEO article card to the Insights section (EN/KO/VI), and optionally scaffold its article page.
---

First, ask the user for the article **title** and **category** in English, plus the **Korean**
and **Vietnamese** versions. Offer to translate if they only give English, and confirm before continuing.

Then update `index.html`:

1. Inside the `.grid3` container in the Insights section, duplicate an existing `.acard` block.

2. Choose unique keys `ins_t<slug>` (title) and `ins_cat<slug>` (category). Wire the
   `<h3 data-i18n="ins_t<slug>">` and the `<span class="cat" data-i18n="ins_cat<slug>">`.
   Keep the "Read article" link using `data-i18n="ins_read"`.

3. Add both new keys under **all three** languages (`en`, `ko`, `vi`) in the `I18N` object.

4. Run `/i18n-check` to confirm everything is in sync.

**Optional — only if the user wants a real article page:**

5. Create `articles/<slug>.html`. Reuse the `<head>` (with a unique title + meta description),
   header, and footer from `index.html` as the page shell, then add the article body. Update
   the `read` link in the card to point to `articles/<slug>.html`. Keep the same color tokens and fonts.
