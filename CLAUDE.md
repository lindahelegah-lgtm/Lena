# CLAUDE.md

This file provides guidance to Claude Code (and other AI assistants) when working
with code in this repository.

> **Status: Scaffold.** As of the last update, this repository was empty (no
> source code committed). The sections below are a template to be filled in as the
> codebase grows. When real code lands, replace the placeholder notes with concrete,
> verified details (commands, paths, conventions) and remove this status banner.

## Project Overview

`Lena` — _describe the project's purpose, what it does, and who it's for here._

- **Language / runtime:** _TBD_
- **Package manager / build tool:** _TBD_
- **Entry point:** _TBD_

## Repository Structure

_Document the top-level layout once files exist, e.g.:_

```
.
├── src/        # application source
├── tests/      # test suite
└── ...
```

## Development Workflow

### Setup

```bash
# Install dependencies (update once a package manager is chosen)
# e.g. npm install / pip install -r requirements.txt / go mod download
```

### Common Commands

| Task   | Command   |
| ------ | --------- |
| Build  | _TBD_     |
| Run    | _TBD_     |
| Test   | _TBD_     |
| Lint   | _TBD_     |
| Format | _TBD_     |

_Update this table with the real commands. Prefer documenting the exact invocation
(including any required flags or env vars) so they can be run without guesswork._

## Coding Conventions

_Capture conventions the codebase actually follows, for example:_

- Code style / formatter and how it's enforced
- Naming conventions
- Directory/module organization rules
- Testing expectations for new code

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
