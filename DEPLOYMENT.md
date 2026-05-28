# Portfolio Deployment Guide

This document outlines how to deploy the portfolio application to Digital Ocean using GitHub Actions.

## Deployment Methods

### 1. Automatic Deployment via GitHub Actions

The repository is configured to automatically deploy to Digital Ocean when:
- A new release is created on GitHub
- Code is pushed to the `main` branch

The deployment process:
1. Runs linting checks
2. Builds the React/Vite application
3. Creates a Docker image using the production Dockerfile
4. Pushes the image to Digital Ocean Container Registry
5. Deploys the application to Digital Ocean App Platform

### 2. Manual Deployment

You can also deploy manually using the deployment script:

```bash
# From the repository root
./bin/deploy.sh
```

This script:
- Builds the application
- Uses rsync to deploy to your server at honnecke.us

## Setting Up Digital Ocean Deployment

1. **Create a Digital Ocean App**
   - Go to Digital Ocean dashboard → Apps → Create App
   - Select "Docker" as the source
   - Connect to your GitHub repository
   - Configure the app settings

2. **Set Up GitHub Secrets**
   - See [GITHUB_SECRETS.md](./GITHUB_SECRETS.md) for required secrets

3. **Container Registry**
   - The workflow is configured to use the Digital Ocean Container Registry
   - Registry path: `registry.digitalocean.com/beampockets`
   - Image name: `ashtonportfolio`
   - Ensure you have access to the `beampockets` registry in Digital Ocean

## Docker Configuration

Production uses a single multi-stage Dockerfile, `portfolio/Dockerfile`
(referenced by `.do/app.yaml`):
- Stage `build` — installs deps and runs `npm run build` (Vite → `dist/`).
- Stage `runner` — serves `dist/` with `serve -s` on `$PORT` (3000).

DigitalOcean App Platform builds this image directly on push to `main`
(`deploy_on_push: true`), so no image registry is required.

The root `nginx/` + `docker-compose.yml` are for **local development only**
(`make build` / `make up`): an nginx reverse proxy in front of the Vite dev
server. They are not part of the production deploy.

## CV

Two separate things:

- **Web page** — the React route `/cv`, driven by typed data in
  `portfolio/src/cv/resume.data.ts` (CTO/IC variants, dark mode). This is the
  primary, always-current artifact. See `portfolio/src/cv/README.md`.
- **PDF** — built by the Emacs/Org/XeLaTeX pipeline in `~/src/cv`
  (`M-x build-cv`), then copied into `portfolio/public/cv/{cv,cv-ic}.pdf` by
  that repo's `deploy.sh`. The web page links to it via "Download PDF".

The PDF is *not* generated from the web page.

## Troubleshooting

If you encounter deployment issues:
1. Check GitHub Actions logs for errors
2. Verify Digital Ocean configuration
3. Ensure all required secrets are properly set
4. Test the production image locally:
   `DOCKER_BUILDKIT=0 docker build -f portfolio/Dockerfile -t portfolio-test ./portfolio`
