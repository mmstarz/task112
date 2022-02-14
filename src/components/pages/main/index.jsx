import React, { useCallback } from 'react';
import useStyles from './index.styles';
import classNames from 'classnames/bind';
import useGetEpisodes from '../../../hooks/useGetEpisodes';
import EpisodesListItem from '../../episodesListItem';

const LandingPage = () => {
  const classes = useStyles();
  const cx = classNames.bind(classes);
  const { episodes } = useGetEpisodes();
  // console.log('episodes: ', episodes);

  const renderEpisodes = useCallback(data => {
    return data.map(item => {
      const { episode_id, title, air_date } = item;
      return (
        <EpisodesListItem
          key={title}
          id={episode_id}
          title={title}
          airDate={air_date}
        />
      );
    });
  }, []);

  const renderSeasons = useCallback(() => {
    return episodes?.map((season, idx) => {
      const key = `season-${idx}`;
      return (
        <div key={key}>
          <div>Season: {idx + 1}</div>
          {renderEpisodes(season)}
        </div>
      );
    });
  }, [episodes, renderEpisodes]);

  return (
    <div>
      <div>landing page</div>
      <div>{episodes && episodes?.length > 0 && renderSeasons()}</div>
    </div>
  );
};

export default LandingPage;
