import React,{useEffect} from 'react';
import './commentsPots.scss';

import getComments from '../../redux/action/comments/commentsAction';
import { connect } from 'react-redux';
import Comments from '../../components/comments/comments';
const CommentsPots = (props) => {

    useEffect(()=>{
        let id 
        if(window.location.href){
            id = window.location.href.split('/').pop()
            props.dispatch(props.getComments(`https://dummyapi.io/data/api/post/${id}/comment`))
        }else{
            id=document.location.href.split('/').pop()
            props.dispatch(props.getComments(`https://dummyapi.io/data/api/post/${id}/comment`))
        }
        
    },[])
    return(
        <div className="container-page-comments">
                <div className="container-index-comments">
                  <div className="container-pots-comments">
                      <div className="container-scroll">
                            {props.commentsUser.loading == false && 
                                <div className="container-comments">
                                    {props.commentsUser.comments[0]?
                                    props.commentsUser.comments.map((res,i)=>
                                        <Comments comments={res} key={i}/>
                                    ):
                                    <div className="comments-null">
                                        <p className="text-comments-null">No tiene comentarios</p>
                                    </div>
                                    }
                                </div>
                            }
                      </div>
                  </div>
              </div>
        </div>
    )
}
const MapStateToProps = (state) => {
    return{
        idUser:state.idUser,
        commentsUser:state.commentsUser
    }
}
const MapDispatchToProps = (dispatch) => {
    return{
        dispatch,
        getComments
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(CommentsPots)
