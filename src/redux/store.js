import { applyMiddleware ,combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userIndex from './reducers/userIndexReducer';
import showMenu from './reducers/menuReducer';
import userShow from './reducers/showUserReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    userIndex,
    showMenu,
    userShow
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)
export default store 