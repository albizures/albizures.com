import clsx from 'clsx'
import React from 'react'
import { slugifyStr } from '../utils/collections'
import Datetime from './Datetime'

type EntryListProps = {
	children: React.ReactNode
	className?: string
}

export function EntryList(props: EntryListProps) {
	const { children, className } = props
	return <ul className={clsx('entry-list', className)}>{children}</ul>
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
