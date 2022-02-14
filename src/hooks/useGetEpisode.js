import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WATCH_EPISODE } from '../store/actionTypes';

const useGetEpisode = () => {
  const dispatch = useDispatch();
  const episode = useSelector(store => store?.episode);
  const { episodeId } = useParams();

  useEffect(() => {
    dispatch({ type: WATCH_EPISODE, payload: { episodeId } });
  }, [dispatch, episodeId]);

  // console.log('episode: ', episode);

  return {
    episode: !episode?.isError && episode?.data?.length > 0 && episode.data[0],
  };
};

export default useGetEpisode;
