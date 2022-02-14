import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';

const MainLayout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};
export default MainLayout;
