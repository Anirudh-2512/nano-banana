# NANO BANANA 🍌

A premium juice brand landing page with scroll-driven 3D bottle animations, built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** https://nano-banana-dusky-two.vercel.app

## Features

- **Scroll-scrubbed bottle animation** — canvas-based frame sequence driven by scroll position
- **3 flavors** — Cream Mango, Dutch Chocolate, Ruby Pomegranate, each with its own color theme
- **Framer Motion scrollytelling** — text overlays fade/translate in sync with the bottle spin
- **Fully mobile responsive** — hamburger menu, guarded safe-area pill nav, scaled typography
- **Interactive product switcher** — side arrows + bottom flavor pill with animated background transitions

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, viewport metadata
  page.tsx          # Main page, product state + sections
  globals.css       # Global styles
components/
  Navbar.tsx        # Sticky nav + mobile hamburger menu
  ProductBottleScroll.tsx   # Canvas scroll-driven frame animation
  ProductTextOverlays.tsx   # Scrollytelling text sections
  Footer.tsx        # Site footer
data/
  products.ts       # Product data (flavors, copy, stats, gradients)
public/
  images/           # Frame sequences per flavor
```

## Deployment

Deploys automatically to Vercel on every push to `master`.

```bash
npm run build   # verify production build locally
```
