import { combineReducers } from 'redux';

import seasonsReducer from './seasons/reducer';
import episodeReducer from './episode/reducer';
import characterReducer from './character/reducer';

const rootReducer = combineReducers({
  episodes: seasonsReducer,
  episode: episodeReducer,
  character: characterReducer,
});

export default rootReducer;
