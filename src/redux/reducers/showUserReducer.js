import {GET_USER_SUCCES,
        GET_USER_REQUEST,
        GET_USER_ERROR} from '../action/getShowUser/types';
const STATEDEFAULT = {
    loading:true,
    user:{},
    error:''
};
const reducer = (state=STATEDEFAULT,{type,payload})=>{
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
            }
        case GET_USER_SUCCES:
            return{
                loading:false,
                user:payload.data,
                error:'',
            }
        case GET_USER_ERROR:
            return{
                loading:false,
                user:{},
                error:payload,
            }
        default: return state
    }
}
export default reducer