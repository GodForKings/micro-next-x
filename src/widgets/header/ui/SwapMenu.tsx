'use client'
import type { FC } from 'react'

import { NavLink } from './NavLink'
import { SWAP_MOD } from '@/shared/lib/data/menu.data'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

export const SwapMenu: FC = () => {
	const pathname = usePathname()

	return (
		<nav className='flex items-center gap-4 mb-5'>
			{SWAP_MOD.map(item => (
				<NavLink
					key={item.href}
					menuItem={item}
					isActive={!!match(item.href)(pathname)}
				/>
			))}
		</nav>
	)
}
