import * as React from "react";
import { withStyles } from "@material-ui/styles";
import {  Menu, MenuItem, Button, ListItemIcon, ListItemText, MenuProps } from "@material-ui/core";
import { FxButton } from '../Action/FxButton';
import { ReactComponent as ActionIcon } from '../../assets/svg/action.svg';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';


interface LogoProps extends React.Props<any> {
    menuItems?:{url:string,title:string}[];
}
export const FxLogo: React.FC<LogoProps> =
    ({  menuItems }) =>{

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <FxButton id="fxlogobutton" className ="fx-button fx-button-white fx-menu-logo" startIcon ={<LogoIcon/>} endIcon ={<ActionIcon/>}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >&nbsp;</FxButton>
            <Menu
                className = "fx-menu-items"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems && menuItems.map((menu:any) => 
                            <MenuItem >
                                <ListItemText  primary={menu.title} />
                            </MenuItem>
                )}
            </Menu>
        </div>
    );
}

