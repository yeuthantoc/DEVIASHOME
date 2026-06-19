---
description: Pre-flight checks, then commit and push to deploy the site.
allowed-tools: Bash(grep:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

Deploy the site after pre-flight checks:

1. Verify the trilingual content is in sync (the `/i18n-check` checks). If any key is missing
   or out of sync across en/ko/vi, **stop** and report — do not deploy until it passes.

2. Check for leftover production placeholders (read-only):

```bash
grep -nE "G-XXXXXXXXXX|YOUR_PIXEL_ID|your-domain\.com" index.html || echo "OK: no placeholders left"
```

   If any remain (GA4 ID, Meta Pixel ID, or the domain), list them and ask me before continuing.

3. Stage and commit (ask me for the message if unsure):

```bash
git add -A && git commit -m "Update site"
```

4. Push to main (this triggers the connected Vercel / Netlify deploy):

```bash
git push origin main
```

5. Report the result. If the host returns a deploy URL, share it; otherwise tell me to check
   the Vercel/Netlify dashboard.
