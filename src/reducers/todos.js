import {ADD_TODO, DELETE_TODO} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case DELETE_TODO:
            state = action.state;
            return state;
        default:
            return state;
    }
}
