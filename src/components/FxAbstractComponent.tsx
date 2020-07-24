/*
*@sarath
Fx abstarct component 
other components will be extending from this component
*/
import React from "react";
import { string } from "prop-types";
import { ButtonBaseProps } from "@material-ui/core";

/*
button interface extends common button properties for specific properties
extending the properties for the divider function
*/
export enum FxDataSourceType {
    INLINE,
    API
  }
export class FxDataSource {
    type?: FxDataSourceType;
    api?: string;
    data?: any;
  }

export  interface FxFxAbstractComponentProps    {
  id:string;
  config?:any;
  components?:FxFxAbstractComponentProps[];
  events?: any;
  soure?:FxDataSource;
  toolbar?:any
}
//FX Button Component
export const FxAbstractComponent: React.FC<FxFxAbstractComponentProps> =
  (props) => (
    <div>
      
    </div>
  )



  
