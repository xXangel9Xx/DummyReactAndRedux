import axios from 'axios'
import { APP_ID } from '../../../app-id/appId'
import {GET_POST_REQUEST,
        GET_POST_SUCCES,
        GET_POST_ERROR,
        SEARCH_POST,
        LIKE} from './type'

const postRequest = () => {
    return{
        type:GET_POST_REQUEST
    }
}
const postSucces = (payload) => {
    return{
        type:GET_POST_SUCCES,
        payload:payload
    }
}
const postError = (payload) =>{
    return{
        type:GET_POST_ERROR,
        payload:payload
    }
}
export const getPosts = (url) => {
        return(dispatch)=>{
            dispatch(postRequest())
            axios.get(url,{headers:{'app-id':APP_ID}}).then((res)=>{
                const POSTS = res
                dispatch(postSucces(POSTS))
            }).catch((error)=>{
                dispatch(postError(error))
            })
        }
}


export const likes = (id) => {
    return{
        type:LIKE,
        payload:id
    }
}
