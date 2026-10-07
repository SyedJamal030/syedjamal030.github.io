---
title: Product Genius AI dashboard and app migration
client: Product Genius AI
year: "2024 - 2026"
category: Product
excerpt: Modernized a Shopify app frontend from an unorganized legacy monolith to a scalable Vite and TypeScript architecture.
description: Case study on re-architecting the Product Genius AI Shopify app using React, Vite, TypeScript, and a feature-based design system.
image:
  src: /assets/projects/product-genius-ai.png
  alt: Product Genius AI - Landing Page Screenshot
  width: 900
  height: 675
services: ["Frontend architecture", "Shopify app development", "Design systems"]
technologies:
  ["React.js", "Vite", "TypeScript", "Shadcn UI", "Shopify Polaris", "FastAPI"]
results:
  - value: "V1 to V2"
    label: Full frontend architectural migration executed
  - value: "100%"
    label: Modular, feature-based codebase architecture
  - value: "Sub-50ms"
    label: Real-time telemetry dashboard state updates
externalUrl: https://www.productgenius.ai/
featured: true
order: 2
draft: false
---

## The cost of an unorganized legacy codebase

Product Genius AI delivers real-time e-commerce personalization driven by AI models that capture shopper micro-intentions like scroll velocity and hesitation. As merchant adoption grew, the original Shopify app frontend (V1) became an operational bottleneck.

The initial codebase relied on an unorganized React setup, outdated Shopify Polaris components, and tightly coupled state logic. Adding new configuration features or updating the analytics dashboard required digging through monolithic files, causing regression risks and slowing development velocity.

## What we did

After taking full ownership of the frontend app side, I planned and executed a complete architectural migration to V2 without breaking existing merchant workflows.

**Re-architected the application around features.** Shifted the code from a flat, file-type directory structure to a feature-based architecture, encapsulating domain logic, components, and API handlers into isolated modules.

**Upgraded build tooling and static typing.** Replaced the legacy build setup with React and Vite to drastically improve local build performance, while introducing strict TypeScript interfaces across all data contracts.

**Established a tokenized component system.** Integrated Shadcn UI alongside Shopify Polaris design tokens to create custom, reusable dashboard components that match native Shopify admin aesthetics while maintaining full design flexibility.

**Integrated real-time AI endpoints.** Connected the UI directly to backend FastAPI services that serve live model telemetry and feed customization settings to e-commerce merchants.

## What shipped

A production-ready V2 frontend infrastructure that replaced the legacy platform. The feature-based architecture, component design tokens, and state management patterns built during this rebuild established the scalable foundation that powers the core application interface.

> Software scale depends on clean system boundaries. Enforcing strict typing and modular directory structures early prevents tech debt from crippling feature execution as products grow.

## What I would do differently

In addition to the app dashboard rebuild, I migrated the public marketing site from Framer to Next.js to gain better control over performance and code structure.

Looking back as a senior web developer, managing a marketing platform migration simultaneously with a complete app re-architecture spread engineering bandwidth too thin. Keeping marketing site tooling isolated from the core application codebase allows a frontend engineer to focus entirely on domain architecture, state management, and dashboard performance.
