import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { BaseLayout } from '../layouts/BaseLayout'
import { Dashboard } from '../pages/Dashboard'
import { Auth } from '../pages/Auth'
import { Login } from '../widgets/Login'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout><Dashboard /></BaseLayout>} />
      <Route path="auth" element={<AuthLayout><Auth /></AuthLayout>} >
        <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}
