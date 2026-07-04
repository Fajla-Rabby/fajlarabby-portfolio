# fajla.dev — Portfolio

Personal portfolio for **Md. Fajla Rabby** — Laravel backend developer specializing in
AI-powered SaaS integrations.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Three.js via @react-three/fiber — **hero only**, lazy-loaded, desktop only
- Framer Motion — restrained scroll reveals

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel / Netlify)

No config needed — it's a static Vite site:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Before going live — fill in the placeholders

Search the codebase for `[PLACEHOLDER]`. Everything editable lives in `src/data.js`:

1. **Upwork profile URL** — `links.upwork` in `src/data.js`
2. **Resume PDF** — drop `fajla-rabby-resume.pdf` into `public/`; path is `links.resume`
3. **Profile photo** — drop a compressed image (<150KB, ~800×800) into `public/` and swap the
   placeholder div in `src/components/About.jsx` (instructions are in a comment there).
   Note: `C:\Projects\portfolio\profile.jpg` exists but is 3.4MB — compress it first
   (e.g. squoosh.app → WebP, quality ~75).
4. **Testimonials** — two dashed placeholder cards in `src/components/Proof.jsx`

## Performance notes

- Three.js (~200KB gz) is code-split into its own chunk and only fetched on
  desktop-class devices (`min-width: 768px` + fine pointer + no reduced-motion).
  Mobile and reduced-motion users get a static gradient/dot-grid hero — zero 3D cost.
- The render loop pauses (`frameloop="never"`) when the hero scrolls out of view.
- DPR is capped at 1.5 and antialiasing is off — invisible for a particle field, much cheaper.
- If the hero still feels heavy on low-end desktops: lower `count` in
  `src/components/HeroScene.jsx` (1800 → 900), or delete the `<mesh>` wireframe icosahedron.
  To drop 3D entirely, return `false` from `useWantsScene()` in `Hero.jsx` — the fallback
  background is designed to stand on its own.

## Brand tokens (reuse on LinkedIn/GitHub/Upwork)

- Base: `#0a0c10` · Surface: `#11141b` · Accent: `#a3e635` (acid green)
- Display font: Space Grotesk · Body: Inter
- Positioning line: “Backend developer building production AI-powered SaaS systems.”
