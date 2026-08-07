# ADR 0002: Build-Time JSX Transpilation via esbuild

## Status
Accepted

## Context
The legacy application compiled JSX in the browser using Babel Standalone. For enterprise performance and reliability, browser-side compilation was removed in favor of build-time transpilation.

## Decision
Use `esbuild` transform API (`scripts/build/build-js.cjs`) to transpile JSX source files into readable ES2017 JS files stored in `build/`.

## Consequences
- **Positive**: Eliminates runtime Babel overhead, speeds up initial page load, provides instant JSX compilation.
- **Negative**: Requires running build step before testing or previewing changes.
