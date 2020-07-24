import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, PageStatus } from "../../libs/reducer/rootReducer";
import { PortalActions } from "../../libs/reducer/portalReducer";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { FxPage } from "./FxPage";
import { Typography } from "@material-ui/core";
import { FxTypography } from "../Data/FxTypography";
import { FxButton } from "./FxButton";

interface PortalProps {}

/**
 * currentPortal is the store location to identify the portal to load.
 *
 * @param props
 */

export const FxPortal: React.FC<PortalProps> = props => {
  const portalState = useSelector((state: State) => state.portal);
  const dispatch = useDispatch();

  //TODO: delete the below block. since portal is set by login section.
  if (portalState && portalState.status == null) {
    // portal state is in bad state.
    dispatch({
      type: PortalActions.PORTAL_LOAD_NEW,
      payload: { fri: "admin" }
    });
    return <div>portal not set yet</div>;
  }
  // portal name is set but portal status is pending..
  // trigger saga to get the path etc to render.
  if (
    portalState &&
    portalState.status === PageStatus.PENDING &&
    portalState.name
  ) {
    dispatch({
      type: PortalActions.PORTAL_LOAD
    });
    return <div>portal loading...{portalState.name}</div>;
  }

  return (
    <div>
      FxPortal
      {typeof portalState === "undefined" && <div> Not yet ready</div>
      // the above value is set by the RolesAPI once login is done.
      // dispatch event to get the RolesAPI data
      }
      {typeof portalState !== "undefined" &&
        portalState.status === PageStatus.PENDING && (
          <div>portal loading...{portalState.name}</div>
        )}
      {typeof portalState !== "undefined" &&
        portalState.status === PageStatus.READY && (
          <div>
            <FxButton id="fri::component:typeography?id=1" />
            {/* <FxBalanceCalaenderCard id="fri::component:balanceCalander?id=1" /> */}
          </div>
          //<div>{renderPortal(portalState.path)}</div>
        )}
      {!portalState.name && (
        <div>Bad Portal to Load.. I dont know the name</div>
      )}
    </div>
  );
};

/**
 * renderPortal method should render like below
 *  schema - { [url: string]: { fri: string; params?: string[]; exact?: boolean } }

 *  sample - [{ "/": { fri: "home" } }]
 *
 * <Router>
 *  <Switch>
 *    <Route path="/" children={<FxPage fri="fri://page/leadlist" param=""/>} />
 *    <Route path="/lead/:id" children={<FxPage fri="fri://page/leadview" param="id"/>} />
 *    <Route path="/debt/:id" children={<FxPage fri="fri://page/debtview" param="id"/>} />
 *    <Route path="/debt" exact="true" children={<FxPage fri="fri://page/debtview" param="id"/>} />
 *   </Switch>
 * </Router>
 */
function renderPortal(path: any): any {
  return (
    <Router>
      <Switch>{renderPath(path)}</Switch>
    </Router>
  );
}

function renderPath(path: any): any {
  return path.map((value: any) => {
    return (
      <Route
        key={value.fri}
        path={value.url}
        children={<FxPage fri={value.fri} />}
      />
    );
    //
  });
}
