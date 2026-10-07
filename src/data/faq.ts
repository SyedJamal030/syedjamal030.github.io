import type { FaqItem } from "~/types";

export const faq: FaqItem[] = [
  {
    question: "What types of engagements do you accept?",
    answer:
      "I am available for full-time remote Senior Frontend Engineer roles and selective contract engagements. Contracts range from end-to-end feature builds taking two to six weeks down to targeted performance audits.",
  },
  {
    question: "What is your primary technical stack and UI capability?",
    answer:
      "My core stack is React, Next.js, and TypeScript. For UI architecture, I build precision interfaces using whatever fits your ecosystem, including plain CSS with custom properties, Tailwind CSS, shadcn/ui, Material UI, Shopify Polaris, DaisyUI, and Fluent-UI. On the backend, I build API routes, auth logic, and database schemas with Supabase, Firebase, and Node.js.",
  },
  {
    question: "Can you work directly alongside our existing engineering team?",
    answer:
      "Yes. I integrate directly into your existing workflow, participating in standups, submitting structured pull requests, and adhering to your established codebase conventions and design systems.",
  },
  {
    question: "Can you handle backend tasks independently?",
    answer:
      "Yes. While my main focus is frontend engineering, I handle database schemas, API routes, edge functions, and third-party integrations like Stripe without requiring dedicated backend support.",
  },
  {
    question: "How do you ensure code quality and performance?",
    answer:
      "I write strictly typed TypeScript code with explicit component boundaries and clean styling architecture. Every deliverable includes Core Web Vitals optimization, responsive cross-browser testing, and WCAG accessibility compliance.",
  },
  {
    question: "How do we start a project or hiring discussion?",
    answer:
      "Send over your job description or project requirements. I will review the technical scope and reply within one business day with clear next steps.",
  },
];

export const faqHeading = {
  eyebrow: "FAQ",
  title: "Common questions about technical stack, engagements, and hiring.",
  asideTitle: "Have a specific question?",
  asideBody:
    "Send over your job description or product requirements. I will review the scope and reply with availability within one business day.",
};
