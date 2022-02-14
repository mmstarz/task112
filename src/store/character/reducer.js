import { SET_CHARACTER } from '../actionTypes';

const initialState = {
  data: null,
  error: '',
  isError: false,
  isLoading: false,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
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

export default characterReducer;
