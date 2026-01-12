# Pixel-Perfect Landing Page – Sculptique Product

A pixel-accurate front-end rebuild of the Sculptique product landing page, with a strong focus on typography precision, responsive layout, and clean, production-style UI interactions.

## Reference

- Original page: https://trysculptique.com/products/lymph-cc-select
- Live demo: https://pixel-perfect-landing-page-test.vercel.app/

---

## Project Overview

This project recreates the **mobile product page experience** as closely as possible to the original design. The goal was not to redesign or optimize UX, but to translate an existing, production-grade layout into clean, maintainable front-end code while preserving visual fidelity.

The implementation prioritizes:

- Accurate spacing, font hierarchy, and layout rhythm
- Mobile-first responsiveness
- Clear separation between structure, styling, and behavior
- Minimal but deliberate JavaScript usage

---

## Tech Stack

- **HTML5**
- **Tailwind CSS (CLI build)**
- **Vanilla JavaScript**
- **Embla Carousel** (for touch-safe carousel behavior)

### Why Tailwind CSS

Tailwind CSS was chosen to efficiently reconstruct a layout with highly repetitive spacing, typography, and alignment patterns. Utility-first styling allowed the design system to be translated directly into code without recreating large custom stylesheets or copying source CSS.

This approach improves:

- Consistency across components
- Readability of layout intent
- Speed of iteration while maintaining accuracy

---

## Features Implemented

### Product Image Carousel

- Mobile-first main image carousel
- Thumbnail carousel showing 4 images at a time
- Touch / swipe navigation
- Arrow-based navigation
- Infinite looping and snap behavior handled via **Embla Carousel**

A carousel library was intentionally used to avoid fragile, custom gesture logic and ensure consistent behavior across devices.

---

### Modal Interaction

- Custom modal for the **“Nutritional Information”** CTA on the main product image
- Implemented using vanilla JavaScript
- Focused on correct positioning, layering, and interaction flow rather than animation-heavy effects

---

### Embedded Iframe Widget

- Clinician “Frontrow” sticker embedded via iframe
- Correct placement, sizing, and responsiveness
- External widget behavior (modals, tracking, cross-domain messaging) is managed entirely by the provider’s scripts

> Note: Modals triggered from within the iframe are not reimplemented locally, as they rely on cross-origin communication and proprietary logic.

---

## Tailwind CSS Build

Tailwind CSS is compiled using the CLI:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch


---

## How to Run

You can open `index.html` directly in the browser.

For a better development experience (auto reload), you may use:

- VS Code Live Server
  or
- Any local static server of your choice

---

## Project Scope & Limitations

Due to time constraints and personal reasons, I was unable to complete the full reference page. The focus of this submission is on:

- The hero product section
- Image carousel behavior
- Primary call-to-action interactions
- Visual accuracy of core components

Lower sections of the page can be added without refactoring the existing structure.

### Notes for Reviewers

- This project avoids copying source CSS or JavaScript from the original site
- Third-party widgets are treated as black boxes, as they would be in a real production environment
- Emphasis is placed on realistic front-end decision-making, not overengineering
```
