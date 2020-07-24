import * as React from "react";
import { FormLabel, TextField } from "@material-ui/core";
import {  FormFieldProps } from "../Props";


 const FxTextEdit: React.FC<FormFieldProps> =
    ({ isEditable, label, value, placeholderText, className, name, id }) => (
        <div>
            {label &&
                <FormLabel>{label}</FormLabel>
            }
            {isEditable &&
                <TextField type ="text" defaultValue ={value} placeholder ={placeholderText} className = {className} name = {name} id = {id} />
            }
            {!isEditable &&
                <FormLabel>{value} </FormLabel>
            }
        </div>
    )

export default Text;