import { all, fork } from "redux-saga/effects";
import toolbarSaga from "./toolbarSaga";
import componentSaga from "./componentSaga";
import { apiSaga } from "./apiSaga";
import portalSaga from "./portalSaga";
import pageSaga from "./pageSaga";
// Calls all the generator functions(sagas).
function* rootSaga(): any {
  yield all([
    toolbarSaga(),
    componentSaga(),
    apiSaga(),
    pageSaga(),
    portalSaga()
  ]);
}

export default rootSaga;
