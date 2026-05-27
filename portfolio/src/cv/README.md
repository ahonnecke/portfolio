# CV

Web-first CV. One typed dataset is the source of truth; the live page, the
PDFs, and the JSON Resume artifacts all derive from it, so they cannot drift.

## Source of truth

- `resume.data.ts` — **edit this**. All content for both audience variants.
- `resume.types.ts` — the schema (`ByVariant<T>` for variant-specific fields).
- `variant.ts` — `selectVariant()` projects the dataset to one variant.
- `jsonresume.ts` — `toJsonResume()` (JSON Resume) and `toSchemaOrg()` (JSON-LD).
- `CvPage.tsx` / `cv.css` — the `/cv` route and its screen + print styling.

## Variants

Two audiences are maintained from the one dataset:

- **cto** — engineering-leadership positioning (default; `/cv`).
- **ic** — deep senior / individual-contributor positioning (`/cv?variant=ic`).

The on-page toggle switches between them.

## Outputs

Rendered into `../../public/cv/` and served at `https://ashton.honnecke.us/cv/`:

| File             | What                                |
| ---------------- | ----------------------------------- |
| (the `/cv` route)| Primary human artifact (live page)  |
| `cv.pdf`         | CTO variant, PDF (fallback export)  |
| `cv-ic.pdf`      | IC variant, PDF                     |
| `resume.json`    | CTO variant, JSON Resume            |
| `resume-ic.json` | IC variant, JSON Resume             |

The page also embeds schema.org `Person` JSON-LD for crawlers and LLMs.

## Build

```bash
npm run cv:build   # from portfolio/ — Playwright renders /cv to PDF + JSON
```

No prior `vite build` needed — the script boots its own Vite dev server. CI
(`.github/workflows/cv_build.yaml`) regenerates and commits on `src/cv/**`
changes. History: this replaced an Emacs/Org/XeLaTeX pipeline (`~/src/cv`).
