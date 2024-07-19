import { slugifyStr } from '../utils/collections'
import Datetime from './Datetime'

export type CardProps = {
	href?: string
	frontmatter: {
		title: string
		description: string
		publicatedAt: Date
	}
	secHeading?: boolean
}

export function Card(props: CardProps) {
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
