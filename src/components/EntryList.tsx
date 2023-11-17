import React from 'react';
import { slugifyStr } from '../utils/collections';
import Datetime from './Datetime';
import { Icons } from './Icons';

type EntryListProps = {
	children: React.ReactNode;
};

export function EntryList(props: EntryListProps) {
	const { children } = props;
	return <ul className="entry-list">{children}</ul>;
}

type ProjectItemProps = {
	href?: string;
	frontmatter: {
		title: string;
		link: string;
		description: string;
		publicatedAt: Date;
	};
	secHeading?: boolean;
};

export function ProjectItem(props: ProjectItemProps) {
	const { href, frontmatter, secHeading = true } = props;
	const { title, publicatedAt, description, link } = frontmatter;

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: 'title text-lg font-medium decoration-dashed',
	};

	const externalLink = (
		<a
			target="_blank"
			className="ml-1 inline-block h-5 w-5 align-text-bottom hover:text-primary-accent"
			href={link}
		>
			<span className="sr-only">{title} homepage</span>
			<Icons.ExternalLink />
		</a>
	);

	return (
		<li className="item">
			{secHeading ? (
				<h2 {...headerProps}>
					{title}
					{externalLink}
				</h2>
			) : (
				<h3 {...headerProps}>
					{title}
					{externalLink}
				</h3>
			)}
			<Datetime datetime={publicatedAt} />
			<p>{description}</p>
		</li>
	);
}

type PostItemProps = {
	href?: string;
	frontmatter: {
		title: string;
		description: string;
		publicatedAt: Date;
	};
	secHeading?: boolean;
};

export function PostItem(props: PostItemProps) {
	const { href, frontmatter, secHeading = true } = props;
	const { title, publicatedAt, description } = frontmatter;

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: 'text-lg font-medium decoration-dashed hover:underline',
	};

	return (
		<li className="item">
			<a href={href} className="title">
				{secHeading ? (
					<h2 {...headerProps}>{title}</h2>
				) : (
					<h3 {...headerProps}>{title}</h3>
				)}
			</a>
			<Datetime datetime={publicatedAt} />
			<p>{description}</p>
		</li>
	);
}
