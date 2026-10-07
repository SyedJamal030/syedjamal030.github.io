import type { SiteConfig } from "~/types";

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Site configuration updated for Syed Jamal.
 */
export const siteConfig: SiteConfig = {
  name: "Syed Jamal | Senior Frontend Engineer",

  logo: {
    header: { src: "/assets/logo.png", width: 164, height: 58 },
    footer: { src: "/assets/logo.png", width: 164, height: 58 },
  },

  author: "Syed Jamal",
  role: "Senior Frontend Engineer & Web Developer",
  title: "Syed Jamal | Senior Frontend Engineer & Web Developer",
  description:
    "Portfolio of Syed Jamal, a senior frontend engineer with 5+ years of experience building scalable web applications in React, Next.js, and TypeScript.",
  url: "https://syedjamal030.github.io",
  ogImage: "/og-default.png",
  locale: "en",
  themeColor: "#BFA181",
  themeDarkColor: "#A98F67",
  yearsOfExp: "Fiver Years",

  contact: {
    email: "syed.jamal.waheed@gmail.com",
    phone: "+92 321 6228321",
    phoneHref: "+923216228321",
    location: "Based in Gujrat, PK · Remote-ready",
    availability:
      "Available for full-time remote roles and selective contracts",
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: "https://formsubmit.co/7da8d2ea7fc4b73470825e0fbb5ddc72",
  },

  social: [
    { label: "GitHub", href: "http://github.com/syedJamal030/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-jamal-waheed", icon: "linkedin" },
  ],

  about:
    "Senior frontend engineer with 5+ years of experience delivering production web applications in React, Next.js, and TypeScript. Focused on clean architecture, full-feature execution, and fast load times.",

  copyrightHolder: "Syed Jamal",
};

export default siteConfig;
