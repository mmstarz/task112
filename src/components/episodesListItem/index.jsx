import useStyles from 'components/episodesListItem/index.styles';
import React from 'react';
import classNames from 'classnames/bind';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const EpisodesListItem = ({ id, title = '', airDate = '' }) => {
  const classes = useStyles();
  const cx = classNames.bind(classes);

  return (
    <Stack className={cx(classes.container2, classes.w100, classes.padd4)}>
      <Link to={`/episode/${id}`}>{title}</Link>
      <Typography display="block" component="div" className={classes.text1}>
        Date: {airDate}
      </Typography>
    </Stack>
  );
};
export default EpisodesListItem;
