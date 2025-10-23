import { PAGES } from '@/shared'

export interface IMenuItem {
	href: string
	name: string
}

export const MENU: IMenuItem[] = [
	{ href: PAGES.HOME, name: 'Home' },
	{ href: PAGES.EXPLORE, name: 'Explore' },
	{ href: PAGES.FAKE_PROFILE, name: 'Profile' },
	{ href: PAGES.SWAP, name: 'Swap' },
]

export const SWAP_MOD: IMenuItem[] = [
	{ href: PAGES.SWAP, name: 'SSR' },
	{ href: PAGES.SSG, name: 'SSG' },
	{ href: PAGES.ISR, name: 'ISR' },
]
