import { applyMiddleware ,combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userIndex from './reducers/userIndexReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    userIndex
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)
export default store 