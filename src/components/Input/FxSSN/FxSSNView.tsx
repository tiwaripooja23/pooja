import React from 'react';
import { Typography } from '@material-ui/core';


interface ISSNView {
    value?: any;
    charecter?: any;
    className?: any;
}
const FxSSNView: React.FC<ISSNView> = ({ value, charecter, className }) => {
    let lastNumber = value.substr(-4);
    return (<>
        {
            charecter &&
            <Typography className={className?className:''}>{charecter}{charecter}{charecter}-{charecter}{charecter}-{lastNumber}</Typography>
        }
        {
            !charecter &&
            <Typography className={className?className:''}>***-**-{lastNumber}</Typography>
        }
    </ >
    )
}
export default FxSSNView;