import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED } from "../constants/action-types"


export default function* watcherSaga() {
    yield takeEvery(DATA_LOADED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: "API_ERRORED", payload: e})
    }
}