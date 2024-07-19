import type { IconType } from 'react-icons'
import {
	LuExternalLink,
	LuGithub,
	LuGitlab,
	LuInstagram,
	LuLinkedin,
	LuMail,
	LuMenu,
	LuMoon,
	LuSearch,
	LuSun,
	LuTwitch,
	LuTwitter,
	LuX,
	LuYoutube,
} from 'react-icons/lu'

import { FaCodepen, FaSteam, FaTiktok } from 'react-icons/fa'
import type { SocialMedia } from '../socialMedia'

export const Icons = {
	Search: LuSearch,
	Sun: LuSun,
	Moon: LuMoon,
	Menu: LuMenu,
	Close: LuX,
	ExternalLink: LuExternalLink,
}

export const SocialIcons: Record<SocialMedia, IconType> = {
	GitLab: LuGitlab,
	Twitch: LuTwitch,
	Twitter: LuTwitter,
	Youtube: LuYoutube,
	Github: LuGithub,
	Instagram: LuInstagram,
	Linkedin: LuLinkedin,
	TikTok: FaTiktok,
	CodePen: FaCodepen,
	Steam: FaSteam,
	Mail: LuMail,
}
