# thiagoricardop.github.io

[![Deploy](https://github.com/thiagoricardop/thiagoricardop.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/thiagoricardop/thiagoricardop.github.io/actions/workflows/deploy.yml)

Personal portfolio of **Thiago Ricardo**, embedded and automotive cybersecurity engineer.

**Live site:** https://thiagoricardop.github.io

## Stack

| Concern   | Choice                                                                        |
| --------- | ----------------------------------------------------------------------------- |
| Framework | [Astro](https://astro.build) (static output, zero JavaScript by default)      |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) with light and dark themes         |
| Images    | `astro:assets`: responsive WebP with explicit dimensions (no layout shift)    |
| Fonts     | Self-hosted Inter and JetBrains Mono via Fontsource (no third-party requests) |
| SEO       | Canonical URL, Open Graph, `schema.org/Person` JSON-LD, sitemap, robots.txt   |
| Quality   | `astro check` (TypeScript strict), Prettier                                   |
| Hosting   | GitHub Pages, deployed by GitHub Actions on every push to `main`              |

## Run locally

Requires Node.js 22.22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build in dist/
npm run preview    # serve the production build
npm run check      # type-check
npm run format     # format with Prettier
```

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): profile, projects, experience,
skills, education. Components only handle layout, so updating the portfolio never requires touching
markup.

- **Add a project:** append an entry to `projects`. For the preview, use `{ type: 'image', src, alt }`
  with an image in `src/assets/previews/`, or one of the built-in previews (`can-terminal`,
  `vmu-diagram`, `speller-grid`).
- **Update the résumé:** replace `public/Thiago_Ricardo_Resume.pdf` (keep the file name).
- **Skills:** `handsOn` lists skills used in work or public projects; `coursework` lists skills from
  graduate training. They render with different styles.

## Project structure

```text
src/
├── assets/            profile photo and project preview images (optimized at build time)
├── components/        page sections, project card and preview components
├── data/profile.ts    all site content
├── layouts/           HTML shell, SEO tags, theme bootstrap
├── lib/icons.ts       inline SVG icon set
├── pages/             index and 404
└── styles/global.css  Tailwind setup and shared styles
public/                favicon, robots.txt, résumé PDF
```

## License

Code: MIT, see [LICENSE](LICENSE). Content (text, photo, résumé) © Thiago Ricardo, all rights reserved.
