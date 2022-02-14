import React, { useCallback } from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import useGetEpisode from '../../../hooks/useGetEpisode';

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
        <div key={item}>
          <Link to={linkPath}>{item}</Link>
        </div>
      );
    });
  }, [characters]);

  return (
    <div>
      <div>episode</div>
      <div>
        title: {title} - Date: {airDate}
      </div>
      <div>{characters && characters?.length > 0 && rednerCharacters()}</div>
    </div>
  );
};

export default EpisodePage;
