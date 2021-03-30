import React, { useEffect } from 'react';
import './show.scss';
import Nav from '../../components/nav/nav'
import getShowUser from '../../redux/action/getShowUser/showUserAction'
import { connect } from 'react-redux';
import DataPerfil from '../../components/dataPerfil/dataPerfil';
const Show = (props) => {
    useEffect(()=>{
        let id
        window.location.href? id = window.location.href.split('/').pop(): id = document.location.href.split('/').pop()
        props.dispatch(getShowUser(`https://dummyapi.io/data/api/user/${id}`))
    },[])
    return (
            <div className="container-page-show">
                <Nav />
                <div className="container-show-data">
                    <div className="container-user-data">
                        <div className="container-scroll">
                                {props.userShow.loading == false?
                                    <DataPerfil 
                                        user={props.userShow.user}
                                    />:
                                    <div className="container-loading">

                                    </div>
                                }
                        </div>
                    </div>                    
                </div>

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