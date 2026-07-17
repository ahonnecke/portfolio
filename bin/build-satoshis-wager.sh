#!/usr/bin/env bash
#
# Regenerate the vendored Satoshi's Wager demo under
# portfolio/public/prototypes/satoshis-wager/ from its source repo.
#
#   make prototype.satoshis
#
# Like the Ledgerline vendor script, this exists so the committed static build
# has a repeatable, documented provenance rather than being a mystery blob. It
# is a separate script because this is a Vite/npm app (Ledgerline is Next/pnpm).
#
# Two portfolio-specific transforms:
#   1. --base=/prototypes/satoshis-wager/ so assets resolve under the sub-path.
#   2. Strip the Ko-fi "Support me" donation widget: it loads third-party JS at
#      runtime and a tip jar reads oddly on a portfolio. The source repo keeps
#      it; only the vendored portfolio copy drops it. (Delete the sed block to
#      keep it.)
#
set -euo pipefail

SRC="${SATOSHIS_SRC:-$HOME/src/satoshis-wager}"
BASE="/prototypes/satoshis-wager/"
DEST_REL="portfolio/public/prototypes/satoshis-wager"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$here/$DEST_REL"

die() { printf '\033[31merror:\033[0m %s\n' "$1" >&2; exit 1; }

[ -d "$SRC" ] || die "source not found at $SRC (set SATOSHIS_SRC)"

echo "==> Building $SRC with base $BASE"
( cd "$SRC" && rm -rf dist && npx vite build --base="$BASE" >/dev/null )
[ -f "$SRC/dist/index.html" ] || die "build produced no dist/index.html"

echo "==> Stripping the Ko-fi donation widget from the portfolio copy"
# Remove the whole block as a range — from its comment through the standalone
# </script> that closes the init call — so no orphaned tags are left behind.
# (Line-by-line deletion would strip the inner lines but leave broken markup.)
sed -i '/<!-- Ko-fi floating support button -->/,/^[[:space:]]*<\/script>[[:space:]]*$/d' "$SRC/dist/index.html"

echo "==> Safety scan (no secrets / no active affiliate tags in the shipped build)"
# Match credential VALUES and key formats, not bare words — minified React ships
# harmless tokens like __SECRET_INTERNALS_DO_NOT_USE and password:!0 (an input-
# type map). We want: private-key blocks, AWS keys, a credential name assigned a
# long quoted literal, or an active tracking/referral param with a value.
SECRET_RE='BEGIN [A-Z ]+PRIVATE KEY|AKIA[0-9A-Z]{16}|(secret|token|api[_-]?key)["'"'"' ]*[:=]["'"'"' ]*[A-Za-z0-9_/+-]{16,}|utm_source|utm_medium|[?&](ref|affiliate_id|partner_id)=[A-Za-z0-9]{3,}'
if grep -rEl "$SECRET_RE" "$SRC/dist" >/dev/null 2>&1; then
	printf '  matches:\n'
	grep -rEo "$SECRET_RE" "$SRC/dist" 2>/dev/null | sort -u | sed 's/^/    /'
	die "safety scan hit — a secret or active tracking tag is in the build; not vendoring"
fi
if grep -qiE 'storage\.ko-fi\.com|kofiWidgetOverlay' "$SRC/dist/index.html"; then
	die "ko-fi widget still present after strip — check the sed patterns"
fi
echo "  clean"

echo "==> Vendoring into $DEST_REL"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$SRC/dist/." "$DEST/"
echo "  $(find "$DEST" -type f | wc -l) files, $(du -sh "$DEST" | cut -f1)"
echo "Done. Review with: git status $DEST_REL"
