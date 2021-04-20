import {    SHOW_MENU, SHOW_MENU_FALSE   }
 from '../action/menu/types';
const STATEDEFAULT = false;

const reducer = (state=STATEDEFAULT,{type,payload}) => {
    switch (type) {
        case SHOW_MENU:
            return payload
        default: 
            return state
    }
}

export default reducer