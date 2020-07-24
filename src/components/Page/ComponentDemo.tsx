import React, { Props, lazy } from 'react'; // we need this to make JSX compile
import { Grid, Typography, FormLabel, TextField } from '@material-ui/core';
import { LayoutDefault } from '../Layout/Default';
import { FxAutoComplete } from '../Utils/FxAutoComplete';
import { FxButton } from '../Action/FxButton';
import { FxDataGrid } from '../Data/FxDataGrid';
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg';
import { ReactComponent as PrefIcon } from '../../assets/svg/selected.svg';
import { ReactComponent as ActionIcon } from '../../assets/svg/action.svg';
import { ReactComponent as SortIcon } from '../../assets/svg/sort.svg';
import { ReactComponent as ColumnIcon } from '../../assets/svg/columns.svg';
import { FxCard, FxCardHeader, FxCardBody } from '../Container/FxCard';
import { FxInfoCard } from './Cards/FxInfoCard';
import * as listData from './Cards/listdata.json';
import { FxLogo } from '../Navigation/FxLogo';


const FxMenu = lazy(() =>
  import('../Navigation/FxMenu')
);
const FxTab = lazy(() =>
  import('../Navigation/FxTab')
);



export const ComponentDemo: React.FC =
  () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    };
    return (
      <LayoutDefault>
        <React.Suspense fallback="Loading...">
          <Grid item className="fx-menu">
          <div className="fx-menu-sticky">
            <FxLogo menuItems={listData.logomenuitems} /> 
            <FxMenu menuItems={listData.leftmenuitems} />
          </div>
          </Grid>
          <Grid item xs >
            <Typography variant="h6" >
              Leads
          </Typography>
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
                <FxButton id="btnalldebts" className="fx-button fx-button-white" endIcon={<ActionIcon />}>...</FxButton>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FxCard className="fx-card-left">
                <FxCardHeader >
                  <Grid container direction="row" item xs={12} >
                    <h3>Component Demo</h3>
                  </Grid>
                </FxCardHeader>
                <FxCardBody className="fx-info-card">
                  {/*****
                  PUT COMPONENTS HERE
                ****/}
                  <TextField onChange={handleChange} />
                  <Typography  >{value}</Typography>
                </FxCardBody>
              </FxCard>

            </Grid>
          </Grid>
        </React.Suspense>
      </LayoutDefault>
    )
  }
