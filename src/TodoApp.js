import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }
    onSubmitHandler(e){
        e.preventDefault();
        const text = e.target.elements.todo.value;
        const todo = {text};
        this.props.submitHandler(todo);
        e.target.reset();
        e.target.elements.todo.focus();
    }
    removeTodoItem(todoIndex){
        const todos = this.props.todos.filter((todo, index) => index !== todoIndex);
        this.props.deleteHandler(todos);
    }
    render(){

        const {todos} = this.props;
        return(
            <div>
                <TodoList removeTodoItem={this.removeTodoItem} todos={todos} />
                <TodoForm onSubmitHandler={this.onSubmitHandler} />
            </div>
        )
    }
}
TodoApp.propTypes = {
    todos: PropTypes.array.isRequired
};

export default connect(
    state => ({
        todos: state.todos
    }),
    dispatch => ({
        submitHandler: (todoText) => {
            dispatch({ type: 'ADD_TODO', todo: todoText });
        },
        deleteHandler: (todos) => {
            dispatch({ type: 'DELETE_TODO', state: todos });
        }
    })
)(TodoApp);