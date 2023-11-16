import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import slugify from '../utils/slugify';
import { SITE } from '../config';
import { sortCollection } from '../utils/collections';

export async function GET() {
	const posts = await getCollection('blog');
	const sortedPosts = sortCollection(posts);
	return rss({
		title: SITE.title,
		description: SITE.desc,
		site: SITE.website,
		items: sortedPosts.map(({ data }) => ({
			link: `posts/${slugify(data)}`,
			title: data.title,
			description: data.description,
			pubDate: new Date(data.publicatedAt),
		})),
	});
}
