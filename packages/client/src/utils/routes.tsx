import { createBrowserRouter, type NonIndexRouteObject } from 'react-router-dom';

import Error404 from '../pages/Error';
import Forum from '../pages/Forum';
import ForumPage from '../pages/ForumPage';
import Game from '../pages/Game';
import Leaderboard from '../pages/Leaderboard';
import Login from '../pages/Login';
import Root from '../pages/Root';
import Signup from '../pages/Signup';

export enum RoutePaths {
  root = '/',
  login = '/login',
  setting = '/setting',
  signup = '/signup',
  game = '/game',
  leaderboard = '/leaderboard',
  forum = '/forum',
  forumPage = 'forum/:postId',
}

const forumPage: NonIndexRouteObject = {
  path: RoutePaths.forumPage,
  element: <ForumPage />,
};

const children: NonIndexRouteObject[] = [
  {
    path: RoutePaths.login,
    element: <Login />,
  },
  {
    path: RoutePaths.signup,
    element: <Signup />,
  },
  {
    path: RoutePaths.game,
    element: <Game />,
  },
  {
    path: RoutePaths.forum,
    element: <Forum />,
    children: [forumPage],
  },
  {
    path: RoutePaths.leaderboard,
    element: <Leaderboard />,
  },
  forumPage,
];

/**
 * Root page
 */
const ROOT: NonIndexRouteObject = {
  path: RoutePaths.root,
  element: <Root />,
  errorElement: <Error404 />,
  children,
  id: 'root',
};

/**
 * Route maps
 */
export const AUTHORIZED_ROUTES = {
  basePath: RoutePaths.game,
  list: [
    RoutePaths.game,
    RoutePaths.forum,
    RoutePaths.leaderboard,
  ],
};

export const UNAUTHORIZED_ROUTES = {
  basePath: RoutePaths.login,
  list: [
    RoutePaths.login,
    RoutePaths.signup,
  ],
};

export const ROUTER = createBrowserRouter([ROOT]);
