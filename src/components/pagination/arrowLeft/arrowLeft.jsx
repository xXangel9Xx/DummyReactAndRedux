import React from 'react';
import './arrowLeft.scss';
import {setPaginationDecrement} from '../../../redux/action/pagination/paginationAction'; 
import getIndex from '../../../redux/action/getUsers/getUsersIndexAction';
import { connect } from 'react-redux';
const ArrowLeft = (props) => {
  async  function shangeColorIndexPagination(classNameLi,idNameLi){
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
        await setTimeout(() => {
            props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${parseInt(divsLi[index].textContent)}&limit=10`))
        }, 100);
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
        getIndex,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(ArrowLeft)