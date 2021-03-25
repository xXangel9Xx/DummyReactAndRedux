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
        axios.get(url).then((res)=>{
            const users = res.data
            dispatch(fetchSucces(users))
        }).catch((error)=>{
            dispatch(fetchError(error))
        })        
    }
}
export default getIndex