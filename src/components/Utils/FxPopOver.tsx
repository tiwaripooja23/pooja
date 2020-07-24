import React from "react";
import { Popover, PopoverProps } from "@material-ui/core";
import clsx from "clsx";

declare interface IFxPopOver extends PopoverProps {
  id: string | undefined;
}

export const FxPopOver: React.FC<IFxPopOver> =
  (props) => {
    return (
      <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        anchorOrigin={
          props.anchorOrigin || {
            horizontal: 'left',
            vertical: 'bottom',
          }}
        transformOrigin={
          props.transformOrigin || {
            vertical: 'top',
            horizontal: 'left',
          }}
        PaperProps={{
          className: clsx("fx-popover-card", props.className)
        }}
      >
        {
          props?.children
        }
      </Popover>
    )
  }