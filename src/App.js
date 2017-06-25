import React from 'react';
import './App.css';
import MenuNav from './MenuNav';
import Home from './Home';
import TodoApp from './TodoApp';
import CompletedTodos from './CompletedTodos';
import AppBar from 'material-ui/AppBar';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
    render(){
        return(
                <div>
                    <MenuNav />
                    <div className="content">
                        <AppBar showMenuIconButton={false} title="ToDo App" />
                        <hr />
                        <Route exact path='/' component={Home}/>
                        <Route path='/todoapp' component={TodoApp}/>
                        <Route path='/completed' component={CompletedTodos}/>
                    </div>
                </div>
        )
    }
}
