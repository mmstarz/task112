import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WATCH_EPISODES } from '../store/actionTypes';

const useGetEpisodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(store => store?.episodes);

  useEffect(() => {
    dispatch({ type: WATCH_EPISODES });
  }, [dispatch]);

  const season1Episodes = useCallback(() => {
    const seasons = [];
    episodes?.data.forEach(item => {
      // bug in API type of season by docs is number, but in a fact it is string!
      if (!seasons.includes(item.season.trim())) {
        seasons.push(item.season);
      }
    });

    const result = [];
    seasons.forEach(season => {
      const filtered = episodes?.data.filter(item => item.season === season);
      result.push(filtered);
    });

    // console.log('result: ', result);
    return result;
  }, [episodes]);

  return {
    episodes:
      !episodes?.isError && episodes?.data.length > 0 && season1Episodes(),
  };
};

export default useGetEpisodes;
