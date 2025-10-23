import type { FC } from 'react'
import type { IProduct } from '../model/types'

import Image from 'next/image'
import { cn } from '@/shared'

interface ProductCardProps {
	cardData: IProduct
}

export const ProductCard: FC<ProductCardProps> = props => {
	const { title, image, price } = props.cardData
	return (
		<div
			className={cn(
				'relative w-64 rounded-xl p-4 transition',
				'border border-black/10 dark:border-white/10',
				'hover:shadow active:shadow',
				'flex flex-col justify-evenly items-center'
			)}
		>
			<Image
				height={110}
				width={130}
				src={image}
				alt={`image ${title}`}
				className='object-contain mb-3 rounded'
			/>

			<h2 className='text-sm text-black dark:text-white font-medium line-clamp-2 mb-1'>
				{title}
			</h2>

			<p className='text-sm text-gray-500 '>${price}</p>
		</div>
	)
}
