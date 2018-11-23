import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap';
import classes from './Layout.css';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

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