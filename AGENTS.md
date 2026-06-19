# AGENTS.md — DEVIAS HOME website

Shared project context. For Claude Code this is imported by `CLAUDE.md`.

## What this is
Marketing + lead-generation website for **DEVIAS HOME — Kitchen Deco**, a Vietnamese
**manufacturer and B2B exporter** of food-safe **wooden kitchenware** (cutting boards,
bowls & plates, serving trays, utensils). Offers **OEM / ODM**. Already sells to major
Korean retailers; goal is to win more international importers and retail buyers.

Primary jobs of the site: build trust with importers, and **capture leads** (catalog/quote requests).

## Tech stack (current)
- **Single-file static site**: `index.html` (HTML + CSS in `<style>` + vanilla JS in `<script>`).
- No build step, no framework, no dependencies. Open the file or serve statically.
- Fonts via Google Fonts (Playfair Display, Inter, Noto Serif KR, Noto Sans KR).
- Keep it dependency-free and low-complexity unless explicitly asked to migrate.

## Hard rules — do not break these
1. **Trilingual (EN / KO / VI).** Every user-facing string lives in the `I18N` object in
   `index.html` with keys for `en`, `ko`, `vi`, rendered via a `data-i18n="key"` attribute.
   When you add or change copy, update all three languages and wire the element with
   `data-i18n`. Never hardcode visible text. English is the default.
2. **Analytics must keep working.** GA4 + Meta Pixel snippets are in `<head>`. `trackLead(source)`
   fires `generate_lead` (GA4) and `Lead` (Pixel). CTA links use `data-cta="..."`; the lead form
   calls `trackLead('lead_form')` on submit. Do not remove these.
3. **Colors only from the design tokens** (CSS variables in `:root`). No new brand colors.
4. **Accessibility + responsive** stay intact: visible focus, mobile menu, `prefers-reduced-motion`.

## Design tokens (from the DEVIAS HOME logo)
- `--charcoal #373435` (text)  · `--leaf #6FA15B` (primary CTA / accent)
- `--sage #91B370` (secondary) · `--wood #B8865B` (warm wood accent)
- `--cream #F7F2E9` (section bg) · white base
- Display font: Playfair Display (Latin/Vietnamese) + Noto Serif KR (Korean)
- Body font: Inter + Noto Sans KR

## Page sections (top to bottom in index.html)
Header (transparent then solid on scroll) · Hero + trust bar · Products (4 categories) ·
Capabilities / Food-Safe · Process · Insights (SEO blog space) · Lead form · Footer.

## Placeholders to replace (search the file for these)
- **GA4 ID**: `G-XXXXXXXXXX`
- **Meta Pixel ID**: `YOUR_PIXEL_ID`
- **Domain**: `www.your-domain.com` (canonical, og, hreflang, JSON-LD)
- **Hero image**: `.hero { background: ... }` — add `url('hero.jpg')` as the first layer
- **Product / factory images**: the `.ph` placeholder blocks (currently CSS wood gradients)
- **Korean retailer logos**: `.retailers` (plain text — only use official logos if authorized)
- **Form endpoint**: the `// TODO: send data...` line in the `leadForm` submit handler
  (target: an n8n webhook at automation.jobbim.vn or an email service)

## Custom commands (.claude/commands/) — type the slash command in Claude Code
- `/preview` — serve the site locally for preview.
- `/i18n-check` — verify every `data-i18n` key exists and is in sync across en/ko/vi.
- `/add-product <english name>` — add a product category card, wired for all three languages.
- `/add-article` — add an Insights/SEO article card (and optionally its page).
- `/deploy` — pre-flight checks, then commit & push to deploy.
- `/migrate-nextjs` — migrate to Next.js (App Router) + next-intl with /en /ko /vi URLs, keeping the design.

## Roadmap (good next tasks)
- Connect the lead form to an n8n webhook (POST JSON of all fields).
- Add real product photos and a Products detail page / catalog.
- Real article pages for the Insights/SEO section (slug-based).
- Optional: migrate to Next.js + next-intl for per-language URLs (use /migrate-nextjs).

## Deploy
Static host (Vercel / Netlify / Cloudflare Pages). No build command; output directory is the repo root.
