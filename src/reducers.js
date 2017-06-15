import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function reducer (state = [], action){
    if(action.type === 'ADD_TODO'){
        return(
            [...state, action.todo]
        );
    } else if (action.type === 'DELETE_TODO'){
        state = action.state;
        return state;
    }
    return state;
}

const reducers = combineReducers({
    reducer,
    router: routerReducer
});

export default reducers;