import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			{children}
		</div>
	)
}
