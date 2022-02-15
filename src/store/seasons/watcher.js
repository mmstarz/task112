import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SET_SEASONS, WATCH_SEASONS } from '../actionTypes';
import { getEpisodes } from '../../api';

function* getSeasonsWorker({ type, payload }) {
  try {
    const data = yield call(getEpisodes);

    yield put({
      type: SET_SEASONS,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
      },
    });
  } catch (error) {
    yield put({
      type: SET_SEASONS,
      payload: {
        isLoading: false,
        isError: true,
        error: error.message,
      },
    });
  }
}

function* seasonsWatcher() {
  yield all([takeEvery(WATCH_SEASONS, getSeasonsWorker)]);
}

export default seasonsWatcher;
