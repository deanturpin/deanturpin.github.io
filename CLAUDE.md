# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start local Astro development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally

## Architecture

This is a personal portfolio site built with Astro, deployed to GitHub Pages. The site structure is:

- **Single-page Astro application** with the main content in `src/pages/index.astro`
- **Static assets** in `public/` (including `cost.html` for a meeting cost timer)
- **GitHub Actions deployment** configured to automatically build and deploy to GitHub Pages on push to main branch
- **Theme system** with multiple colour schemes (Warm Sunset, Clean Minimal, Soft Dark, Classic) switchable via JavaScript

## Key Features

- Portfolio showcases side projects, skills timeline, and GitLab pipeline status badges
- Inline CSS styling with animated gradient backgrounds and theme switching
- All content is embedded directly in the index.astro file for simplicity
- No external dependencies beyond Astro framework