import { combineReducers } from 'redux';

import episodesReducer from './episodes/reducer';
import episodeReducer from './episode/reducer';
import characterReducer from './character/reducer';

const rootReducer = combineReducers({
  episodes: episodesReducer,
  episode: episodeReducer,
  character: characterReducer,
});

export default rootReducer;
