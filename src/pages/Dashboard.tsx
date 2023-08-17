import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
	const navigate = useNavigate()

	return (
		<div className="h-screen flex flex-col justify-center items-center gap-5">
			<div>Here will be admin panel!</div>

			<div className="cursor-pointer hover:text-red-500 underline" onClick={() => navigate('/')}>To login</div>
		</div>
	)
}
