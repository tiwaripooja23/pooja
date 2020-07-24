import React from "react";
import { FxFxAbstractComponentProps } from "../../FxAbstractComponent";
import { useDispatch, useSelector } from "react-redux";
import { SourceProcessor } from "../../../libs/utils/SourceProcessor";

//interface for the comp
interface FxCalendarProps extends FxFxAbstractComponentProps {
  id: string;
  config?: any;
  className?: any;
}

//
export const FxBalanceCalaenderCard: React.FC<FxCalendarProps> = props => {
  const state = useSelector((state: any) => {
    if (props.id && state.context[props.id]) {
      return state.context[props.id];
    } else {
      return { config: { params: {} } };
    }
  });
  props = { ...props, ...state.config.params };

  SourceProcessor.process(state, props.id, useDispatch());

  const dispatch = useDispatch();
  const calendarData = state.data;

  return (
    <div className={props.className ? props.className : "fx-balance-calendar"}>
      {calendarData.map((item: any, index: any) => {
        return (
          <div
            className={
              (index === 4 ? "bc-data-red" : "") +
              (index === 9 ? "bc-data-blue" : "")
            }
            key={index}
          >
            <p>{item.amount}</p>
            <p>{item.date} </p>
          </div>
        );
      })}
    </div>
  );
};
