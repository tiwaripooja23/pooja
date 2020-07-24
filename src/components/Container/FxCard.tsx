import React from "react";
const cssFxCard = 'fx-card';
const cssFxCardBody = 'fx-card-body';
const cssFxCardHeader = 'fx-card-header';
const cssFxCardFooter = 'fx-card-footer';

export const FxCard = (props: any) => (
  <div className={`${cssFxCard} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export const FxCardHeader = (props: any) => (
  <div className={`${cssFxCardHeader} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export const FxCardBody = (props: any) => (
  <div className={`${cssFxCardBody} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export const FxCardFooter = (props: any) => (
  <div className={`${cssFxCardFooter} ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);
