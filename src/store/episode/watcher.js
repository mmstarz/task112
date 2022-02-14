import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SET_EPISODE, WATCH_EPISODE } from '../actionTypes';
import { getEpisodById } from '../../api';

function* getEpisodeWorker({ type, payload }) {
  try {
    const data = yield call(getEpisodById, payload.episodeId);

    yield put({
      type: SET_EPISODE,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
      },
    });
  } catch (error) {
    yield put({
      type: SET_EPISODE,
      payload: {
        isLoading: false,
        isError: true,
        error: error.message,
      },
    });
  }
}

function* episodeWatcher() {
  yield all([takeEvery(WATCH_EPISODE, getEpisodeWorker)]);
}

export default episodeWatcher;
