import type { APIRoute } from 'astro'
import { generateOgImageForSite } from '../utils/ogImages'

export const GET: APIRoute = async () => {
	const image = await generateOgImageForSite()
	const body = new Uint8Array(image)
	return new Response(body, {
		headers: { 'Content-Type': 'image/png' },
	})
}
