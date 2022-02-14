import React, { useCallback } from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
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
        <Typography key={item} display="block" component="div">
          {item}
        </Typography>
      );
    });
  }, [occupation]);

  return (
    <Stack className={cx(classes.container1, classes.gap8)}>
      <Stack className={cx(classes.container2, classes.gap8)}>
        <Avatar alt={name} src={img} className={classes.avatar} />
        <Stack className={classes.container1}>
          <Typography display="block" component="div">
            Name: {name}
          </Typography>
          <Typography display="block" component="div">
            Nickname: {nickname}
          </Typography>
          <Typography display="block" component="div">
            Birthday: {birthday}
          </Typography>
          <Typography display="block" component="div">
            Status: {status}
          </Typography>
        </Stack>
      </Stack>
      <Stack className={cx(classes.container1, classes.gap8)}>
        <Typography display="block" component="div">
          Occupations:
        </Typography>
        {occupation && occupation?.length > 0 && rednerOccupations()}
      </Stack>
    </Stack>
  );
};
export default CharacterPage;
