export type SocialMedia =
	| 'Github'
	| 'Instagram'
	| 'Linkedin'
	| 'Mail'
	| 'Twitter'
	| 'Youtube'
	| 'CodePen'
	| 'GitLab'
	| 'Twitch'
	| 'TikTok'
	// | 'Mastodon'
	| 'Steam';

export type SocialMetaData = {
	name: SocialMedia;
	href: string;
	active: boolean;
	linkTitle: string;
};
