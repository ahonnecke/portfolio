# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The site showcases various projects across categories including FOSS, AI, Art, Speaking, and more. It's deployed to Digital Ocean using Docker containers and GitHub Actions.

## Development Commands

### Initial Setup
```bash
# Install dependencies using pnpm
make ci.install

# Or manually:
corepack enable
corepack prepare pnpm@10 --activate
pnpm config set store-dir .pnpm-store
pnpm install --frozen-lockfile
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
```bash
# Manual deployment (rsync to server)
make deploy

# Production deployments happen automatically via GitHub Actions
# on pushes to main branch or new releases
```

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
- **Containerization**: Multi-stage Docker build (Node.js build → Nginx serving)
- **CI/CD**: GitHub Actions builds Docker image and deploys to Digital Ocean Container Registry
- **Hosting**: Digital Ocean App Platform serves the containerized application

## Important Files

- `portfolio/package.json`: Main application dependencies (React, React Router, Vite)
- `package.json` (root): Biome linter/formatter
- `Makefile`: Common development commands
- `biome.json`: Biome configuration (tabs, double quotes)
- `.pre-commit-config.yaml`: Pre-commit hook configuration
- `DEPLOYMENT.md`: Detailed deployment instructions
- `portfolio/src/NavMap.tsx`: Central source of truth for all portfolio items
