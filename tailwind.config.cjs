// @ts-check
function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}
/**
 *
 * @param {`--${string}`} variableName
 * @returns
 */
function oklch(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `oklch(var(${variableName}) / ${opacityValue})`;
		}
		return `oklch(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// Remove the following screen breakpoint or add other breakpoints
		// if one breakpoint is not enough for you
		screens: {
			sm: '640px',
		},

		// Uncomment the following extend
		// if existing Tailwind color palette will be used

		colors: {
			current: 'currentColor',
			transparent: 'transparent',
			primary: {
				DEFAULT: oklch('--primary'),
				content: oklch('--primary-content'),
				accent: oklch('--primary-accent'),
			},
			secondary: {
				DEFAULT: oklch('--secondary'),
				content: oklch('--secondary-content'),
				accent: oklch('--secondary-accent'),
			},

			base: {
				100: oklch('--base-100'),
				200: oklch('--base-200'),
				300: oklch('--base-300'),
				content: oklch('--base-content'),
			},
		},

		extend: {
			fontFamily: {
				mono: ['IBM Plex Mono', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
