import type { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { PAGES, cn } from '@/shared'
import { Menu } from './Menu'

export const Header: FC = () => {
	return (
		<header
			className={cn(
				'flex items-center justify-between',
				'bg-black border-b border-white/10 px-6 py-4'
			)}
		>
			<Link href={PAGES.HOME} className={cn('flex items-center gap-3')}>
				<Image src='/x-logo.svg' alt='X logo' width={28} height={28} priority />
			</Link>

			<Menu />
		</header>
	)
}
