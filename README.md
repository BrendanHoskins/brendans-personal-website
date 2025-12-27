## Brendan’s Personal Website (Vanilla React)

A very simple personal website built with vanilla React. It showcases a bit about me, my professional background, and renders my resume and cover letter directly in the browser using a PDF viewer.

### Why these technical decisions
- **React for extensibility**: The React ecosystem makes it easy to add capabilities through well‑maintained packages. For example, the site uses `@react-pdf-viewer` to render PDFs with search and download.
- **Reusability and consistency**: The UI is composed of small, reusable components (e.g., a single `PdfViewer` used for both the resume and cover letter), keeping behavior consistent and reducing duplication.
- **Familiarity and velocity**: React aligns with my day‑to‑day skillset, enabling fast iteration and straightforward deployments.
- **Simplicity**: It’s a static single‑page app. No backend is required, which keeps hosting cheap and operations simple.

### Features
- **Inline PDF viewing** for the resume and cover letter (searchable, zoomable, downloadable).
- **Basic personal and professional pages**, including “About Me” content.

### Tech stack
- **React** (vanilla components, no heavy framework)
- **Webpack** for bundling and local development
- **`@react-pdf-viewer`** for PDF rendering (built on top of `pdfjs`)

### Project structure
- `client/`
  - `public/` — static assets, including `resume.pdf` and `cover-letter.pdf`
  - `src/components/common/PdfViewer/PdfViewer.js` — reusable PDF viewer
  - other personal and professional sections live under `src/components/...`
- `server/` — currently unused (reserved for possible future needs)

### Local development
From the `client` folder:

```bash
npm install
npm start
```

The app runs on `http://localhost:3000` by default (Webpack Dev Server).

### Production build
From the `client` folder:

```bash
npm run build
```

This produces a production bundle in `client/dist/` suitable for static hosting.

### Deployment
- Host the built assets (from `client/dist/`) on any static host (e.g., Netlify, Vercel, GitHub Pages, S3/CloudFront).
- Because it’s a static SPA, deployments are quick and low‑maintenance—another reason React and a minimal toolchain were chosen.


