import useStyles from 'layout/main/index.styles';
import React from 'react';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Header from '../header';

const MainLayout = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);

  return (
    <Stack
      className={cx(
        classes.container1,
        classes.w100,
        classes.mh100,
        classes.bg,
      )}
    >
      <Header />
      <Outlet />
    </Stack>
  );
};
export default MainLayout;
