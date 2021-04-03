import React, { useEffect} from 'react';
import './show.scss';
import Loading from '../../assets/509258_fb107.gif'
import DataPerfil from '../../components/dataPerfil/dataPerfil';
import Pots from '../../components/pots/pots';
import { connect } from 'react-redux';
//REDUX FUNCTIONS ACTION
import getShowUser from '../../redux/action/getShowUser/showUserAction';
import getPosts from '../../redux/action/pots/potsAction';
import getIdUser from '../../redux/action/idUser/idUserAction'

const Show = (props) => {
    function doBeforeGetId(id){
            props.dispatch(props.getIdUser(id))
            props.dispatch(props.getShowUser(`https://dummyapi.io/data/api/user/${id}`))
            props.dispatch(props.getPosts(`https://dummyapi.io/data/api/user/${id}/post`))   
    }
    useEffect(()=>{
        let id 
        if(window.location.href){
            id = window.location.href.split('/').pop()
            doBeforeGetId(id)
        }else{
            id = document.location.href.split('/').pop()
            doBeforeGetId(id)
        }
    },[])
    return (
            <div className="container-page-show">
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
                                            {props.postsUser.pots.map((pots,i)=>
                                            <a href={`/User/${props.idUser}/Comments/${pots.id}`} className="link-comments" key={i}>
                                                <Pots
                                                pots={pots}
                                                />                  
                                            </a>                          
                                            )}
                                        </div>
                                    :
                                        <div className="container-loading">
                                            <img src={Loading} alt=""/>
                                        </div>
                                    }                                
                                </>
                                    :
                                    
                                    <div className="container-loading">
                                            <img src={Loading} alt=""/>
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
        postsUser:state.postsUser,
        idUser:state.idUser
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        dispatch,
        getShowUser,
        getPosts,
        getIdUser
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Show)       