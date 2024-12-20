import type { PostEntry } from '../content/config'
import { Resvg } from '@resvg/resvg-js'
import satori, { type SatoriOptions } from 'satori'
import postOgImage from './og-templates/post'
import siteOgImage from './og-templates/site'

async function fetchFonts() {
	// Regular Font
	const fontFileRegular = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf',
	)
	const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer()

	// Bold Font
	const fontFileBold = await fetch(
		'https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf',
	)
	const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer()

	return { fontRegular, fontBold }
}

const { fontRegular, fontBold } = await fetchFonts()

const options: SatoriOptions = {
	width: 1200,
	height: 630,
	embedFont: true,
	fonts: [
		{
			name: 'IBM Plex Mono',
			data: fontRegular,
			weight: 400,
			style: 'normal',
		},
		{
			name: 'IBM Plex Mono',
			data: fontBold,
			weight: 600,
			style: 'normal',
		},
	],
	graphemeImages: {
		'🇬🇹': 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f1ec-1f1f9.svg',
		'😜': 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f61c.svg',
	},
}

async function svgBufferToPngBuffer(svg: string) {
	const resvg = new Resvg(svg)

	const resolved = await Promise.all(
		resvg.imagesToResolve().map(async (url) => {
			const img = await fetch(url)
			const code = await img.text()
			return {
				url,
				code,
			}
		}),
	)

	if (resolved.length > 0) {
		for (const result of resolved) {
			const { url, code } = result
			// resvg doesn't support resolve svg images
			// so convert them with resvg is a workaround
			const png = await svgBufferToPngBuffer(code)
			resvg.resolveImage(url, png)
		}
	}

	const pngData = resvg.render()
	return pngData.asPng()
}

export async function generateOgImageForPost(post: PostEntry) {
	const svg = await satori(postOgImage(post), options)
	return svgBufferToPngBuffer(svg)
}

export async function generateOgImageForSite() {
	const svg = await satori(siteOgImage(), options)
	return svgBufferToPngBuffer(svg)
}
