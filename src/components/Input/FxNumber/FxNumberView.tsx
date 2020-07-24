import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

interface INumberView extends NumberFormatProps {
    value?: any;
    thousandSeparator?: boolean;
    thousandsGroupStyle?: "thousand" | "lakh" | "wan" | undefined;
    className?: any;
}
const FxNumberView: React.FC<INumberView> = ({ value, thousandSeparator, thousandsGroupStyle, className }) => {
    return (
        <NumberFormat className={className?className:''} value={value} displayType={'text'}
            thousandSeparator={thousandSeparator ? thousandSeparator : false}
            thousandsGroupStyle={thousandsGroupStyle ? thousandsGroupStyle : "thousand"} />
    )
}
export default FxNumberView;