import { defineCollection, z } from "astro:content";

// Multiple files (.md)
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // Short snippet for the card
    category: z.string(),
    metrics: z.string(), // e.g., "+30% Performance"
    tags: z.array(z.string()), // Tech stack tags
    pubDate: z.coerce.date(), // Date for sorting
    featured: z.boolean().default(false),
    order: z.number().default(99),
    thumbnail: z.string(),
    links: z.array(z.object({
      text: z.string(),
      url: z.string().url()
    })).optional(),
  }),
});

// Single Manifest (.json)
const experience = defineCollection({
  type: "data",
  schema: z.object({
    entries: z.array(
      z.object({
        company: z.string(),
        role: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        highlights: z.array(z.string()),
        skills: z.array(z.string()).optional(),
      }),
    ),
  }),
});

// Single Manifest (.json)
const skills = defineCollection({
  type: "data",
  schema: z.object({
    categories: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        suffix: z.string().optional().default(""),
        prefix: z.string().optional().default(""),
        color: z.enum(["primary", "secondary", "info"]),
        skills: z.array(z.string()),
        size: z.enum(["large", "tall", "small"]),
        layoutType: z.enum(["standard", "metric", "compact"]),
      }),
    ),
  }),
});

// Single Manifest (.json)
const education = defineCollection({
  type: "data",
  schema: z.object({
    entries: z.array(
      z.object({
        school: z.string(),
        degree: z.string(),
        period: z.string(),
        description: z.string().optional(),
      }),
    ),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    bio: z.array(z.string()),
    cvLink: z.string(),
    // Philosophy Toggle & Content
    showHighlights: z.boolean().default(true),
    highlightsTitle: z.string().optional(),
    highlights: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
        }),
      )
      .optional(),
    showImpact: z.boolean().default(true),
    impact: z
      .array(
        z.object({
          target: z.number(),
          label: z.string(),
          suffix: z.string().optional(),
          prefix: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const settings = defineCollection({
  type: "data",
  schema: z.object({
    siteName: z.string(),
    description: z.string(), // Default SEO Description
    author: z.string(),
    email: z.string(),
    availability: z.enum(["Available", "Busy", "Limited"]),
    socials: z.array(
      z.object({
        platform: z.string(), // e.g., "GitHub"
        url: z.string().url(),
        icon: z.string(), // We will use this to match SVG icons
      }),
    ),
    seo: z.object({
      ogImage: z.string(), // Default image for social sharing
      keywords: z.array(z.string()),
    }),
  }),
});

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    headingMain: z.string(), // "Architecting"
    headingAccent: z.string(), // "Scalable"
    headingSuffix: z.string(), // "Web Experiences"
    description: z.string(),
    primaryCTA: z.string(), // "View Projects"
    secondaryCTA: z.string(), // "Read Case Studies"
    stackTitle: z.string(), // "Trusted Tech Stack"
    stack: z.array(z.string()), // ["Next.js", "TypeScript", ...]
  })
});

export const collections = {
  projects,
  experience,
  skills,
  education,
  about,
  settings,
  hero,
};
