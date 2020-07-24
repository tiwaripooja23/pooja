import * as React from "react";
import { FxLogo } from "./FxLogo";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { closestIndexTo } from "date-fns/fp";
import { returnStatement } from "@babel/types";
import { useSelector } from "react-redux";

interface MenuProps {
  id: string;
  menuItems?: { url?: string; title?: string; children?: any }[];
  className?: string;
}

const FxMenu: React.FC<MenuProps> = props => {
  const state = useSelector((state: any) => {
    if (props.id && state.context[props.id]) {
      console.log(state);
      return state.context[props.id];
    } else {
      return { config: { params: {} } };
    }
  });
  props = { ...props, ...state.config.params };
  const [open, setOpen] = React.useState<any>();
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuitem: any
  ) => {
    setOpen({ menuitem: !open[menuitem] });
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    console.log("index::", index);
  };
  let count = -1; //for the menu index

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {props.menuItems &&
        props.menuItems.map(menu => {
          return (
            <div>
              <ListItem
                button
                onClick={event => handleClick(event, menu.title)}
              >
                <ListItemText primary={menu.title} />
              </ListItem>
              {menu.children && (
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    className="lsMenuCollapse"
                  >
                    {menu.children &&
                      menu.children.map((submenu: any) => {
                        count++;
                        let index = count;
                        return (
                          <ListItem
                            button
                            selected={selectedIndex === index}
                            onClick={event => handleListItemClick(event, index)}
                          >
                            <ListItemText primary={submenu.title} />
                          </ListItem>
                        );
                      })}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      {/*} <ListItem button>
                <ListItemText primary="Work" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Record" />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className="lsMenuCollapse">
                    <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary="Leads" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary="Clients" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Creditors" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button >
                <ListItemText primary="Integrations" />
            </ListItem>*/}
    </List>
  );
};
export default FxMenu;
