import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCompletedTodos, getIncompletedTodos} from './selectors';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.addTodoToStore = this.addTodoToStore.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }
    addTodoToStore(todo){
        this.props.submitHandler(todo);
    }
    removeTodoItem(todoID){
        this.props.deleteHandler(todoID);
    }
    completeTodo(todoID){
        this.props.completeHandler(todoID);
    }
    render(){
        return(
            <div>
                <TodoList
                    completeTodo={this.completeTodo}
                    removeTodoItem={this.removeTodoItem}
                    incompletedTodos={this.props.incompletedTodos}
                />
                <TodoForm addTodoToStore={this.addTodoToStore} />
            </div>
        )
    }
}
TodoApp.propTypes = {
    incompletedTodos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            deadline: PropTypes.string,
            done: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
    completedTodos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            deadline: PropTypes.string,
            done: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};

export default connect(
    state => ({
        incompletedTodos: getIncompletedTodos(state),
        completedTodos: getCompletedTodos(state)
    }),
    dispatch => ({
        submitHandler: (todo) => {
            dispatch({ type: 'ADD_TODO', todo: todo });
        },
        deleteHandler: (todoID) => {
            dispatch({ type: 'DELETE_TODO', index: todoID });
        },
        completeHandler: (todoID) => {
            dispatch({ type: 'COMPLETE_TODO', index: todoID })
        }
    })
)(TodoApp);