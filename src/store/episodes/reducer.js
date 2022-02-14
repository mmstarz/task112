import { SET_EPISODES } from '../actionTypes';

const initialState = {
  data: [],
  error: '',
  isError: false,
  isLoading: false,
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default episodesReducer;
