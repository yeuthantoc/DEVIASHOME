# CLAUDE.md

Project memory for Claude Code. The full brief, design tokens, hard rules, and placeholder
list live in `AGENTS.md` and are imported here:

@AGENTS.md

## Working agreement
- Follow the **hard rules** in AGENTS.md on every change (especially: keep EN/KO/VI in sync,
  never break GA4/Pixel, colors only from the CSS tokens).
- After any change to visible copy, run the `/i18n-check` checks before finishing.
- Prefer small, low-complexity changes. Don't add dependencies or a build step unless asked.

## Custom commands
Project slash commands live in `.claude/commands/`. Available: `/preview`, `/i18n-check`,
`/add-product`, `/add-article`, `/deploy`, `/migrate-nextjs`.
