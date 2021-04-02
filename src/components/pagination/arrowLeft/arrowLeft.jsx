import React from 'react';
import './arrowLeft.scss';
import {setPaginationDecrement} from '../../../redux/action/pagination/paginationAction'
import { connect } from 'react-redux';
const ArrowLeft = (props) => {
    function shangeColorIndexPagination(classNameLi,idNameLi){
        let divsLi = document.getElementsByClassName(classNameLi)
        let idLi = document.getElementById(idNameLi)
        let index = idLi.value
        if(index==0){
            props.dispatch(props.setPaginationDecrement())
        }        

        if(index>0){
            index-=1
            idLi.removeAttribute("id")
            divsLi[index].setAttribute("id",idNameLi)
        }
    }
    return(
        <div className="container-arrow-left" onClick={(e)=>{shangeColorIndexPagination(props.classNameLiIndex,props.idNameLiIndex)}}>
            <i className="fas fa-angle-double-left"></i>
        </div>
    )
}
const MapStateToProps = (state) => {
    return {

    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        setPaginationDecrement,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(ArrowLeft)