import { createSelector } from 'reselect/src';

const getTodos = (state) => state.todos;

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.done === true),
);
export const getIncompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.done === false),
);
