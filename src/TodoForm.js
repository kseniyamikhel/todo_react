import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <input type="text" name="todo" />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}
TodoForm.propTypes = {
    onSubmitHandler: PropTypes.func.isRequired
};
export default TodoForm;