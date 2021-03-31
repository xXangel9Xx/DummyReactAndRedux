import {GET_COMMENTS_REQUEST,
        GET_COMMENTS_SUCCES,
        GET_COMMENTS_ERROR} from '../action/comments/type';
const STATEDEFAULT = {
    loading:true,
    comments:[],
    error:''
}
const reducer = (state= STATEDEFAULT, {type,payload}) =>{
    switch (type) {
        case GET_COMMENTS_REQUEST:
            return{
                ...state
            }
        case GET_COMMENTS_SUCCES:
            return{
                loading:false,
                comments:payload.data.data,
                error:''
            }
        case GET_COMMENTS_ERROR:
            return{
                loading:false,
                comments:[],
                error:''
            }
        default:return state
    }
}
export default reducer