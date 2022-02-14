import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WATCH_CHARACTER } from '../store/actionTypes';

const useGetCharacter = () => {
  const dispatch = useDispatch();
  const character = useSelector(store => store?.character);
  const { name } = useParams();

  // console.log('name:', name); // not working for Jimmy+McGill

  useEffect(() => {
    dispatch({
      type: WATCH_CHARACTER,
      payload: { name },
    });
  }, [dispatch, name]);

  // console.log('character: ', character);

  return {
    character:
      !character?.isError && character?.data?.length > 0 && character.data[0],
  };
};

export default useGetCharacter;
