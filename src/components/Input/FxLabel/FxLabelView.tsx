import React from 'react';
import { Grid, Typography } from '@material-ui/core';


interface ILabelView {
    value?: any;
    className?: any;
}
const FxLabel: React.FC<ILabelView> = ({ value, className }) => {
    return (
        <Typography className={className?className:''}>{value}</Typography>
    )
}
export default FxLabel;