export const PAGES = {
	HOME: '/',
	EXPLORE: '/explore',
	FAKE_PROFILE: '/profile-fake',
	SWAP: '/swap',
	SSG: `/swap/ssg`,
	ISR: `/swap/isr`,
	PROFILE: (username: string) => `user/${username}`,
}
