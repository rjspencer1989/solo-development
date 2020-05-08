import {
    FETCH_FURS,
    FETCH_FURS_SUCCESS,
    ERROR
} from './actions';
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

function* fetchFurs() {
    try {
        const furs = yield call(fetch, "https://solo-development-web.herokuapp.com/furs/");
        yield put({
            type: FETCH_FURS_SUCCESS,
            payload: furs.json()
        });
    } catch (err) {
        yield put({
            type: ERROR,
            payload: err
        });
    }
}

function* mySaga() {
    yield takeLatest(FETCH_FURS, fetchFurs);
}

export default mySaga;