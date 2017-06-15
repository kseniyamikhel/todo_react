import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
        console.log(this.props);
        console.log(this.props.todoStore);
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
        const todos = this.props.todoStore.filter((todo, index) => index !== todoIndex);
        this.props.deleteHandler(todos);
    }
    render(){

        return(
            <div>
                <TodoList removeTodoItem={this.removeTodoItem} todos={this.props.todoStore} />
                <TodoForm onSubmitHandler={this.onSubmitHandler} />
            </div>
        )
    }
}
TodoApp.propTypes = {
    todoStore: PropTypes.array.isRequired
};
export default TodoApp;