# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Common Development Commands

- `npm run dev` - Start local 11ty development server on port 5173
- `npm run build` - Build the site into `dist/`

## Architecture

A personal portfolio site built with 11ty and deployed to GitHub Pages at
`turpin.dev` (via `public/CNAME`).

- **Hand-written HTML** - `src/index.njk` is the home page; content is edited
  there directly, not generated from README.md
- **Styling** - `src/style.css`, following the Sauna site's look: Oswald
  display face (`public/fonts/`), warm surfaces, orange accent, light and dark
  themes from `prefers-color-scheme` or `data-theme`
- **Active development** - `.github/scripts/update-active-dev.js` writes
  `src/_data/activeDev.json` from the GitHub API; the daily workflow commits
  it and the deploy workflow refreshes it before each build. `src/script.js`
  turns the build-time dates into relative times in the browser
- **Static assets** in `public/` are copied to the site root

## SEO

- Site-wide metadata lives in `src/_data/site.json` — URL, description, author,
  profile links and the pages on `turpin.dev` that are deployed from other
  repositories (`/cost/`, `/watch/`).
- `src/_layouts/base.njk` renders description, canonical, Open Graph, Twitter
  card and Person structured data from that file; a page can override the
  description with `description` in its front matter.
- `src/sitemap.njk` builds `/sitemap.xml` from everything 11ty writes plus
  `site.extraPages`. `lastmod` is the build date, not the template mtime,
  because the home page is regenerated from README.md on every deploy.
- `src/robots.njk` builds `/robots.txt` and points at the sitemap. It blocks
  `/README.md` and the legacy `/cost.html`, both duplicates of pages that rank
  in their own right.
