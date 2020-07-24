import {
  put,
  call,
  takeEvery,
  select,
  takeLatest,
  takeLeading
} from "redux-saga/effects";
import { State } from "../reducer/rootReducer";
import { PageActions } from "../reducer/pageReducer";
import { getAPICall } from "./apiSaga";

import { JSONConversion } from "../utils/layout";
import { LayoutAction } from "../reducer/layoutReducer";

/**
 * function to get page state values
 * @param state
 */

const getState = (state: State) => state;
const getLayout = (state: State) => state.config.layout;

/**
 * Watcher function for PAGE_LOAD_JSON_API_DONE EVENT
 * @param action
 */
// function* setPageJson(action: any) {

// }

export default function* pageSaga() {
  yield takeLeading(PageActions.PAGE_LOAD, loadPageSaga);
}

function* loadPageSaga(action: any) {
  console.log("PAGE_LOAD", action.type);
  let pagejson = yield buildPageJSON(action.payload.id);
  const context = buildPageContext(pagejson);
  yield put({
    type: "COMPONENT_CONTEXT_INITIALIZE",
    payload: {
      id: action.payload.id,
      context: context
    }
  });
  yield put({
    type: "PAGE_SET_READY",
    payload: {
      id: action.payload.id
    }
  });
}

function buildPageContext(json: any, context: any = {}): any {
  if (Array.isArray(json)) {
    json.map(component => {
      return buildPageContext(component, context);
    });
  } else {
    if (context !== {} && json !== undefined) {
      let sjson = { ...json };
      sjson["components"] = null;
      if (json.id) context[json.id] = { config: sjson, data: {} };
    }
    if (json && json.components) {
      return buildPageContext(json.components, context);
    }
  }
  return context;
}

export function* buildPageJSON(
  page: string,
  pagejson: any = null,
  layoutjson: any = null,
  force: boolean = false
) {
  let pageState: any;
  let portal = "";
  if (force) {
    pageState = undefined;
  } else {
    let state = yield select(getState);
    pageState = state.config.page[page];
    portal = state.portal.name;
  }

  if (pageState === undefined || pageState.data === undefined) {
    // get the JSON from APISAGA async
    let json = pagejson;
    if (json == null) {
      //console.log("## JSON not available, getting from APi", pagejson, page);
      json = yield getAPICall(getPageJSONURL(portal, page), {});
    }
    let layout = layoutjson;
    if (layout == null) {
      layout = yield getAsyncLayoutJSON(portal, json.layout.name);
    }

    const finaljson = yield compilePage(page, json, layout);

    return finaljson;
  }
  return pageState.json;
}

export function* compilePage(page: string, json: any, layout: any) {
  const newjson = JSONConversion(layout, json);

  yield put({
    type: PageActions.PAGE_LOAD_JSON_UPDATE_COMBINE_JSON,
    payload: {
      id: page,
      data: newjson
    }
  });
  return newjson;
}

function* getAsyncLayoutJSON(portal: string, name: string) {
  let layoutState = yield select(getLayout);
  if (name.indexOf(":") < 0) {
    name = "fri::layout:" + name;
  }
  let json = layoutState[name];
  if (!json) {
    json = yield getAPICall(getLayoutURL(portal, name), {});

    yield put({
      type: LayoutAction.LAYOUT_LOAD_JSON_SET,
      payload: {
        id: name,
        data: json
      }
    });
  }
  return json;
}

function getPageJSONURL(portal: string, page: string) {
  page = page.substr(page.lastIndexOf(":") + 1);
  return "/api/portal/" + portal + "/page/" + page + ".json";
}
function getLayoutURL(portal: string, page: string) {
  page = page.substr(page.lastIndexOf(":") + 1);
  console.log("page", page.substr(page.lastIndexOf(":") + 1));
  return "/api/portal/" + portal + "/layout/" + page + ".json";
}
