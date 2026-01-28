---
title: "Premium Property Management (PPM)"
description: "A high-scale enterprise real estate ERP featuring dual-app architecture for property owners and tenants, managing complex leasing, accounting, and maintenance workflows."
category: "Enterprise SaaS"
metrics: "Architected 90% of Frontend Core"
tags: ["React", "Redux Toolkit", "Bootstrap", "RBAC", "Next.js", "TailwindCSS"]
pubDate: 2022-10-19
featured: true
order: 2
thumbnail: "/assets/projects/ppm.png"
links:
  - text: "Live"
    url: "https://moody-rocks.web.app"
  - text: "Admin Portal (Demo)"
    url: "https://ppm.meganoslab.com/admin"
  - text: "Tenant Portal (Demo)"
    url: "https://ppm.meganoslab.com/tenant"
---

## The Technical Challenge

PPM is a massive ERP-level system comparable to industry leaders like AppFolio. The challenge was to manage deep, interconnected workflows; including leasing, accounting, inventory, and maintenance across two distinct applications (Admin/Owner and Tenant) while maintaining strict Role-Based Access Control (RBAC).

## Key Contributions

### 1. Lead Frontend Architecture

I architected 90% of the frontend from scratch, establishing the foundational folder structure and state management strategy using **Redux Toolkit**. I served as the Lead Engineer, supervising junior developers and ensuring code quality through rigorous PR reviews and cross-functional coordination with Backend and DevOps teams.

### 2. Custom Component Systems

On the public-facing platform, I moved away from heavy third-party libraries to optimize performance. I engineered a library of lightweight, reusable components (such as custom Accordions and Modals) using **TailwindCSS**, ensuring we only shipped the exact code required for the UI, significantly reducing bundle size.

### 3. Enterprise-Grade State & Logic

I implemented complex business logic for modules like Purchase Orders, Fixed Assets, and Rental Applications. By utilizing **Axios** interceptors and modular Redux slices, I ensured that data flow remained predictable and secure across the multi-tenant environment.

### 4. Performance & Scalability

Focused on **Code Splitting** and **Lazy Loading** to ensure the enterprise engine remained performant even as the feature set grew. I translated intricate Figma designs (including: complex hover animations) into a responsive, accessible system that handles high-density data without sacrificing user experience.
