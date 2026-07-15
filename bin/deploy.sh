#!/usr/bin/env bash
#
# Deploy the portfolio to DigitalOcean App Platform and prove it landed.
#
#   make deploy          # deploy current main, wait, verify prod
#   make deploy.status   # read-only: what's live right now
#
# WHAT THIS REPLACED: this script used to rsync dist/ to
# ahonnecke@honnecke.us:/home/ahonnecke/www/honnecke/. That host is not what
# serves ashton.honnecke.us — production is the DO App Platform app below,
# which builds portfolio/Dockerfile from GitHub. The old script deployed to
# somewhere nobody was looking.
#
# HOW PRODUCTION ACTUALLY DEPLOYS: the DO app is GitHub-sourced with
# deploy_on_push:true on main, AND .github/workflows/webapp_publish_on_release
# runs `doctl apps create-deployment` on push to main. Both fire, so they race:
# the deployment history is full of push-triggered rows sitting at CANCELED
# with a manual row SUPERSEDING them. That is normal here, not an error — but
# it means "I pushed" does not mean "it deployed". This verb waits for a
# terminal phase and then checks the served bytes.
#
set -euo pipefail

APP_ID="${DO_APP_ID:-dc34af0e-170f-4861-94ee-a385ce011ea2}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"
PROD_URL="${PROD_URL:-https://ashton.honnecke.us}"

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

die() { printf '\033[31merror:\033[0m %s\n' "$1" >&2; exit 1; }
step() { printf '\n\033[36m==>\033[0m %s\n' "$1"; }

command -v doctl >/dev/null 2>&1 || die "doctl not installed"
doctl account get >/dev/null 2>&1 || die "doctl not authenticated — run: doctl auth init"

# Take the first N lines WITHOUT piping to head: under `set -o pipefail`, head
# exiting early SIGPIPEs the producer and fails the whole pipeline with 141.
# That bit this script on its first real run — the deploy went ACTIVE and the
# verb then died before verifying.
first_lines() { awk -v n="$1" 'NR<=n'; }

# --- Status mode (read-only) --------------------------------------------
if [ "${1:-}" = "--status" ]; then
	step "Most recent deployment"
	doctl apps list-deployments "$APP_ID" --format ID,Phase,Cause,Updated | first_lines 2
	step "Live check"
	BASE_URL="$PROD_URL" "$here/verify-live.sh"
	exit $?
fi

# --- Preflight ----------------------------------------------------------
step "Preflight"

branch="$(git rev-parse --abbrev-ref HEAD)"
[ "$branch" = "$DEPLOY_BRANCH" ] ||
	die "on '$branch', but DO deploys '$DEPLOY_BRANCH'. Merge first, then deploy."

[ -z "$(git status --porcelain)" ] ||
	die "working tree is dirty — commit or stash before deploying"

git fetch -q origin "$DEPLOY_BRANCH"
if [ "$(git rev-parse HEAD)" != "$(git rev-parse "origin/$DEPLOY_BRANCH")" ]; then
	die "local $DEPLOY_BRANCH ($(git rev-parse --short HEAD)) != origin/$DEPLOY_BRANCH ($(git rev-parse --short "origin/$DEPLOY_BRANCH")) — push first. DO builds from GitHub, not from your disk."
fi

printf '    branch : %s\n' "$branch"
printf '    commit : %s %s\n' "$(git rev-parse --short HEAD)" "$(git log -1 --format=%s | cut -c1-56)"
printf '    app    : %s\n' "$APP_ID"

# --- Deploy -------------------------------------------------------------
step "Creating deployment (DO builds portfolio/Dockerfile — takes a few minutes)"

# --wait polls to a terminal phase. Don't trust its exit code alone: the
# push-triggered deployment racing this one can land as CANCELED.
doctl apps create-deployment "$APP_ID" --wait --format ID,Phase || true

phase="$(doctl apps list-deployments "$APP_ID" --format Phase --no-header | first_lines 1)"
step "Deployment phase: $phase"

case "$phase" in
	ACTIVE) ;;
	CANCELED | SUPERSEDED)
		printf '    superseded by a concurrent deployment — checking what actually went live\n'
		;;
	*)
		die "deployment ended in phase '$phase' — check: doctl apps logs $APP_ID --type build"
		;;
esac

# --- Prove it -----------------------------------------------------------
# The only thing that settles it: what the server is serving.
step "Verifying production"
BASE_URL="$PROD_URL" "$here/verify-live.sh"
