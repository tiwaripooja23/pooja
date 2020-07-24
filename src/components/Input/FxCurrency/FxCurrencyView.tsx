import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

declare interface IFxCurrencyView {
  id: string;
  value: string | number;
  prefix?: string;
  className?: string | string[];
}

export const FxCurrencyView: React.FC<IFxCurrencyView> =
  (props) => (
      <Typography  id={props.id} className={clsx(props.className, props.value <= 0 ? 'fx-color-red' : '')}>
        {props.prefix && props.prefix}
        {props.value >= 0 ? props.value : `(${props.value})`}
      </Typography>
  );