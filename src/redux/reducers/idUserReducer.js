import {GET_ID_USER} from '../action/idUser/type'
const STATEDEFAULT = null
const reducer = (state=STATEDEFAULT, {type,payload}) => {
    switch (type) {
        case GET_ID_USER:
            return payload
        default:return state
    }
}
export default reducer