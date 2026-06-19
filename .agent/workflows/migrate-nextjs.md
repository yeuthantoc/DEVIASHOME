---
description: Migrate the single-file static site to Next.js (App Router) + next-intl with per-language URLs (/en /ko /vi), preserving the exact design, the EN/KO/VI content, GA4 + Meta Pixel, and SEO.
---

This is a large, structured migration. Work in order, keep the visual design **pixel-identical**
to `index.html`, and do not invent new colors or copy. Before writing code for next-intl,
consult the official docs at https://next-intl.dev/docs/getting-started/app-router and match the
**installed major version** of next-intl (the App Router API changes between majors).

## 0. Safety + setup
1. Confirm with the user before starting (this changes the whole project). Create a new branch:

```bash
git checkout -b migrate/nextjs
```

2. Keep the current site as the reference: move it to `legacy/index.html` (do not delete it).
   You will diff the rendered Next.js pages against this file at the end.

## 1. Scaffold Next.js
3. Scaffold a Next.js App Router project with TypeScript, Tailwind, ESLint and a `src/` directory.
   If the repo root is not empty, scaffold into a temp folder and merge the generated files in.

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

4. Install next-intl:

```bash
npm install next-intl
```

## 2. i18n routing (per the installed next-intl version)
5. Create `src/i18n/config.ts` exporting `locales = ['en','ko','vi'] as const` and `defaultLocale = 'en'`.

6. Create `src/i18n/routing.ts` with `defineRouting({ locales, defaultLocale, localePrefix: 'always' })`
   and export type-safe navigation via `createNavigation(routing)` (`Link, redirect, usePathname, useRouter`).

7. Create `src/i18n/request.ts` with `getRequestConfig` that resolves the locale (via `requestLocale`,
   falling back to `defaultLocale`) and loads `messages/${locale}.json`.

8. Create `src/middleware.ts` using `createMiddleware(routing)` with a matcher that skips
   `api`, `_next`, and static files. next-intl emits the `hreflang` alternate links automatically.

9. Wire next-intl into `next.config.ts` with the next-intl plugin.

## 3. Move the structure under [locale]
10. Create `src/app/[locale]/layout.tsx`: validate the locale with `hasLocale(routing.locales, locale)`
    (else `notFound()`), call `setRequestLocale(locale)`, set `<html lang={locale}>`, and wrap children
    in `NextIntlClientProvider`. Add `generateStaticParams()` returning the three locales.
11. Create `src/app/[locale]/page.tsx` as the home page that renders the section components (step 5 below).

## 4. Migrate the content (EN/KO/VI) — do not lose any string
12. Convert the `I18N` object from `legacy/index.html` into three message files:
    `messages/en.json`, `messages/ko.json`, `messages/vi.json`.
    Group keys into namespaces by section for maintainability: `nav`, `hero`, `trust`, `products`,
    `caps`, `process`, `insights`, `lead`, `form`, `footer`. Every key that exists in `en.json`
    **must** exist in `ko.json` and `vi.json` with the matching translation — keep them 1:1 in sync.
13. Also migrate the per-language SEO strings (the `META` object: title + description for each locale).

## 5. Port the design — keep it identical
14. Move the CSS variables / design tokens into Tailwind. Add to `tailwind.config.ts` theme.extend.colors:
    `charcoal #373435`, `leaf #6FA15B`, `leafDark #5a8649`, `sage #91B370`, `wood #B8865B`,
    `cream #F7F2E9`, `espresso #2a1e14`. Load fonts via `next/font`:
    Playfair Display + Noto Serif KR (display) and Inter + Noto Sans KR (body).
15. Split `index.html` into components under `src/components/`: `Header`, `Hero`, `TrustBar`,
    `Products`, `Capabilities`, `Process`, `Insights`, `LeadForm`, `Footer`. Server Components by
    default; mark only the interactive ones (`Header` language switcher + mobile menu, `LeadForm`)
    as `'use client'`. Use `useTranslations('namespace')` in client components and `getTranslations`
    in server components instead of `data-i18n`.
16. Rebuild the **language switcher** with next-intl navigation: the `Link` / `usePathname` from
    `src/i18n/routing.ts`, switching the locale segment while keeping the current path. Keep the
    transparent→solid-on-scroll header behavior, scroll-reveal, and `prefers-reduced-motion`.

## 6. Analytics — preserve exactly
17. Re-add GA4 and Meta Pixel via `next/script` (strategy `afterInteractive`) in `[locale]/layout.tsx`.
    Keep the placeholders `G-XXXXXXXXXX` and `YOUR_PIXEL_ID`.
18. Create a client util `trackLead(source)` that fires GA4 `generate_lead` and Pixel `Lead`.
    Every CTA (previously `data-cta`) calls it `onClick`; the lead form calls `trackLead('lead_form')`
    on successful submit.

## 7. Lead form → real submission
19. Make `LeadForm` a client component. On submit, POST the fields as JSON to a Route Handler at
    `src/app/api/lead/route.ts`, which forwards them to the n8n webhook read from
    `process.env.N8N_WEBHOOK_URL` (add it to `.env.local` and `.env.example`; never commit secrets).
    Keep the success state and the `trackLead('lead_form')` call. Handle and surface errors in the form's voice.

## 8. SEO
20. In `[locale]/page.tsx` (and layout) implement `generateMetadata` using `getTranslations` for the
    localized title/description. Set `metadata.alternates.languages` for `/en /ko /vi` + `x-default`,
    and `metadataBase` to the real domain (replace `www.your-domain.com`).
21. Add a `JsonLd` component re-emitting the Organization / LocalBusiness structured data from the legacy file.
22. Add `src/app/sitemap.ts` (all locales) and `src/app/robots.ts`.

## 9. Verify parity
23. Run the dev server and compare each locale against `legacy/index.html`:

```bash
npm run dev
```

   Check `/en`, `/ko`, `/vi`: layout, colors, fonts, every section, the switcher, the form, and that
   GA4 + Pixel fire on CTA clicks and form submit. The design must match the legacy file.
24. Confirm no message key is missing across the three JSON files (this replaces `/i18n-check` for the
    Next.js version). Run the build to catch type/route errors:

```bash
npm run build
```

## 10. Finalize
25. Update `AGENTS.md` to describe the new stack (Next.js App Router + next-intl, `src/` layout,
    messages in `messages/*.json`, the `/api/lead` route, env var `N8N_WEBHOOK_URL`) and update the
    `/i18n-check` rule to point at the JSON message files instead of the inline `I18N` object.
26. Summarize the migration and the remaining placeholders (GA4 ID, Pixel ID, domain, n8n URL, images).
    Do not merge to `main` — leave it on `migrate/nextjs` for the user to review.
