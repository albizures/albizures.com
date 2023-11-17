import type { IconType } from 'react-icons';
import {
	LuSearch,
	LuSun,
	LuMoon,
	LuMenu,
	LuX,
	LuExternalLink,
	LuGithub,
	LuGitlab,
	LuTwitch,
	LuTwitter,
	LuYoutube,
	LuInstagram,
	LuLinkedin,
	LuMail,
} from 'react-icons/lu/index';

import { FaTiktok, FaCodepen, FaSteam } from 'react-icons/fa/index';
import type { SocialMedia } from '../socialMedia';

export const Icons = {
	Search: LuSearch,
	Sun: LuSun,
	Moon: LuMoon,
	Menu: LuMenu,
	Close: LuX,
	ExternalLink: LuExternalLink,
};

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
};
