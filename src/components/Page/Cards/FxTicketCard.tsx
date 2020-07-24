// Import dependencies
import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

// import './style.scss';


interface ListData {
    id: string;
    headerText?: string;
    subText?: string;
    tags?: object[],
    className?: string;
    image?: string;
    badgeName?:string,
}
declare interface IAirbasetList {
    id?: string;
    data?: ListData[]
}

export const FxTicketCard: React.FC<IAirbasetList> = ({ id, data }) => (
    <ul className="ticket-list">
        <div className="title-section">
        <h3 className="title">
            Tickets
        </h3>
        <button className = "add-button">
            + Add
        </button>
        </div>
        {data ?.map((item: ListData) => {
            return (
                <li key={`section-${item.id}`} className="ticket-list-component">
                <div className="avatar-section">
                            {item.image &&
                                <div className={item.image}></div>
                            }
                            </div>
                    <div className = "ticket-content">
                        <div className="airbase-ticket-list-header">
                            <div className="ticket-header">
                            {item.headerText &&
                                <Typography className="ticket-header-text"> {item.headerText} </Typography>
                            }
                            </div>
                        </div>
                        <div className="airbase-ticket-list-subtext">
                        {item.subText &&
                            <Typography className="ticket-subText"> {item.subText} </Typography>
                        }
                        </div>
                            <div className="tag-row">
                                {item.tags &&
                                    <ul>
                                        {item.tags.map((tag: any) => (
                                            <li className="ticket-tag">{tag.name}
                                            </li>

                                        ))}
                                    </ul>
                                }
                            </div>
                        
                    </div>
                    {item.badgeName &&
                    <div className="ticket-badge">
                        <p>ND</p>
                    </div>
                    }
                </li>
            )

        })}
        <div className="bottom-link">
            <Link className="link-text"> View All</Link>
        </div>
    </ul>
)

