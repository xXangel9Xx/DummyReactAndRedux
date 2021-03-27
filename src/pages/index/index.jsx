import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Letters from '../../components/letters/letters';
import Loading from '../../components/loading/loading';
import Nav from '../../components/nav/nav'
import getUserIndex from '../../redux/action/getUser/getUsersIndexAction'
import './index.scss'
const Index = (props) =>{
    useEffect(()=>{
        props.dispatch(props.getUserIndex('https://dummyapi.io/data/api/user?page=1&limit=20'))
    },[])
    return(
        <div className="container-page-index">
            <Nav />
            <div className="container-index">
                <div className="container-users">
                    <div className="container-scroll">
  
                    </div>
                </div>
            </div>
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
/*

 <div className="container-users">

            </div>
                {props.userIndex.loading == false? props.userIndex.users.map((users,i)=><Letters key={i}/>):<Loading />}
                 */