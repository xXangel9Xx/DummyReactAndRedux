import {INCREMENT_PAGINATION,
        DECREMENT_PAGINATION} from './type'

export const setPaginationIncrement = () =>{
    return {
        type:INCREMENT_PAGINATION,
    }
}

export const setPaginationDecrement = () => {
    return {
        type:DECREMENT_PAGINATION,
    }
}