import React from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);

  return (
    <div>
      <div>404 not found page</div>
      <Link to="/">home</Link>
    </div>
  );
};
export default NotFoundPage;
