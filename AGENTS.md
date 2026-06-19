# AGENTS.md — DEVIAS HOME website

Shared project context. For Claude Code this is imported by `CLAUDE.md`.

## What this is
Marketing + lead-generation website for **DEVIAS HOME — Kitchen Deco**, a Vietnamese
**manufacturer and B2B exporter** of food-safe **wooden kitchenware** (cutting boards,
bowls & plates, serving trays, utensils). Offers **OEM / ODM**. Already sells to major
Korean retailers; goal is to win more international importers and retail buyers.

Primary jobs of the site: build trust with importers, and **capture leads** (catalog/quote requests).

## Tech stack (current)
- **Next.js 16 (App Router) + TypeScript**, `src/` layout, import alias `@/*`.
- **next-intl 4** for i18n with per-language URLs: `/en` `/ko` `/vi` (`localePrefix: 'always'`).
  - Routing in `src/i18n/{config,routing,request}.ts`; locale detection + hreflang in
    `src/middleware.ts`; plugin wired in `next.config.ts`.
  - Messages live in `messages/{en,ko,vi}.json` (namespaced by section).
- **Tailwind CSS v4** (CSS-first). Brand tokens registered in an `@theme` block in
  `src/app/globals.css`; the legacy CSS is ported verbatim in the same file (class-based,
  so the design stays pixel-identical).
- **Fonts via `next/font`**: Playfair Display + Inter (latin/vietnamese) and Noto Serif KR +
  Noto Sans KR (full Korean coverage), exposed as CSS variables used by `--ff-display`/`--ff-body`.
- UI split into `src/components/*` (Server Components by default; `Header` + `LeadForm` are
  `'use client'`). The legacy single-file site is kept for reference at `legacy/index.html`.
- Lead form posts to the Route Handler `src/app/api/lead/route.ts`, which forwards to the
  n8n webhook in `N8N_WEBHOOK_URL` (`.env.local`, see `.env.example`).
- Run: `npm run dev` (→ http://localhost:3000, redirects to `/en`). Build: `npm run build`.

## Hard rules — do not break these
1. **Trilingual (EN / KO / VI).** Every user-facing string lives in `messages/{en,ko,vi}.json`
   and is rendered via `useTranslations`/`getTranslations` (namespace + key). When you add or
   change copy, update **all three** files 1:1. Never hardcode visible text. English is the default.
2. **Analytics must keep working.** GA4 + Meta Pixel load via `next/script` in
   `src/components/Analytics.tsx`. `trackLead(source)` (`src/lib/track.ts`) fires `generate_lead`
   (GA4) and `Lead` (Pixel). CTAs call it on click; `LeadForm` calls `trackLead('lead_form')` on
   successful submit. Do not remove these.
3. **Colors only from the design tokens** (CSS variables in `:root` + the Tailwind `@theme`
   block in `globals.css`). No new brand colors.
4. **Accessibility + responsive** stay intact: visible focus, mobile menu, `prefers-reduced-motion`
   (scroll-reveal is handled by `src/components/RevealInit.tsx`).

## Design tokens (from the DEVIAS HOME logo)
- `--charcoal #373435` (text)  · `--leaf #6FA15B` (primary CTA / accent)
- `--sage #91B370` (secondary) · `--wood #B8865B` (warm wood accent)
- `--cream #F7F2E9` (section bg) · white base
- Display font: Playfair Display (Latin/Vietnamese) + Noto Serif KR (Korean)
- Body font: Inter + Noto Sans KR

## Page sections (one component each, rendered in `src/app/[locale]/page.tsx`)
`Header` (transparent then solid on scroll) · `Hero` + `TrustBar` · `Products` (4 categories) ·
`Capabilities` / Food-Safe · `Process` · `Insights` (SEO blog space) · `LeadForm` · `Footer`.

## Placeholders to replace
- **GA4 ID**: `G-XXXXXXXXXX` — in `src/components/Analytics.tsx`
- **Meta Pixel ID**: `YOUR_PIXEL_ID` — in `src/components/Analytics.tsx`
- **Domain**: `www.your-domain.com` — `SITE_URL` in `src/lib/site.ts` (drives `metadataBase`,
  canonical, og, hreflang, sitemap, robots, JSON-LD)
- **n8n webhook**: `N8N_WEBHOOK_URL` in `.env.local` (and the host's env for production)
- **Hero image**: `.hero { background: ... }` in `globals.css` — add `url('/hero.jpg')` as the first layer
- **Product / factory images**: the `.ph` placeholder blocks (currently CSS wood gradients)
- **Korean retailer logos**: `TrustBar.tsx` `.retailers` (plain text — only use official logos if authorized)
- **OG image**: `/og-image.jpg` referenced in `[locale]/layout.tsx` metadata

## Custom commands (.claude/commands/) — type the slash command in Claude Code
- `/preview` — serve the site locally for preview.
- `/i18n-check` — verify every key exists and is in sync across `messages/{en,ko,vi}.json`.
- `/add-product <english name>` — add a product category card, wired for all three languages.
- `/add-article` — add an Insights/SEO article card (and optionally its page).
- `/deploy` — pre-flight checks, then commit & push to deploy.
- `/migrate-nextjs` — migrate to Next.js (App Router) + next-intl with /en /ko /vi URLs, keeping the design.

## Roadmap (good next tasks)
- Set `N8N_WEBHOOK_URL` and confirm leads land in n8n (the route already forwards them).
- Add real product photos and a Products detail page / catalog (per-locale routes).
- Real article pages for the Insights/SEO section (slug-based, localized).
- Update `/add-product` and `/add-article` to edit components + `messages/*.json`
  (they still describe the legacy single-file workflow).

## Deploy
Vercel / Netlify / Cloudflare Pages with the **Next.js** preset (build command `next build`,
auto-detected — no manual output dir). Set `N8N_WEBHOOK_URL` and the GA4/Pixel/domain values
in the host's environment / code before launch.
