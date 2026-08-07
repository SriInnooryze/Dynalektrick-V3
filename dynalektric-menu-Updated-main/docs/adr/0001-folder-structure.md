# ADR 0001: Enterprise Modular Folder Structure

## Status
Accepted

## Context
The initial codebase stored components, pages, data arrays, and scripts in flat monolithic files (`shared.jsx`, `page-*.jsx`, root level scripts). To scale engineering development and improve maintainability, a clean enterprise architecture was required without modifying any UI, UX, runtime behavior, or prerender output.

## Decision
Adopt a modular architecture in `src/` featuring:
- Dedicated layers: `config/`, `data/`, `lib/`, `adapters/`, `services/`, `types/`, `performance/`, `logger/`, `errors/`, `hooks/`, `components/`, `pages/`.
- Maintain global window bindings in `src/components/common/shared.jsx` to preserve script loading order in legacy HTML pages.

## Consequences
- **Positive**: High modularity, unit testability, clear separation of concerns, long-term maintainability.
- **Negative**: Requires maintaining barrel exports (`index.js`) for legacy window global compatibility.
