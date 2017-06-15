import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todoapp">TodoApp</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;