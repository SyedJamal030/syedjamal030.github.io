# Syed Muhammad Jamal Waheed — Senior Frontend Engineer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live-syedjamal030.github.io-b6f23a?style=flat-square)](https://syedjamal030.github.io/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)
[![Open to Work](https://img.shields.io/badge/Open%20to-Senior%20%2F%20Lead%20Frontend%20Roles-success?style=flat-square)](#hire-me)

**Hi, I'm a Senior Frontend Engineer and Web Developer with 5+ years of experience shipping production React, Next.js and TypeScript applications.** This repository is the source code of my personal portfolio: a fast, accessible, static Astro site with case studies, services and contact details.

**👉 Live site: [syedjamal030.github.io](https://syedjamal030.github.io/)**

---

## Hire Me

I'm currently **open to Senior / Lead Frontend Engineer roles** (remote full-time) and selective freelance engineering contracts.

If your team needs a frontend engineer who has shipped production code in **React / Next.js / TypeScript** at scale, can own a feature from the database schema to the UI pixel, and still thinks like a designer, let's talk.

- 💼 LinkedIn: [linkedin.com/in/syed-jamal-waheed](https://linkedin.com/in/syed-jamal-waheed)
- ✉️ Email: [syed.jamal.waheed@gmail.com](mailto:syed.jamal.waheed@gmail.com)
- 🌐 Portfolio: [syedjamal030.github.io](https://syedjamal030.github.io/)

---

## About Me

I am a frontend-focused software engineer with a unique background spanning design, content writing, and backend development.

My journey began with a CS degree, building local POS systems, and working as a Junior PHP developer, alongside freelancing in graphic design and writing. That diverse start gave me a strong appreciation for visual design and user empathy, which heavily influences how I build interfaces today.

---

## Skills & Expertise

| Area | Technologies |
| --- | --- |
| **Core frontend** | React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3 |
| **Data & backend integration** | Firebase (real-time data, auth), Supabase, Node.js, REST APIs, PHP |
| **Payments & commerce** | Stripe checkout integration, Shopify app development |
| **Desktop & tooling** | Electron, Astro, Git/GitHub |
| **Design sensibility** | UI/UX collaboration, Photoshop, Illustrator, design systems |

**Engineering philosophy:** pragmatic execution, clean separation of concerns, performance optimization, scalable UI architecture, and finding the real pain point before building the smallest thing that removes it.

> I lead with **Senior Frontend Engineer** because that's where my depth lies. I'm not a backend engineer and I don't pretend to be, but I'm fully comfortable owning a feature from the database schema all the way to the UI.

---

## Services

- **Web development**: high-performance React and Next.js applications and websites
- **Business systems**: dashboards, ERPs, payroll and admin tools
- **Product orchestration**: turning a pain point into a shipped product
- **Graphic design**: interface and brand visuals
- **Content writing**: clear, conversion-minded copy

---

## Featured Projects

Detailed case studies live on the portfolio's [Work page](https://syedjamal030.github.io/work/).

| Project | What it is |
| --- | --- |
| **InstantCVFit** | AI-powered resume tailoring tool that matches resumes to job descriptions in under two minutes. |
| **Product Genius AI** | An AI-powered personalization Shopify app for merchants |
| **PPM** | A high-density property management platform (ERP) featuring dual admin/tenant portals |
| **PQIS** | A modernized B2B textile quality inspection platform migrated from Oracle APEX to an Astro and Cloudflare edge architecture. |

---

## About This Repository

The site is built with **[Astro](https://astro.build)** (static output, no UI framework), **TypeScript (strict)** and plain CSS. It was adapted from the open-source [SWP Freelancer Portfolio](https://github.com/Scintillaweb/swp-freelancer-portfolio) theme.

### Site features

- ⚡ **Fast by default**: prerendered static HTML, a few kilobytes of vanilla JavaScript, no hydration
- ♿ **Accessible**: skip link, visible focus rings, keyboard-operable navigation, WCAG AA palette
- 🔍 **SEO built in**: canonical URLs, Open Graph and Twitter cards, JSON-LD structured data, generated sitemap, `robots.txt` and RSS feed
- 🧩 **Content collections**: typed Markdown schemas for projects (case studies) and services
- 🔒 **Privacy-friendly**: self-hosted variable fonts, no third-party requests
- 🎞️ **Respects `prefers-reduced-motion`** and works without JavaScript

### Tech stack

| Category | Technology |
| --- | --- |
| Framework | Astro (static HTML output) |
| Language | TypeScript (strict) |
| Styling | Plain CSS with custom properties |
| Content | Astro content collections (Markdown) |
| Integrations | `@astrojs/sitemap`, `@astrojs/rss` |
| Tooling | `@astrojs/check` |
| Hosting | GitHub Pages |

---

## Getting Started

**Requirements:** Node.js 22.12+ (22.19+ or 24+ recommended) and npm 9.6.5+.

```bash
git clone https://github.com/SyedJamal030/syedjamal030.github.io.git
cd syedjamal030.github.io
npm install
npm run dev        # http://localhost:4321
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check TypeScript and templates |

### Project structure

```
syedjamal030.github.io/
├── public/              # fonts, project images, favicons, manifest, robots.txt
└── src/
    ├── config/site.ts   # name, role, contact details, SEO defaults
    ├── content/
    │   ├── projects/    # case studies (Markdown)
    │   └── services/    # service pages (Markdown)
    ├── data/            # FAQ, stats, toolkit, process, testimonials, navigation
    ├── components/      # Astro components (home sections, cards, header, footer, SEO)
    ├── layouts/         # BaseLayout, PageLayout
    ├── lib/             # JSON-LD builders and helpers
    ├── pages/           # routes (home, about, services, work, contact, 404, rss)
    └── styles/          # tokens, base, components, sections, pages
```

### Using this as a template

Fork it and start in `src/config/site.ts`. Everything else (header, footer, metadata, structured data, sitemap, RSS) follows from it. Replace the logo, avatar, project images and copy with your own. See the [original theme documentation](https://github.com/Scintillaweb/swp-freelancer-portfolio#readme) for the full customisation guide.

---

## Credits & Licenses

- Theme: [SWP Freelancer Portfolio](https://github.com/Scintillaweb/swp-freelancer-portfolio) by Scintillaweb, MIT licensed
- Fonts: Space Grotesk and Inter Tight, [SIL Open Font License 1.1](https://openfontlicense.org/) (texts in `public/fonts/`)
- Personal content, project case studies, logo and avatar © Syed Muhammad Jamal Waheed. Please don't reuse them without permission.

## License

Code is released under the **MIT License**, keeping the original theme's copyright notice. Personal content and branding are excluded as noted above.

---

<sub>**Keywords:** Senior Frontend Engineer · React Developer · Next.js Developer · TypeScript Developer · Full-Stack Web Developer · Shopify App Developer · Firebase · Supabase · Remote Frontend Engineer · Freelance Web Developer · Developer Portfolio</sub>
