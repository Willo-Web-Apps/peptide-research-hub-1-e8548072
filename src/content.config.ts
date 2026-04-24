import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    /** Optional per-post OG image URL (1200×630). Falls back to site default. */
    ogImage: z.string().url().optional(),
  }),
});

export const collections = { blog };
