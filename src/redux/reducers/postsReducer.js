import {GET_POST_REQUEST,
        GET_POST_SUCCES,
        GET_POST_ERROR  } from '../action/pots/type';
const stateDefault = {
    loading:true,
    posts:[],
    error:''
}
const reducer = (state=stateDefault,{type,payload}) =>{
    switch (type) {
        case GET_POST_REQUEST:
            return{
                ...state
            }
        case GET_POST_SUCCES:
            return{
                loading:false,
                posts:payload,
                error:''
            }
        case GET_POST_ERROR:    
            return{
                loading:false,
                posts:[],
                error:payload
            }
        default:return state
    }
}
export default reducer