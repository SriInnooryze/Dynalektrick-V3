# Dynalektric Build Pipeline Documentation

## Overview
The Dynalektric build system is designed for high-performance static site generation (SSG) without modifying browser runtime behavior or SEO metadata.

---

## Build Steps

```mermaid
sequenceDiagram
    participant Developer/CI as Developer / CI Pipeline
    participant Transpiler as esbuild (scripts/build/build-js.cjs)
    participant Server as HTTP Server (port 4173)
    participant Puppeteer as Headless Chrome (Puppeteer)
    participant Output as dist/ Directory

    Developer/CI->>Transpiler: npm run build
    Transpiler->>Transpiler: Transpile src/ JSX to build/*.js (ES2017)
    Developer/CI->>Server: Start local HTTP static server on 4173
    Developer/CI->>Puppeteer: Launch Puppeteer headless browser
    loop For each route (index, about, products, etc.)
        Puppeteer->>Server: Request page URL
        Server-->>Puppeteer: Return HTML + compiled JS
        Puppeteer->>Puppeteer: Execute React hydration & DOM render
        Puppeteer->>Output: Capture rendered DOM HTML into dist/*.html
    end
    Developer/CI->>Output: Copy assets/, public/, robots.txt, sitemap.xml
```

---

## Script Commands

- `npm run clean`: Removes existing `build/` artifacts.
- `npm run build:js`: Runs `esbuild` transpile on all source JSX files into `build/*.js`.
- `npm run build:staging`: Builds staging output with `BUILD_MODE=staging` (`robots.txt: Disallow /`).
- `npm run build:production`: Builds production output with `BUILD_MODE=production` (`robots.txt: Allow /`).
- `npm run build`: Full production clean, transpile, and static prerender into `dist/`.
