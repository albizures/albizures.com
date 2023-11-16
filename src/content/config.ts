import { defineCollection, z } from 'astro:content';
import { SITE } from '../config';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			author: z.string().default(SITE.author),
			publicatedAt: z.date(),
			title: z.string(),
			slug: z.string().optional(),
			featured: z.boolean().optional(),
			draft: z.boolean().optional(),
			tags: z.array(z.string()).default(['others']),
			ogImage: image()
				.refine((img) => img.width >= 1200 && img.height >= 630, {
					message: 'OpenGraph image must be at least 1200 X 630 pixels!',
				})
				.or(z.string())
				.optional(),
			description: z.string(),
			canonicalURL: z.string().optional(),
		}),
});

const project = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			publicatedAt: z.date(),
			shortDescription: z.string(),
			slug: z.string().optional(),
			ogImage: image()
				.refine((img) => img.width >= 1200 && img.height >= 630, {
					message: 'OpenGraph image must be at least 1200 X 630 pixels!',
				})
				.or(z.string())
				.optional(),
			draft: z.boolean().default(true).optional(),
			tags: z.array(z.string()).default(['others']),
		}),
});

export const collections = { blog, project };
