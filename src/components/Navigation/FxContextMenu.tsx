/*
*@sarath
Fx context menu component 
The menu will listen events from a source 
*/
import Emitter from '../../libs/eventemiter';
import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

interface ContextMenuProps{
    menuItems?: { url?: string, title?: string, children?: any }[];
    className?: string;
    id ?: string;
    contextId ?: string; // id of source control

  }
export const FxContextMenu: React.FC<ContextMenuProps> = ({ menuItems, className,id ,contextId}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    Emitter.on(contextId+'OPEN_CONTEXT', (newValue: any) => {
        setAnchorEl(newValue);
    })
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Menu
            className={className ? className : "fx-menu-items"}
            id={id}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            {menuItems && menuItems.map((menu) => {
                return (
                    <MenuItem onClick={handleClose}>{menu.title}</MenuItem>
                )
            })}
        </Menu>
    )
}