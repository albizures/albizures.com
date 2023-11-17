import type { SocialMetaData } from './socialMedia';

export type Site = {
	website: string;
	author: string;
	description: string;
	title: string;
	ogImage?: string;
	lightAndDarkMode: boolean;
	postPerPage: number;
};

export const SITE: Site = {
	website: 'https://albizures.netlify.app',
	author: 'Jose Albizures',
	description:
		"I'm Jose - I'm a web developer from Guatemala 🇬🇹, I like to build useful (and useless too 😜) apps and play with code.",
	title: 'Jose Albizures',
	// ogImage: 'main.jpg',
	lightAndDarkMode: true,
	postPerPage: 6,
} as const;

export const LOCALE = ['en-EN'] as const; // set to [] to use the environment default

export const SOCIALS: Array<SocialMetaData> = [
	{
		name: 'Github',
		href: 'https://github.com/albizures',
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/albzrs',
		linkTitle: `${SITE.title} on Instagram`,
		active: true,
	},
	{
		name: 'Linkedin',
		href: 'https://www.linkedin.com/in/albizures/',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: 'Mail',
		href: 'mailto:jose@albizures.com',
		linkTitle: `Send an email to ${SITE.title}`,
		active: true,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/albzrs',
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
];
