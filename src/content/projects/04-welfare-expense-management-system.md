---
title: Welfare Expense Management System
client: Malhu Khokhar Welfare Society
year: "2023 - 2025"
category: Web
excerpt: Digitizing door-to-door collection and ledger tracking for 700+ households.
description: Full-stack web application built with React and Firebase Firestore to automate field collections, accounting ledgers, and worker payroll for a local welfare organization.
image:
  src: /assets/projects/welfare-expense-management-system.png
  alt: Welfare Expense Management System - Login Screen (Landing Page)
  width: 900
  height: 675
services: ["Full-Stack Development", "UI/UX Design", "Database Architecture"]
technologies: ["React", "React-Bootstrap", "Firebase", "Firestore"]
results:
  - value: "700+"
    label: Households organized across 10+ streets
  - value: "100%"
    label: Paper log duplication eliminated
  - value: "< 1s"
    label: On-site entry and receipt generation time
externalUrl: https://housing-welfare.web.app/
featured: true
order: 1
draft: false
---

## Replacing paper logs across ten streets

A local welfare society was operating its monthly contribution collection entirely on physical paper. Volunteers walked ten streets to visit more than 700 houses every month, noting down payments by hand in field notebooks. Upon returning to the office, staff manually re-entered every line item into spreadsheets to maintain a digital backup.

This workflow caused frequent data entry errors, lost records, and hours of redundant administrative work. The organization needed a reliable digital system that volunteers could operate on mobile devices directly at the doorstep.

## Building a mobile-first field ledger

As the sole web developer and designer on the project, I engineered a full-stack progressive web application focused on speed, offline readiness, and clear accounting workflows.

**Structured household hierarchy.** Mapped the organization's physical territory into a Street to House database structure, allowing collectors to navigate neighborhoods and log payments in a few taps.

**Credit and debit core engine.** Implemented banking-style financial tracking that records household collections, organizational expenses, and worker payroll inside a single unified ledger.

**Instant receipt printing.** Integrated browser print interfaces to drive portable Bluetooth and thermal printers on-site, providing immediate paper proof of payment to residents just like a POS card terminal.

**Real-time reporting dashboards.** Built automated aggregation views that break down total liquidity into daily, monthly, and yearly summaries for management audits.

## Architecture and database performance

A core requirement was ensuring the application ran smoothly on low-end mobile devices over spotty mobile data connections. Standard database setups with 700+ active households can easily generate unnecessary read requests and slow down UI rendering.

To resolve this, I optimized the Firebase Firestore architecture by denormalizing read-heavy transaction totals and batching write operations. On the frontend engineer side, I used React and React-Bootstrap to deliver a lightweight interface that mirrors native mobile application patterns. Touch targets were enlarged for rapid field use, and local caching prevented UI lag during peak collection rounds.

## Impact and ongoing operations

The application completely replaced manual logbooks and spreadsheet transcription across all ten streets. Field volunteers now complete collection cycles faster, while management maintains real-time oversight of overall funds, expenses, and payroll.

The software has remained in active production for over two years, with periodic maintenance and feature updates provided as the society's operational requirements expand.
