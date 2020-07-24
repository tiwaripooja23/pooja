import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FxPopOver } from '../../Utils/FxPopOver';

interface IPhoneView {
    text?: any;
    label?: any;
}
const FxPhoneView: React.FC<IPhoneView> = ({ text, label }) => {
    let info ={ isEditable: false, label: "Home Phone", type: "phone", value: "(123)555-1293", id: "id0-1", name: "home_phone", placeholderText: "Home Phone", className: "" };
    return (<ul className="fx-info-list">
    <li>
        <Grid container>
            <Grid item xs={5} className="fx-info-grid-column" >
                <Typography className="fx-info-label">{label}</Typography>
                    </Grid>
                    <Grid item xs={7} className="fx-info-grid-column">
                        <Typography className="fx-info-content">({text.substr(0, 3)}) {text.substr(3, 3)}-{text.substr(6, 4)}</Typography>
                    </Grid>
                </Grid>
            </li>
        </ul>
    );
}
export default FxPhoneView;