import type { FC } from 'react'

import type { ITweet } from '../lib/tweet.interface'

import Link from 'next/link'
import Image from 'next/image'
import { cn, PAGES } from '@/shared'
import { TweetData } from '../model/data.tweet'

interface TweetProps {
	style?: string
}

export const Tweet: FC<TweetProps> = props => {
	const { style } = props

	return (
		<>
			{TweetData.map((tweet: ITweet, index: number) => (
				<div
					key={tweet.text + index}
					className={cn(
						'p-4 bg-black text-white shadow-md max-w-xl',
						'border border-white/10 rounded-xl',
						style
					)}
				>
					<div className='flex items-center gap-3 mb-2'>
						<Image src='/x-logo.svg' alt='X logo' width={24} height={24} />

						<Link href={PAGES.PROFILE(tweet.author)} className='font-semibold'>
							@{tweet.author}
						</Link>
					</div>

					<p className='text-white/90'>{tweet.text}</p>
				</div>
			))}
		</>
	)
}
