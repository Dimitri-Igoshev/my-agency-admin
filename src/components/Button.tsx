import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...props }: Props) => {
	return (
		<button className={cn('px-2 py-2 bg-indigo-500 text-white font-bold rounded hover:bg-purple-500 transition-all duration-300', className)} {...props}>
			{children}
		</button>
	)
}
