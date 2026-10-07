---
title: Frame Fitness custom subscription storefront
client: Frame Fitness
year: "2021 - 2022"
category: Web
excerpt: Built the first two storefront releases, driving initial pre-orders for a connected fitness startup.
description: Case study on building a custom React storefront, Shopify GraphQL integration, and Stripe checkout for Frame Fitness.
image:
  src: /assets/projects/framefitness.png
  alt: Frame Fitness web storefront interface displaying product details and checkout flows
  width: 900
  height: 675
services: ["Frontend engineering", "Custom e-commerce", "API integration"]
technologies:
  [
    "React.js",
    "Shopify GraphQL",
    "Stripe Checkout",
    "Bootstrap",
    "CSS3",
    "Axios",
  ]
results:
  - value: "R1 & R2"
    label: Successive web storefront releases delivered
  - value: "100%"
    label: Pixel-perfect UI fidelity from Figma specifications
  - value: "Sub-second"
    label: Fluid marquee and CSS scroll animation rendering
externalUrl: https://framefitness.com/
featured: true
order: 1
draft: false
---

## The problem with off-the-shelf checkout flows

Frame Fitness entered the market with a connected Pilates reformer hardware platform combining a $4,999 device purchase with a $39.99 monthly content subscription.

In 2021, standard Shopify storefront templates could not support this hybrid hardware and recurring monthly subscription billing model out of the box. The client needed a custom frontend to present a luxury physical product, process pre-orders, handle recurring subscription payments, and publish editorial blog content without relying on rigid ecommerce themes.

## What we did

As the lead frontend engineer on the outsourced web development team, I took full ownership of building the R1 and R2 web releases from the ground up.

**Built pixel-perfect layouts from Figma.** Translated complex, media-rich visual designs into responsive layouts using React.js, React-Bootstrap, and plain CSS, ensuring identical visual presentation across desktop, tablet, and mobile viewports.

**Integrated Shopify via GraphQL.** Connected the custom client-side application to Shopify using its GraphQL API to fetch product catalogues and render blog content dynamically within the custom interface.

**Implemented direct payments.** Integrated Stripe Checkout to handle custom transactional workflows for physical pre-orders and subscription plans.

**Optimized key interface animations.** Engineered custom lightweight CSS marquee animations and scroll-triggered text effects, avoiding heavy third-party animation libraries to preserve low bundle sizes and smooth rendering.

Coordinated regularly with the backend engineer, who managed a Django Python API for auxiliary user data and SendGrid email notifications.

## What shipped

Two completed frontend production releases that served as the primary marketing and sales channel during the brand launch. The site successfully processed high volumes of customer pre-orders and established the public digital identity for the business, securing major investor backing.

The underlying layout architecture and component structure proved robust enough that the client retained the frontend interface work even after eventually migrating their platform infrastructure.

> Building custom storefronts means solving platform constraints early. The UI must deliver a luxury brand experience without slowing down payment processing or API data fetches.

## What I would do differently

I built the initial releases as a React single-page application based on project constraints and tooling at the time.

Today, as a senior web developer, I would build this application using Next.js. Leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) would significantly improve search engine crawlability, speed up initial page render times for media-heavy marketing pages, and allow for secure, server-side GraphQL queries to the Shopify store.
