# ADR 0003: Static Site Prerendering via Puppeteer

## Status
Accepted

## Context
Full SEO indexation requires pre-rendered HTML content for all pages, with environment-specific `robots.txt` policies (`staging` vs `production`).

## Decision
Use Puppeteer headless browser in `scripts/prerender/prerender.cjs` to launch a local server, load each HTML page, execute React hydration, and capture the fully rendered DOM HTML into `dist/`.

## Consequences
- **Positive**: Guarantees complete static HTML output with zero client JavaScript dependency for initial text rendering.
- **Negative**: Prerender build takes ~10-15 seconds to spin up headless browser and execute page renders.
