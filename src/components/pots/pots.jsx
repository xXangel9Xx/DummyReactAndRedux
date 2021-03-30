import React from 'react';
import './pots.scss'
const Pots = (props) => {
    return(
        <div className="pots">
            <div className="container-image-pots">
                <img src={props.pots.image} alt="" className="image-pots"/>                
            </div>


            <div className="data-pots">
                <p className="data-pots text-data">date:{props.pots.publishDate}</p>
                <br/>
                <p className="data-pots text-data">Description:{props.pots.text}</p>
                <p className="data-pots">likes: {props.pots.likes}</p>
            </div>
        </div>
    )
}
export default Pots