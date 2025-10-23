'use client'
import type { FC } from 'react'

import { useRouter } from 'next/navigation'
import { DefaultButton, PAGES, TitleH1 } from '@/shared'

export const ProfileFake: FC = () => {
	const router = useRouter()

	return (
		<div>
			<TitleH1>Profile Fake</TitleH1>

			<DefaultButton
				onClick={() => router.push(PAGES.HOME)}
				textInButton='Go to home'
				ariaLabel='Перейти на home-page'
				type={undefined}
			/>
		</div>
	)
}
