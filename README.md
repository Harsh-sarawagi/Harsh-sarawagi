# Harsh Sarawagi - Portfolio

Static portfolio with local development and GitHub Pages deployment.

## Run locally

From this folder, run `npm install` once, then `npm run dev`.

Open **http://localhost:4173**. The server listens on this computer's loopback interface. Changes in `src/` and `public/` refresh the browser automatically.

## Project structure

| Folder / file               | Purpose                                         |
| --------------------------- | ----------------------------------------------- |
| `src/index.html`            | Page sections, content, project illustrations   |
| `src/data/projects.js`      | Project detail content and repository links     |
| `src/scripts/app.js`        | Filters, dialogs, navigation, motion controls   |
| `src/scripts/scene.js`      | Three.js scene, lighting, pointer interaction   |
| `src/styles/base.css`       | Components, desktop layout, typography, colors  |
| `src/styles/responsive.css` | Responsive layout and reduced-motion rules      |
| `public/documents/`         | Downloadable resume                             |
| `public/icons/`             | Favicon                                         |
| `public/images/`            | Campus photograph                               |
| `public/vendor/`            | Local Three.js library and license              |
| `scripts/dev.mjs`           | Local server with live reload                   |
| `scripts/build.mjs`         | Generates static output in dist/                |
| `tests/portfolio.mjs`       | Desktop/mobile browser checks                   |
| `docs/credits.md`           | Design inspirations and asset attribution       |
| `dist/`                     | Generated output; edit src/ and public/ instead |
| `qa-output/`                | Generated screenshots, ignored by Git           |

The approved content reference remains at [portfolio-content.md](docs/portfolio-content.md). The supplied PDF still contains the original NTSE percentage; the website and Markdown use the corrected **0.02%**.

## Commands

| Command          | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `npm run dev`    | Start localhost with live reload                    |
| `npm run check`  | Check JavaScript syntax                             |
| `npm test`       | Run browser checks against the running local server |
| `npm run build`  | Generate dist/ without deploying                    |
| `npm run format` | Format source files and documentation               |

Browser checks require Playwright Chromium. Install it once with `npx playwright install chromium` if needed.

## GitHub Pages

The production site is published at https://harsh-sarawagi.github.io/Harsh-sarawagi/. The `.github/workflows/deploy-pages.yml` workflow builds and deploys pushes to `main`; it can also be run manually from GitHub Actions. Only generated `dist/` assets are served publicly.

Local commands do not deploy. The `scripts/deploy-pages.py` helper prepares an isolated source checkout in `.deploy/github-profile-pages/` using the existing Git credential manager. This folder is ignored by Git. The clean checkout excludes local research snapshots, previous hosting history, credentials, screenshots, and dependencies. After initial publication, edit in this workspace and synchronize changes to the GitHub source repository to publish a new version.

## Content and visuals

Only the five resume projects are included. Experience comes before projects. Each project image, heading, description, tags, and detail action are enclosed in one card. Project visuals are original illustrations, rather than application screenshots.

Google Fonts provides DM Sans and Space Grotesk, with system-font fallbacks. Core imagery, resume, and the 3D library are served locally. See [design and asset credits](docs/credits.md).
