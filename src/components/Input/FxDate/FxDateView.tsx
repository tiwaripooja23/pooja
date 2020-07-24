/*
 * Datetime View Component
 */

import * as React from "react";
import Moment from "react-moment";
declare interface IFxDateTimeView {
  date?: Date;
  format?: any;
}
// export datetime
export const FxDateTimeView: React.FC<IFxDateTimeView> = ({ date, format }) => {
  return (
      <Moment format={format} date={date} />
  );
};
