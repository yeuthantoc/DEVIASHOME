---
description: Migrate the single-file static site to Next.js (App Router) + next-intl with /en /ko /vi URLs, preserving the design, content, GA4/Pixel, and SEO.
---

This is a large, structured migration. Work in order, keep the visual design **pixel-identical**
to `index.html`, and do not invent new colors or copy. Before writing next-intl code, consult
the official docs at https://next-intl.dev/docs/getting-started/app-router and match the
**installed major version** (the App Router API changes between majors). Pause for my confirmation
before each heavyweight step (scaffolding, installs, build).

## 0. Safety + setup
1. Create a new branch: `git checkout -b migrate/nextjs`.
2. Keep the current site as reference: move it to `legacy/index.html` (do not delete it). You will
   diff the rendered Next.js pages against this file at the end.

## 1. Scaffold
3. Scaffold Next.js (TypeScript, Tailwind, ESLint, `src/`, App Router, import alias `@/*`).
   If the repo root is not empty, scaffold into a temp folder and merge the files in.
   Use `npx create-next-app@latest` with flags so it is non-interactive.
4. Install next-intl: `npm install next-intl`.

## 2. i18n routing (per the installed next-intl version)
5. `src/i18n/config.ts`: `locales = ['en','ko','vi'] as const`, `defaultLocale = 'en'`.
6. `src/i18n/routing.ts`: `defineRouting({ locales, defaultLocale, localePrefix: 'always' })`,
   plus type-safe navigation via `createNavigation(routing)` (`Link, redirect, usePathname, useRouter`).
7. `src/i18n/request.ts`: `getRequestConfig` resolving the locale (via `requestLocale`, falling back
   to `defaultLocale`) and loading `messages/${locale}.json`.
8. `src/middleware.ts`: `createMiddleware(routing)` with a matcher skipping `api`, `_next`, static
   files. next-intl emits the `hreflang` alternate links automatically.
9. Wire the next-intl plugin into `next.config.ts`.

## 3. Move structure under [locale]
10. `src/app/[locale]/layout.tsx`: validate locale with `hasLocale(...)` (else `notFound()`),
    `setRequestLocale(locale)`, `<html lang={locale}>`, wrap children in `NextIntlClientProvider`,
    add `generateStaticParams()` for the three locales.
11. `src/app/[locale]/page.tsx`: render the section components (step 15).

## 4. Migrate content (EN/KO/VI) — lose nothing
12. Convert the `I18N` object from `legacy/index.html` into `messages/en.json`, `messages/ko.json`,
    `messages/vi.json`. Group keys into namespaces by section (`nav`, `hero`, `trust`, `products`,
    `caps`, `process`, `insights`, `lead`, `form`, `footer`). Every key in `en.json` MUST exist in
    `ko.json` and `vi.json`, 1:1.
13. Migrate the per-language SEO strings (the `META` object: title + description per locale).

## 5. Port the design — keep it identical
14. Add the tokens to `tailwind.config.ts` theme.extend.colors: `charcoal #373435`, `leaf #6FA15B`,
    `leafDark #5a8649`, `sage #91B370`, `wood #B8865B`, `cream #F7F2E9`, `espresso #2a1e14`.
    Load fonts via `next/font`: Playfair Display + Noto Serif KR (display), Inter + Noto Sans KR (body).
15. Split `index.html` into components under `src/components/`: `Header`, `Hero`, `TrustBar`,
    `Products`, `Capabilities`, `Process`, `Insights`, `LeadForm`, `Footer`. Server Components by
    default; mark only the interactive ones (`Header` switcher + mobile menu, `LeadForm`) as
    `'use client'`. Use `useTranslations(...)` / `getTranslations(...)` instead of `data-i18n`.
16. Rebuild the language switcher with next-intl navigation (`Link` / `usePathname` from
    `src/i18n/routing.ts`), switching the locale segment while keeping the current path. Keep the
    transparent→solid header, scroll-reveal, and `prefers-reduced-motion`.

## 6. Analytics — preserve exactly
17. Re-add GA4 + Meta Pixel via `next/script` (strategy `afterInteractive`) in `[locale]/layout.tsx`.
    Keep the placeholders `G-XXXXXXXXXX` and `YOUR_PIXEL_ID`.
18. Client util `trackLead(source)` → GA4 `generate_lead` + Pixel `Lead`. Every CTA calls it
    `onClick`; the form calls `trackLead('lead_form')` on successful submit.

## 7. Lead form → real submission
19. `LeadForm` is a client component. On submit, POST JSON to a Route Handler `src/app/api/lead/route.ts`
    that forwards to the n8n webhook from `process.env.N8N_WEBHOOK_URL` (add to `.env.local` and
    `.env.example`; never commit secrets). Keep the success state + `trackLead('lead_form')`. Handle
    errors in the form's voice.

## 8. SEO
20. `generateMetadata` (page + layout) via `getTranslations` for localized title/description. Set
    `metadata.alternates.languages` for `/en /ko /vi` + `x-default`, and `metadataBase` to the real
    domain (replace `www.your-domain.com`).
21. A `JsonLd` component re-emitting the Organization / LocalBusiness data from the legacy file.
22. Add `src/app/sitemap.ts` (all locales) and `src/app/robots.ts`.

## 9. Verify parity
23. `npm run dev` and compare `/en`, `/ko`, `/vi` against `legacy/index.html`: layout, colors,
    fonts, every section, switcher, form, and that GA4 + Pixel fire on CTA + submit. Must match.
24. Confirm no message key is missing across the three JSON files. Run `npm run build` to catch errors.

## 10. Finalize
25. Update `AGENTS.md` + `CLAUDE.md` for the new stack (Next.js App Router + next-intl, `src/` layout,
    `messages/*.json`, the `/api/lead` route, env `N8N_WEBHOOK_URL`) and update the `/i18n-check`
    command to read the JSON message files instead of the inline `I18N` object.
26. Summarize the migration and remaining placeholders (GA4 ID, Pixel ID, domain, n8n URL, images).
    Do not merge to `main` — leave it on `migrate/nextjs` for me to review.
