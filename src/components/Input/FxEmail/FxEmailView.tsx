import React from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import clsx from "clsx";
import { FxPopOver } from "../../Utils/FxPopOver";


declare interface IFxEmailView extends TypographyProps {
    id: string;
    value: string;
    to: string[] | undefined;
}
export const FxEmailView: React.FC<IFxEmailView> =
    (props) => {
        return (
                <Typography className={props.className}>
                    {props.value}
                    {props.to &&
                        <FxEmailPopOver id={props.id} data={props.to} className="fx-popover-card"/>
                    }
                </Typography>
        )
    };
declare interface IFxEmailPopOver {
    id?: string;
    data?: string[];
    className?:string;
}
const FxEmailPopOver: React.FC<IFxEmailPopOver> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'fx-popover' + props.id : undefined;
    return (
        <>
            <div className="fx-icon-grey" onClick={handleClick}>
                <div className="fx-icon caret-icon" />
            </div>
            <FxPopOver
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    className: props.className          
                }}
            >
                <ul className="fx-popover-list">
                    {props.data && props.data.map((item: string, index: number) => {
                        return (
                            <li key={index}>
                                Send Mail via {item}
                            </li>
                        )
                    })
                    }
                </ul>
            </FxPopOver>
        </>
    );
}