# TeX engine for rendering the CV PDFs, so the host needs no local texlive.
# Full texlive plus the DejaVu font family the generated .tex selects via
# fontspec (\setmainfont{DejaVu Sans}). Baking the font in avoids an apt-get on
# every render. Built once as the local image `cv-tex:latest` by build-cv-pdf.sh.
FROM texlive/texlive:latest
RUN apt-get update \
 && apt-get install -y --no-install-recommends fonts-dejavu-core \
 && rm -rf /var/lib/apt/lists/* \
 && fc-cache -f
