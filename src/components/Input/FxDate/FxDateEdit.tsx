/* eslint-disable no-use-before-define */
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

type DateProps = {
  label?:string;
  defaultValue?:any;
}
 const FxDateEdit:React.FC<DateProps> =
  ({label,defaultValue}) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(defaultValue);
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>
  );
}
export default FxDateEdit;




