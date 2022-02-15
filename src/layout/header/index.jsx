import useStyles from 'layout/header/index.styles';
import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    // <-- This value is always "default" on the initial location.
    const isInitialLocation = location.key === 'default';
    const to = isInitialLocation ? '/' : -1;
    navigate(to);
  }, [navigate, location]);

  return (
    <Stack
      className={cx(
        classes.container2,
        classes.gap8,
        classes.w100,
        classes.padd,
      )}
    >
      {location.pathname.startsWith('/episode/') && (
        <Link className={classes.centered} to="/task112/">
          <ArrowBackIosIcon />
        </Link>
      )}
      {location.pathname.startsWith('/character/') && (
        <Tooltip title="Go back">
          <IconButton className={classes.centered} onClick={handleGoBack}>
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      )}
      <Typography className={classes.text1} display="block" component="div">
        Breaking Bad API
      </Typography>
    </Stack>
  );
};

export default Header;
