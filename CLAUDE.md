# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start local Astro development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally

## Architecture

This is a personal portfolio site built with Astro, deployed to GitHub Pages. The site structure is:

- **Markdown-driven content** - README.md serves as the single source of truth for all content
- **Astro build system** - `src/pages/index.astro` reads README.md at build time and converts to HTML using `marked`
- **Static assets** in `public/` (including `cost.html` for a meeting cost timer and `CNAME` for custom domain)
- **GitHub Actions deployment** configured to automatically build and deploy to GitHub Pages on push to main branch
- **Custom domain** - Site deploys to `turpin.dev` via CNAME file
- **Theme system** with multiple colour schemes (Warm Sunset, Clean Minimal, Soft Dark, Classic) switchable via JavaScript

## Key Features

- **Single source of truth** - All content managed in README.md, automatically reflected on website
- Portfolio showcases side projects, skills timeline, and GitLab pipeline status badges
- Inline CSS styling with animated gradient backgrounds and theme switching
- JavaScript post-processing to style pipeline badges section appropriately
- Dependencies: Astro framework and `marked` for markdown parsing