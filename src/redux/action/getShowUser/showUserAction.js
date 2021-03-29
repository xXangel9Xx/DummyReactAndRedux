import axios from 'axios';
import {   APP_ID  } from '../../../app-id/appId';
import {GET_USER_ERROR,
        GET_USER_REQUEST,
        GET_USER_SUCCES } from './types';

function getRequest(){
    return{
        type:GET_USER_REQUEST
    }
}

const getSucces = (payload) =>{
    return{
        type:GET_USER_SUCCES,
        payload:payload
    }
}
const getError = (error) =>{
    return{
        type:GET_USER_ERROR,
        payload:error
    }
}

const getShowUser = (url) => {
    return(dispatch)=>{
            dispatch(getRequest())
            axios.get(url,{headers:{'app-id':APP_ID}}).then((res)=>{
                const USER = res
                dispatch(getSucces(USER))
            }).catch((error)=>{
                dispatch(getError(error))
            })
    }
}
export default getShowUser