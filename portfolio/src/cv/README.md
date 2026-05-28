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

The downloadable PDF is **not** generated from this page. It is built by the
Emacs/Org/XeLaTeX pipeline in `~/src/cv` (`M-x build-cv`) and copied into
`../../public/cv/{cv,cv-ic}.pdf` by that repo's `deploy.sh`. The "Download PDF"
link on the page points at those files.
