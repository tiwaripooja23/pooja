import * as React from "react";
import {  TextField } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

interface IFxCurrencyEdit extends StandardTextFieldProps {
  id: string;
  value?: string;
  className?: string;
}

export const FxCurrencyEdit: React.FC<IFxCurrencyEdit> =
  (props) => {
    const [inputvalue, setInputvalue] = React.useState(props.value ? props.value : '');
    const handleChange = (event: any) => {
      setInputvalue(event.target.value);
    }
    return (
      <TextField type="number" className={props.className}
        InputProps={{
          onChange: props.onChange ? props.onChange : handleChange,
          value: inputvalue
        }}></TextField>
    )
  };
