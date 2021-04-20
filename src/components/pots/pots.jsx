import React from 'react';
import './pots.scss';
import moment from 'moment';
import {likes} from '../../redux/action/pots/potsAction'
import { connect } from 'react-redux';
const Pots = (props) => {
    function dataLike(id){
        let like = document.getElementsByClassName('likes')[id]
        like.style.color = "blue"
    }

    return(
        <div className="pots">
            <a href={`/User/${props.idUser}/Comments/${props.pots.id}`} className="link-comments">
            <div className="container-image-pots">
                <img src={props.pots.image} alt="" className="image-pots"/>                
            </div>
            </a>

            <div className="data-pots">
                <p className="data-pots text-data">date:{moment(props.pots.publishDate,'DD-MM-YYYY').format('L')}</p>
                <br/>
                <p className="data-pots text-data">Description:{props.pots.text}</p>
                <p className="data-pots likes" value={props.id}
                    onClick={(e)=>{props.dispatch(props.likes(props.id))
                    dataLike(props.id)
            }}>likes: {props.pots.likes}</p>
            </div>
        </div>
    )
}
const MapStateToProps = (state)=>{
    return{
        idUser:state.idUser
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        likes,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Pots)