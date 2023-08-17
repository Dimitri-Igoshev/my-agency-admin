import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {}

export const Input = ({ className, ...props }: Props) => {
	return (
		<div className={cn('px-3 py-2 border border-gray-300 hover:border-purple-500  rounded', className)}>
			<input className="outline-none" {...props} />
		</div>
	)
}
