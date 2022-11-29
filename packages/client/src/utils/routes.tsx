import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import { ReactNode } from 'react'
import Signup from '../pages/Signup'
import Root from '../pages/Root'
import Game from '../pages/Game'
import { getUserData, IUserSigninReq, signIn } from '../api/auth'
import { IUserInfo } from '../types/pageContext'

interface IRoute {
  path: string
  element: ReactNode
  id?: string
  children?: IRoute[]
  loader?: (...args: any) => void
  action?: (...args: any) => void
}

export const ROUTE_PATHS = {
  root: '/',
  login: '/login',
  signup: '/signup',
  game: '/game',
}

/**
 * Login page
 */
const LOGIN: IRoute = {
  path: ROUTE_PATHS.login,
  element: <Login />,
}

/**
 * Signup page
 */
const SIGNUP: IRoute = {
  path: ROUTE_PATHS.signup,
  element: <Signup />,
}

/**
 * Game page
 */
const GAME: IRoute = {
  path: ROUTE_PATHS.game,
  element: <Game />,
}

/**
 * Root page
 */
export type TRootLoader = () => Promise<{
  userInfo: IUserInfo | null
  userRoutes: typeof AUTHORIZED_ROUTES
}>

export const rootLoader: TRootLoader = async () => {
  try {
    const { data } = await getUserData()

    return { userInfo: data, userRoutes: AUTHORIZED_ROUTES }
  } catch (err) {
    console.error(err)
    return { userInfo: null, userRoutes: UNAUTHORIZED_ROUTES }
  }
}

const ROOT: IRoute = {
  path: ROUTE_PATHS.root,
  element: <Root />,
  children: [LOGIN, SIGNUP, GAME],
  id: 'root',
  loader: rootLoader,
}

/**
 * Route maps
 */
export const AUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.game,
  list: [ROUTE_PATHS.game],
}

export const UNAUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.login,
  list: [ROUTE_PATHS.login, ROUTE_PATHS.signup, ROUTE_PATHS.game],
}

export const ROUTER = createBrowserRouter([ROOT])
