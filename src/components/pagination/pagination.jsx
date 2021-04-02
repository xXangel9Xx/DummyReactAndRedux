import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './pagination.scss';
import getIndex from '../../redux/action/getUsers/getUsersIndexAction';
import changeColorPagination from '../../pages/index/utils/changeColorPagination'
import ArrowRight from './arrowRight/arrowRight';
import ArrowLeft from './arrowLeft/arrowLeft';
const Pagination = (props) => {
    return (
        <div className="container-pagination">
            <ArrowLeft 
                classNameLiIndex="li-index"
                idNameLiIndex="id-look-out"
            />
                <ul className="ul-container">
                    <li className="li-index" id="id-look-out" 
                        value={0}
                        onClick={(e)=>{props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionOne}&limit=10`))
                        changeColorPagination('li-index','id-look-out',0)
                }}>
                        {props.pagination.positionOne}
                    </li>
                    <li className="li-index"
                        value={1} 
                        onClick={(e)=>{
                        props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionTwo}&limit=10`))
                        changeColorPagination('li-index','id-look-out',1)
                }}>
                        {props.pagination.positionTwo}
                    </li>
                    <li className="li-index"
                        value={2}
                        onClick={(e)=>{props.dispatch(props.getIndex(`https://dummyapi.io/data/api/user?page=${props.pagination.positionThree}&limit=10`))
                        changeColorPagination('li-index','id-look-out',2)
                }}> 
                        {props.pagination.positionThree}
                    </li>
                </ul>
            <ArrowRight 
                classNameLiIndex="li-index"
                idNameLiIndex="id-look-out"
            />
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
        getIndex,
        dispatch
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Pagination)