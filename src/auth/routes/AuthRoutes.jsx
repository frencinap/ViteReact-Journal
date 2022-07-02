import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        
        <Route path='login' element={ <LoginPage /> } />
        <Route path='register' element={ <RegisterPage /> } />

        {/* En caso de no apuntar a las rutas de arriba, redirecciono con navigate */}
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
