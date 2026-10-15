import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CONTENT_TAGS } from './data/tags';
import { illustrations, type IllustrationName } from './components/illustrations';

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
        tags,
        // Optional: which tags show as chips (default: all visible tags); every tag still counts for filtering
        displayTags: z.array(z.enum(CONTENT_TAGS)).optional(),
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

// Central work collection (CLAUDE.md section 8): every Fadeaway project, one item each, in src/content/portfolio.yaml.
// Pages read it through getWork() (src/lib/work.ts). Real work only, with client consent; never invent a project.
const portfolio = defineCollection({
  loader: file('src/content/portfolio.yaml'),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        url: z.url().optional(),
        kind: z.enum(['case-study', 'featured', 'labs', 'list']),
        group: z.enum(['ecommerce', 'practices', 'saas', 'organizations']).optional(),
        industry: z.string().optional(),
        summary: z.string().optional(),
        chips: z.array(z.string()).default([]),
        tags,
        status: z.enum(['live', 'beta', 'alpha']).optional(),
        owner: z.enum(['ours', 'cofounded', 'client', 'demo']).optional(),
        ongoing: z.boolean().default(false),
        image: image().optional(), // ../assets/portfolio/<id>/<id>-hero.png; without one the card shows line art
        imageAlt: z.string().optional(),
        // Line art shown when there is no image (an illustrations/ registry name); default picked from tags and kind
        art: z.enum(Object.keys(illustrations) as [IllustrationName, ...IllustrationName[]]).optional(),
        caseStudy: reference('case-studies').optional(),
        hidden: z.boolean().default(false),
        nofollow: z.boolean().default(false),
        noreferrer: z.boolean().default(false),
        rank: z.number().int().default(100),
      })
      .refine((d) => d.kind !== 'case-study' || d.caseStudy, { message: 'kind: case-study needs caseStudy (a case-studies slug)' })
      .refine((d) => d.kind !== 'list' || d.group, { message: 'kind: list needs a group' })
      .refine((d) => d.kind !== 'labs' || (d.owner && d.status), { message: 'kind: labs needs owner and status' })
      .refine((d) => d.kind !== 'featured' || (d.industry && d.summary), { message: 'kind: featured needs industry and summary' })
      .refine((d) => d.kind === 'case-study' || d.url || d.kind === 'labs', { message: 'featured and list entries need a url' }),
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

export const collections = { 'case-studies': caseStudies, portfolio, testimonials, blog };
