/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'blockquote p:first-of-type::before': null,
						'blockquote p:last-of-type::after': null,
					},
				},
			},
		},
	},
	daisyui: {
		themes: ['garden', 'dim'],
	},
}
