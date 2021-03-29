import { APP_ID } from '../../../app-id/appId'
import {  
    GET_USERINDEX_REQUEST,
    GET_USERSINDEX_SUCCES,
    GET_USERSINDEX_ERROR  
 } from './types';
import axios from 'axios';


const fetchUsersIndex = () =>{
    return{
        type:GET_USERINDEX_REQUEST
    }
}

const fetchSucces = (payload) => {
    return{
        type:GET_USERSINDEX_SUCCES,
        payload:payload
    }
}

const fetchError = (error) => {
    return {
        type:GET_USERSINDEX_ERROR,
        payload:error
    }
}
function getIndex(url){
    return(dispatch)=>{
        dispatch(fetchUsersIndex())
        axios.get(url,{headers:{'app-id': APP_ID}}).then((res)=>{
            const USERS = res
            dispatch(fetchSucces(USERS))
        }).catch((error)=>{
            dispatch(fetchError(error))
        })        
    }
}
export default getIndex