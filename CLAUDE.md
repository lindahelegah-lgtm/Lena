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
