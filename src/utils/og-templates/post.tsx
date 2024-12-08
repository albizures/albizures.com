import type { PostEntry } from '../../content/config'
import { SITE } from '../../config'
import { Frame } from './frame'

export default function post(post: PostEntry) {
	return (
		<Frame>
			<p
				style={{
					fontSize: 72,
					fontWeight: 'bold',
					maxHeight: '84%',
					overflow: 'hidden',
				}}
			>
				{post.data.title}
			</p>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					marginBottom: '8px',
					fontSize: 28,
				}}
			>
				<span>
					by
					{' '}
					<span
						style={{
							color: 'transparent',
						}}
					>
						"
					</span>
					<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
						{post.data.author}
					</span>
				</span>

				<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
					{SITE.title}
				</span>
			</div>
		</Frame>
	)
}
