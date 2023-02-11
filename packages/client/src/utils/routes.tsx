import Forum from '../pages/Forum';
import ForumPage from '../pages/ForumPage';
import Game from '../pages/Game';
import Leaderboard from '../pages/Leaderboard';
import Login from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';
import Root from '../pages/Root';
import Signup from '../pages/Signup';

export enum RoutePaths {
  root = '/',
  login = '/login',
  signup = '/signup',
  game = '/game',
  leaderboard = '/leaderboard',
  forum = '/forum',
  forumPage = 'forum/:postId',
  profile = '/setting'
}

const forumPage = {
  path: RoutePaths.forumPage,
  element: <ForumPage />,
};

const children = [
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
  {
    path: RoutePaths.profile,
    element: <ProfilePage />,
  },
  forumPage,
];

/**
 * Root page
 */
const ROOT = {
  path: RoutePaths.root,
  element: <Root />,
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
    RoutePaths.profile,
  ],
};

export const UNAUTHORIZED_ROUTES = {
  basePath: RoutePaths.login,
  list: [
    RoutePaths.login,
    RoutePaths.signup,
  ],
};

export const routes = [ROOT];
