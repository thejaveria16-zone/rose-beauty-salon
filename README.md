<<<<<<< HEAD
# 🌹 Rose Beauty Salon

> *Where Beauty Becomes Art*

A luxury digital experience for a fictional high-end beauty atelier. Built with React, Vite, Tailwind CSS and Framer Motion.

---

## ✨ What's inside

- **7 fully designed pages** — Home, About, Services, Gallery, Pricing, Testimonials, Contact
- **Cinematic hero** with parallax, layered imagery, staggered headline animation and floating ornaments
- **Scroll-driven storytelling** — parallax sections, fade-up reveals, sticky narratives
- **Premium micro-interactions** — button hover wipes, image tilt-zoom on hover, animated underlines, glow cards
- **Mobile-first responsive** — flawless from 320px to 4K
- **Editorial typography** pairing — Cormorant Garamond display, Manrope body, Pinyon script accents, Playfair fallback
- **Custom design system** — colour tokens, type scale, motion easings, glassmorphism utilities
- **Lazy-loaded routes** for performance
- **Lightbox gallery** with keyboard navigation and category filter
- **Working booking form** with success state
- **SEO meta tags** and accessible markup throughout

## 🎨 Design system

### Colour palette (from your link)
| Token         | Hex      | Usage                            |
|---------------|----------|----------------------------------|
| `thistle`     | `#CDB4DB`| soft mauve, gradients            |
| `lavender`    | `#FFC8DD`| primary pink, hero washes        |
| `carnation`   | `#FFAFCC`| accents, hover states            |
| `powder`      | `#BDE0FE`| section backgrounds              |
| `sky`         | `#A2D2FF`| cool accent, footer orbs         |
| `ivory`       | `#FBF7F2`| primary background               |
| `cream`       | `#F4EBE0`| section breaks                   |
| `champagne`   | `#D6B98C`| editorial gold-foil accent       |
| `gold`        | `#B8893D`| deep luxury gold                 |
| `ink`         | `#1A1418`| primary text, footer             |

## 🚀 Getting started

### Requirements
- Node.js **18+** (Node 20 recommended)
- npm, yarn or pnpm

### Install & run

```bash
# 1. install dependencies
npm install

# 2. start dev server (opens http://localhost:5173)
npm run dev

# 3. build for production
npm run build

# 4. preview the production build
npm run preview
```

That's it. No environment variables, no API keys, no external services required.

## 📁 Project structure

```
rose-beauty-salon/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI building blocks
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── PageHeader.jsx
│   │   ├── PageTransition.jsx
│   │   ├── Reveal.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceIcon.jsx
│   │   ├── TestimonialCarousel.jsx
│   │   ├── Lightbox.jsx
│   │   └── Marquee.jsx
│   ├── pages/              # Route-level pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── data/               # Content layer
│   │   ├── services.js
│   │   ├── gallery.js
│   │   ├── pricing.js
│   │   └── testimonials.js
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollToTop.js
│   ├── styles/             # Global styles + Tailwind layer extensions
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🖼️ Imagery

All images are loaded from **Unsplash CDN** (free to use, no attribution required for non-commercial). To swap them, edit the URLs in:

- `src/data/gallery.js` — gallery page
- `src/components/Hero.jsx` — hero stack
- `src/pages/Home.jsx` — signature ritual section
- `src/pages/About.jsx` — story and founder portraits

For production deployment, consider downloading the images and serving them locally for offline resilience and faster loads.

## 🎬 Animation overview

| Effect                              | Where                          | Built with             |
|-------------------------------------|--------------------------------|------------------------|
| Page transitions (fade + slide)     | All routes                     | Framer Motion          |
| Staggered word reveal               | Hero headline                  | Framer Motion          |
| Parallax image                      | Hero, About, Services preview  | useScroll + useTransform |
| Scroll fade-up reveal               | All section headers            | Reveal component       |
| Hover wipe on buttons               | All CTAs                       | CSS pseudo-elements    |
| Image tilt-zoom on hover            | Gallery cards                  | Tailwind transforms    |
| Endless marquee                     | Service strip on Home          | CSS keyframes          |
| Floating ornaments                  | Hero                           | CSS keyframes          |
| Animated testimonial slider         | Home + Testimonials            | Framer Motion AnimatePresence |
| Lightbox with keyboard nav          | Gallery                        | Framer Motion          |

## 🛠️ Tech stack

- **React 18** with hooks
- **Vite 5** — fast dev server, modern build
- **React Router v6** — client-side routing with lazy loading
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion 11** — production-grade animation library

## 📜 License

This project is provided for portfolio and educational purposes.

---

Crafted with intention. 🌹
=======
# rose-beauty-salon
>>>>>>> 462ada3c1d0f24d0f96a1f6996f15e743bde2cf1
