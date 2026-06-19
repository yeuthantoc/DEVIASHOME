---
description: Pre-flight checks, then commit and push to deploy the site.
allowed-tools: Bash(grep:*), Bash(npm run build:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

Deploy the Next.js site after pre-flight checks:

1. Verify the trilingual content is in sync (the `/i18n-check` checks over
   `messages/*.json`). If any key is missing or out of sync across en/ko/vi,
   **stop** and report — do not deploy until it passes.

2. Production build must pass (catches type/compile errors):

```bash
npm run build
```

   If it fails, stop and report the error — do not deploy.

3. Check for leftover production placeholders (read-only):

```bash
grep -rnE "G-XXXXXXXXXX|YOUR_PIXEL_ID|your-domain\.com" src messages || echo "OK: no placeholders left"
```

   Also confirm `N8N_WEBHOOK_URL` is set in the host's environment (it is server-only;
   `.env.local` is not deployed). If any placeholder remains (GA4 ID, Meta Pixel ID,
   domain) or the webhook is unset, list them and ask me before continuing.

4. Stage and commit (ask me for the message if unsure):

```bash
git add -A && git commit -m "Update site"
```

5. Push (this triggers the connected Vercel / Netlify / Cloudflare Pages deploy).
   The build command is `next build`; the framework preset auto-detects Next.js —
   no custom output directory needed:

```bash
git push origin main
```

6. Report the result. If the host returns a deploy URL, share it; otherwise tell me
   to check the Vercel/Netlify dashboard.
