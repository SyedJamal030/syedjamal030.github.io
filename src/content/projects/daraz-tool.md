---
title: "Daraz Label Generator"
description: "A desktop automation tool built to optimize e-commerce logistics by restructuring high-volume shipping labels for cost-effective printing."
category: "Desktop App"
metrics: "50% Lower Printing Costs"
tags: ["Electron.js", "React", "PDF Processing", "Automation"]
pubDate: 2023-02-15
featured: false
order: 4
thumbnail: "/assets/projects/daraz-label-thumb.png"
links:
  - text: "Source Code"
    url: "https://github.com/SyedJamal030/daraz-label-printing"
---

### The Challenge

The Daraz seller platform generates shipping labels in a format that allocates one label per page, leading to significant paper waste and increased printing overhead for high-volume stores. Manually rearranging these labels was a time-consuming chore that stalled the fulfillment process.

### The Solution

I engineered a cross-platform desktop application using **Electron.js** that automates the "nesting" of shipping labels. The tool intercepts standard Daraz PDF exports and intelligently realigns them into a print-optimized layout.

### Technical Implementation

- **PDF-to-Image Pipeline:** Developed a processing engine to convert static PDF pages into transparent image layers for dynamic manipulation.
- **Smart Layout Engine:** Built an algorithm to calculate and re-align 2–3 labels per A4 sheet, maximizing space utilization without compromising barcode scan-ability.
- **Desktop Integration:** Leveraged Electron’s file system access to allow users to handle bulk files locally, ensuring privacy and speed.
- **UX Flow:** Streamlined the workflow into a three-step process: Upload, Auto-Adjust, and Download.

### Impact

The tool effectively **cut printing costs by up to 60%** and reduced the time spent on print preparation from several minutes to a few seconds. It turned a manual logistics bottleneck into a two-click automated task.
