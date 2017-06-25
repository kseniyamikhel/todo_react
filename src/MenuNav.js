import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class MenuNav extends React.Component{
    render(){
        return(
            <div>
                <Drawer width={280}>
                    <Menu style={{width: '256px'}}>
                        <Link className="link" to="/"><MenuItem primaryText="Home" /></Link>
                        <Link className="link" to="/todoapp"><MenuItem>TodoApp</MenuItem></Link>
                        <Link className="link" to="/completed"><MenuItem>Completed Tasks</MenuItem></Link>
                    </Menu>
                </Drawer>
            </div>
        )
    }
}

export default MenuNav;