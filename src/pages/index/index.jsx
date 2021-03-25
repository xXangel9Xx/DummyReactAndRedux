import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getUserIndex from '../../redux/action/getUser/getUsersIndexAction'
import './index.scss'
const Index = (props) =>{
    useEffect(()=>{
        props.dispatch(props.getUserIndex('https://dog.ceo/api/breed/germanshepherd/images/random/30'))
    },[])
    return(
        <div className="container-page-index">
            <p>hola desde index</p>
        </div>
    )
}
const MapStateToProps = (state) => {
    return{
        userIndex: state.userIndex
    }
}
const MapDispatchToProps = (dispatch)=>{
    return{
        getUserIndex,
        dispatch
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Index)