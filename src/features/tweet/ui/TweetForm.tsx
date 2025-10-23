'use client'
import type { FC } from 'react'

import { cn } from '@/shared'
import { postTweet } from '@/entities'

export const TweetForm: FC = () => {
	return (
		<form
			action={postTweet}
			className={cn(
				'border border-white/10 rounded-xl p-4 w-xl',
				'text-white space-y-3'
			)}
		>
			<input
				name='content'
				placeholder={`What's happening?`}
				className={cn(
					'w-full bg-transparent',
					'outline-1 outline-transparent',
					'text-sm placeholder-gray-500'
				)}
			/>

			<div className='flex justify-end'>
				<button
					type='submit'
					className={cn(
						'bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full transition',
						'hover:bg-gray-200 active:bg-gray-200',
						'active:translate-y-px hover:translate-y-px'
					)}
				>
					Tweet
				</button>
			</div>
		</form>
	)
}
