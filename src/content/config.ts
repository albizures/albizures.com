import {
	defineCollection,
	z,
	type CollectionEntry,
	getCollection,
} from 'astro:content';
import { SITE } from '../config';

const posts = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			author: z.string().default(SITE.author),
			publicatedAt: z.date(),
			title: z.string(),
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

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			link: z.string(),
			publicatedAt: z.date(),
			featured: z.boolean().optional(),
			description: z.string(),
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

export type PostEntry = CollectionEntry<'posts'>;
export type ProjectEntry = CollectionEntry<'projects'>;
export type EntryFilter<TEntry> = (entry: TEntry) => boolean;

export function getPosts(filter?: EntryFilter<PostEntry>) {
	return getCollection('posts', filter);
}

export function getProjects(filter?: EntryFilter<ProjectEntry>) {
	return getCollection('projects', filter);
}

export const collections = { posts: posts, projects };
