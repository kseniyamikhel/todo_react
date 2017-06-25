import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {List} from 'material-ui/List';

class TodoList extends React.Component {

    render(){
        const {removeTodoItem, incompletedTodos, completeTodo} = this.props;
        if(incompletedTodos.length > 0){
            return (
                <div>
                    <h2>You have {incompletedTodos.length} things to do:</h2>
                        <List>
                            {incompletedTodos.map((todo) => (
                                <TodoItem
                                    completeTodo={completeTodo}
                                    removeTodoItem={removeTodoItem}
                                    todo={todo}
                                    key={todo.id}
                                />)
                            )}
                        </List>
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
    incompletedTodos: PropTypes.array.isRequired,
    completeTodo: PropTypes.func.isRequired
};
export default TodoList;