import { SET_SEASONS } from '../actionTypes';

const initialState = {
  data: [],
  error: '',
  isError: false,
  isLoading: false,
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEASONS:
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
