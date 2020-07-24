import React from 'react';
import NumberFormat from 'react-number-format';
import NumberFormatProps from 'react-number-format';

declare interface IFxPhoneEdit  extends NumberFormatProps {
    value?: string,
    format?: string,
    onChangePhoneNumber: any,
    className?: string
}
const FxPhoneEdit: React.FC<IFxPhoneEdit> = (props) => (
    <div className={props.className}>
        <NumberFormat value={props.value} onValueChange={props.onChangePhoneNumber} format={props.format}  />
    </div>
);


export default FxPhoneEdit;