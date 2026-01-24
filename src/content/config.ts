import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    link: z.string().url().optional(),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    // For skills.md
    skills: z.array(z.object({
      name: z.string(),
      category: z.string(),
      color: z.string(),
    })).optional(),
    // For learning.md
    learning: z.array(z.string()).optional(),
    entries: z.array(z.object({
      title: z.string(),      // e.g., "Software Engineer" or "BS Computer Science"
      subTitle: z.string(),   // e.g., "Company Name" or "University Name"
      duration: z.string(),   // e.g., "2023 (Present)"
      description: z.string().optional(),
    })).optional(),
    // For contact.md
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    resumeLink: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  about: aboutCollection,
};
