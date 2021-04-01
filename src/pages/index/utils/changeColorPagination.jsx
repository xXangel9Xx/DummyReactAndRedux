import React from 'react';

export default function changeColorPagination(className,elementID,index){

    if(document.getElementsByClassName(className)[index].getAttribute("id")){
        
    }else{
        document.getElementById(elementID).removeAttribute("id")
        document.getElementsByClassName(className)[index].setAttribute("id",elementID)
    }
    
    
}