import type { FC } from 'react'

import { cn } from '@/shared'

interface DefaultButtonProps {
	textInButton: string
	onClick: () => void
	ariaLabel: string
	className?: string
	type?: 'submit' | 'reset' | 'button' | undefined
}

export const DefaultButton: FC<DefaultButtonProps> = props => {
	const { textInButton, onClick, ariaLabel, className, type } = props

	const handleOnClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		e.stopPropagation()
		onClick()
	}

	return (
		<button
			type={type}
			onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
				handleOnClick(e)
			}
			className={cn(
				'bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full transition',
				'hover:bg-gray-200 active:bg-gray-200',
				'active:translate-y-px hover:translate-y-px',
				className
			)}
			aria-label={ariaLabel}
		>
			{textInButton}
		</button>
	)
}
