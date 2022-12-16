import { createBrowserRouter, NonIndexRouteObject } from 'react-router-dom';

import { getUserData } from '../api/auth';
import Forum from '../pages/Forum';
import ForumPage from '../pages/ForumPage';
import Game from '../pages/Game';
import Login from '../pages/Login';
import Root from '../pages/Root';
import Signup from '../pages/Signup';
import { IUserInfo } from '../types/pageContext';

export enum ROUTE_PATHS {
  root = '/',
  login = '/login',
  signup = '/signup',
  game = '/game',
  forum = '/forum',
  forum_page = '/forum-page',
}

/**
 * Login page
 */
const LOGIN: NonIndexRouteObject = {
  path: ROUTE_PATHS.login,
  element: <Login />,
};

/**
 * Signup page
 */
const SIGNUP: NonIndexRouteObject = {
  path: ROUTE_PATHS.signup,
  element: <Signup />,
};

/**
 * Game page
 */
const GAME: NonIndexRouteObject = {
  path: ROUTE_PATHS.game,
  element: <Game />,
};

/**
 * Forum
 */
const FORUM: NonIndexRouteObject = {
  path: ROUTE_PATHS.forum,
  element: <Forum />,
};

/**
 * Forum page
 */
const FORUM_PAGE: NonIndexRouteObject = {
  path: ROUTE_PATHS.forum_page,
  element: <ForumPage />,
};

/**
 * Root page
 */
export type TRootLoader = () => Promise<{
  userInfo: IUserInfo | null
  userRoutes: typeof AUTHORIZED_ROUTES
}>

export const rootLoader: TRootLoader = async () => {
  try {
    const { data } = await getUserData();

    return { userInfo: data, userRoutes: AUTHORIZED_ROUTES };
  } catch (err) {
    console.error(err);

    return { userInfo: null, userRoutes: UNAUTHORIZED_ROUTES };
  }
};

const ROOT: NonIndexRouteObject = {
  path: ROUTE_PATHS.root,
  element: <Root />,
  children: [LOGIN, SIGNUP, GAME, FORUM, FORUM_PAGE],
  id: 'root',
  loader: rootLoader,
};

/**
 * Route maps
 */
export const AUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.game,
  list: [
    ROUTE_PATHS.game,
    ROUTE_PATHS.forum,
    ROUTE_PATHS.forum_page,
  ],
};

export const UNAUTHORIZED_ROUTES = {
  basePath: ROUTE_PATHS.login,
  list: [
    ROUTE_PATHS.login,
    ROUTE_PATHS.signup,
    ROUTE_PATHS.game,
    ROUTE_PATHS.forum,
    ROUTE_PATHS.forum_page,
  ],
};

export const ROUTER = createBrowserRouter([ROOT]);
