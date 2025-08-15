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

The application uses two Dockerfiles:
- `portfolio/Dockerfile` - For local development
- `portfolio/Dockerfile.prod` - For production deployment

The production Dockerfile:
- Uses a multi-stage build process
- Builds the application with Node.js
- Serves the static files using Nginx
- Configures proper routing for the SPA

## Nginx Configuration

The Nginx configuration in `portfolio/nginx/default.conf` handles:
- Serving static files
- SPA routing (redirecting to index.html for client-side routing)

## Troubleshooting

If you encounter deployment issues:
1. Check GitHub Actions logs for errors
2. Verify Digital Ocean configuration
3. Ensure all required secrets are properly set
4. Test the Docker build locally with: `docker build -f portfolio/Dockerfile.prod -t portfolio-test ./portfolio`
