import { all, spawn } from 'redux-saga/effects';

import episodesWatcher from './episodes/watcher';
import episodeWatcher from './episode/watcher';
import characterWatcher from './character/watcher';

export default function* rootSaga() {
  yield all([
    spawn(episodesWatcher),
    spawn(episodeWatcher),
    spawn(characterWatcher),
  ]);
}
