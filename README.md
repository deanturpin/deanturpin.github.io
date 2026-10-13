# turpin.dev

Source for [turpin.dev](https://turpin.dev), built with 11ty and deployed to
GitHub Pages.

- `src/index.njk` is the home page, written as HTML
- `src/style.css` holds the styling, with light and dark themes
- `src/_data/activeDev.json` lists the most recently pushed repositories and
  is refreshed daily by `.github/scripts/update-active-dev.js`

```bash
npm run dev    # local server on port 5173
npm run build  # build into dist/
```
