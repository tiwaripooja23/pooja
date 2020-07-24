import { FxFxAbstractComponentProps } from "../FxAbstractComponent";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../libs/reducer/rootReducer";
import { Button, TextField } from "@material-ui/core";

/**
 * FXContainer is a sample component which will act as a container for
 * any component which is containable.
 *
 * Children
 *  - container will render children under it.
 *  - container will set the props for the children to the store.
 *
 * Events
 *  - Container_content_changed
 *  - Container_size_changed
 *  - Container_content_ready
 *
 * @param props
 */

export enum EVENTS {
  CONTENT_CHANGED = "FXCONTAINER_CONTENT_CHANGED",
  SIZE_CHANGED = "FXCONTAINER_SIZE_CHANGED",
  CONTENT_READY = "FXCONTAINER_CONTENT_READY"
}

export enum ACTIONS {
  CHANGE_CONTENT = "FXCONTAINER_CHANGE_CONTENT",
  HIDE = "HIDE"
}

const initialState: State = {
  context: {
    component: {}
  }
};

export function ContainerReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.CHANGE_CONTENT:
      state.context.component[action.payload.id].data = {
        data: action.payload.data
      };
      return state;
    default:
      return state;
  }
}
export const FxContainer: React.FC<FxFxAbstractComponentProps> = props => {
  const config = useSelector((state: State) => state.context[props.id].config);
  const data = useSelector((state: State) => state.context[props.id].data);

  props = config.config;

  const dispatch = useDispatch();

  return (
    <div>
      <div className={props.shouldHide ? "hidden" : ""}>{data.data}</div>
      <TextField type="text">{data.input}</TextField>
      <input
        type="submit"
        onClick={() =>
          dispatch({ type: ACTIONS.HIDE, payload: { id: props.id } })
        }
      >
        Hide
      </input>
      <input
        type="submit"
        onClick={() =>
          dispatch({
            type: ACTIONS.CHANGE_CONTENT,
            payload: { id: props.id, data: data }
          })
        }
      >
        Set Data
      </input>
    </div>
  );
};
