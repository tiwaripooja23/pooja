/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

type CheckboxProps = {
    groupLabel?:string;
    state?:any;  
    onClick?:any;
}
 const FxCheckboxEdit:React.FC<CheckboxProps> =
  ({groupLabel,state,onClick}) => {
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
    <FormControl component="fieldset" className={classes.formControl}>
    <FormLabel component="legend">{groupLabel}</FormLabel>
      <FormGroup row>
        {state.options.map((option:any) => (
          <FormControlLabel
            control={<Checkbox checked={option.checked} onChange={onClick}
                    name={option.name} />} label={option.label}
      />
      ))}
      </FormGroup>
    </FormControl>
    </div>
  );
}
export default FxCheckboxEdit;




