# Design QA — First Settlement v0.5.0

- Source visual truth: `C:\Users\jimmy\.codex\codex-remote-attachments\01a0d5b4-b5d3-7553-a6af-11ab783e8b0e\FBC680A9-A4D4-4775-A797-8D4A57C390BB\1-Pasted-Image-1.jpg` and `2-Pasted-Image-2.jpg`
- Implementation: `http://127.0.0.1:4173/?test=050`
- Implementation captures: `implementation-mobile-v050.png` and `implementation-mobile-panel-v050.png`
- Side-by-side evidence: `design-qa-comparison-v050.jpg` and `design-qa-panel-comparison-v050.jpg`
- Viewport: 590 × 1197 CSS px, device scale factor 1
- Source normalization: original 590 × 1279 captures cropped by 82 px to remove browser chrome, producing 590 × 1197 content comparisons
- State: mobile exploration view with the alchemy panel collapsed and expanded

## Comparison history

### Pass 1

- P1: The original island extended beyond both horizontal edges and read as flat concentric geometry. Fixed by replacing the base with a painterly island asset, fitting the complete shoreline inside the mobile viewport, and retaining dynamic discoveries above it.
- P1: The open alchemy panel consumed roughly half the display and crowded later rows. Fixed with a 45–46dvh bottom sheet, a four-column mobile discovery grid, and independent internal scrolling.
- P2: The initial generated island rendered with visible rectangular image bounds. Fixed by clipping it to the island silhouette and blending into the procedural ocean.
- P2: The celestial orbit could place the sun near the bottom controls. Fixed by constraining the sun/moon arc to the upper sky.
- P2: Navigation lacked a readable sense of settlement state. Fixed with a compact population/resource strip and a dedicated settlement overview.

### Pass 2

- Post-fix evidence: both comparison images show the complete shoreline, a substantially richer island surface, unobstructed exploration space, aligned top controls, and a more compact alchemy sheet.
- The open-panel comparison uses a four-element new-game save while the source contains a progressed inventory; this content difference is intentional and does not affect the verified panel geometry or scrolling behavior.

## Required fidelity surfaces

- Fonts and typography: the existing serif display system is preserved; hierarchy, labels, and small metadata remain readable at the target viewport.
- Spacing and layout rhythm: top controls fit without overflow, the island is fully framed, the settlement strip remains clear of the title, and the bottom sheet leaves meaningful world space visible.
- Colors and visual tokens: parchment, brass, deep teal, and elemental accents remain consistent while the island gains saturated painterly depth.
- Image quality and asset fidelity: the new 2048 × 1280 painted island source is sharp at mobile and desktop display sizes; clipping removes hard image boundaries.
- Copy and content: settlement labels are short, thematic, and communicate population, resources, jobs, and locked dependencies without exposing recipes.

## Interaction and runtime checks

- Continue, collapse/open alchemy, settlement overview, map, journal, settings, update control, day/night setting, and mobile breakpoint were exercised.
- Browser console warnings/errors checked: none.
- All 85 recipes remain data-driven and dependency-reachable.

## Follow-up polish

- P3: Purpose-built character sprites would better match the painted environment than the current lightweight figures.
- P3: A future audio pass could add layered settlement work and evening gathering ambience.

final result: passed
