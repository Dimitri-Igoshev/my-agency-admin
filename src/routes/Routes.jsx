import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { BaseLayout } from '../layouts/BaseLayout'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../widgets/Login'
import { Page404 } from '../pages/Page404'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="dashboard" element={<BaseLayout><Dashboard /></BaseLayout>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  )
}
