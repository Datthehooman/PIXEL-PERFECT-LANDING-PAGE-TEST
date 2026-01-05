# Pixel-Perfect Landing Page – Sculptique Product

A pixel-accurate front-end rebuild of the Sculptique product landing page, focused on typography precision, responsive layout, and clean UI interactions.

## Reference

- Original page: https://trysculptique.com/products/lymph-cc-select

---

## Tech Stack

- **HTML5**
- **Tailwind CSS (CLI build)**
- **Vanilla JavaScript** (minimal, interaction-only)

**Why Tailwind CSS**  
Tailwind CSS was chosen to efficiently reconstruct an existing, highly repetitive layout system. Instead of recreating large custom stylesheets, design patterns such as typography, spacing, and layout were translated into utility-based styles, improving consistency and readability while avoiding direct CSS copying.

---

## Tailwind CSS Build

Tailwind CSS is compiled using the CLI:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

---

## How to Run

You can open `index.html` directly in the browser.

For a better development experience (auto reload), you may use:

- VS Code Live Server  
  or
- Any local static server of your choice
