import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap';
import classes from './Layout.css';
import Navigation from '../../component/Navigation/Navigation';
import Header from '../../component/Header/Header';

class Layout extends Component { 
    render(){
        return (
            <Wrap>
                <Header/>
                <Navigation/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout