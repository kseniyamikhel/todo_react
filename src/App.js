import React from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import TodoApp from './TodoApp';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
    render(){
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
