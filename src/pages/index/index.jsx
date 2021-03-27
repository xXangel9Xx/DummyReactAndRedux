import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getUserIndex from '../../redux/action/getUser/getUsersIndexAction'
import './index.scss'
const Index = (props) =>{
    useEffect(()=>{
        props.dispatch(props.getUserIndex('https://dummyapi.io/data/api/user?page=1&limit=20'))
    },[])
    return(
        <div className="container-page-index">
            
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
