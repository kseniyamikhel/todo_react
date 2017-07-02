import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.onCheckDone = this.onCheckDone.bind(this);
        this.onClickHandlerDelete = this.onClickHandlerDelete.bind(this);
        this.state = {
            value: null
        };
    }
    onCheckDone(e){
        this.props.completeTodo(this.props.todo.id);
    }
    onClickHandlerDelete(e){
        this.props.removeTodoItem(this.props.todo.id);
    }
    handleChange = (event, value) => {
        this.setState({
            value: value
        })
    };
    render(){

        return(
            <ListItem
                leftCheckbox={<Checkbox onCheck={this.onCheckDone} />}
                primaryText={this.props.todo.title}
                secondaryText={<p><span>{this.props.todo.deadline}</span> | <span>{this.props.todo.category}</span></p>}
                rightIconButton={
                    <IconMenu
                        iconButtonElement={<IconButton
                            touch={true}
                            tooltip="more"
                            tooltipPosition="bottom-left"
                        >
                            <MoreVertIcon />
                        </IconButton>}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <MenuItem value="1" onClick={this.onClickHandlerDelete}>Delete</MenuItem>
                    </IconMenu>
                }

            />
        )
    }
}

TodoItem.propTypes = {
    removeTodoItem: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};
export default TodoItem;