# Dynalektric Release Process

## Versioning & Release Workflow

1. **Feature Branching**: Development occurs on feature branches (`feature/xxx` or `refactor/xxx`).
2. **Pull Request & Review**: Code changes are merged into `staging` for QA review.
3. **Staging Build Verification**: CI executes `npm run build:staging` and runs prerender checks.
4. **Production Release**: Merge into `main` branch triggers `npm run build:production`.
5. **Artifact Deployment**: Pre-rendered output in `dist/` is deployed to the production web hosting environment.
