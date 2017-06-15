import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandlerDone = this.onClickHandlerDone.bind(this);
        this.onClickHandlerDelete = this.onClickHandlerDelete.bind(this);
        this.state = {
            done: false
        }
    }
    onClickHandlerDone(e){
        this.setState({done: !this.state.done});
    }
    onClickHandlerDelete(e){
        this.props.removeTodoItem(this.props.index);
    }
    render(){
        return(
            <li>
                <span className={this.state.done ? "done" : ""} onClick={this.onClickHandlerDone}>
                    {this.props.todo.text}
                </span>
                <button onClick={this.onClickHandlerDelete} className="delButton" type="button">x</button>
            </li>
        )
    }
}
TodoItem.propTypes = {
    removeTodoItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired
};
export default TodoItem;