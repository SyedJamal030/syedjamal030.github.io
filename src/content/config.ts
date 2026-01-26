import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    metrics: z.string(),
    tags: z.array(z.string()),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    thumbnail: z.string(),
    links: z.array(z.object({
      text: z.string(),
      url: z.string().url()
    })).optional(),
  }),
});

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
        metricValue: z.number().optional()
      }),
    ),
  }),
});

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
    description: z.string(),
    author: z.string(),
    email: z.string(),
    lookingFor: z.string(),
    oneLiner: z.string(),
    availability: z.enum(["Available", "Busy", "Limited"]),
    socials: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
        icon: z.string(),
      }),
    ),
    seo: z.object({
      ogImage: z.string(),
      keywords: z.array(z.string()),
    }),
  }),
});

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    headingMain: z.string(),
    headingAccent: z.string(),
    headingSuffix: z.string(),
    description: z.string(),
    stackTitle: z.string(),
    stack: z.array(z.string()),
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
