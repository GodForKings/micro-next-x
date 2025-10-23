import type { PropsWithChildren } from 'react'

import { Header } from '@/widgets'
import { cn } from '@/shared'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />

			<div
				className={cn(
					'min-h-screen min-w-full px-4 py-8',
					'flex items-center flex-col gap-2'
				)}
			>
				{children}
			</div>
		</>
	)
}
