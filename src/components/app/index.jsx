import React, { Suspense } from 'react';
import { Navigate, useRoutes, useLocation, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from '../../routes';
import MainLayout from '../../layout/main';

const App = () => {
  const location = useLocation();

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'episode', element: <Navigate to="/404" /> },
      { path: 'character', element: <Navigate to="/404" /> },
      { path: routes.NotFound.path, element: routes.NotFound.element },
      { path: routes.Landing.path, element: routes.Landing.element },
    ],
  };

  const episodeRoutes = {
    path: '/episode',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: routes.Episode.path, element: routes.Episode.element },
      { path: routes.NotFound.path, element: routes.NotFound.element },
    ],
  };

  const characterRoutes = {
    path: '/character',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: routes.Character.path, element: routes.Character.element },
      { path: routes.NotFound.path, element: routes.NotFound.element },
    ],
  };

  const routing = useRoutes([mainRoutes, episodeRoutes, characterRoutes]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence exitBeforeEnter>{routing}</AnimatePresence>
    </Suspense>
  );
};
export default App;
