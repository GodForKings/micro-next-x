'use client'
import type { PropsWithChildren } from 'react'

import dynamic from 'next/dynamic'
import { TitleH1 } from '@/shared'

const DynamicSwapMenu = dynamic(
	() => import('@/widgets/header/ui/SwapMenu').then(mod => mod.SwapMenu),
	{ ssr: false, loading: () => <p>Loading...</p> }
)
export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='relative container w-full flex items-center flex-col'>
			<TitleH1>Example mod for SHOP</TitleH1>

			<DynamicSwapMenu />

			{children}
		</div>
	)
}
