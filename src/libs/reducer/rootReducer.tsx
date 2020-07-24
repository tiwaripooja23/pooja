import { combineReducers } from "redux";
import componentReducer from "./componentReducer";
import pageReducer from "./pageReducer";
import layoutReducer from "./layoutReducer";
import { ContainerReducer } from "../../components/Action/FxContainer";
import { portalReducer } from "./portalReducer";

export interface ComponentState {
  params?: any;
  id?: string;
  events?: any;
  toolbar?: any;
  source?: any;
  data?: any;
}
export enum PageStatus {
  PENDING = 0,
  CONTEXT_PENDING = 1,
  CONTEXT_READY = 2
}
export interface State {
  /* portal : { 
    [name:string]: {
      default: string;
      page : { [name:string]: Object; }
      layout : { [name:string]: Object; }
    }
  },*/
  portal: {
    name: string;
    status: PageStatus;
    path: [
      { [url: string]: { fri: string; params?: string[]; exact?: boolean } }
    ];
  };
  config: {
    page: { [name: string]: { status: PageStatus; data: Object; params: any } };
    layout: { [name: string]: Object };
  };
  context: {
    [name: string]: { config: ComponentState; data: any };
  };
}

const rootReducer = combineReducers({
  portal: portalReducer,
  container: ContainerReducer,
  config: combineReducers({
    page: pageReducer,
    layout: layoutReducer
  }),
  context: componentReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
