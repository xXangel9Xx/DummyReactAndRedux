import React from 'react';
import { connect } from 'react-redux';
import './arrowRight.scss';
import {setPaginationIncrement} from '../../../redux/action/pagination/paginationAction'

const ArrowRight = (props) => {
    function shangeColorIndexPagination(classNameLi,idNameLi){
        let divsLi = document.getElementsByClassName(classNameLi)
        let idLi = document.getElementById(idNameLi)
        let index = idLi.value
        if(index==2){
            props.dispatch(props.setPaginationIncrement())
        }        
        if(index<2){
            index+=1
            idLi.removeAttribute("id")
            divsLi[index].setAttribute("id",idNameLi)
        }
        //parseInt(divsLi[index].textContent)

        
    }
    return( 
        <div className="container-arrow-right" onClick={(e)=>{shangeColorIndexPagination(props.classNameLiIndex,props.idNameLiIndex)}}>
            <i className="fas fa-angle-double-right"></i>
        </div> 
    )
}

const MapStateToProps = (state)=>{
    return {
        pagination:state.pagination
    }   
}
const MapDispatchToProps = (dispatch) => {
    return {
        setPaginationIncrement,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(ArrowRight)