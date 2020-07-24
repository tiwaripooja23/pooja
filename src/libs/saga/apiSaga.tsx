import { put, call, takeLatest, takeEvery, select } from "redux-saga/effects";

/**
 * 1) System requires saga to update certain specific store attributes
 * 2) System requires saga to fire certain reducers
 * 3) Component requires saga to update component.data under context
 */

export function* getAPICall(url: string, params: any): any {
  console.log("APICALL [INLINE] >> ", url);
  return yield call(() => fetch(url).then(response => response.json()));
}

function* getAPISaga(action: any) {
  let json = yield fetch(action.payload.url).then(response => response.json());

  let type = "CONTEXT_COMPONENT_UPDATE_DATA";
  if (action.payload.type) {
    type = action.payload.type;
  }
  if (action.payload.transformer) {
    json = action.payload.transformer(action.payload.id, json);
  }
  console.log("APICALL >> ", action.payload.url);
  let node = "data";
  if (action.payload.target) {
    node = "data." + action.payload.target;
  }
  yield put({ type: type, payload: { [node]: json, id: action.payload.id } });
}

function* getURLSaga(action: any) {
  const body = yield fetch(action.payload.url).then(response => response.body);

  let type = "CONTEXT_COMPONENT_UPDATE_DATA";
  if (action.payload.type) {
    type = action.payload.type;
  }
  yield put({ type: type, data: body, id: action.payload.id });
}

export function* apiSaga() {
  yield takeEvery("GET_API", getAPISaga);
  yield takeEvery("GET_URL", getURLSaga);
}
