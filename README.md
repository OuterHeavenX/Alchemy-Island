# Alchemy Island — Thousand Paths v0.6.0

A complete, static browser game about combining four primordial elements across 1,000 discoveries and watching a lonely island grow into the beginnings of civilization.

## Play online

**[Play Alchemy Island](https://outerheavenx.github.io/Alchemy-Island/)**

## Play locally

Opening `index.html` directly is not supported because the data-driven recipe files are loaded with `fetch`.

```powershell
cd web
npx serve .
```

Open the local URL printed by `serve` (usually `http://localhost:3000`). No build step is required.

## Controls

- Move: WASD or arrow keys
- Mobile: on-screen joystick
- Alchemy: click/tap one discovered element, then a second, then **Combine**
- Journal: the top-right Journal button
- Island map: chart discovered landmarks and your current position
- Day/night cycle: enabled by default and adjustable in Settings

Progress saves automatically in browser `localStorage`. Use Settings → Reset Save to erase it.

Approach a discovered landmark and press **E** (or tap the contextual Inspect button) to learn how it changed the island. The game can also be installed from supported browsers and continues working offline after its first successful load.

Thousand Paths expands the data-driven recipe tree to exactly 1,000 reachable combinations and adds discovery search plus a near-full-screen mobile alchemy workspace. First Settlement and Living Island systems remain active.

## Deploy

Upload the contents of `/web` to any static host. GitHub Pages, Cloudflare Pages, Netlify, and a basic HTTP server all work. No special headers, server code, or engine runtime are required.

## Project layout

- `index.html`, `styles.css`, `game.js`: editable source
- `data/`: authoritative element and recipe data
- `web/`: deployable browser build
- `docs/`: design, architecture, scope, recipe, and expansion notes

## Technology

This slice uses dependency-free HTML, CSS, Canvas 2D, Web Audio, and JavaScript. See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for the Godot-versus-browser decision.
