import clsx from 'clsx';
import { Icons } from './Icons';

type ExternalLinkProps = {
	link: string;
	title: string;
	className?: string;
};

export function ExternalLink(props: ExternalLinkProps) {
	const { link, title, className } = props;

	return (
		<a
			target="_blank"
			className={clsx('inline-block hover:text-primary-accent', className)}
			href={link}
		>
			<span className="sr-only">{title}</span>
			<Icons.ExternalLink />
		</a>
	);
}
