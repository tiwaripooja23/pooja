/* eslint-disable no-use-before-define */
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


type RadioProps = {
    groupLabel?:string;
    name?:string;
    options?:any;
    onClick?:any;
    value?:any;
}
 const FxRadioEdit:React.FC<RadioProps> =
  ({groupLabel,name,options,onClick,value}) => {
    
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <RadioGroup aria-label={name} name={name} value={value} onChange={onClick} row>
        {options.map((option:any) => 
            <FormControlLabel value={option.value} control={<Radio />} label={option.label} 
                disabled={option.disabled}
            />
        )}
      </RadioGroup>
    </FormControl>
  );
}
export default FxRadioEdit;




