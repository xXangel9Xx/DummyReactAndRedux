import React from 'react';
import './dataPerfil.scss';
import moment from 'moment';
const DataPerfil = (props) => {
    return(
        <div className="container-data-perfil">
            <div className="container-image-perfil">
                <img src={props.user.picture} alt="img" className="image-perfil"/>                
            </div>
            <div className="container-details">
                <p className="details">Name: {props.user.firstName} {props.user.lastName}</p>
                <p className="details">Gender: {props.user.gender}</p>
                <p className="details">Email: {props.user.email}</p>
                <p className="details">Title: {props.user.title}</p>
                <p className="details">Phone: {props.user.phone}</p>
                <p className="details">Register: {moment(props.user.registerDate,'DD-MM-YYYY').format('L')}</p>
                <p className="details">Date of Birth: {moment(props.user.dateOfBirth,'DD-MM-YYYY').format('L')}</p>
            </div>
        </div>
    )
}
export default DataPerfil