import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CONTENT_TAGS } from './data/tags';

const tags = z.array(z.enum(CONTENT_TAGS)).default([]);

// Real, permission-confirmed client work only. Never invent a client, result or quote.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      summary: z.string(),
      results: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      url: z.url().optional(),
      tags,
      rank: z.number().int().default(100), // lower shows first in proof grids
      permissionConfirmed: z.literal(true),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,yaml,json}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    tags,
    rank: z.number().int().default(100),
    permissionConfirmed: z.literal(true),
  }),
});

// Placeholder-era posts (pages parked in src/pages/_inactive/blog). Free-form tags until posts are rebuilt.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { 'case-studies': caseStudies, testimonials, blog };
