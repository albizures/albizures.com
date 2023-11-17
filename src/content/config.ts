import {
	defineCollection,
	z,
	type CollectionEntry,
	getCollection,
} from 'astro:content';
import { SITE } from '../config';

const post = defineCollection({
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

const project = defineCollection({
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

export type PostEntry = CollectionEntry<'post'>;
export type ProjectEntry = CollectionEntry<'project'>;
export type EntryFilter<TEntry> = (entry: TEntry) => boolean;

export function getPosts(filter?: EntryFilter<PostEntry>) {
	return getCollection('post', filter);
}

export function getProjects(filter?: EntryFilter<ProjectEntry>) {
	return getCollection('project', filter);
}

export const collections = { post, project };
