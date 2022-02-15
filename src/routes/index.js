import React from 'react';

const Landing = React.lazy(() => import('../components/pages/main'));
const Episode = React.lazy(() => import('../components/pages/episode'));
const NotFound = React.lazy(() => import('../components/pages/404'));
const Character = React.lazy(() => import('../components/pages/character'));

const routes = {
  Landing: {
    path: '/task112',
    element: <Landing />,
  },
  NotFound: {
    path: '404',
    element: <NotFound />,
  },
  Episode: {
    path: '/episode/:episodeId',
    element: <Episode />,
  },
  Character: {
    path: '/character/:name',
    element: <Character />,
  },
};

export default routes;
