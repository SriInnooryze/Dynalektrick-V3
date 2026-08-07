# Dynalektric Deployment Guide

## Deployment Environments

### 1. Staging Environment
- **Trigger**: Pushes to `staging` branch or GitHub Actions Staging workflow.
- **Build Mode**: `BUILD_MODE=staging`
- **Robots Directive**: `noindex, nofollow`
- **Target**: Staging CDN / Server

### 2. Production Environment
- **Trigger**: Pushes to `main` branch or GitHub Actions Production workflow.
- **Build Mode**: `BUILD_MODE=production`
- **Robots Directive**: `index, follow`
- **Target**: Production CDN / Web Host (`dynalektric.com`)

---

## Pre-Deployment Checklist
1. Verify build with `npm run build`.
2. Inspect `dist/` directory output for pre-rendered static HTML content.
3. Check `dist/robots.txt` and `dist/sitemap.xml`.
4. Ensure all image assets in `assets/` and `public/` copy cleanly into `dist/`.
