import { State, PageStatus } from "./rootReducer";

export enum PortalActions {
  PORTAL_LOAD = "PORTAL_LOAD",
  PORTAL_LOAD_PATH_SET = "PORTAL_LOAD_PATH_SET",
  PORTAL_LOAD_NEW = "PORTAL_LOAD_NEW",
  PORTAL_LOAD_API_DONE = "PORTAL_LOAD_API_DONE"
}
const initialState: any = {
  //  name: "admin"
  // status: 2,
  // path: [
  //   {
  //     url: "/details/:id",
  //     fri: "fri::page::details",
  //     params: ["id"],
  //     exact: false
  //   },
  //   {
  //     url: "/",
  //     fri: "fri::page::list",
  //     params: [],
  //     exact: false
  //   }
  // ]
};

export const portalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    //the below reucer is invoked by api once portal path is retreived
    case PortalActions.PORTAL_LOAD_PATH_SET:
      return {
        ...state,
        status: PageStatus.CONTEXT_READY,
        path: action.payload.path
      };
    // for the user, currentPortal is set .
    case PortalActions.PORTAL_LOAD_NEW:
      return {
        status: PageStatus.PENDING,
        name: action.payload.fri,
        path: []
      };
  }
  return state;
};
