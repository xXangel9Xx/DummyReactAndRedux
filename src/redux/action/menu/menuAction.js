import {
    SHOW_MENU, 
    SHOW_MENU_FALSE,
} from './types';

export function showMenuTrue(boolean){
    return{
        type:SHOW_MENU,
        payload:boolean
    }
}

/*
export function showMenuFalse(payload){
    return{
        type:SHOW_MENU_FALSE,
        payload:payload
    }
}*/