import React from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import TodoApp from './TodoApp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends React.Component {
    render(){
        console.log(this.props.todoStore.reducer);
        return(
                <div>
                    <Menu />
                    <hr />
                    <Route exact path='/' component={Home}/>
                    <Route path='/todoapp' component={TodoApp}/>
                </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        todoStore: state
    }),
    dispatch => ({
        submitHandler: (todoText) => {
         dispatch({ type: 'ADD_TODO', todo: todoText });
        },
        deleteHandler: (todos) => {
            dispatch({ type: 'DELETE_TODO', state: todos });
        }
    })
)(App));