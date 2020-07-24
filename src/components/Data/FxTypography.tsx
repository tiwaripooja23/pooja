/*
*@sarath
Fx typography component 
extends from the Material typography and 
enhances for the airbase requirements
*/
import React, { ComponentProps } from "react";
import { FxFxAbstractComponentProps } from "../FxAbstractComponent";
import { Typography, StandardProps } from "@material-ui/core";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AppState } from "../../libs/reducer/rootReducer";
import { SourceProcessor } from "../../libs/utils/SourceProcessor";
/*
 interface extends common typography properties for specific properties
*/

/*
  this component support both standard attributes as well as the 
  attrubutes settying from the JSON like config.
*/
interface FxTypographyProps
  extends FxFxAbstractComponentProps,
    StandardProps<React.HTMLAttributes<HTMLDivElement>, ""> {
  id: string;
  config?: any;
  variant?: any;
}

//FX Button Component
export const FxTypography: React.FC<FxTypographyProps> = props => {
  // wire the state to component if any
  const state = useSelector((state: any) => {
    if (props.id && state.context[props.id]) {
      console.log(state);
      return state.context[props.id];
    } else {
      return { config: { params: {} } };
    }
  });
  props = { ...props, ...state.config.params };
  //console.log(props);
  //SourceProcessor.process(state, props.id, useDispatch());

  return (
    <div>
      <Typography
        className={props.className ? props.className : ""}
        variant={props.variant ? props.variant : "contained"}
        id={props.id ? props.id : ""}
      >
        {state.data.text}
        {state && props.id}
        {props.children}
      </Typography>
    </div>
  );
};
