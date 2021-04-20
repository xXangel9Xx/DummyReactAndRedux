import {GET_COMMENTS_REQUEST,
        GET_COMMENTS_SUCCES,
        GET_COMMENTS_ERROR} from './type';
import axios from 'axios';
import { APP_ID } from '../../../app-id/appId';


const getCommentsRequest = () => {
    return {
        type:GET_COMMENTS_REQUEST
    }
}
const getCommentsSucces = (payload) => {
    return{
        type:GET_COMMENTS_SUCCES,
        payload:payload
    }
}
const getCommentsError = (error) => {
    return {
        type:GET_COMMENTS_ERROR,
        payload:error
    }
}

const getComments = (url) => {
    return(dispatch) =>{
        dispatch(getCommentsRequest())
        axios.get(url,{headers:{'app-id':APP_ID}}).then((res)=>{
            const COMMENTS = res
            dispatch(getCommentsSucces(COMMENTS))
        }).catch((error)=>{
            dispatch(getCommentsError(error))
        })
    }
}
export default getComments