import React from 'react';
import { connect } from 'react-redux';
import './arrowRight.scss';
import {setPaginationIncrement} from '../../../redux/action/pagination/paginationAction'
import getIndex from '../../../redux/action/getUsers/getUsersIndexAction'
const ArrowRight = (props) => {
 async   function shangeColorIndexPagination(classNameLi,idNameLi){
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
       
        await setTimeout(() => {
            props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${parseInt(divsLi[index].textContent)}&limit=10`))
        }, 100);
     //   props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${parseInt(divsLi[index].textContent)}}&limit=10`))     
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
        getIndex,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(ArrowRight)