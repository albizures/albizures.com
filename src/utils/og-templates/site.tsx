import { SITE } from '../../config'
import { Frame } from './frame'

export default function site() {
	return (
		<Frame>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '90%',
					maxHeight: '90%',
					overflow: 'hidden',
					textAlign: 'center',
				}}
			>
				<p style={{ fontSize: 72, fontWeight: 'bold' }}>{SITE.title}</p>
				<p style={{ fontSize: 28 }}>{SITE.description}</p>
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					width: '100%',
					marginBottom: '8px',
					fontSize: 28,
				}}
			>
				<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
					{new URL(SITE.website).hostname}
				</span>
			</div>
		</Frame>
	)
}
