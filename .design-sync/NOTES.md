# Claude Design sync notes

- **Tokens-only design system.** The site's components are Astro (React was removed in Aug 2026), so nothing is importable by Claude Design. The sync ships only the brand layer: tokens, utility classes, fonts, and the conventions header (`conventions.md`). `entry.mjs` is a deliberately empty entry.
- **Stylesheet source is `brand.css`.** It imports the site's real `src/styles/globals.css` (which imports `theme.css`) and compiles it with the Tailwind CLI into `.cache/fadeaway.css` (`cfg.buildCmd`). Always run `buildCmd` before the converter; the converter copies `.cache/fadeaway.css` as `_ds_bundle.css`.
- **Safelist.** Tailwind v4 only emits classes found in sources, so `brand.css` safelists every token-backed utility plus a common layout set (grid/flex/col-span/widths) with `@source inline(...)`. A new token in `theme.css` needs a matching safelist line, or designs can't use it.
- **Fonts.** The site loads Outfit and DM Sans through the Astro Fonts API, which writes `@font-face` inline into each page's HTML with hashed family names. The sync ships its own copies: `fonts/outfit-latin.woff2` and `fonts/dm-sans-latin.woff2` (variable fonts, latin subset, copied from `dist/_astro/fonts/`), declared in `fonts/fonts.css`. `brand.css` points `--ff-outfit` / `--ff-dm-sans` at the plain family names.
- **Tailwind's default serif stack is turned off** (`--font-serif: initial` in `brand.css`) because it referenced Cambria, which triggered `[FONT_MISSING]`. Not a brand font.
- **React for `_vendor/`** is installed only into `.ds-sync/` (`npm i react@18.3.1 react-dom@18.3.1` there), and the converter runs with `--node-modules ./.ds-sync/node_modules`. Don't add React back to the site's package.json for this.
- **Tailwind CLI** is installed into `.ds-sync/` at the site's exact `tailwindcss` version (`@tailwindcss/cli@<version>`). Keep them matched.
- **Render check:** run with `--no-render-check`. There are no component previews, so the headless render check has nothing to screenshot; the user approved skipping playwright. Brand rendering was verified by hand with `.cache/brand-check.html` (copy it into `ds-bundle/` as `.brand-check.html` and serve with `node .ds-sync/storybook/http-serve.mjs ./ds-bundle`).

- **Windows:** the Tailwind CLI sometimes prints `Assertion failed: !(handle->flags & UV_HANDLE_CLOSING) ... async.c` on exit. It's a libuv shutdown quirk; the CLI still exits 0 and the output is correct. Check the exit code, not the message.

## Rebuild commands

```bash
node .ds-sync/node_modules/@tailwindcss/cli/dist/index.mjs -i .design-sync/brand.css -o .design-sync/.cache/fadeaway.css --minify
node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./.ds-sync/node_modules --out ./ds-bundle --no-render-check [--remote .design-sync/.cache/remote-sync.json]
```

## Known render warns

- `[RENDER_SKIPPED]` with `--no-render-check`: expected (tokens-only, see above).
- `[DTS_REACT]` during build: harmless, there are no component types.

## Re-sync risks

- `theme.css` / `globals.css` changes on the site don't reach Claude Design until someone re-runs the sync.
- New tokens need a safelist line in `brand.css` (see above); a token without one ships as a CSS variable but has no utility class.
- Font files are copies. If the site changes font families or weights in `astro.config.mjs`, re-copy from `dist/_astro/fonts/` after `npm run build` and update `fonts/fonts.css`.
- The copy rules in `conventions.md` duplicate CLAUDE.md section 3; update both together.
