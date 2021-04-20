import {GET_POST_REQUEST,
        GET_POST_SUCCES,
        GET_POST_ERROR,
        LIKE
    } from '../action/pots/type';
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
        case LIKE:
            let pots = state
            pots.pots[payload]={
                ...pots.pots[payload],
                likes: pots.pots[payload].likes+=1
            }
            
            return{
                ...pots
            }
       
        default:return state
    }
}
export default reducer