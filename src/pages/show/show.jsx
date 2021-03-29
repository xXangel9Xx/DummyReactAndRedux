import React, { useEffect } from 'react';
import './show.scss';
import Nav from '../../components/nav/nav'
import getShowUser from '../../redux/action/getShowUser/showUserAction'
import { connect } from 'react-redux';
const Show = (props) => {
    useEffect(()=>{
        let id
        window.location.href? id = window.location.href.split('/').pop(): id = document.location.href.split('/').pop()
        props.dispatch(getShowUser(`https://dummyapi.io/data/api/user/${id}`))
    },[])
    return (
            <div className="container-page-show">
                <Nav />
            </div>
        )
}
const MapStateToProps = (state)=>{
    return{
        userShow:state.userShow
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        dispatch,
        getShowUser
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Show)