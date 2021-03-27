import {    SHOW_MENU, SHOW_MENU_FALSE   }
 from '../action/menu/types';
const defaultState = false;

const reducer = (state=defaultState,{type,payload}) => {
    switch (type) {
        case SHOW_MENU:
            return payload
        default: 
            return state
    }
}

export default reducer