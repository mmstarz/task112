import useStyles from 'components/pages/404/index.styles';
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariant } from 'framerMotion/containerVariants';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);

  return (
    <motion.div
      className={cx(classes.wrapper, classes.grow, classes.w100)}
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Stack className={cx(classes.centered, classes.w100, classes.h100)}>
        <Typography display="block" component="div" className={classes.text1}>
          Page not found 404
        </Typography>
        <Link to="/task112">Go Home</Link>
      </Stack>
    </motion.div>
  );
};
export default NotFoundPage;
