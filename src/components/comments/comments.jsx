import React from 'react';
import './comments.scss'
const Comments = (props) => {
    return(
        <div className="comments">
            <div className="container-date-user-comments">
                <img src={props.comments.owner.picture} alt="img" className="image-user-comments"/>
                <p className="container-data-user-full-name">
                    {props.comments.owner.firstName} {props.comments.owner.lastName}
                </p>
            </div>
            <div className="container-email">
                <p className="email">{props.comments.owner.email}</p>
            </div>
            <div className="container-text-comment">
                <p className="comment-text">
                    {props.comments.message}

                </p>
            </div>
        </div>
    )
}
export default Comments