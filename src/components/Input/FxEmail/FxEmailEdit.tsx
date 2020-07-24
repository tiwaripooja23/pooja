import * as React from "react";
import { TextField } from "@material-ui/core";
import clsx from "clsx";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

interface FxTextFieldProps extends StandardTextFieldProps {
  id: string;
  value?: string;

}
export const FxEmailEdit: React.FC<FxTextFieldProps> =
  (props) => {
    const [inputvalue, setInputvalue] = React.useState(props.value ? props.value : '');
    const handleChange = (event: any) => {
      setInputvalue(event.target.value);
    }
    return (
      <TextField className={props.className} id={props.id} type="email"
        InputProps={{
          onChange: props.onChange ? props.onChange : handleChange,
          value: inputvalue
        }}></TextField>
    )
  };
