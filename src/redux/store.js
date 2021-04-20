import { applyMiddleware ,combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userIndex from './reducers/userIndexReducer';
import showMenu from './reducers/menuReducer';
import userShow from './reducers/showUserReducer';
import postsUser from './reducers/postsReducer';
import commentsUser from './reducers/commentsReducer';
import idUser from './reducers/idUserReducer'
import pagination from './reducers/paginationReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    userIndex,
    showMenu,
    userShow,
    postsUser,
    commentsUser,
    idUser,
    pagination
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)
export default store 