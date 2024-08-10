import type { IconName } from './icons'

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
	| 'Steam'

export type SocialMetaData = {
	name: SocialMedia
	icon: IconName
	href: string
	active: boolean
	linkTitle: string
}
