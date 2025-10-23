import type { FC } from 'react'

interface TitleH1Props {
	children: React.ReactNode
}

export const TitleH1: FC<TitleH1Props> = props => {
	const { children } = props

	return <h1 className='text-4xl font-bold mb-4'>{children}</h1>
}
