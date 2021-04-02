import React from 'react';
import './arrowLeft.scss';
const ArrowLeft = (props) => {
    function shangeColorIndexPagination(classNameLi,idNameLi){
        let divsLi = document.getElementsByClassName(classNameLi)
        let idLi = document.getElementById(idNameLi)
        let index = idLi.value
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
export default ArrowLeft