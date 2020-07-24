/*
 **
 ** Status Component
 */

import React from "react";
declare interface IFxStatus {
  status?: any;
  entity?: any;
  className?: any;
}
// export FxStatus
export const FxStatus: React.FC<IFxStatus> = (props) => {
  //Pre-defined Status for entities
  let statusData = {
    client: [
      {
        "1": {
          label: "Enrolled",
          color: "#7a86a8",
        },
      },
      {
        "2": {
          label: "Negotiating - Offer Sent",
          color: "#f0a71a",
        },
      },
      {
        "3": {
          label: "Settled - Paying Down",
          color: "#f0a71a",
        },
      },
      {
        "4": {
          label: "Settled - Complete",
          color: "#0dac0c",
        },
      },
      {
        "5": {
          label: "Settled - Broken",
          color: "#f12826",
        },
      },
      {
        "6": {
          label: "Ineligible",
          color: "#7a86a8",
        },
      },
    ],
    schedule: [],
  };
  let setStatus: any = ""; // default status
  let setColor: any = ""; // default color
  Object.entries(statusData).map(([entityKey, value]) => {
    if (entityKey === props.entity) {
      Object.entries(value).map(([subkey, subvalue]) => {
        Object.entries(subvalue).map(([statuskey, statusValue]) => {
          if (statuskey === props.status) {
            setStatus = statusValue?.label;
            setColor = statusValue?.color;
          }
        });
      });
    }
  });
  return (
    <span>
      <span
        className={props.className ? props.className : ""}
        style={{ backgroundColor: setColor }}
      ></span>
      {setStatus}
    </span>
  );
};
