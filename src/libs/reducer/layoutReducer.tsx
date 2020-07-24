import { State } from "./rootReducer";
import { StaticRouter } from "react-router";

export enum LayoutAction {
  LAYOUT_LOAD_JSON = "LAYOUT_LOAD_JSON",
  LAYOUT_LOAD_JSON_SET = "LAYOUT_LOAD_JSON_SET"
}
const initialState: any = {};

const layoutReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LayoutAction.LAYOUT_LOAD_JSON:
      return state;
    case LayoutAction.LAYOUT_LOAD_JSON_SET:
      if (action.payload.data != null) {
        state[action.payload.fri] = action.payload.data;
      }
      return state;
    default:
      return state;
  }
};

export default layoutReducer;
