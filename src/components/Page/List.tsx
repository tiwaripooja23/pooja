import React, { Props, lazy } from 'react'; // we need this to make JSX compile
import { Grid, Typography, FormLabel, Button, Menu, MenuItem } from '@material-ui/core';
import { LayoutDefault } from '../Layout/Default';
import { FxAutoComplete } from '../Utils/FxAutoComplete';
import { FxButton } from '../Action/FxButton';
import { FxDataGrid } from '../Data/FxDataGrid';
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg';
import { ReactComponent as PrefIcon } from '../../assets/svg/selected.svg';
import { ReactComponent as ActionIcon } from '../../assets/svg/action.svg';
import { ReactComponent as SortIcon } from '../../assets/svg/sort.svg';
import { ReactComponent as ColumnIcon } from '../../assets/svg/columns.svg';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import * as listData from './Cards/listdata.json';
import { FxLogo } from '../Navigation/FxLogo';
import Emitter from '../../libs/eventemiter';
import { FxContextMenu } from '../Navigation/FxContextMenu';

const FxMenu = lazy(() =>
  import('../Navigation/FxMenu')
);
const FxTab = lazy(() =>
  import('../Navigation/FxTab')
);

//context menu handling event emitter
const handleClickContext = (event: React.MouseEvent<HTMLButtonElement>) => {
  Emitter.emit(event.currentTarget.id + 'OPEN_CONTEXT', event.currentTarget);
};



export const ClientList: React.FC =
  () => {
    return (
      <LayoutDefault>
        <React.Suspense fallback="Loading...">
          <Grid item className="fx-menu">
            <div className="fx-menu-sticky">
              <FxButton className="fx-button fx-button-white fx-menu-logo" startIcon={<LogoIcon />} endIcon={<ActionIcon />}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                id="topmenubutton"
                onClick={handleClickContext}
              >&nbsp;</FxButton>
              <FxContextMenu menuItems={listData.logomenuitems} contextId="topmenubutton" />
              <FxMenu menuItems={listData.leftmenuitems} />
            </div>
          </Grid>
          <Grid item xs >
            <Grid container direction="row" item xs={12}>
              <Grid container item xs={4}>
                <Typography variant="h6" >
                  Leads
               </Typography>
              </Grid>
            </Grid>
            <FxTab className="fx-tab" tabItems={listData.tabitems} />
            <Grid container direction="row" item xs={12} className="fx-gap">
              <Grid container justify="flex-start" alignItems="center" item xs={6}>
                <FxButton id="btnalldebts" className="fx-button fx-button-white fx-button-preference" startIcon={<PrefIcon />} endIcon={<ActionIcon />}>All Debts</FxButton>
                <FxAutoComplete className="fx-autocomplete padding-left-10"></FxAutoComplete>

              </Grid>
              <Grid container justify="flex-end" alignItems="center" item xs={6} className="btn-actions">
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={<FilterIcon />} divider={true} dividerValue={4} >Filters</FxButton>
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={<SortIcon />} endIcon={<ActionIcon />}>Sort</FxButton>
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={<ColumnIcon />} divider={true} dividerValue={4} >Columns</FxButton>
                <FxButton id="testaction" onClick={handleClickContext} className="fx-button fx-button-white" endIcon={<ActionIcon />}>...</FxButton>
                <FxContextMenu menuItems={listData.logomenuitems} contextId="testaction" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FxDataGrid></FxDataGrid>
            </Grid>
          </Grid>
        </React.Suspense>
      </LayoutDefault>
    )

  }





