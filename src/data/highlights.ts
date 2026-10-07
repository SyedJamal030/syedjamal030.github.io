/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: "Hello, I am",
  /** Rendered on two lines. */
  nameLines: ["Syed", "Jamal"],
  intro:
    "Senior frontend engineer building web applications that handle complex data, load instantly, and convert users.",
  ctaLabel: "View projects",
  ctaHref: "/projects/",
  photo: {
    src: "/assets/avatar.png",
    alt: "Syed Jamal, senior frontend engineer",
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ["Senior Frontend Engineer", "React, Next.js, TypeScript"],
    title: ["Frontend", "Architecture"],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: [
      "/images/avatar-02.webp",
      "/images/avatar-01.webp",
      "/images/avatar-03.webp",
    ],
    stackBadge: "100%",
    kpi: "5+",
    kpiLabel: "years shipping production apps",
    note: "Based in Gujrat, PK · Remote-ready",
  },
};

export const collaborate = {
  eyebrow: "Engineering Collaboration",
  title:
    "You bring the product requirements, and I handle execution from UI components down to database integrations.",
  body: "I work directly with engineering leaders and product managers who need reliable, production-ready code. Whether you need a complex dashboard built from scratch or a feature set fully integrated, I take ownership from architecture to deployment.",
  badge: "5+ Years Engineering Experience",
  ctaLabel: "Discuss Your Project",
  ctaHref: "/contact/",
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: "/images/collab-team.webp",
      alt: "Developer reviewing web application architecture and UI components on a laptop screen",
      width: 760,
      height: 760,
    },
    {
      src: "/images/collab-meeting.webp",
      alt: "Frontend engineer analyzing component performance and code structure",
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: "Background",
  title:
    "Five years of shipping code taught me to keep systems simple and focus on execution.",
  body: "I spent the last five years building and scaling web applications for growth-stage product teams. My primary domain is the browser, but I do not stop at the frontend boundary. When a feature requires a database schema change, an API route, or Stripe webhook integration, I write the code myself.",
  points: [
    "Full-feature ownership from UI components down to backend integrations and database queries.",
    "Maintainable, clean code structures over complex abstractions that slow down iteration.",
    "Direct, transparent updates with zero technical posturing or fluff.",
  ],
  image: {
    src: "/images/about-studio.webp",
    alt: "Senior frontend engineer reviewing web application code and component architecture",
    width: 900,
    height: 954,
  },
  badge: {
    value: "5+",
    label:
      "Years building production web applications with React, Next.js, and TypeScript.",
  },
  ctaLabel: "See the work",
  ctaHref: "/projects/",
};

export const servicesHeading = {
  eyebrow: "Services",
  title: "How I help engineering teams ship better web products.",
  ctaLabel: "Discuss an engagement",
  ctaHref: "/contact/",
};

export const workHeading = {
  eyebrow: "Selected Work",
  title: "Production applications and technical case studies.",
};

export const journalHeading = {
  eyebrow: "Articles",
  title:
    "Notes on frontend architecture, state management, and web performance.",
  ctaLabel: "Read all articles",
  ctaHref: "/journal/",
};

export const cta = {
  title: "Ready to scale your web application or ship a critical feature?",
  body: "Send over your product goals, team needs, or technical requirements. I will review the details and respond with clear next steps within one business day.",
  primaryLabel: "Get in touch",
};
