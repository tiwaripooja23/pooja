import React from 'react';
import NumberFormat from 'react-number-format';
import NumberFormatProps  from 'react-number-format';

interface IFxSSNEdit extends NumberFormatProps {
    value?: string,
    format?: string,
    onChangeSSN: any,
    className?: string,
}

const FxSSNEdit: React.FC<IFxSSNEdit> = (props) => (
            <div className={props.className}> 
                <NumberFormat 
                    value={props.value} 
                    onValueChange={props.onChangeSSN} 
                    format={props.format} 
                />
            </div >  
        )

export default FxSSNEdit;   