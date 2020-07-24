import { State, PageStatus } from "./rootReducer";

const initialState: any = {
  "fri::component:typeography?id=1": {
    config: {
      params: {
        title: "ButtonTitle",
        className: ""
      },
      events: {},
      source: {
        type: 1,
        api: "/api/test.json"
      }
    },

    data: {}
  },
  "fri::component:balanceCalander?id=1": {
    config: {
      params: {
        title: "Balance Calendar Card",
        className: "fx-balance-calendar"
      },
      events: {},
      source: {
        type: 1,
        api: "/api/calendar.json"
      }
    },
    data: []
  }
};

const componentReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "COMPONENT_CREATE":
      state[action.value.payload.id] = {
        config: action.value.payload.props,
        data: {}
      };
      return state;
    case "CONTEXT_INITIALIZE":
      state = action.payload.context;

      return state;

    //this will update api callback data to components data node.
    case "CONTEXT_COMPONENT_UPDATE_DATA":
      // if( state[action.payload.id].config.source.status){
      state[action.payload.id].config.source.status = 1; // should only call once.

      state[action.payload.id] = {
        data: action.payload.data,
        config: state[action.payload.id].config
      };
      return state;
    default:
      return state;
  }
};

export default componentReducer;

/**
 *  [load_page]  (saga)
 *      [load_page_json] (saga)
 *        [load_page_json_ready]  (if json is avaiable)
 *          [API_CALL] (request of page-json) , "load_page_json_api_done", "page-fri"
 *          [load_page_json_api_done] (api data and set for right page fri)
 *              <PAGE_JSON_SET>
 *          [API_CALL] (request of layout-json) , "load_page_json_api_done", "layout-fri" , "page-fri"
 *              <LAYOUT_JSON_SET>
 *          [load_page_json_api_done] (api data and set for right layout fri)  will merge both JSON and update page JSON
 *        [load_page_json_ready]
 *
 *  [load_page_json_ready]
 *    [page_load_generate_context] fri,
 *      <PAGE_CONTEXT_INITIALIZE> pagestatus = READY
 *
 */
