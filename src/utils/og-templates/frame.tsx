import React from 'react'

type FrameProps = {
	children: React.ReactNode
}
export function Frame(props: FrameProps) {
	const { children } = props

	return (
		<div
			style={{
				background: '#fefbfb',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					border: '4px solid #000',
					background: '#ecebeb',
					opacity: '0.9',
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2.5rem',
					width: '88%',
					height: '80%',
				}}
			/>

			<div
				style={{
					border: '4px solid #000',
					background: '#fefbfb',
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2rem',
					width: '88%',
					height: '80%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						margin: '20px',
						width: '90%',
						height: '90%',
					}}
				>
					{children}
				</div>
			</div>
		</div>
	)
}
