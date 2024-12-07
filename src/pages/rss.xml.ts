import rss from '@astrojs/rss'
import { SITE } from '../config'
import { getPosts } from '../content/config'
import { slugify, sortCollection } from '../utils/collections'

export async function GET() {
	const posts = await getPosts()
	const sortedPosts = sortCollection(posts)
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: SITE.website,
		items: sortedPosts.map((post) => ({
			link: `posts/${slugify(post)}`,
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(post.data.publicatedAt),
		})),
	})
}
