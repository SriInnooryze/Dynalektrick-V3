# Dynalektric Enterprise Frontend Architecture

Enterprise-grade frontend platform for **Dynalektric Equipment Private Limited** — engineered for high performance, scalability, maintainability, and static site prerendering.

---

## 🏛️ Architecture Overview

The codebase is organized into modular layers inside `src/`:

```
dynalektric-menu-Updated-main/
├── .env                       # Base environment variables
├── .env.staging               # Staging configuration
├── .env.production            # Production configuration
├── package.json               # Enterprise scripts & dependencies
├── README.md                  # Project overview & guide
├── .github/
│   └── workflows/             # CI/CD Workflows (build, lint, deploy)
├── docs/                      # Comprehensive Architecture & Operating Docs
│   ├── ARCHITECTURE.md
│   ├── BUILD_PIPELINE.md
│   ├── DEPLOYMENT.md
│   ├── COMPONENT_GUIDE.md
│   ├── CODING_STANDARDS.md
│   ├── DEPENDENCIES.md
│   ├── RELEASE_PROCESS.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   ├── HOSTING_INSTRUCTIONS.txt
│   └── adr/                   # Architecture Decision Records
│       ├── 0001-folder-structure.md
│       ├── 0002-build-pipeline.md
│       └── 0003-prerender.md
├── public/                    # Static public assets (HTML, assets, sitemap)
├── scripts/                   # Build & prerender scripts
│   ├── build/                 # esbuild transpile & clean
│   ├── prerender/             # Puppeteer static site generation
│   ├── verify/                # Verification utilities
│   └── optimize/              # Asset optimization
├── src/                       # Modular Application Source
│   ├── config/                # Constants, SEO metadata, site config
│   ├── data/                  # Products, Industries, Certifications catalogs
│   ├── lib/                   # DOM, Browser, Performance, Storage helpers
│   ├── adapters/              # Analytics, Forms, Images, Export adapters
│   ├── services/              # API, Contact, Export business services
│   ├── types/                 # JSDoc domain type definitions
│   ├── performance/           # Lazy loading, Preloading, Observers, Metrics
│   ├── logger/                # Structured logging layer
│   ├── errors/                # React Error Boundary & Global Error Handler
│   ├── utils/                 # DOM & General utilities
│   ├── hooks/                 # Custom React hooks (useReveal, useTweaks)
│   ├── components/            # Layout, Common, and Media components
│   ├── pages/                 # Home, About, Products, Industries, Contact, Export, Innovation
│   └── app.jsx                # Main SPA application entrypoint
└── tests/                     # Unit & E2E Test Suite Skeletons
```

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Transpile JSX Source Files
```bash
npm run build:js
```

### 3. Production Static Site Prerender Build
```bash
npm run build
```
The static site output is generated in `dist/`.

---

## 📚 Documentation & ADRs
Detailed technical documentation and architectural decision records are located in [`docs/`](file:///c:/Users/SriBalaji/Pictures/dynalektric%203rd/dynalektric-menu-Updated-main/docs/).
