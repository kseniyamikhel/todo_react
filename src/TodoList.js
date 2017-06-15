import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    render(){
        const {removeTodoItem, todos} = this.props;

        if(todos.length > 0){
            return (
                <div>
                    <h2>You have {todos.length} things to do:</h2>
                    <ol>
                        {todos.map((todo, index) => (
                            <TodoItem removeTodoItem={removeTodoItem} index={index} todo={todo} key={index} />)
                        )}
                    </ol>
                </div>
            )
        }
        return (
            <div>
                <h2>Add something to do:</h2>
            </div>
        )
    }
}
TodoList.propTypes = {
    removeTodoItem: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
};
export default TodoList;