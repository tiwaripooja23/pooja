import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import { FxCard, FxCardHeader, FxCardBody, FxCardFooter } from '../Container/FxCard';
import { Grid, Chip, Avatar } from '@material-ui/core';
import { FxButton } from '../Action/FxButton';



interface FxListData {
  id: string;
  headerText?: string;
  subText?: string;
  tags?: object[],
  className?: string;
  image?: string;
  badgeName?: string;
  leftBorder ? :boolean;
}
declare interface IFxList {
  id: string;
  data: FxListData[];
  itemClass ? : string;
}


export const FxList: React.FC<IFxList> = ({ id, data,itemClass }) => (
  <List className="fx-list">
    {data.map((item: FxListData) => {
      return (
        <ListItem key={`item-${item.id}`} className={itemClass ? itemClass : "fx-list-item"} >
          <Grid container direction="row" item xs={12}>
            <table>
              <tr>
                <td>
                  {item.leftBorder &&
                    item.leftBorder
                  }

                  {item.image &&
                    <img src={item.image}></img>
                  }
                </td>
                <td>
                  {item.headerText &&
                    <ListItemText className="ticket-header ticket-header-text" primary={`${item.headerText}`} />
                  }
                  {item.subText &&
                    <ListSubheader className="ticket-subText">
                      {`${item.subText}`}
                    </ListSubheader>
                  }
                  {item.tags &&
                      item.tags.map((tag: any) => (
                        <Chip size="small" label={tag.name} />
                      ))
                  }
                </td>
                <td> <Avatar>{item.badgeName}</Avatar></td>
              </tr>
            </table>
          </Grid>
        </ListItem>
      )
    })
    }
  </List>
);

declare interface IFxListData {
  id: string;
  data: any;
  itemClass ?: string;
}

export const FxListGroup: React.FC<IFxListData> = (props) => {
  const data = props.data;
  return (
    <FxCard className="fx-card-right" >
      <FxCardHeader >
        <Grid container direction="row" item xs={12} >
          {data[0].cardTitle &&
            <Grid container justify="flex-start" item xs={6}> <h3>{data[0].cardTitle}</h3></Grid>
          }
          {data[0].actionButton &&
            <Grid container justify="flex-end" item xs={6}><FxButton id ="action1" className="fx-button fx-button-grey" >{data[0].actionButton}</FxButton></Grid>
          }
        </Grid>
      </FxCardHeader>
      <FxCardBody>
        <FxList id="id" data={data} itemClass ={props.itemClass ? props.itemClass:""}></FxList>
      </FxCardBody>
      {data[0].bottomLink &&
        <FxCardFooter>
          <Grid container direction="row" item xs={12} justify="center" >
            <Link > {data[0].bottomLink} </Link>
          </Grid>
        </FxCardFooter>
      }
    </FxCard>
  )
}