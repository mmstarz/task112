import useStyles from 'components/pages/episode/index.styles';
import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageContainerVariant } from 'framerMotion/containerVariants';
import useGetEpisode from '../../../hooks/useGetEpisode';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const EpisodePage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  const { episode } = useGetEpisode();

  // console.log('episode: ', episode);

  const { title, air_date: airDate, characters } = episode;

  const rednerCharacters = useCallback(() => {
    return characters.map(item => {
      const formattedName = item.trim().replace(' ', '+');
      const linkPath = `/character/${formattedName}`;
      return (
        <div key={item} className={classes.links}>
          <Link to={linkPath}>{item}</Link>
        </div>
      );
    });
  }, [characters, classes]);

  return (
    <motion.div
      variants={pageContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Stack
        className={cx(
          classes.container1,
          classes.gap8,
          classes.padd24,
          classes.w100,
          classes.h100,
        )}
      >
        <Stack className={cx(classes.container1, classes.w100)}>
          <Typography
            display="block"
            component="div"
            className={cx(classes.text1, classes.mbot8, classes.padd4)}
          >
            Episode Title: {title}
          </Typography>
          <Typography
            display="block"
            component="div"
            className={cx(classes.text1, classes.padd4)}
          >
            Episode Date: {airDate}
          </Typography>
        </Stack>
        <Typography
          display="block"
          component="div"
          className={cx(classes.text2, classes.padd4)}
        >
          Characters List:
        </Typography>
        <Stack
          className={cx(classes.container1, classes.w100, classes.padd4)}
          divider={<Divider className={classes.w100} />}
        >
          {characters?.length > 0 && rednerCharacters()}
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default EpisodePage;
