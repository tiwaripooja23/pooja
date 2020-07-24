import React from 'react';
import { Typography } from '@material-ui/core';

interface IArray {
    value?: any;
    count?: any;
    className?: any;
    link?: any;
}
const FxArrayView: React.FC<IArray> = ({ className, count, value, link }) => {
    return (<div>
        {
            count > 1 &&
            <Typography className={className ? className : ''}><a href={link ? link : '#'}>{count} {value}s</a></Typography>

        }
        {
            count == 1 &&
            <Typography className={className ? className : ''}><a href={link ? link : '#'}>{count} {value}</a></Typography>
        }
    </div>
    )
}
export default FxArrayView;