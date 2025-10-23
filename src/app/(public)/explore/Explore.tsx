'use client'
import type { FC } from 'react'

import { useSearchParams } from 'next/navigation'
import { TitleH1 } from '@/shared'

export const Explore: FC = () => {
	const searchParams = useSearchParams()

	const tag = searchParams.get('tag')

	return (
		<div>
			<TitleH1>Explore {tag && `by #${tag}`}</TitleH1>
		</div>
	)
}
