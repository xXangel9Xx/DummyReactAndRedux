import React from 'react';
import { connect } from 'react-redux';
import './index.scss'
const Index = () =>{
    return(
        <div className="container-page-index">
            <p>hola desde index</p>
        </div>
    )
}
const MapStateToProps = (state) => {
    return{
        
    }
}
const MapDispatchToProps = {

}

export default connect(MapStateToProps,MapDispatchToProps)(Index)