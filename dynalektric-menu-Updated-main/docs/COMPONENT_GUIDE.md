# Dynalektric Component Guide

## Component Architecture

Components are organized into three primary categories under `src/components/`:

### 1. Layout Components (`src/components/layout/`)
- `Header.jsx`: Global header navigation and mobile drawer.
- `Footer.jsx`: Global footer with links, DUNS seal, legal details, and social channels.
- `TweaksPanel.jsx`: Live design tweak controls panel.
- `Navigation.jsx`: Navigation links and routing triggers.

### 2. Common Components (`src/components/common/`)
- `Counter.jsx`: Animated number counter component.
- `EngineeringVisual.jsx`: Abstract SVG engineering schematic visual.
- `CaseStudyGrid.jsx`: Case studies layout grid.
- `FinalCTA.jsx`: Bottom call-to-action strip.
- `shared.jsx`: Global dataset and component exporter.

### 3. Media Components (`src/components/media/`)
- `image-slot.js`: Drag-and-drop fillable image placeholder Custom Element `<image-slot>`.
