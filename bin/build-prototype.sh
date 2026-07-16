#!/usr/bin/env bash
#
# Regenerate the vendored Ledgerline prototype under
# portfolio/public/prototypes/ledgerline/ from its source repo.
#
#   make prototype            # rebuild + re-vendor + redaction-scan
#
# WHY THIS IS VENDORED (committed built output, not a submodule/build step):
# DO builds the portfolio image from GitHub and has no access to the prototype's
# source repo, which is a separate pnpm/Next project. So the static export must
# live in this repo. This script is the documented, repeatable way to refresh it
# — the alternative is a mystery blob nobody dares regenerate.
#
# The prototype is a client-facing piece that was de-branded. This script
# re-runs the redaction scan on every rebuild so a future source change can't
# silently re-introduce a client identifier into what ships.
#
set -euo pipefail

SRC="${PROTOTYPE_SRC:-$HOME/src/bracely}"
DEST_REL="portfolio/public/prototypes/ledgerline"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$here/$DEST_REL"

die() { printf '\033[31merror:\033[0m %s\n' "$1" >&2; exit 1; }

[ -d "$SRC" ] || die "prototype source not found at $SRC (set PROTOTYPE_SRC)"
command -v pnpm >/dev/null 2>&1 || die "pnpm not installed (the prototype is a pnpm/Next project)"

echo "==> Building static export from $SRC"
( cd "$SRC" && rm -rf out && pnpm build >/dev/null )
[ -d "$SRC/out" ] || die "build produced no out/ — is output:export set in next.config?"

echo "==> Redaction scan of the export"
leak=0
for term in bracely odoo stripe brex resend json-rpc ec2 ledger.bracely policy_events sox_audit home/ahonnecke; do
	if grep -rilF "$term" "$SRC/out" >/dev/null 2>&1; then
		printf '  \033[31mLEAK\033[0m %s\n' "$term"
		leak=1
	fi
done
[ "$leak" -eq 0 ] || die "redaction scan failed — the export contains a client identifier. Not vendoring."
echo "  clean"

echo "==> Vendoring into $DEST_REL"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$SRC/out/." "$DEST/"
echo "  $(find "$DEST" -type f | wc -l) files"

echo "Done. Review with: git status $DEST_REL"
