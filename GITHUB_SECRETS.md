# GitHub Secrets for Portfolio Deployment

To successfully deploy your portfolio to Digital Ocean using GitHub Actions, you need to set up the following secrets in your GitHub repository.

**Note:** These secrets are specific to the `beampockets` Digital Ocean account and the `ashtonportfolio` application.

## Required Secrets

1. **DIGITALOCEAN_API_TOKEN**
   - Description: API token for authenticating with Digital Ocean
   - How to obtain:
     - Go to Digital Ocean dashboard → API → Generate New Token
     - Give it a name like "GitHub Actions Deployment"
     - Ensure it has both read and write scopes
     - Copy the token immediately (it won't be shown again)

2. **DIGITALOCEAN_APP_ID**
   - Description: The ID of your Digital Ocean App Platform application
   - How to obtain:
     - Go to Digital Ocean dashboard → Apps
     - Select your portfolio app
     - The App ID is in the URL: `https://cloud.digitalocean.com/apps/[THIS-IS-YOUR-APP-ID]`
     - Or find it in the app's API section

## Setting Up Secrets

1. Go to your GitHub repository
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add each secret with its name and value
5. Click "Add secret"

## Verifying Setup

After adding these secrets, your GitHub Actions workflow should be able to:
- Build your portfolio application
- Create a Docker image
- Push the image to Digital Ocean Container Registry
- Deploy the application to Digital Ocean App Platform

## Troubleshooting

If deployment fails, check:
- Secret values are correct
- Digital Ocean API token has sufficient permissions
- App ID is correct
- Digital Ocean Container Registry is properly set up
