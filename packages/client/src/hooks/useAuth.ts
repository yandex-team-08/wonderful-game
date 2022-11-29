import { useCallback } from 'react'
import { IUserSigninReq, logout, signIn } from '../api/auth'
import { ROUTE_PATHS } from '../utils/routes'
import { useNavigate } from 'react-router-dom'

export interface IUseAuthReturn {
  login: (data: IUserSigninReq) => void
  logout: VoidFunction
}

export const useAuth = (): IUseAuthReturn => {
  const navigate = useNavigate()

  const login = useCallback(async (data: IUserSigninReq) => {
    try {
      await signIn(data)
      navigate(ROUTE_PATHS.login)
    } catch (err) {
      return err
    }
  }, [])

  const logoutAction = useCallback(async () => {
    try {
      await logout()
      //FIXME: если роутить на логин, не стреляет запрос к /user
      navigate(ROUTE_PATHS.game)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return {
    login,
    logout: logoutAction,
  }
}
