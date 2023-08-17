import { Button } from '../components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Inputs = {
	email: string,
	password: string,
};

export const Login = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const response = await axios.post('https://api.igoshev.de/auth/login', data)

			if (response.data) navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<h1 className="text-2xl text-white mb-5">Панель управления</h1>

			<div className="px-5 py-5 w-[320px] flex flex-col gap-5 bg-white rounded shadow">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
					<div className="px-3 py-2 border border-gray-300 hover:border-purple-500  rounded">
						<input className="outline-none" defaultValue="" {...register("email", { required: true })} placeholder="Введите email" />
					</div>
					<div className="px-3 py-2 border border-gray-300 hover:border-purple-500  rounded">
						<input className="outline-none" defaultValue="" {...register("password", { required: true })} placeholder="Введите пароль" />
					</div>
					<Button type="submit">Войти</Button>
				</form>
			</div>
		</div>
	)
}
