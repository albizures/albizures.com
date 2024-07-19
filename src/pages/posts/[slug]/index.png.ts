import type { APIRoute } from 'astro'
import { slugifyStr } from '../../../utils/collections'
import { generateOgImageForPost } from '../../../utils/ogImages'
import { type PostEntry, getPosts } from '../../../content/config'

export async function getStaticPaths() {
	const posts = await getPosts().then((p) =>
		p.filter(({ data }) => !data.draft && !data.ogImage),
	)

	return posts.map((post) => ({
		params: { slug: slugifyStr(post.data.title) },
		props: post,
	}))
}

export const GET: APIRoute = async ({ props }) =>
	new Response(await generateOgImageForPost(props as PostEntry), {
		headers: { 'Content-Type': 'image/png' },
	})
