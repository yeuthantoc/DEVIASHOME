---
description: Add a new SEO article card to the Insights section (EN/KO/VI), optionally with its page.
argument-hint: [english article title]
---

Add a new SEO article card to the Insights section of `index.html`.

The English title is: $ARGUMENTS
If that is empty, ask me for it. Also ask me for the **category**, and the **Korean** and
**Vietnamese** versions of both (offer to translate, then confirm).

Then:
1. Inside the `.grid3` container, duplicate an existing `.acard` block.
2. Choose unique keys `ins_t<slug>` (title) and `ins_cat<slug>` (category). Wire
   `<h3 data-i18n="ins_t<slug>">` and `<span class="cat" data-i18n="ins_cat<slug>">`.
   Keep the "Read article" link using `data-i18n="ins_read"`.
3. Add both keys under **all three** languages (`en`, `ko`, `vi`) in the `I18N` object.
4. Verify everything is in sync (the `/i18n-check` checks).

**Optional — only if I ask for a real page:**
5. Create `articles/<slug>.html` reusing the `<head>` (unique title + meta description),
   header, and footer from `index.html` as the shell, then add the article body. Point the
   card's `read` link to `articles/<slug>.html`. Keep the same color tokens and fonts.
