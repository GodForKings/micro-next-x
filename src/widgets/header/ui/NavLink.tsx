import type { FC } from 'react'
import type { IMenuItem } from '@/shared'

import Link from 'next/link'
import { cn } from '@/shared'

interface NavLinkProps {
	menuItem: IMenuItem
	isActive: boolean
	style?: string
}

export const NavLink: FC<NavLinkProps> = props => {
	const { menuItem, style, isActive } = props

	return (
		<Link
			className={cn(isActive ? 'text-white' : 'text-white/75', style)}
			href={menuItem.href}
		>
			{menuItem.name}
		</Link>
	)
}
