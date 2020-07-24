import { State, PageStatus } from "./rootReducer";

export enum PageActions {
  PAGE_LOAD = "PAGE_LOAD",
  PAGE_LOAD_JSON = "PAGE_LOAD_JSON",
  PAGE_LOAD_JSON_SET = "PAGE_LOAD_JSON_SET",
  PAGE_LOAD_JSON_READY = "PAGE_LOAD_JSON_READY",
  PAGE_LOAD_JSON_API_DONE = "PAGE_LOAD_JSON_API_DONE",
  PAGE_LOAD_JSON_API_ERROR = "PAGE_LOAD_JSON_API_ERROR",
  PAGE_LOAD_JSON_UPDATE_COMBINE_JSON = "PAGE_LOAD_JSON_UPDATE_COMBINE_JSON",
  PAGE_CONTEXT_INITIALIZE = "PAGE_CONTEXT_INITIALIZE",
  PAGE_PARAMS_SET = "PAGE_PARAMS_SET",
  LAYOUT_LOAD_JSON = "LAYOUT_LOAD_JSON",
  LAYOUT_LOAD_JSON_SET = "LAYOUT_LOAD_JSON_SET",
  LAYOUT_LOAD_JSON_READY = "LAYOUT_LOAD_JSON_READY",
  PAGE_SET_READY = "PAGE_SET_READY",
  PAGE_INITALIZE_CONTEXT = "PAGE_INITALIZE_CONTEXT"
}
const initialState: any = {};

const pageReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case PageActions.PAGE_PARAMS_SET:
      state[action.payload.id] = {
        ...state[action.payload.id],
        params: action.payload.params
      };
      return state;

    case PageActions.PAGE_CONTEXT_INITIALIZE:
      state.context = action.payload.context;
      state.config.page[action.payload.id] = {
        ...state.config.page[action.payload.id],
        status: PageStatus.CONTEXT_READY
      };
      return state;

    case PageActions.PAGE_LOAD_JSON_READY:
      if (action.payload.data != null) {
        state.config.page[action.payload.id].data = action.payload.data;
      }
      return state;
    case PageActions.PAGE_SET_READY:
      state[action.payload.id] = {
        ...state[action.payload.id],
        status: PageStatus.CONTEXT_READY
      };
      console.log("page context is set to 2", state);
      return state;
    case PageActions.PAGE_LOAD_JSON_UPDATE_COMBINE_JSON:
      if (action.payload.data != null) {
        state[action.payload.id] = {
          data: action.payload.data,
          params: {},
          status: PageStatus.CONTEXT_PENDING
        };
      }
      return state;
    default:
      return state;
  }
};

export default pageReducer;
