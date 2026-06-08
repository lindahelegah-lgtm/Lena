# CLAUDE.md

This file provides guidance to Claude Code (and other AI assistants) when working
with code in this repository.

## Project Overview

`Lena` hosts the **Building Ideas Limited** marketing website — a multi-page site for
a Ghana-based construction company specialising in Project Management, Design & Build,
and General & Maintenance Construction.

- **Language / runtime:** Static HTML5, CSS3, vanilla JavaScript (ES5-safe, no build step)
- **Package manager / build tool:** None — zero dependencies, no bundler
- **Entry point:** `index.html`
- **Brand:** deep navy `#16225A` (from the logo) + amber `#F5A623` accent;
  fonts Lexend (headings) + Source Sans 3 (body), loaded from Google Fonts with
  system-font fallbacks so the site degrades gracefully offline.

## Repository Structure

```
.
├── index.html        # Home (hero, clients slider, services, projects, CTA)
├── services.html     # Services + sectors + process
├── projects.html     # Case Studies (filterable project grid)
├── about.html        # Company story, mission, team, capacity
├── contact.html      # Contact details + strategy-session form
├── css/styles.css    # Single hand-crafted design-system stylesheet
├── js/main.js        # Nav, logo marquee, filters, scroll reveals, form
└── assets/           # logo.svg, favicon.svg
```

Header and footer markup is duplicated across pages (intentionally — keeps the site
buildless and viewable directly via `file://`). When editing nav/footer, update every
HTML file consistently.

## Development Workflow

### Setup

No install required. Serve the folder with any static server:

```bash
python3 -m http.server 8000      # then open http://127.0.0.1:8000
# or: npx serve .
```

Opening `index.html` directly in a browser also works.

### Common Commands

| Task       | Command                                                        |
| ---------- | ------------------------------------------------------------- |
| Run (dev)  | `python3 -m http.server 8000`                                |
| Screenshot | Playwright via Node (see git history) against the local server |
| Build      | _None — static files are the deliverable_                     |
| Test       | _None yet (manual/visual QA)_                                 |
| Lint       | _None configured (Prettier available globally if desired)_   |

## Coding Conventions

- **No frameworks / no build:** keep it dependency-free and directly openable.
- **CSS:** one stylesheet driven by CSS custom properties (design tokens in `:root`).
  Reuse existing utility/component classes (`.btn`, `.card`, `.section`, `.proj-card`,
  `.marquee`, etc.) before adding new CSS.
- **JS:** vanilla, framework-free, defensively guarded (feature-detect before use).
  Scroll-reveal is a progressive enhancement gated behind the `html.js` class so
  content stays visible without JavaScript.
- **Accessibility:** maintain 4.5:1 text contrast, visible focus states, semantic
  landmarks, and `prefers-reduced-motion` handling (already in `styles.css`).
- **Company facts** (projects, values, contacts, team) come from the company profile;
  verify against source material before changing figures.

## Tooling & Skills

### Installed Skills (`.claude/skills/`)

- **`ui-ux-pro-max`** — UI/UX design-intelligence skill from
  [`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
  Self-contained: `SKILL.md` plus CSV design databases (`data/`) and Python search
  scripts (`scripts/`). Requires Python 3. Query the database directly with, e.g.:

  ```bash
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
  python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown
  ```

## MCP Servers

Project-scoped MCP servers are declared in `.mcp.json` at the repo root. Claude Code
loads them at startup, so **changes require a session restart**; secrets are read
from environment variables and must **never** be committed.

### `@21st-dev/magic` — Magic MCP (UI component generation)

Generates modern UI components from natural-language prompts
([21st.dev Magic](https://21st.dev/magic)). Configured in `.mcp.json` to run via
`npx @21st-dev/magic@latest`.

**Activation steps:**

1. Generate an API key at <https://21st.dev/magic/console>.
2. Set `TWENTY_FIRST_API_KEY` as an environment secret (in the Claude Code web
   environment settings, so it is present when the container starts). The key is
   referenced as `${TWENTY_FIRST_API_KEY}` in `.mcp.json` — do not hard-code it.
3. Restart the session for the MCP server to load.

> **Network note:** Magic fetches its package from `registry.npmjs.org` and calls
> the 21st.dev API at runtime. In restricted remote environments, ensure the
> [network policy](https://code.claude.com/docs/en/claude-code-on-the-web) allows
> outbound access to those hosts.

## Git & Branch Workflow

- The default development branch for AI-assisted work is configured per task; do
  **not** push to a different branch without explicit permission.
- Write clear, descriptive commit messages.
- Do **not** open pull requests unless explicitly requested.
- Push with `git push -u origin <branch-name>`.

## Notes for AI Assistants

- This repository is currently a blank slate. When scaffolding new code, establish
  consistent structure and conventions, then document them here.
- Keep this file in sync with the codebase: whenever you add tooling, scripts, or
  conventions, update the relevant section above.
- Verify commands by running them before documenting them as working.
