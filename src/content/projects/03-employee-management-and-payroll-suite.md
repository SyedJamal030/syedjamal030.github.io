---
title: Employee Management & Payroll Suite
client: Internal Product
year: "2025"
category: Product
excerpt: Automated internal payroll engine and time tracking suite built to eliminate spreadsheet overhead
description: Full-stack internal web application built with React, TailwindCSS, and Firebase to automate team hour tracking, live exchange rate conversions, and payroll slip generation.
image:
  src: /assets/projects/employee-management-and-payroll-suite.png
  alt: Employee Management & Payroll Suite
  width: 900
  height: 675
services:
  [
    "Full-Stack Development",
    "Internal Tooling",
    "Process Automation",
    "Frontend Architecture",
  ]
technologies:
  ["React", "TailwindCSS", "Firebase Auth", "Firestore", "Firebase Hosting"]
results:
  - value: "1 min"
    label: Processing time per employee payroll
  - value: "100%"
    label: Automated USD to PKR rate conversion
  - value: "0"
    label: Manual spreadsheets required for monthly audits
externalUrl: http://mega-employee-management-nos.firebaseapp.com/
featured: true
order: 2
---

## The scaling bottleneck of manual spreadsheets

When our engineering team expanded between 2022 and 2025 to manage multiple parallel software projects, operational administration hit a wall. Time logging and monthly payroll calculations were managed entirely across separate Google Spreadsheets.

While spreadsheets worked for two or three developers, team growth made the process inefficient. Managing payroll required manually checking each employee log, calculating custom billable hours, applying exchange rate conversions, and drafting individual payment receipts.

## Architecting a lean full-stack solution

To eliminate this manual burden, I designed and developed a dedicated internal management platform. Working as sole full-stack engineer, I used Gemini to rapidly prototype the core architecture in two days, subsequently expanding the system based on direct employee feedback.

**Secure role-based authentication.** Integrated Firebase Authentication to establish access controls. Employees log in through a secured dashboard to log daily hours, while administrators retain full visibility over company-wide records and project allocations.

**One-click payroll calculations.** Built flexible time-aggregation logic in React that supports both standard calendar months and custom date ranges. Administrators generate verified payrolls in a single step rather than computing totals manually.

**Automated currency conversion.** Embedded real-time FX API integration to automatically retrieve current USD to PKR exchange rates, generating itemized payout slips with local currency breakdowns instantly.

**Lightweight project tracking.** Designed a minimal project allocation module within Firestore, allowing developers to tag hours directly to client projects without the clutter of heavyweight management tools.

## Operational impact

The system completely replaced manual spreadsheet audits across the organization. The administrative task of verifying hours and generating payroll was reduced from hours of manual labor to under one minute per employee.

> Replacing spreadsheet tracking with a unified database model eliminated manual calculation errors and freed up critical leadership time every billing cycle.

## Next technical iterations

The current pipeline requires an administrator to trigger payment releases and manually deliver generated slips. The next planned update will introduce Firebase Cloud Functions with SMTP integration to automate email distribution upon payroll generation, establishing a fully autonomous pipeline.
