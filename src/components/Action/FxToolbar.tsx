/* eslint-disable no-use-before-define */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FxFxAbstractComponentProps } from '../FxAbstractComponent';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../libs/reducer/rootReducer';
import { Label } from '@material-ui/icons';
import { getComponent } from '../../libs/dictionary';
import { dateTimePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

declare interface FxToolbarProps extends FxFxAbstractComponentProps {
}

const FxToolbar: React.FC<FxToolbarProps> =
    (props) => {
        const state = useSelector((state: AppState) => {
            console.log("state", state);
            return state;
        });

        const dispatch = useDispatch();
        dispatch({ type: "CREATE_COMPONENT_SAGA", payload: { children: getChilds(props), id: props.id } });
        return (
            <div className="" id={props.id}>
                <AppBar position="static">
                    <Toolbar >
                        {state.context.component[props.id]}
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
export default FxToolbar;
function getChilds(props: any) {
    if (props.children) {
        return props.children
    }
    if (props.components) {
        return (props.components.map((item: any) => {
            const Comp = getComponent(item.id)
            return Comp ? (<Comp { ...item}></Comp>) : null
        }))
    }
}


