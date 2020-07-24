/* eslint-disable no-use-before-define */
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

type TimeProps = {
  label?:string;
}
 const FxTimeEdit:React.FC<TimeProps> =
  ({label}) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>();
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>
  );
}
export default FxTimeEdit;




