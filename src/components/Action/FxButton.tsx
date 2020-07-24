/*
*@sarath
Fx Button component 
extends from the Material button and 
enhances for the airbase requirements
//do not try to call material button directly
*/
import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { FxFxAbstractComponentProps } from "../FxAbstractComponent";
import { getIcon } from "../../libs/dictionary/icon";
import { useDispatch, useSelector } from "react-redux";
import { SourceProcessor } from "../../libs/utils/SourceProcessor";
import { put } from "redux-saga/effects";

/*
button interface extends common button properties for specific properties
extending the properties for the divider function
*/

/*
  this component support both standard attributes as well as the 
  attrubutes settying from the JSON like config.
*/
interface FxButtonProps extends FxFxAbstractComponentProps, ButtonProps {
  id: string;
  divider?: boolean;
  dividerValue?: number;
  config?: any;
}

function processAPIData(id: any, json: any) {
  json.title = "Ok, " + json.text;
  return json;
}

//FX Button Component
export const FxButton: React.FC<FxButtonProps> = props => {
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

  SourceProcessor.process(state, props.id, useDispatch(), processAPIData);

  const dispatch = useDispatch();
  const handleClick = () => {
    if (props.events.onClick) {
      dispatch({
        type: props.events.onClick.function,
        payload: {
          id: props.events.onClick.target,
          url: props.events.onClick.url
        }
      });
    }
  };
  /*
    start icon and end icon may be direct compoent
    or a string data from the json
    */
  if (state.data.title) props.title = state.data.title;
  return (
    <div>
      <Button
        className={
          props.className ? props.className : "fx-button fx-button-white"
        }
        startIcon={props.startIcon ? getIcon(props.startIcon) : ""}
        endIcon={props.endIcon ? getIcon(props.endIcon) : ""}
        variant={props.variant ? props.variant : "contained"}
        onClick={
          props.events && props.events.onClick ? handleClick : props.onClick
        }
        id={props.id ? props.id : ""}
      >
        {props.title && props.title}
        {props.children}
        {props.divider && (
          <span className="divider"> {props.dividerValue}</span>
        )}
      </Button>
    </div>
  );
};
