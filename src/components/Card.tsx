import { slugifyStr } from '../utils/collections';
import Datetime from './Datetime';

export type CardProps = {
	href?: string;
	frontmatter: {
		title: string;
		description: string;
		publicatedAt: Date;
	};
	secHeading?: boolean;
};

export default function Card(props: CardProps) {
	const { href, frontmatter, secHeading = true } = props;
	const { title, publicatedAt, description } = frontmatter;

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: 'text-lg font-medium decoration-dashed hover:underline',
	};

	return (
		<li className="my-6">
			<a
				href={href}
				className="inline-block text-lg font-medium text-primary decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
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
