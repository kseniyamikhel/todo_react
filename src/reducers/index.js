import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from "./todos";



const reducers = combineReducers({
    todos,
    router: routerReducer
});

export default reducers;