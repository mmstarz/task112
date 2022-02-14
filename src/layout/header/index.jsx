import React from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
import { useLocation, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  const location = useLocation();

  return (
    <Stack className={cx(classes.container2, classes.gap8)}>
      {location.pathname.startsWith('/episode/') && (
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
      )}
      {location.pathname.startsWith('/character/') && (
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
      )}
      <Typography display="block" component="div">
        Breaking Bad
      </Typography>
    </Stack>
  );
};

export default Header;
