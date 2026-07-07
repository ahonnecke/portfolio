#!/usr/bin/env bash
# Build the CV PDFs from the single source of truth (src/cv/resume.data.ts).
#
#   ./scripts/build-cv-pdf.sh            # build cto + ic
#   ./scripts/build-cv-pdf.sh cto        # one variant
#
# Pipeline (no Emacs/Org): esbuild bundles generate-cv-tex.ts -> node emits
# self-contained .tex from resume.data.ts (via the same selectVariant() the web
# page uses) -> xelatex compiles it inside the cv-tex image. Outputs land in
# public/cv/ as the files the site serves: cto -> cv.pdf, ic -> cv-ic.pdf.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
APP="$(cd "$HERE/.." && pwd)"
BUILD="$APP/build/cv"
IMAGE="cv-tex:latest"
declare -A OUT=([cto]="cv.pdf" [ic]="cv-ic.pdf")

variants=("$@")
[ ${#variants[@]} -eq 0 ] && variants=(cto ic)

ensure_image() {
	if ! docker image inspect "$IMAGE" >/dev/null 2>&1; then
		echo ">> building $IMAGE (one-time)…"
		# Legacy builder: this host has no buildx/BuildKit component.
		DOCKER_BUILDKIT=0 docker build -t "$IMAGE" -f "$HERE/tex.Dockerfile" "$HERE"
	fi
}

mkdir -p "$BUILD"
echo ">> bundling generator…"
"$APP/node_modules/.bin/esbuild" "$HERE/generate-cv-tex.ts" \
	--bundle --platform=node --format=esm --outfile="$APP/build/gen.mjs" --log-level=warning
ensure_image

for v in "${variants[@]}"; do
	[ -n "${OUT[$v]:-}" ] || { echo "unknown variant: $v (want cto|ic)" >&2; exit 1; }
	echo ">> [$v] generating .tex from resume.data.ts…"
	node "$APP/build/gen.mjs" "$v" > "$BUILD/cv-$v.tex"
	echo ">> [$v] rendering PDF (xelatex)…"
	docker run --rm -v "$BUILD":/work -w /work "$IMAGE" \
		latexmk -quiet -xelatex -interaction=nonstopmode "cv-$v.tex" >/dev/null
	docker run --rm -v "$BUILD":/work -w /work "$IMAGE" \
		chown "$(id -u):$(id -g)" "/work/cv-$v.pdf"
	cp "$BUILD/cv-$v.pdf" "$APP/public/cv/${OUT[$v]}"
	echo ">> [$v] -> public/cv/${OUT[$v]}"
done
echo ">> done."
