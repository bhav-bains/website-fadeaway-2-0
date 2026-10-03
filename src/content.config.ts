import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CONTENT_TAGS } from './data/tags';

const tags = z.array(z.enum(CONTENT_TAGS)).default([]);

// Real, permission-confirmed client work only. Never invent a client, result or quote.
// Exception: `placeholder: true` entries exist to design the layout; getCaseStudies() drops them from production builds.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        client: z.string(),
        summary: z.string(),
        results: z.array(z.string()).default([]),
        image: image().optional(),
        imageAlt: z.string().optional(),
        url: z.url().optional(),
        // Detail page (copy/case-studies.md, "Schema additions"). All optional so placeholders still build.
        metaDescription: z.string().max(155).optional(),
        industry: z.string().optional(),
        services: z.array(z.string()).default([]),
        timeline: z.string().optional(),
        beforeImage: image().optional(),
        beforeImageAlt: z.string().optional(),
        // Share image for the detail page (1200x630); falls back to `image`, then the sitewide default
        ogImage: image().optional(),
        // Extra screenshots shown on the detail page ("A Closer Look"); first item renders wide
        gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
        // Article schema dates. Normally left out: they come from git (src/lib/git-dates.ts), so datePublished is
        // the day the entry reaches `main` (launch) and dateModified the day it last changed there. Set to override.
        datePublished: z.coerce.date().optional(),
        dateModified: z.coerce.date().optional(),
        tags,
        rank: z.number().int().default(100), // lower shows first in proof grids
        placeholder: z.boolean().default(false),
        permissionConfirmed: z.boolean().default(false),
      })
      .refine((d) => d.placeholder || d.permissionConfirmed, {
        message: 'Real case studies need permissionConfirmed: true (or mark the entry placeholder: true)',
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
