import { Outlet } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'

export const Auth = () => {
	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	)
}
