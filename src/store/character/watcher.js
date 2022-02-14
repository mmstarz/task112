import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SET_CHARACTER, WATCH_CHARACTER } from '../actionTypes';
import { getCharacterByName } from '../../api';

function* getCharacterWorker({ type, payload }) {
  try {
    const data = yield call(getCharacterByName, payload.name);

    yield put({
      type: SET_CHARACTER,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
      },
    });
  } catch (error) {
    yield put({
      type: SET_CHARACTER,
      payload: {
        isLoading: false,
        isError: true,
        error: error.message,
      },
    });
  }
}

function* characterWatcher() {
  yield all([takeEvery(WATCH_CHARACTER, getCharacterWorker)]);
}

export default characterWatcher;
