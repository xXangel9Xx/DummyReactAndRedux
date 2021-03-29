import React, { useEffect } from 'react';
import './show.scss';
import Nav from '../../components/nav/nav'
const Show = (props) => {
    useEffect(()=>{
        let id = window.location.href? window.location.href.split('/').pop():document.location.href.split('/').pop()

        console.log(id)
    },[])
    return (
            <div className="container-page-show">
                <Nav />
            </div>
        )
}
export default Show