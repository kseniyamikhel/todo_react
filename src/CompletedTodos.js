import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCompletedTodos, getIncompletedTodos} from './selectors';
import {List, ListItem} from 'material-ui/List';

class CompletedTodos extends React.Component {
    render(){
        if(this.props.completedTodos.length > 0){
            return(
                <div>
                    <h2>List of completed tasks</h2>
                    <List>
                        {this.props.completedTodos.map((todo, index) => (
                                <ListItem
                                    primaryText={todo.title}
                                    secondaryText={<p><span>{todo.deadline}</span> | <span>{todo.category}</span></p>}
                                    key={index}
                                />
                            ))}
                    </List>
                </div>
            )
        }
        return(
            <h2>You don't have completed tasks yet</h2>
        )
    }
}
CompletedTodos.propTypes = {
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
    dispatch => ({})
)(CompletedTodos);