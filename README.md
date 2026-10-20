# Charitha Reddy - Doctoral Applicant & Researcher Portfolio

A modern, responsive React portfolio application built with Vite and TypeScript for Charitha Reddy, Doctoral Applicant in Technology Adoption & Implementation Science (MiM Distinction, Liverpool | MTech Industrial Intelligent Systems | IEEE-Published).

## Key Features

- **Academic Profile & Doctoral Agenda**: Highlights research interests in technology adoption, implementation science, socio-technical frameworks (TAM, UTAUT, CFIR, Diffusion of Innovations), and empirical research milestones.
- **Interactive Category Filtering**: Explore professional experience segmented by focus area (*Product & Strategy*, *Operations & Claims*, *Embedded & Engineering*), featuring smooth staggered transitions.
- **Dynamic Scroll-Spy & Floating Top Bar**: Top bar reveals upon scrolling, highlighting the active section (*Skills*, *Highlights*, *Experience*, *Education*, *Research*) with rapid dropdown navigation.
- **Dual Theme Support**: Dark and light mode toggle with local storage persistence and system preference fallback.
- **Scroll Progress Indicator**: Real-time gradient progress bar tracking viewport progress.
- **Comprehensive Showcase**:
  - Research & Implementation Science competencies alongside technical and engineering skillsets
  - Featured research summary and master's thesis on drone-based medical transport
  - Academic recognition: 'Student of the Year' (2025/26) at University of Liverpool
  - Professional experience timeline across robotics/IoT and product management
  - Education history and peer-reviewed IEEE publication

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Native CSS system with custom properties and theme tokens matching original design specs
- **Icons**: SVG & Lucide React
- **Hosting**: GitHub Pages (Automated via GitHub Actions)

## GitHub Pages Deployment

This repository is configured for automated build and deployment to GitHub Pages via GitHub Actions.

### Repository Configuration:
1. In your GitHub repository (`CharithaBV/charithabv.github.io`), navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every time changes are pushed to the `main` branch, `.github/workflows/deploy.yml` will automatically:
   - Install dependencies (`npm ci`)
   - Compile the TypeScript React application (`npm run build`)
   - Deploy the production bundle to `https://charithabv.github.io/`

## Local Development

```bash
npm install     # Install dependencies
npm run dev     # Start development server on port 3000
npm run build   # Typecheck and build for production (outputs to /dist)
npm run lint    # Run TypeScript checks
```