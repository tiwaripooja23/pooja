import {
  put,
  call,
  takeLatest,
  takeEvery,
  select,
  take,
  takeLeading
} from "redux-saga/effects";
import { State } from "../reducer/rootReducer";
import { PortalActions } from "../reducer/portalReducer";
import { LayoutAction } from "../reducer/layoutReducer";
import { getAPICall } from "./apiSaga";
import { buildPageJSON } from "./pageSaga";
import { PageActions } from "../reducer/pageReducer";

const getPortal = (state: State) => state.portal;

const SINGLE_TIME_LOAD: boolean = true;
/**
 * 1) RoleAPI or something similar set or changes portal
 *
 */
export default function* portalSaga() {
  yield takeLeading(PortalActions.PORTAL_LOAD, loadPortal);
  yield takeLeading(PortalActions.PORTAL_LOAD_API_DONE, processAPIReponse);
}

/**
 * Get the portal JSON as
 *  1)single JSON or only portal.json to begin with.
 * @param action
 */
function* loadPortal(action: any) {
  let portalState = yield select(getPortal);
  const url: string = getPortalJSONUrl(portalState.name, SINGLE_TIME_LOAD);

  yield put({
    type: "GET_API",
    payload: {
      url: url,
      type: PortalActions.PORTAL_LOAD_API_DONE,
      id: portalState.name
    }
  });
}

/**
 * API responded and this saga is going to process it.
 * @param action
 */
function* processAPIReponse(action: any) {
  const data: any = action.payload.data;

  if (SINGLE_TIME_LOAD) {
    // first get alal layout keys
    // set layout keys to store. (LayoutAction.LAYOUT_LOAD_JSON_SET) {fri: key , data: value }
    // data.layout ;

    let layoutKeys = Object.keys(data.layout);
    for (let i = 0; i < layoutKeys.length; i++) {
      yield setLayout(layoutKeys[i], data.layout[layoutKeys[i]]);
    }
    console.log(yield select(state => state.config));

    let pageKeys = Object.keys(data.page);
    for (let i = 0; i < pageKeys.length; i++) {
      yield setPage(pageKeys[i], data.page[pageKeys[i]]);
    }

    yield put({
      type: PortalActions.PORTAL_LOAD_PATH_SET,
      payload: {
        path: data.portal.path
      }
    });
  } else {
    yield put({
      type: PortalActions.PORTAL_LOAD_PATH_SET,
      payload: {
        path: data.path
      }
    });
  }
}

function* setLayout(fri: string, json: any) {
  yield put({
    type: LayoutAction.LAYOUT_LOAD_JSON_SET,
    payload: {
      fri: fri,
      data: json
    }
  });
}
function* setPage(page: string, newjson: any) {
  const finaljson = yield buildPageJSON(page, newjson);
  yield put({
    type: PageActions.PAGE_LOAD_JSON_UPDATE_COMBINE_JSON,
    payload: {
      fri: page,
      data: finaljson
    }
  });
  return;
}

function getPortalJSONUrl(name: string, single: boolean): string {
  if (single) return "/api/portal/" + name + "/portal2.json";

  return "/api/portal/" + name + "/portal.json";
}
