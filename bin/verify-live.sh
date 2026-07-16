#!/usr/bin/env bash
#
# Smoke-verify a deployed portfolio build. Target-parameterized: the SAME
# command runs against a local container and against production, so a
# pre-deploy run and a post-deploy run are directly comparable.
#
#   BASE_URL=http://localhost:3456     ./bin/verify-live.sh   # local image
#   ./bin/verify-live.sh                                      # prod (default)
#
# WHY CONTENT CHECKS AND NOT STATUS CODES:
# production runs `serve -s dist`, which rewrites every unmatched path to
# index.html. So /literally-anything returns 200 with a full HTML body. HTTP
# status proves only that the server is up — it CANNOT tell you whether a
# route exists or whether your code shipped. Everything below therefore
# asserts on served bytes: we pull index.html, find the content-hashed JS
# bundle Vite emitted, and assert markers are present inside it.
#
set -euo pipefail

BASE_URL="${BASE_URL:-https://ashton.honnecke.us}"
BASE_URL="${BASE_URL%/}"

# app.crewcapable.com and some CDNs 403 a default curl UA. Not auth — just
# bot-blocking. Always present as a browser.
UA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36'

pass=0
fail=0

ok()   { printf '  \033[32mPASS\033[0m  %s\n' "$1"; pass=$((pass + 1)); }
bad()  { printf '  \033[31mFAIL\033[0m  %s\n' "$1"; fail=$((fail + 1)); }
note() { printf '        %s\n' "$1"; }

fetch() { curl -sS --max-time 30 -A "$UA" -L "$1"; }

printf '\nVerifying %s\n\n' "$BASE_URL"

# --- 1. Server is up and serving the shell ------------------------------
index_html="$(fetch "$BASE_URL/" || true)"
if [ -z "$index_html" ]; then
	bad "GET / returned nothing — server down or unreachable"
	printf '\n%d passed, %d failed\n' "$pass" "$fail"
	exit 1
fi
ok "GET / served an HTML shell"

# --- 2. Locate the content-hashed bundle --------------------------------
# Vite emits /assets/index-<hash>.js. The hash changes with content, so the
# filename itself is a deploy fingerprint worth printing.
bundle_path="$(printf '%s' "$index_html" |
	grep -oE '/assets/index-[A-Za-z0-9_-]+\.js' | head -n1 || true)"

if [ -z "$bundle_path" ]; then
	bad "could not find /assets/index-*.js referenced in index.html"
	printf '\n%d passed, %d failed\n' "$pass" "$fail"
	exit 1
fi
ok "index.html references $bundle_path"

bundle="$(fetch "$BASE_URL$bundle_path" || true)"
if [ -z "$bundle" ]; then
	bad "bundle $bundle_path referenced but not retrievable"
	printf '\n%d passed, %d failed\n' "$pass" "$fail"
	exit 1
fi
ok "bundle downloaded ($(printf '%s' "$bundle" | wc -c) bytes)"

# --- 3. Assert the case studies actually shipped ------------------------
# These are the markers that distinguish "my code is live" from "the old
# build is still live and SPA-falling-back to a blank route".
check_marker() {
	if printf '%s' "$bundle" | grep -qF -- "$1"; then
		ok "bundle contains: $2"
	else
		bad "bundle MISSING: $2"
	fi
}

check_marker 'Case Studies'                  'case studies section heading'
check_marker 'csCard'                        'case study card component'
check_marker 'app.crewcapable.com/psc'       'CrewCapable case study link'
check_marker 'hvac3.fly.dev'                  'HVAC prototype launch link'
check_marker 'hvac-moisture-platform'        'HVAC case study slug'
check_marker 'insurtech-reliability-sim'     'insurtech case study slug'
check_marker 'All rights reserved'           'copyright / rights notice'

# --- 4. Redaction guard -------------------------------------------------
# The bundle is public. Client identifiers must never appear in it. This is
# the check that matters most; it runs against the DEPLOYED bytes, not a
# local build that might differ from what actually shipped.
leaked=0
for term in knopp bracely odoo brex tinsmith "november uniform" eshf; do
	if printf '%s' "$bundle" | grep -qiF -- "$term"; then
		bad "REDACTION LEAK — deployed bundle contains '$term'"
		leaked=1
	fi
done
[ "$leaked" -eq 0 ] && ok "no client identifiers in deployed bundle"

# --- 5. SEO files are REAL files, not the SPA fallback ------------------
# Before these existed, /robots.txt and /sitemap.xml both returned 200 serving
# index.html — the fallback impersonating them. Status was 200 either way, so
# only the body reveals it. Assert on content, not codes.
robots="$(fetch "$BASE_URL/robots.txt" || true)"
if printf '%s' "$robots" | grep -qi '^sitemap:'; then
	ok "/robots.txt is a real robots file"
else
	bad "/robots.txt is not a robots file (SPA fallback serving HTML?)"
fi

sitemap="$(fetch "$BASE_URL/sitemap.xml" || true)"
if printf '%s' "$sitemap" | grep -q '<urlset'; then
	n="$(printf '%s' "$sitemap" | grep -c '<loc>' || true)"
	ok "/sitemap.xml is a real sitemap ($n urls)"
else
	bad "/sitemap.xml is not a sitemap (SPA fallback serving HTML?)"
fi

# --- 6. Pre-existing surfaces still work (regression guard) -------------
# The CV PDF link has broken before. Status is useless here (SPA fallback
# would 200 an HTML page), so assert on the magic bytes.
pdf_head="$(curl -sS --max-time 30 -A "$UA" -L -r 0-4 "$BASE_URL/cv/cv.pdf" || true)"
if printf '%s' "$pdf_head" | grep -q '%PDF'; then
	ok "/cv/cv.pdf is a real PDF (not an SPA fallback page)"
else
	bad "/cv/cv.pdf did not return PDF bytes — got: ${pdf_head:0:20}"
fi

# --- 7. Clickable prototype (nested static app under /prototypes/) -------
# nginx serves this as a real nested app. The failure mode to catch is the
# server falling back to the portfolio SPA — which would look "up" (200) while
# the prototype is actually broken. Assert on prototype-specific markers.
proto="$(fetch "$BASE_URL/prototypes/ledgerline/" || true)"
if printf '%s' "$proto" | grep -q '/prototypes/ledgerline/_next/'; then
	ok "prototype root serves the nested app (not the portfolio SPA)"
else
	bad "prototype root did not serve the app (SPA fallback / missing?)"
fi

# A deep route must resolve to the app too, not the portfolio shell.
proto_deep="$(fetch "$BASE_URL/prototypes/ledgerline/quote/" || true)"
if printf '%s' "$proto_deep" | grep -q '/prototypes/ledgerline/_next/'; then
	ok "prototype deep route resolves (nginx nested routing works)"
else
	bad "prototype deep route fell back — nested routing broken"
fi

# The prototype is a de-branded client piece. Its shipped HTML must carry no
# client identifiers — checked against what's actually served, not a local build.
pleak=0
for term in bracely odoo stripe brex "json-rpc"; do
	if printf '%s' "$proto $proto_deep" | grep -qiF -- "$term"; then
		bad "REDACTION LEAK — prototype serves '$term'"
		pleak=1
	fi
done
[ "$pleak" -eq 0 ] && ok "prototype HTML carries no client identifiers"

# --- Result -------------------------------------------------------------
printf '\n%d passed, %d failed\n' "$pass" "$fail"
if [ "$fail" -gt 0 ]; then
	note "bundle fingerprint: $bundle_path"
	exit 1
fi
printf 'Verified %s (%s)\n' "$BASE_URL" "$bundle_path"
