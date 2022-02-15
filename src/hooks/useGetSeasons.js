import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WATCH_SEASONS } from 'store/actionTypes';
import { formatEpisodes } from 'helpers/formatEpisodes';

const useGetSeasons = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(store => store?.episodes);

  useEffect(() => {
    dispatch({ type: WATCH_SEASONS });
  }, [dispatch]);

  return {
    seasons:
      !episodes?.isError &&
      episodes?.data?.length > 0 &&
      formatEpisodes(episodes),
  };
};

export default useGetSeasons;
