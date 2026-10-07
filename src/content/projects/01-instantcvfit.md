---
title: InstantCVFit AI resume tailor
client: InstantCVFit
year: "2026"
category: Product
excerpt: Full-stack AI resume tailoring platform built to automate ATS alignment and version control.
description: A case study on building InstantCVFit, an AI resume tailoring tool engineered with React, TypeScript, Cloudflare Workers, and Supabase.
image:
  src: /assets/projects/instantcvfit.png
  alt: InstantCVFit web application interface displaying resume customization tools and job description input
  width: 900
  height: 675
services:
  [
    "Full-stack development",
    "AI API integration",
    "Database architecture",
    "UI/UX engineering",
  ]
technologies:
  [
    "React",
    "TypeScript",
    "Cloudflare Workers",
    "Supabase",
    "Google Gemini API",
    "Fluent UI",
  ]
results:
  - value: "<2 min"
    label: Average time to tailor and export a targeted resume
  - value: "100%"
    label: Reduction in local PDF version clutter
  - value: "50/day"
    label: Generation quota supported per authenticated user
externalUrl: https://instantcvfit.web.app
featured: true
order: 1
draft: false
---

## The problem with manual application tailoring

Applying for software roles after a layoff exposed a clear operational bottleneck. Every job description required a targeted resume aligned with specific keywords, skills, and Applicant Tracking Systems (ATS).

Manually adjusting bullet points for dozens of applications produced a chaotic pile of local PDF versions on disk. Existing AI writing tools frequently hallucinated job titles, invented non-existent technical skills, and produced generic prose. The process needed automated keyword alignment grounded strictly in real candidate experience, without local file clutter.

## What I built

As a full-stack web developer and frontend engineer, I took complete ownership of InstantCVFit from initial architecture to final production deployment on Firebase.

I designed the platform to process raw resumes against target job descriptions, rewrite bullet points with strong action verbs, and enforce strict ATS styling rules.

- **Client-side document parsing.** Integrated `pdf.js` directly within the React frontend to parse uploaded resume files and handle multi-column layouts locally before payload transmission.
- **Grounded AI prompt pipeline.** Configured the Google Gemini API through Cloudflare Workers edge functions. Prompts strictly enforce grounding rules, ensuring the model never invents employment history, credentials, or fake dates.
- **Data persistence and auth with Supabase.** Structured PostgreSQL tables to store persistent baseline resumes and saved generation history. Configured Google OAuth alongside tier-based rate limiting to grant 3 guest generations and 50 daily generations for authenticated accounts.
- **ATS-optimized browser rendering.** Built client-side PDF export features using Fluent UI and custom print stylesheets. Users can visually review job-matched keywords in the workspace before generating clean print files directly through native browser print routines.

## What shipped and impact

The platform transformed an inefficient 30-minute editing session into a streamlined workflow completed in under two minutes per application.

Centralizing all generated resumes in a structured cloud database eliminated local file management entirely. Candidates maintain one baseline resume in the app, tailoring targeted variations on demand with full access to previous outputs.

> Tailoring a resume for every job application used to consume hours and leave dozens of orphaned files on my drive. Automating the grounding and rendering logic reduced prep time to two minutes while maintaining complete accuracy.

## What I would do differently

In the initial release, PDF text extraction runs on the main browser thread. For large or complex multi-page inputs, delegating layout parsing to a Web Worker thread will prevent UI frame drops on lower-end mobile devices.

Architectural iterations are also underway to introduce an in-app rich editor. Allowing candidates to make minor manual tweaks directly in the workspace avoids redundant LLM API calls, reducing latency and operational costs. Additionally, replacing immediate PDF file downloads with an interactive canvas export flow will streamline document staging for active job hunts.
