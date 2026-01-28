# 🚀 High-Performance Senior Portfolio Template

A "Pixel-Perfect" developer-focused portfolio template architected with **Astro**, **TypeScript**, and **Tailwind CSS**. Designed for Senior Engineers who prioritize performance, type-safety, and clean UI/UX.

## 🔗 Live Demo
Check out the reference implementation: [https://syedjamal030.github.io/](https://syedjamal030.github.io/)

## ✨ Key Features
* **Astro 4.0 Architecture:** Zero-shipping JS by default for lightning-fast Core Web Vitals.
* **Content Collections:** Type-safe Markdown management for Projects and Blog posts using Zod schemas.
* **Design-Led UI:** Clean, professional aesthetic built with Tailwind CSS, optimized for dark/light modes.
* **SEO Excellence:** Built-in OpenGraph tags, semantic HTML5, and automated sitemap generation.
* **CI/CD Ready:** Pre-configured GitHub Actions workflow for seamless deployment to GitHub Pages.

## 🛠️ Tech Stack
* **Framework:** [Astro](https://astro.build/) (Island Architecture)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Data Validation:** [Zod](https://zod.dev/) (For Content Collections)
* **Deployment:** GitHub Pages / Actions

## 🏁 Getting Started

### Installation
1.  **Fork & Clone:**
    ```bash
    git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
    cd portfolio
    ```
2.  **Install & Start:**
    ```bash
    npm install
    npm run dev
    ```
The site will be live at `http://localhost:4321`.

## 📂 Project Structure
* `src/content/`: The "Brain" of the site. Define your projects and bio in Markdown files.
* `src/components/`: Atomic UI components (Cards, Buttons, Layouts).
* `src/layouts/`: Base HTML wrappers for different page types.
* `public/`: Optimized assets and icons.

## 🚀 Deployment
Update the `site` and `base` properties in `astro.config.mjs` to match your GitHub profile, then push to `main`. The included GitHub Action will handle the rest.

## 📄 License
This project is available under the [MIT License](LICENSE).
