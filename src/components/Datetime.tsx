import { LOCALE } from '../config';
import { formatDate, formatTime } from '../utils/dates';

export type Props = {
	datetime: string | Date;
	withTime?: boolean;
	size?: 'sm' | 'lg';
	className?: string;
};

export default function Datetime(props: Props) {
	const { datetime, size = 'sm', className, withTime = false } = props;
	const date = new Date(datetime);
	return (
		<div className={`flex items-center space-x-2 opacity-80 ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`${
					size === 'sm' ? 'scale-90' : 'scale-100'
				} inline-block h-6 w-6 fill-primary`}
				aria-hidden="true"
			>
				<path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
				<path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
			</svg>
			<span className="sr-only">Posted on:</span>
			<span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
				{formatDate(date, LOCALE[0])}
				{withTime && (
					<>
						<span aria-hidden="true"> | </span>
						<span className="sr-only">&nbsp;at&nbsp;</span>
						{formatTime(date, LOCALE[0])}
					</>
				)}
			</span>
		</div>
	);
}
