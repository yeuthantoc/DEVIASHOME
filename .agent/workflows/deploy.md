---
description: Pre-flight checks, then commit and push to deploy the site.
---

1. Run the `/i18n-check` workflow. If any key is missing or out of sync across en/ko/vi,
   stop and report — do not deploy until it passes.

2. Check that production placeholders have been replaced in `index.html`. This is read-only.

// turbo
```bash
grep -nE "G-XXXXXXXXXX|YOUR_PIXEL_ID|your-domain\.com" index.html && echo "^ placeholders still present — fix before deploy" || echo "OK: no placeholders left"
```

   If any placeholder is still present (GA4 ID, Meta Pixel ID, or the domain), list them and
   ask the user whether to continue anyway.

3. Stage and commit the changes with a clear message (ask the user for the message if unsure):

```bash
git add -A && git commit -m "Update site"
```

4. Push to the main branch. This triggers the connected Vercel / Netlify deployment:

```bash
git push origin main
```

5. Report the result. If the host gives a deploy URL, share it; otherwise tell the user to
   check their Vercel/Netlify dashboard for the live deployment.
