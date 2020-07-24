import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/user.svg';
import { ReactComponent as ShareIcon } from '../../assets/svg/share.svg';
import { ReactComponent as OptionIcon } from '../../assets/svg/option.svg';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { ReactComponent as ActionIcon } from '../../assets/svg/action.svg';
import { Dictionary } from '.';
import React from 'react';



export const iconDictionary:Dictionary = {
    profile: ProfileIcon,
    user: UserIcon,
    share: ShareIcon,
    options: OptionIcon,
    add: AddIcon,
    edit: EditIcon,
    action: ActionIcon
}

/*get the icon
    icon gettiong based on string value. 
    if the prametyer is object itself then just return that
    the second optiopn is helpfull in natively generating controls
*/

export function getIcon(icon:any){ 
    if (typeof icon == "string"){
        let Comp = iconDictionary[icon.toString()]
        return (<Comp/>)
    }else{
        return icon
    }
}