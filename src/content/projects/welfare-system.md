---
title: "Welfare Management System"
description: "A specialized tracking platform developed for a community society to digitize street-level fund collections and manage operational expenses."
category: "Management Tool"
metrics: "Zero-Latency Auditing"
tags: ["React", "Firebase", "CRUD", "Dashboard"]
pubDate: 2025-01-10
featured: false
order: 6
thumbnail: "/assets/projects/welfare.png"
---

### The Challenge

A local welfare society relied on manual tracking for fund collections across various streets and houses. This made it difficult to identify which houses were pending payments for the month or to get an accurate overview of the society's current financial standing.

### The Solution

I developed a centralized management tool that provides a real-time birds-eye view of all community operations. The focus was on transforming raw data into actionable insights for the management committee.

### Technical Implementation

- **Relational Data Mapping:** Architected a Firebase structure to link Streets to Houses, allowing for complex queries such as "Houses pending payment" for the current billing cycle.
- **Aggregated Dashboard:** Engineered a dynamic overview panel that calculates critical KPIs: Total Funds, Collection Progress by Street, and Remaining Balances.
- **Operational Tracking:** Built custom CRUD modules for managing Street lists, Worker details, and monthly Salary disbursements.
- **Payment Monitoring:** Implemented logic to track pending payments to workers, ensuring administrative tasks are handled before they become bottlenecks.

### Impact

The system replaced paper-based tracking with a **one-click dashboard**, providing immediate visibility into collection gaps and operational costs, which significantly improved the society's monthly planning.
