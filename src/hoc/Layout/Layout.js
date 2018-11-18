import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap';
import classes from './Layout.css';

class Layout extends Component { 
    render(){
        return (
            <Wrap>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout