# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The site showcases various projects across categories including FOSS, AI, Art, Speaking, and more. It's deployed to Digital Ocean using Docker containers and GitHub Actions.

## Development Commands

### Initial Setup

This repo uses **npm**, not pnpm. Both `package-lock.json` files are the source
of truth, and CI (`.github/workflows/`) and `portfolio/Dockerfile` both run
`npm ci`. Do not introduce pnpm — a `pnpm-lock.yaml` would diverge from what CI
and the production image actually build.

```bash
# Install dependencies (root holds Biome; portfolio holds the app)
make ci.install

# Or manually:
npm ci
cd portfolio && npm ci
```

### Development
```bash
# Start development server (from portfolio directory)
cd portfolio
npm run dev

# Development server runs at localhost:5173 with hot reload
# Use --host flag to expose on network
```

### Linting and Formatting
```bash
# Run all pre-commit hooks (includes Biome and TypeScript checks)
make ci.pre-commit

# Or manually:
pre-commit run --all-files

# Biome for linting/formatting (JS/TS files)
npx biome check --write

# Note: Biome uses tab indentation and double quotes (see biome.json)
```

### Build and Type Checking
```bash
# Build production bundle
cd portfolio
npm run build

# Type checking is run as part of build (tsc && vite build)
```

### Docker
```bash
# Start with docker-compose
make up

# Build and start
make build

# Stop containers
make down
```

### Deployment

Production is the DigitalOcean App Platform app `dc34af0e-170f-4861-94ee-a385ce011ea2`
(`ashtonportfolio`), serving <https://ashton.honnecke.us>. It is GitHub-sourced
and builds `portfolio/Dockerfile` from `main`.

```bash
# Deploy main -> DO, wait for a terminal phase, verify production
make deploy

# Read-only: current deployment phase + what's actually live
make deploy.status

# Smoke-verify any target (same command, local or prod)
make verify.live
BASE_URL=http://localhost:3456 make verify.live
```

**Do not verify a deploy with HTTP status codes.** Production runs
`serve -s dist`, which rewrites every unmatched path to `index.html`, so
`/anything` returns 200 with a full page. A route that doesn't exist still
200s. `make verify.live` therefore asserts on served bytes: it pulls the
content-hashed Vite bundle and checks for expected markers, checks that no
client identifiers leaked, and checks `/cv/cv.pdf` returns real PDF magic
bytes rather than an SPA fallback page.

**Deployments race, and that's expected.** The DO app has
`deploy_on_push: true` on `main`, *and* `.github/workflows/webapp_publish_on_release.yaml`
runs `doctl apps create-deployment`. Both fire on a push to main, so the
history is full of push-triggered rows at `CANCELED` superseded by a `manual`
row. That is normal. It also means a green push does not prove a deploy —
always confirm with `make deploy.status`.

## Architecture

### Routing Structure
The application uses react-router-dom with a tile-based navigation system:

1. **NavMap** (`src/NavMap.tsx`): Central configuration object that defines all portfolio items. Each entry contains:
   - `link`: URL or route path
   - `image`: Card image for the tile
   - `text`: Display name
   - `category`: Project category (FOSS, AI, Art, Speaking, etc.)
   - `detail`: React component for the abstract preview

2. **App Component** (`src/App.tsx`):
   - Main component renders all routes
   - `Main` function renders the grid of tiles on the home page
   - `Tile` component renders individual project cards, pulling data from `navMap`
   - Routes defined for each project detail page

3. **Details** (`src/Details.tsx`): Contains full detail components for each project (e.g., `BigWheel()`, `Consolo()`, etc.). This is a large file (~900 lines) with detailed descriptions and media for each portfolio item.

4. **Abstracts** (`src/components/Abstracts.tsx`): Contains abstract preview components (short descriptions) used in tile hover states.

### Adding a New Portfolio Item

To add a new project to the portfolio:

1. Add card image to `portfolio/public/` directory
2. Import the image in `NavMap.tsx`
3. Add entry to the `navMap` object with link, image, text, category, and detail component
4. Create the abstract component in `src/components/Abstracts.tsx`
5. Create the full detail component in `src/Details.tsx`
6. Add route in `App.tsx` `<Routes>` section
7. Add `<Tile>` component to the `Main` function in `App.tsx`

### Pre-commit Configuration

The repository uses pre-commit hooks that run:
- File quality checks (trailing whitespace, YAML/JSON validation)
- Shellcheck for shell scripts
- Ruff for Python files
- Biome for JS/TS linting and formatting (auto-fixes)
- TypeScript type checking + full Vite build

### Deployment Architecture

- **Development**: Vite dev server with hot module replacement
- **Production Build**: TypeScript compilation + Vite bundler creates static assets
- **Containerization**: Multi-stage Docker build (`portfolio/Dockerfile`: node build → `serve -s dist` on port 3000). The `nginx/` directory is for local docker-compose only and is NOT used in production.
- **CI/CD**: DO builds the Dockerfile from GitHub on push to `main`; the release workflow also calls `doctl apps create-deployment`.
- **Hosting**: DigitalOcean App Platform (`ashtonportfolio`) serves <https://ashton.honnecke.us>

## Important Files

- `portfolio/package.json`: Main application dependencies (React, React Router, Vite)
- `package.json` (root): Biome linter/formatter
- `Makefile`: Common development commands
- `biome.json`: Biome configuration (tabs, double quotes)
- `.pre-commit-config.yaml`: Pre-commit hook configuration
- `DEPLOYMENT.md`: Detailed deployment instructions
- `portfolio/src/NavMap.tsx`: Central source of truth for all portfolio items
