import React from 'react';
import { connect } from 'react-redux';
import './pagination.scss';
import {setPaginationIncrement,
        setPaginationDecrement} from '../../redux/action/pagination/paginationAction';
import getIndex from '../../redux/action/getUsers/getUsersIndexAction'
const Pagination = (props) => {
    return (
        <div className="container-pagination">
            <ul className="ul-container">
                <li className="li-index" id="id-look-out" 
                onClick={(e)=>{props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionOne}&limit=10`))}}>
                    {props.pagination.positionOne}
                    </li>
                <li className="li-index" 
                onClick={(e)=>{props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionTwo}&limit=10`))}}>
                    {props.pagination.positionTwo}
                </li>
                <li className="li-index"
                onClick={(e)=>{props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionThree}&limit=10`))}}> 
                    {props.pagination.positionThree}
                </li>
            </ul>
        </div>
    )
}

const MapStateToProps = (state)=> {
    return{
        pagination:state.pagination
    }
}
const MapDispatchToProps = (dispatch)=> {
    return {
        setPaginationIncrement,
        setPaginationDecrement,
        getIndex,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Pagination)