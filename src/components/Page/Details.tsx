import React, { Props, lazy, Component, Suspense } from 'react'; // we need this to make JSX compile
import { Grid, Typography } from '@material-ui/core';
import { LayoutDefault } from '../Layout/Default';
import { FxEmailEdit } from '../Input';
import FxTab from '../Navigation/FxTab';
import { FxButton } from '../Action/FxButton';
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg';
import { ReactComponent as PrefIcon } from '../../assets/svg/selected.svg';
import { ReactComponent as ActionIcon } from '../../assets/svg/action.svg';
import { ReactComponent as SortIcon } from '../../assets/svg/sort.svg';
import { ReactComponent as ColumnIcon } from '../../assets/svg/columns.svg';
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ReactComponent as OptionIcon } from '../../assets/svg/option.svg';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { FxInfoCard } from './Cards/FxInfoCard';
import { FxTicketCard } from './Cards/FxTicketCard';
import { FxDebtCard } from './Cards/FxDebtCard';
import { FxCard, FxCardHeader, FxCardBody } from '../Container/FxCard';
import { BalanceCalaenderCard } from './Cards/FxBalanceCalendarCard';
import { FxExtAccountCard } from './Cards/FxExtAccountCard';
import * as listData from './Cards/listdata.json';
import { FxListGroup } from '../Data/FxList';
import { FxLogo } from '../Navigation/FxLogo';
import FxToolbar from '../Action/FxToolbar';
import { importView } from '../../libs/LazyImport';
import { FxContainer } from '../Action/FxContainer';
import { FxPage } from '../Action/FxPage';


const FxMenu = lazy(() =>
  import('../Navigation/FxMenu')
);

export type ComponentDispatcherProps = (
  name: string,
  defaultProps?: { [key: string]: any },
  children?: any
) => React.ReactElement | null;

