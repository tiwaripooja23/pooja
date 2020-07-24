import React, { Props, lazy } from 'react'; // we need this to make JSX compile
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import   './default.scss';
const useStyles = makeStyles((theme) => ({
  background: {
    background: "transparent",
  },
}));


export const LayoutDefault: React.FC =
  (props) =>  (
    <Grid container className ="grid">
    {props.children}
    </Grid>
  )
