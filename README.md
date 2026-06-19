# DEVIAS HOME — Wooden Kitchenware (B2B Export)

Marketing + lead-generation website for **DEVIAS HOME — Kitchen Deco**, a Vietnamese
manufacturer and B2B exporter of food-safe wooden kitchenware (OEM / ODM).

Trilingual **EN / KO / VI**, warm brand palette from the logo, GA4 + Meta Pixel ready,
SEO meta + JSON-LD, responsive. Built as a single static file — no build step.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Before going live
Replace the placeholders (see `AGENTS.md` for the full list):
- GA4 ID `G-XXXXXXXXXX` and Meta Pixel ID `YOUR_PIXEL_ID`
- Your domain `www.your-domain.com`
- Hero / product / factory images
- Connect the lead form (the `// TODO: send data...` line) to your n8n webhook or email service

## Deploy
Static host (Vercel / Netlify / Cloudflare Pages). No build command; output dir = repo root.

## Structure
```
devias-home/
├── index.html      # the entire website (HTML + CSS + JS)
├── AGENTS.md       # context for AI coding agents (Antigravity reads this)
├── README.md
└── .gitignore
```

## Working in Antigravity
Open this folder as a workspace — Antigravity auto-loads `AGENTS.md` (v1.20.3+). It will
then know the brand, the trilingual rule, and the placeholders to fill.
