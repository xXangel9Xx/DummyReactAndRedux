import {GET_POST_REQUEST,
        GET_POST_SUCCES,
        GET_POST_ERROR  } from '../action/pots/type';
const STATEDEFAULT = {
    loading:true,
    pots:[],
    error:''
}
const reducer = (state=STATEDEFAULT,{type,payload}) =>{
    switch (type) {
        case GET_POST_REQUEST:
            return{
                ...state
            }
        case GET_POST_SUCCES:
            return{
                loading:false,
                pots:payload.data.data,
                error:''
            }
        case GET_POST_ERROR:    
            return{
                loading:false,
                pots:[],
                error:payload
            }
        default:return state
    }
}
export default reducer