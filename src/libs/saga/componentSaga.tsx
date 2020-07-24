import { put, call, takeLatest, takeEvery, select } from "redux-saga/effects";
import { State } from "../reducer/rootReducer";

function* getcomponentSaga(action: any) {
  yield put({ type: "CREATE_COMPONENT", value: action });
}

/**
 *
 * This will ensure the page JSON is created and ready for processing by AppPage component
 * @param portal
 * @param page
 */

const getPage = (state: State) => state.page;

function* getPageJSON(action: any) {
  const page = action.payload.fri;
  let pageData = yield select(getPage);
  if (pageData[page].json === undefined) {
    // call api saga to get JSON
    //yield put({type: "PAGE_JSON_SET", payload: { fri: page, json: combineJSON() }});
  } else {
    //json is already there.. just set the status to ready
    yield put({
      type: "LOAD_PAGE_JSON_READY",
      payload: { fri: page, json: pageData[page].json }
    });
  }
}

function* generatePageContext(action: any) {
  //loop through JSON, identify each component,
  let context: any = {};
  //loop through all components in JSON,
  let pageData = yield select(getPage);
  const json = pageData[action.payload.fri].json;
  let component = "fri::toolbar::c1";
  context[component] = {
    config: {
      // read from JSON
    },
    data: {}
  };
  yield put({
    type: "PAGE_CONTEXT_INITIALIZE",
    payload: { fri: action.payload.fri, context: context }
  });
}

function* makePageReady(action: any) {
  yield generatePageContext(action);
}

export default function* componentSaga() {
  yield takeLatest("CREATE_COMPONENT_SAGA", getcomponentSaga);
  yield takeLatest("LOAD_PAGE", makePageReady);
  yield takeLatest("LOAD_PAGE_JSON", getPageJSON);
}
