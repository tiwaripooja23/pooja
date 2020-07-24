import React, { lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ComponentDemo } from "./components/Page/ComponentDemo";
import { Dynamic } from "./components/Page/Dynamic";
import { FxPortal } from "./components/Action/FxPortal";
import { FxButton } from "./components/Action/FxButton";
import   './components/Layout/default.scss';

//import pages as lazy
// const ClientList = lazy(() =>
//   import("./components/Page").then(({ ClientList }) => ({
//     default: ClientList
//   }))
// );
// const ClientDetails = lazy(() =>
//   import("./components/Page").then(({ ClientDetails }) => ({
//     default: ClientDetails
//   }))
// );

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <FxPortal />
      </Grid>
    </div>
  );
}

/** 
 <Grid container>
        <React.Suspense fallback="Loading...">
          <Router>
            <Switch>
              <Route path="/details">
                <ClientDetails />
              </Route>
              <Route path="/component">
                <ComponentDemo />
              </Route>
              <Route path="/dynamic">
                <Dynamic />
              </Route>
             <Route path="/">
                <ClientList />
              </Route>

            </Switch>
          </Router>
        </React.Suspense>
      </Grid>
      */

export default App;
