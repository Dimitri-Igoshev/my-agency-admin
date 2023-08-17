import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Auth } from '../pages/Auth'
import { Login } from '../widgets/Login'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="auth" element={<Auth />} >
        <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}
