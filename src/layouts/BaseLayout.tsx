import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
	return (
		<div className="p-5">
			{children}
		</div>
	)
}
