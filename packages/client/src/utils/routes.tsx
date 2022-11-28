import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import { ReactNode } from 'react'
import Signup from '../pages/Signup'
import Root from '../pages/Root'
import Game from '../pages/Game'

interface IRoute {
  path: string
  element: ReactNode
  children?: IRoute[]
}

export const ROUTE_PATHS = {
  base: '/',
  login: '/login',
  signup: '/signup',
  game: '/game',
}

const LOGIN: IRoute = {
  path: ROUTE_PATHS.login,
  element: <Login />,
}

const SIGNUP: IRoute = {
  path: ROUTE_PATHS.signup,
  element: <Signup />,
}

const GAME: IRoute = {
  path: ROUTE_PATHS.game,
  element: <Game />,
}

const ROOT: IRoute = {
  path: ROUTE_PATHS.base,
  element: <Root />,
  children: [LOGIN, SIGNUP, GAME],
}

export const AUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.game,
  list: [ROUTE_PATHS.game],
}

export const UNAUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.login,
  list: [ROUTE_PATHS.login, ROUTE_PATHS.signup, ROUTE_PATHS.game],
}

export const ROUTER = createBrowserRouter([ROOT])
