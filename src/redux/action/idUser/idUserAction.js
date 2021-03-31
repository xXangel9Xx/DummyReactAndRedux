import {GET_ID_USER} from './type';
const getIdUser = (payload) =>{
    return {
        type:GET_ID_USER,
        payload:payload
    }
}
export default getIdUser