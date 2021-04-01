import {INCREMENT_PAGINATION,
        DECREMENT_PAGINATION} from './type'

export const setPaginationIncrement = (payload) =>{
    return {
        type:INCREMENT_PAGINATION,
        payload:payload
    }
}

export const setPaginationDecrement = (payload) => {
    return {
        type:DECREMENT_PAGINATION,
        payload:payload
    }
}