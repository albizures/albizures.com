import type { APIRoute } from 'astro'
import { getPosts, type PostEntry } from '../../../content/config'
import { slugifyStr } from '../../../utils/collections'
import { generateOgImageForPost } from '../../../utils/ogImages'

export async function getStaticPaths() {
	const posts = await getPosts().then((p) =>
		p.filter(({ data }) => !data.draft && !data.ogImage),
	)

	return posts.map((post) => ({
		params: { slug: slugifyStr(post.data.title) },
		props: post,
	}))
}

export const GET: APIRoute = async ({ props }) => {
	const image = await generateOgImageForPost(props as PostEntry)
	const body = new Uint8Array(image)
	return new Response(body, {
		headers: { 'Content-Type': 'image/png' },
	})
}
