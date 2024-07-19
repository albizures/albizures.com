import React from 'react'
import clsx from 'clsx'
import { slugifyStr } from '../utils/collections'
import Datetime from './Datetime'
import { ExternalLink } from './ExternalLink'

type EntryListProps = {
	children: React.ReactNode
	className?: string
}

export function EntryList(props: EntryListProps) {
	const { children, className } = props
	return <ul className={clsx('entry-list', className)}>{children}</ul>
}

type ProjectItemProps = {
	href?: string
	className?: string
	frontmatter: {
		title: string
		link: string
		description: string
		publicatedAt: Date
	}
	sectionHeading?: boolean
}

export function ProjectItem(props: ProjectItemProps) {
	const {
		href,
		frontmatter,
		sectionHeading: secHeading = true,
		className,
	} = props
	const { title, publicatedAt, description, link } = frontmatter

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: 'title text-lg font-medium decoration-dashed',
	}

	const externalLink = (
		<ExternalLink
			className="ml-1 h-5 w-5 align-text-bottom"
			link={link}
			title={`${title} homepage`}
		/>
	)

	return (
		<li className={clsx('item', className)}>
			<a href={href} className="title">
				{secHeading
					? (
							<h2 {...headerProps}>
								{title}
								{externalLink}
							</h2>
						)
					: (
							<h3 {...headerProps}>
								{title}
								{externalLink}
							</h3>
						)}
			</a>
			<Datetime datetime={publicatedAt} />
			<p>{description}</p>
		</li>
	)
}

type PostItemProps = {
	href?: string
	frontmatter: {
		title: string
		description: string
		publicatedAt: Date
	}
	secHeading?: boolean
}

export function PostItem(props: PostItemProps) {
	const { href, frontmatter, secHeading = true } = props
	const { title, publicatedAt, description } = frontmatter

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: 'text-lg font-medium decoration-dashed hover:underline',
	}

	return (
		<li className="item">
			<a href={href} className="title">
				{secHeading
					? (
							<h2 {...headerProps}>{title}</h2>
						)
					: (
							<h3 {...headerProps}>{title}</h3>
						)}
			</a>
			<Datetime datetime={publicatedAt} />
			<p>{description}</p>
		</li>
	)
}
