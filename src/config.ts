import type { SocialMetaData } from './socialMedia';

export const SITE = {
	website: 'https://astro-paper.pages.dev/', // replace this with your deployed domain
	author: 'Sat Naing',
	desc: 'A minimal, responsive and SEO-friendly Astro blog theme.',
	title: 'Jose Albizures',
	ogImage: 'astropaper-og.jpg',
	lightAndDarkMode: true,
	postPerPage: 6,
} as const;

export type Site = typeof SITE;

export const LOCALE = ['en-EN'] as const; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: Array<SocialMetaData> = [
	{
		name: 'Github',
		href: 'https://github.com/albizures',
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: 'Facebook',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Facebook`,
		active: false,
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/albzrs',
		linkTitle: `${SITE.title} on Instagram`,
		active: true,
	},
	{
		name: 'LinkedIn',
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
	{
		name: 'Twitch',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitch`,
		active: false,
	},
	{
		name: 'YouTube',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on YouTube`,
		active: false,
	},
	{
		name: 'WhatsApp',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false,
	},
	{
		name: 'Snapchat',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Snapchat`,
		active: false,
	},
	{
		name: 'Pinterest',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Pinterest`,
		active: false,
	},
	{
		name: 'TikTok',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on TikTok`,
		active: false,
	},
	{
		name: 'CodePen',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on CodePen`,
		active: false,
	},
	{
		name: 'Discord',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Discord`,
		active: false,
	},
	{
		name: 'GitLab',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on GitLab`,
		active: false,
	},
	{
		name: 'Reddit',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Reddit`,
		active: false,
	},
	{
		name: 'Skype',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Skype`,
		active: false,
	},
	{
		name: 'Steam',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Steam`,
		active: false,
	},
	{
		name: 'Telegram',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Telegram`,
		active: false,
	},
	{
		name: 'Mastodon',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Mastodon`,
		active: false,
	},
];