export class ClientDetails extends Component {
  //dynamically load components
  DynamicComp = importView("Navigation/Menu")
  render() {
    return (
      <LayoutDefault>
        <React.Suspense fallback="Loading...">
          {/*
      <Grid item xs={2} >
         {this.DynamicComp}
      </Grid>
      <Grid item xs={10}>
         <FxEmailEdit {...formData[0]}> </FxEmailEdit>
         <h3>Tabs</h3>
         <h3>buttons</h3>
         <h3>List</h3>
      </Grid>
      */}
          <Grid item className="fx-menu">
            <div className="fx-menu-sticky">
              <FxLogo menuItems={listData.logomenuitems} />
              <FxMenu menuItems={listData.leftmenuitems} />
            </div>
          </Grid>
          <Grid item xs>
            <Grid container direction="row" item xs={12}>
              <Grid container item xs={4}>
                <Typography variant="h6" >
                  DS Clients &gt; George Jedenoff
               </Typography>
              </Grid>
              <Grid container justify="flex-end" alignItems="center" item xs className="btn-actions">
                <Typography className="details-right-header">
                  Last viewed by Amy Garcia on Dec 12 2019
               </Typography>
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={
                  <ProfileIcon />
                } endIcon={
                  <ActionIcon />
                }>Other Profiles</FxButton>
              </Grid>
            </Grid>
            
            <FxTab className="fx-tab" tabItems={listData.tabitems} />
            {/*Button area */}
            <Grid container direction="row" item xs={12} className="fx-gap">
              <Grid container justify="flex-start" alignItems="center" item xs={12}>
                <FxToolbar  id="fri://uicomponent/toolbar?id=toolbartop" components={listData.toolbar.components} >
                </FxToolbar>
                <FxContainer id="cont1"></FxContainer>
              </Grid>


              <Grid container justify="flex-start" alignItems="center" item xs={6} className="btn-actions-left">
                <FxButton id="btnalldebts" className="fx-button fx-button-white " startIcon={
                  <ProfileIcon />
                }>Owner:GBI</FxButton>
                <FxButton id="btnalldebts"className="fx-button fx-button-white " startIcon={
                  <UserIcon />
                }>Assign to User</FxButton>
                <FxButton id="btnalldebts" className="fx-button fx-button-white " endIcon={
                  <ActionIcon />
                }>Status:Active</FxButton>


              </Grid>
              <Grid container justify="flex-end" alignItems="center" item xs={6} className="btn-actions">
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={
                  <AddIcon />
                }>Note</FxButton>
                <FxButton  id="btnalldebts" className="fx-button fx-button-white" startIcon={
                  <ShareIcon />
                }>Share</FxButton>
                <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={
                  <OptionIcon />
                } endIcon={
                  <ActionIcon />
                }></FxButton>
              </Grid>
            </Grid>
            {/*Cards starts from here */}
            <table className="fx-layout-table">
              <tr>
                <td className="fx-left-card">
                  {/*Sub large left Cards starts from here */}
                  {/*Client info card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxCard className="fx-card-left">
                      <FxCardHeader >
                        <Grid container direction="row" item xs={12} >
                          <Grid container justify="flex-start" item xs={6}> <h3>Debt Information</h3></Grid>
                          <Grid container justify="flex-end" item xs={6}>
                            <FxButton id="btnalldebts" startIcon={<EditIcon />} className="fx-button fx-button-grey" >Edit</FxButton>
                          </Grid>
                        </Grid>
                      </FxCardHeader>
                      <FxCardBody className="fx-info-card">
                        <FxInfoCard id="testinfocard" />
                      </FxCardBody>
                    </FxCard>
                  </Grid>
                  {/*Client Debts card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxCard className="fx-card-left">
                      <FxCardHeader >
                        <Grid container direction="row" item xs={12} >
                          <Grid container justify="flex-start" item xs={6}> <h3>Debt</h3></Grid>
                          <Grid container justify="flex-end" item xs={6}><FxButton id="btnalldebts" className="fx-button fx-button-grey" >+Add</FxButton></Grid>
                        </Grid>
                      </FxCardHeader>
                      <FxCardBody className="fx-details-table">
                        <FxDebtCard />
                      </FxCardBody>
                    </FxCard>
                  </Grid>
                  {/*Client Balance Calendar card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxCard className="fx-card-left">
                      <FxCardHeader >
                        <Grid container direction="row" item xs={12} >
                          <Grid container justify="flex-start" item xs={6}> <h3>Balance Calender</h3></Grid>
                        </Grid>
                      </FxCardHeader>
                      <FxCardBody>
                        <BalanceCalaenderCard />
                      </FxCardBody>
                    </FxCard>
                  </Grid>
                  {/*Client External Acounts card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxCard className="fx-card-left">
                      <FxCardHeader >
                        <Grid container direction="row" item xs={12} >
                          <Grid container justify="flex-start" item xs={6}> <h3>External Accounts</h3></Grid>
                          <Grid container justify="flex-end" item xs={6}><FxButton id="btnalldebts" className="fx-button fx-button-grey" >+Add</FxButton></Grid>
                        </Grid>
                      </FxCardHeader>
                      <FxCardBody className="fx-details-table">
                        <FxExtAccountCard />
                      </FxCardBody>
                    </FxCard>
                  </Grid>

                </td>
                <td className="fx-right-card">
                  {/*Sub small right Cards starts from here */}
                  {/*Client Appointments card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxListGroup id="r1" data={listData.appointmentData} itemClass="fx-list-item fx-list-item-vbar"></FxListGroup>
                  </Grid>
                  {/*Client Ownership History card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxListGroup id="r2" data={listData.ownershipHistoryData}></FxListGroup>
                  </Grid>
                  {/*Client Tickets card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxListGroup id="r3" data={listData.ticketData}></FxListGroup>
                  </Grid>
                  {/*Client Tags card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxListGroup id="r4" data={listData.tagData}></FxListGroup>
                  </Grid>
                  {/*Client Forms card starts from here */}
                  <Grid container direction="row" item xs={12}>
                    <FxListGroup id="r5" data={listData.formListData}></FxListGroup>
                  </Grid>

                </td>
              </tr>
            </table>

          </Grid>
        </React.Suspense>
      </LayoutDefault>
    )
  }
}