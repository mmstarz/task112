import React, { useCallback } from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { containerVariant } from 'framerMotion/containerVariants';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useGetCharacter from 'hooks/useGetCharacter';

const CharacterPage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  const { character } = useGetCharacter();
  const { name, nickname, birthday, img, status, occupation } = character;

  const rednerOccupations = useCallback(() => {
    return occupation.map(item => {
      return (
        <Typography
          key={item}
          display="block"
          component="div"
          className={classes.text1}
        >
          {item}
        </Typography>
      );
    });
  }, [occupation, classes]);

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
          classes.h100,
          classes.bg,
        )}
        sx={{ background: `url(${img})` }}
      >
        <Stack
          className={cx(
            classes.container2,
            classes.gap8,
            classes.w100,
            classes.h100,
          )}
        >
          <Avatar
            variant="square"
            alt={name}
            src={img}
            className={classes.avatar}
          />
          <Stack
            className={cx(classes.container3, classes.padd8, classes.gap4)}
          >
            <Typography
              display="block"
              component="div"
              className={classes.text1}
            >
              Name: {name}
            </Typography>
            <Typography
              display="block"
              component="div"
              className={classes.text1}
            >
              Nickname: {nickname}
            </Typography>
            <Typography
              display="block"
              component="div"
              className={classes.text1}
            >
              Birthday: {birthday}
            </Typography>
            <Typography
              display="block"
              component="div"
              className={classes.text1}
            >
              Status: {status}
            </Typography>
            <Typography
              display="block"
              component="div"
              className={classes.text2}
            >
              Occupations:
            </Typography>
            {occupation && occupation?.length > 0 && rednerOccupations()}
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
export default CharacterPage;
