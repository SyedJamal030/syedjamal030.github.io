---
title: PQIS Enterprise Platform
client: Pakistan Quality Inspection Services
year: "2026"
category: Web
excerpt: Legacy Oracle APEX migration to a static Astro architecture on Cloudflare Workers
description: Case study on modernizing a legacy B2B textile quality inspection platform using Astro, TailwindCSS, and serverless edge infrastructure.
image:
  src: /assets/projects/pqis.com.pk.png
  alt: Pakistan Quality Inspection Service - Landing Page Screenshot
  width: 900
  height: 675
services:
  [
    "Frontend Architecture",
    "Legacy Migration",
    "Edge Infrastructure",
    "UI/UX Redesign",
  ]
technologies: ["Astro", "Cloudflare Workers", "TailwindCSS", "DaisyUI", "SVG"]
results:
  - value: "100%"
    label: Decoupled from legacy database rendering
  - value: "60fps"
    label: Native vector map transition performance
  - value: "<100ms"
    label: Edge response latency via Cloudflare Workers
featured: true
order: 3
---

> **Archival Note:** This project was executed as a technical modernization client build. Following contract completion, the project was archived and the original infrastructure altered. This case study focuses on the frontend system redesign, static site migration, and custom SVG component architecture executed during development.

## The legacy APEX bottleneck

PQIS provides B2B textile inspection services, competing directly with global compliance authorities like SGS. However, their original web presence was hosted on an unoptimized Oracle APEX single-page application.

The legacy platform suffered from cluttered visual layouts, slow database-backed response times, fragmented navigation, and severe mobile layout failures. To win contracts with international enterprise buyers, the company required a modern, fast, and authoritative digital platform.

## Modernizing architecture with Astro and edge compute

As lead frontend engineer, I owned the complete technical migration from 0 to 1. I replaced the monolithic single-page legacy layout with a structured, multi-page platform optimized for speed and clarity. I also configured the domain setup, email routing, and edge deployment strategy.

**Static architectural migration with Astro.** Shifted the platform from dynamic server-side page generation to static HTML using Astro. This removed the dependency on the legacy backend database for marketing and service pages, eliminating render delays.

**Custom interactive coverage map.** Built an interactive regional compliance map component ("Core Coverage Footprint") from scratch using dark-themed vector paths instead of heavy third-party mapping libraries. Implemented asynchronous state logic where selecting an operational node, such as Karachi, triggers hardware-accelerated zoom and pan transitions with an instant reset handler.

**Serverless edge deployment.** Integrated Cloudflare Workers to handle serverless form submissions and security headers, ensuring minimal global request latency without managing origin infrastructure.

**Responsive design system.** Engineered a clean UI using TailwindCSS and DaisyUI, converting complex service lists into categorized, scannable layouts tailored for procurement managers.

## Technical delivery

The migration converted an unstable database application into an edge-hosted enterprise web platform.

- Replaced a legacy Oracle APEX application with a static, edge-rendered architecture.
- Authored a zero-dependency SVG vector map delivering fluid transitions across mobile and desktop viewports.
- Established edge routing and serverless mail handling via Cloudflare Workers for fast global delivery.

> Decoupling static operational content from heavy enterprise databases eliminated latency barriers while establishing a professional footprint for global B2B clients.

## Technical takeaways

Migrating legacy B2B applications away from complex database engines to static site architectures provides immediate performance gains. Building interactive visual elements using raw SVG vector manipulation and state logic rather than heavy GIS frameworks keeps bundle sizes minimal and guarantees predictable execution across low-power client devices.
