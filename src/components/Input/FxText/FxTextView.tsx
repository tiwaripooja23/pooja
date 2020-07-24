import React from 'react';
import { Typography } from '@material-ui/core';


interface ITextView {
    value?: any;
    className?: any;
}
const FxTextView: React.FC<ITextView> = ({ value, className }) => {
    return (
        <Typography className={className?className:''}>{value}</Typography>
    )
}
export default FxTextView;