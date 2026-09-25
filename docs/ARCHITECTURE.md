# Architecture

## Engine decision

The slice uses a lightweight browser stack rather than Godot 4.x. Godot would become attractive for a larger simulation with authored scenes, navigation, many actors, and complex animation. For this milestone, its Web export size, cross-origin isolation considerations, export tooling, and mobile startup overhead would add risk without improving the central two-dimensional loop.

HTML/CSS/Canvas provides faster iteration, immediate static hosting, small transfer size, direct touch support, and reliable `localStorage`. The world renderer and state systems remain modular enough to migrate or expand later. There are no runtime dependencies or package supply-chain requirements.

## Runtime structure

- `game.js`: bootstrap, input, save state, alchemy, UI, audio synthesis, animation loop, and procedural world renderer.
- `data/recipes.json`: commutative recipe definitions, descriptions, categories, and optional world-effect identifiers.
- `data/elements.json`: four primordial element definitions. Discovered element metadata is derived from recipes.
- `styles.css`: parchment/brass responsive interface, modal presentation, and mobile layout.
- `web/`: exact deployable copy.

## Data architecture

Recipes are normalized by sorting both ingredient names into a stable key. `A + B` and `B + A` therefore resolve identically. Gameplay scripts do not contain the recipe graph. Each recipe can declare a `worldEffect`, which is applied once on first discovery.

## Save architecture

One versioned JSON document is stored under `alchemy-island-v01` in `localStorage`. It contains discovered elements, known recipes, world effects, statistics, settings, player position, tutorial status, and finale state. Saves occur after experiments, setting changes, milestones, and every five seconds during play.

## World evolution

The canvas renderer draws a stable island each frame and conditionally layers transformation modules based on persisted world-effect IDs. This avoids scene replacement and makes the development of the island cumulative.

## Deployment

The `/web` directory is buildless static output. Host that directory. The game must be served over HTTP(S) because browsers block JSON `fetch` from `file://`. No special response headers are required.
# Living World layer (v0.4)

The Canvas renderer derives atmosphere from a lightweight client-side time cycle rather than storing thousands of simulation ticks. Sun, moon, stars, weather, fireflies, player gait, and construction reveals are deterministic render effects. The landmark map is generated from the same saved `effects` and `discovered` state as the physical island, so it cannot reveal structures the player has not created. Older saves are migrated by merging new setting defaults during load.

# Settlement layer (v0.5)

Settlement state is a small saved object containing population, four bounded resources, the last simulation timestamp, and milestone completion. Ten-second deterministic ticks derive production from existing discoveries and world effects; returning players receive a bounded catch-up rather than an unbounded offline simulation. Settler motion is visual and route-based, avoiding pathfinding or agent-AI cost. The painted island base is a single compressed browser asset beneath the existing dynamic objects.
