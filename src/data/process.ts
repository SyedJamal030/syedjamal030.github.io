import type { ProcessStep } from "~/types";

export const process: ProcessStep[] = [
  {
    stage: "Stage 01",
    title: "Scope & Architecture",
    body: "Reviewing Figma specs, API docs, and product requirements. We map out data models, state boundaries, and technical trade-offs before writing production code.",
    timing: "Week 1",
  },
  {
    stage: "Stage 02",
    title: "Foundations & Tokens",
    body: "Setting up repository structure, design tokens, and core UI components. Data fetching contracts and API schemas get established early to prevent integration blockers.",
    timing: "Week 2",
  },
  {
    stage: "Stage 03",
    title: "Full-Stack Build",
    body: "Developing responsive interfaces, complex state management, and backend integrations. Staging deployments give your team continuous access to review features as they complete.",
    timing: "Weeks 3 to 5",
  },
  {
    stage: "Stage 04",
    title: "Audit & Handover",
    body: "Core Web Vitals tuning, accessibility checks, and production deployment. You receive a clean codebase with comprehensive documentation for seamless team maintenance.",
    timing: "Week 6",
  },
];

export const processHeading = {
  eyebrow: "Engineering Process",
  title: "Four steps from technical requirements to production deployment.",
  intro:
    "Development moves fastest when expectations are clear. Every phase delivers working software, clean component architectures, and reliable feedback loops.",
};
