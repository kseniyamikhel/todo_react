import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import UUID from '../node_modules/uuid-js';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        const minDate = new Date();
        this.state = {
            minDate: minDate,
            value: null
        }
    }
    onSubmitHandler(e){
        e.preventDefault();
        let category = "";
        switch(this.state.value){
            case 1: {
                category = "Work";
                break;
            }
            case 2: {
                category = "Home";
                break;
            }
            case 3: {
                category = "Study";
                break;
            }
            case 4: {
                category = "Travel";
                break;
            }
            case 5: {
                category = "Other";
                break;
            }
            default: category = "Other";
        }
        const title = e.target.elements.todo.value;
        const deadline = e.target.elements.deadline.value;
        const done = false;
        let id = UUID.create();
        id = id.hex;
        const todo = {id, title, category, deadline, done};
        this.props.addTodoToStore(todo);
        e.target.elements.todo.value = "";
        e.target.elements.todo.focus();
        this.setState({value: ""});
        //e.target.elements.deadline.value = "";
    }
    handleChange = (event, index, value) => this.setState({value});
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <TextField name="todo" hintText="Title" fullWidth={true} required/>
                <SelectField
                    name="category"
                    hintText="Category"
                    fullWidth={true}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Work" />
                    <MenuItem value={2} primaryText="Home" />
                    <MenuItem value={3} primaryText="Study" />
                    <MenuItem value={4} primaryText="Travel" />
                    <MenuItem value={5} primaryText="Other" />
                </SelectField>
                <DatePicker minDate={this.state.minDate} name="deadline" hintText="Deadline" fullWidth={true} />
                <RaisedButton label="Add TODO" primary={true} fullWidth={true} type="submit" />
            </form>
        )
    }
}
TodoForm.propTypes = {
    addTodoToStore: PropTypes.func.isRequired
};
export default TodoForm;