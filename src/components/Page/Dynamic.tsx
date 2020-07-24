import React, { Props, lazy, Component, Suspense, useEffect } from 'react'; // we need this to make JSX compile
import { Grid, Typography } from '@material-ui/core';
import { LayoutDefault } from '../Layout/Default';
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
import * as masterData from './data/masterdata.json';
import { FxListGroup } from '../Data/FxList';
import * as listData from './Cards/listdata.json';
import { any } from 'prop-types';
import { AddCommentOutlined, Menu } from '@material-ui/icons';
import { FxAutoComplete } from '../Utils/FxAutoComplete';
import { FxDataGrid } from '../Data/FxDataGrid';


let CE = React.createElement;
const FxMenu = lazy(() =>
    import('../Navigation/FxMenu')
);
const FxTab = lazy(() =>
    import('../Navigation/FxTab')
);

function Renderer2() {
    return (
        <Grid>ok</Grid>
    )
}

export function Dynamic() {

    return (
        <React.Suspense fallback="Loading...">
            <Renderer />
        </React.Suspense>
    )
}



function Renderer() {
    //child components
    const [child, setChild] = React.useState<any>();
    const addChild = (childComp: any) => {
        setChild(childComp);
    }

    //menu
    const [menu, setMenu] = React.useState<any>();
    //head text
    const [headText, setHeadText] = React.useState<any>();
    //tab
    const [tab, setTab] = React.useState<any>();
    //buttons
    const [buttonArea, setbuttonArea] = React.useState<any>();
    //grid
    const [grid, setGrid] = React.useState<any>();


    const componentDictionary: any = {
        "layout":
        {
            "default": (<LayoutDefault>
                <Grid item className="fx-menu">
                    {menu}
                </Grid>
                <Grid item xs >
                    {headText}
                    {tab}
                    {buttonArea}
                    {grid}
                </Grid>
            </LayoutDefault>),
            "custom": (<LayoutDefault>
                <Grid item xs >
                    {grid}
                </Grid>
            </LayoutDefault>)
        }
    }

    const addChilds = () => {
        //menu
        setMenu(<FxMenu menuItems={listData.leftmenuitems}></FxMenu>);
        
        //head text
        setHeadText(<Grid container direction="row" item xs={12}>
        <Grid container item xs={4}>
            <Typography variant="h6" >
                Leads
            </Typography>
        </Grid>
        </Grid>)

        //tab
        setTab(<FxTab className="fx-tab" tabItems={listData.tabitems} />)

        //button area
        setbuttonArea(<Grid container direction="row" item xs={12} className="fx-gap">
        <Grid container justify="flex-start" alignItems="center" item xs={6}>
          <FxButton id="btnalldebts" className="fx-button fx-button-white fx-button-preference" startIcon={<PrefIcon />} endIcon={<ActionIcon />}>All Debts</FxButton>
          <FxAutoComplete className="fx-autocomplete padding-left-10"></FxAutoComplete>
        </Grid>
        <Grid container justify="flex-end" alignItems="center" item xs={6} className="btn-actions">
          <FxButton id="btnalldebts"  className="fx-button fx-button-white" startIcon={<FilterIcon />} divider={true} dividerValue={4} >Filters</FxButton>
          <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={<SortIcon />} endIcon={<ActionIcon />}>Sort</FxButton>
          <FxButton id="btnalldebts" className="fx-button fx-button-white" startIcon={<ColumnIcon />} divider={true} dividerValue={4} >Columns</FxButton>
          <FxButton id="btnalldebts" className="fx-button fx-button-white" endIcon={<ActionIcon />}>...</FxButton>
        </Grid>
      </Grid>)

      //gird
      setGrid(<Grid item xs={12}>
        <FxDataGrid></FxDataGrid>
      </Grid>)
    }
    const layout = masterData.page.layout;

    useEffect(() => {
        addChilds();
    }, [])


    return (
        componentDictionary.layout[layout]
        // <Grid>ok</Grid>
    )



}




/*function customRender2() {
    return CE(Grid, { item: true, className: "fx-menu" },
        CE(FxMenu, { menuData: listData.menuData })
    )
}*/
