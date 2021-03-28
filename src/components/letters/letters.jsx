import React from 'react';
import './letters.scss'
const Letters = (props) =>{
    return (
        <div className="letters">
            <div className="container-full-name">
                    <img src={props.user.picture} alt="" className="index-image-user"/>
                    <p className="name">{props.user.firstName} {props.user.lastName}</p>
            </div>
            <div className="data-user">
                    <p className="data">title: {props.user.title}</p>
                    <p className="data">Gender: {props.user.gender}</p>
                    <p className="data">Email: {props.user.email}</p>
                    <p className="data">Phone: {props.user.phone}</p>
            </div>
        </div>
  
    )
}
export default Letters