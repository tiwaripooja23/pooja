import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

function* getToolbarSaga(action:any) {
  yield put({ type: "GET_TOOLBAR_SUCCESS", value: action });
}

export default function* toolbarSaga() {
    yield takeLatest("CALL_TOOLBAR", getToolbarSaga);
 }
