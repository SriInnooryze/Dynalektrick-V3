# Dynalektric Coding & Engineering Standards

## Principles
1. **Zero Runtime Breaking Changes**: Never alter function signatures, component props, or window export globals used by existing HTML pages.
2. **Modular File Boundaries**: Each domain component or dataset must live in its designated directory inside `src/`.
3. **No Ad-Hoc Styling**: Reuse global CSS variables (`--bg`, `--ink`, `--accent`, `--red`, `--font-body`) defined in `src/styles/variables.css`.
4. **Clean Code Structure**: Maintain readable JSX, strict ESLint compliance, and clear documentation.
