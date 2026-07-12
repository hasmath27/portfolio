# Portfolio — React + Vite

Bold & modern dark/light mode portfolio.

## Quick start

```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production

```bash
npm run build
```
Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Editing your content

**`src/data.js`** — edit everything here:
- `profile` — name, role, email, phone, GitHub, LinkedIn, photo path
- `projects` — all 9 projects (set `featured: true` on one)
- `skillGroups` — your tech stack
- `certificates` — add titles, issuers, dates, image paths
- `education` — your degree details

## Adding your photo

1. Copy your photo to `/public/photo.jpg`
2. In `src/data.js` change `photo: null` → `photo: "/photo.jpg"`

## Adding certificate images

1. Copy images to `/public/certificates/`
2. In `src/data.js` change `image: null` → `image: "/certificates/your-file.png"`

## Dark / Light mode

The toggle button is in the top-right of the header.
The site remembers your choice in localStorage.
It also respects your system's preferred color scheme on first visit.

## Re-theming

Edit the CSS variables in `src/index.css` under `:root` (light mode)
and `[data-theme="dark"]` (dark mode).

## File structure

```
src/
  data.js           ← edit your content here
  index.css         ← design tokens / global styles
  ThemeContext.jsx  ← dark/light mode logic
  App.jsx           ← page layout
  components/
    Header.jsx      ← nav + theme toggle
    Hero.jsx        ← intro + photo + stats
    Projects.jsx    ← projects + filter
    Skills.jsx      ← tech stack grid
    Certificates.jsx← certificate cards
    About.jsx       ← about + education
    Footer.jsx      ← contact + footer
```
