import { 
    GET_USERINDEX_REQUEST,
    GET_USERSINDEX_SUCCES,
    GET_USERSINDEX_ERROR
} from '../action/getUsers/types';
const defaultState = {
    users:[],
    loading:true,
    error:""
};
const reducer = (state=defaultState,{type,payload}) => {
    switch (type) {
        case GET_USERINDEX_REQUEST:
            return{
                ...state,
            }
        case GET_USERSINDEX_SUCCES:
            return{
                ...state,
                loading: false,
                users:payload.data.data
            }
        case GET_USERSINDEX_ERROR:
            return{
                ...state,
                error:payload
            }
            
        default: return state

    }
}
export default reducer