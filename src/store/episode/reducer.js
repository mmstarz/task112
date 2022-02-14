import { SET_EPISODE } from '../actionTypes';

const initialState = {
  data: null,
  error: '',
  isError: false,
  isLoading: false,
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODE:
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

export default episodeReducer;
