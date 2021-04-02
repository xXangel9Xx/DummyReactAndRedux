import React from 'react';
import './arrowRight.scss'
const ArrowRight = (props) => {
    function shangeColorIndexPagination(classNameLi,idNameLi){
        let divsLi = document.getElementsByClassName(classNameLi)
        let idLi = document.getElementById(idNameLi)
        let index = idLi.value
        if(index<2){
            index+=1
            idLi.removeAttribute("id")
            divsLi[index].setAttribute("id",idNameLi)
        }
    }
    return( 
        <div className="container-arrow-right" onClick={(e)=>{shangeColorIndexPagination(props.classNameLiIndex,props.idNameLiIndex)}}>
            <i className="fas fa-angle-double-right"></i>
        </div> 
    )
}
export default ArrowRight