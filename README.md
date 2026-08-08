# Voss Spine — 3D Spinal Surgeon Website

A React + Vite + Tailwind site for a spinal surgery practice, featuring a
procedurally-built 3D spine (Three.js / react-three-fiber) that rotates as
the visitor scrolls, revealing a different set of clinically-marked points
at each of three stages: **cervical → thoracic → lumbar**.

## Quick start

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Dependencies

Everything is already listed in `package.json` — `npm install` pulls all of
these automatically:

- `react`, `react-dom` — UI library
- `vite`, `@vitejs/plugin-react` — dev server / bundler
- `tailwindcss`, `postcss`, `autoprefixer` — styling
- `three` — core 3D engine
- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — helpers used here for `<Html>` labels and `<Line>`
- `framer-motion` — available for extra UI animation (not required by the
  current 3D scroll effect, which uses plain scroll math)

## How the 3D scroll effect works

- `src/spineData.js` — defines the 3 stages (cervical / thoracic / lumbar),
  each with a scroll `range`, a `rotationDeg` range, and 2 marker points
  (title + note + position along the spine curve).
- `src/components/SpineModel.jsx` — procedurally builds the spine from a
  `CatmullRomCurve3` (natural double-S curvature): a glowing tube for the
  spinal cord, plus vertebral bodies, discs, and spinous processes placed
  along the curve.
- `src/hooks/useScrollProgress.js` — tracks scroll progress (0→1) through a
  300vh-tall pinned section using `getBoundingClientRect`.
- `src/components/SpineCanvas.jsx` — rotates the spine group based on scroll
  progress and toggles which stage's markers are visible.
- `src/components/Marker.jsx` — a glowing point + leader line + floating
  HTML label for each clinical annotation, fading in/out per stage.
- `src/components/ScrollSpineSection.jsx` — the sticky section combining
  the canvas with the stage title/copy/progress dots on the left.

Scroll through the "Anatomy" section on the page to see the spine rotate
through all three stages, each surfacing new marked points.

## Customizing

- Add/edit markers or stage copy in `src/spineData.js` and
  `src/components/ScrollSpineSection.jsx` (`stageCopy` object).
- Adjust colors/fonts in `tailwind.config.js`.
- Adjust the spine curvature by editing `CONTROL_POINTS` in
  `src/components/SpineModel.jsx`.
