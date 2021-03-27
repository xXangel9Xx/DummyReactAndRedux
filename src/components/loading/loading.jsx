import React from 'react';
import './loading.scss';
import LoadingGif from '../../assets/509258_fb107.gif'
const Loading = (props) => {
    return(
            <div className="container-loading">
                <img src={LoadingGif} alt="Loading" className="loading"/>
            </div>
    )
}
export default Loading