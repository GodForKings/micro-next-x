'use client'
import type { FC } from 'react'

import { usePathname } from 'next/navigation'
import { MENU, cn } from '@/shared'
import { NavLink } from './NavLink'
import { match } from 'path-to-regexp'

export const Menu: FC = () => {
	const pathname = usePathname()

	return (
		<nav className={cn('flex gap-6')}>
			{MENU.map(menuItem => (
				<NavLink
					key={menuItem.href}
					menuItem={menuItem}
					isActive={!!match(menuItem.href)(pathname)}
				/>
			))}
		</nav>
	)
}
