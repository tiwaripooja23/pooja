import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;

 