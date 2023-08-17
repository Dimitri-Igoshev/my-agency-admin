import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
	return (
		<div className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			{children}
			<div className="fixed left-0 bottom-0 w-full flex justify-center pb-5 text-white">
				{`${new Date(Date.now()).getFullYear()} Igoshev Software`}
			</div>
		</div>
	)
}
