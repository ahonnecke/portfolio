# CV

The CV web page (`/cv` route). One typed dataset drives a web-first page with
two audience variants; the page also embeds machine-readable JSON.

## Source of truth (this directory)

- `resume.data.ts` — **edit this**. All content for both variants.
- `resume.types.ts` — schema (`ByVariant<T>` for variant-specific fields).
- `variant.ts` — `selectVariant()` projects the dataset to one variant.
- `jsonresume.ts` — `toJsonResume()` (JSON Resume) and `toSchemaOrg()` (JSON-LD).
- `CvPage.tsx` / `cv.css` — the `/cv` route and its styling.

## Variants

Maintained from the one dataset, switched by the on-page toggle:

- **cto** — engineering-leadership positioning (default; `/cv`).
- **ic** — deep senior / individual-contributor positioning (`/cv?variant=ic`).

The page embeds the JSON Resume object and a schema.org `Person` graph inline
(no build step) so crawlers and LLMs can read it.

## PDF

The downloadable PDFs are generated from **this same `resume.data.ts`** — no
Emacs, no Org, no second copy of the content. `scripts/generate-cv-tex.ts`
projects the data with the same `selectVariant()` the page uses, emits a
self-contained `.tex` (styling lives in that file's preamble), and xelatex
compiles it in the `cv-tex` container.

```bash
make cv-pdf          # from repo root: builds cv.pdf (cto) + cv-ic.pdf (ic)
```

Outputs land in `../../public/cv/{cv,cv-ic}.pdf` — the files the site serves and
the "Download PDF" link points at. Edit `resume.data.ts`, run `make cv-pdf`, and
the web page and both PDFs update from one source.

> The job-tailored variants (python-backend, verification) still live in the
> Org pipeline in `~/src/cv`; only the canonical cto/ic PDFs build from here.
