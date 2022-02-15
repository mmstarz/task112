import useStyles from 'components/pages/main/index.styles';
import React, { useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { containerVariant, toRight } from 'framerMotion/containerVariants';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import useGetSeasons from 'hooks/useGetSeasons';
import EpisodesListItem from 'components/episodesListItem';

const LandingPage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  // console.log('seasons: ', seasons);

  const { seasons } = useGetSeasons();

  const [page, setPage] = useState(1);

  const handleChange = useCallback((event, value) => {
    setPage(prev => value);
  }, []);

  const renderEpisodes = useCallback(() => {
    return seasons[page].map(item => {
      const { episode_id, title, air_date } = item;
      return (
        <motion.div
          key={title}
          layout
          variants={toRight}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <EpisodesListItem
            // key={title}
            id={episode_id}
            title={title}
            airDate={air_date}
          />
        </motion.div>
      );
    });
  }, [seasons, page]);

  return (
    <motion.div
      className={cx(classes.wrapper, classes.grow, classes.w100)}
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Stack
        className={cx(
          classes.container1,
          classes.gap8,
          classes.w100,
          classes.grow,
          classes.padd24,
        )}
      >
        <Typography
          display="block"
          component="div"
          className={cx(classes.text1, classes.w100)}
        >
          Season: {page}
        </Typography>
        <Stack
          className={cx(classes.container1, classes.w100)}
          divider={<Divider className={classes.w100} />}
        >
          <AnimatePresence>
            <AnimateSharedLayout type="crossfade">
              {seasons && renderEpisodes()}
            </AnimateSharedLayout>
          </AnimatePresence>
        </Stack>
        <Pagination
          className={cx(classes.centered, classes.w100, classes.mtopAuto)}
          count={Object.keys(seasons).length}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </motion.div>
  );
};

export default LandingPage;
