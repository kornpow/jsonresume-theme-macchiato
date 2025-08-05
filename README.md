# Macchiato Theme! ☕️+🥛

Macchiato it's a [JSON Resume](https://jsonresume.org/) theme based on [Theme Boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate) and [Caffeine Theme](https://github.com/kelyvin/jsonresume-theme-caffeine).

## Why?

I wanted to build my own resume theme, so I decided to start from a theme I like a lot and tring to make it a bit more personal.

I also wanted I simple environment, so I used the boilerplate provided by JSON Resume instead of using the awesome work done by [kelyvin](https://github.com/kelyvin/) for it's Caffeine Theme. If you are looking for a more complete environment take a look at the caffine theme.


> ***Currently it doesn't have any major style difference from it's parent [Caffeine](https://github.com/kelyvin/jsonresume-theme-caffeine).***


### Tailwind CSS Integration

- **Tailwind source**: `src/tailwind-input.css` imports the three Tailwind layers (`@tailwind base; @tailwind components; @tailwind utilities;`).
- **Configuration**: `tailwind.config.js` defines the content paths (all Handlebars templates, JS, CSS and `resume.json`) and contains the default Tailwind config. Feel free to extend it (colors, spacing, fonts, etc.)
- **Build output**: `npm run build:css` (also run automatically by the `test` script) generates a single stylesheet `src/tailwind-output.css`. This file is **automatically read and injected** by `index.js` alongside the original `style.css` – you don’t need to manually link it in the HTML.
- **Customising**: edit `tailwind.config.js` and re‑run the build command:
  ```bash
  npm run build:css   # rebuilds src/tailwind-output.css
  ```
- **Development workflow**:
  - `npm test` – builds Tailwind then runs Jest + visual‑snapshot test.
  - `npm test -- -u` – When you intentionally change the UI, update the snapshot.

## Changes from Caffeine Theme

### Environment

- Simpler and less sofisticated development environment, the same as JSON Resume boilerplate. (Caffeine has live re-building and automatic page reloading)


### Visual differences

- Add tags to projects and skills
- Switch from `UPPERCASE` to `Capitalize` on most text


## Usage

1. Download [JSON Resume CLI](https://jsonresume.org/)
  ```
  npm install -g resume-cli
  ```

2. Download the theme from [npm](https://www.npmjs.com/)
  ```
  npm install -g jsonresume-theme-macchiato
  ```

3. Use resume cli to build your resume
  ```
  resume export resume.html --theme macchiato
  ```

### PDF output

Probably you want a PDF version of your resume...

JSONResume CLI should be able to make a PDF out of your JSON but I always struggled to get it to work,
so I switched to a more direct and effective approach.

I use Puppeteer-CLI to make a PDF from my HTML resume.

```
npm install -g puppeteer-cli
puppeteer --wait-until networkidle0 --margin-top 0 --margin-right 0 --margin-bottom 0 --margin-left 0 --format A4 print resume.html resume.pdf
```

Obviously you could write a very simple Node script to use the real Puppeteer and the `render` function to make a PDF without first exporting the HTML version.

Also checkout [HackMyResume](https://github.com/hacksalot/HackMyResume), a powerful tool to build and analyze your JSON Resume.



## Testing

The project includes a visual regression test that verifies the generated HTML layout.

```bash
# Run the test suite (adds a visual regression test)
npm test
```

If you intentionally change the visual layout (e.g., header formatting) the test will fail because the screenshot differs from the stored snapshot. To accept intentional changes, update the snapshot:

```bash
npm test -- -u
```

This updates the saved PNG snapshot under `src/__tests__/__image_snapshots/`. Commit the updated PNG(s) with your changes.

## License

Available under the [MIT license](http://mths.be/mit).

