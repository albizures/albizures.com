import rss from '@astrojs/rss'
import { SITE } from '../config'
import { slugify, sortCollection } from '../utils/collections'
import { getPosts } from '../content/config'

export async function GET() {
	const posts = await getPosts()
	const sortedPosts = sortCollection(posts)
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: SITE.website,
		items: sortedPosts.map(({ data }) => ({
			link: `posts/${slugify(data)}`,
			title: data.title,
			description: data.description,
			pubDate: new Date(data.publicatedAt),
		})),
	})
}
