import React, { useEffect } from 'react';
import './show.scss';
import Nav from '../../components/nav/nav'
import getShowUser from '../../redux/action/getShowUser/showUserAction'
import { connect } from 'react-redux';
import DataPerfil from '../../components/dataPerfil/dataPerfil';
import getPosts from '../../redux/action/pots/potsAction'
import Pots from '../../components/pots/pots';
const Show = (props) => {
    useEffect(()=>{
        let id
        window.location.href? id = window.location.href.split('/').pop(): id = document.location.href.split('/').pop()
        props.dispatch(getShowUser(`https://dummyapi.io/data/api/user/${id}`))
        props.dispatch(getPosts(`https://dummyapi.io/data/api/user/${id}/post`))
    },[])
    return (
            <div className="container-page-show">
                <Nav />
                <div className="container-show-data">
                    <div className="container-user-data">
                        <div className="container-scroll scroll-show">
                                {props.userShow.loading == false?
                                <>
                                    <DataPerfil 
                                        user={props.userShow.user}

                                    />
                                    
                                    {props.postsUser.loading==false?
                                        <div className="container-pots">  
                                            {props.postsUser.pots.map((pots)=>
                                                <Pots
                                                pots={pots}
                                                />                                        
                                            )
                                       
                                            }
                                        </div>
                                    :
                                    
                                    <div className="container-loading">

                                    </div>
                                    }
                                    
                                </>
                                    :
                                    
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
        userShow:state.userShow,
        postsUser:state.postsUser
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        dispatch,
        getShowUser,
        getPosts,
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Show)        /*
*/