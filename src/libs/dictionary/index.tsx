/*
*@sarath
component dictionary
*/

/*
Import all the required files
*/

import { FxButton } from "../../components/Action/FxButton";
import FxLabel from "../../components/Input/FxLabel/FxLabelView";
import FxToolbar from "../../components/Action/FxToolbar";
import { FxTypography } from "../../components/Data/FxTypography";
import { FxContextMenu } from "../../components/Navigation/FxContextMenu";
import React from "react";
import { Grid } from "@material-ui/core";

export interface Dictionary {
  [key: string]: any;
}

export const compDictionary: Dictionary = {
  "fri::uicomponent:button": FxButton,
  "fri::uicomponent:label": FxLabel,
  "fri::uicomponent:toolbar": FxToolbar,
  "fri::uicomponent:breadcrumbs": FxLabel,
  "fri::uicomponent:typography": FxTypography,
  "fri::uicomponent:inlinemenu": FxContextMenu,
  "fri::uicomponent:grid": Grid
};

const d = "ds";
//get the component
export function getComponent(id: string) {
  //id may some times exact id or id with id = value or may be #$id
  let orgid: string;

  if (id.indexOf("?") !== -1) {
    orgid = id.substring(0, id.indexOf("?"));
  } else if (id.indexOf("#") !== -1) {
    orgid = id.substring(0, id.indexOf("#"));
  } else {
    orgid = id;
  }
  if (!compDictionary[orgid]) {
    //console.log(orgid.substr(orgid.lastIndexOf(":") + 1));
    let reactele = orgid.substr(orgid.lastIndexOf(":") + 1);
    console.log("Not defined , so returning pure react ", reactele);
    return reactele;
  }
  console.log("returning ", d, orgid, compDictionary[orgid]);
  return compDictionary[orgid];
}
