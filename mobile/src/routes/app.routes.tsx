import { Login } from '../screens/Login'
import { DrawerRoutes } from './drawer.routes'

export function AppRoutes() {
  const userIsAuthenticated = true

  if (!userIsAuthenticated) {
    return <Login />
  }

  return <DrawerRoutes />
}