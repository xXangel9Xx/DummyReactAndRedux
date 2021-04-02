import {INCREMENT_PAGINATION,
        DECREMENT_PAGINATION} from '../action/pagination/type';
const STATEDEFAULT = {
    positionOne:1,
    positionTwo:2,
    positionThree:3
}
const reducer = (state=STATEDEFAULT,{type,payload}) => {
    let position = state
    switch (type) {
        case INCREMENT_PAGINATION:
                if(position.positionThree<900){
                    return {
                        positionOne:position.positionOne+=1,
                        positionTwo:position.positionTwo+=1,
                        positionThree:position.positionThree+=1
                       }
                }else{return position}
        case DECREMENT_PAGINATION:   
                if(position.positionOne>1){
                    return {
                        positionOne:position.positionOne-=1,
                        positionTwo:position.positionTwo-=1,
                        positionThree:position.positionThree-=1
                       }
                }else{return position}
        default: return state
    }
}
export default reducer