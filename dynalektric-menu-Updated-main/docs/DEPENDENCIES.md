# Dynalektric Dependency Management Guide

## Core Dependencies

### Production / Browser CDN Runtime
- `react@18.3.1` (Loaded via UNPKG CDN UMD build)
- `react-dom@18.3.1` (Loaded via UNPKG CDN UMD build)

### Build & Static Generation Tooling
- `esbuild@^0.28.1`: Ultra-fast JSX to ES2017 transpiler.
- `puppeteer@^25.3.0`: Headless Chrome static site generator.

---

## Dependency Update Policy
- **CDN Libraries**: Version numbers are explicitly pinned in HTML files (`18.3.1`). Any upgrades require verification against `esbuild` transpile compatibility.
- **npm Packages**: Run `npm audit` before updates and test `npm run build` after dependency updates.
