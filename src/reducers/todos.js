import {ADD_TODO, DELETE_TODO, COMPLETE_TODO} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.index);
        case COMPLETE_TODO: {
            const todoID = action.index;
            return state.map((todo) => {
                if (todo.id !== todoID) {
                    return todo;
                } else {
                    return {...todo, done: true};
                }
            });
        }
        default:
            return state;
    }
}
