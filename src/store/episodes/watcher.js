import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SET_EPISODES, WATCH_EPISODES } from '../actionTypes';
import { getEpisodes } from '../../api';

function* getEpisodesWorker({ type, payload }) {
  try {
    const data = yield call(getEpisodes);

    yield put({
      type: SET_EPISODES,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
      },
    });
  } catch (error) {
    yield put({
      type: SET_EPISODES,
      payload: {
        isLoading: false,
        isError: true,
        error: error.message,
      },
    });
  }
}

function* episodesWatcher() {
  yield all([takeEvery(WATCH_EPISODES, getEpisodesWorker)]);
}

export default episodesWatcher;
